function WhileLoop() {
    var TheAnswer;  
    startingNumber = 504;
    endingNumber = 107;
    stepDown = 38;
    i=startingNumber;
 
 while(i>endingNumber){
     i-=stepDown;
     TheAnswer +=1;

 }  
   return TheAnswer; 
 }