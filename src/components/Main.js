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

  const updateBookmark = async () => {

  }

  const deleteBookmark = async () => {

  }

  useEffect(() => setBookmarks(), [])

  return (
    <Switch>
      <Route exact path="/" createBookmark={createBookmark}>
        <Index />
      </Route>
      <Route path="/:id" updateBookmark={updateBookmark} deleteBookmark={deleteBookmark}>
          <Show />
      </Route>
    </Switch>
  )
  } 
  
  export default Main;