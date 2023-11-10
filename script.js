function back(){
    var root = document.documentElement;
    var color = document.getElementById("back").value;
    root.style.backgroundColor = color;
}
function font(){
    var fColor = document.querySelector('div.font');
    var tColor = document.getElementById('font').value;
    fColor.style.color = tColor;
}
function link(){
    var aElem = document.querySelector('a.link');
    var link = document.getElementById('link').value;
   var regExp = link.replace(/https:\/\//, ''); 
    aElem.textContent = regExp;
    aElem.setAttribute('href', link);
}
