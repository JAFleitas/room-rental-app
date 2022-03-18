import { GET_ALL_PROPERTIES } from "../actions"

const initialState = {
    AllProperties: [],
    propertys2: [],
    detailsOfPropertys: [],
  }
  
  function rootReducer(state = initialState, {type,payload}) {
    switch (type) {
      case GET_ALL_PROPERTIES:
          return{
              AllProperties:payload
          }
      default:
        return state
    }
  }
  
  export default rootReducer