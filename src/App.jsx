import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import Navbar from "./components/Navbar";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [prompt, setPrompt] = useState("");
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRes = async () => {
    if (prompt.trim() === "") {
      alert("You must describe your video topic..!");
      return;
    }

    try {
      setLoading(true);

      // Initialize Gemini client (API key comes from env)
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      });

      // Generate response
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Give a complete video script for the video which is: ${prompt}`,
      });

      setRes(response.text);
    } catch (error) {
      console.error("Error generating script:", error);
      alert("Something went wrong. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Title */}
      <div className="flex items-center justify-center flex-col min-h-[30vh]">
        <h2
          style={{ lineHeight: 1 }}
          className="text-[50px] font-[500] text-center"
        >
          A Free <span className="text-purple-600">AI</span> Tool For Generating
          The <br /> Video Script
        </h2>
      </div>

      {/* Input Section */}
      <div className="textarea flex items-center justify-center flex-col mt-[10px]">
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          name="prompt"
          className="bg-[#f4f4f4] border-0 outline-0 min-w-[50vw] min-h-[130px] p-[20px] rounded-[10px]"
          id="prompt"
          placeholder="Describe your video topic."
        ></textarea>
        <button
          onClick={generateRes}
          disabled={loading}
          className="gen p-[10px] bg-purple-600 text-white rounded-[10px] mt-[20px] min-w-[200px] transition-all duration-300 hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* Result Section */}
      {res && (
        <div className="res my-[40px] px-[100px]">
          <Markdown remarkPlugins={[remarkGfm]}>{res}</Markdown>
        </div>
      )}
    </>
  );
}

export default App;
