import { combineReducers } from 'redux'
import { SET_COLOR, SET_PAGE } from './actions'

function color(state = "#27ae60", action) {
  switch (action.type) {
    case SET_COLOR:
      return action.color
    default:
      return state
  }
}

function page(state = "/", action) {
  switch (action.type) {
    case SET_PAGE:
      return action.page
    default:
      return state
  }
}
const portfolioApp = combineReducers({
  color,
  page
})

export default portfolioApp
