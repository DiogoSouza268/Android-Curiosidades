# Projeto: Curiosidades de Tecnologia

Este projeto é um site estático sobre curiosidades de tecnologia, com páginas em HTML, estilos em CSS e alguns scripts em JavaScript.

## Estrutura de Pastas

- `index.html` — página principal do site
- `src/`
  - `css/`
    - `index.css`
    - `noticias.css`
    - `curiosidades.css`
    - `Fale_Conosco.css`
  - `js/`
    - `noticias.js`
  - `pages/`
    - `noticias.html`
    - `curiosidades.html`
    - `Fale_Conosco.html`
  - `imagens/` — recursos de imagens usados nas páginas
  - `fontes/` — fontes utilizadas no site

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. Navegue pelas páginas usando o menu de navegação.

## Observações

- O site usa links relativos para navegação entre as páginas.
- O arquivo `index.html` é a porta de entrada e referencia os estilos em `src/css/`.
  
**- Para rodar as noticias da pagina de niticas adicione sua própria API_KEY do Google Gemini em `config.js`.**

- Os scripts em `src/js/` são usados para funcionalidades específicas, como a geração de notícias usando uma API do googe gemini.
- As imagens e fontes estão organizadas em suas respectivas pastas para fácil acesso e manutenção.

- O site é responsivo e deve funcionar bem em diferentes tamanhos de tela, graças ao uso de media queries no CSS.
- Certifique-se de ter uma conexão com a internet para carregar quaisquer recursos externos, como fontes do Google Fonts ou APIs usadas nos scripts.

