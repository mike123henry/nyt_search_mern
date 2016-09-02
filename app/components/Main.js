const React = require('react');


var helpers = require('./utils/helpers.js');

let Main = React.createClass({
  getIitialState: function(){
      return{
        searchTopic: "javascript",
        searchBeginDate: "20160831",
        searchEndDate: "20160831"
      }
  },
  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleClick: function(){
    helpers.runNytApiSearch(this.state.searchTopic,this.state.searchBeginDate,this.state.searchEndDate);
  },
  render: function(){
    return(
      <div className="contianer">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Search using full MERN stack, Save and Comment</h2>
            <h3 className="text-center">You can Search a topic of your choice, Save articles that interest you and Comment on those articles</h3>
          </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title text-center">Search</h3>
                  </div>
                  <div className="panel-body">
                    <form>
                      <div className="form-gorup">
                        <h4 className="text-center">Topic to search</h4>
                        <input type="text" className="form-control text-center" id="searchTopic" onChange= {this.handleChange} required/>
                        <br />
                        <h4 className="text-center"><strong>Start Date (yyyymmdd)</strong></h4>
                        <input type="text" className="form-control text-center" id="searchBeginDate" onChange= {this.handleChange} required/>
                        <br />
                        <h4 className="text-center"><strong>End Date (yyyymmdd)</strong></h4>
                        <input type="text" className="form-control text-center" id="searchEndDate" onChange= {this.handleChange} required/>
                        <br />
                        <button type="button" className="btn btn-primary btn-block text-center" onClick={this.handleClick}>Search</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
    )
  }
});

//debug
//helpers.runNytApiSearch("rain","20160902", "20160902");
//end debug
module.exports = Main;