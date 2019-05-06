//posts new entry to database
submitNewEntry.addEventListener("click", () => {
    let newEntry = {
        date: grabNewDate.value,
        concept: grabNewConcept.value,
        entry: grabNewEntry.value,
        mood: grabNewMood.value
    }
    //validation for info to be complete
    if (newEntry.date !== "" && newEntry.concept !== "" && newEntry.entry !== "" && newEntry.mood !== "") {
        if(buttonMode === "create")
            makeEntry(newEntry);
        //update's entry
        else {
            updateEntry(updateEntryId, newEntry);
            buttonMode = "create";
        }
    }else {
        let myAlertMessage = "please adding missing content: "
        if(newEntry.date == ""){myAlertMessage += `add date `}
        if(newEntry.concept == ""){myAlertMessage += `add concepts covered `}
        if(newEntry.entry == ""){myAlertMessage += `add journal entry `}
        if(newEntry.mood == ""){myAlertMessage += `add mood`}
        alert(myAlertMessage)
    }
});