var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

xhr.onload = function () {
  if (xhr.status === 200) {
    var responseData = JSON.parse(xhr.responseText)
    console.log(responseData)

    responseData.forEach((country, index) => {
      console.log(country.flags.png) //Displaying the flags in the console.

      var imageURL = country.flags.png
      var showImage = document.createElement('img')
      showImage.src = imageURL
      document.body.appendChild(showImage) //displaying the flag in the webpage
    })
  }
}

xhr.send() //send the request
