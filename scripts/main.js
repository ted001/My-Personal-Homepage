var btn = document.getElementById("theme-button");
var flag = 0;
btn.onclick = function () {
    if (flag == 0) {
        document.body.style.backgroundColor = "#1D192E";
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");
        flag = 1;
    } else {
        document.body.style.backgroundColor = "#fbfbfe";
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon");
        flag = 0;
    }
};
