import { 
  Route, 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Layout } from '../components'
import Home from '../pages/Home'
import { linkHome } from '../utils'

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={linkHome} component= {Home}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes