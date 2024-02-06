//a)
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);
}

//b)
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}

//c)
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//d)
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

//e)
var request = new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all')
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }
