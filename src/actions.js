/*
 * action types
 */

export const SET_COLOR = 'SET_COLOR'
export const SET_PAGE = 'SET_PAGE'

/*
 * action creators
 */

export function setColor(color) {
  return { type: SET_COLOR, color }
}

export function setPage(page) {
  return { type: SET_PAGE, page }
}