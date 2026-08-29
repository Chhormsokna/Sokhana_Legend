import promotions from "../data/promotions";
import PromotionGrid from "../promotion/promotionsgrid";

function Promotions() {
  return (
    <div className="container-cinema py-12 sm:py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cinema-500">
          Save More
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">
          Promotions
        </h1>

        <p className="mt-3 text-gray-400">
          Discover our latest cinema deals and special offers.
        </p>
      </div>

      <PromotionGrid promotions={promotions} />
    </div>
  );
}

export default Promotions;