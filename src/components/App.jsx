import React from 'react'
import '../styles/styles.scss'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Form from './Pages/Form'
import Courses from './Pages/Courses'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Users from './Pages/Users'

const App =()=> (
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


//reglas
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los fragments cuando necesito devolver mas de un elemento
// 4: nomenclatura Fragment => <>hijos</>
// 5: img siempre se cierra
// 6: className => class
// 7: for => htmlFor
export default App;
