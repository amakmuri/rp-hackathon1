 var month = prompt("Please enter your birth month as a number from 1-12"); //taking in input (for example: "hello" or "2")
    //month = "hello"

        //x = "6"; 
        //if (parseInt(x)....) if you WERE to convert x to a number, what would the output be? doesn't change the value of x
        //parseInt(x) -> actually converts x to a number; changes the value of x

    //if you WERE to convert month to a number.... and the conversion result would NOT be a valid number (i,e. NAN)..... then NOTHING. month = what is was before
    
        //parseInt("hello") = NaN //converting string to a number; NaN = not a number since you can't convert hello to a number
    
    //while (true) {
        //checks if the input is a valid number (i.e not NAN)
    //    if (isNaN(parseInt(month))) {
    //        month = prompt("You entered " + month + ". Please enter your birth month as a number from 1-12");
    //    }
    //    else {
            //if it's a valid number, it converts the string "2" to a number 2
    //        month = parseInt(month);
            //2nd if statement that checks if it's 1-12
    //        if (month>0 && month <=12) { //if input is between 1-12
    //        break;
    //        }
    //        else {
    //            month = prompt("You entered " + month + ". Please enter your birth month as a number from 1-12");
    //        }
    //    }
        
    //}

    while (true) {
        if (month>0 && month <=12) { //if input is between 1-12
            break;
            }
        else {
                month = prompt("You entered " + month + ". Please enter your birth month as a number from 1-12");
            }
    }
    
    if (month <= 3) { //3 = "3"
        $('#image').html('<img src="http://www.learnsomething.tips/wp-content/uploads/2013/09/84.jpg">');
    } else if (month <= 6) {
        $('#image').html('<img src="http://a4.files.blazepress.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTMxNjU1NDQ3Njg0ODc5NjM0.jpg">');
    } else if (month <= 9) {
        $('#image').html('<img src="http://videos.revision3.com/revision3/images/shows/animalisttoo/0005/animalisttoo--0005--sloth-talk--large.thumb.jpg">');
    } else {
        $('#image').html('<img src="http://s3.favim.com/orig/46/adorable-animals-cute-giraffe-Favim.com-424983.jpg">');
    }
    
    //document.querySelector('body').append = "here's your adorable animal zodiac sign!";
    $('#text').text("here's your adorable animal zodiac sign!");
    $('#text').css('color', 'blue');