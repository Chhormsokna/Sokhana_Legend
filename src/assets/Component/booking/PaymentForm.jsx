import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { formatPrice } from "../utils/formatesprice";

function PaymentForm({
  total = 0,
  processing = false,
  onConfirm,
}) {
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onConfirm) {
      onConfirm(card);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-cinema-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-zinc-900 p-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <CreditCard
            size={19}
            className="text-cinema-500"
          />
          Payment Details
        </h2>

        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <Lock size={13} />
          Secure
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Name on Card
          </label>

          <input
            name="name"
            required
            value={card.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Card Number
          </label>

          <input
            name="number"
            required
            inputMode="numeric"
            maxLength={16}
            value={card.number}
            onChange={handleChange}
            placeholder="4242 4242 4242 4242"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Expiry
            </label>

            <input
              name="expiry"
              required
              maxLength={5}
              value={card.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              CVC
            </label>

            <input
              name="cvc"
              required
              inputMode="numeric"
              maxLength={4}
              value={card.cvc}
              onChange={handleChange}
              placeholder="123"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={processing}
        className="cinema-button mt-6 w-full disabled:opacity-50"
      >
        {processing
          ? "Processing..."
          : `Pay ${formatPrice(total)}`}
      </button>
    </form>
  );
}

export default PaymentForm;
