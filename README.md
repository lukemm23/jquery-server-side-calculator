# Server side Calculator

## instructions
How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

1. download from Github
2. open file with code editor of your choice
3. open terminal/commandline
4. make sure node and npm is installed
5. run npm install
6. turn on server by running 'npm start'
7. open browser on localhost:5000
8. have fun!

## Description

This is a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit, `=` button is clicked, capture this input, bundle it up in an object, and then send this object to the server via a POST. There is a 'C' button that will clear the user input fields.

The server-side logic computes the numbers as appropriate. The server is able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, a GET request sends data back to the client in an object where it is displayed on the DOM.

## Built With
HTML5, CSS3, jQuery, Express.js, Node.js

## Acknowledgement
Thanks to Prime Digital Academy in Kansas City who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at lukemm23@gmail.com