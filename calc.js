function generateBill() {
    const total=document.getElementById("tot").value;
    const rate=document.getElementById("rate").value;
    const tip=parseFloat(total)*rate/100;
    const tax= parseFloat(total)*5.5/100;
    document.getElementById("tax").innerHTML="Tax: $"+tax;
    const grandtotal=parseFloat(total)+tax+parseFloat(tip);
    document.getElementById("total").innerHTML="Grand Total: $"+grandtotal;
    document.getElementById("tip").innerHTML="Tip: $"+tip;
}