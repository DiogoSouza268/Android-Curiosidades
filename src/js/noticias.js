import { API_KEY } from "./config.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);

async function carregarNoticias() {
  const container = document.getElementById("noticias-container");
  
  const CACHE_KEY = "android_news_data";
  const CACHE_TIME_KEY = "android_news_timestamp";
  const UMA_HORA = 60 * 60 * 1000; 

  try {
    const noticiasSalvas = localStorage.getItem(CACHE_KEY);
    const últimaAtualização = localStorage.getItem(CACHE_TIME_KEY);
    const agora = new Date().getTime();

    if (noticiasSalvas && últimaAtualização && (agora - últimaAtualização < UMA_HORA)) {
      console.log("🚀 Exibindo notícias do cache (Economizando sua API)");
      container.innerHTML = noticiasSalvas;
      return; 
    }

    console.log("📡 Buscando novidades no servidor do Google...");
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = "Liste as 5 notícias mais importantes e recentes sobre Android de hoje. " +
                   "Para cada uma, crie um título chamativo e um resumo técnico de até 8 linhas. " +
                   "Retorne o resultado formatado apenas com as tags HTML <h2> e <p>.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    localStorage.setItem(CACHE_KEY, text);
    localStorage.setItem(CACHE_TIME_KEY, agora.toString());

    container.innerHTML = text;
    console.log("✅ Conteúdo atualizado com sucesso!");

  } catch (error) {
    console.error("❌ Erro detalhado:", error);
    
    if (error.message.includes("429")) {
      container.innerHTML = "<p>O limite de testes foi atingido. Aguarde um minuto e recarregue a página.</p>";
    } else {
      container.innerHTML = "<p>Ops! Tivemos um problema ao carregar as notícias. Tente novamente.</p>";
    }
  }
}

carregarNoticias();