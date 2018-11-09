var ball = document.getElementsByClassName("ball")[0];
var dir = -1;
var block = document.getElementsByClassName("block")[0];

document.onkeydown = function(e) {
    var keycode = e.which;
    switch(keycode) {
        case 37:
            if(block.offsetLeft>0){
                block.style.left = block.offsetLeft - 10 + "px";
            }
            break;
        case 38:
            if(block.offsetTop>0){
                block.style.top = block.offsetTop - 10 + "px";
            }
            break;
        case 39:
            if(document.documentElement.clientWidth-block.offsetLeft>0){
                block.style.left = block.offsetLeft + 10 + "px";
            }
            break;
        case 40:
            if(document.documentElement.clientHeight-block.offsetTop>0){
                block.style.top = block.offsetTop + 10 + "px";
            }
            break;
        default: break;
    }

}

function ballMove() {
    if(ball.offsetLeft==block.offsetLeft
        && ball.offsetTop==block.offsetTop){
            dir *= -1;
    }
    ball.style.left = ball.offsetLeft + dir*1 + "px";
    if(ball.offsetLeft==1
        || document.documentElement.clientWidth-ball.clientWidth-ball.offsetLeft==1){
        dir *= -1;
    }
    setTimeout("ballMove()",1);
}

ballMove();
// window.onload = "ballMove()";