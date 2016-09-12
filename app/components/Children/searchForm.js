const React = require('react');

let SearchForm = React.createClass({

  handleChange: function(event){
    //console.log("searchForm.js handleChange ran");
    //console.log(event);
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  handleClick: function(){
    //console.log("searchForm.js handleClick ran");
    this.props.setSearchTopic(this.state.searchTopic);
    this.props.setSearchBegin(this.state.searchBeginDate);
    this.props.setSearchEnd(this.state.searchEndDate);
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center"><strong>Search terms input form</strong></h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-gorup">
                  <h4 className="text-center"><strong>Topic to search</strong></h4>
                  <input type="text" className="form-control text-center" id="searchTopic" onChange= {this.handleChange} required/>
                  <br />
                  <h4 className="text-center"><strong>Start Date (yyyymmdd) optional</strong></h4>
                  <input type="text" className="form-control text-center" id="searchBeginDate" onChange= {this.handleChange} required/>
                  <br />
                  <h4 className="text-center"><strong>End Date (yyyymmdd) optional</strong></h4>
                  <input type="text" className="form-control text-center" id="searchEndDate" onChange= {this.handleChange} required/>
                  <br />
                  <button type="button" className="btn btn-primary btn-block text-center" onClick={this.handleClick}>Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SearchForm;