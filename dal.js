const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/robotData'
console.log(url);
let robots =[];

function getAllDocs (err, db){
  const collection = db.collection('allRobots')
  // let documents = []
  collection.find({}).toArray(function (err, docs){
    robots = docs
    db.close()
    console.log(robots)
  })
}

function connectMongodb (url, cb){
  MongoClient.connect(url, getAllDocs)
}

function getRobot(){
  connectMongodb(url, getAllDocs)
  return robots
}
// console.log(robot)
module.exports = { getRobot: getRobot }
