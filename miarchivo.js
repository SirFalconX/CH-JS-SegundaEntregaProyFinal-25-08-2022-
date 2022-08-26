//Tarea realizada por Alvaro Correa para CoderHouse

//Seguro Vehículos

const marcaAutos = ["brandChevrolet","brandRenault","brandAudi"]

let seguroGlobal = 2000
let seguroBasico = 1000

let precioFinal = 0

let okay = false //Validador
let okay2 = false
let okay3 = false
let pideMarca

//Precio Chevrolet según el año del vehículo
const precioAnioChevrolet = [500, 1000, 1500]
//Precio Renault
const precioAnioRenault = [1000, 1500, 1850]
//Precio Audi
const precioAnioAudi = [2000, 2500, 3000]

let brand
let seguro



//Boton cotizador
function getCotizacion() {
    const radio = document.getElementsByName("brand");
    for(i = 0; i< radio.length; i++) {
        if(radio[i].checked) {
        console.log(radio[i].value)
        brand = radio[i].value
        }
    }
    const anio = (document.querySelector("#year").value)
    console.log(`${anio}`)
    const seguroAuto = document.getElementsByName("tipoSeguro");
    for(i = 0; i< seguroAuto.length; i++) {
        if(seguroAuto[i].checked) {
        console.log(seguroAuto[i].value)
        seguro = seguroAuto[i].value
            }
    }
    precioFinal = 10
    Cotizador(brand, anio, seguro, precioFinal)
    console.log(precioFinal)
    const resultado = document.querySelector("#resultado")
    resultado.textContent = precioFinal
    localStorage.setItem("Seguro Cotizado", precioFinal)
}




function Cotizador(brand, year, tipoSeguro) {
    console.log(precioFinal)
    console.log(brand)
    switch(brand){
        case marcaAutos[0]: //Llamo elemento del array
        console.log("entrega chevrolet")
            resuelveAnioChev(year) 
            console.log(precioFinal)
            resuelveSeguro(tipoSeguro)
            break;   
        case marcaAutos[1]:
            resuelveAnioRen(year)
            resuelveSeguro(tipoSeguro)
            break;
        case marcaAutos[2]:
            resuelveAnioAudi(year)
            resuelveSeguro(tipoSeguro)
            break;
        default:
            break;
    }
}


function resuelveAnioChev(pideAnio) {
    console.log(precioFinal)
        if (pideAnio >= 2000 && pideAnio <= 2009) {
            precioFinal += precioAnioChevrolet[0]
        }
        else {
            if(pideAnio >= 2010 && pideAnio <= 2019) {
                precioFinal += precioAnioChevrolet[1]
            }
            else {
                if(pideAnio >= 2020 && pideAnio <= 2022){
                    precioFinal += precioAnioChevrolet[2]
                }
            }
        }
    }    


function resuelveAnioRen(pideAnio) {
    if (pideAnio != "") {
        if (pideAnio >= 2000 && pideAnio <= 2009) {
            precioFinal += precioAnioRenault[0]
        }
        else {
            if(pideAnio >= 2010 && pideAnio <= 2019) {
                precioFinal += precioAnioRenault[1]
            }
            else {
                if(pideAnio >= 2020 && pideAnio <= 2022){
                    precioFinal += precioAnioRenault[2]
                }
            }
        }
    } else {
        console.log("ERROR Debe ingresar un año válido")
        //return
    }
}


function resuelveAnioAudi(pideAnio) {
    if (pideAnio != "") {
        if (pideAnio >= 2000 && pideAnio <= 2009) {
            precioFinal += precioAnioAudi[0]
        }
        else {
            if(pideAnio >= 2010 && pideAnio <= 2019) {
                precioFinal += precioAnioAudi[1]
            }
            else {
                if(pideAnio >= 2020 && pideAnio <= 2022){
                    precioFinal += precioAnioAudi[2]
                }
            }
        }
        return precioFinal
    } else {
        console.log("ERROR Debe ingresar un año válido")
        //return
    }
}


//Suma el seguro seleccionado:
function resuelveSeguro(pideSeguro) {

    if (pideSeguro === "segBasico") {
        precioFinal += seguroBasico 
    }
    else {
        if(pideSeguro === "segGlobal") {
            precioFinal += seguroGlobal
        }
    }
}



//Cotizador()
//Resultado final del seguro
