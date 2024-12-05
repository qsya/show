import { Card, Button } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default NoMatch
