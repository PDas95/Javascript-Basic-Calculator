var decimalPointSet = false;
var temp;
var isExpOp = false;

function pressed(val) {
    if(val == '.' && !decimalPointSet) {
        decimalPointSet = true;
        document.getElementById("display-panel").value += val;
    } 
    if(val != '.') {
        document.getElementById("display-panel").value += val;
    }
}

/*
* Operator function definitions 
*/

function operator(op) {
    var displayPanel = document.getElementById('display-panel');
    
    if(op == '+') {
        temp = displayPanel.value + ' + ';
        displayPanel.value = '';
    } else if(op == '-') {
        temp = displayPanel.value + ' - ';
        displayPanel.value = '';
    } else if(op == '=') {
        var tempOperand2 = displayPanel.value;
        if(isExpOp) {
            temp += tempOperand2 + ')';
            isExpOp = false;
        } else {
            temp += tempOperand2;
        }
        displayPanel.value = eval(temp);
    } else if(op == '/') {
        temp = displayPanel.value + ' / ';
        displayPanel.value = '';
    } else if(op == 'sq') {
        displayPanel.value = Math.pow(displayPanel.value, '2');
    } else if(op == 'sqrt') {
        displayPanel.value = Math.sqrt(displayPanel.value);
    } else if(op == 'cube') {
        displayPanel.value = Math.pow(displayPanel.value, '2');
    } else if(op == '%') {
        temp = displayPanel.value + ' / ' + '100';
        displayPanel.value = eval(temp);
    } else {
        temp = 'Math.pow(' + displayPanel.value + ',';
        displayPanel.value = '';
        isExpOp = true;
    }
}
