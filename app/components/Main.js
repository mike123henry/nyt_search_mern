const React = require('react');


let Main = React.createClass({
  render: function(){
    return(
      <div className = "contianer">
        <div className = "row">
          <div className = "jumbotron">
            <h2 className = "text-center">New York Times Search, Save and Comment</h2>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;