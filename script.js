// Tip Calculator

// global access to all inputs 
// console.log("hello,world");
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perpersonTotal')

// here we are getting number of people from umberOfPeopleDiv
let numberOfPeoples =Number(numberOfPeopleDiv.innerText);
const calculateBill=()=>{
    // console.log(numberOfPeoples);
    // console.log(billInput.value);
         
//  get bill from the  user and convert it into a number
const bill=Number(billInput.value);
console.log(bill);
// get the tip from user & convert it into a percentage ( divide it by 100)
const tipPercentage=Number(tipInput.value)/100;
// console.log(tipPercentage);
// total tip amount


const TipAmount= Number(bill*tipPercentage);
// console.log({TipAmount: TipAmount});

// *total  amount 
    const Total = Number(bill + TipAmount);

    // console.log({ Totaltipamount: Totaltipamount })

// here we are dividing total amount by dividing it with given no.

    const perPersonTotal = Total / numberOfPeoples;
    // console.log({perPersonTotal});
    
    // total bill 
    perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`;

}
const increasePeople =()=>{
    numberOfPeoples += 1;
    numberOfPeopleDiv.innerText=numberOfPeoples;
    calculateBill();
}


const decreasePeople =()=>{
    
    if(numberOfPeoples <= 1){
        alert('you can not enter less than 1 people');
        return;
    }
    numberOfPeoples -=1;
    numberOfPeopleDiv.innerText=numberOfPeoples;
    calculateBill();
}














// console.log({ Totaltipamount: Totaltipamount })
// const calculateBill =()=>{
//     console.log(document.getElementById(number_of_people).innerText)
//  console.log(document.getElementById('billTotalInput').value);

// }

// const header=document.getElementById("How_are_you");

// console.log(document.getElementById("How_are_you").innerHTML=" fuck you guys");