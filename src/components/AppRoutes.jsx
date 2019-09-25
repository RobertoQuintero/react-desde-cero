import React from 'react'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Users from './Pages/Users'

const AppRoutes =()=>{
  return(
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Home}/>  
        <Route path="/cursos/:id" component={ Course}/>  
        <Route path="/cursos" component={ Courses}/>  
        <Route path="/historial" component={ History }/>  
        <Route path="/users" component={ Users }/>  
        <Route path="/formulario" component={ ()=> <Form name="Página de contacto"/>}/>  
        <Route component={()=>(
          <div className="ed-grid">
            <h2>Error 404 Not found</h2>
          </div>
        )}/>
      </Switch>
    </Router>
  )
} 
export default AppRoutes