function addToCart(product) {
    alert(product + " has been added to your cart!");
}


function searchProducts() {

    const search = document.getElementById("search").value;

    if (search.trim() === "") {
        alert("Please enter a product.");
        return;
    }

    alert("Searching for: " + search);
}
