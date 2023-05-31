import {
  Suspense,
  lazy, useEffect
} from 'react'

import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../actions/user'

import Navbar from './navbar/Navbar'
import Registration from './authorization/Registration'
import Login from './authorization/Login'

import './app.scss'
import Disk from './disk/Disk'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
          <Suspense>
            {!isAuth ?
              <Routes>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Login/>}/>
              </Routes>
              :
              <Routes>
                <Route path='/' element={<Disk/>}/>
                <Route path='*' element={<Disk/>}/>
              </Routes>
            }
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
