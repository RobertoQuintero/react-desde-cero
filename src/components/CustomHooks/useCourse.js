import {useState,useEffect} from 'react';
import axios from 'axios'

const useCourse =(id)=>{
  const [course,setCourse] = useState({})

  useEffect(()=>{
    axios.get(`http://my-json-server.typicode.com/RobertoQuintero/demo/courses/${id}`)
      .then(response =>  setCourse(response.data))
  },[])

  return course
}

export default useCourse