var team = [
  {name: "Faculty",
   name2: ".",
   imgSource: "img/team-faculty.jpg",
   alt: "teachers",
   visible: "invisible",
   link: "View the Faculty"
  },{name: "Leadership",
   name2: "Team",
   imgSource: "img/team-leader.jpg",
   alt: "team leader",
   link: "View the Leadership Team"
  },{name: "University",
   name2: "Leads",
   imgSource: "img/team-univ-lead.jpg",
   alt: "university lead",
   link: "View the University Leads"
  },{name: "Advisory",
   name2: "Board",
   imgSource: "img/team-advisory.jpg",
   alt: "advisory board",
   link: "View the Advisory Board"
  },{name: "Oversight",
   name2: "Committee",
   imgSource: "img/team-oversight.jpg",
   alt: "oversight team",
   link: "View the Committee"
  },{name: "Search By",
   name2: "University",
   imgSource: "img/team-university.jpg",
   alt: "university",
   link: "Search By University"
  }
]

let teamListings;

document.addEventListener("DOMContentLoaded", function() {
  
  teamListings = new Vue({
    el: '#teamListings',
    data: {
      profiles: team
    }
  })
})