function convertWeight() {
    // Get input value in kilograms
    var inputWeightKg = parseFloat(document.getElementById('inputWeight').value);

    // Check if the input is a valid number
    if (!isNaN(inputWeightKg)) {
        // Convert to pounds and ounces
        var weightPounds = inputWeightKg * 2.20462;
        var weightOunces = inputWeightKg * 35.274;

        // Update the output elements
        document.getElementById('outputPounds').textContent = weightPounds.toFixed(2);
        document.getElementById('outputOunces').textContent = weightOunces.toFixed(2);
    } else {
        // If input is not a valid number, reset output
        document.getElementById('outputPounds').textContent = '0';
        document.getElementById('outputOunces').textContent = '0';
    }
}
