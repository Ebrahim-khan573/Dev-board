function getConvertToNumber (id){
    const Amount = document.getElementById(id).innerText;
    const convertAmount = parseFloat(Amount)
    return convertAmount
}

