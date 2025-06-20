import { useState } from 'react'
import SearchForm from './components/form/SearchForm'
import UserProfile from './components/user/UserProfile'

const App = () => {
  const [userName, setUserName] = useState('quincylarson')
  console.log(import.meta.env.VITE_GITHUB_TOKEN)

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      {/* displayed the searchform passing the usestate as props , when the value in searchbar changes it get updated */}
      <SearchForm userName={userName} setUserName={setUserName} />
      {/* userprofile also linked with username state,,this component responsible for fetching and displaying the content on screen except the searchbar */}
      <UserProfile userName={userName} />
    </main>
  )
}
export default App
