$(document).ready(function(){
    $().ajax({
        url: "https://data.cityofchicago.org/resource/dkvj-fe84.json",
        type: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "YOURAPPTOKENHERE"
        }
    }).done(function(data) {
      alert("Retrieved " + data.length + " records from the dataset!");
      console.log(data);
    });