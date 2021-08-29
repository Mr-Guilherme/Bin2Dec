import { $inputBinary, $inputDecimal, $outputBinary, $outputDecimal } from "./dom.js";
import { validationBin, validationDec } from "./validation.js";

function handleBin() {
    const inputBinary = String($inputBinary.value);

    if(inputBinary == "") {
        $outputBinary.value = "";
        return;
    }

    const binaryString = inputBinary.replace(/\s/g, ""); // Remove white spaces
    
    return binaryString;
}

function handleDec() {
    const inputDecimal = String($inputDecimal.value);

    if(inputDecimal == "") {
        $outputDecimal.value = "";
        return;
    }

    return inputDecimal;
}

$inputBinary.addEventListener("keyup", function(e) {
    e.preventDefault();
    const binary = handleBin();
    validationBin(binary)
});
$inputDecimal.addEventListener("keyup", function(e) {
    e.preventDefault();
    const decimal = handleDec();
    validationDec(decimal)
});