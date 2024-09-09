import './App.css'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
        </Routes>
      <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
