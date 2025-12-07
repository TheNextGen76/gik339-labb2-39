// 1. Checkboxen
// Använder: document.getElementById()
const checkbox = document.getElementById("divStyle");


// 2. Alla textfält (<input type="text">)
// Använder: document.getElementsByClassName()
const textfields = document.getElementsByClassName("textfield");


// 3. Knappen
// Använder: document.querySelector()
const button = document.querySelector("#myButton");


// 4. Div-elementet
// Använder: document.querySelectorAll() för att visa variation
// (men vi tar första elementet i NodeList)
const resultBox = document.querySelectorAll("#resultBox")[0];


// Testa i konsolen att allting laddats korrekt
console.log(checkbox);
console.log(textfields);
console.log(button);
console.log(resultBox);

// Funktionsdeklaration 
function handleInput(e) {

    // 1. Skriv ut vilket element som skickade eventet
    console.log("Avsändare (target):", e.target);

    // 2. Hämta name-attributet
    const inputName = e.target.name;
    console.log("Name-attribut:", inputName);

    // 3. Om det är inputfältet med name="content"
    if (inputName === "content") {

        // Skriv ut värdet i div-elementet
        resultBox.innerHTML = e.target.value;
    }
}
// === Checkboxens eventlyssnare ===
checkbox.addEventListener("change", function () {
    
    // Hämta färgen från textfälten (samlingen)
    // textfields[0] är "color" eftersom båda textfälten har class="textfield"
    const colorValue = textfields[0].value;

    // Sätt bakgrundsfärgen på div-elementet
    resultBox.style.backgroundColor = colorValue;
});
// === Eventlyssnare till textfälten ===
for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener("input", handleInput);
}
// === Knappens eventlyssnare ===
button.addEventListener("click", function () {

    // Ta bort div-elementet från DOM
    resultBox.remove();

});
