'use client'
import { useState } from 'react'

export default function Chatbot() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
    })
    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <div className="my-4 w-full max-w-xl">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Pose ta question à l'IA..."
        className="border p-2 w-full mb-2"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2 w-full">
        Envoyer
      </button>
      {response && <div className="mt-4 bg-gray-100 p-2 rounded">{response}</div>}
    </div>
  )
}
