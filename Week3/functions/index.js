function sum(num1, num2) {
   return num1 + num2
}
var result = sum(15, 12)
console.log(result)

function largestNumber(num1, num2, num3) {
    if( num1 > num2, num1 > num3) {
        return num1  + "is largest"
    }else if( num2 >num1, num2>num3 ) {
        return num2 + "is largest"
    }else if(num3 > num1, num3 > num2)
        return num3 +" is largest"
    }
    var result = largestNumber(13, 16, 18)
    console.log(result)

    function evenOdd(num1) {
        if (num1 % 2 === 0) {
            return num1 + " is even"
        }else{
            return num1 + " is odd"
        }
    }
    var result = evenOdd(45678892)
    console.log(result)

   
    function word(str1) {
       if (str1.length <= 20) {
           return str1 + str1
        }else{ (str1.length % 2 == 0)
            return str1.slice(0, str1.length / 2)
        }
    }
    var result = word("Yesterday")
    console.log(result)