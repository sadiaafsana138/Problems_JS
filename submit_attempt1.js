/*--------------------------1st task-----------------------------

The function called mindGame will take a number as input 
Firstly the number will be multiplied by 3 
2ndly the result will be added by 10
3rdly the result will be divided by 
and finally subtract 5 from the result 
and return the Final result 

 */

function mindGame(num) {
    if (typeof num == "number" && num > 0) {
        let result = parseFloat((((num * 3) + 10) / 2) - 5);
        return result;
    }
    else {
        console.log("please enter a positive number")
    }
}


/*-------------------------2nd task-----------------------------

The function called evenOdd will take a String as input 
and will return the number of character in it as even and odd.

 */

function evenOdd(str) {
    if (typeof str == "string") {
        if ((str.length) % 2 == 0) {
            let out = "even";
            return out;
        }
        else {
            let out = "odd";
            return out;
        }
    }
    else {
        console.log("Please enter a string");
    }
}


/*-------------------------3rd task-----------------------------

The function called isLGSeven() will take a Number as input 
then 7 will be subtracted from that
if the result is less than 7 then it will return the result
else it will return the double of the input value 

*/

function isLGSeven(num) {
    if (typeof num == "number") {
        let sub_result = num - 7;
        if (sub_result < 7) {
            return sub_result;
        }
        else {
            return 2 * num;
        }
    }
    else {
        console.log("please enter a number");
    }
}


/*-------------------------4th task-----------------------------

The function called findingBadData() will take a array as input 
then will check the values and will return the number of negative values on that array.

*/

function findingBadData(array) {
    if (typeof array == "object.Array") {
        let count = 0;
        for (let i = 0; i <= (array.length) - 1; i++) {
            if (array[i] < 0) {
                count++;
            }
        }
        return count;
    }
    else {
        console.log("please enter an array")
    }
}


/*-------------------------5th task-----------------------------

The function called gemsToDiamond() will take 3 numbers as gems number 
then will calculate the total diamond by multiplying each gems with given power and then add those 3
If the total is greater than 2*1000 then return subtraction of total and 2000 
else return the total.

*/


function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 == "number" && typeof gems2 == "number" && typeof gems3 == "number") {
        let Total = ((gems1 * 21) + (gems2 * 32) + (gems3 * 43));
        if (Total > 2 * 1000) {
            let rest_diamond = Total - 2000;
            return rest_diamond;
        }
        else {
            return Total;
        }
    }
    else {
        console.log("enter 3 numbers")
    }
}


