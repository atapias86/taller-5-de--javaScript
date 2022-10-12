addEventListener("DOMContentLoaded", (e) => {
    const favDialog_ejer01 = document.querySelector('#favDialog_ejer01');
    const favDialog_ejer02 = document.querySelector('#favDialog_ejer02');

    let calcular_ejer01 = document.querySelector("#btn_incio_ejer01");
    let formdialogo_ejer_01 = document.querySelector("#dialogo_01");
    let calcular_ejer02 = document.querySelector("#btn_incio_ejer02");
    let formdialogo_ejer_02 = document.querySelector("#dialogo_02");

    let sum = 0;

    calcular_ejer01.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#txt_area").value = ""
        favDialog_ejer01.showModal();
    });
    formdialogo_ejer_01.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.num_1);
        if (num1 >= 0) {
            sum += num1;
            formdialogo_ejer_01.reset();
            favDialog_ejer01.close();
            setTimeout(() => {
                favDialog_ejer01.showModal();
            }, 500);
        } else {
            formdialogo_ejer_01.reset();
            favDialog_ejer01.close();
            document.querySelector("#txt_area").value = "La suma es de: " + sum;
            sum = 0;
        }
    });

    calcular_ejer02.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#txt_area_ejer02").value = ""
        favDialog_ejer02.showModal();
    });
    formdialogo_ejer_02.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.dato_prec);
        if (num1 > 0) {
            sum += num1;
            formdialogo_ejer_02.reset();
            favDialog_ejer02.close();
            setTimeout(() => {
                favDialog_ejer02.showModal();
            }, 500);
        } else if (num1 < 0) {
            formdialogo_ejer_02.reset();
            favDialog_ejer02.close();
            setTimeout(() => {
                favDialog_ejer02.showModal();
            }, 500);
        } else {
            if (sum > 10000) {
                formdialogo_ejer_02.reset();
                favDialog_ejer02.close();
                let des = (sum*10)/100;
                let total = sum-des;
                document.querySelector("#txt_area_ejer02").value = "Sub Total............ " + sum 
                + "\nDescuento (10%)...... " + des
                + "\nTotal................ " + total;
                sum = 0;
            }
        }
    });
});
