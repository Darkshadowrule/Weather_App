const request = require('request');
var address=(addr)=>
{a=[]
  var add=encodeURIComponent(addr)
  console.log(add);
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${add}`,
    json:true
  },(error,response,body)=>{
    if(error)
    return("Unable to connect with google server");
    else if(body.status==="Zero_Results")
      return("Address Not exist");
    else {
    console.log(body.results[0].formatted_address);
  lat=body.results[0].geometry.location.lat;
long=body.results[0].geometry.location.lat;
request({
  url:`https://api.darksky.net/forecast/5cd6f5677df69cd5c25407d13fca3647/${lat},${long}`,
  json:true
},(error,response,body)=>{
  if(error)
  console.log("Unable to connect with google server");
  else if(body.status==="Zero_Results")
  console.log("Address Not exist");
  else
  console.log(body.currently.temperature);
})
}})}
module.exports={
  address
};
