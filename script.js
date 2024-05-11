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
        strings: ["Developer","Software Engineer","FreeLancer","Foodie"],
        typeSpeed:100,
        backSpeed:100,
        loop: true,
    })
    var typed= new Typed(".typing-2",{
        strings: ["Developer","Software Engineer","FreeLancer","Foodie"],
        typeSpeed:100,
        backSpeed:100,
        loop: true,
    })



    var  icon = document.getElementById("icon");

    icon.onclick =function() {
        document.body.classList.toggle("dark-theme");
    }
});


