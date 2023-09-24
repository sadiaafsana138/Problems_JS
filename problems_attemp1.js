/*Problem 1: Let’s play a mind game

একটা function called mindGame যা ইনপুট হিসেবে একটা positive number নিবে।
সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output
Input: 5
Output: 7.5 

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
//const a = mindGame("P");
//console.log(a);



/*
Problem 2: Finding even or odd

একটা function called evenOdd() ইনপুট হিসেবে একটা string নিবে। 
String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট হবে‘even’ অথবা ‘odd’ ।

Sample Input & Output:
Input: ‘Phero’
Output: odd
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
//var a = evenOdd("sadia3");
//console.log(a);


/*
Problem 3: Is Less or Greater than seven

একটা function called isLGSeven()” ইনপুট হিসেবে একটা number নিবে।  
ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন return করতে হবে সেই বিয়োগফল। নাহলে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6
Output: -1
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
//const a = isLGSeven(50);
//console.log(a);



/*
Problem 4: Finding Bad data

একটা function called findingBadData() ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে।number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0
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

//let a = [-8,6,5,3,-1,0];
//const car = {type:"Fiat", model:"500", color:"white"};
//console.log(findingBadData(a));



/*
Problem 5: Convert your gems into diamond

একটা function called gemsToDiamond() ইনপুট হিসেবে তিনটা number ( ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা একটা gems কে কয়টা diamond এ convert করা যাবে ]

সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। 

total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে ta return else return total diamond 

Sample Input & Output:-

Input: 1, 1, 1
Output:96
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


//console.log(gemsToDiamond(3,0,8));



