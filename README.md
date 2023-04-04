![logo](https://user-images.githubusercontent.com/84918375/178348430-c7b1a04e-cf07-431f-992d-3540e822f9ec.svg)

## Author

Filiz Hakan

## Technologies

- JS
- CSS
- React

##### Langage: JavaScript

##### Framework: ReactJS

##### Dependencies:

- React (version 17.0.2)
- React-DOM (version 17.0.2)
- React-router-DOM (version 6.3.0)
- Recharts (version 2.1.11)

### Possible endPoints on API port (3000)

This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

Examples of queries
http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
http://localhost:3000/user/18 - Retrieves user 18's main information.

##

- [Back-end](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- [NPM](https://www.npmjs.com/)

## Starting the project

- Launch the Back-end on the port 3000 with the command `npm run dev`
- Fork or clone the repository
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to launch the project.

<h3>Project :</h3>
For this project, we need to design a dashboard showing a user's performances while exercising. Therefore, anyone using the dasboard can keep up with his/her own performances on a weekly and/or daily basis. Only the desktop version is required (1024px x 780px) for this sprint. We use Figma to base the dashboard model.

<h3>Model in Figma: </h3>
<a href="https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1&t=vfinV2XURfYZ5vTL-0"> See the model
</a>
