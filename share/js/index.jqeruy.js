var btn = $("button");
var turnOff = $("#turnOff");
var uls = $("ul");
var li_1 = $(".list1");
var sec = $("#sec");
var back = $("#back");
var score = $("#score");
//时间
var z = 30.00;
//等级
var level = 1;
//分数
var n = 0;

turnOff.click(function(){
    $("body").css({'background':'rgb(199,237,204)'});
    $(this).html("普通模式");
    turn();
});
//模式切换
function turn() {
    turnOff.click(function(){
        $("body").css({'background':''});
        $(this).html("护眼模式");
        turnOff.click(function(){
            $("body").css({'background':'rgb(199,237,204)'});
        $(this).html("普通模式");
        turn();
        })
    })
}
//
btn.click(function(){
    //1.点击开始按钮，按钮消失，第一个li消失
    btn.remove();
    li_1.remove();
    turnOff.remove();
    //2.添加计时器
    var timer = setInterval(function(){
        z -= 0.01;
        z = z.toFixed(2);
        sec.html(z);
        if(z<=0) {
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
            back.css("display","block");
        }
    },10);
    //3.添加li>img
    app();
    
    function app(){
        level+=1;
        for (var i = 0; i < level*level; i++) {
            var newLi = $("<li></li>");
            newLi.appendTo(uls);
            var newImg = $("<img src='img/1.png' />");
            newImg.appendTo(newLi);
            newLi.css({
               'width':100/level +'%',
               'float':'left',
               'backgroundColor':'rgb('+rand(50,255)+','+rand(50,255)+','+rand(50,255)+')'
            });
            newImg.css({
               'display':'block',
               'width':100+'%'
            });
        }
        var x = rand(0,level * level-1);
        var imgs1 = $("img");
        imgs1.eq(x).attr('src','img/2.png');
        var li = $("li");
        li.eq(x).click(function(){
            for (var i = 0; i < level*level; i++) {
                li.eq(i).remove();
            } 
            n+=1;
            score.html(n);
            if(level > 10) {
                level =10;
            }
            app();
        });
    }
})


//随机函数
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
