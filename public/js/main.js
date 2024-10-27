const cityName= document.getElementById('city');
const submitbtn = document.getElementById('submitbtn');
const City = document.getElementById('cityName')
const desc = document.getElementById('countryName')
const wellnesscentrename = document.getElementById('temp')
const wellnesscentreaddress = document.getElementById('humidity')
const wellnesscentrecontactno = document.getElementById('weather')
const getdata = async(e)=>{
    e.preventDefault();
    //alert(cityName.value);
    if(cityName.value === ""){
             alert("please enter city name before searching");
    }
   
    else{
        try{const url=` https://api.data.gov.in/resource/8eede3a2-1652-49eb-bd7f-48ae3ea7a11e?api-key=579b464db66ec23bdd00000112e34ff0199a4fde59906948149a89d3&format=json&limit=20&filters%5Bcityname%5D=${cityName.value}`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data]
         console.log(arr[0]);
        City.innerHTML=`<h3 class="card-title" id="cityName">City Name : ${cityName.value}</h3>`
        desc.innerHTML= `<h6 class="card-subtitle mb-2 text-muted" id="countryName">Description: ${arr[0].desc}</h6>`
    wellnesscentrename.innerHTML=`<h5 class="card-text" id="temp">Name: ${arr[0].records[0].wellnesscentrename} <sup>0</sup> C   </h5>`
    wellnesscentreaddress.innerHTML=`<h5 class="card-text" id="humidity">Address: ${arr[0].records[0].wellnesscentreaddress}</h5>`
        wellnesscentrecontactno.innerHTML=`<h5 class="card-text" id="weather">Contact: ${arr[0].records[0].wellnesscentrecontactno} </h5>`
        
    }catch(e){
        City.innerHTML=`<h3 class="card-title" id="cityName">City Name :</h3>`
        country.innerHTML= `<h6 class="card-subtitle mb-2 text-muted" id="countryName">Description:</h6>`
        temp.innerHTML=`<h5 class="card-text" id="temp">Name:</h5>`
        humidity.innerHTML=`<h5 class="card-text" id="humidity">Address:</h5>`
        weather.innerHTML=`<h5 class="card-text" id="weather">Contact:</h5>`
        alert("please enter city name correctly");
        res.status(404).send()
        // console.log(e);
    }
}
}
submitbtn.addEventListener('click',getdata)