var React = require('react');
var axios = require('axios');

var Saved = require('./savedArticles.js');
// This is the results component
var Results = React.createClass({

saveArticle: function(event){
  console.log('resultsBox.js saveArticle event.value');
  console.log(event);
  var that = this;
  var urlx = event.currentTarget.dataset.url
  var titlex =event.currentTarget.dataset.title
  return axios.post('/api', {title: titlex, url: urlx})
    .then(function(results){
      console.log("resultBox.js Posted to MongoDB");




axios.get('/api/getSaved')




      console.log(results);
       that.props.updateSavedArticles(results.data);
       console.log("resultBox.js that.props.updateSavedArticles(");
       console.log(that.props.updateSavedArticles)
       console.log("end resultBox.js that.props.updateSavedArticles(");
    }).catch(function(err){
      console.log("resultBox.js this is an error",err)
    })

},

  updateSavedArticles: function(){
    axios.get('/api/getSaved')
      .then(function(response){
        console.log("resultsBox.js updateSavedArticles /api/getSaved response");
        console.log(response);
        console.log('resultsBox.js after response xxx');
        this.setState({
          savedArticles: response.data
        });
      }.bind(this));
  },
componentWillReceiveProps: function(propsxx){
  console.log('resultsBox.js propsxx');
  console.log(propsxx.savedArticles);
  console.log('resultsBox.js end propsxx');
  this.setState({savedArticles: propsxx.savedArticles})
  },

  // Here we render the function
  render: function(){
    //console.log('resultsBox.js here')
    //console.log(this.props.article0url);
    //console.log(this.props.article0title);
    return(
               <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Article Results</h3>
            </div>
            <div className="panel-body text-left">

                <h4><button className="btn btn-success btn-sm" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article0url} data-title={this.props.article0title}>Save</button> 1. <a href={this.props.article0url} target="_blank">{this.props.article0title}</a></h4>
                <h4><button className="btn btn-success btn-sm" value="1" type="button" onClick={this.saveArticle} data-url={this.props.article1url} data-title={this.props.article1title}>Save</button> 2. <a href={this.props.article1url} target="_blank">{this.props.article1title}</a></h4>
                <h4><button className="btn btn-success btn-sm" value="2" type="button" onClick={this.saveArticle} data-url={this.props.article2url} data-title={this.props.article2title}>Save</button> 3. <a href={this.props.article2url} target="_blank">{this.props.article2title}</a></h4>
                <h4><button className="btn btn-success btn-sm" value="3" type="button" onClick={this.saveArticle} data-url={this.props.article3url} data-title={this.props.article3title}>Save</button> 4. <a href={this.props.article3url} target="_blank">{this.props.article3title}</a></h4>
                <h4><button className="btn btn-success btn-sm" value="4" type="button" onClick={this.saveArticle} data-url={this.props.article4url} data-title={this.props.article4title}>Save</button> 5. <a href={this.props.article4url} target="_blank">{this.props.article4title}</a></h4>

            </div>
            <div className="row">
              <Saved savedArticles={this.props.savedArticles} updateSavedArticles={this.props.updateSavedArticles}/>
            </div>
          </div>
               </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Results;