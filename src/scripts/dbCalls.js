const apiBaseURL = "http://localhost:8088";

const getAllEntries = () => {
  return fetch(`${apiBaseURL}/journalEntries `)
    .then(response => response.json());
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
        });
}

// const deleteEntry = (entryDate) => {
//   fetch(`${apiBaseURL}/journalEntries/${entryDate}`,
//     {
//         method: "DELETE"
//     })
// };
