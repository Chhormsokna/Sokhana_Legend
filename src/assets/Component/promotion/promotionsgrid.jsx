import PromotionCard from "./promotionscart";

function PromotionGrid({ promotions }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {promotions.map((promotion) => (
        <PromotionCard
          key={promotion.id}
          promotion={promotion}
        />
      ))}
    </div>
  );
}

export default PromotionGrid;