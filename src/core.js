export function convertBinToDec(binary) {
    const decimal = parseInt(binary, 2);
    return decimal;
}

export function convertDecToBin(decimal) {
    const decimalNum = Number(decimal);
    const binary = decimalNum.toString(2);
    return binary;
}