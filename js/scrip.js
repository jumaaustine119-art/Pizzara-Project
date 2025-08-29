const selecttab = document.querySelectorAll(".pizza");
const pizzacategories = document.querySelectorAll(".pizza-section");
console.log(pizzacategories);
console.log(selecttab);

for (let tab of selecttab) {
  if (tab.textContent.toLowerCase() === "chicken pizza") {
    console.log(tab)
    tab.classList.add("active");
  }
}

for(let category of pizzacategories){
    if(category.classList.contains("chicken-pizza")){
        category.style.desplay="flex"
    }
    else{
        category.style.display="none"
    }
}

for(let tab of selecttab){
    tab .addEventListener("click", () =>{
        console.log(tab);
        for(let tab of selecttab){
            if(tab.classList.contains("active")){
                tab.classList.remove("active");
            }
        }
  
        tab.classList.add("active");
        const tabName = tab.textContent.toLowerCase();
    console.log(tabName);
    if(tabName === "chicken pizza"){
        for(let category of pizzacategories){
            if(category.classList.contains("chicken-pizza")){
                category.style.display = "flex";
            }
            else{
                category.style.display = "none";
            }
        
        }
        
    }
    else if(tabName === "pepperoni"){
            for(let category of pizzacategories){
                if(category.classList.contains("pepperoni")){
                    category.style.display = "flex"
                }
                else{
                    category.style.display = "none"
                }
            }
        }
        else if(tabName === "margherita"){
            for(let category of pizzacategories){
                if(category.classList.contains("Margherita")){
                    category.style.display = "flex"
                }
                else{
                    category.style.display = "none"
                }
            }
        }
        else if(tabName === "hawaiian"){
            for(let category of pizzacategories){
                if(category.classList.contains("Hawaiian")){
                    category.style.display = "flex"
                }
                else{
                    category.style.display = "none"
                }
            }
        }
        else if(tabName === "meat lover’s pizza"){
            for(let category of pizzacategories){
                if(category.classList.contains("Meat-pizza")){
                    console.log(category)
                    category.style.display ="flex"
                }
                else{
                    category.style.display = "none"
                }
            }
        }
    })
          
}