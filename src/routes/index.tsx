import { 
  Route, 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Layout } from '../components'
import {Navegation} from '../pages'
import { linkAbout, linkHome, linkProjects } from '../utils'

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={linkHome} component= {Navegation} exact/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes