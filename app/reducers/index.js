import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE,DETAIL_DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions
import { NavigationActions } from 'react-navigation'
import { Navigator } from '../navigation/Navigator'
const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)
let dataState = { data: [], loading:true };
let detailDataReducder = {data:{}, loading:true};
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

const detailDataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DETAIL_DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

const navReducer = (state = initialState, action) => {
    let newState = Navigator.router.getStateForAction(action, state)
  
    if (action.params && action.params.replace) {
      // In order to replace the previous route
      // we'll remove the item at index - 1 and then decrement the index.
      newState.routes.splice(newState.index - 1, 1)
      newState.index--
    }
  
    newState.routes.forEach((route, i) => {
      if (!route.params) route.params = {}
      if (i === newState.index) route.params.active = true
      else route.params.active = false
    })
  
    return newState
  };
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    detailDataReducer,
    navReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;