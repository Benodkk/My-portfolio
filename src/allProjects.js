import filmbaseImg from './Assets/filmbase.png'
import battleshipImg from './Assets/battleship.png'
import weatherAppImg from './Assets/weather-app.png'


const projects =[
    {
        id:'p1',
        name:'Filmbase',
        description: 'Website based on polish website Filmweb. User can rate every movie/tvShow, every of them will be saved on user profile. There is also searching bar so user can search for any movie/tvShow he want. Every photo for article, tvShow, movie or people was fake generated. App only for computer size screen.',
        repo:'https://github.com/Benodkk/Filmbase-project',
        live:'https://benodkk.github.io/Filmbase-project/',
        img: filmbaseImg
    },
    {
        id:'p2',
        name:'Battleship',
        description: 'The game of Battleship built with vanilla javascript. Place your ships vertical or horizontal to setup your board and begin selecting spaces on the computers board to attack. The one who sank all the enemy ships wins.App only for computer size screen.',
        repo:'https://github.com/Benodkk/Project-Battleship',
        live:'https://benodkk.github.io/Battleship-playing-with-css/',
        img: battleshipImg
    },
    {
        id:'p3',
        name:'Weather App',
        description: 'Weather app built with vanilla javascript. This app uses the OpenWeather API to retreive and display data on a fully responsive UI. The app shows the locations current weather. App for any size screen.',
        repo:'https://github.com/Benodkk/WeatherApp',
        live:'https://benodkk.github.io/WeatherApp/',
        img: weatherAppImg
    },
]

export {projects}