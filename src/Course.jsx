import React from 'react'

const courses = [
  {
    'id': 1,
    'title':'React desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price':40,
    'profesor':'Beto Quiroga'
  },
  {
    'id': 2,
    'title':'Drupal desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN',
    'price':50,
    'profesor':'Beto Quiroga'
  },
  {
    'id': 3,
    'title':'Go desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
    'price':30,
    'profesor':'Alexys Lozada'
  },
  {
    'id': 4,
    'title':'HTML desde cero',
    'image':'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t',
    'price':10,
    'profesor':'Alvaro Felipe'
}
]

const Course = ({match}) => {
  const cursoActual = courses.filter( c => c.id === parseInt(match.params.id))[0]

  return (
    <div className="ed-grid m-grid-3">
     {
       cursoActual
        ? (
          <>
            <h1 className="m-cols-3">{cursoActual.title}</h1>
            <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title}/>
            <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
          </>
        )
        : (
            <h1>El curso no existe</h1>
        )
     }
    </div>
)
}
export default Course