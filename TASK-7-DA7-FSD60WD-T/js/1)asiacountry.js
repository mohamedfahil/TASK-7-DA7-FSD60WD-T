function reqListener() {
    const countryArr =JSON.parse(this.responseText);
    let asiaCountries = countryArr.filter(country => country.region === "Asia");
    console.log(asiaCountries);

}


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", "https://restcountries.com/v3.1/all");
   req.send();