function reqListener() {
    const countryArr =JSON.parse(this.responseText);
    countryArr.forEach(country => {
        if (country.currencies && country.currencies.hasOwnProperty("USD")) {
            console.log(country.name.common);
        }
    });


}


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", "https://restcountries.com/v3.1/all");
   req.send();