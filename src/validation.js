import {convertBinToDec, convertDecToBin} from "./core.js"
import { Dom } from "./dom.js";

export function validationBin(inputValue) {
    const regexOnlyBin = !(/[^0-1]/g.test(inputValue));

    if(regexOnlyBin) {
        const decimal = convertBinToDec(inputValue)
        Dom.renderDec(decimal)
    } else {
        Dom.errorBin();
    }
   
}

export function validationDec(decimal) {
    const regexOnlyDec = !(/\D/g.test(decimal));

    if(regexOnlyDec) {
        const binary = convertDecToBin(decimal);
        Dom.renderBin(binary);
    } else {
        Dom.errorDec();
    }
    
}