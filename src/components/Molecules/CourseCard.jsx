import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/actionCreators';

const CourseCard = ({ id, title, image, price,professor,addCourseToCart,cart,deleteCourseToCart}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-main-center">
        {professor}
      </div>
      <div className="s-main-center">
        {
          cart.find(el=>el===id)
            ? <button className="button--ghost-alert button--tiny" onClick={()=>deleteCourseToCart(id)}>Remover del Carrito</button>
            : <button className="button--ghost-alert button--tiny" onClick={()=>addCourseToCart(id)}>{`$ ${price} USD`}</button>

        }
        
      </div>
    </div>
  </article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
}
CourseCard.defaultProps ={
 title: "No se encontró título",
 image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
 price: "--",
 professor: "" 
}

const mapStateToProps =state=>({
  cart: state.cart
})
const mapDispatchToProps = dispatch=>({
  addCourseToCart(id){
    dispatch(addToCart(id))
  },
  deleteCourseToCart(id){
    dispatch(deleteFromCart(id))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CourseCard)
