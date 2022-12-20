'use strict'

let uzs = document.querySelector("#uzs"),
    usd = document.querySelector("#usd")

  
  usd.addEventListener("input", (e) => {
    const request = new XMLHttpRequest()
    request.open("GET", "/json/current.json")
    request.setRequestHeader("Content-type", "application/json; charset=utf8")
    request.send()

    request.addEventListener("load", () => {
      if(request.status === 200){
        const data = JSON.parse(request.response)
        uzs.value = (+usd.value * data.current.uzs).toFixed(2)
      }else{
        usd.value = "Something went wrong"
      }
    })
  })