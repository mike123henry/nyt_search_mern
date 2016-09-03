var React = require('react');
var axios = require('axios');


// This is the results component
var Results = React.createClass({
saveArticle: function(event){
 // console.log('event.value')

  var urlx = event.currentTarget.dataset.url
  var titlex =event.currentTarget.dataset.title
  axios.post('/api', {title: titlex, url: urlx})
         .then(function(results){
              console.log("Posted to MongoDB");
         })
 //console.log(event)
  // console.log(this.value)
  // var urlx= "article"+event+"url"
  // console.log(urlx)
//console.log(this.props.urlx)
},

  // Here we render the function
  render: function(){
    console.log('here')
          console.log(this.props.article0url);
          console.log(this.props.article0title);
    return(
               <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Article Results</h3>
            </div>
            <div className="panel-body text-left">

                <h4><button className="btn btn-success btn-lg" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article0url} data-title={this.props.article0title}>Save</button> 1. <a href={this.props.article0url} target="_blank">{this.props.article0title}</a></h4>
                <h4><button className="btn btn-success btn-lg" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article1url} data-title={this.props.article1title}>Save</button> 2. <a href={this.props.article1url} target="_blank">{this.props.article1title}</a></h4>
                <h4><button className="btn btn-success btn-lg" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article2url} data-title={this.props.article2title}>Save</button> 3. <a href={this.props.article2url} target="_blank">{this.props.article2title}</a></h4>
                <h4><button className="btn btn-success btn-lg" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article3url} data-title={this.props.article3title}>Save</button> 4. <a href={this.props.article3url} target="_blank">{this.props.article3title}</a></h4>
                <h4><button className="btn btn-success btn-lg" value="0" type="button" onClick={this.saveArticle} data-url={this.props.article4url} data-title={this.props.article4title}>Save</button> 5. <a href={this.props.article4url} target="_blank">{this.props.article4title}</a></h4>

            </div>
          </div>
               </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Results;