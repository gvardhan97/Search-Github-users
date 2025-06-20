import { Button } from '../ui/button'
import { Card, CardTitle, CardDescription, CardHeader } from '../ui/card'

type UserCardProps = {
  avatarUrl: string
  name: string
  bio: string
  url: string
}

const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex-row gap-x-8 items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 h-36 rounded object-cover"
        />

        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || 'Ganesh'}</CardTitle>
          <CardDescription>
            {bio || 'Passionate about coding and technology'}
          </CardDescription>

          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
            {/* when clicked on follow it opensup that url which we fetched from the name we provided in searchbar*/}
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}
export default UserCard

// target='_blank' attribute makes the link open in a new browser tab.....rel='noreferrer' attribute is used for security reasons to prevent the new page from gaining access to the original page’s information.
//if we don't use asChild inside button  it is not correct html,some browsers shows errors,  ,the button will show plain html  ..ie             <a href={url} target='_blank' rel='noreferrer'>Follow</a>  will be shown as text,
