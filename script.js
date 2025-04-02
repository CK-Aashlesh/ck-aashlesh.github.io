<<<<<<< HEAD

function Message(){
    console.log("Files Not Uploaded");
    alert("Files Not Uploaded")
}


// function SendMail(){
//     let parms = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,}
//     emailjs.send("service_18waiwa","template_4o1oamm" , parms).then(alert("Email Send!!"));
// }       

// document.querySelectorAll("nav ul li a").forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//     }
// });
function SendMail() {
    let parms = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("emailid").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_18waiwa", "template_4o1oamm", parms)
        .then(response => {
            alert("Email Sent Successfully!");
            console.log("SUCCESS!", response);
        })
        .catch(error => {
            alert("Failed to send email. Please try again.");
            console.error("ERROR:", error);
        });
}

=======
// alert("Work in Progress!!");



// function Message(){
//     console.log("Files Not Uploaded");
//     alert("Files Not Uploaded")
// }


// function SendMail(){
//     let parms = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,}
//     emailjs.send("service_18waiwa","template_4o1oamm" , parms).then(alert("Email Send!!"));
// }       

// document.querySelectorAll("nav ul li a").forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//     }
// });
function SendMail() {
    let parms = {
        from_name: document.getElementById("fullName").value,
        emailid: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_18waiwa", "template_4o1oamm", parms)
        .then(response => {
            alert("Email Sent Successfully!");
            console.log("SUCCESS!", response);
        })
        .catch(error => {
            alert("Failed to send email. Please try again.");
            console.error("ERROR:", error);
        });
}

>>>>>>> f43706e9714d4aa63061d6370c4405722da72e3c
