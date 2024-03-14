document.querySelector(".supportTicket-button").addEventListener("click", function() { //Toggles the display property of the help desk contact form.
      let x = document.querySelector('.supportTicket').style.display;
      if (x == 'block') {document.querySelector('.supportTicket').style.display = 'none';} 
      else {document.querySelector('.supportTicket').style.display = 'block';}});
document.querySelector(".formClose-button").addEventListener("click", function() { //Closes the help desk window when clicking the cancel button.
      document.querySelector('.supportTicket').style.display = 'none';});





//Adds a border when an input element gains focus.
document.querySelector('.userName').addEventListener("focusin", function(){
      document.querySelector('.userName').style.border = "2px solid #00b18c"}); 
document.querySelector('.userName').addEventListener("blur", function(){
      document.querySelector('.userName').style.border = "none"}); 
document.querySelector('.userEmail').addEventListener("focusin", function(){
      document.querySelector('.userEmail').style.border = "2px solid #00b18c"}); 
document.querySelector('.userEmail').addEventListener("blur", function(){
      document.querySelector('.userEmail').style.border = "none"}); 
document.querySelector('.userMessage').addEventListener("focusin", function(){
      document.querySelector('.userMessage').style.border = "2px solid #00b18c"}); 
document.querySelector('.userMessage').addEventListener("blur", function(){
      document.querySelector('.userMessage').style.border = "none"}); 



function antiSpam(){
      if(document.userQuestion.botTrap.checked){
            alert('The anti spam script was triggered. If you are a human, please refresh the page and send the form again.')
            return false
      }
}