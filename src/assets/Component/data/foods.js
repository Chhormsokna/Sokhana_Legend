const food = [
  {
    id: 1,
    name: "Large Popcorn",
    category: "Popcorn",
    price: 5.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Popcorn_-_Studio_-_2011.jpg/330px-Popcorn_-_Studio_-_2011.jpg",
    description: "Fresh cinema popcorn."
  },

  {
    id: 2,
    name: "Caramel Popcorn",
    category: "Popcorn",
    price: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/G-H-Cretors-Caramel-Corn.jpg/330px-G-H-Cretors-Caramel-Corn.jpg",
    description: "Sweet caramel flavored popcorn."
  },

  {
    id: 3,
    name: "Coca Cola",
    category: "Drinks",
    price: 2.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/330px-Coca_Cola_Flasche_-_Original_Taste.jpg",
    description: "Cold Coca Cola."
  },

  {
    id: 4,
    name: "Sprite",
    category: "Drinks",
    price: 2.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sprite_lemon_lime_1.jpg/330px-Sprite_lemon_lime_1.jpg",
    description: "Cold refreshing Sprite."
  },

  {
    id: 5,
    name: "Nachos",
    category: "Snacks",
    price: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/330px-Nachos-cheese.jpg",
    description: "Crispy nachos with cheese."
  },

  {
    id: 6,
    name: "Hot Dog",
    category: "Snacks",
    price: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/330px-Hot_dog_with_mustard.png",
    description: "Classic cinema hot dog."
  },

  {
    id: 7,
    name: "Popcorn + 2 Drinks",
    category: "Combo",
    price: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tumbler_of_cola_with_ice.jpg/330px-Tumbler_of_cola_with_ice.jpg",
    description: "Large popcorn with two drinks."
  },

  {
    id: 8,
    name: "Family Combo",
    category: "Combo",
    price: 15,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hamburger_%2812164386105%29.jpg/330px-Hamburger_%2812164386105%29.jpg",
    description: "Large popcorn, snacks and four drinks."
  },

  {
    id: 9,
    name: "Cheese Popcorn",
    category: "Popcorn",
    price: 6,
    image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&w=700&q=80",
    description: "Buttery popcorn tossed in rich cheese seasoning."
  },

  {
    id: 10,
    name: "Sweet & Salty Popcorn",
    category: "Popcorn",
    price: 6.25,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=700&q=80",
    description: "The perfect mix of crunchy, sweet, and salty popcorn."
  },

  {
    id: 11,
    name: "Chicken Tenders",
    category: "Snacks",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
    description: "Crispy chicken tenders served with a dip."
  },

  {
    id: 12,
    name: "Loaded Fries",
    category: "Snacks",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    description: "Golden fries topped with cheese sauce and herbs."
  },

  {
    id: 13,
    name: "Mini Pizza",
    category: "Snacks",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    description: "A warm personal cheese pizza for movie time."
  },

  {
    id: 14,
    name: "Mozzarella Sticks",
    category: "Snacks",
    price: 6,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80",
    description: "Six crispy mozzarella sticks with marinara dip."
  },

  {
    id: 15,
    name: "Iced Lemon Tea",
    category: "Drinks",
    price: 3,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    description: "Fresh-brewed lemon tea served over ice."
  },

  {
    id: 16,
    name: "Mineral Water",
    category: "Drinks",
    price: 2,
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=700&q=80",
    description: "Chilled still water to keep you refreshed."
  },

  {
    id: 17,
    name: "Iced Coffee",
    category: "Drinks",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
    description: "Smooth cold coffee with a creamy finish."
  },

  {
    id: 18,
    name: "Chocolate Brownie",
    category: "Sweets",
    price: 4,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    description: "A rich, fudgy brownie with chocolate chunks."
  },

  {
    id: 19,
    name: "Churros with Chocolate",
    category: "Sweets",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1624371414361-e670edf6a1e8?auto=format&fit=crop&w=700&q=80",
    description: "Warm cinnamon churros with chocolate dipping sauce."
  },

  {
    id: 20,
    name: "Movie Date Combo",
    category: "Combo",
    price: 13.5,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
    description: "Medium popcorn, two drinks, and a shared sweet treat."
  },

  {
    id: 21,
    name: "Snack Feast Combo",
    category: "Combo",
    price: 18,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    description: "Popcorn, hot dogs, nachos, and two drinks to share."
  },

  {
    id: 22,
    name: "Kids Movie Box",
    category: "Combo",
    price: 9,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80",
    description: "Small popcorn, fruit drink, and a chocolate brownie."
  }
];

export default food;
