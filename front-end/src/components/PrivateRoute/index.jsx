import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token)
  return token ? children : <Navigate to="/login" />
}

export default PrivateRoute
