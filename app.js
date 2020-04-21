var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');
var humid=document.querySelector('.humidity');
var min1=document.querySelector('.min1');
var min2=document.querySelector('.min2');
var min3=document.querySelector('.min3');
var min4=document.querySelector('.min4');
var min5=document.querySelector('.min5');
var max1=document.querySelector('.max1');
var max2=document.querySelector('.max2');
var max3=document.querySelector('.max3');
var max4=document.querySelector('.max4');
var max5=document.querySelector('.max5');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=metric&appid=a70eb54edbc725a58ac387d231ebab19')
.then(response => response.json())
.then(data => {
  var temp1Value =data['list']['0']['main']['temp'];
  var temp2Value= data['list']['1']['main']['temp'];
  var temp3Value= data['list']['2']['main']['temp'];
  var temp4Value= data['list']['3']['main']['temp'];
  var temp5Value= data['list']['4']['main']['temp'];
  var min1value=data['list']['0']['main']['temp_min'];
  var min2value=data['list']['1']['main']['temp_min'];
  var min3value=data['list']['2']['main']['temp_min'];
  var min4value=data['list']['3']['main']['temp_min'];
  var min5value=data['list']['4']['main']['temp_min'];
  var max1value=data['list']['4']['main']['temp_max'];
  var max2value=data['list']['4']['main']['temp_max'];
  var max3value=data['list']['4']['main']['temp_max'];
  var max4value=data['list']['4']['main']['temp_max'];
  var max5value=data['list']['4']['main']['temp_max'];
  
  



    temp1.innerHTML = "MONDAY-Temperature- "+temp1Value+" degree celsius";
    temp2.innerHTML = "TUESDAY-Temperature- "+temp2Value+" degree celsius";
    temp3.innerHTML = "WEDNESDAY-Temperature- "+temp3Value+" degree celsius";
    temp4.innerHTML = "THURSDAY-Temperature- "+temp4Value+" degree celsius";
    temp5.innerHTML = "FRIDAY-Temperature- "+temp5Value+" degree celsius";
    min1.innerHTML=  "Min-temp  "+min1value+" degree celsius";
    min2.innerHTML=  "Min-temp  "+min2value+" degree celsius";
    min3.innerHTML=  "Min-temp  "+min3value+" degree celsius";
    min4.innerHTML=  "Min-temp  "+min4value+" degree celsius";
    min5.innerHTML=  "Min-temp  "+min5value+" degree celsius";
    max1.innerHTML=  "Max-temp  "+max1value+" degree celsius";
    max2.innerHTML=  "Max-temp  "+max1value+" degree celsius";
    max3.innerHTML=  "Max-temp  "+max1value+" degree celsius";
    max4.innerHTML=  "Max-temp  "+max1value+" degree celsius";
    max5.innerHTML=  "Max-temp  "+max1value+" degree celsius";
  
  input.value ="";



})

.catch(err => alert("Wrong city name!"));
})

