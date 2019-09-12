import React, { Component } from 'react';
// import CourseCard from '../Molecules/CourseCard'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'


class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      courses: []
     }
  }
  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/RobertoQuintero/demo/db')
      .then(response => {
        this.setState({
          courses: response.data.courses
        })
        console.log(response.data.courses)
      })
  }
  
  render() { 
    const {courses} = this.state
    return ( 
      <CourseGrid courses={courses}/>
     );
  }
}
 
export default Courses;