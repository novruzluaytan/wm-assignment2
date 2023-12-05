var container = document.querySelector(".containeer");
var navbar = document.querySelector(".navbar")
var categoryDropDown = document.getElementById("category");
var searchItem = document.getElementById("myInput");
var infoPage = document.querySelector(".infoPage");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var requestUrl = "https://dummyjson.com/products"

const skip = 10
const itemsPerPage = 10
var page = 0

window.onload = getData()
window.onload = fetchCategories()


function getData() {
    var request = requestUrl + "?limit=" + itemsPerPage + "&skip=" + (skip*page)
    axios.get(request).then((res) => {
        container.innerHTML = "";
        if (res.data && Array.isArray(res.data.products)) {
            res.data.products.forEach((el, index) => {
                container.innerHTML +=
                        `<div class="productContainer" onClick="onProductClick(${el.id})">
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

            if(page == 0) {
                populatePagination(res.data.total)
            }

        } else {
            console.error("Invalid response or missing product");
        }
    })
    .catch((error) => {
        console.error("Error:", error.message);
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

function onCategorySelect() {
    searchItem.value = ""
    page = 0
    var selectedOption = categoryDropDown.options[categoryDropDown.selectedIndex].text;
    if (selectedOption == "All") {
        requestUrl = "https://dummyjson.com/products"
    }
    else {
        requestUrl = "https://dummyjson.com/products/category/" + selectedOption
    }
    getData()
}

function onSearch() {
    page = 0
    categoryDropDown.selectedIndex = "0"
    var searchQuery = searchItem.value
    requestUrl = "https://dummyjson.com/products/search?q=" + searchQuery + "&"
    getData()
}

function onProductClick(id) {
    localStorage.setItem("id", id)
    location.href = "./infoPage.html";
}

function populatePagination(total) {
    var pageNumber = total/itemsPerPage
    var ul = document.getElementById("pagination")
   ul.innerHTML = '';
    for (let i = 0; i < pageNumber; i++) { 
        ul.innerHTML += ` <li><a onClick="onPageClick(${i})" href="#">${i+1}</a></li>`
 
    }
}

function onPageClick(pageNumber) {
    page = pageNumber
    getData()
}