export default function uppercaseCharAt(string, index) {

    if (index >= 0 && index < string.length) {
        return string.substring(0, index) + string.charAt(index).toUpperCase() + string.substring(index + 1);
    } else {
        return string;
    }
}