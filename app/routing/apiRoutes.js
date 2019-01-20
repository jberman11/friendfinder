module.exports = function(app,path){

require("../data/friends.js")

// GET route /api/friends to display json of available friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// POST route to compare results vs friends.js for compatability
app.post("/api/results", function(req,res){
    
    console.log("looking for friends")
    
    var difference = 51;
    var finalFriend = {};
    var results = req.body.score;
    console.log(results)
    for(i in friends){
        
        let x = Math.abs(friends[i].Rating - results)
        
        if(difference > x){
         difference = x
         finalFriend = friends[i]
        }

    }
    console.log("final friend: ",finalFriend)
    res.json(finalFriend)

})

}