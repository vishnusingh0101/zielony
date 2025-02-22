let send = document.getElementById('send');

let name = document.getElementById('name');
let companyname = document.getElementById('companyname');
let mobilenumber = document.getElementById('mobilenumber');
let emailid = document.getElementById('emailid');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let chooseanindustryorapplication = document.getElementById('chooseanindustryorapplication');
let lengthofcoolingarea = document.getElementById('lengthofcoolingarea');
let widthofcoolingarea = document.getElementById('widthofcoolingarea');
let message = document.getElementById('message');

async function senddata(event) {
    event.preventDefault();
    let userdata = {
        name: name.value,
        companyname: companyname.value,
        mobilenumber: mobilenumber.value,
        emailid: emailid.value,
        address: address.value,
        pincode: pincode.value,
        chooseanindustryorapplication: chooseanindustryorapplication.value,
        lengthofcoolingarea: lengthofcoolingarea.value,
        message: message.value,
    }
    console.log(userdata);
    const exp = await axios.post('https://www.zielonyapc.com/user/addSurvey', userdata);
    console.log(exp.data.status);
    if (exp.data.status === true) {
        showstatus();
        console.log('got hit');
    }
}

function showstatus() {
    name.value = '';
    companyname.value = '';
    mobilenumber.value = '';
    emailid.value = '';
    address.value = '';
    pincode.value = '';
    chooseanindustryorapplication.value = '';
    lengthofcoolingarea.value = '';
    message.value  ='';

    notification.style.display = "flex";
    setTimeout(()=>{
        notification.style.display = "none";
    }, 5000);
}

