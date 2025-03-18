import { BrowserRouter } from 'react-router'
import './App.css'
import AppRoute from './routes'
import Header from './components/layout/Header'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   <Header />
      <AppRoute />
    </BrowserRouter>

  )
}

export default App
