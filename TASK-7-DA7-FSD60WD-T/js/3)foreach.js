function reqListener() {
    const countryArr =JSON.parse(this.responseText);
    let answer = countryArr.filter((dummy) => (dummy.currencies !== undefined));
    let realanswer = answer.filter((dollar) => (dollar.currencies.name === "United States dollar"));

    realanswer.forEach(country => {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital[0]);
        console.log("Flag:", country.flags.svg);
      });
}


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", "https://restcountries.com/v3.1/all");
   req.send();