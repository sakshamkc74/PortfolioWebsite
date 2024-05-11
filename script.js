$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else
        {
        $('.navbar').removeClass("sticky") 
        }
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // JavaScript code to toggle the menu

    
   

    var typed= new Typed(".typing",{
        strings: ["Software Engineer","Student","Traveller"],
        typeSpeed:100,
        backSpeed:100,
        loop: true,
    })
    var typed= new Typed(".typing-2",{
        strings: ["Software Engineer","Student","Traveller"],
        typeSpeed:100,
        backSpeed:100,
        loop: true,
    })
    document.getElementById('checkbox').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('emailRow').addEventListener('click', function() {
        var email = this.querySelector('.sub-title').textContent;
        window.location.href = 'mailto:' + email;
    });
    
    
});
function SendMail() {
    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email_id").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Validate form input
    if (fullName === "" || email === "" || subject === "" || message === "") {
        // If any field is empty, show error message and return
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });
        return;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid email address!',
        });
        return;
    }
    // If all fields are filled, proceed with sending the email
    var params = {
        from_name: fullName,
        email_id: email,
        subject: subject,
        message: message
    }

    emailjs.send("service_tqf4jxm", "template_1qowyhd", params).then(function (res) {
        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
            showConfirmButton: false,
            timer: 2000
        });

        // Clear form fields after successful submission
        document.getElementById("fullName").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    })

    
}
const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });