document.write('<p style="text-align: center;font-size:48px;">');
document.write("Hello JavaScript~");
document.write("</p>");


document.write('<div id="msg">正在测试网络延迟，请稍后...</div>');
document.write('<a href="#">电信网路</a>    <span class="classtime" xl-name="电信网路"></span><br>');
document.write('<a href="#">联通网路</a>    <span class="classtime" xl-name="联通网路"></span>');
var jump = 1, t = {}, autourl = new Array(), autoname = [];
autourl[1] = "http://image.baidu.com/"; //这个是电信服务器站点
autourl[2] = "https://www.baidu.com/"; //这个是联通服务器站点
autoname[1] = "电信网路";
autoname[2] = "联通网路";
(function () {
    for (var i = 1; i < autourl.length; i++) {
        var img = new Image;
        //img.onerror= auto(autourl[i]);
        img.onerror = (function (j) {
            return function () {
                t[autourl[j]] = (new Date()) - t[autourl[j]];  //记入时间差
                console.log(autourl[j] + "    ：" + t[autourl[j]] + "ms"); //console.log(t[url] + "ms");
                document.querySelector('[xl-name="' + autoname[j] + '"]').innerHTML = t[autourl[j]] + ' ms';
                console.log(jump);
                if (jump) {
                    jump = 0;
                    document.getElementById("msg").innerText = '3秒后进入【' + autoname[j] + '】';
                    //setTimeout(function(){top.location=url;},3000); //setTimeout("top.location='" + url + "';",3000);   //3s 即3000ms
                    //setTimeout(function () { window.location.replace(autourl[j]); }, 3000);
                }
            }
        })(i);
        //闭包传值
        img.src = autourl[i] + Math.random();
        t[autourl[i]] = (+new Date());//记录开始载入时间
    }
})();