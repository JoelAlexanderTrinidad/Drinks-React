
import { AppRoutes } from './routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MainLayout } from './layouts'
import { UserProvider } from './context/UserProvider'

function App() {

  return (
    <UserProvider>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
    </UserProvider>
  )
}

export default App
