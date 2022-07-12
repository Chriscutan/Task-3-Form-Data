let enrolledNumbers = [];
let Users = [];

let formContainer = document.getElementById('form-container');

let resultContainer = document.getElementById('output-container');
resultContainer.classList.add('d-none');

function VerifyUserData(){
    let enrollNumber = document.getElementById('enrollNum').value;
    let userName = document.getElementById('Username').value;

    if(enrolledNumbers.includes(enrollNumber)){
        let alert = document.getElementById('alert');
        alert.classList.remove('d-none');
        alert.innerHTML = "User already exists";

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000);

    }
    else{
        enrolledNumbers.push(enrollNumber);
        Users.push(userName);
        
        let resultEnrollNum = document.createElement('h4');
        resultEnrollNum.innerHTML = "Enrollment Number: " + enrollNumber;

        let resultUserName = document.createElement('h4');
        resultUserName.innerHTML = "Name: " + userName;

        resultContainer.classList.remove('d-none');
        resultContainer.classList.add('output-container')
        resultContainer.appendChild(resultEnrollNum);
        resultContainer.appendChild(resultUserName);
    }

}