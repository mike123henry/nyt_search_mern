var React = require('react');
var axios = require('axios');


// This is the results component
var SavedArticles = React.createClass({
  getInitialState: function(){
      return{
          savedArticles:[]
     }
  },
  displaySaved: function(event){

  },
  clickToDelete: function(result){
    this.props.deleteArticle(result);

  },
  componentWillReceiveProps: function(nextProps){
    var that = this;
    console.log("SavedArticles nextProps = ");
    console.log(nextProps);
    var myResults = nextProps.savedArticles.map(function(search, i){
        //var boundClick = that.clickToDelete.bind(that, search);
      //  return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a><br />{search.date}<br /><button type="button" className="btn btn-success" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Delete</button></div>
        return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a></div>
    });

    this.setState({savedArticles: myResults});
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
            </div>
            <div className="panel-body">
              {/*using map function to loop through the savedArticles array */}
              {this.state.savedArticles}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = SavedArticles;