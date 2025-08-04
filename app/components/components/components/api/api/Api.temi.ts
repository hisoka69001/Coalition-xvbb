// api/temu.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = [
      { title: 'Casque Gaming RGB', price: 29.99 },
      { title: 'Mini Aspirateur USB', price: 12.50 },
      { title: 'Lampe LED Intelligente', price: 19.90 }
    ]
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des produits Temu' })
  }
}
