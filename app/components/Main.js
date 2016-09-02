const React = require('react');


var helpers = require('./utils/helpers.js');
var SearchForm = require('./Children/searchForm.js')

let Main = React.createClass({
  getInitialState: function(){
    console.log("getIitialState has run");
      return{
        searchTopic: "javascript",
        searchBeginDate: "20160831",
        searchEndDate: "20160831",
        results: ""
      }
  },
  componentDidUpdate(prevProps, prevState){
    console.log("b4 if");
    if(prevState.searchTopic != this.state.searchTopic){
      console.log("UPDATED");

      helpers.runNytApiSearch(this.state.searchTopic,this.state.searchBeginDate,this.state.searchEndDate);
        // .then((data)=>{
        //   if (data != this.state.results)
        //   {
        //     console.log("HERE");
        //     console.log(data);

        //     this.setState({
        //       results: data
        //     })
        //   }
    }
  },

  setSearchTopic(topic){
    console.log("setSearchTopic ran");
    this.setState({
      searchTopic: topic
    })
  },

setSearchBegin(start){
  console.log("setSearchBegin ran");
    this.setState({
      searchBeginDate: start
    })
},

setSearchEnd(stop){
  console.log("setSearchEnd ran");
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
        </div>
    )
  }
});

module.exports = Main;