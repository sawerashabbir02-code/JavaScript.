let color1 = prompt("Enter first primary color (red, blue, yellow):").toLowerCase();
let color2 = prompt("Enter second primary color (red, blue, yellow):").toLowerCase();

if (
    (color1 !== "red" && color1 !== "blue" && color1 !== "yellow") ||
    (color2 !== "red" && color2 !== "blue" && color2 !== "yellow")
) {
    console.log("Invalid color entered.");
}

else if (color1 === color2) {
    console.log("Both colors are same.");
}

else if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
) {
    console.log("purple");
}

else if (
    (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red")
) {
    console.log("orange");
}

else if (
    (color1 === "blue" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "blue")
) {
    console.log("green");
}