var container = document.querySelector(".container");

window.onload = getData()

function getData() {
    axios.get("https://dummyjson.com/products").then((res) => {
        res.data.products.forEach((el, index) => {
            container.innerHTML +=
            `<div class="productContainer">
                <div class="top">
                    <img src="${el.thumbnail}">
                </div>
                <div class="mid">
                    <div class="title">${el.title}</div>
                    <div class="discount">Discount Percentage: %${el.discountPercentage}</div>
                    <div class="stock">Stock: ${el.stock}</div>
                    <div class="rating">Rating: ${el.rating}/5</div>
                    <div class="price">$${el.price}</div>
                </div>
            </div>`;
        });
    });
}



// function fetchCategories() {

// }




