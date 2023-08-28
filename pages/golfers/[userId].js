import { useRouter } from 'next/router'
import useUsersScore from '../../lib/useUsersScore'
import Layout from '../../components/Layout'

function GolfersDetails() {
  const router = useRouter()
  const { userId } = router.query
  const { scores } = useUsersScore(userId)

  return (
    <Layout>
      <div className="flex items-center flex-col">
        <p className="p-5 text-xl">Here are {scores && scores[0].user_name} scores:</p>
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
