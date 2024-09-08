const inputfield= document.getElementById("input-temp");
const fromUnitField= document.getElementById("input-unit");
const toUnitField= document.getElementById("output-unit");
const outputField = document.getElementById("output-temp");
const form= document.getElementById("converter");

function convertTemp(value, fromUnit, toUnit){
    if(fromUnit === 'c'){
        //origen es celsius
        if(toUnit === 'f'){
            //unidad destino farenheit
        return (value * 9 / 5) + 32;
        }else if(toUnit ==='k'){
            //unidad destino kelvin
                return value + 273.15;
            }else{
                //no se ha seleccionado tipo de destino
                return value;
            }
    }

    if(fromUnit === 'f'){
        //unidad destino farenheit
        if(toUnit === 'c'){
            //unidad destino Celsius
            return(value - 32) * (5 / 9);
        }else if(toUnit === 'k'){
            //unidad destino Kelvin
            return (value + 459.67) * (5 / 9);
        }else{
            //no se ha seleccionado tipo de destino
            return value;
        }
    }
    if(fromUnit === 'k'){
        //unidad destino Kelvin
        if(toUnit === 'c'){
            //unidad destino Celsius
            return value - 273.15;
        }else if(toUnit === 'f'){
            //unidad destino farenhait
            return (value * (9 / 5)) - 459.67;
        }else{
            //no se ha seleccionado tipo de destino
            return value;
        }
    }
    throw new Error('unidad de medida invalida');
}

form.addEventListener('input' , ()=>{
    const inputTemp = parseFloat(inputfield.value); // valor digitado por el usuario en el campo input
    const fromUnit = fromUnitField.value; // valor seleccionado por el usuario (unidad de medida origen)
    const toUnit = toUnitField.value; // valor seleccionadoi por el usuario (unidad de medida destino)

    const outputTemp = convertTemp(inputTemp,fromUnit,toUnit); //calculo de valores, conversion de valores
    outputField.value = (Math.round(outputTemp*100)/100) + ' ' + toUnit.toUpperCase(); //impresion de la salida del calculo realizado.
}
);