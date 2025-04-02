import { useState } from "react";
import './index.css'
import './App.css'

function App() {
  const [color, setColor] = useState("olive"); // Default color

  return (
    <div 
      className="w-full min-h-screen flex flex-col justify-center items-center" 
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white text-center p-10 text-2xl font-bold">
        Background Color: {color}
      </h1>

      {/* Buttons to change color */}
      <div className="flex justify-center space-x-4 mt-5">
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setColor("red")}>Red</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setColor("blue")}>Blue</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setColor("green")}>Green</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setColor("olive")}>Olive</button>
      </div>

      <div className="bg-red-500 text-white text-3xl font-bold p-10">
      If this text is red, Tailwind is working! 🚀
    </div>

    </div>

  );
}

export default App;
