import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import { KeepAlive, KeepAliveTrafer } from './KeepAlive'
const KeepAliveHome = KeepAliveTrafer(Home, 'home')
const KeepAliveForm = KeepAliveTrafer(Form, 'form')
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/form'} element={<Form />}>
              form
            </Link>
          </li>
        </ul>
        <KeepAlive>
          <div>
            <Routes>
              <Route path="/" element={<KeepAliveHome />}></Route>
              <Route path="/form" element={<KeepAliveForm />}></Route>
            </Routes>
          </div>
        </KeepAlive>
      </BrowserRouter>
    </div>
  )
}
export default App
