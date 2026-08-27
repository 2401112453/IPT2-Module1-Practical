// Wait for the webpage to load before running anything
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Grab the "Add Student" button from the HTML
    let addButton = document.getElementById("addStudentButton");

    // 2. Tell the button what to do when clicked
    addButton.addEventListener("click", function() {
        
        // 3. Grab the typed text from all four input boxes
        let id = document.getElementById("idNumber").value;
        let fname = document.getElementById("firstName").value;
        let mname = document.getElementById("middleName").value;
        let lname = document.getElementById("lastName").value;

        // 4. Stop bad data. Do not let them add an empty row.
        if (id === "" || fname === "" || mname === "" || lname === "") {
            alert("Stop. Fill in all student details.");
            return;
        }

        // 5. Find the table body where the new row will go
        let tableBody = document.getElementById("table-content");

        // 6. Create a brand new row
        let newRow = tableBody.insertRow();

        // 7. Put the grabbed text into the table cells
        newRow.insertCell(0).innerHTML = id;
        newRow.insertCell(1).innerHTML = fname;
        newRow.insertCell(2).innerHTML = mname;
        newRow.insertCell(3).innerHTML = lname;

        // 8. Wipe the input boxes clean for the next entry
        document.getElementById("idNumber").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("middleName").value = "";
        document.getElementById("lastName").value = "";
    });

});