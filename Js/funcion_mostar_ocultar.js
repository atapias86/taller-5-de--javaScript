addEventListener("DOMContentLoaded", (e) => {
    btn_01.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'block';;
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'none';;
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_02.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        document.querySelector("#ejercicio_02").style.display = 'block';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'none';
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_03.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'block';
        document.querySelector("#ejercicio_04").style.display = 'none';
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_04.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        btn_04.style.background = "rgb(0,255,255)"
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'block';
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_05.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        btn_05.style.background = "rgb(0,255,255)"
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'none';
        document.querySelector("#ejercicio_05").style.display = 'block';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_06.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'none';
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'block';
        document.querySelector("#ejercicio_07").style.display = 'none';
    });
    btn_07.addEventListener("click", (e) => {
        document.querySelector("#ejercicio_01").style.display = 'none';
        document.querySelector("#ejercicio_02").style.display = 'none';
        document.querySelector("#ejercicio_03").style.display = 'none';
        document.querySelector("#ejercicio_04").style.display = 'none';
        document.querySelector("#ejercicio_05").style.display = 'none';
        document.querySelector("#ejercicio_06").style.display = 'none';
        document.querySelector("#ejercicio_07").style.display = 'block';
    });

    btn_01.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(0,255,255)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_02.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(0,255,255)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_03.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(0,255,255)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_04.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(0,255,255)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_05.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(0,255,255)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_06.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(0,255,255)";
        btn_07.style.background = "rgb(218, 216, 216)";
    });
    btn_07.addEventListener("click", (e) => {
        btn_01.style.background = "rgb(218, 216, 216)";
        btn_02.style.background = "rgb(218, 216, 216)";
        btn_03.style.background = "rgb(218, 216, 216)";
        btn_04.style.background = "rgb(218, 216, 216)";
        btn_05.style.background = "rgb(218, 216, 216)";
        btn_06.style.background = "rgb(218, 216, 216)";
        btn_07.style.background = "rgb(0,255,255)";
    });
});