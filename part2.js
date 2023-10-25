// Part 2: Find the Student!


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-name");
    const searchButton = document.getElementById("search-btn");
    const studentsTable = document.getElementById("students-table");

    //Filter and display matching students
    function searchStudents() {
        const searchTerm = searchInput.value.trim();
        const matchingStudents = students.filter(student => student.name.includes(searchTerm));
        displayStudents(matchingStudents);
    }

    //Display students in the table
    function displayStudents(studentList) {
        const tbody = studentsTable.querySelector("tbody");
        tbody.innerHTML = "";

        if (studentList.length === 0) {
            const noStudentsRow = document.createElement("tr");
            noStudentsRow.innerHTML = '<td colspan="2">No students were found</td>';
            tbody.appendChild(noStudentsRow);
        } else {

             // Sort by section
            studentList.sort((a, b) => a.section - b.section);
            
            studentList.forEach(student => {
                const row = document.createElement("tr");
                const sectionCell = document.createElement("td");
                sectionCell.textContent = student.section;
                const nameCell = document.createElement("td");
                nameCell.textContent = student.name;
                row.appendChild(sectionCell);
                row.appendChild(nameCell);
                tbody.appendChild(row);
            });
        }
    }

    //Search button
    searchButton.addEventListener("click", searchStudents);
});
