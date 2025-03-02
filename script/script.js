
document.getElementById('discover-btn').addEventListener('click', function(){
    window.location.href = "./Discover.html"
})

const completeButtons = document.querySelectorAll(".Complete-button")
const fixBtn = document.getElementById('fix-mobile').innerText
const historyDIv = document.getElementById('history-div')



for(const completeButton of completeButtons){
    
    completeButton.addEventListener('click', function(event){
        const time = new Date();
        const hour = time.getHours()
        const mint = time.getMinutes()
        const seco = time.getSeconds()

        const title = event.target.parentNode.parentNode.children[1].innerText
        
        alert("Board Updated Seccessfully")

        const taskAssing = getConvertToNumber('task-assigned-amount');
        document.getElementById('task-assigned-amount').innerText = taskAssing -1;
        const assignValue = getConvertToNumber('assigned-value')
        document.getElementById('assigned-value').innerText = assignValue +1;
        
        const task = document.createElement('p');
        task.innerText = `
        You have completed the task ${title} at ${hour}:${mint}:${seco}
        `
        historyDIv.appendChild(task)
  
    })
    
   for(const disableButton of completeButtons){
    disableButton.addEventListener('click', function(){
        disableButton.disabled = true;
        disableButton.style.backgroundColor = "gray";
        
    });

   }
 
}

document.getElementById('last-btn').addEventListener('click', function(){
    alert('Congrates!!!  You have Completed all the current task')
})
