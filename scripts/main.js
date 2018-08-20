var financials = [
  {name: "annual report",
   imgSource: "img/lb-report2.png"
  },{name: "grants",
   imgSource: "img/lb-grants-cropped2.jpg"
  },{name: "newsletters",
   imgSource: "img/lb-newsletters2.jpg"
  },{name: "donate",
   imgSource: "img/lb-donate-cropped2.jpg"
  }
]

let financeListings;

document.addEventListener("DOMContentLoaded", function() {
  
  financeListings = new Vue({
    el: '#financeListings',
    data: {
      profiles: financials
    }
  })
})