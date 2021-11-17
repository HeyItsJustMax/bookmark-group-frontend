import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const bookmarks = props.bookmarks
  const bookmark = bookmarks.find(p => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(bookmark)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.title]: event.target.value })
  }

  // handleSubmit for form
  const handleSubmit = event => {
    event.preventDefault()
    props.updateBookmarks(editForm)
    props.history.push("/")
  }

  const removeBookmark = () => {
    props.deleteBookmarks(bookmark._id)
    props.history.push("/")
  }

  return (
    <div className="bookmark">
      <h1>{bookmark.title}</h1>
      <button id="delete" onClick={removeBookmark}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
        <input type="submit" value="Update Bookmark" />
      </form>
    </div>
  )
}

export default Show