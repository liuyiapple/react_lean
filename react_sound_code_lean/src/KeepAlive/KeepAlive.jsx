import { useCallback, useReducer } from 'react'
import keepAliveReducer from './keepAliveReducer'
import { KeepAliveContext } from './KeepALiveContext'
import * as actionType from './actionType'
/**
 *
 * home : {
 *  keepAliveId: "home",
 *  reactElement: reactElement
 *  nodes:nodes,
 *  status: create | created
 *
 * }
 *
 */

const KeepAlive = (props) => {
  const [keepAliveStates, dispatch] = useReducer(keepAliveReducer, {})
  const setKeepAliveState = useCallback(
    ({ keepAliveId, reactElement }) => {
      if (!keepAliveStates[keepAliveId]) {
        dispatch({
          type: actionType.CREATING,
          payload: {
            keepAliveId,
            reactElement,
          },
        })
      }
    },
    [keepAliveStates]
  )
  return (
    <KeepAliveContext.Provider
      value={{ setKeepAliveState, keepAliveStates, dispatch }}
    >
      {props.children}
      {Object.values(keepAliveStates).map(({ keepAliveId, reactElement }) => (
        <div
          key={keepAliveId}
          ref={(node) => {
            if (node && !keepAliveStates[keepAliveId].nodes) {
              dispatch({
                type: actionType.CREATED,
                payload: {
                  keepAliveId,
                  nodes: [...node.childNodes],
                },
              })
            }
          }}
        >
          {reactElement}
        </div>
      ))}
    </KeepAliveContext.Provider>
  )
}
export default KeepAlive
