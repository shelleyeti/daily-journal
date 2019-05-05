const apiBaseURL = "http://localhost:8088";

//IF mood is a argument, then will filter by mood)
const getAllEntries = (mood) => {
  return fetch(`${apiBaseURL}/journalEntries `)
    .then(response => response.json())
    .then(parsedEntries => {
        if(mood){
            var filteredEntries = parsedEntries.filter(entry =>{
                if(entry.mood === mood)
                    return entry;
            });

            renderJournalEntries(filteredEntries);
        }else{
            renderJournalEntries(parsedEntries)
        }
    });
};

// const updateEntry = (entryDate, entryObj) => {
//     fetch (`${apiBaseURL}/journalEntries/${entryDate}`,
//         {
//             method:"PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body:JSON.stringify(entryObj)
//         })
//      .then(response => response.json())
//      .then(parsedResult => {
//         console.log("updated entry", parsedResult);
//         })
// };

const makeEntry = (entryObj) => {
    fetch(`${apiBaseURL}/journalEntries/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        })
    .then(response => response.json())
    .then(parsedResult => {
        console.log("new entry", parsedResult);
        getAllEntries();
        });
}

const deleteEntry = (entryId) => {
  fetch(`${apiBaseURL}/journalEntries/${entryId}`,
    {
        method: "DELETE"
    })
    //reloads all entries back to the dom
    .then( () => {
        getAllEntries();
    });
};
