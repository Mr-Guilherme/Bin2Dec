export const $inputBinary = document.querySelector("#input-binary-number");
export const $inputDecimal = document.querySelector("#input-decimal-number");
export const $outputBinary = $inputDecimal;
export const $outputDecimal = $inputBinary;

export const Dom = {
    renderDec(decimal) {
        $outputBinary.classList.remove("error");
        $outputBinary.placeholder = "Insert your decimal number";

        $outputBinary.value = decimal;
    },

    renderBin(binary) {
        $outputDecimal.classList.remove("error");
        $outputDecimal.placeholder = "Insert your binary number";

        $outputDecimal.value = binary;
    },

    errorDec() {
        $outputDecimal.classList.add("error");
        $outputDecimal.placeholder = "Insert a decimal number valid, no spaces";

        $outputDecimal.value = "";
    },

    errorBin() {
        $outputBinary.classList.add("error");
        $outputBinary.placeholder = "Insert a binary number valid (0 or 1)";

        $outputBinary.value = "";
    }
}

