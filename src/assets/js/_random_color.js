
var boxColumnColor = document.querySelectorAll('.section_d2d_test__box')

boxColumnColor.forEach((elem) => {

    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    elem.parentElement.style.setProperty('background-color', randomColor);
    
})
