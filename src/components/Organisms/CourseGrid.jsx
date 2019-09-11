import React from 'react'
import CourseCard from '../Molecules/CourseCard'

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

const CourseGrid = () => (
  <div className="ed-grid ed-grid m-grid-4">
    { courses.map(course => (
      <CourseCard 
      key={course.id} 
      id={course.id} 
      title={course.title}
      image={course.image}
      price={course.price}
      professor={course.professor}/>)

    )}
  </div>
)

export default CourseGrid