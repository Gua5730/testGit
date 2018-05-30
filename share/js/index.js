var btn = document.querySelector('button');
var sec = document.getElementById('sec');
var uls = document.querySelector('ul');
var li_1 = document.getElementsByClassName('list1')[0];
var score = document.getElementById('score');
var turnOff = document.getElementById('turnOff');
var back = document.getElementById('back')
//开始时间
var z = 30.00;
//等级
var level = 1;
//分数
var n = 0;

//模式切换
turnOff.onclick = function() {
    document.body.style.background = 'rgb(199,237,204)';
    turnOff.innerHTML = '普通模式';
    turn();
}
function turn() {
    turnOff.onclick = function(){
        document.body.style.background = '';
        turnOff.innerHTML = '护眼模式';
        turnOff.onclick = function(){
            document.body.style.background = 'rgb(199,237,204)';
            turnOff.innerHTML = '普通模式';
            turn();
        }
    }
}

btn.onclick = function() {
    //1.添加计时器
    var timer = setInterval(function(){
       z -= 0.01;
       z = z.toFixed(2);
       sec.innerHTML = z;
       if(z <= 0) {
            clearInterval(timer);
            if(n < 8) {
                alert('GAME OVER!' + ' ' + '等级:睁眼瞎');
            } else if(n >= 12) {
                alert('GAME OVER!' + ' ' + '等级:火眼金睛');
            } else if(n >= 20) {
                alert('GAME OVER!' + ' ' + '等级:超神');
            } else {
                alert('GAME OVER!' + ' ' + '等级:高度近视');
            }
            back.style.display = 'block';
        }
    },10);
    //2.点击按钮消失，第一个li消失
    btn.remove();
    li_1.remove();
    turnOff.remove();
    //3.添加4个li>img
    app();
    
    function app() {
        level +=1;
        for (var i = 0; i < level*level; i++) {
            var newLi = document.createElement('li');
            uls.appendChild(newLi);
            var newImg = document.createElement('img');
            newLi.appendChild(newImg);
            newLi.style.width = 100 / level + '%';
            newLi.style.float = 'left';
            newImg.style.display = 'block';
            newImg.style.width = 100 + "%";
            newImg.src = 'img/1.png';
            newLi.style.backgroundColor = 'rgb('+rand(50,255) +','+rand(50,255)+','+rand(50,255)+')';
        }
        var x = rand(0,level * level-1);
        var imgs1= document.querySelectorAll('img');
        imgs1[x].src = 'img/2.png';
        var li = document.querySelectorAll('li');
        li[x].onclick = function() {
            for (var i = 0; i < level*level; i++) {
                li[i].remove(this);
            }
            n += 1;
            score.innerHTML = n;
            if(level > 10) {
                level = 10;
            }
            app();
        }
    }
}


//随机函数
function rand(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
