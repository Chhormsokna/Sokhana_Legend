import { useState } from "react";
import { useNavigate } from "react-router-dom";

import food from "../data/foods";
import { addOrder } from "../data/orders";

import FoodGrid from "../food/foodgrid";
import Cart from "../food/cart";

import { useCart } from "../context/cartcontext";

function Food() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  const categories = [
    ...new Set(
      food.map((item) => item.category)
    ),
  ];

  const filteredFood = food.filter(
    (item) =>
      !category ||
      item.category === category
  );

  const handleCheckout = () => {
    if (checkingOut || cart.length === 0) {
      return;
    }

    setCheckingOut(true);

    const orderRecord = {
      id: Date.now(),
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        category: item.category,
      })),
      total: totalPrice,
      status: "completed",
      createdAt: new Date().toISOString(),
    };

    addOrder(orderRecord);

    setTimeout(() => {
      clearCart();
      setCheckingOut(false);
      navigate("/");
    }, 600);
  };

  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Cinema Snacks
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Food & Drinks
        </h1>

        <p className="mt-3 text-gray-400">
          Make your movie experience even better.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory("")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            !category
              ? "bg-cinema-600"
              : "bg-white/10"
          }`}
        >
          All
        </button>

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              category === item
                ? "bg-cinema-600"
                : "bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        <FoodGrid
          products={filteredFood}
          onAdd={addToCart}
        />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <Cart
            cart={cart}
            totalPrice={totalPrice}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
            onCheckout={handleCheckout}
            checkingOut={checkingOut}
          />
        </div>
      </div>
    </div>
  );
}

export default Food;