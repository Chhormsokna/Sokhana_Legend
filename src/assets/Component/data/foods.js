const food = [
  {
    id: 1,
    name: "Large Popcorn",
    category: "Popcorn",
    price: 5.5,
    image: "https://i.pinimg.com/1200x/bb/2a/9c/bb2a9c3ee8574c83902b15be1e72597e.jpg",
    description: "Fresh, warm cinema butter popcorn served in a large tub."
  },
  {
    id: 2,
    name: "Caramel Popcorn",
    category: "Popcorn",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=700&q=80",
    description: "Crunchy popcorn generously coated with sweet golden caramel."
  },
  {
    id: 3,
    name: "Coca Cola",
    category: "Drinks",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
    description: "Ice-cold classic Coca Cola with chilled fizz."
  },
  {
    id: 4,
    name: "Sting Energy Drink",
    category: "Drinks",
    price: 2.5,
    image: "https://i.pinimg.com/736x/b8/76/c0/b876c00b5425a6e319da48e7019adee0.jpg",
    description: "Cold and refreshing Sting strawberry energy drink."
  },
  {
    id: 5,
    name: "Loaded Nachos",
    category: "Snacks",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=80",
    description: "Crispy tortilla chips served with melted warm cheddar dip and jalapeños."
  },
  {
    id: 6,
    name: "Classic Hot Dog",
    category: "Snacks",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=80",
    description: "Juicy grilled cinema hot dog with ketchup and mustard."
  },
  {
    id: 7,
    name: "Popcorn + 2 Drinks Combo",
    category: "Combo",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=700&q=80",
    description: "One large tub of butter popcorn and two 22oz fountain sodas."
  },
  {
    id: 8,
    name: "Family Mega Combo",
    category: "Combo",
    price: 15.0,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=700&q=80",
    description: "Two large popcorns, hot snacks, and four drinks for the whole group."
  },
  {
    id: 9,
    name: "Cheese Popcorn",
    category: "Popcorn",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&w=700&q=80",
    description: "Buttery popcorn tossed in rich aged cheddar seasoning."
  },
  {
    id: 10,
    name: "Sweet & Salty Popcorn",
    category: "Popcorn",
    price: 6.25,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=700&q=80",
    description: "The perfect crunchy balance of caramel sweetness and sea salt."
  },
  {
    id: 11,
    name: "Chicken Tenders",
    category: "Snacks",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
    description: "Golden crispy fried chicken tenders with barbecue dipping sauce."
  },
  {
    id: 12,
    name: "Loaded Cheesy Fries",
    category: "Snacks",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    description: "Crispy golden french fries drizzled with cheddar cheese sauce."
  },
  {
    id: 13,
    name: "Mini Pizza",
    category: "Snacks",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    description: "Fresh personal stone-baked cheese and tomato pizza."
  },
  {
    id: 14,
    name: "Mozzarella Sticks",
    category: "Snacks",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80",
    description: "Six crispy crumbed mozzarella sticks with marinara dip."
  },
  {
    id: 15,
    name: "Iced Lemon Tea",
    category: "Drinks",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    description: "Fresh-brewed iced black tea infused with natural lemon juice."
  },
  {
    id: 16,
    name: "Pure Mineral Water",
    category: "Drinks",
    price: 2.0,
    image: "https://i.pinimg.com/736x/e0/42/a5/e042a500ae34898af20b607123426399.jpg",
    description: "Refreshing chilled pure bottled spring water."
  },
  {
    id: 17,
    name: "Iced Coffee",
    category: "Drinks",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
    description: "Smooth roasted espresso poured over cold milk and ice."
  },
  {
    id: 18,
    name: "Chocolate Brownie",
    category: "Sweets",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    description: "Rich, fudgy warm chocolate brownie filled with dark chocolate chips."
  },
  {
    id: 19,
    name: "Crispy Chicken Nuggets",
    category: "Snacks",
    price: 4.75,
    image: "https://i.pinimg.com/1200x/09/9f/ca/099fca4f623897c0e8fed9cd797a12bf.jpg",
    description: "Bite-sized tender crispy chicken nuggets served hot with sweet chili sauce."
  },
  {
    id: 20,
    name: "Chicken & Wedges Combo",
    category: "Combo",
    price: 13.5,
    image: "https://i.pinimg.com/736x/0c/e3/fb/0ce3fb59784923ced190ee775e295ee5.jpg",
    description: "Crispy fried chicken, seasoned potato wedges, dip, and a cold soft drink."
  },
  {
    id: 21,
    name: "Crispy Chicken Burger",
    category: "Burger",
    price: 6.5,
    image: "https://i.pinimg.com/736x/e7/c9/db/e7c9db7bdd51cc9667558b7c174a34bb.jpg",
    description: "Golden fried chicken breast fillet with crisp lettuce and mayo on a toasted bun."
  },
  {
    id: 22,
    name: "Kids Movie Box",
    category: "Combo",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80",
    description: "Small butter popcorn, fruit juice box, and chocolate cookies for kids."
  },
  {
    id: 23,
    name: "Chocolate Ice Cream Sundae",
    category: "Ice Cream",
    price: 4.5,
    image: "https://i.pinimg.com/736x/11/c2/bd/11c2bd307946852a1a764628371d369b.jpg",
    description: "Creamy chocolate ice cream drizzled with hot fudge and crunchy wafer."
  },
  {
    id: 24,
    name: "Glazed Cinema Donuts",
    category: "Sweets",
    price: 3.5,
    image: "https://i.pinimg.com/1200x/0d/eb/85/0deb856402f33b36d96148c087691849.jpg",
    description: "Freshly glazed sweet donuts with rainbow sprinkles and soft dough."
  },
  {
    id: 25,
    name: "Burger & Fries Combo Set",
    category: "Combo",
    price: 9.0,
    image: "https://i.pinimg.com/736x/5e/b8/48/5eb8485abbc5cea9c7bb863df4dfb56a.jpg",
    description: "Juicy burger served with hot golden french fries and a chilled soft drink."
  }
];

export default food;
