const React = require('react');
var axios = require('axios');

var helpers = require('./utils/helpers.js');
var SearchForm = require('./Children/searchForm.js');
var Results = require('./Children/resultBox.js');
var Saved = require('./Children/savedArticles.js');

let Main = React.createClass({
  getInitialState: function(){
    //console.log("getIitialState has run");
      return{
        searchTopic: "javascript",
        searchBeginDate: "20160831",
        searchEndDate: "20160831",
        results: ""
      }
  },
    componentDidMount: function(){
    axios.get('/api/getSaved')
      .then(function(response){
        console.log("componentDidMount /api/getSaved response");
        console.log(response);
        this.setState({
          savedArticles: response.data
        });
      }.bind(this));
  },
  componentDidUpdate(prevProps, prevState){
    //console.log("b4 if");
    if(prevState.searchTopic != this.state.searchTopic){
      //console.log("UPDATED");
      helpers.runNytApiSearch(this.state.searchTopic,this.state.searchBeginDate,this.state.searchEndDate)
         .then(function(returnData){
            //console.log("main returnData");
            //console.log(returnData);
            this.setState({article0title: returnData[0][0]});
            this.setState({article1title: returnData[1][0]});
            this.setState({article2title: returnData[2][0]});
            this.setState({article3title: returnData[3][0]});
            this.setState({article4title: returnData[4][0]});
            this.setState({article0url: returnData[0][1]});
            this.setState({article1url: returnData[1][1]});
            this.setState({article2url: returnData[2][1]});
            this.setState({article3url: returnData[3][1]});
            this.setState({article4url: returnData[4][1]});
          }.bind(this))
// axios.post('/api', [{title: "bob2", url:"ferg2"},{title: "bob3", url:"ferg3"}])
//         .then(function(results){
//           console.log(results);
//         })
    }

  },

  setSearchTopic(topic){
    //console.log("setSearchTopic ran");
    this.setState({
      searchTopic: topic
    })
  },

setSearchBegin(start){
  //console.log("setSearchBegin ran");
    this.setState({
      searchBeginDate: start
    })
},

setSearchEnd(stop){
  //console.log("setSearchEnd ran");
    this.setState({
      searchEndDate: stop
    })
},
  render: function(){
    return(
      <div className="contianer">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Search using full MERN stack, Save and Comment</h2>
            <h3 className="text-center">You can Search a topic of your choice, Save articles that interest you and Comment on those articles</h3>
          </div>
          <SearchForm setSearchTopic={this.setSearchTopic} setSearchBegin={this.setSearchBegin} setSearchEnd={this.setSearchEnd}/>
        </div>
        <div className="row">
          <Results article0title={this.state.article0title} article1title={this.state.article1title} article2title={this.state.article2title} article3title={this.state.article3title} article4title={this.state.article4title} article0url={this.state.article0url} article1url={this.state.article1url} article2url={this.state.article2url} article3url={this.state.article3url} article4url={this.state.article4url}/>
        </div>
        <div className="row">
          <Saved savedArticles={this.state.savedArticles} />
        </div>
      </div>
    )
  }
});

module.exports = Main;