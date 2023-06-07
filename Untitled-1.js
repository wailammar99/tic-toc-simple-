var etat=true ;
var symboles = ["x", "o"];
var scoreo =0;
var scorex=0;
function x (b)
{
    
   
    var button =document.getElementById(b);
   
    button.textContent = symboles[etat ? 0 : 1];
     etat = !etat; 
        var button1 =document.getElementById("1");
        var button2 =document.getElementById("2");
        var button3 =document.getElementById("3");
        var button4 =document.getElementById("4");
        var button5 =document.getElementById("5");
        var button6 =document.getElementById("6");
        var button7 =document.getElementById("7");
        var button8 =document.getElementById("8");
        var button9 = document.getElementById("9");
        var x1 =document.getElementById("player1");
        var x2 =document.getElementById("player2");
        if (button1.textContent=="x"&&button2.textContent=="x"&&button3.textContent=="x"||button4.textContent=="x"&&button5.textContent=="x"&&button6.textContent=="x"||button7.textContent=="x"&&button8.textContent=="x"&&button9.textContent=="x"||button1.textContent=="x"&&button4.textContent=="x"&&button7.textContent=="x"||button2.textContent=="x"&&button5.textContent=="x"&&button8.textContent=="x"||button3.textContent=="x"&&button6.textContent=="x"&&button9.textContent=="x"||button1.textContent=="x"&&button5.textContent=="x"&&button9.textContent=="x"||button3.textContent=="x"&&button5.textContent=="x"&&button7.textContent=="x")
        {
            
            scorex+=1 ;
            x1.textContent=scorex ;
            alert("le x est gangner ");
            
            clean();
        }
        
        
        else if (button1.textContent == "o" && button2.textContent == "o" && button3.textContent == "o" ||
        button4.textContent == "o" && button5.textContent == "o" && button6.textContent == "o" ||
        button7.textContent == "o" && button8.textContent == "o" && button9.textContent == "o" ||
        button1.textContent == "o" && button4.textContent == "o" && button7.textContent == "o" ||
        button2.textContent == "o" && button5.textContent == "o" && button8.textContent == "o" ||
        button3.textContent == "o" && button6.textContent == "o" && button9.textContent == "o" ||
        button1.textContent == "o" && button5.textContent == "o" && button9.textContent == "o" ||
        button3.textContent == "o" && button5.textContent == "o" && button7.textContent == "o")

   {
    scoreo+=1 ;
    x2.textContent=scoreo ;
    alert("le o est gangner ");
    
    clean();
   }

   
  
  
}
function clean ()
{
    
    var button1 =document.getElementById("1");
    var button2 =document.getElementById("2");
    var butto3 = document.getElementById("3");
    var button4 =document.getElementById("4");
    var button5 =document.getElementById("5");
    var button6 = document.getElementById("6");
    var button7 =document.getElementById("7");
    var button8 =document.getElementById("8");
    var button9 = document.getElementById("9");
    button1.textContent="" ;
    button2.textContent="";
    butto3.textContent="";
    button4.textContent="";
    button5.textContent="";
    button6.textContent="";
    button7.textContent="";
    button8.textContent="";
    button9.textContent="";
}
function newgame ()
{
    var x1 =document.getElementById("player1");
    var x2 =document.getElementById("player2");
    scoreo=0;
    scorex=0;
    x2.textContent=scoreo ;
    x1.textContent=scorex ;
    clean();
}
function nulll ()
{
    var testallbutton ;
  
   for (var i=0 ;i<9;i++)
   { var button =document.getElementById(i);
    if (button.textContent=="x"||button.textContent=="o")
    {
        testallbutton=true ;
    }
    else {
        testallbutton=false ;
    }
     if (testallbutton)
    {
        alert("null") ;
    }
   }
 
}

