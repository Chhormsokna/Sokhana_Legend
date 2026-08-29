import FoodCard from "./foodcard";

function FoodGrid({ products, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <FoodCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default FoodGrid;