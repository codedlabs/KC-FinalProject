
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



let infocard1 = [
{title:'Climbers Plants',img:'./picturs/climbers.jpg',p:'Climbers are plants with long, flexible, climbing stems that are rooted in the ground, and usually have long dangling branches. They are easy to take car of as long as they are cared for and supported. Most climbing plants including vines, ivy and other flowering varieties are very hardy and adaptable. They can be grown in a garden bed, or even in a narrow pot! Some vines are so adaptable that they can be grown without framework or supporting wires. They need full sun to partial shade and any soil conditions is good for them.',page:'climbers'},
{title:'Bulb Plants',img:'./picturs/bulbs.jpg',p:'The definition of a bulb is any plant that stores its complete life cycle in an underground storage structure,  such as the lily, onion, hyacinth, or tulip. They have a period of growth and flowering. Bulbs are among the easiest group of plants to grow and care for. They can be grown either outdoor or indoor depending on the plant. Most of them do best in full sun (at least 6 hours a day of direct sun) and well-drained soil.',page:'BulbPlants'},
]

let infocard2 = [
{title:'Succulents',img:'./picturs/Succulents.jpg',p:'Succulents are plants with thick fleshy tissues adapted to water storage. Some succulents store water only in the stem and have no leaves or very small leaves, whereas others store water mainly in the leaves. Their thick leaves still need sufficient water nonetheless. They are an excellent, low maintenance plants for beginners. They thrive outdoors year-round only in warm regions, in other areas they are best as indoor plants.'},
{title:'Flowers',img:'./picturs/flowers.jpg',p:'Flowering plants are plants that bear flowerswhich are often brightly colored. They are small plants grown chiefly for their showy flowers. Most flowers are easy to plant from seeds, such as Sunflowers and Aquilegia. They can be planted both outdoors and indoors. Watering them every seven to ten days and giving them six hours of direct sunlight to grow and bloom is enough.'},
]

let infocards1 = document.getElementById(`infocards1`)
let infocards2 = document.getElementById(`infocards2`)


infocard1.forEach(x => {
  infocards1.innerHTML += `<a href="./${x.page}.html">
<div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
        <div class="box"> 
        <img src="${x.img}" alt="${x.title}">
         <h1>${x.title}</h1>
       </div>
    </div>
    <div class="flip-card-back">
      <h1>About ${x.title}:</h1>
    <p>${x.p}</p>
  </div>
    </div>       
    </div></a> `
});

infocard2.forEach(x => {
  infocards2.innerHTML += `<a href="./${x.title}.html">
<div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
        <div class="box"> 
        <img src="${x.img}" alt="${x.title}">
         <h1>${x.title}</h1>
       </div>
    </div>
    <div class="flip-card-back">
      <h1>About ${x.title}:</h1>
    <p>${x.p}</p>
  </div>
    </div>       
    </div></a> `
});
