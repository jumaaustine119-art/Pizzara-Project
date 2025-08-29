let addButton=document.querySelector(".add")
console.log(addButton)
addButton.addEventListener("click",(event)=> {
console.log(event)


const name=event.target.parentElement.children[1].children[0].textContent;
console.log(name);

const img=event.target.parentElement.children[0].src;
console.log(img)

const price=event.target.parentElement.children[1].children[1].textContent;
console.log(price)
})
