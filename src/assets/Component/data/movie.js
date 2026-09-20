const movies = [
  {
    id: 1,
    title: "Jumanji: Welcome to the Jungle",
    poster: "https://i.pinimg.com/1200x/ea/93/ab/ea93aba8a40994bca40c5bf45c1ec0be.jpg",
    banner: "https://i.pinimg.com/1200x/ea/93/ab/ea93aba8a40994bca40c5bf45c1ec0be.jpg",
    genre: "Adventure",
    duration: "1h 59m",
    rating: "7.0",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-12-18",
    status: "now-showing",
    director: "Jake Kasdan",
    cast: ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Karen Gillan"],
    description:
      "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game."
  },

  {
    id: 2,
    title: "Titanic",
    poster: "https://i.pinimg.com/1200x/d5/9c/2a/d59c2afe90c9fa162dcb4d1813c60ff8.jpg",
    banner: "https://i.pinimg.com/1200x/d5/9c/2a/d59c2afe90c9fa162dcb4d1813c60ff8.jpg",
    genre: "Romance",
    duration: "3h 14m",
    rating: "7.9",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-02-14",
    status: "now-showing",
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },

  {
    id: 3,
    title: "Avatar",
    poster: "https://i.pinimg.com/736x/a4/a7/1f/a4a71f56078983cdf61558546ba38536.jpg",
    banner: "https://i.pinimg.com/736x/a4/a7/1f/a4a71f56078983cdf61558546ba38536.jpg",
    genre: "Sci-Fi",
    duration: "2h 42m",
    rating: "7.9",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-07-11",
    status: "now-showing",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  },

  {
    id: 4,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    poster: "https://i.pinimg.com/736x/ba/72/ae/ba72ae522dd15dbb939dcc1a7886594c.jpg",
    banner: "https://i.pinimg.com/736x/ba/72/ae/ba72ae522dd15dbb939dcc1a7886594c.jpg",
    genre: "Action",
    duration: "2h 23m",
    rating: "8.1",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-07-02",
    status: "now-showing",
    director: "Gore Verbinski",
    cast: ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom", "Keira Knightley"],
    description:
      "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, Elizabeth Swann, from cursed undead pirates."
  },

  {
    id: 5,
    title: "Harry Potter and the Philosopher's Stone",
    poster: "https://i.pinimg.com/736x/dd/ec/78/ddec7859b8b3a17e93efa61834b5d748.jpg",
    banner: "https://i.pinimg.com/736x/dd/ec/78/ddec7859b8b3a17e93efa61834b5d748.jpg",
    genre: "Fantasy",
    duration: "2h 32m",
    rating: "7.6",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-06-27",
    status: "now-showing",
    director: "Chris Columbus",
    cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    description:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
  },

  {
    id: 6,
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    poster: "https://i.pinimg.com/736x/cb/e0/d9/cbe0d93aeaf0807a15c4e7f9028f1205.jpg",
    banner: "https://i.pinimg.com/736x/cb/e0/d9/cbe0d93aeaf0807a15c4e7f9028f1205.jpg",
    genre: "Fantasy",
    duration: "2h 22m",
    rating: "6.2",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-05-23",
    status: "now-showing",
    director: "David Yates",
    cast: ["Eddie Redmayne", "Jude Law", "Mads Mikkelsen"],
    description:
      "Professor Albus Dumbledore entrusts Newt Scamander to lead an intrepid team of wizards and witches to stop the dark wizard Gellert Grindelwald."
  },

  {
    id: 7,
    title: "Shang-Chi and the Legend of the Ten Rings",
    poster: "https://i.pinimg.com/736x/f8/84/c6/f884c6a401f574ce5e3dcee2e8ae5b99.jpg",
    banner: "https://i.pinimg.com/736x/f8/84/c6/f884c6a401f574ce5e3dcee2e8ae5b99.jpg",
    genre: "Action",
    duration: "2h 12m",
    rating: "7.4",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-05-23",
    status: "now-showing",
    director: "Destin Daniel Cretton",
    cast: ["Simu Liu", "Awkwafina", "Tony Leung"],
    description:
      "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."
  },

  {
    id: 8,
    title: "Doctor Strange in the Multiverse of Madness",
    poster: "https://i.pinimg.com/1200x/58/c4/30/58c43096916cebd2260e6a62f1ef91ad.jpg",
    banner: "https://i.pinimg.com/1200x/58/c4/30/58c43096916cebd2260e6a62f1ef91ad.jpg",
    genre: "Fantasy",
    duration: "2h 06m",
    rating: "6.9",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-06-13",
    status: "coming-soon",
    director: "Sam Raimi",
    cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
    description:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses to battle multiple threats."
  },

  {
    id: 9,
    title: "The Bad Guys 2",
    poster: "https://i.pinimg.com/736x/51/9f/00/519f004a940327b4db5ac285506449f2.jpg",
    banner: "https://i.pinimg.com/736x/51/9f/00/519f004a940327b4db5ac285506449f2.jpg",
    genre: "Animation",
    duration: "1h 44m",
    rating: "7.5",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-04-30",
    status: "coming-soon",
    director: "Pierre Perifel",
    cast: ["Sam Rockwell", "Marc Maron", "Awkwafina"],
    description:
      "The reformed Bad Guys are pulled out of retirement by a cunning new squad of criminals for one last high-stakes caper."
  },

  {
    id: 10,
    title: "ZOOTOPIA",
    poster: "https://i.pinimg.com/736x/b3/e7/51/b3e751685d5e6244b11f8d7f0ed889a6.jpg",
    banner: "https://i.pinimg.com/736x/b3/e7/51/b3e751685d5e6244b11f8d7f0ed889a6.jpg",
    genre: "Animation",
    duration: "1h 48m",
    rating: "8.0",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-07-25",
    status: "coming-soon",
    director: "Byron Howard, Rich Moore",
    cast: ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
    description:
      "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
  },

  {
    id: 11,
    title: "MASHA AND THE BEAR",
    poster: "https://i.pinimg.com/1200x/7e/2b/ab/7e2bab3a7402c053648f2a3ecb85991d.jpg",
    banner: "https://i.pinimg.com/1200x/7e/2b/ab/7e2bab3a7402c053648f2a3ecb85991d.jpg",
    genre: "Animation",
    duration: "1h 15m",
    rating: "7.2",
    language: "English",
    ageRating: "G",
    releaseDate: "2025-06-20",
    status: "coming-soon",
    director: "Oleg Kuzovkov",
    cast: ["Alina Kukushkina", "Boris Kutnevich"],
    description:
      "Heartwarming forest adventures of a kind-hearted retired circus Bear and an energetic, mischievous little girl named Masha."
  },

  {
    id: 12,
    title: "Madagascar 4",
    poster: "https://i.pinimg.com/1200x/c7/45/e6/c745e669dfa7fac84af97ae79014fb19.jpg",
    banner: "https://i.pinimg.com/1200x/c7/45/e6/c745e669dfa7fac84af97ae79014fb19.jpg",
    genre: "Animation",
    duration: "1h 35m",
    rating: "7.0",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-06-06",
    status: "coming-soon",
    director: "Eric Darnell, Tom McGrath",
    cast: ["Ben Stiller", "Chris Rock", "David Schwimmer", "Jada Pinkett Smith"],
    description:
      "Alex the lion and his beloved zoo friends embark on another wild and hilarious globe-trotting adventure."
  },

  {
    id: 13,
    title: "Kung Fu Panda 3",
    poster: "https://i.pinimg.com/736x/ca/4e/d5/ca4ed55a6e02e3969f692d1eb954af89.jpg",
    banner: "https://i.pinimg.com/736x/ca/4e/d5/ca4ed55a6e02e3969f692d1eb954af89.jpg",
    genre: "Animation",
    duration: "1h 35m",
    rating: "7.1",
    language: "English",
    ageRating: "PG",
    releaseDate: "2025-04-04",
    status: "now-showing",
    director: "Jennifer Yuh Nelson, Alessandro Carloni",
    cast: ["Jack Black", "Bryan Cranston", "Dustin Hoffman", "Angelina Jolie"],
    description:
      "Continuing his legendary adventures of awesomeness, Po must train a village of clumsy pandas to defeat the supernatural warrior Kai."
  },

  {
    id: 14,
    title: "Ne Zha: Birth of the Demon Child",
    poster: "https://i.pinimg.com/736x/1a/db/c1/1adbc1ca1d1b377dd0f4bf24e454b515.jpg",
    banner: "https://i.pinimg.com/736x/1a/db/c1/1adbc1ca1d1b377dd0f4bf24e454b515.jpg",
    genre: "Animation",
    duration: "1h 50m",
    rating: "7.4",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-04-18",
    status: "now-showing",
    director: "Jiaozi",
    cast: ["Lu Yanting", "Joseph", "Han Mo"],
    description:
      "Born with unique celestial powers, a young boy named Ne Zha must choose between good and evil in order to break a dark prophecy and save his people."
  },

  {
    id: 15,
    title: "JUNGLE CRUISE",
    poster: "https://i.pinimg.com/736x/c8/67/0f/c8670fbaaf891da83d46158bf1ca6f20.jpg",
    banner: "https://i.pinimg.com/736x/c8/67/0f/c8670fbaaf891da83d46158bf1ca6f20.jpg",
    genre: "Adventure",
    duration: "2h 07m",
    rating: "6.6",
    language: "English",
    ageRating: "PG-13",
    releaseDate: "2025-05-16",
    status: "now-showing",
    director: "Jaume Collet-Serra",
    cast: ["Dwayne Johnson", "Emily Blunt", "Edgar Ramírez"],
    description:
      "Wisecracking skipper Frank Wolff and intrepid researcher Dr. Lily Houghton journey down the Amazon in search of an ancient tree that holds the power to heal."
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
    genre: "Adventure",
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
    title: "JUMANJI: THE NEXT LEVEL",
    poster: "https://i.pinimg.com/736x/d5/41/26/d541269feb4ec440e6e7299e3f53d43e.jpg",
    banner: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    genre: "adventure",
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
    title: "Wicked: JUNGLE CRUISE2",
    poster: "https://i.pinimg.com/1200x/7a/e3/13/7ae31317828fef6d96a67f88699450d9.jpg",
    banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    genre: "Adventure",
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
    title: "AVATAR3",
    poster: "https://i.pinimg.com/736x/a4/11/de/a411deea48ea7ed7eb437fad17dd7439.jpg",
    banner: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    genre: "ACTION",
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
    title: "After You 2",
    poster: "https://i.pinimg.com/1200x/51/8d/1a/518d1a8c0e71ecfa92440f7cbd5ee632.jpg",
    banner: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80",
    genre: "Romance",
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
    title: "Accidence in Love",
    poster: "https://i.pinimg.com/736x/f4/f9/03/f4f903852a9d4dc0246eaaeabb9d36b4.jpg",
    banner: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    genre: "Romance",
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
    title: "ATLANTIS: THE LOST EMPIRE",
    poster: "https://i.pinimg.com/1200x/74/27/94/7427949934088901dd206d10adcf8114.jpg",
    banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=80",
    genre: "Fantasy",
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
    title: "BEN10",
    poster: "https://i.pinimg.com/1200x/b6/26/94/b626945f9a13cf6fcfd917777a103654.jpg",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    genre: "Fantasy",
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
    title: "THE NUN",
    poster: "https://i.pinimg.com/736x/92/2a/70/922a70e6a129644df8731ac3840789a9.jpg",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    genre: "Horror",
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
    title: "DEADOUT",
    poster: "https://i.pinimg.com/736x/ad/2d/39/ad2d39b3fe13390181f4d851875a0dd3.jpg",
    banner: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80",
    genre: "Horror",
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
    title: "THE MONSTER HUNTER2",
    poster: "https://i.pinimg.com/736x/ef/8b/0d/ef8b0dfde92391ae7e585fb43dfa4c2e.jpg",
    banner: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
    genre: "Horror",
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
    title: "TRAIN TO BUSAN2",
    poster: "https://i.pinimg.com/1200x/93/84/b4/9384b4bc8ecb9dff410adeef9dc0e28e.jpg",
    banner: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80",
    genre: "Horror",
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
  },
  {
    id: 31,
    title: "The Dear of You",
    poster: "https://i.pinimg.com/1200x/62/65/d6/6265d66ee93d027cd8279b8628ffbc3c.jpg",
    banner: "https://i.pinimg.com/1200x/62/65/d6/6265d66ee93d027cd8279b8628ffbc3c.jpg",
    genre: "Drama",
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
 