import {Switch, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import {useState, useEffect} from 'react'

function Main(props) {

  const [bookmarks, setBookmarks] = useState(null)
  const URL = "https://ringo-people-scobey.herokuapp.com/people/";

  const getBookmark = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data);
  }

  const createBookmark = async (bookmark) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookmark),
    })
    getBookmark();
  }

  const updateBookmark = async (bookmark, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookmark),
    })
    getBookmark();
  }

  const deleteBookmark = async (id) => {
    await fetch(URL + id, {
      method: "delete"
    })
    getBookmark();
  }

  useEffect(() => getBookmark(), [])

  return (
    <Switch>
      <Route exact path="/">
        <Index bookmarks={bookmarks} createBookmark={createBookmark} />
      </Route>
      <Route path="/bookmarks/:id" render={(rp) =>
        (<Show {...rp} updateBookmark={updateBookmark} deleteBookmark={deleteBookmark} />
      )}/>
    </Switch>
  )
  } 
  
  export default Main;