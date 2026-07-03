import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3000;
const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "openai/gpt-oss-120b:free"; // Modelo exigido na atividade

if (!API_KEY) {
  console.error("Erro: configure OPENROUTER_API_KEY no arquivo .env.");
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/llm", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    
    // Validação da entrada do usuário
    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).json({ erro: "O campo prompt é obrigatório." });
    }
    if (prompt.length > 2000) {
      return res.status(400).json({ erro: "Limite: 2000 caracteres." });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-OpenRouter-Title": "CodeTutor FIA"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: "Você é um professor de lógica de programação didático. ATENÇÃO: Sua área de conhecimento é ESTRITAMENTE programação, algoritmos, tecnologia e lógica. SE o aluno perguntar sobre QUALQUER outro assunto (ex: receitas, esportes, história, conselhos pessoais), VOCÊ DEVE RECUSAR a resposta informando educadamente que o seu propósito é ensinar apenas programação e você não pode ajudar com outros temas. SE a pergunta for de programação, responda estruturado em três partes: 1) Explicação conceitual usando analogias. 2) Exemplo de código. 3) Exercício de fixação."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.5, // Diminuímos um pouco a temperatura para ele seguir a regra com mais rigor
        max_completion_tokens: 700
      })
    });

    if (!response.ok) {
      const detalhe = await response.text();
      return res.status(502).json({ erro: "Erro ao consultar o OpenRouter.", status: response.status, detalhe });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;

    if (!text) {
      return res.status(502).json({ erro: "Resposta vazia ou inesperada." });
    }

    res.json({ modelo: MODEL, resposta: text });
  } catch (error) {
    res.status(500).json({ erro: "Erro interno no servidor.", detalhe: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});