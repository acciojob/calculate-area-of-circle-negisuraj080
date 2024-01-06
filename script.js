 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 radius = parseFloat(radius);

    // Check if the input is a valid positive number
    if (!isNaN(radius) && radius > 0) {
        // Calculate the area of the circle (rounded to two decimal places)
        const area = Math.PI * Math.pow(radius, 2);
        const roundedArea = Math.round(area * 100) / 100; // Round to two decimal places

        // Display the result to the user
        alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
    } else {
        // Display an error message if the input is invalid
        alert("Invalid input. Please enter a positive number for the radius.");
    }
           
}
calculateArea();
