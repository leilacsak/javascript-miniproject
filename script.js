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
    


