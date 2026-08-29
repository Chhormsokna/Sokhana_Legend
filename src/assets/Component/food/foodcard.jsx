import { Plus } from "lucide-react";
import Button from "../common/button";

function FoodCard({ product, onAdd }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-cinema-600/40 hover:shadow-xl hover:shadow-cinema-900/20">
      {/* Image container with category badge */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src =
              "https://placehold.co/500x500/18181b/ffffff?text=Food";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />

        {product.category && (
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-2.5 py-0.5 text-[11px] font-semibold text-gray-300 backdrop-blur-md">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-cinema-400 transition-colors">
              {product.name}
            </h3>

            <span className="shrink-0 text-base font-extrabold text-cinema-500">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
            {product.description}
          </p>
        </div>

        {/* Button pinned at bottom */}
        <Button
          onClick={() => onAdd(product)}
          className="mt-4 w-full justify-center text-xs sm:text-sm font-semibold"
        >
          <Plus size={16} className="mr-1.5" />
          Add to Order
        </Button>
      </div>
    </article>
  );
}

export default FoodCard;