import { useQuery } from '@apollo/client'
import { GET_USER } from '@/queries'
import { UserData } from '@/types'
import UserCard from './UserCard'
import StatsContainer from './StatsContainer'
import ForkedRepos from '../charts/ForkedRepos'
import PopularRepos from '../charts/PopularRepos'
import UsedLanguages from '../charts/UsedLanguages'
import Loading from './Loading'
type UserProfileProps = {
  userName: string
}

//userName which is state passed to the Userprofile
const UserProfile = ({ userName }: UserProfileProps) => {
  // fetchs the data,loading,error parameter's content from useQuery passing the username
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  })

  //if any fault in fetched data
  if (loading) return <Loading />

  if (error) return <h2 className="text-xl">{error.message}</h2>

  if (!data) return <h2 className="text-xl">User Not Found.</h2>

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user //data.user contains all these information

  return (
    <div>
      {/* just non-functioned /non -state props are passed to usercard */}
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />

      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />

      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  )
}
export default UserProfile
