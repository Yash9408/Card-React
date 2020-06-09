import React, { useState, useEffect } from "react";

function Card(){
  const axios = require('axios');
  
  var number=(Math.floor(Math.random()*999)+1);
  const[name,setName]=useState({});
  
  useEffect(() =>{
    axios.get(' https://picsum.photos/id/'+number+'/info')
    .then(function (response) {
   setName(response.data);   
    })
  },[]);



  return(
    <div className="card">
<h1>{name.author}</h1>
<img src={name.download_url+".jpg"} alt=""/>
<a href={name.download_url+".jpg"} download target="_blank">DOWNLOAD</a>
    </div>

  );

}

export default Card;