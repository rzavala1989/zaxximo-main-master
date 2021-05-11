# Do Betr Business

A fullstack MERN application that automates tasks for other users, as well as adding users to the staff of a cleaning company

- Create - Add users, adding logs that are assigned to an existing use
- Read - Get a list of all users via modal button and logs on the main page
- Update - Update logs, changing their status to complete, or reassigning existing tasks to other users
- Delete - Delete expenses

## Demo

- [Live Demo](https://arcane-woodland-70033.herokuapp.com/)

## What needs to be perfected:

- Dynamic navlinks on whether user is logged in or guest
- Personalize the about page and remove the lorem ipsum / boilerplate
- Error handling and prompts need to be added to signup / login, and letting a user know they are logged in
- General CSS and layout components / remove boilerplate
- NEED HELP WITH:
  *building a filter that sorts completed tasks on bottom
  *building a messenging feature that allows users to reach each other, based on the email displayed in the state
- And more!!!

## How To Use

- Once logged in, user can use modal button on bottom right to either view users in state, add users (creating their credentials as well), and assigning logs/tasks to users

- Navbar links to About page (not yet complete), Logout (doesn't work yet), Login, and Register

- There is a select filter that still needs to be built to sort tasks by their status

- Each log has a link that if clicked, lets logged in user (eventually admin access only) edit/update the log, and can also change the logs to completed, in which HTML/CSS is rendered to visualize that

- Each log has a trashcan that allows logged in user to delete tasks

## Redux

- Two states/actions: user, and log states
- Can view logged in user, as well as all user info in the database besides passwords
- Logs have their general information, as well as the user's id that its assigned to

## Built With

The client and the server are sharing the same repo.

I am also building a React Native App that I plan on operating concurrently with the server in this repo. This Zaxximo web app is meant for admin use, once the authorization is constructed (as of now, any use can log in). However, the RN app will only be able to view their own tasks, and mark them as completed

### Front End

- HTML
- CSS
- JavaScript [ES6]
- React (w/ Redux)

### Back End

- Node.js
- Express
- Mongoose (Atlas)
- JWT Authentication
- bcryptjs
- Passport

### DevOps

- Heroku

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
