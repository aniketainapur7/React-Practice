import { useState,useEffect,useCallback } from "react";
export function Comp() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-{}[]|/?+=`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    alert("Copied to clipboard!");
  };
    return <div className="justify-center items-center shadow-md rounded-lg p-6 bg-gray-600">
    <h1 className="text-white text-center text-xl font-bold mb-4">Password Generator</h1>
    <div className="flex shadow rounded-lg mb-4">
      <input
        type="text"
        
        value={password}
        placeholder="Password"
        className="outline-none w-full py-2 px-3 text-black font-medium bg-amber-50"
        readOnly
      />
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2"
        onClick={copyToClipboard}
      >
        Copy
      </button>
    </div>
    <div className="flex flex-col space-y-3">
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className="text-white">Length: {length}</label>
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={numAllowed}
          id="numAllowed"
          onChange={() => setNumAllowed((prev) => !prev)}
        />
        <label className="text-white">Include Numbers</label>
      </div>

      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={charAllowed}
          id="charAllowed"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label className="text-white">Include Special Characters</label>
      </div>
    </div>
  </div>
}