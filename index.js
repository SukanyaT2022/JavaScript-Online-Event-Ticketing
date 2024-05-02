//step2 count ticket and update the count
var countTicket = 0

//step 4 make price array
let priceArray = [100,80,50,30]

var totalPriceVar = 0

function passIDSelectDiv(id){
    //step 5
    //when delete the selection or deselect--check if it grey or no
    if (document.getElementById(id).style.backgroundColor == "grey"){
        if(id.charAt(0)=="a"){
            document.getElementById(id).style.backgroundColor = "orange"
            countTicket = countTicket - 1
            totalPriceVar = totalPriceVar - priceArray[0]
        }
        else if(id.charAt(0)=="b"){
            document.getElementById(id).style.backgroundColor = "pink"
            countTicket = countTicket - 1
            totalPriceVar = totalPriceVar - priceArray[1]
        }
        else if(id.charAt(0)=="c"){
            document.getElementById(id).style.backgroundColor = "lightgreen"
            countTicket = countTicket - 1
            totalPriceVar = totalPriceVar - priceArray[2]
        }else{
            document.getElementById(id).style.backgroundColor = "red"
            countTicket = countTicket - 1
            totalPriceVar = totalPriceVar - priceArray[3]
        }
        document.getElementById('totalTicket').innerText = countTicket
        document.getElementById('totalPrice').innerText = totalPriceVar
    }else{

  
    //step 1 change color
    //()no quotation coz we store value in variable so no quotation
let readID = document.getElementById(id).style.backgroundColor = "grey"
countTicket= countTicket+1//increase add one ticket

// console.log(countTicket)

//step 3 make total tickets and price
// ('') mention id so in quotation
 document.getElementById('totalTicket').innerText = countTicket
 
////step 4 charAt() tell charactor location
//below wich row a c b d
//then pick positon from row
//if row a o position at--- 100 dollar pice position 0 line 5
let firstCharacter = id.charAt(0)
if (firstCharacter=="a"){
    totalPriceVar = totalPriceVar + priceArray[0]
}else if 
    (firstCharacter=="b"){
        totalPriceVar = totalPriceVar + priceArray[1]
}else if 
(firstCharacter=="c"){
    totalPriceVar = totalPriceVar + priceArray[2]
}
else{
        totalPriceVar = totalPriceVar + priceArray[3]
}
document.getElementById('totalPrice').innerText = totalPriceVar
//below closeing for else if not grey then we change to grey from else line 17
    }
// below close function bracket
}

