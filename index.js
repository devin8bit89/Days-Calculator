
const date = new Date();

function getUserGoal() {
    let userGoal = document.getElementById("userGoal").value;
    console.log(userGoal);
    document.getElementById("user-defined-goal").innerHTML = userGoal;
    document.getElementById("userGoalDiv").style.display = 'none';
}

function getDays() {
    let userDateInput = document.getElementById("userDate").value;
    let userDate = new Date(userDateInput);
    let timeDiff = userDate.getTime() - date.getTime();
    let dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    let conv = Math.ceil(dayDiff)
    console.log(conv)
    let counter = document.getElementById("count").innerHTML = conv; 
    document.getElementById("text").style.display = 'block';
    if (conv < 2) {
        document.getElementById("text").innerHTML="day left"
    }
    if (conv == -1) {
        document.getElementById("text").innerHTML="day ago"
    }
    if (conv < -1) {
        document.getElementById("text").innerHTML="days ago"
    }
    if (conv == 0) {
        document.getElementById("text").innerHTML=""
        document.getElementById("count").innerHTML="Today!"
    }
    if (conv > 1) {
        document.getElementById("text").innerHTML="days left"
    }
    
}




