const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="\images\chad-montano-MqT0asuoIcU-unsplash.jpg" alt="pizza" height="200px" width="200px" className="mx-auto d-block text-center"/>
          <div className="text-center">
          Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" >Unsplash</a>
          </div>
        </div>
        <div className="text-center">
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
