//Prompt user for language code
let languageCode = prompt("Enter two-letter language code (es, de, en or fr):");

//Check code entered and display "hello world" in corresponding message
if (languageCode === "es" || languageCode === "ES") {
    document.write("Hola Mundo!");
} else if (languageCode === "de" || languageCode === "DE") {
    document.write("hallo Welt!");
} else if (languageCode === "en" || languageCode === "EN") {
    document.write("Hello World!");
} else if (languageCode === "fr" || languageCode === "FR") {
    document.write("Bonjour le monde!");
} else {
    document.write("Hello World!");
}