function reqListener() {
    const countryArr =JSON.parse(this.responseText);
    let countriesWithPopulationLessThan2Lakhs = countryArr.filter(country => country.population < 200000);
    console.log(countriesWithPopulationLessThan2Lakhs);

}


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", "https://restcountries.com/v3.1/all");
   req.send();