# Password Manager - Github Repo password-generator https://github.com/Evans20kom/password-generator


## Description

A simple password manager application using html, css, and javascript, that takes user input and generates a pseudo-random string of characters that the end user can use as a password.

This application is a functional real world application that uses a pseudo-random function to produce a string of characters that can be used as a password. It can take user input regarding character types and password length and it returns prompts / alerts in case user input is not correct

I engaged with this project as it was an ideal opportunity to practice arrays and functions to organize code, while producing a programme with real world applications, but also a means to showcase progress through my developer portfolio.

While building this application, I have learnt about a variety of array methods and functions, and how to structure my application code in order to avoid deadlocks caused by functions that can lead to repetitive code. During the development, I approached closely to the deadline for submission; therefore, I had to prioritize function over optimization. An example of that is the design of the function "getPasswordOptions" (see below): The code is less that optimal and repetitive, and could be avoided with a better structured design and further research on array methods. However, due to time constraints, optimization, and debugging will commence after submission, as application is currently functional, and optimization aims to imrpove user experience and clarity for maintenance in the future.

<img src="img/codeSnip.png" alt="snip of function code">

## Table of Contents (Optional)

You can find the deployed application [here](https://evans20kom.github.io/password-manager/): https://evans20kom.github.io/password-manager/

You can find the github repo [here](https://github.com/Evans20kom/password-generator): https://github.com/Evans20kom/password-manager


## Installation

N/A

## Usage

When you open the deployed application [here](https://evans20kom.github.io/password-manager/), a page with prompts will appear that you can manipulate to generate a random password:
    
<img src="img/Instructions1.png" alt="Open application on Browser">


You can select some or all character types to include in your randomized password:

<img src="img/Instructions2.png" alt="Right Click and Select: Inspect">
    
Choose how long you would like your password to be by choosing a number between 8 and 128 characters, and press the "Generate Password" button:

<img src="img/Instructions3.png" alt="Select Console on the tabs on the right side">
    
If there is a problem with your input, a window will appear to explain what you need to do differently:

<img src="img/Instructions4.png" alt="See the console output on the right side">

## Credits

A number of sources were used for the development of this application:

<ul>
<li>Chris H - Central Grader: On the challenge for week 3, they alerted me to the fact that the presentation of my README file is not the expected one; upon investigating, I realized that markdown syntax was not correct</li>
<li>CG Collin - Central Grader: After grading the challenge for week 4, they confirmed that the corrections I made to the README file were acceptable; based on this feedback, I maintained the previous REAME file structure as a template for future projects.</li>
<li>Source for toggle switch for user input - html and css sourced from w3schools:
https://www.w3schools.com/howto/howto_css_switch.asp</li>
<li>Looked for code for an input box here:
https://www.w3schools.com/html/html_form_input_types.asp</li>
<li>Found an approach to read html values of a toggle switch here:
https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox and here: https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript</li>
<li>Attempt 2 at testing toggles, found the approach here:
https://www.youtube.com/watch?v=TjpL8U_vxOo and studied further here:<br> <ul><li>https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector</li><li>https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault</li><li>https://www.w3schools.com/jsref/met_element_addeventlistener.asp</li>
</li></ul>
<li>Looked for a method to convert a string into a number here:
https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/</li>
<li>Found the approach to calculate a random number here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random</li>
<li>Asim Mahar - Stack Overflow: Proposed method that helped me access function local variable through a different function. Method Proposed here:
https://stackoverflow.com/questions/10579713/passing-a-local-variable-from-one-function-to-another</li>

## License

MIT License

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

Commented-out test code left in javascript file, tests TBA after submission.
