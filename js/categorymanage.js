// getitem from localstorage 
let categories = JSON.parse(localStorage.getItem("categories")) || [];
function saveToStorage(){
    localStorage.setItem("categories", JSON.stringify(categories));   
}

// get the category
function renderCategories(){
    const tbody = document.getElementById("categoryTableBody");
    tbody.innerHTML = "";
    categories.forEach((item, index)=>{
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td contenteditable="false">${item.category}</td>
          <td>
            <button onclick="editCategory(${index}, this)" class="update-button">Edit</button>
          </td>
          <td>
          <button onclick="deleteCategory(${index})" class="delete-button">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
    });
}

// add category 
function addCategory(){
    const input = document.getElementById("categoryInput");
    const categoryName = input.value.trim();
    if(!categoryName){
        alert("Category name cannot be empty.");
        return;
    }
    if(categories.some(cat => cat.category.toLowerCase() === categoryName.toLowerCase())){
        alert("Category already exists.");
        return;
    }
    categories.push({category:categoryName});
    saveToStorage();
    input.value = "";
}

function editCategory(index,btn){
    const row = btn.parentElement.parentElement;
    const cell = row.children[1];
    if(btn.textContent === "Edit"){
        cell.contentEditable = true;
        cell.focus();
        btn.textContent = "Save";
    }
     else {
        const newName = cell.textContent.trim();
        if (!newName) {
          alert("Category cannot be empty.");
          return;
        }
        categories[index].category = newName;
        saveToStorage();
        renderCategories();
      }
}

function deleteCategory(index) {
      if (confirm("Are you sure you want to delete this category?")) {
        categories.splice(index, 1);
        saveToStorage();
        renderCategories();
      }
    }

    renderCategories();
