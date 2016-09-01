const axios = require('axios');

const nytApiKey = "1e3b1acedce6480384157b9fac9fe4e7";


var helpers = {
    runNytApiSearch: (topic)=>{
        console.log(topic);
        var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey + "&q=" + topic;
        return axios.get(queryURLBase)
            .then(function(response){
                console.log(response);
                //return response
            })
    }
}
module.exports = helpers;