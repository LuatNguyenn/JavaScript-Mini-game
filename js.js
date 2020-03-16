function submit() {
    var btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.style.display = 'none';

    let age = document.getElementById('age').value;
    let ageInDays = age * 365;

    let result = document.createTextNode('You are ' + ageInDays + ' days old');
    let h1 = document.createElement('h1');

    h1.appendChild(result);
    document.getElementById('result').appendChild(h1);

    if (ageInDays != 0 || ageInDays != "" || ageInDays != null) {
        showResetButton();
    } else {
        submit();
    }
}

function showResetButton() {
    var btn = document.createElement('button');
    var buttonText = document.createTextNode('Reset');
    var r = document.getElementById('result');
    var b = document.getElementById('reset');
    var textInput = document.getElementById('age');

    var btnSubmit = document.getElementById('btnSubmit');

    btn.appendChild(buttonText);
    btn.style.width = "70%";
    btn.style.height = "42px";
    btn.style.borderRadius = "26px";
    btn.style.backgroundColor = "#ff4646";
    document.getElementById('reset').appendChild(btn);

    btn.addEventListener("click", function () {
        textInput.value = null;
        r.removeChild(r.childNodes[0]);
        b.removeChild(b.childNodes[0]);
        btnSubmit.style.display = 'block';
    });
}

// GAME RANDOM NUMBER 
function getNumber() {
    

    var randNum = Math.floor(Math.random() * 10);
    var userNumber = document.getElementById('userNumber').value;
    var notify = document.getElementById('notify');

    if(randNum == userNumber){
        document.getElementById('notify').innerHTML = "Congratulations! You Won!";
    }
    else if(userNumber == null || userNumber == ""){
        document.getElementById('notify').innerHTML = "Please enter a number!";
        return;
    }
    else{
        document.getElementById('notify').innerHTML = "Try again!";      
        document.getElementById('userNumber').value = ''; 
    }

    document.getElementById('luckyNumber').innerHTML = 'Lucky Number: ' + randNum;
    document.getElementById('randNumber').innerHTML = 'User Number: ' + userNumber;


  
    console.log(randNum);
}