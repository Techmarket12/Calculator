const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = ""
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculer(e.target.dataset.value));
    
})
function calculer (btnValue) {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace('%', '/100'));
      }else if(btnValue === "AC") {
        output = ""
      }else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1)
      }
      
      else { 
        if (output === "" && specialChars.includes(btnValue)) return
        output += btnValue;
             }
    input.value = output;
    console.log(output.slice(0, -1));
      
}
