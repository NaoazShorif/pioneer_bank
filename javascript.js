const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login_area");
    const transitionArea = document.getElementById("transition-area");
    loginArea.style.display = "none";
    transitionArea.style.display = "block";
})


// 2nd part...deposite button handler...
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmountNumber = parseFloat(document.getElementById("depositAmount").value);
    addingAmount ("currentDeposit", depositAmountNumber);
    addingAmount ("currentBalance", depositAmountNumber);
})

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmountNumber = parseFloat(document.getElementById("withdrawAmount").value);
    addingAmount("currentWithDraw" , withdrawAmountNumber);
    removeAmount("currentBalance" , withdrawAmountNumber);
})

// functions

function addingAmount (id, depositAmountNumber ){
    const currentDepositNumber = parseFloat(document.getElementById(id).innerText);
    const tottalDeposit = depositAmountNumber + currentDepositNumber;

    document.getElementById(id).innerText = tottalDeposit;
    document.getElementById("depositAmount").value = "";
}
function removeAmount(id , withdrawAmountNumber){
    const currentWithdrawAmountNumber = parseFloat(document.getElementById(id).innerText);
    const finalNumber = currentWithdrawAmountNumber -  withdrawAmountNumber;

    document.getElementById(id).innerText = finalNumber;
    document.getElementById("withdrawAmount").value = "";

}

