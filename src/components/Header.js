import {Link} from 'react-router-dom'

function Header(props){
    return (
      <div className="nav">
        <Link to="/">Index</Link>
        <Link to="/:id">Show</Link>
      </div>
    )
  } 
  
  export default Header