const ageForm = document.getElementById('ageForm');
const dobInput = document.getElementById('dob');
const ageOutput = document.getElementById('age');
const h5El = document.querySelector('h5');

ageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(dobInput.value);
    const today = new Date();
    const ageInMilliseconds = today - dob;

    // Calculate age
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInWeeks = ageInDays / 7;
    const ageInMonths = ageInWeeks * 4.34524; // Approximate number of weeks in a month
    const ageInYears = ageInDays / 365.25; // Allowing for leap years

    // Display age
    const ageYears = Math.floor(ageInYears);
    const ageMonths = Math.floor(ageInMonths % 12);
    const ageDays = Math.floor(ageInDays % 30.4375); // Approximate number of days in a month
    const ageHours = Math.floor(ageInHours % 24);
    const ageMinutes = Math.floor(ageInMinutes % 60);
    const ageSeconds = Math.floor(ageInSeconds % 60);

    ageOutput.innerText = `You are ${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} hours, ${ageMinutes} minutes, and ${ageSeconds} seconds old.`;
    dobInput.value = ''; // Clear input field
});

function displayErrorMessage(message) {
    h5El.innerText = message;
    setTimeout(function() {
        h5El.innerText = 'Enter your date of birth:';
    }, 4000);
}
