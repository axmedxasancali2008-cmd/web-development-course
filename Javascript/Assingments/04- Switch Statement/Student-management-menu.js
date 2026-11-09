let Menu=prompt("== Student Management Menu ==\n1. View Student profile\n2. View courses\n3. View Grades \n4. View Attendance \n5. Exit");

switch (Menu){
    case "1":
        alert("Viewing Student profile...");
        break;
    case "2":
        alert("Viewing courses...");
        break;
    case "3":
        alert("Viewing Grades...");
        break;
    case "4":
        alert("Viewing Attendance...");
        break;
    case "5":
        alert("Goodbye!");
        break;
    default:
        alert("Invalid option.");
}