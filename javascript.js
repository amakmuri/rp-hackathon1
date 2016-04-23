

 var month = prompt("Please enter your birth month as a number from 1-12"); 
    
    //error handling
    while (true) {
        if (parseInt(month)>0 && parseInt(month) <=12) {
            break;
            }
        else {
            month = prompt("You entered " + month + ". Please enter your birth month as a number from 1-12");
            }
    }
    
    //add text
    $('#text').text("here's your adorable animal zodiac sign!");
    $('#text').css('color', 'blue');

    //add image based on input
    if (parseInt(month) <= 3) { //3 = "3"
        $('#image').html('<img src="http://www.learnsomething.tips/wp-content/uploads/2013/09/84.jpg">');
    } else if (month <= 6) {
        $('#image').html('<img src="http://a4.files.blazepress.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTMxNjU1NDQ3Njg0ODc5NjM0.jpg">');
    } else if (month <= 9) {
        $('#image').html('<img src="http://videos.revision3.com/revision3/images/shows/animalisttoo/0005/animalisttoo--0005--sloth-talk--large.thumb.jpg">');
    } else {
        $('#image').html('<img src="http://s3.favim.com/orig/46/adorable-animals-cute-giraffe-Favim.com-424983.jpg">');
    }
    
