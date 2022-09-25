var btn = document.getElementById("theme-button");
var intro = document.getElementById("intro-txt");
var flag = 0;
btn.onclick = function () {
    if (flag == 0) {
        document.body.style.backgroundColor = "#1D192E";
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");
        intro.style.color = "#fff";
        flag = 1;
    } else {
        document.body.style.backgroundColor = "#fbfbfe";
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon");
        intro.style.color = "#40514e";
        flag = 0;
    }
};
