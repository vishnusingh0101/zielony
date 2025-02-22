let send = document.getElementById('send');

let custname = document.getElementById('custname');
let mobile = document.getElementById('mobile');
let notification = document.getElementById('notification');

async function senddata(event) {
    
    event.preventDefault();

    let userdata = {
        custname: custname.value,
        mobile:    mobile.value
    }
    const exp = await axios.post('https://www.zielonyapc.com/user/customercare', userdata );
    console.log(exp.data.status);
    if(exp.data.status === true) {
        showstatus();
        console.log('got hit');
    } 
}

function showstatus() {
    custname.value='';
    mobile.value ='';

    notification.style.display = "flex";
    setTimeout(()=>{
        notification.style.display = "none";
    }, 5000);
    
}

