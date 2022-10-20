addEventListener("DOMContentLoaded", (e) => {
    const favDialog_ejer01 = document.querySelector('#favDialog_ejer01');
    const favDialog_ejer02 = document.querySelector('#favDialog_ejer02');
    let favDialog_ejer05 = document.querySelector("#favDialog_ejer05");
    let favDialog_ejer06 = document.querySelector("#favDialog_ejer06");
    let favPeso_ejer07 = document.querySelector("#favDialog_peso");
    let favDialog_ejer07 = document.querySelector("#favDialog_ejer07");

    let calcular_ejer01 = document.querySelector("#btn_incio_ejer01");
    let formdialogo_ejer_01 = document.querySelector("#dialogo_01");
    let calcular_ejer02 = document.querySelector("#btn_incio_ejer02");
    let formdialogo_ejer_02 = document.querySelector("#dialogo_02");
    let ejercicio_03 = document.querySelector("#form_ejer3");
    let ejercicio_04 = document.querySelector("#form_ejer4");
    let ejercicio_05 = document.querySelector("#form_05");
    let btn_ver_ejer05 = document.querySelector(".dtn_ver_05");
    let from_cerrar_05 = document.querySelector("#from_cerrar_05");
    let limpiar_tabla_05 = document.querySelector(".dtn_limpiar_05");

    let ejercicio_06 = document.querySelector("#form_06");
    let btn_ver_ejer06 = document.querySelector(".btn_ver_06");
    let from_cerrar_06 = document.querySelector("#from_cerrar_06");
    let limpiar_tabla_06 = document.querySelector(".btn_05");
    document.querySelector(".submit_06").disabled = false;
    document.querySelector(".submit_07").disabled = false;

    let ejercicio_07 = document.querySelector("#form_07");
    let formPeso_07 = document.querySelector("#formPeso_07");

    let btn_ver_ejer07 = document.querySelector(".btn_ver_07");
    let from_cerrar_07 = document.querySelector("#from_cerrar_07");
    let limpiar_tabla_07 = document.querySelector(".btn_07");
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
                let des = (sum * 10) / 100;
                let total = sum - des;
                document.querySelector("#txt_area_ejer02").value = "Sub Total............ " + sum
                    + "\nDescuento (10%)...... " + des
                    + "\nTotal................ " + total;
                sum = 0;
            }
        }
    });
    ejercicio_03.addEventListener("submit", (e) => {
        e.preventDefault();
        let checkbox = document.querySelectorAll("input[type='checkbox']");
        let checkboxData = [];
        checkbox.forEach(res => (res.checked) ? checkboxData.push(res.value) : null);
        let selec = document.querySelector("#select_03").value;
        switch (selec) {
            case "Pizza de 10 pulgadas":
                let precioP10Pul = 15000;
                checkboxData.forEach(ingre => {
                    ingre == "Pepinillos" ? precioP10Pul += 1500 : null;
                    ingre == "Champiñones" ? precioP10Pul += 1500 : null;
                    ingre == "Cebollas" ? precioP10Pul += 1500 : null;
                });
                document.querySelector("#txt_area_ejer03").value = "Sub Total............ 15000"
                    + "\nTotal................ " + precioP10Pul;
                break

            case "Pizza 12 pulgadas":
                let precioP12Pul = 25000;
                checkboxData.forEach(ingre => {
                    ingre == "Pepinillos" ? precioP12Pul += 1500 : null;
                    ingre == "Champiñones" ? precioP12Pul += 1500 : null;
                    ingre == "Cebollas" ? precioP12Pul += 1500 : null;
                });
                document.querySelector("#txt_area_ejer03").value = "Sub Total............ 25000"
                    + "\nTotal................ " + precioP12Pul;
                break

            case "Pizza 16 pulgadas":
                let precioP16Pul = 35000;
                checkboxData.forEach(ingre => {
                    ingre == "Pepinillos" ? precioP16Pul += 1500 : null;
                    ingre == "Champiñones" ? precioP16Pul += 1500 : null;
                    ingre == "Cebollas" ? precioP16Pul += 1500 : null;
                });
                document.querySelector("#txt_area_ejer03").value = "Sub Total............ 35000"
                    + "\nTotal................ " + precioP16Pul;
                break

            case "Selecion":
                swal("Error", "Debes seleccionar una tamaño de pizza", "error");
                document.querySelector("#txt_area_ejer03").value = "";
                break;
        }
        document.querySelector("#form_ejer3").reset();
    });

    ejercicio_04.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let numero = Number(data.numreo_rebes);
        console.log(numero);
        const invertirNumero = numero => {
            let invertido = 0;
            while (numero != 0) {
                invertido = 10 * invertido + numero % 10
                numero = (Math.floor(numero / 10))
            }
            return invertido
        };
        const numeroInvertido = invertirNumero(numero);
        ejercicio_04.reset();
        document.querySelector("#text_resultado_ejer04").value = "El numrero " + numero + " al Invertido es igual a: " + numeroInvertido;
    });
    let cont = 1;
    ejercicio_05.addEventListener("submit", (e) => {
        e.preventDefault();
        let selec = document.querySelector("#select_05").value;
        let data = Object.fromEntries(new FormData(e.target));
        let id = Number(data.txtId);
        let nombre = data.txtNom;
        let apell = data.txtApp;
        let edad = Number(data.txtEdad);
        let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${apell}</td>
                <td>${edad}</td>
                <td>${selec}</td>
            </tr>`;
        document.querySelector("#dataTable_club").insertAdjacentHTML("beforeend", plantillas);
        ejercicio_05.reset();
        cont++;
    });
    btn_ver_ejer05.addEventListener("click", (e) => {
        e.preventDefault();
        favDialog_ejer05.showModal();
    });
    from_cerrar_05.addEventListener("submit", (e) => {
        e.preventDefault();
        favDialog_ejer05.close();
    });
    limpiar_tabla_05.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_club").innerHTML = "";
        cont = 1;
    });
    let contp = 1;
    ejercicio_06.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let nom = data.txtNombre;
        let vb = Number(data.txtVB);
        let hit = Number(data.txtHIT);
        let ext = Number(data.txtEXT);
        let s = Number(data.txtS);
        let bb = Number(data.txtBB);

        let bbc = (hit + ext);
        let vlb = (vb - s - bb);
        pb = (bbc / vlb) * 1000;
        let plantillas = `
            <tr>
                <td>${contp}</td>
                <td>${nom}</td>
                <td>${pb}</td>               
            </tr>`;
        document.querySelector("#dataTable_bateo").insertAdjacentHTML("beforeend", plantillas);
        ejercicio_06.reset();
        contp++;
        console.log(contp);
        if (contp == 11) {
            document.querySelector(".submit_06").disabled = true;
        }
    });
    btn_ver_ejer06.addEventListener("click", (e) => {
        e.preventDefault();
        favDialog_ejer06.showModal();
    });
    from_cerrar_06.addEventListener("submit", (e) => {
        e.preventDefault();
        favDialog_ejer06.close();
    });
    limpiar_tabla_06.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_bateo").innerHTML = "";
        document.querySelector(".submit_06").disabled = false;
        favDialog_ejer06.close();
        contp = 1;
    });
    let nombre = "";
    let pesoAnt = 0;
    let sumpeso = 0;
    let contclub = 1;

    ejercicio_07.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let nom = data.txtNombre;
        let proAnt = Number(data.proAnt);
        nombre = nom;
        pesoAnt = proAnt;
        favPeso_ejer07.showModal();
        ejercicio_07.reset();
        if (contclub == 6) {
            document.querySelector(".submit_07").disabled = true;
        }
    })
    let count = 1;
    formPeso_07.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let peso = Number(data.txtpeso);
        let num = Number(formPeso_07.dataset.peso);
        console.log(peso);
        sumpeso += peso;
        if (num > count) {
            formPeso_07.reset();
            count++;
        } else {
            favPeso_ejer07.close();
            let proAct = sumpeso / 10;
            if (pesoAnt > proAct) {
                let bajo = pesoAnt - proAct;
                let plantilla = `
            <tr>
                <td>${contclub}</td>
                <td>${nombre}</td>
                <td>${pesoAnt}</td>
                <td>${proAct}</td>
                <td>${"BAJO " + bajo}</td>
            </tr>`;
                document.querySelector("#dataTable_peso").insertAdjacentHTML("beforeend", plantilla);
            } else if (pesoAnt < proAct) {
                let subio = proAct - pesoAnt;

                let plantilla = `
            <tr>
                <td>${contclub}</td>
                <td>${nombre}</td>
                <td>${pesoAnt}</td>
                <td>${proAct}</td>
                <td>${"SUBIO " + subio}</td>
            </tr>`;
                document.querySelector("#dataTable_peso").insertAdjacentHTML("beforeend", plantilla);
            } else {
                let plantilla = `
            <tr>
                <td>${contclub}</td>
                <td>${nombre}</td>
                <td>${pesoAnt}</td>
                <td>${proAct}</td>
                <td>${"IGUAL " + pesoAnt}</td>
            </tr>`;
                document.querySelector("#dataTable_peso").insertAdjacentHTML("beforeend", plantilla);
            }
            count = 1;
            sumpeso = 1;
            nombre = "";
            contclub ++;
            peso = 0;
        }
    })

    btn_ver_ejer07.addEventListener("click", (e) => {
        e.preventDefault();
        favDialog_ejer07.showModal();
    });
    from_cerrar_07.addEventListener("submit", (e) => {
        e.preventDefault();
        favDialog_ejer07.close();
    });
    limpiar_tabla_07.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_peso").innerHTML = "";
        document.querySelector(".submit_07").disabled = false;
        favDialog_ejer07.close();
        contp = 1;
    });
});
