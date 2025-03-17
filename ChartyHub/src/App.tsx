import { BrowserRouter } from 'react-router'
import './App.css'
import AppRoute from './routes'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>

  )
}

export default App
