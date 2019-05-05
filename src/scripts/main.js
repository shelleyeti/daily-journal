let grabNewDate = document.querySelector("#journalDate");
let grabNewConcept = document.querySelector("#conceptsCovered");
let grabNewEntry = document.querySelector("#journalEntryText");
let grabNewMood = document.querySelector("#mood");

//select submit button on dom and add event lisiner
const submitNewEntry = document.querySelector(".submit");

submitNewEntry.addEventListener("click", () => {
    let newEntry = {
        date: grabNewDate.value,
        concept: grabNewConcept.value,
        entry: grabNewEntry.value,
        mood: grabNewMood.value
    }
    makeEntry(newEntry)
});

