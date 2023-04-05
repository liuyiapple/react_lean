/**
 *
 * @param {*} state keepALiveState
 * @param {*} action : {
 *      type: "",
 *      payload:""
 * }
 */
import * as actionType from './actionType'
function keepAliveReducer(state, action) {
  const { type, payload } = action
  const { keepAliveId, reactElement, nodes } = payload

  switch (type) {
    case actionType.CREATING:
      return {
        ...state,
        [keepAliveId]: {
          keepAliveId,
          reactElement,
          status: type,
          nodes: null,
        },
      }
    case actionType.CREATED:
      return {
        ...state,
        [keepAliveId]: {
          ...state[keepAliveId],
          status: type,
          nodes,
        },
      }
    default:
      return state
  }
}
export default keepAliveReducer
