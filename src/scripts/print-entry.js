//returns entry to dom
makeJournalEntryComponent = (journalEntry, entryCounter) => {
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
        <button type="button" id="returnTop"> <a href="#">Return to Top </a></button>
    </div>
    `
};

//selects element to print to html
renderJournalEntries = (entries) => {
    //selects html element
    const printEntry = document.querySelector("#print-entry")
    //sets up counter
    let entryCounter = 1;
    //Loops through each object
    for (i = 0; i < entries.length; i++) {
        printEntry.innerHTML += makeJournalEntryComponent(entries[i], entryCounter)
        entryCounter++;
    }
};
