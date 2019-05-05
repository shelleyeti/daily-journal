//selects input fields on the dom
let grabNewDate = document.querySelector("#journalDate");
let grabNewConcept = document.querySelector("#conceptsCovered");
let grabNewEntry = document.querySelector("#journalEntryText");
let grabNewMood = document.querySelector("#mood");

//selects radio buttons on the dom [type='']
const radioButton = document.querySelectorAll("[type='radio']");

//select submit button on dom and add event lisiner
const submitNewEntry = document.querySelector(".submit");

//posts new entry to database
submitNewEntry.addEventListener("click", () => {
    let newEntry = {
        date: grabNewDate.value,
        concept: grabNewConcept.value,
        entry: grabNewEntry.value,
        mood: grabNewMood.value
    }
    if (newEntry.date !== "" && newEntry.concept !== "" && newEntry.entry !== "" && newEntry.mood !== "") {
        makeEntry(newEntry)
    } else {
        let myAlertMessage = "please adding missing content: "
        if(newEntry.date == ""){
            myAlertMessage += `add date `
        }
        if(newEntry.concept == ""){
            myAlertMessage += `add concepts covered `
        }
        if(newEntry.entry == ""){
            myAlertMessage += `add journal entry `
        }
        if(newEntry.mood == ""){
            myAlertMessage += `add mood`
        }
        alert(myAlertMessage)
    }
});

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

//makes entries appear on page load
getAllEntries();

