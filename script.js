const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const yearDisplay = document.querySelector('#yearDisplay');
const monthDisplay = document.querySelector('#monthDisplay');
const daysDisplay = document.querySelector('#daysDisplay');
const btn = document.querySelector('#btn')

let DateObject = {
    day: null,
    month: null,
    year: null
}

dayInput.addEventListener('input', (e) => {
    DateObject.day = e.target.value;
    console.log(DateObject.day)
});
monthInput.addEventListener('input', (e) => {
    DateObject.month = e.target.value;
    console.log(DateObject.month)
});
yearInput.addEventListener('input', (e) => {
    DateObject.year = e.target.value;
    console.log(DateObject.year)
});

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
    
    // return {
    //     years,
    //     months,
    //     days
    // }
    return {
        currYear: years,
        currMonth: months,
        currDays: days
    }
}

function updateDisplay() {
    console.log(DateObject)
    const { currYear, currMonth, currDays } = calculateAge(
        DateObject.year, 
        DateObject.month,
        DateObject.day
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
        yearDisplay.textContent = '';
        monthDisplay.textContent = '';
        daysDisplay.textContent = ''
        updateDisplay()
    } else {
        showError()
        return;
    }
})

