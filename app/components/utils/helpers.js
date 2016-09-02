const axios = require('axios');

const nytApiKey = "1e3b1acedce6480384157b9fac9fe4e7";


var helpers = {
    runNytApiSearch: (topic, beginDate, endDate)=>{
        console.log(topic);
        console.log(beginDate);
        //var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey + "&q=" + topic;
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytApiKey;
        if (topic !== undefined){
            queryURL =  queryURL + "&q=" + topic ;
        };
        if (beginDate !== undefined){
            queryURL =  queryURL + "&begin_date=" + beginDate ;
            if (endDate !== undefined && endDate >= beginDate ){
                queryURL =  queryURL + "&end_date=" + endDate ;
            };
        };
        console.log(queryURL);
        return axios.get(queryURL)
            .then(function(response){
                console.log(JSON.stringify(response.data.response.docs[0].headline.main));
                console.log(response.data.response.docs[0].web_url);
                console.log(response.data.response.docs[0].pub_date);
                //console.log(response.data);
                //return response
           })
    }
}
module.exports = helpers;