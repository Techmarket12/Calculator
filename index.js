const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = ""
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculer(e.target.dataset.value));
    
})
function calculer (btnValue) {
    if (btnValue === "=" && output !== "") {
        //If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace('%', '/100'));
      }else if(btnValue === "AC") {
        output = ""
      }else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1)
      }
      
      else { 
        //If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
             }
    input.value = output;
    console.log(output.slice(0, -1));
      
}
