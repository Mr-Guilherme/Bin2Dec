const $inputBinary = document.querySelector("#input-binary-number");
const $inputDecimal = document.querySelector("#input-decimal-number");

const $outputBinary = $inputDecimal;
const $outputDecimal = $inputBinary;

const Dom = {
    renderDec(decimal) {
        $outputBinary.classList.remove("error");
        $outputBinary.placeholder = "Insert your decimal number";

        $outputBinary.value = decimal;
    },

    // renderBin(binary) {
    //     $inputBinary.classList.remove("error");
    //     $inputBinary.placeholder = "Insert your binary number";

    //     $inputBinary.value = binary;
    // },

    errorBin() {
        $outputBinary.classList.add("error");
        $outputBinary.placeholder = "Insert a binary number valid (0 or 1)";

        $outputBinary.value = "";
    }
}

function handleValue(e) {
    e.preventDefault();
    const inputBinary = String($inputBinary.value);

    if(inputBinary == "") {
        $outputBinary.value = "";
        return;
    }

    const binaryString = inputBinary.replace(/\s/g, ""); // Remove white spaces
    
    main(binaryString);
}

function handleDec(e) {
    e.preventDefault();
    const inputDecimal = String($inputDecimal.value);

    if(inputDecimal == "") {
        $outputDecimal.value = "";
        return;
    }

    const binaryString = inputBinary.replace(/\s/g, "");
}

function convertBinToDec(binary) {
    const decimal = parseInt(binary, 2);
    return decimal;
}

// function convertDecToBin(decimal) {
//     const decimalNum = Number(decimal);
//     const binary = (decimalNum >>> 0).toString(2);
//     return binary;
// }

function main(inputValue) {
    const regexOnlyBin = !(/[^0-1]/g.test(inputValue));

    if(regexOnlyBin) {
        const decimal = convertBinToDec(inputValue)
        Dom.renderDec(decimal)
    } else {
        Dom.errorBin();
    }
   
}

$inputBinary.addEventListener('keyup', handleValue);
$inputDecimal.addEventListener('keyup', handleDec);