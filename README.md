# Netto.codes - Portfólio Profissional

Portfólio profissional da marca **Netto.codes**, desenvolvido com Next.js, TypeScript e Sass. Um showcase moderno e responsivo para soluções digitais Full Stack.

## 🚀 Sobre a Netto.codes

**Código com propósito. Soluções que conectam.**

A Netto.codes é uma marca especializada em desenvolvimento Full Stack, focada em criar experiências digitais impactantes e eficientes. Nossa missão é capacitar empresas e criadores com soluções digitais modernas, construídas com excelência técnica e visão de futuro.

### Valores da Marca
- **Inovação**: Sempre buscando as melhores tecnologias e soluções criativas
- **Clareza**: Comunicação transparente e código limpo e bem documentado
- **Transparência**: Processo aberto e feedback constante durante todo o projeto
- **Performance**: Código otimizado e aplicações rápidas e eficientes
- **Design**: Interfaces modernas e experiências de usuário excepcionais
- **Resultados**: Foco em entregar valor real e atingir objetivos de negócio

## 🎨 Design System

### Paleta de Cores
- **Azul Cobalto**: `#1E40AF` (cor primária)
- **Cinza Antracito**: `#1C1C1C` (background escuro)
- **Verde Fluorescente**: `#00FFB3` (destaques)
- **Branco Neve**: `#F9FAFB` (texto)
- **Cinza Claro**: `#D1D5DB` (detalhes)

### Tipografia
- **Títulos**: Space Grotesk
- **Códigos e destaques técnicos**: Fira Code
- **Corpo do texto**: Inter

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Sass/SCSS
- **Fontes**: Google Fonts (Space Grotesk, Fira Code, Inter)
- **Animações**: CSS Animations + Intersection Observer
- **Deploy**: Vercel (recomendado)

## 📁 Estrutura do Projeto

```
netto-codes-portfolio/
├── app/
│   ├── globals.scss          # Estilos globais e variáveis CSS
│   ├── layout.tsx            # Layout principal com fontes
│   └── page.tsx              # Página principal
├── components/
│   ├── Header/               # Navegação principal
│   ├── Hero/                 # Seção de apresentação
│   ├── About/                # Sobre a marca e valores
│   ├── Projects/             # Portfólio de projetos
│   ├── Contact/              # Formulário de contato
│   └── Footer/               # Rodapé com informações
├── next.config.js            # Configuração do Next.js
├── package.json              # Dependências do projeto
└── README.md                 # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/ivonetto/netto-codes-portfolio.git
cd netto-codes-portfolio
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Funcionalidades

### Header
- Navegação suave entre seções
- Menu mobile responsivo
- Logo animado da Netto.codes
- CTA "Vamos Conversar"

### Hero
- Apresentação da marca
- Animação de texto dinâmico
- Estatísticas animadas
- Cards flutuantes com valores
- Partículas animadas

### About
- Missão e visão da marca
- Valores fundamentais
- Skills técnicas com barras animadas
- Bloco de código estilizado
- Estatísticas da empresa

### Projects
- Grid de projetos responsivo
- Filtros por categoria
- Cards com hover effects
- Badges de destaque
- Links para GitHub e demo

### Contact
- Formulário de contato completo
- Informações de contato
- Lista de serviços oferecidos
- Validação de campos
- Feedback visual de envio

### Footer
- Logo e descrição da marca
- Links de navegação
- Redes sociais
- Informações de contato
- Links legais

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `app/globals.scss`:

```scss
:root {
  --primary-color: #1E40AF;
  --accent-color: #00FFB3;
  --background-dark: #1C1C1C;
  // ... outras variáveis
}
```

### Conteúdo
- **Hero**: Edite o nome, descrição e estatísticas em `components/Hero/Hero.tsx`
- **About**: Atualize missão, visão e valores em `components/About/About.tsx`
- **Projects**: Adicione seus projetos em `components/Projects/Projects.tsx`
- **Contact**: Configure informações de contato em `components/Contact/Contact.tsx`

### Fontes
Altere as fontes em `app/layout.tsx`:

```typescript
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'
```

## 📦 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas
O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento local
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de submeter um pull request.

## 📞 Contato

- **Email**: ivo@netto.codes
- **LinkedIn**: [linkedin.com/in/ivonetto](https://linkedin.com/in/ivonetto)
- **GitHub**: [github.com/ivonetto](https://github.com/ivonetto)
- **WhatsApp**: +55 (11) 99999-9999

---

**Desenvolvido com ❤️ por Ivo Netto - Netto.codes** 