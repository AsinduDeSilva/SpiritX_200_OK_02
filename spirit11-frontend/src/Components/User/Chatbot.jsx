import React, { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.toLowerCase().includes("best team")) {
      setResponse("Suggested team: Danushka Kumara, Jeewan Thirimanne, Charith Shanaka, ...");
    } else if (query.trim() === "") {
      setResponse("Please ask a question.");
    } else {
      setResponse("I don’t have enough knowledge to answer that question.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Spiriter Chatbot</h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-4"
            placeholder="Ask a question about a player or team..."
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Ask
          </button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
