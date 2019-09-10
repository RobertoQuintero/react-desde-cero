import React from 'react';
import './styles/styles.scss';
import Banner from './Banner'
import Course from './Course'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Mainmenu'
import Historial from './Historial'

const App =()=> (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Banner}/>  
      <Route path="/cursos/:id" component={ Course}/>  
      <Route path="/cursos" component={ CourseGrid}/>  
      <Route path="/historial" component={ Historial }/>  
      <Route path="/formulario" component={ ()=> <Formulario name="Página de contacto"/>}/>  
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
