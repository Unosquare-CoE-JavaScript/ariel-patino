JEST
React Testing Library with
Create a Virtual DOm
Serach in virtual DOM
interact with virtua; dom
Needs a tests runner
Fin test, run them, make assertions
Jest
is recommended by testing library
comes with create-react-app
npm rest, runs Jest in watch mode.
Watch Mode
Watch for changes in files since last commit
Only run test related to these files
No Changes? No Test
Test method in JEST
string decription
test function
Test Fails if error is thrown wen running function
assertions throw error when expectation fails.
No error => Test Pass
Empty test passes

TDD:
Write the Test before the code.
Red test is for failing test before the code
Green test is for success test after the code
Advantages:
Test cases is part of codeing process
More efficient
Re run the test for free after changes

UNIT Test:
test one unit of code isolation
Integration Test
How multiple unit work together
Functional Test
Tets a particular function of software(tests behavior)
End to End (E2E) Test. Use Actual browser and server (Cypress, Selenium)

Different mindset from unit Testing
Unit Testing
Very easy to pinpoint failures
Further from how users interact with software
More likely to break with refactoring
Functional Testeing
it's Closer to how users interact with software
Robust Test
Diffucult to debug if test fails
BDD
involves collaborations between lots of roles
developers, QA, bussines partners, etc.

Accesibility To Dom Element
.getByRole('link', {name : /learn react/i })
.getByText(REGEXP or TEXT/i) /i is for ignoring case sensitive

    Link: https://www.w3.org/TR/wai-aria/#role_definitions

    Link: https://github.com/testing-library/jest-dom

Eslint installation  
 npm install eslint-plugin-testing-library eslint-plugin-jest-dom

    Remove eslintConfig from package.json
    Create .eslintrc and add standard config
    Add .eslintcache and .vscode to .gitignore
    Create .vscode/settings.json and add standar config
    Test that it worked in App.test.js

Bootstrap
npm install react-bootstrap bootstrap
Add js links to index.html
https://react-bootstrap.netlify.app/getting-started/introduction#browser-globals
Add css import to index.js
https://react-bootstrap.netlify.app/getting-started/introduction#css
npm install @testing-library/user-event @testing-library/dom --save-dev
