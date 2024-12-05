import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'antd'
import sty from './404.module.css'

const NoMatch = () => {
  const navigate = useNavigate()
  return (
    <div className={sty.error404}>
      <div className={sty['error404-body-con']}>
        <Card className={sty['box-card']} bordered={false}>
          <div className={sty['error404-body-con-title']}>
            4<span>0</span>4
          </div>
          <p className={sty['error404-body-con-message']}>YOU LOOK LOST</p>
          <div className={sty['error404-btn-con']}>
            <Button size='large' style={{ width: '200px' }} type='default' onClick={() => navigate('/')}>
              返回首页
            </Button>
            <Button
              size='large'
              style={{ width: '200px', marginLeft: '40px' }}
              type='primary'
              onClick={() => navigate(-1)}
            >
              返回上一页
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default NoMatch
