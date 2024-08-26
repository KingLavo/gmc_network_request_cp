const input = document.getElementById("inputVal")

input.addEventListener("keyup", (e)=>{
    var inputText = e.target.value
    if(inputText !== ""){
        fetchData(inputText)
    }
})

const fetchData = (inputVal)=>{
    const location = document.getElementById("location")
    const locationImg = document.getElementById("locationImg")
    const weatherIcon = document.getElementById("weatherIcon")
    const temp = document.getElementById("temp")
    const weatherDesc = document.getElementById("weatherDesc")
     
    const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=3d5dba359d2f070d2d593e36c5798e68"
    
     fetch( URL +"&q="+ inputVal)
        .then(Response =>{
            if( Response.status == 200 && Response.ok === true){
                console.log(Response)
                return Response.json()
            }
        }).then( data =>{
        
            if(data.cod === 200){
                location.innerText =  data.name
                temp.innerText = data.main.temp
                weatherIcon.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                locationImg.src=`https://flagsapi.com/${data.sys.country}/flat/64.png`
                weatherDesc.innerHTML = data.weather[0].description
            }
            
        })
        .catch( error => {
            console.log( error)
        })  
}
 