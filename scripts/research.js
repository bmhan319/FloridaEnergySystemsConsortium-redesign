var energy = [
  {name: "Renewable Energy",
   imgSource: "img/research-wind.jpg",
   link1: "BioEnergy",
   link2: "Ocean",
   link3: "Solar",
   link4: "Wind"
  },{name: "Energy Storage",
   imgSource: "img/research-storage.jpg",
   link1: "Batteries",
   link2: "Energy Infrastructure",
   link3: "Electric Grid",
   link4: "SuperConductors"
  },{name: "Fossil Fuels",
   imgSource: "img/research-coal.jpg",
   link1: "Coal",
   link2: "Co2 Emission",
   link3: "Natural Gas",
   link4: "Oil"
  },{name: "Nuclear Energy",
   imgSource: "img/research-nuclear.jpg",
   link1: "Disposal",
   link2: "Nuclear Storage",
   link3: "Safety"
  },{name: "Efficient End Use",
   imgSource: "img/research-end-use.jpg",
   link1: "Buildings",
   link2: "Transportation",
   link3: "Water Use"
  },{name: "Environmental Impact",
   imgSource: "img/research-impact.jpg",
   link1: "Air Quality",
   link2: "Climate",
   link3: "Land",
   link4: "Water"
  }
]

let energyListings;

document.addEventListener("DOMContentLoaded", function() {
  
  energyListings = new Vue({
    el: '#energyListings',
    data: {
      profiles: energy
    }
  })
})