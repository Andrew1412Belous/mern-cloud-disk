import {
  Suspense,
  lazy
} from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Registration from './authorization/Registration'

import './app.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Suspense>
          <Routes>
            <Route path='/registration' element={<Registration/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
