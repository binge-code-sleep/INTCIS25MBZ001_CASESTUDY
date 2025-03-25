function editMenuItem() {

    var name = document.querySelector("#title").value;
    var price = document.querySelector("#price").value;
    var active = document.querySelector("#inStockYes").checked;
    var dateOfLaunch = new Date(document.querySelector("#dateOfLaunch").value);
    var category = document.querySelector("#category").value;
    var freeDelivery = document.querySelector("#freeDelivery").checked;

    var items = JSON.parse(sessionStorage.menuItems);

    var obj = {
        name,
        price,
        active,
        dateOfLaunch,
        category,
        freeDelivery
    }

    for (var i = 0; i < items.length; i++) {
        if (items[i].name == name) {
            items[i] = obj;
            sessionStorage.setItem("menuItems", JSON.stringify(items));
            return;
        }
    }

    items.push(obj);
    sessionStorage.setItem("menuItems", JSON.stringify(items));
}

function prefillMenuItemData() {
  const menuItemData = JSON.parse(sessionStorage.getItem('menuItemToEdit'));

  if (!menuItemData) {
    return;
  }

  document.getElementById('title').value = menuItemData.name;
  document.getElementById('price').value = menuItemData.price;
  
  if (menuItemData.active) {
    document.getElementById('inStockYes').checked = true;
  } else {
      document.getElementById('inStockNo').checked = true;
  }
  document.getElementById('dateOfLaunch').value = new Date(menuItemData.dateOfLaunch).toISOString().split('T')[0];
  document.getElementById('category').value = menuItemData.category;
    if(menuItemData.freeDelivery){
        document.getElementById('freeDelivery').checked= true;
    }else{
        document.getElementById('freeDelivery').checked= false;
    }
}

window.addEventListener('load', prefillMenuItemData);

