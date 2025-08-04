import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    // Simule des stats : en prod, tu les récupères depuis une DB
    const stats = {
      totalSales: 1297.50,          // Ventes en euros 💸
      totalRequests: 8421,          // Requêtes IA reçues 📈
      activeUsers: 312,             // Utilisateurs actifs 🧠
      conversionRate: 4.8           // % de conversion depuis l’IA 🎯
    }

    res.status(200).json(stats)
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
