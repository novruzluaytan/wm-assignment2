var container = document.querySelector(".container");
var navbar = document.querySelector(".navbar")
var categoryDropDown = document.getElementById("category");
var searchItem = document.getElementById("myInput");

window.onload = getData()
window.onload = fetchCategories()


function getData() {
    axios.get("https://dummyjson.com/products").then((res) => {
        container.innerHTML = ""
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
                    <div class="category">${el.category}</div>
                </div>
            </div>`;
        });
    });
}


function fetchCategories() {
    axios.get("https://dummyjson.com/products/categories").then((res) => {


        let option = document.createElement("option");
        option.setAttribute('value', "All");
        option.setAttribute("selected", "selected");

        let optionText = document.createTextNode("All");
        option.appendChild(optionText);

        categoryDropDown.appendChild(option);


        res.data.forEach((e, index) => {

            let option = document.createElement("option");
            option.setAttribute('value', e);

            let optionText = document.createTextNode(e);
            option.appendChild(optionText);

            categoryDropDown.appendChild(option);
            
        });
    });
};

function onCategorySelect(){
    var selectedOption = categoryDropDown.options[categoryDropDown.selectedIndex].text;
    if(selectedOption == "All") {
        getData()
    }
    else {
        axios.get("https://dummyjson.com/products/category/" + selectedOption).then((res) => {
            container.innerHTML = ""
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
   
}


function onSearch(){
    var searchQuery = searchItem.value
    axios.get("https://dummyjson.com/products/search?q=" + searchQuery).then((res) => {
        container.innerHTML = ""
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





