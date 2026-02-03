# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

 to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [live site URL](https://age-calculator-app-kappa-green.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- vanilla JavaScript
- [Tailwindcss](https://tailwindcss.com/) - For styles



### What I learned

i learn about the date object and how we can we get the current date months and the rest of what we need 

To see how you can add code snippets, see below:

```html
<div class="flex-1 flex flex-col space-y-2">
        <label for="day" class=" font-bold text-grey500 tracking-widest">
          DAY
        </label>
        <input type="number" id="day" class="flex-1 border border-grey200 rounded-sm p-4 w-25 font-bold text-black text-2xl focus:outline focus:outline-purple md:w-30" placeholder="24">
        <p class="hidden text-red400 italic">
          This field is required
        </p>
      </div>
```
```css
@keyframes slideUp {
  0% {
    transform: translateY(-50px) ;
    opacity: 0.5;
  }

  60% {
    transform: translateY(5px) scale(1.05);
    opacity: 0.75;
  }

  100% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
}
```
```js

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

```

### Continued development

want to learn more about the various math invole in javascript and get more famillar with javascript destructuring 


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Henry-pixel-dev](https://www.frontendmentor.io/profile/Henry-pixel-dev)
- Twitter - [@Histobloq](https://www.twitter.com/Histobloq)


## Acknowledgments

claude anthropic has being very helpful in my leanring and it still remain the best ai out there when it comes to coding 

