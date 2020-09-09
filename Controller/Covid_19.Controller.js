const rq = require('request');var a;
exports.Covid19 = (req,res) =>{
    const options = {
        url: 'https://covid19.mathdro.id/api/countries/Vietnam',
        method: 'GET',
    }
    rq(options, function(err, response, body) {
        if(err) console.log(err);
        else {
          let data = JSON.parse(response.body);
          //resolve(data);
          console.log(data.lastUpdate.toString("dd-yyyy-mm"));
          res.status(200).json({set_attributes: {
            total_confirmed:data.confirmed.value,
            date_confirmed:data.lastUpdate,
            Recovered_case:data.recovered.value,
            dead_case:data.deaths.value
          }});
        } 
    });
}