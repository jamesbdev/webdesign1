// alert("this is from an external JS script");

/*
       user                         JS
        |                            |
    actions                     reactions
        |                            |
    events                       event handlers
                                 event listeners
                                 functions
*/

// background-image: url("../imgs/03_Pictures/Gallery_00.jpg");


function showPic1() {
    // alert(1);
    document.getElementById("frameDiv2")
        .style.backgroundImage = 'url("imgs/03_Pictures/Gallery_01.jpg")';
}


function showPic2() {
    // alert(2);
    document.getElementById("frameDiv2")
        .style.backgroundImage = 'url("imgs/03_Pictures/Gallery_02.jpg")';
}

function showPic3() {
    // alert(3);
    document.getElementById("frameDiv2")
        .style.backgroundImage = 'url("imgs/03_Pictures/Gallery_03.jpg")';
}

function showPic4() {
    // alert(4);
    document.getElementById("frameDiv2")
        .style.backgroundImage = 'url("imgs/03_Pictures/Gallery_04.jpg")';
}
