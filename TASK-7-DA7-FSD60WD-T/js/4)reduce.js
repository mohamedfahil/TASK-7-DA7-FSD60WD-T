function reqListener() {
    const countryArr =JSON.parse(this.responseText);
    let totalPopulation = data.reduce((acc, country) => {
        if (country.currencies && country.currencies.hasOwnProperty("USD")) {
            return acc + country.population;
        }
        return acc;
    }, 0);

}


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", "https://restcountries.com/v3.1/all");
   req.send();