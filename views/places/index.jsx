const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.id} className="col-sm-6 text-center">
          <h2>{place.name}</h2>
          <p className="text-center">{place.cuisines}</p>
          <img src={place.pic} alt={place.name} height="200px" width="200px" className="mx-auto d-block" />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
    );
  });
  return (
    <Def>
      <main>
        <h1 className="text-center">Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;

