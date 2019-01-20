$("#test").on("click",function(event){
    var results = Math.floor(Math.random()*51);

    $.post("/api/results",results)
        .then(function(data){
            console.log(data);
        });
});