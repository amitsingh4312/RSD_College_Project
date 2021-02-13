var i=2;
function slider(){
    if(i==6){
        i=1;
        $(".bbanneImage").css("background-image","url(images/project/Akshay/banner"+i+".jpg)")
        i++
    }else{
        $(".bbanneImage").css("background-image","url(images/project/Akshay/banner"+i+".jpg)")
        i++
    }

}
$(document).ready(function(){
    setInterval(slider,4000)
})