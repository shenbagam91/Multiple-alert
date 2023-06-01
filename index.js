alert(`1.Addition
       2.Subtraction
       3.Multiplication
       4.Division
       5.Modulo division`

);

let s_option=prompt("Enter your choice");
console.log(typeof(s_option));

switch(Number(s_option))
{
       case 1:
              alert("You have choose Addition");
              const inputdata1=getInputs();
              add(inputdata1[0],inputdata1[1]);
              break;
       case 2:
              alert("You have choose subtraction");
              const inputdata2=getInputs();
              sub(inputdata2[0],inputdata2[1]);
              break;
       case 3:
              alert("You have choose Multiplication");
              const inputdata3=getInputs();
              multi(inputdata3[0],inputdata3[1]);
              break;
       case 4:
              alert("You have choose Division");
              const inputdata4=getInputs();
              div(inputdata4[0],inputdata4[1]);
              break;
       case 5:
              alert("You have choose Modulo division");
              const inputdata5=getInputs();
              modulo(inputdata5[0],inputdata5[1]);
              break;
       default:
              alert("You have choosed wrong please tryagain");
}

function getInputs()
{
       let num1=prompt("Enter Number one");
       let num2=prompt("Enter Number two");
       return[num1,num2];

}
function add(a,b)
{
       let result=Number(a)+Number(b);
       alert(`The addition value is:${result}`);
}
function sub(a,b)
{
       let result=Number(a)-Number(b);
       alert(`The subtraction value is:${result}`);
}
function multi(a,b)
{
       let result=Number(a)*Number(b);
       alert(`The Multiplication value is:${result}`);
}
function div(a,b)
{
       let result=Number(a)/Number(b);
       alert(`The Division value is:${result}`);
}
function modulo(a,b)
{
       let result=Number(a)%Number(b);
       alert(`The Modulo division value is:${result}`);
}