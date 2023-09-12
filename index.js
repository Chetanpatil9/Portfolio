function clock(){
    var a = new Date().toLocaleTimeString();
    document.getElementById("sample").innerText=a;
}
setInterval(clock,1000);