import filmbaseImg from "./Assets/filmbase.png";
import battleshipImg from "./Assets/battleship.png";
import weatherAppImg from "./Assets/weather-app.png";
import shopAppImg from "./Assets/shop-app.png";

const projects = [
  {
    id: "p1",
    name: "Shop App",
    description:
      "Shop app built with React. User can choose whatever product he want, also product color and capacity, and add it to the cart. User can change amount of product in the cart. In the header user can change currency and prices will change accordingly for every currency.",
    repo: "https://github.com/Benodkk/shop-app",
    live: "https://benodkk.github.io/shop-app/",
    img: shopAppImg,
  },
  {
    id: "p2",
    name: "Filmbase",
    description:
      "Website based on polish website Filmweb. User can rate every movie/tvShow, every of them will be saved on user profile. There is also searching bar so user can search for any movie/tvShow he want. Every photo for article, tvShow, movie or people was fake generated. App only for computer size screen.",
    repo: "https://github.com/Benodkk/Filmbase-project",
    live: "https://benodkk.github.io/Filmbase-project/",
    img: filmbaseImg,
  },
  {
    id: "p3",
    name: "Battleship",
    description:
      "The game of Battleship built with vanilla javascript. Place your ships vertical or horizontal to setup your board and begin selecting spaces on the computers board to attack. The one who sank all the enemy ships wins.App only for computer size screen.",
    repo: "https://github.com/Benodkk/Project-Battleship",
    live: "https://benodkk.github.io/Battleship-playing-with-css/",
    img: battleshipImg,
  },
  {
    id: "p4",
    name: "Weather App",
    description:
      "Weather app built with vanilla javascript. This app uses the OpenWeather API to retreive and display data on a fully responsive UI. The app shows the locations current weather. App for any size screen.",
    repo: "https://github.com/Benodkk/WeatherApp",
    live: "https://benodkk.github.io/WeatherApp/",
    img: weatherAppImg,
  },
];

export { projects };
