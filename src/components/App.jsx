import React from 'react'
import '../styles/styles.scss'
import AppRoutes from './AppRoutes'
import {Provider} from 'react-redux'
import store from '../redux/store'
import { getCourseList, getUsersList } from '../redux/actionCreators'

store.dispatch(getCourseList())
store.dispatch(getUsersList())
const App =()=> (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)


//reglas
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los fragments cuando necesito devolver mas de un elemento
// 4: nomenclatura Fragment => <>hijos</>
// 5: img siempre se cierra
// 6: className => class
// 7: for => htmlFor
export default App;
