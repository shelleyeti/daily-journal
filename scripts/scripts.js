// Represents a Journal Entry
const objectsJournalEntry = {
    date: "March 29, 2019",
    conceptsCovered: "How to Make Frends",
    journal: "Making frends is fun.",
    mood: "happy"
}

const objectsJournalEntry2 = {
    date: "April 3, 2019",
    conceptsCovered: "Recognizing a Computer",
    journal: "Computers come in all shapes and sizes.",
    mood: "wild"
}

for(key in objectsJournalEntry2) {
    console.log(key + ": " + objectsJournalEntry2[key]) 
}


