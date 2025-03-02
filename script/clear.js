document.getElementById('clear-btn').addEventListener("click", function(){
    document.getElementById('history-div').innerHTML = "";

})

function showDate(){
    let today = new Date();
    document.getElementById('date').innerHTML = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    });
}

showDate()
