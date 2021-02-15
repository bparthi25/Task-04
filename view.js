var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb = db.db('climate-change-worldbank');
    var mysort = {year: 1};

    mydb.collection('LandTemperatures').find().sort(mysort).toArray(function(err,res){
        if (err) throw err;
            console.log(result);
            db.close();
    });
});
