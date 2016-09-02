const React = require('react');


var helpers = require('./utils/helpers.js');

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

//debug
helpers.runNytApiSearch("rain","20160902", "20160901");
//end debug
module.exports = Main;