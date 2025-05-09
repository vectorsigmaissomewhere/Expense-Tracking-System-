const categorySelect = document.getElementById("categorySelect");
const categories = JSON.parse(localStorage.getItem("categories")) || [];

categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat.category;
    option.textContent = cat.category;
    categorySelect.appendChild(option);
});

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
function saveToStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Add expense function
function addExpense() {
    const inputName = document.getElementById("name").value;
    const inputAmount = parseFloat(document.getElementById("amount").value);
    const inputCategory = document.getElementById("categorySelect").value;
    const inputTime = document.getElementById("time").value;
    const inputDay = document.getElementById("day").value.toLowerCase();

    if (!inputName || isNaN(inputAmount) || !inputCategory || !inputTime || !inputDay) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const expense = {
        name: inputName,
        amount: inputAmount,
        category: inputCategory,
        time: inputTime,
        day: inputDay
    };

    expenses.push(expense);
    saveToStorage();

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("categorySelect").value = "";
    document.getElementById("time").value = "";
    document.getElementById("day").value = "";

    alert("Expense added successfully!");
}