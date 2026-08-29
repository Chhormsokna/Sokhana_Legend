const movies = [
  {
    id: 1,
    title: "Avatar: Fire and Ash",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg",
    banner: "https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg",
    genre: "Action",
    duration: "3h 10m",
    rating: "8.5",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-12-18",
    status: "now-showing",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldaña"],
    description:
      "Jake Sully and his family face a new threat on Pandora: the Ash People, a violent Na'vi clan led by Varang."
  },

  {
    id: 2,
    title: "Captain America: Brave New World",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg",
    genre: "Action",
    duration: "1h 58m",
    rating: "7.3",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-02-14",
    status: "now-showing",
    director: "Julius Onah",
    cast: ["Anthony Mackie", "Harrison Ford"],
    description:
      "Sam Wilson investigates a global conspiracy involving the newly elected U.S. President Thaddeus Ross."
  },

  {
    id: 3,
    title: "Superman",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg",
    genre: "Action",
    duration: "2h 09m",
    rating: "7.7",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-07-11",
    status: "now-showing",
    director: "James Gunn",
    cast: ["David Corenswet", "Rachel Brosnahan"],
    description:
      "Superman must win back public support after intervening in an international conflict orchestrated by Lex Luthor."
  },

  {
    id: 4,
    title: "Jurassic World Rebirth",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Jurassic_World_Rebirth_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/a/a5/Jurassic_World_Rebirth_poster.jpg",
    genre: "Sci-Fi",
    duration: "2h 13m",
    rating: "7.0",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-07-02",
    status: "now-showing",
    director: "Gareth Edwards",
    cast: ["Scarlett Johansson", "Jonathan Bailey"],
    description:
      "A team travels to a former island research facility to extract DNA samples from three gigantic dinosaur species."
  },

  {
    id: 5,
    title: "F1",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png",
    banner: "https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png",
    genre: "Sport",
    duration: "2h 36m",
    rating: "8.1",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-06-27",
    status: "now-showing",
    director: "Joseph Kosinski",
    cast: ["Brad Pitt", "Damson Idris"],
    description:
      "A Formula One racing driver returns after 30 years to save his former teammate's underdog team from collapse."
  },

  {
    id: 6,
    title: "Lilo & Stitch",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
    genre: "Family",
    duration: "1h 47m",
    rating: "7.1",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-05-23",
    status: "now-showing",
    director: "Dean Fleischer Camp",
    cast: ["Maia Kealoha", "Chris Sanders"],
    description:
      "A live-action remake of Disney's animated classic about a lonely Hawaiian girl and her new alien friend Stitch."
  },

  {
    id: 7,
    title: "Mission: Impossible – The Final Reckoning",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
    genre: "Action",
    duration: "2h 49m",
    rating: "7.9",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-05-23",
    status: "now-showing",
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Hayley Atwell"],
    description:
      "Ethan Hunt and his IMF team race to stop a rogue artificial intelligence from destroying all of humanity."
  },

  {
    id: 8,
    title: "How to Train Your Dragon",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
    genre: "Fantasy",
    duration: "2h 05m",
    rating: "7.8",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-06-13",
    status: "coming-soon",
    director: "Dean DeBlois",
    cast: ["Mason Thames", "Nico Parker"],
    description:
      "A live-action remake of the beloved animated classic about a young Viking who befriends a dragon."
  },

  {
    id: 9,
    title: "Thunderbolts*",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/9/90/Thunderbolts%2A_poster.jpg",
    genre: "Action",
    duration: "2h 07m",
    rating: "7.4",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-04-30",
    status: "coming-soon",
    director: "Jake Schreier",
    cast: ["Florence Pugh", "Sebastian Stan"],
    description:
      "A group of antiheroes is caught in a trap and forced to work together on a mission that uncovers their pasts."
  },

  {
    id: 10,
    title: "The Fantastic Four: First Steps",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg",
    genre: "Sci-Fi",
    duration: "1h 55m",
    rating: "7.6",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-07-25",
    status: "coming-soon",
    director: "Matt Shakman",
    cast: ["Pedro Pascal", "Vanessa Kirby"],
    description:
      "The Fantastic Four must protect their retro-futuristic world from the planet-devouring cosmic being Galactus."
  },

  {
    id: 11,
    title: "28 Years Later",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/38/28_Years_Later_film_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/3/38/28_Years_Later_film_poster.jpg",
    genre: "Horror",
    duration: "1h 55m",
    rating: "7.5",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-06-20",
    status: "coming-soon",
    director: "Danny Boyle",
    cast: ["Jodie Comer", "Aaron Taylor-Johnson"],
    description:
      "A young boy journeys through a post-apocalyptic world to find a cure for his sick mother."
  },

  {
    id: 12,
    title: "Ballerina",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f6/Ballerina_%282025_film%29_poster.jpg",
    banner: "https://upload.wikimedia.org/wikipedia/en/f/f6/Ballerina_%282025_film%29_poster.jpg",
    genre: "Action",
    duration: "2h 05m",
    rating: "7.2",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-06-06",
    status: "coming-soon",
    director: "Len Wiseman",
    cast: ["Ana de Armas", "Keanu Reeves"],
    description:
      "Ballerina-assassin Eve MaCarro takes on an army of killers as she avenges the death of her father."
  }
];

export default movies;
