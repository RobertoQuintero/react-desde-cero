import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import useCourse from '../CustomHooks/useCourse'

const Course = ({match}) => {
  const [state,setState]= useState({  })
 console.log(match.params.id)
  useEffect(()=>{
    axios.get(`http://my-json-server.typicode.com/RobertoQuintero/demo/courses/${match.params.id}`)
      .then(response =>  setState(response.data))
  },[])

  // const myComment = e =>{
  //   setComment(e.target.value)
  // }

  return (
    <div className="ed-grid m-grid-3">
     {
       state
        ? (
          <div className="ed-grid">
            <div className="l-block">
              <h1 className="m-cols-3">{state.title}</h1>
              <img className="m-cols-1" src={state.image} alt={state.title}/>
              <p className="m-cols-2">Profesor: {state.professor}</p>
            </div>
            {/* <div>
              <h2>Escribe tu comentario</h2>
              <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)} id=""/>
              <p>{comment}</p>
            </div> */}
          </div>
        )
        : (
            <h1>El curso no existe</h1>
        )
     }
    </div>
)
}
export default Course