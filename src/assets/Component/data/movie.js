const movies = [
  {
    id: 1,
    title: "Jumanji: Welcome to the Jungle",
     poster: "https://i.pinimg.com/1200x/ea/93/ab/ea93aba8a40994bca40c5bf45c1ec0be.jpg",
    banner: "https://i.pinimg.com/1200x/ea/93/ab/ea93aba8a40994bca40c5bf45c1ec0be.jpg",
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
    title: "Avatar",
    poster: "https://i.pinimg.com/1200x/d5/9c/2a/d59c2afe90c9fa162dcb4d1813c60ff8.jpg",
    banner: "https://i.pinimg.com/1200x/d5/9c/2a/d59c2afe90c9fa162dcb4d1813c60ff8.jpg",
   
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
    title: "Titanic",
    poster: "https://i.pinimg.com/736x/a4/a7/1f/a4a71f56078983cdf61558546ba38536.jpg",
    banner: "https://i.pinimg.com/736x/a4/a7/1f/a4a71f56078983cdf61558546ba38536.jpg",
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
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    poster: "https://i.pinimg.com/736x/ba/72/ae/ba72ae522dd15dbb939dcc1a7886594c.jpg",
    banner: "https://i.pinimg.com/736x/ba/72/ae/ba72ae522dd15dbb939dcc1a7886594c.jpg",
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
    title: "Harry Potter and the Philosopher's Stone",
    poster: "https://i.pinimg.com/736x/dd/ec/78/ddec7859b8b3a17e93efa61834b5d748.jpg",
    banner: "https://i.pinimg.com/736x/dd/ec/78/ddec7859b8b3a17e93efa61834b5d748.jpg",
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
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    poster: "https://i.pinimg.com/736x/cb/e0/d9/cbe0d93aeaf0807a15c4e7f9028f1205.jpg",
    banner: "https://i.pinimg.com/736x/cb/e0/d9/cbe0d93aeaf0807a15c4e7f9028f1205.jpg",
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
    title: "Shang-Chi and the Legend of the Ten Rings",
    poster: "https://i.pinimg.com/736x/f8/84/c6/f884c6a401f574ce5e3dcee2e8ae5b99.jpg",
    banner: "https://i.pinimg.com/736x/f8/84/c6/f884c6a401f574ce5e3dcee2e8ae5b99.jpg",
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
    title: "The Bad Guys",
    poster: "https://i.pinimg.com/1200x/58/c4/30/58c43096916cebd2260e6a62f1ef91ad.jpg",
    banner: "https://i.pinimg.com/1200x/58/c4/30/58c43096916cebd2260e6a62f1ef91ad.jpg",
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
    title: "Doctor Strange",
    poster: "https://i.pinimg.com/736x/51/9f/00/519f004a940327b4db5ac285506449f2.jpg",
    banner: "https://i.pinimg.com/736x/51/9f/00/519f004a940327b4db5ac285506449f2.jpg",
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
    title: "Masha and the Bear",
    poster: "https://i.pinimg.com/736x/b3/e7/51/b3e751685d5e6244b11f8d7f0ed889a6.jpg",
    banner: "https://i.pinimg.com/736x/b3/e7/51/b3e751685d5e6244b11f8d7f0ed889a6.jpg",
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
    title: "Zootopia",
    poster: "https://i.pinimg.com/1200x/7e/2b/ab/7e2bab3a7402c053648f2a3ecb85991d.jpg",
    banner: "https://i.pinimg.com/1200x/7e/2b/ab/7e2bab3a7402c053648f2a3ecb85991d.jpg",
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
    title: "Madagascar 4",
    poster: "https://i.pinimg.com/1200x/c7/45/e6/c745e669dfa7fac84af97ae79014fb19.jpg",
    banner: "https://i.pinimg.com/1200x/c7/45/e6/c745e669dfa7fac84af97ae79014fb19.jpg",
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
  },

  {
    id: 13,
    title: "Kung Fu Panda 3",
    poster: "https://i.pinimg.com/736x/ca/4e/d5/ca4ed55a6e02e3969f692d1eb954af89.jpg",
    banner: "https://i.pinimg.com/736x/ca/4e/d5/ca4ed55a6e02e3969f692d1eb954af89.jpg",
    genre: "Adventure",
    duration: "1h 41m",
    rating: "6.8",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-04-04",
    status: "now-showing",
    director: "Jared Hess",
    cast: ["Jason Momoa", "Jack Black"],
    description:
      "Four unlikely misfits enter a blocky world of imagination and must master it to find their way home."
  },

  {
    id: 14,
    title: "Ne Zha: The Journey to the World Games",
    poster: "https://i.pinimg.com/736x/1a/db/c1/1adbc1ca1d1b377dd0f4bf24e454b515.jpg",
    banner: "https://i.pinimg.com/736x/1a/db/c1/1adbc1ca1d1b377dd0f4bf24e454b515.jpg",
    genre: "Horror",
    duration: "2h 17m",
    rating: "8.2",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-04-18",
    status: "now-showing",
    director: "Ryan Coogler",
    cast: ["Michael B. Jordan", "Hailee Steinfeld"],
    description:
      "Twin brothers return to their hometown hoping for a fresh start, only to uncover a far darker evil."
  },

  {
    id: 15,
    title: "Jungle Cruise",
    poster: "https://i.pinimg.com/736x/c8/67/0f/c8670fbaaf891da83d46158bf1ca6f20.jpg",
    banner: "https://i.pinimg.com/736x/c8/67/0f/c8670fbaaf891da83d46158bf1ca6f20.jpg",
    genre: "Horror",
    duration: "1h 50m",
    rating: "7.1",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-05-16",
    status: "now-showing",
    director: "Zach Lipovsky & Adam Stein",
    cast: ["Kaitlyn Santa Juana", "Teo Briones"],
    description:
      "A college student haunted by a recurring vision races to save her family from a deadly inherited fate."
  },

  {
    id: 16,
    title: "The Jungle Adventure",
    poster: "https://i.pinimg.com/1200x/f2/ee/05/f2ee0597caf4ff5ce012acf3f6afb4a2.jpg",
    banner: "https://i.pinimg.com/1200x/f2/ee/05/f2ee0597caf4ff5ce012acf3f6afb4a2.jpg",
    genre: "Drama",
    duration: "1h 34m",
    rating: "7.0",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-05-30",
    status: "now-showing",
    director: "Jonathan Entwistle",
    cast: ["Ben Wang", "Jackie Chan"],
    description:
      "A gifted young fighter finds guidance from two legendary mentors while rebuilding his life in New York."
  },

  {
    id: 17,
    title: "Jackie Chan Adventure",
    poster: "https://i.pinimg.com/736x/1f/68/58/1f68580fd617baca3dbe5141e1c81fb3.jpg",
    banner: "https://i.pinimg.com/736x/1f/68/58/1f68580fd617baca3dbe5141e1c81fb3.jpg",
    genre: "Animation",
    duration: "1h 44m",
    rating: "7.5",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-08-01",
    status: "now-showing",
    director: "Pierre Perifel",
    cast: ["Sam Rockwell", "Awkwafina"],
    description:
      "The reformed Bad Guys are pulled into one last high-stakes job by a new crew of clever criminals."
  },

  {
    id: 18,
    title: "Morbius 2",
    poster: "https://i.pinimg.com/1200x/c6/1c/aa/c61caa2feec1bf226fa8a8ec025daadd.jpg",
    banner: "https://i.pinimg.com/1200x/c6/1c/aa/c61caa2feec1bf226fa8a8ec025daadd.jpg",
    genre: "Comedy",
    duration: "1h 51m",
    rating: "7.2",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-08-08",
    status: "coming-soon",
    director: "Nisha Ganatra",
    cast: ["Jamie Lee Curtis", "Lindsay Lohan"],
    description:
      "Years after their first body swap, Tess and Anna face a new, multigenerational identity crisis."
  },

  {
    id: 19,
    title: "The Mummy",
    poster: "https://i.pinimg.com/736x/b3/c0/31/b3c031d9cfd73066bef03737012b9419.jpg",
    banner: "https://i.pinimg.com/736x/b3/c0/31/b3c031d9cfd73066bef03737012b9419.jpg",
    genre: "Horror",
    duration: "2h 05m",
    rating: "7.6",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-09-05",
    status: "coming-soon",
    director: "Michael Chaves",
    cast: ["Vera Farmiga", "Patrick Wilson"],
    description:
      "Ed and Lorraine Warren confront one final terrifying case that puts their faith and family to the test."
  },

  {
    id: 20,
    title: "TRON: Ares",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    genre: "Sci-Fi",
    duration: "2h 00m",
    rating: "7.4",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-10-10",
    status: "coming-soon",
    director: "Joachim Rønning",
    cast: ["Jared Leto", "Greta Lee"],
    description:
      "A highly advanced program escapes the digital world and enters humanity's reality on a dangerous mission."
  },

  {
    id: 21,
    title: "Wicked: For Good",
    poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    genre: "Fantasy",
    duration: "2h 18m",
    rating: "7.8",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-11-21",
    status: "coming-soon",
    director: "Jon M. Chu",
    cast: ["Cynthia Erivo", "Ariana Grande"],
    description:
      "Elphaba and Glinda must face the consequences of their choices as the future of Oz is decided."
  },

  {
    id: 22,
    title: "Zootopia 2",
    poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    genre: "Animation",
    duration: "1h 48m",
    rating: "7.9",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-11-26",
    status: "coming-soon",
    director: "Jared Bush",
    cast: ["Ginnifer Goodwin", "Jason Bateman"],
    description:
      "Detectives Judy Hopps and Nick Wilde take on a twisting new case that challenges their partnership."
  },

  {
    id: 23,
    title: "Five Nights at Freddy's 2",
    poster: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80",
    genre: "Horror",
    duration: "1h 58m",
    rating: "7.0",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-12-05",
    status: "coming-soon",
    director: "Emma Tammi",
    cast: ["Josh Hutcherson", "Elizabeth Lail"],
    description:
      "The nightmare returns when new secrets emerge from the abandoned pizzeria and its haunted machines."
  },

  {
    id: 24,
    title: "The Housemaid",
    poster: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    genre: "Thriller",
    duration: "1h 55m",
    rating: "7.3",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-12-25",
    status: "coming-soon",
    director: "Paul Feig",
    cast: ["Sydney Sweeney", "Amanda Seyfried"],
    description:
      "A young woman accepts a live-in job with a wealthy family, but the beautiful home hides dangerous secrets."
  },

  {
    id: 25,
    title: "Deadpool & Wolverine",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80",
    genre: "Action",
    duration: "2h 08m",
    rating: "8.1",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-01-10",
    status: "now-showing",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman"],
    description:
      "A listless Wade Wilson toils away in civilian life with his days as the mercenary behind him, until a threat forces him back into action."
  },

  {
    id: 26,
    title: "Dune: Part Two",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    genre: "Sci-Fi",
    duration: "2h 46m",
    rating: "8.6",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-01-15",
    status: "now-showing",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },

  {
    id: 27,
    title: "Inside Out 2",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    genre: "Animation",
    duration: "1h 36m",
    rating: "7.8",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-01-20",
    status: "now-showing",
    director: "Kelsey Mann",
    cast: ["Amy Poehler", "Maya Hawke"],
    description:
      "Follow Riley in her teenage years as new Emotions arrive at Headquarters, turning her world upside down."
  },

  {
    id: 28,
    title: "Gladiator II",
    poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80",
    genre: "Action",
    duration: "2h 28m",
    rating: "7.7",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-02-01",
    status: "now-showing",
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Pedro Pascal", "Denzel Washington"],
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius must enter the Colosseum to seek justice."
  },

  {
    id: 29,
    title: "Oppenheimer: 70mm Special",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
    genre: "Drama",
    duration: "3h 00m",
    rating: "8.9",
    language: "English",
    ageRating: "R",
    releaseDate: "2025-02-10",
    status: "now-showing",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },

  {
    id: 30,
    title: "Spider-Man: Beyond the Spider-Verse",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=700&q=80",
    banner: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80",
    genre: "Animation",
    duration: "2h 15m",
    rating: "8.8",
    language: "English",
    ageRating: "PG",
    releaseDate: "2026-03-27",
    status: "coming-soon",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld"],
    description:
      "Miles Morales journeys across the multiverse alongside Gwen Stacy to rewrite his own destiny and save every Spider-Hero."
  }
];

export default movies;
