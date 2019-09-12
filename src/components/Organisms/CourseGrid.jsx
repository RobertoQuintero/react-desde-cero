import React from 'react';
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader';


const CourseGrid = ({courses}) => {
  return ( 
    <div className="ed-grid ed-grid m-grid-4">
        { 
         courses.length === 0
          ? <h1 className="t3">Cargando... </h1>
          :  courses.map(course => (
            <CourseCard 
            key={course.id} 
            id={course.id} 
            title={course.title}
            image={course.image}
            price={course.price}
            professor={course.professor}/>)
          )
        }
      </div>
   );
}
 
export default withLoader(CourseGrid);