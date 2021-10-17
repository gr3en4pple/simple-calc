const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operators = ['+','-','x','÷']
const buttons = document.getElementsByClassName('btn');
const text = document.getElementById('text');
for (button of buttons) {
   button.addEventListener('click',toScreen);  
}

var result = false;
function toScreen(event) {
    //the index of the one and only operator;
    const operator_index = indexOperator();

    //Add number on to screen when clicking number button
    
        for (n of numbers) {        
            if(event.target.innerText == n ) {
                console.log(result);
                if(!result)
                    text.innerText += n; 
                else {
                    text.innerText='';
                    text.innerText += n; 
                    result = false;
                }                
            }              
        } 
    // Add operator
    // if there were not any operators
    // add 1 operator on screen
    if(operator_index == -1) {
        for (n of operators) {      
            if(event.target.innerText == n) {             
                    text.innerText += n;
                    result = false
                } 
            }
        }  
   
  
    //Add '.' 
    if(event.target.id == 'dot') {
        //variable to store index of 1st and 2nd dot.
        let firstDot_Index, secondDot;
        result = false;
        //check if there was any operator?
        //if no operator and there are not any dots
        // just add one 'dot'.
        if(operator_index == -1) {
            firstDot_Index = text.innerText.indexOf('.');
            if( firstDot_Index == - 1)
                text.innerText +='.'           
        }
        

        //if there was 1 operator
        //and there are not any dots after operator
        //add one 'dot'.
        else {
            secondDot = text.innerText.indexOf('.',operator_index)
            if (secondDot == -1 ) 
                text.innerText +='.'  
        }           
    }
    //Clear the screen.
    if(event.target.id == 'clear') {
        text.innerText =' ';
        result = false
    }
    if(event.target.id == 'equal') 
        result = addResult();
 
}

//find the index of the operator.
//return the index if found one
//otherwise return -1 
function indexOperator() {
    for(n of operators) {
        if(text.innerText.includes(n))
            return text.innerText.indexOf(n);                    
    }
    return -1;
}

//Calculate the result
function addResult() {
    let nums,result;
    for([i,n] of operators.entries()) {
        if(text.innerText.includes(n)) {
            nums = text.innerText.split(n) 
            result= checkOperator(i,nums[0],nums[1]);
            // result = eval(text.innerText);
            if(!isNaN(result)) {
                text.innerText = '';
                text.innerText += result;
                return true;
            }    
        }
    }
}

//Find the operator to calculate
function checkOperator(index,num1,num2) {
    let result;
    switch(index) {
        case 0:
            result = parseFloat(num1) + parseFloat(num2); 
           
            break;
        case 1:
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 2:
            result = parseFloat(num1) *  parseFloat(num2); 
            break;
        case 3:
            result = parseFloat(num1) / parseFloat(num2); 
            result = Math.round(result*1000000)/1000000;
            console.log(result)
            break;
    }          
    return result
}




    

