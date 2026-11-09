let light = prompt("Enter the traffic light color (red, yellow, green):");
switch (light) {
    case "red":
        alert("Stop!");
        break;
    case "yellow":
        alert("Get ready!");
        break;
    case "green":
        alert("Go!");
        break;
    default:
        alert("Invalid traffic light color entered.");
}