//Task//
const task = document.getElementsByClassName('task');
const tasks = Array.from(task);


function setDarkMode() {
    for (let task of tasks) {
        task.style.backgroundColor = '#121212';
        task.style.color = '#FFFFFF';
        task.style.transition = 'all 2s ease';
    }

}

function setLightMode() {
    for (let task of tasks) {
    task.style.backgroundColor = '#FFFFFF';
    task.style.color = '#121212';
    task.style.transition = 'all 2s ease';
    }
}

//Taks 1//
function showMessage(event) {
    event.preventDefault();

    const button = document.getElementById("submit-btn");
    button.style.backgroundColor = "green";
    button.style.color = "white";

    const input = document.getElementById("login");
    const value = input.value;

    console.log("Username:", value);
}

//Task 2//
function showMore(event) {
    const answerQuestion = document.getElementById("answer");
    answerQuestion.innerHTML = "JavaScript is a scripting or programming language that allows you to implement complex features on web pages";
}
    
//Task 3//

const form = document.getElementById("conversion-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const poundsInput = document.getElementById("pounds-amount");
    const pounds = parseFloat(poundsInput.value);
    const euros = pounds * 1.15;

     document.getElementById("result").textContent = euros
});

//Task 4//

function move() {
    const blueBox = document.getElementById("blue-box");
    blueBox.style.position = "relative";
    blueBox.style.left = "400px";
    blueBox.style.top = "100px";

    const redBox = document.getElementById("red-box");
    redBox.style.display = "none";  
}

//Task 5//
const clearAllButton = document.getElementById("juhu");
clearAllButton.addEventListener("click", () => {
     document.body.innerHTML = '<h1>Job well done!!</h1>';
  });


   




