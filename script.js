const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const yearDisplay = document.querySelector('#yearDisplay');
const monthDisplay = document.querySelector('#monthDisplay');
const daysDisplay = document.querySelector('#daysDisplay');
const btn = document.querySelector('#btn')


function validateDay(dayInput){
    if(!dayInput) return false;

    const startDay = 1
    const maxDay = 31
    if(dayInput < startDay || dayInput > maxDay){
        return false;
    }

    return true
}

function validateMonth(monthInput){
    if (!monthInput) return false;

    const startMonth = 1
    const maxMonth = 12;
    if(monthInput.value < startMonth || monthInput.value > maxMonth){
        return false;
    }

    return true;
}

function validateYear(yearInput){
    if (!yearInput) return false;

    let myDate = new Date('2026');
    let currentyear = myDate.getFullYear()

    if(yearInput.value > currentyear){
        return false;
    }

    return true;
}

function validateTotalDate(){
    if(!validateDay(dayInput.value)) return false;
    if (!validateMonth(monthInput.value)) return false;
    if(!validateYear(yearInput.value)) return false;

    return true;
}

function calculateAge(birthYear, birthMonths, birthDays){
    const today  = new Date();
    const currentyear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    birthYear = parseInt(birthYear);
    birthMonths = parseInt(birthMonths);
    birthDays = parseInt(birthDays);

    let years = currentyear - birthYear;
    let months = currentMonth - birthMonths;
    let days = currentDay - birthDays
    
    return {
        years,
        months,
        days
    }
}

function updateDisplay() {
    const { currYear, currMonth, currDays } = calculateAge(
        yearInput.value, 
        monthInput.value, 
        dayInput.value
    );
    console.log(currDays)
    console.log(currMonth)
    console.log(currYear)
    // Append to display
    yearDisplay.textContent = currYear;
    monthDisplay.textContent = currMonth;
    daysDisplay.textContent = currDays;
}

function showError() {

}
btn.addEventListener('click', () => {
    if(validateTotalDate()){
        updateDisplay()
    } else {
        showError()
        return;
    }
})

