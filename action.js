let list = document.querySelector(".list")
let fa = document.querySelector(".fa-bars")

fa.addEventListener("click", function () {
    list.classList.toggle("show")
})

// email.js
let errors1 = document.getElementById("errors1");
let errors2 = document.getElementById("errors2");
let errors3 = document.getElementById("errors3");
let errors4 = document.getElementById("errors4");
function sendMail() {
    const info = {
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    let text = '';
    const serviceID = "service_jzc67tq";
    const templateID = "template_4stpdhw";
    if (info.userName === "" || info.userName.length < 5) {
        text = "Please Enter Valid Username (at least 5 characters).";
        errors1.innerHTML = text;
        return false;
    }
    errors1.innerHTML = "";
    if (info.email === "" || info.email.indexOf("@") == -1) {
        text = "Please Enter Valid Email";
        errors2.innerHTML = text;
        return false;
    }
    errors2.innerHTML = "";
    if (isNaN(info.phone) && info.phone.length <= 11) {
        text = "Please Enter Valid Phone";
        errors3.innerHTML = text;
        return false;
    }
    errors3.innerHTML = "";
    if (info.message.length < 10) {
        text = "Please Enter Valid Message (at least 10 characters).";
        errors4.innerHTML = text;
        return false;
    }
    errors4.innerHTML = "";
    emailjs.send(serviceID, templateID, info)
        .then(res => {
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
        })
        .catch(err => console.log(err));
    alert("Your message has been sent successfully!!");
}