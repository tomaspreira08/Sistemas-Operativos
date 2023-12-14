function showText(id) {
    var topicText = document.getElementById(id);
    topicText.style.opacity = "1";
}

function hideText(id) {
    var topicText = document.getElementById(id);
    topicText.style.opacity = "0";
}


var topic3 = document.getElementById('tiposSistemasOperativos');

topic3.onmouseover = function () {
    topic3.querySelector('.topic-text-3').style.opacity = "1";
};

topic3.onmouseout = function () {
    topic3.querySelector('.topic-text-3').style.opacity = "0";
};