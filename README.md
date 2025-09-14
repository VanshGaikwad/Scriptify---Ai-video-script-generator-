# Scriptify

Scriptify is a free AI-powered tool for generating complete video scripts based on your topic description. Built with React, Vite, and Google Gemini AI, Scriptify helps content creators quickly craft engaging scripts for their videos.

## Features

- ✨ Generate full video scripts using Google Gemini AI
- 📝 Markdown support for formatted script output
- ⚡ Fast and modern UI with React and Tailwind CSS
- 🔒 API key managed securely via environment variables

👉 **Live Demo:** [https://scriptify-app.netlify.app](https://scriptify-app.netlify.app)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/scriptify.git
   cd scriptify
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your API key:**
   - Copy your Google Gemini API key into a `.env` file:
     ```
     VITE_GEMINI_API_KEY="your-gemini-api-key"
     ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to use Scriptify.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
scriptify/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)


## Author

Vansh Gaikwad [https://github.com/vanshgaikwad](https://github.com/vanshgaikwad)

## License

This project is licensed under the MIT License.

---

Made with ❤️ for creators.
