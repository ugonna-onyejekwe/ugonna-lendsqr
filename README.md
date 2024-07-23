# Lendsqr-fe-test

This project was crafted using

- React,
- Typescript and
- SCSS

This project was scaffolded using `vite`
The data consumed was pulled from a mock Api`(json-generator.com)`

## Installation:

To get the app running on your local, firstly

- Clone the repository and navigate into the project directory,

- Run npm to install all dependency used,

  ```
  npm install
  ```

- Run npm dev to get the app running on your local(http://localhost:5173/)
  ```
  npm dev
  ```

The app is up and running.

## Folder Structure:

All the working file of this app can be found in the `src` folder.

- The `api(folder)` where I implemented all the api configuration used in the app

- The `assets(folder)` which consist of Icon(file) and image(file)

- The `componets(folder)` which consist off all reusable component used around the project and api calls

- The `page(folder)` which consist of all the pages of the project

- The `types(file)` which consist of all the types used in this project

- The `utils(folder)` which contains my redux-toolkit configuration for this project.

- The `model(folder)` which contains my yup vaidation schema for this project.

- The `mockup-data(folder)` which contains some data which i map through to create some components.

- The `__test__(folder)` which contain my test.

## Git Structure

    all console.log, unused variables and commented out codes must be removed before you push

    Check into the master branch and pull before you checkout into your own branch.
    choose your own branch names that describes what you worked on and add a prefix to it.

          * feat : when it is a new feature (e.g feat/buttonComp)
          * fix: when you are making fixes to a particular feature (e.g fix/loginPage)
          * ref: when you are making a refactor

## Deployment

The app is deployed using vercel and can be accessed via [lendsqr-fe-test](https://onyejekwe-ugonna-lendsqr-fe-test.vercel.app/)
