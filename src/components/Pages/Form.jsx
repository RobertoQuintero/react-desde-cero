import React,{Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      date: new Date()
    }
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }
  changeName(e){
    this.setState({
      name: e.target.value
    })
  }
  changeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  changeDate(){
    this.setState({
      date: new Date()
    })
  }
  render() { 

    return ( 
      <div className="ed-grid">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha actual: {Math.ceil(this.state.date/1000)}</h4>
        <form id="form-element">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label htmlFor="">Nombre completo</label>
              <input type="text" onChange={ this.changeName}/>
            </div>
            <div className="form__item">
              <label htmlFor="">Correo electrónico</label>
              <input type="email" onChange={ this.changeEmail}/>
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.name}`}</h2>
          <span>{`Tu email es: ${this.state.email}`}</span>
        </div>
      </div>
     );
  }
  componentDidMount(){
    let element = document.getElementById('form-element')
    console.log(element)

    this.dateInterval = setInterval(() => {
      this.changeDate()
      // console.log((new Date().toString().substr(16,8)))
    }, 1000);
  }
  componentDidUpdate(prevProps,prevState){ 
    // console.log(prevState)
  }
  componentWillUnmount(){
    clearInterval(this.dateInterval)
  }
}
 
export default Form;