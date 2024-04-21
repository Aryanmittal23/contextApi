
import Profile from './components/Profile'
import UserContextprovider from './context/UserContextprovider'

function App() {
  

  return (
    <UserContextprovider>
      <h1>React with Coffee</h1>
      <Login/>
      <Profile/>
    </UserContextprovider>
  )
}

export default App
