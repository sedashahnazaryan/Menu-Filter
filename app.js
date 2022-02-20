import { menu } from "./data.js";


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
   
    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
 
}


const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(filterBtn => {
  filterBtn.addEventListener("click", () =>{
    const value = filterBtn.getAttribute("data-id");
    if (value === "all"){
       displayMenuItems(menu);
       return;
      
    }
    const filterArr = menu.filter(item => item.category === value);
    
    let card = filterArr.map(function (item){
      return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    }).join("");
    sectionCenter.innerHTML = card;
  })
});
let searchText ="";
let search = document.querySelector("input");
search.addEventListener("keyup",(e)=>{
searchText = e.target.value;
refresh()
});
let id;
function refresh(){
  if(id !== undefined){
    clearTimeout(id);
  }
 id= setTimeout(()=>{
   console.log("running");
  render()},1000);
}
function render(){
let searchArr = menu.filter(item =>{
 return item.desc.indexOf(searchText) !== -1;
})
 displayMenuItems(searchArr)
}
render()







