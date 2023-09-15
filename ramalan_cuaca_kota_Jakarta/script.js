fetch('https://api.openweathermap.org/data/2.5/forecast?id=1642911&units=metric&appid=d62d3c2ce9a0ecb1ab1177bc06d3f116')
  .then(respon => respon.json())
  .then(respon => {
    console.log("Weather Forecast: ")
    Array.prototype.forEach.call(respon.list, (data) => {
      const time = new Date(data.dt * 1000)
      if (time.getHours()===7){
        console.log(`${time.toDateString()} : ${data.main.temp}\u2103`)
      }
    })
  })
  .catch(error => console.log(error))
