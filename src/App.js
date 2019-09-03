import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'
const App =()=> (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de Edteam</p>
        <p> Tu futuro te está esperando</p>
        <a href="https://ed.team" target="blank" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>
<div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
</div>
  </>
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
