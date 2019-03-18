/**
 * 通过JavaScript原生代码控制document节点
 * 
 * this is use JavaScript lang ！
 */
window.onload = function () {
    setInterval(function () {
        var time = new Date().toString();
        //alert(time);
        document.getElementById("time").innerHTML = time;
    }, 1000);
    console.log("%c 前端开发 %c css88.com %c ", "color:red", "font-size:20pt", "color:orange;font-weight:bold");
    console.log("%c有阴影的log", "text-shadow: 3px 1px 1px grey")
    console.log('%c彩色文字啊 ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
    console.log("%c ", "background: url(https://camo.githubusercontent.com/a5fb06dfb59c43b14b10a92f81f069296a47d2f8/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f3230322f3230323338312e737667) no-repeat center;padding-left:100%;padding-bottom: 250px;")
}