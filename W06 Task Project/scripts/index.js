const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener('click', ()=>{
  const subTotal = parseFloat(document.getElementById("sub-total").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people-no").value);

  calculateTip(subTotal, tip, people);
});

const calculateTip = (bill, tipPercentage, noOfPeople) => {
  const totalTip = (bill * (tipPercentage/100));
  const totalAmount = totalTip + bill;
  document.getElementById("tip-amount-box").classList.remove('hidden');
  if(noOfPeople > 1){
    document.getElementById("total-amount").innerHTML = `Amount(tip inclusive): $${totalAmount.toFixed(2)} ($${(totalAmount/noOfPeople).toFixed(2)} each)`;
    document.getElementById("tip-amount").innerHTML = `Tip Amount: $${totalTip.toFixed(2)} ($${(totalTip/noOfPeople).toFixed(2)} each)`;
  }else{
    document.getElementById("tip-amount").innerHTML = `Tip Amount: $${totalTip.toFixed(2)} ($${totalTip.toFixed(2)})`;
    document.getElementById("total-amount").innerHTML = `Amount(tip inclusive): $${totalAmount.toFixed(2)}` ;
  }
};