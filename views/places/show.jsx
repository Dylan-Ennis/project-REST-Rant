const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant!" : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <div>
              <img src={data.place.pic} alt={data.place.name}></img>
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
          </div>
        </div>
        <div>
          <h1>{data.place.name}</h1>
        </div>
        <div>
          <h2>Rating</h2>
          <h5>Not Rated</h5>
        </div>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>
        <div>
          <h2>Comments</h2>
          {comments}
        </div>
        <div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form action={`/places/${data.id}?_method=DELETE`} method="POST">
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>

        <form method="POST" action={`/places/${data.place.id}/comment`}>
        <div>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" required={true} />
            </div>
            <div>
              <label htmlFor="content">Content:</label>
              <textarea id="content" name="content"></textarea>
            </div>
            <div>
              <label htmlFor="stars">Star Rating:</label>
              <input
                type="number"
                id="stars"
                name="stars"
                step="0.5"
                required= {true}
              />
            </div>
            <div>
              <input type="checkbox" id="rant" name="rant" />
              <label htmlFor="rant">Rant</label>
            </div>
            <button type="submit">Submit</button>
          </form>        
      </main>
    </Def>
  );
}

module.exports = show;
