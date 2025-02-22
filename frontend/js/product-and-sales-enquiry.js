let send = document.getElementById('send');

let name = document.getElementById('name');
let companyname = document.getElementById('companyname');
let natureofbusiness = document.getElementById('natureofbusiness');
let designation = document.getElementById('designation');
let mobilenumber = document.getElementById('mobile');
let emailid = document.getElementById('email');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');
let inquirydetails = document.getElementById('inquirydetail');

async function senddata(event) {
    event.preventDefault();

    let userdata = {
        name: name.value,
        companyname: companyname.value,
        natureofbusiness: natureofbusiness.value,
        designation: designation.value,
        mobilenumber: mobilenumber.value,
        emailid: emailid.value,
        address: address.value,
        pincode: pincode.value,
        inquirydetails: inquirydetails.value,
    }
    const exp = await axios.post('https://www.zielonyapc.com/user/addEntry', userdata);
    console.log(exp.data.status);
    if (exp.data.status === true) {
        showstatus();
        console.log('got hit');
    }

}

function showstatus() {
    name.value = '';
    companyname.value = '';
    natureofbusiness.value = '';
    designation.value = '';
    mobilenumber.value = '';
    emailid.value = '';
    address.value = '';
    pincode.value = '';
    inquirydetails.value = '';
    
    notification.style.display = "flex";
    setTimeout(()=>{
        notification.style.display = "none";
    }, 5000);

}

