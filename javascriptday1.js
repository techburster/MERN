// function Add(x,y)
// {
//     let z=x+y;
//     console.log("Sum is",z);
// }
// function substract(x,y)
// {
//     let z=x-y;
//     console.log("Substraction is",z);
// }
// function multiply(x,y)
// {
//     let z=x*y;
//     console.log("Multiplication is",z);
// }
// function divide(x,y)
// {
//     let z=x/y;
//     console.log("Division is",z);
// }
// function simpleInterest(p,r,t)
// {
//     let SI=(p*r*t)/100;
//     console.log("Simple Interest is",SI)
// }
// Add(5,4)
// substract(5,4)
// multiply(5,4)
// divide(5,4)
// simpleInterest(1000,100,1)
// console.log("A">=65);

function fizzbuzz(num)
{
    if(num%3==0 && num%5==0)
        {
            console.log("fizzbuzz");
        }
    else if((num%3)==0)
        {
                console.log("fizz");

        }else if(num%5==0)
        {
            console.log("buzz");
        }else
        {
            console.log("NOt Match");
        }    
       


}

fizzbuzz(10);
fizzbuzz(9);
fizzbuzz(15);