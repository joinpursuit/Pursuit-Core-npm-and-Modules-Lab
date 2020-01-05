const firstChar = (string) => {
    console.log(string.charAt(0))
}
firstChar("hello")

const compare = (a,b) => {
    if(a === b) {
        return true;
    } else {
        return false
    }
}
console.log(compare("hello","hello"))

const reverse = (string) => {
    console.log(string.split("").reverse().join(""));
}
reverse("hello")


