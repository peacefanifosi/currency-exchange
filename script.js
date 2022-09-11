let _from = document.querySelector('#_from')
let _to = document.querySelector('#_to')
let amount = document.querySelector('#amount')
let output = document.querySelector('#output')

let value1 = ""

fetch(`https://v6.exchangerate-api.com/v6/c602b51904aff42be6e045cb/latest/USD`)
.then((response) => response.json())
.then(data => {
  for(let key in data.conversion_rates){
    value1 += `<option value='${key}'> ${key} </option>`
    
}
_from.innerHTML = value1;
_to.innerHTML = value1;



  console.log(data);
    
 
})
.catch(error => console.log('error', error));


function conv(){
  fetch(`https://v6.exchangerate-api.com/v6/c602b51904aff42be6e045cb/pair/${_from.value}/${_to.value}`)
  .then((response) => response.json())
  .then(dat => {
      // let real = _to.value
    const rate = dat.conversion_rate
    output.value = amount.value * rate
    console.log(rate)
    
  })
  
}
