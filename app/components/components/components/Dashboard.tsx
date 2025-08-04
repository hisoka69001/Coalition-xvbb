'use client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, messages: 0 })

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  return (
    <div className="mt-6 w-full max-w-xl bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">📈 Statistiques</h2>
      <p><strong>Total encaissé :</strong> {stats.total} €</p>
      <p><strong>Messages IA traités :</strong> {stats.messages}</p>
    </div>
  )
}
