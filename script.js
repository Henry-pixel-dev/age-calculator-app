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

dayInput.addEventListener('blur', () => {
    if (!validateDay(dayInput.value)){
        showError(dayInput)
    } else {
        clearError(dayInput)
    }
})
monthInput.addEventListener('blur', () => {
    if (!validateMonth(monthInput.value)){
        showError(monthInput)
    } else {
        clearError(monthInput)
    }
})
yearInput.addEventListener('blur', () => {
    if (!validateYear(yearInput.value)){
        showError(yearInput)
    } else {
        clearError(yearInput)
    }
})

function validateDay(day){
    if(!day) return false;

    const startDay = 1
    const maxDay = 31
    if(day < startDay || day > maxDay){
        return false;
    }

    return true
}

function validateMonth(monthInput){
    if (!monthInput) return false;

    const startMonth = 1
    const maxMonth = 12;
    if(monthInput < startMonth || monthInput> maxMonth){
        return false;
    }

    return true;
}

function validateYear(yearInput){
    if (!yearInput) return false;

    let myDate = new Date('2026');
    let currentyear = myDate.getFullYear()

    if(yearInput > currentyear){
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

    
    if(days < 0){
        months--;
        const lastMonth = new Date(currentyear, currentMonth -1, 0);
        days += lastMonth.getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }
    
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
    yearDisplay.classList.add('slide');
    yearDisplay.classList.add('slide');
    monthDisplay.classList.add('slide2');
    daysDisplay.classList.add('slide3');
}

function showError(sibbling) {
    const label = sibbling.previousElementSibling
    label.style.color = 'hsl(0, 100%, 67%)';
    const errorMsg = sibbling.nextElementSibling
    errorMsg.classList.remove('hidden')
    sibbling.classList.add('error')
}

function clearError(sibbling) {
   const label = sibbling.previousElementSibling
    label.style.color = 'hsl(0, 1%, 44%)';
    const errorMsg = sibbling.nextElementSibling
    errorMsg.style.display = 'none'
    sibbling.classList.remove('error') 
}

btn.addEventListener('click', () => {
    
    if(validateTotalDate()){
        yearInput.value = '';
        monthInput.value = '';
        dayInput.value = ''
        updateDisplay()
    } else {
        alert('fill in the correct details')
        return;
    }
})
