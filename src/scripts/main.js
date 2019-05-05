//makes entries appear on page load
getAllEntries();

//global variables
let buttonMode = "create";
let updateEntryId = "";

//selects input fields on the dom
let grabNewDate = document.querySelector("#journalDate");
let grabNewConcept = document.querySelector("#conceptsCovered");
let grabNewEntry = document.querySelector("#journalEntryText");
let grabNewMood = document.querySelector("#mood");

//selects radio buttons on the dom [type='']
const radioButton = document.querySelectorAll("[type='radio']");

//select submit button on dom and add event lisiner
const submitNewEntry = document.querySelector(".submit");

//loop through each radio button
radioButton.forEach(radio => {
    radio.addEventListener("click", event => {
        filterMood(event.target.value)
    })
});

//function to search for mood
filterMood = (mood) => {
    getAllEntries(mood);
};