const expensedata = JSON.parse(localStorage.getItem("expenses")) || [];

function calculateTotalExpenses(data) {
    return data.reduce((total, expense) => {
        return total + Number(expense.amount);
    }, 0);
}

const total = calculateTotalExpenses(expensedata);
document.getElementById("expensesnumber").innerHTML = `$ ${total}`;
console.log("Total Expenses:", total);


function calculateTopThreeCategory() {
    const expensedata = JSON.parse(localStorage.getItem("expenses")) || [];
    const sortedExpenses = expensedata.sort((a, b) => Number(b.amount) - Number(a.amount));
    return sortedExpenses.slice(0, 3);
}

let topThreeCategory = calculateTopThreeCategory();
let firstcategorydata = topThreeCategory[0];
console.log(firstcategorydata['name']);
console.log(firstcategorydata['amount']);
let secondcategorydata = topThreeCategory[1];
console.log(secondcategorydata['name']);
console.log(secondcategorydata['amount']);
let thirdcategorydata = topThreeCategory[2];
console.log(thirdcategorydata['name']);
console.log(thirdcategorydata['amount']);
console.log("Top 3 Expenses:", topThreeCategory);
document.getElementById("firstcategoryamount").innerHTML = `$ ${firstcategorydata['amount']}`;
document.getElementById("firstcategoryname").innerHTML = firstcategorydata['name'];
document.getElementById("secondcategoryamount").innerHTML = `$ ${secondcategorydata['amount']}`;
document.getElementById("secondcategoryname").innerHTML = secondcategorydata['name'];
document.getElementById("thirdcategoryamount").innerHTML = `$ ${thirdcategorydata['amount']}`;
document.getElementById("thirdcategoryname").innerHTML = thirdcategorydata['name'];




function getTopSixExpenses() {
    const expensedata = JSON.parse(localStorage.getItem("expenses")) || [];
    const sorted = expensedata.sort((a, b) => Number(b.amount) - Number(a.amount));
    return sorted.slice(0, 6);
}

const topSixExpenses = getTopSixExpenses();
console.log("Top 6 Expenses:", topSixExpenses);


// final table 
function getTopSixExpenses() {
    const expensedata = JSON.parse(localStorage.getItem("expenses")) || [];
    return expensedata
        .sort((a, b) => Number(b.amount) - Number(a.amount))
        .slice(0, 6);
}

function renderTopSixExpenses() {
    const topExpenses = getTopSixExpenses();
    const tbody = document.getElementById("expense-table-body");
    tbody.innerHTML = "";

    topExpenses.forEach(exp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${exp.name}</td>
            <td>${exp.amount}</td>
            <td>${exp.time}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", renderTopSixExpenses);
