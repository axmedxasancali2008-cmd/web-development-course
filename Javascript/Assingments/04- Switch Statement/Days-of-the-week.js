let day=prompt("Enter a day of the week (e.g., Monday, Tuesday, etc.):");

switch (day){
    case "Saturday":
        alert("It is the first day of the week.");
        break;
    case "Sunday":
        alert("It is the second day of the week.");
        break;
    case "Monday":
        alert("It is the Third day of the week.");
        break;
    case "Tuesday":
        alert("It is the Fourth day of the week.");
        break;
    case "Wednesday":
        alert("It is the Fifth day of the week.");
        break;
    case "Thursday":
        alert("It is the first day of the weekend.");
        break;
    case "Friday":
        alert("It is the second day of the weekend.");
        break;
    default:
        alert("Invalid day entered.");
}