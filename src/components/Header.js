import {Link} from 'react-router-dom'

function Header(props){
    return (
      <div className="nav">
        <Link to="/">Index</Link>
        <Link to="/:id">Show</Link>
        <h3>Here's an update!</h3>
      </div>
    )
  } 
  
  export default Header