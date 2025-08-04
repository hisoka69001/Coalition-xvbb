import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { amount } = req.body

  try {
    // Ici tu peux brancher Stripe ou PayPal avec leurs SDK respectifs
    // Simulation simple :
    const confirmation = {
      status: 'success',
      provider: 'Stripe/PayPal',
      amountReceived: amount
    }

    res.status(200).json(confirmation)
  } catch (error) {
    res.status(500).json({ error: 'Échec du paiement' })
  }
}
