const categorySelect = document.getElementById("categorySelect");
const categories = JSON.parse(localStorage.getItem("categories")) || [];

categories.forEach((cat, index)=>{
    const option = document.createElement("option");
    option.value = cat.category;
    option.textContent = cat.category;
    categorySelect.appendChild(option);
})