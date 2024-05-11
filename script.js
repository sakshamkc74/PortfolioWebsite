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

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

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

});

function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_tqf4jxm","template_1qowyhd",params).then(function(res){
        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
            showConfirmButton: false,
            timer: 2000
          });
          
        document.getElementById("fullName").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    })
    
}

