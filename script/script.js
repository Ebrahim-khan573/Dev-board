
document.getElementById('discover-btn').addEventListener('click', function(){
    window.location.href = "./Discover.html"
})

const completeButtons = document.querySelectorAll(".Complete-button")




for(const completeButton of completeButtons){
    completeButton.addEventListener('click', function(event){
        
        alert("Board Updated Seccessfully")
        const taskAssing = getConvertToNumber('task-assigned-amount');
        document.getElementById('task-assigned-amount').innerText = taskAssing -1;
        const assignValue = getConvertToNumber('assigned-value')
        document.getElementById('assigned-value').innerText = assignValue +1;
        
        const p = document.createElement('p');
        p.innerText = `
        
        `
        
       
    })
    
   for(const disableButton of completeButtons){
    disableButton.addEventListener('click', function(){
        disableButton.disabled = true;
        disableButton.style.backgroundColor = "gray";
        
    });

   }
   


    
}
