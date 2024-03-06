const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="\images\yoonjae-baik-FXr_SnSAuOc-unsplash.jpg" alt="Kitten" height="200px" width="300px"/>
                <div>
                Photo by <a href="https://unsplash.com/@houston100?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">YoonJae Baik</a> on <a href="https://unsplash.com/photos/white-cat-on-brown-wooden-table-FXr_SnSAuOc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
