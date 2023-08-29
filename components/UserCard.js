import Link from 'next/link'

const UserCard = ({ userId, userName }) =>
  (
    <div className="flex flex-row p-3 my-4 shadow-md lg:w-1/3 md:w-1/2">
      <div className="w-5/6">
        <p>
          {userName}
        </p>
      </div>
      <div className="w-1/6">
        <div className="flex items-center justify-center h-full w-full">
          <Link href={`/golfers/${userId}`}>see details</Link>
        </div>
      </div>
    </div>
  )

export default UserCard
