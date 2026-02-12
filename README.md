**🎬 MovieHUB – React Movie Search App**

MovieHUB is a simple and responsive movie search application built using React.js.
It fetches real-time movie data from the OMDb API and displays results dynamically.

**🚀 Features**

🔍 Search movies by title

🎥 Fetch live movie data using OMDb API

🖼 Display movie poster, title, and year

⚡ Built using React Hooks (useState, useEffect)

🎨 Modern cozy UI design

📱 Responsive layout

**🛠 Technologies Used**

React.js

JavaScript (ES6+)

OMDb API

CSS3

Fetch API

**📦 Installation & Setup**
1️⃣ Clone the repository
git clone https://github.com/your-username/moviehub.git

2️⃣ Navigate into project folder
cd moviehub

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm start


The app will run on:

http://localhost:3000

🔑 API Used

This project uses the OMDb API:

https://www.omdbapi.com?apikey=YOUR_API_KEY


**Movies are fetched dynamically using:**

fetch(`${API_URL}&s=${title}`)

📁 Project Structure
src/
│
├── App.js
├── MovieCard.js
├── App.css
├── search.svg
└── index.js

**🧠 How It Works**

On initial load, useEffect triggers:

searchMovies('Spiderman');


Movies are stored in state:

const [movies, setMovies] = useState([]);


Search input updates state dynamically

Clicking search icon triggers API call

Results are mapped and rendered using:

movies.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
))

**🎯 Future Improvements**

Add loading spinner

Add error handling UI

Add pagination

Add movie details modal

Deploy on Vercel / Netlify

📸 Screenshot

(Add screenshot of your app here)

👨‍💻 Author

Built with ❤️ using React.
