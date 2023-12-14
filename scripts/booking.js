/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numberOfDaysSelected = 0;
let totalCost = 0; 

const dayButtons = document.querySelectorAll('.flex .day-selector');
const clearButton = document.querySelector('.clear-button');
const halfDayButton = document.querySelector('.half');
const fullDayButton = document.querySelector('.full');
const calculatedCostElement = document.querySelector('.calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(dayButton => {
    dayButton.addEventListener('.click', () => {
        if (!dayButton.classList.contains('.clicked')) {
            dayButton.classList.add('.clicked');
            numberOfDaysSelected++;
            recalculateTotalCost();
        }
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('.click', () => {
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('.clicked');
    });
    numberOfDaysSelected = 0;
    recalculateTotalCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('.click', () => {
    if (!halfDayButton.classList.contains('.clicked')) {
        costPerDay = 20;
        halfDayButton.classList.add('.clicked');
        fullDayButton.classList.remove('.clicked');
        recalculateTotalCost();
    }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('.click', () => {
    if (!fullDayButton.classList.contains('.clicked')) {
        costPerDay = 35;
        fullDayButton.classList.add('.clicked');
        halfDayButton.classList.remove('.clicked');
        recalculateTotalCost();
    }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateTotalCost() {
    console.log(`Cost per day: $${costPerDay}`);
    console.log(`Number of days selected: ${numberOfDaysSelected}`);

    totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.innerHTML = `$${totalCost}`;
}