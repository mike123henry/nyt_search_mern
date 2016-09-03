var React = require('react');

// This is the results component
var Results = React.createClass({

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

                <h4><button className="btn btn-success btn-lg" type="button" onClick={this.props.saveArticle}>Save</button> 1. <a href={this.props.article0url} target="_blank">{this.props.article0title}</a></h4>
                <h4><button className="btn btn-success btn-lg" type="button" onClick={this.props.saveArticle}>Save</button> 2. <a href={this.props.article1url} target="_blank">{this.props.article1title}</a></h4>
                <h4><button className="btn btn-success btn-lg" type="button" onClick={this.props.saveArticle}>Save</button> 3. <a href={this.props.article2url} target="_blank">{this.props.article2title}</a></h4>
                <h4><button className="btn btn-success btn-lg" type="button" onClick={this.props.saveArticle}>Save</button> 4. <a href={this.props.article3url} target="_blank">{this.props.article3title}</a></h4>
                <h4><button className="btn btn-success btn-lg" type="button" onClick={this.props.saveArticle}>Save</button> 5. <a href={this.props.article4url} target="_blank">{this.props.article4title}</a></h4>

            </div>
          </div>
               </div>

    )
  }
});

// Export the component back for use in other files
module.exports = Results;