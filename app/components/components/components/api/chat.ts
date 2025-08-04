import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const reply = await getAIResponse(message)
  return Response.json({ reply })
}

async function getAIResponse(msg: string): Promise<string> {
  // Appels vers OpenAI ou Hugging Face ici
  // Exemple simulé :
  return `🤖 Réponse IA à: "${msg}"`
}
