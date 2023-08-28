import { useState, useEffect } from 'react'
import useUsersScore from '../../lib/useUsersScore'
import Layout from '../../components/Layout'
import { getUserId, getUsername } from '../../lib/userAuth'

function GolfersDetails() {

  const [ userName, setUsername ] = useState('')
  const [ userId, setUserId ] = useState('')
  const { scores } = useUsersScore(userId)

  useEffect(() => {
    setUserId(getUserId())
    setUsername(getUsername())
  }, [])

  return (
    <Layout>
      <div className="flex items-center flex-col">
        <h1 className="text-2xl my-8">{`Hello ${userName}`}</h1>
        <p className="p-5 text-xl">Here are your scores:</p>
        <table className="table-auto border border-spacing-2 border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 p-5">Date</th>
              <th className="border border-slate-600 p-5">Score</th>
            </tr>
          </thead>
          <tbody>
            {scores &&
              scores.map(score => (
                <tr className="w-auto" key={score.id}>
                  <td className="border border-slate-600 p-5">
                    {score.played_at}
                  </td>
                  <td className="border border-slate-600 p-5">
                    {score.total_score}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default GolfersDetails
