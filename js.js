var req = new XMLHttpRequest()
req.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
req.send();
req.onload=function(){
    var data = JSON.parse(req.response)
   for(var i in data){
       
       console.log(`NAME : ${data[i].name}, REGION : ${data[i].region}, SUBREGION : ${data[i].subregion}, POPULATION : ${data[i].population}`)
   }
}

