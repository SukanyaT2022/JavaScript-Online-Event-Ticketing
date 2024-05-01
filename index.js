//step2 count ticket and update the count
var countTicket = 0

//step 4 make price array
let priceArray = [100,80,50,30]

var totalPriceVar = 0

function passIDSelectDiv(id){
    //step 1 change color
    //()no quotation coz we store value in variable so no quotation
let readID = document.getElementById(id).style.backgroundColor = "grey"
countTicket= countTicket+1//increase add one ticket
// console.log(countTicket)

//step 3 make total tickets and price
// ('') mention id so in quotation
let readtotalTicket = document.getElementById('totalTicket').innerText = countTicket
//charAt() tell charactor location
let firstCharacter = id.charAt(0)
if (firstCharacter=="a"){
    totalPriceVar = totalPriceVar + priceArray[0]
}

}


