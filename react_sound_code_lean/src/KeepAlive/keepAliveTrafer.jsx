import { useRef, useContext, useEffect } from 'react'
import { KeepAliveContext } from './KeepALiveContext'
const keepAliveTrafer = (KeepAliveConponent, keepConponentId) => {
  return function (props) {
    const { setKeepAliveState, keepAliveStates } = useContext(KeepAliveContext)

    useEffect(() => {
      const state = keepAliveStates[keepConponentId]
      if (state && state.nodes) {
        state.nodes.forEach((node) => _ref.current.appendChild(node))
      } else {
        setKeepAliveState({
          keepConponentId,
          reactElement: <KeepAliveConponent {...props} />,
        })
      }
    }, [keepAliveStates, setKeepAliveState, props])
    const _ref = useRef(null)
    return <div ref={_ref}></div>
  }
}
export default keepAliveTrafer
