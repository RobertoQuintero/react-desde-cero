import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart} from '../../redux/actionCreators';
import {connect} from 'react-redux';

const CourseCard = ({ id, title, image, price,professor,addCourseTocart,cart,removeCourseFromcart}) => (
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
        cart.find(a=>a===id)
        ? <button className="button--ghost-alert button--tiny" onClick={()=> removeCourseFromcart(id)}>Remover del carrito</button>
        : <button className="button--ghost-alert button--tiny" onClick={()=> addCourseTocart(id) }>{`$ ${price} USD`}</button>
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
const mapStatetoProps = (state)=>({
  cart: state.cartReducer.cart
})
const mapDispatchToProps = dispatch=>({
    addCourseTocart(id){
      dispatch(addToCart(id))
    },
    removeCourseFromcart(id){
      dispatch(removeFromCart(id))
    }

})

export default connect(mapStatetoProps,mapDispatchToProps)(CourseCard)
