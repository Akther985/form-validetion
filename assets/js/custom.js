const form = document.gerElementById('form');
const username = document.gerElementById('username');
const email = document.gerElementById('email');
const phone = document.gerElementById('phone');
const password = document.gerElementById('password');
const cpassword = document.gerElementById('capssword');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})

const validate = () => {
const username = username.value.trim();
const email = email.value.trim();
const phone = phone.value.trim();
const password = password.value.trim();
const cpassword = capssword.value.trim();

if (username === "") {
setErrorMsg(username, 'username cannot be blank');  
} else if(usernameVal.length < 3) {
    setErrorMsg(username, 'username min 3 char'); 
   } else {
      setSuccessMsg(username);
   }
   if(emailVal === ""){

    setErrorMsg(email, 'email cannot be blank'); 
        } else if(!isEmail(emailVal)){
            setErrorMsg(email, 'Not a Valid Email'); 
        } else{
        setSuccessMsg(email);
        }
}