
/*
1. Write a function that prints the numbers from 1 to 100. But for multiples of three print “Foo” instead of the number and for the multiples of five print “Bar”. For numbers which are multiples of both three and five print “FooBar”. 

Example output: 
1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar ... 
*/


function FooBar(){
    //create a variable called num and assign it to 100
    var num = 100;
    //using for loop, where we looping through all the numbers starting from 1 upto 100 
    for (var i=1; i < num+1; i++){
        //if a number from 1 to 100 has no reminder after division by 3 and 5, than print FooBar
        if ((i % 3) === 0 && (i % 5) === 0){
            console.log("FooBar");
        //if a number from 1 to 100 has no reminder after division by 3, than print Foo    
        }else if((i % 3) === 0){
            console.log("Foo");
        //if a number from 1 to 100 has no reminder after division by 5, than print Bar    
        }else if((i % 5) === 0){ 
            console.log("Bar");
        //otherwise print in console log the number itself    
        }else{
           console.log(i); 
        }
    }
}
//envoking the function
FooBar();





/*2. Write a function that counts the number of even numbers that appear in a range of integers 0..n, where n is supplied as the sole argument to your function. 

Example: 
even_integers(3) 
2 */


function even_integers(num){
    //creating for loop and looping through all the numbers up to num+1, cuz index starts from 0, not 1;
    for (var i=1; i < num+1; i++){
        //if there is no reminder than print out in console log the result
        if ((i % 2) === 0 ){
            console.log(i);
        }
    }
}
//envoking the function
even_integers(15);





/*
3. Given the following pseudo code, determine the range of possible values for “a” in your language of choice: 

x = random_int(1,6) 
y = random_int(1,6) 
z = random_int(1,6) 
a = x + y + z 
*/

function findRangeOfValues(min, max){
    max = 
    Math.floor(100000 + Math.random() * 900000)
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    z = Math.floor(Math.random() * (max - min + 1)) + min;
    var a=[];
    
}


(function (min, max){//starting anonymous function to selfinvoke it
  
var lowest, highest;//creating variables to use later  

for(i = 0; i < 2; i++){//looping through numbers upto 1000 to find out lowest and highest variables each time
    //finding random number for x, y and z based on given number range
    var x = Math.floor(Math.random() * max) + min;
    var y = Math.floor(Math.random() * max) + min;
    var z = Math.floor(Math.random() * max) + min;
    //find var a sum; 
    var a = x + y + z;
    //if there is no lowest number yet, we assign lowest to var a
    if(!lowest){
        lowest = a;
    }
    //find var b sum; 
    var b = x + y + z;
    //if bless or equal to lowest, than we assign lowest to b
    if(b <= lowest){
        lowest = b;
    // if b bigger than lowest and there is no highest yet, than we assign highest to b
    } else if(b > lowest && !highest){
        highest = b;
    //if b bigger than highest than we assign highest to b     
    } else if(b > highest) {
        highest = b;
    }
}
    
console.log('Lowest range is: '+lowest+' Highest range is: '+highest);
    
})(1, 6);


/*
4. Given: 
words = ['one', 'one', 'two', 'three', 'three', 'two'] 
Remove the duplicates. 
*/


(function() {//starting anonymous function to selfinvoke it
    //creating an array with strings
  var words = ['one', 'one', 'two', 'three', 'three', 'two'];
    //creating an empty array to store the unique strings
  var myArr=[];
    //looping with for loop through the array called words
  for (var i=0; i<words.length; i++){
      //comparing myArr with the words array....if there is no same strings, we push the stings to myArr
      if(myArr.indexOf(words[i])==-1){
          myArr.push(words[i]);
      }
  }
    //pringting the result in console log 
    console.log(myArr);
})();





/*5. Print to stdout the following output using only one loop: 
1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 */


(function (num) { //starting anonymous function to selfinvoke it
    //looping through numbers from 1 to num+1
    for (var i=1; i<num+1; i++){
        //printing out a string that we get from each number from the loop
        //i used repeat() which is es6, cuz you asked only one loop. but originaly for consistency i would use another loop to print same numbers 5 times.
        console.log((i.toString()+" ").repeat(num));
    }
}(5));
