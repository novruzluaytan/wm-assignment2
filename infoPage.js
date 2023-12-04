var title = document.getElementById("title");
var description = document.getElementById("description");
var price = document.getElementById("price");
var discount = document.getElementById("discount");
var brand = document.getElementById("brand");
var category = document.getElementById("category");
var rating = document.getElementById("rating");
var imageContainer = document.querySelector(".imageContainer");
let slideIndex = 1;


window.onload = getProductById()


function getProductById() {
    var id = localStorage.getItem("id")

    axios.get("https://dummyjson.com/products/" + id).then((res) => {


        res.data.images.forEach((element, index) => {
            imageContainer.innerHTML +=
                ` <div class="mySlides fade">
                <div class="numbertext">${index + 1} / ${res.data.images.length}</div>
                <img src="${element}" style="width:400px; height:350px" >
              </div>`;
        });

        title.innerHTML = res.data.title
        description.innerHTML = res.data.description
        price.innerHTML = "$" + res.data.price
        discount.innerHTML = "Discount percentage: %" + res.data.discountPercentage
        brand.innerHTML = res.data.brand
        category.innerHTML = res.data.category
        rating.innerHTML = res.data.rating

        showSlides(1)
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}