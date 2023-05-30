/*//Lo que añade en porcentaje de propina
const percs = document.querySelectorAll(".perc_inp");

let porcentajeMonto = 0;

percs.forEach( perc => {

    if(perc.localName == "button") {
        perc.addEventListener("click" , addPercentage)
    } else {
        perc.addEventListener("input", addPercentage)
    }

});

function addPercentage(event) {
    console.log(event.target.value)

};*/



//Agrega un evento al input para que se active cuando cambie su valor
document.getElementById("cuenta").addEventListener("input", function() {
    let valorInput = parseFloat(document.getElementById("cuenta").value);
    
    
    
    //agrega el evento click a los botones de propina
    const botonesPropina = document.querySelectorAll(".btn-propina");
    let valorPropina;
    let valorPersonas;

    botonesPropina.forEach(function(btn) {
        btn.addEventListener("click" , function() {
            valorPropina = parseFloat(this.value);
            console.log(valorPropina);

            if(valorInput && valorPersonas) {
                calcularProp();
            }
        });
    });

    const customProp = document.querySelector(".perc_inp");
    customProp.addEventListener("input", function() {
        const customPropina = parseFloat(customProp.value);
        if (!isNaN(customPropina)) {
            valorPropina = customPropina / 100;
            console.log(valorPropina);

            if (valorInput && valorPersonas) {
                calcularProp();
            }
        }
    });

    document.getElementById("nPersonas").addEventListener("input", function() {
        valorPersonas = parseFloat(document.getElementById("nPersonas").value);

        if (valorInput && valorPropina) {
            calcularProp();
        }
    });

    function calcularProp() {
        //console.log(valorPersonas);
        //agarro la propina y defino tipos de propina y disponibilidad para seleccionar
        let propina = (valorInput * valorPropina) / valorPersonas;
        let totalxPer = (valorInput + propina) / valorPersonas;
        document.getElementById("propxP").textContent = propina.toFixed(2);
        document.getElementById("totalxP").textContent = totalxPer.toFixed(2);
    }

    document.getElementById("form").addEventListener("reset", function() {
        // Limpia los valores de los inputs
        document.getElementById("cuenta").value = "";
        document.getElementById("nPersonas").value = "";
        document.getElementById("propxP").textContent = "$0.00";
        document.getElementById("totalxP").textContent = "$0.00";
    
        // Limpia el contenido de propina en el HTML
    });
    
});
//reiniciar valores propina y total a ceros
document.getElementById("propxP").textContent = "$0.00";
document.getElementById("totalxP").textContent = "$0.00";



