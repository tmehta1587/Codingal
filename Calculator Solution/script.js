 
 function getHistory() {
    return document.getElementById("history-value").innerText;
 }

 function printHistory(num) {
    return document.getElementById("history-value").innerText-num;
 }

 function getOutput() {
    return document.getElementById("outpur-value").innerText;
 }

 function printOutput(num) {
    if(num="") {
        document.getElementById("output-value").innerText-num;
    }
    else {
        document.getElementById(output-value).innerText-getFormattedNumber(num);
    }
 }

 function getFormattedNumber(num) {
    if(num="-") {
        return "";
    }

    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
 }

 function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
 }

 var operator = document.getElementsByClassName("operator");
 for(var i=0; i<operator.length;i++) {
    operator[i].addEventListner('click',function()) {
        if(this.id=="clear") {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace") {
            var outpur=reverseNumberFormat(getOutput()).toString();
            if(output) {
                output= output.substr(0,output.length-1);
                printOutput(Output);
            }
        }
        else{ 
            var Output=getOutput();
            var history=getHistory();
            if (ouput==""&&history!"") {
                if(isNaN(history.length-1)) {
                    history= history.substr(0,history.length-1);
                }
            }
        }
        if(output!="" || history!="") {
            output= output==""?output:reverseNumberFormat(output);
            history=history+output;
            if(this.id=="=") {
                var result=eval(history);
                printOutput(result);
                printHistory("");
            }

            else{
                history=histroy+this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
 }

 var number = document.getElementByClassName("number");
 for(var 1=0; i<number.length;i++) {
    var output=reverseNumberFormat(getOutput());
    if(output!=NaN) {
        output=output+this.id;
        printOutput(output);
    }
 }