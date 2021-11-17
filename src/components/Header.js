import {Link} from 'react-router-dom'

function Header(props){

  const bookmarks = null;

  const createBookmarks = () => {
    
  }

    return (
      <div className="nav">
        <Link to="/" bookmarks={bookmarks} createBookmarks={createBookmarks}>My Bookmarks</Link>
      </div>
    )
  } 
  
  export default Header