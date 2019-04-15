// Represents a Journal Entry
const journalEntries = [
    {
    date: "March 29, 2019",
    concept: "How to Make Frends",
    entry: "Making frends is fun.",
    mood: "happy"
    },
    {
    date: "April 3, 2019",
    concept: "Recognizing a Computer",
    entry: "Computers come in all shapes and sizes.",
    mood: "wild"
    }
]


for(key in journalEntries) {
    console.log(key + ": " + journalEntries[key]) 
}

const makeJournalEntryComponent = (journalEntry, entryCounter) => {
    return `
    <div class="journal-entry">
            <h1>Journal Entry ${entryCounter}</h1>
            <section>${journalEntry.date}</section>
            <aside>
                Concepts Covered: ${journalEntry.concept}
                <br>
                Entry: ${journalEntry.entry}
                <br>
                Mood: ${journalEntry.mood}
            </aside>
        </div>
    `
}


// for (i = 0; i < journalEntries.length; i++) {
//     printEntry.innerHTML += makeJournalEntryComponent(journalEntries[i])
// }

const renderJournalEntries = (entries) => {
    const printEntry = document.querySelector("#print-entry")
    let entryCounter = 1;
    for (i = 0; i < entries.length; i++) {
        printEntry.innerHTML += makeJournalEntryComponent(journalEntries[i], entryCounter)
        entryCounter++;
}
}

renderJournalEntries(journalEntries)
