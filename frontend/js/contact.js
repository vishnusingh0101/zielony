let send = document.getElementById('send');

let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let mobile = document.getElementById('mobile');
let email = document.getElementById('email');
let state = document.getElementById('state');
let pincode = document.getElementById('pincode');
let message = document.getElementById('message');
let notification = document.getElementById('notification');

async function senddata(event) {
    event.preventDefault();

    let userdata = {
        firstname: firstname.value,
        lastname:  lastname.value,
        mobile:    mobile.value,
        email:     email.value,
        state:     state.value,
        pincode:   pincode.value,
        message:   message.value,
    }
    const exp = await axios.post('https://www.zielonyapc.com/user/addContact', userdata );
    console.log(exp.data.status);
    if(exp.data.status === true) {
        showstatus();
        console.log('got hit');
    } 
}

function showstatus() {
    firstname.value='';
    lastname.value ='';
    mobile.value   ='';
    email.value    ='';
    state.value    ='';
    pincode.value  ='';
    message.value  ='';

    notification.style.display = "flex";
    setTimeout(()=>{
        notification.style.display = "none";
    }, 5000);
    
}