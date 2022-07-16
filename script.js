



//  display image slides

var slideIndex = 0;
showSlides()
function showSlides(){
  var i;
  var slides = document.getElementsByClassName("container")
  var dots = document.getElementsByClassName("dots")
  for(i = 0; i<slides.length; i++){
slides[i].style.display = "none";
  }

  slideIndex++
  if(slideIndex >slides.length){
    slideIndex = 1
  }


  for (i = 0; i< dots.length; i++){
    dots[i].className = dots[i].className.replace(" enable" , "")

  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " enable"
 
  setTimeout(showSlides, 2000)
}

// display menu
    function displayMenu(){
    
      var  menu = document.getElementById("menu")
    menu.style.width = "35%"

  }

  // close menu
function closeMenu(){
  var bar = document.getElementById("bar")
var  menu = document.getElementById("menu")
  menu.style.width ="0"

}

// show cart
function showCart(){
  var  cart = document.getElementById("cart")
  cart.style.width = "100%"
}


// closs cart
function closeCart(){

var  cart = document.getElementById("cart")
  cart.style.width = "0"

}

// filter input
function filterInput(){
  let searchInp, ul, listItems, filter, text, a , i;
   searchInp = document.getElementById("search");
   listItems = document.querySelectorAll("li");
   ul = document.getElementById("mylist");
   filter = searchInp.value.toLowerCase();
for(i=0; i < listItems.length; i++){
  a = listItems[i].getElementsByTagName("a")[0];
text = a.textContent || a.innerText
if(text.toLowerCase().indexOf(filter) > -1) {
  listItems[i].style.display = "";


}


else{
  listItems[i].style.display ="none";
}
}


}



// add to cart
function addToCart(x){
let item = document.getElementById("items").parentNode
const childnode = item.children[x]

let selectedProduct = childnode.children[0]
const caption = childnode.children[1]
const productName = caption.children[5]
const priceofItem = caption.children[3]
const add = caption.children[7]
let selectedImage = document.getElementById("img")
let info = document.getElementById("info")
let date = document.getElementById("date")
let price = document.querySelector(".itemprice")
let myUl = document.getElementById("itemDetails")
let cartProducts = document.getElementById("cartProducts")
let list = document.getElementById("lI")

selectedImage.src = selectedProduct.src
selectedImage.style.width = "50px"
const d = new Date()
let year = d.getFullYear()
let month = d.getMonth() + 1
let day = d.getDate()
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
let weekDay = weekday[d.getDay()]

let dateAdded = `${weekDay}, ${day}-${month}-${year}.`



date.innerText = dateAdded
price.textContent = priceofItem.innerText.slice(1,priceofItem.length)
info.innerText = productName.innerText


info.innerText = productName.innerText
myUl.innerHTML += list.innerHTML
myUl.children[0].style.display = "none"

cartProducts.style.display = "none"
let pricesects = document.querySelectorAll(".priceee")
pricesects.forEach((pricesec) => {
  pricesec.style.display = "block"
})
// })update total
updateTotal()

const qtyArray = document.querySelectorAll(".q")
qtyArray.forEach((q)=>{
  q.style.display = "block"
})



document.getElementById("btn").style.display = "block"

// cart count
let count =  document.getElementById("count")
let num = +(count.innerHTML)
count.style.display ="block"
count.innerHTML = num += 1

// Display message

add.remove()

}





// selecting quantity


function getVal(event){
  var input = event.target
if(isNaN(input.value) || input.value <= 0 ){
  input.value = 1
}

  inputPrice = input.parentNode.parentNode.children[1].children[1]
let updatedPrice = (+(inputPrice.innerHTML)* input.value)
  inputPrice.innerHTML = updatedPrice.toFixed(2)

updateTotal()
  


}



function updateTotal(){




  let priceee = document.querySelectorAll(".itemprice")
  
  const priceArray = []
  
  
  priceee.forEach ((pr) =>{
    let pricee = +(pr.innerHTML)

  
    priceArray.push(pricee)
  
    })
  
    function getSum(total,num){
      return total + num
  
    
  }

  let totalPrice = priceArray.slice(1,priceArray.length)
  
  newTotal = totalPrice.reduce(getSum, 0)
  
  let dels = document.querySelectorAll(".fa-trash")
  for(i = 0; i<dels.length; i++){
    dels[i].style.display ="block"
  }
  
  
  let total = document.getElementById("total")
  total.style.display = "block"
  let bal = document.getElementById("bal")
  bal.innerHTML = newTotal.toFixed(2)
  document.getElementById("shippingfee").style.display ="block"
  let shippingfee = Math.round((Math.random()*5000))
  document.getElementById("fee").innerText = shippingfee.toFixed(2)
  
  let subtotal = (shippingfee + newTotal).toFixed(2)
  document.getElementById("subtotal").style.display = "block"
  document.getElementById("balance").innerText = subtotal
  
  }


// Deleting cart items

let itemsToDel = document.querySelectorAll(".itemsAdded");
itemsToDel.forEach((itemToDel) => {
 
  itemToDel.addEventListener("click", (e) => deleteItem(e))

  
}
)


function deleteItem(e){
  
  if(e.target.classList.contains("fa-trash") ){
  
  e.target.parentNode.parentNode.remove()
  
  UpdateTotal2(e)

  
  let count = document.getElementById("count").innerHTML
  
  let i= count; 
  if(i < 0){
    
    count = i--
  }
     
  
  }
  
  let count =  document.getElementById("count")
  let num = +(count.innerHTML)
  count.innerHTML = num -= 1
  
  if(count.innerHTML === "0"){
    
  count.style.display ="none"
  }
  
  
   }
  

//Total after deleting item.
function UpdateTotal2(e){
  const pnode =  e.target.parentNode.parentNode

  const q = pnode.children[1]
  
  const realprice = q.children[1].innerHTML

  let bal = document.getElementById("bal")
  let newbal = bal.innerHTML - (+realprice)
  bal.innerHTML = newbal
  
  let subtotal = document.getElementById("balance")
  
  let newsubtotal = subtotal.innerHTML - (+realprice)
  subtotal.innerText = newsubtotal.toFixed(2)
  
}



function addToWishlist(event){
let fav = event.target.parentNode.parentNode
if(event.target.classList.contains("fa-heart-o")){
event.target.classList.remove("fa-heart-o")
event.target.classList.add("fa-heart")

let itemImg = fav.getElementsByTagName("img")[0].src

let itemName = fav.getElementsByClassName("name")[0].innerText

let itemPrice = fav.getElementsByClassName("price")[0].innerText


let favorite = document.getElementById("fav")

favorite.innerHTML += `

<div>
<img src = "${itemImg}" width = "50px" height = "50px">
<p style = "color: blue; font-size: smaller;"> ${itemName}</p>
<p style = "color: blue; font-size: smaller;"> ${itemPrice}</p>
<i style = "color: red" class = "fa fa-trash" onclick = "deleteFav(event)"> </i>
</div>
`
}
}

function showWishlist(){

  document.querySelector(".wishlist").style.display = "block"

  
}

function deleteFav(event){
  
  if(event.target.classList.contains("fa-trash") ){
  
    event.target.parentNode.remove()
  }
}

// Checkout
function display(event)
{
let selected = event.target.parentNode
let msg = document.getElementById("msg")

let text

switch(selected.id){
  case "cash":
    text = "Pay with cash upon delivery.";
    break
    case "spec":
    text = "Using your specta ID is the smartest, safest and most convinient way to make purchases and pay on instalments.";
  
}
msg.textContent = text
}
// display options
function displayOptions(){
  let opts = document.getElementById('opt')
  if(opts.style.display =='none'){
    opts.style.display ='block'
  }
  else if(opts.style.display =='block'){
    opts.style.display ='none'
  }
}
