import {Switch, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


function Main(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/:id">
          <Show />
      </Route>
    </Switch>
  )
  } 
  
  export default Main;