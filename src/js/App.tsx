import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {Layout} from './components/Layout'
import {Homepage} from './pages/Homepage'
import {Contacts} from './pages/Contacts'
import {Service} from './pages/Service'

function App() {
  return (
    <>
    <Router>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='service' element={<Service/>}/>
        </Route>
    </Routes>
    </Router>
    </>
  )
}


export { App };
