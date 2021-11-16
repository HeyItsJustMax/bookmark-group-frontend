import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    url: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBookmarks(newForm);
    setNewForm({
      name: "",
      url: ""
    });
  };

  // loaded function
  const loaded = () => {
    return props.bookmarks.map((bookmark) => (
      <div key={bookmark._id} className="bookmark">
        <Link to={`/bookmarks/${bookmark._id}`}><h1>{bookmark.name}</h1></Link>
        <img src={bookmark.image} alt={bookmark.name} />
        <h3>{bookmark.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
        <input type="submit" value="Create Bookmark" />
      </form>
      {props.bookmarks ? loaded() : loading()}
    </section>
  );
}

export default Index;