const React = require("react");
const Def = require("../default");

function show(data) {
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
          <h5>No comments yet!</h5>
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
      </main>
    </Def>
  );
}

module.exports = show;
