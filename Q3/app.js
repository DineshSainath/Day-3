var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

xhr.onload = function () {
  if (xhr.status === 200) {
    var responseData = JSON.parse(xhr.responseText)
    console.log(responseData)

    responseData.forEach((country, index) => {
      var name = country.name.common
      var region = country.region
      var subRegion = country.subregion
      var population = country.population

      //display country name
      var showName = document.createElement('h2')
      showName.textContent = name
      document.body.appendChild(showName)

      //display country region
      var showRegion = document.createElement('p')
      showRegion.textContent = 'Region: ' + region
      document.body.appendChild(showRegion)

      //display country sub region
      var showSubRegion = document.createElement('p')
      showSubRegion.textContent = 'SubRegion: ' + subRegion
      document.body.appendChild(showSubRegion)

      //display country population
      var showPopulation = document.createElement('p')
      showPopulation.textContent = 'Population: ' + population
      document.body.appendChild(showPopulation)
    })
  }
}

xhr.send() //send the request

// country names, regions, sub regions, population
