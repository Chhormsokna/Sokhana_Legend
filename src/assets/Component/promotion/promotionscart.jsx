function PromotionCard({ promotion }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src =
              "https://placehold.co/800x500/18181b/ffffff?text=Promotion";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-lg bg-cinema-600 px-3 py-1.5 text-xs font-bold sm:text-sm">
          {promotion.discount}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="line-clamp-1 text-base font-bold sm:text-lg">
          {promotion.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
          {promotion.description}
        </p>

        <p className="mt-4 text-xs text-gray-500">
          Valid: {promotion.validDate}
        </p>

        <button className="mt-5 w-full rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/10">
          View Promotion
        </button>
      </div>
    </article>
  );
}

export default PromotionCard;