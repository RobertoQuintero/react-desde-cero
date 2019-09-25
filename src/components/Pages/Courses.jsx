import React from 'react';
// import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'
import {connect} from 'react-redux'


const Courses = ({courses}) => <CourseGrid courses={courses}/>
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     courses: []
  //    }
  // }
  // componentDidMount() {
  //   axios.get('http://my-json-server.typicode.com/RobertoQuintero/demo/courses')
  //     .then(response => {
  //       this.setState({
  //         courses: response.data
  //       })
  //     })
  // }
  // render() { 
    // const {courses} = this.state
    // return ( 
    //   <CourseGrid courses={courses}/>
    //  );
  // }
// }
const mapStateToProps = state =>({
  courses: state.coursesReducer.courses
})

export default connect(mapStateToProps,{})(Courses)