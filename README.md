# wm-assignment2

Assignment2 - Web & Mobile 1 README
Welcome to the Assignment2 - Web & Mobile 1! This README file will guide you through the setup and usage of the application. Please follow the instructions carefully to ensure a smooth experience.

Table of Contents
API Integration
Data Display (1)
Data Display (2)
Data Display (3)
Apply Pagination
API Integration
A) Use JavaScript to fetch data
To integrate the API and fetch product data from dummyjson.com, follow these steps:

Open the index.html file in your preferred code editor.

Locate the JavaScript section (usually between <script> tags).

Before the <script> tags, create another <script> tag and include src="https://unpkg.com/axios/dist/axios.min.js" as a source.

Implement the fetch operation using JavaScript. Example:

Create a function, add the link to the beginning of the code. You can write whatever you 
function getData() {
    axios.get("https://dummyjson.com/products").then((res) => {
        container.innerHTML = "";
        if (res.data && Array.isArray(res.data.products)) {
            res.data.products.forEach((el, index) => {
                container.innerHTML +=
                    `
					//write the html part here

					`;
            });

        } else {
            console.error("Invalid response or missing product");
        }
    })
        .catch((error) => {
            console.error("Error:", error.message);
        });
}
	
B) Handle Potential Errors
Make sure to handle potential errors during the fetch operation. This could include network issues, server errors, or unexpected API responses. Update the catch block in the fetch operation to provide appropriate error handling.

Data Display (1)
A) Display Data on Home Page
Display product information on the home web page. Ensure that each product includes the title, price, discount, category, stock, and thumbnail. Modify the HTML structure to incorporate this information.

B) Format Display
Ensure the displayed data is well-formatted and readable. Utilize CSS styles to enhance the visual presentation of the product information.

Data Display (2)
A) Product Info Page
Implement a new product info page that opens when a product is clicked. This page should display detailed information about the selected product, along with a gallery of images.

Data Display (3)
A) Search and Filter Features
On the home page, provide the following features:

i. Search for a Keyword
Implement a search functionality that allows users to search for a keyword (part of title, description, or category). Update the JavaScript code to handle search queries.

ii. Filter Based on Category
Create a select box containing all available categories. Choosing any category from the list should filter the displayed products accordingly.

B) API Documentation
Refer to the API documentation to explore available endpoints and their usage. Update the fetch operation and implement necessary changes based on the API documentation.

Apply Pagination
A) Implement Pagination
If the API response contains more than 10 products, display only the first 10 and implement pagination navigation at the bottom of the product list. Allow users to navigate through the pages and fetch the corresponding data.









