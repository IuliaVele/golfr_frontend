import Layout from '../components/Layout'
import ScorePostWidget from '../components/ScorePostWidget'
import ScoreCard from '../components/ScoreCard'
import UserCard from '../components/UserCard'
import useScores from '../lib/useScores'

const Home = () => {
  const { scores, error } = useScores()

  const usersIds = scores &&
    [ ...new Map(scores.map(score => [ score.user_id, score.user_name ])) ]
  // scores.map(score => [ score.user_id, score.user_name ]).values()

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget />
            {usersIds && usersIds.map(user => (
              <UserCard
                key={user[0]}
                userId={user[0]}
                userName={user[1]}
              />
            ))}
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Home
