function createCart() {
    var tableBody = document.querySelector("#table-items-body");
    var table = document.querySelector("#table-body");
    var total = 0;

    var cart = JSON.parse(sessionStorage.cart);

    for (var i = 0; i < cart.length; i++) {

        var row = document.createElement("tr");

        var name = document.createElement("td");
        name.innerHTML = cart[i].name;
        
        var freeDelivery = document.createElement("td");
        freeDelivery.innerHTML = cart[i].freeDelivery ? "Yes" : "No";

        var price = document.createElement("td");
        price.innerHTML = cart[i].price;
        total += Number(cart[i].price);

        var del = document.createElement("a");
        del.href = "#";
        del.innerHTML = "Delete";
        del.classList.add("delete");

        row.appendChild(name);
        row.appendChild(freeDelivery);
        row.appendChild(price);
        row.appendChild(del);

        tableBody.appendChild(row);
    }

    var totalPriceDiv = document.createElement("div");
    totalPriceDiv.id = "totalPrice";
    totalPriceDiv.innerHTML = "Total Rs. " + total;
    table.appendChild(totalPriceDiv);
}

createCart();

document.querySelectorAll(".delete").forEach(function(element, index) {
    element.addEventListener("click", function() {
       var cart = JSON.parse(sessionStorage.cart);
        // Update the cart in session storage
        cart.splice(index, 1);        
        sessionStorage.setItem("cart", JSON.stringify(cart));
        // Get the new cart from session storage to ensure its accurate
        cart = JSON.parse(sessionStorage.getItem("cart"));


        if(cart.length == 0)
        {
            window.location.href = "cart-empty.html";
        }
        else{
            window.location.href = "cart-notification.html";
        }
   
    });
});