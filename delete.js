var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb = db.db('climate-change-worldbank');
    var query = {year : '1849'};

    mydb.collection('LandTemperatures').deleteOne(query,function(err,obj){
        if (err) throw err;
            console.log('One Data is deleted.')
            db.close();
    });
});
