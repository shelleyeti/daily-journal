//returns entry to dom
//data-id is a part of dataset
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
        <button type="button" data-id="${journalEntry.id}" class="deleteEntry">Delete Entry</button>
        <button type="button"class="editEntry"><a href="#" data-id="${journalEntry.id}">Edit Entry</a></button>
    </div>
    `
};

//selects element to print to html
renderJournalEntries = (entries) => {
    //selects html element
    const printEntry = document.querySelector("#print-entry")
    printEntry.innerHTML = "";
    //sets up counter
    let entryCounter = 1;
    //Loops through each object
    for (i = 0; i < entries.length; i++) {
        printEntry.innerHTML += makeJournalEntryComponent(entries[i], entryCounter);
        entryCounter++;
    }
    //selects delete buttons, loops through, and adds event listener to each
    document.querySelectorAll(".deleteEntry").forEach(deleteButton => {
        deleteButton.addEventListener("click", (event) => {
            //target the dataset.id from the button
            deleteEntry(event.target.dataset.id);   
    });
    });
    //selects edit buttons, loops through, and adds event listener to each
    document.querySelectorAll(".editEntry").forEach(editButton => {
        editButton.addEventListener("click", (event) => {
            //target the dataset.id from the button
            getEntry(event.target.dataset.id);
            
    });
    })
};

