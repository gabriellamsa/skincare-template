# AURA - Landing Page de Skincare Natural

Uma landing page moderna e responsiva especializada em produtos de skincare natural e orgânico. O projeto apresenta um design minimalista com paleta de cores coral pastel, focando na experiência do usuário e conversão.

## ✨ Características

- **Design Minimalista**: Interface limpa e moderna com paleta coral pastel
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido com Next.js 15
- **SEO Friendly**: Meta tags e estrutura otimizada para busca
- **Acessibilidade**: Design inclusivo e navegação intuitiva

## 🎨 Seções da Landing Page

### 🏠 **Hero Section**

- Apresentação da marca com call-to-action principal
- Imagem impactante e mensagem clara
- Botões de ação direcionando para produtos

### 🛍️ **Catálogo de Produtos**

- **Hidratante Natural**: Com ácido hialurônico e óleos essenciais
- **Sérum Antioxidante**: Vitamina C e ingredientes naturais
- **Kit Completo**: Pacote completo para rotina de skincare
- Informações detalhadas, ingredientes e opções de parcelamento

### 👥 **Depoimentos**

- Testimonials reais de clientes
- Sistema de avaliação com estrelas
- Credibilidade e confiança da marca

### 📖 **Sobre a AURA**

- Missão da marca e valores
- Estatísticas de clientes e avaliações
- Diferenciais dos produtos naturais

### 📞 **Call-to-Action**

- Seção final incentivando compra
- Botões de ação direcionados
- Estatísticas da marca

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Estilização utilitária e responsiva
- **Next/Image** - Otimização automática de imagens
- **Componentes Modulares** - Arquitetura escalável e reutilizável

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm start
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**, garantindo experiência otimizada em:

- **📱 Mobile**: 320px - 768px
- **📱 Tablet**: 768px - 1024px
- **💻 Desktop**: 1024px+

## 🎨 Paleta de Cores

- **Coral Principal**: #f2ba91 (coral-500)
- **Coral Claro**: #fef9f5 (coral-50)
- **Coral Escuro**: #ca7235 (coral-900)
- **Cinza Neutro**: #f9fafb (gray-50)
- **Texto**: #111827 (gray-900)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e paleta coral
│   ├── layout.tsx           # Layout principal com metadata
│   └── page.tsx             # Página principal
├── components/
│   ├── Navigation.tsx       # Barra de navegação
│   └── sections/
│       ├── hero/            # Seção hero
│       ├── features/        # Características da marca
│       ├── products/        # Catálogo de produtos
│       ├── about/           # Sobre a AURA
│       ├── testimonials/    # Depoimentos
│       ├── cta/             # Call-to-action
│       └── footer/          # Rodapé
└── public/                  # Imagens e assets
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Deploy automático com Vercel
npx vercel
```

### Outras Plataformas

- **Netlify**: Conecte o repositório para deploy automático
- **Railway**: Deploy com Docker
- **AWS Amplify**: Deploy serverless

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Load JS**: 119 kB
- **Core Web Vitals**: Otimizado
- **Images**: Otimização automática com Next/Image

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ - Cuidados Naturais para Sua Pele
