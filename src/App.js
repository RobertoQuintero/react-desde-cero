import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'
import Banner from './Banner'
// import Formulario from './Formulario'

const cursos = [
  {
    'title':'React desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price':40,
    'profesor':'Beto Quiroga'
  },
  {
    'title':'Drupal desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN',
    'price':50,
    'profesor':'Beto Quiroga'
  },
  {
    'title':'Go desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
    'price':30,
    'profesor':'Alexys Lozada'
  },
  {
    'title':'HTML desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
    'price':10,
    'profesor':'Alvaro Felipe'
}
]
const App =()=> (
  <> 
  <Banner />
  {/* <Formulario name="EDteam"/> */}
  <div className="ed-grid m-grid-4">
    {
      cursos.map(curso=> <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
    }
  
  

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
