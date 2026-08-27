document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // DEV 1: ADD STUDENT FUNCTION (With Safety Wall)
    // ==========================================
    let addStudentBtn = document.getElementById("addStudentButton");
    
    // Only run this if we are on the Student page
    if (addStudentBtn) {
        addStudentBtn.addEventListener("click", function() {
            let id = document.getElementById("idNumber").value;
            let fname = document.getElementById("firstName").value;
            let mname = document.getElementById("middleName").value;
            let lname = document.getElementById("lastName").value;

            if (id === "" || fname === "" || mname === "" || lname === "") {
                alert("Stop. Fill in all student details.");
                return;
            }

            let tableBody = document.getElementById("table-content");
            let newRow = tableBody.insertRow();

            newRow.insertCell(0).innerHTML = id;
            newRow.insertCell(1).innerHTML = fname;
            newRow.insertCell(2).innerHTML = mname;
            newRow.insertCell(3).innerHTML = lname;

            document.getElementById("idNumber").value = "";
            document.getElementById("firstName").value = "";
            document.getElementById("middleName").value = "";
            document.getElementById("lastName").value = "";
        });
    }

    // ==========================================
    // DEV 2: ADD SUBJECT FUNCTION (With Safety Wall)
    // ==========================================
    let addSubjectBtn = document.getElementById("addSubject");

    // Only run this if we are on the Subject page
    if (addSubjectBtn) {
        addSubjectBtn.addEventListener("click", function() {
            let subCode = document.getElementById("subjectCode").value;
            let subName = document.getElementById("subjectName").value;
            let subUnits = document.getElementById("units").value;

            if (subCode === "" || subName === "" || subUnits === "") {
                alert("Stop. Fill in all subject details.");
                return;
            }

            let tableBody = document.getElementById("table-content");
            let newRow = tableBody.insertRow();

            newRow.insertCell(0).innerHTML = subCode;
            newRow.insertCell(1).innerHTML = subName;
            newRow.insertCell(2).innerHTML = subUnits;

            document.getElementById("subjectCode").value = "";
            document.getElementById("subjectName").value = "";
            document.getElementById("units").value = "";
        });
    }

});