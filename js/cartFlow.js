function cartFlow(){
  const cart = sessionStorage.getItem("cart");
  if (!cart) {
      window.location.href = "cart-empty.html";
      return;
  }
  
  if(JSON.parse(cart).length === 0){
      window.location.href = "cart-empty.html";
  } else{
      window.location.href = "cart.html";
  }
}