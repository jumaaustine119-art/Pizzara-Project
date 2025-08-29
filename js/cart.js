let cartContainer = document.querySelector(".info");
let cartItems = document.querySelectorAll(".cart-item");
let cartIcon = document.querySelector(".cart-icon");
let pizzaItems=[]
const addToCartButtons = document.querySelectorAll(".buttons");
console.log(cartContainer);
console.log(cartIcon);

cartIcon.addEventListener("click", () => {
  //   console.log("hello world")
  cartContainer.classList.toggle("show-cart");
});
//
function updateCartCoutainer(){

  cartItems.map((cartItem) => {
    const cartProduct = document.createElement("div")
    cartProduct.classList.add("contact-cards")
    cartProduct.innerHTML=`
    <img src=${cartItem.img}width="50" alt="kebab">
        <div>${name}</div>
        <p>${price}</p>
        <div class="quntity">
          <button class="decriment">-</button>>
          <button>1</button>
          <button class="incriment">+</button>
        </div>
        <div>
        <p>${price}</p>
    `
    cartContainer.append("cartProduct")
  })
}


addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const name = event.target.parentElement.children[1].textContent;
    console.log(name);

    const price = event.target.parentElement.children[3].textContent.replace(
      "Ksh. ",
      ""
    );
    console.log(price);

    const img = event.target.parentElement.children[0].src;
    console.log(img);

    if (button.textContent === "Add to Cart") {
      button.textContent = "Remove from Cart";
      button.style.backgroundColor = "red";

      let pizzaItem={
        name: name,
        price: price,
        img:  img
      }
      pizzaItems.push(pizzaItem);
      console.log(pizzaItems)

   updateCartCoutainer()
   } 
else {
      button.textContent = "Add to Cart";
      button.style.backgroundColor = "black";

      const indexToRemove = pizzaItems.findIndex((element) => element.name ===  name)
    pizzaItems.splice(indexToRemove,1)
        console.log(pizzaItems)
      }

    })
  });

