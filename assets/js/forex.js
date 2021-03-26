var destinationEl = document.getElementById ("userDestination");
var toCountryEl = document.querySelector ("#toCountry");
var startAmountEl = document.getElementById ("startAmount");
var endAmountEl = document.getElementById ("endAmount");
var buttonEl = document.getElementById ("btn");
var fromCountryEl = document.querySelector("#fromCountry");
var conversionEl = document.getElementById("conversion");
var code;


buttonEl.addEventListener("click", function(event){
    event.preventDefault();

    // function convertCountry(){
        fromCountryEl.textContent = "USA";
        toCountryEl.textContent = destinationEl.value;
        console.log(typeof parseInt(startAmountEl.value));
    //put search country into input Destination
    if(typeof parseInt(startAmountEl.value) !== "number")return;
    
    fetch (`https://restcountries.eu/rest/v2/name/${destinationEl.value}`)
        .then (function (response){
            return response.json()
        })
        .then(function(data){
            code = (data[0].currencies[0].code);
            symbol = (data[0].currencies[0].symbol)
            console.log(data)


            // document.querySelector("#toCountry").textContent = code;
        })
    .then (function(){
            fetch(`https://v6.exchangerate-api.com/v6/96d07d67e0f9e9f46600886f/pair/USD/${code}/${startAmountEl.value}`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data);
            endAmountEl.value =`${symbol}${data.conversion_result}`;
            conversionEl.textContent = (`$${startAmountEl.value} USD is ${endAmountEl.value} in ${destinationEl.value}`);
        })
    })
});
