module.exports = function(app,path){

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    //send all other routes to home.html 
    app.get("/", function(req, res) {
        //res.sendFile(path.join(__dirname, "../public/style.css"))
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    };// GET route /survey to serve survey.html
