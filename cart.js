var removecartbutton= document.getElementsByClassName("btn-danger")

for(i=0;i<removecartbutton.length;i++) {
    button=removecartbutton[i]
    button.addEventListener("click", remove)
}
function remove(e){
    var buttonclicked=e.target
    buttonclicked.parentElement.parentElement.remove()
    updatecarttotal()
}


function updatecarttotal(){
    var cartitemcontainer=document.getElementsByClassName("cart-items")[0]
    var cartrows =cartitemcontainer.getElementsByClassName("cartrow")
    var total=0
    for(i=0;i<cartrows.length;i++) {
        var cartrow = cartrows[i]
        var priceelements=cartrow.getElementsByClassName("cart-item-price")[0]
        var quantityelement=cartrow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceelements.innerText.replace("$",""))
        var quantity= quantityelement.value
        total=total+(price*quantity)      
    }
    document.getElementsByClassName("cart-total-price")[0].innerText="$"+total .toFixed(2)  
}


var addtocartbuton=document.getElementsByClassName("shop-item-button")

for(i=0;i<addtocartbuton.length;i++) {
    var button=addtocartbuton[i]
    button.addEventListener("click", e=>{
        var buttonclicked=e.target
        var shopitem = buttonclicked.parentElement.parentElement
        var title=shopitem.getElementsByClassName("shop-item-title")[0].innerText
        var price =shopitem.getElementsByClassName("shop-item-price")[0].innerText
        var imagesrc=shopitem.getElementsByClassName("shop-item-image")[0].src

        additemtocart(title,price,imagesrc)
        updatecarttotal()
    })
}

function additemtocart(title,price,imagesrc){
    var cartrow= document.createElement("div")
    cartrow.classList.add("cartrow")
    var cartitems=document.getElementsByClassName("cart-items")[0]
    
    var cartitemnames=document.getElementsByClassName("cart-item-title")

    for(i=0;i<cartitemnames.length;i++) {
        if(cartitemnames[i].innerText==title) {
            alert("it's already in cart")
            return
        }
    }
    
    var cartrowcontents= ` <div class="cart-item">
    <img src="${imagesrc}" class="cart-item-image" width="100px">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-item-price">${price}</span>
<div class="cart-quantity">
    <input class="cart-quantity-input" value="1" onkeyup="updatecarttotal()">
    <button class="btn-danger">remove</button>
</div> `
               
cartitems.append(cartrow)
cartrow.innerHTML=cartrowcontents
cartrow.getElementsByClassName("btn-danger")[0].addEventListener("click", remove)
    updatecarttotal()
}
