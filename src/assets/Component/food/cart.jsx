import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
} from "lucide-react";

function Cart({
  cart,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  onCheckout,
  checkingOut = false,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900 p-5">
      <div className="mb-5 flex items-center gap-2">
        <ShoppingCart size={20} />

        <h2 className="font-bold">
          Your Order
        </h2>
      </div>

      {cart.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b border-white/10 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-cinema-500">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="rounded-md bg-white/10 p-1"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-5 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="rounded-md bg-white/10 p-1"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-semibold">
              Total
            </span>

            <span className="text-xl font-bold text-cinema-500">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={onCheckout}
            disabled={checkingOut}
            className="mt-5 w-full rounded-lg bg-cinema-600 py-3 font-semibold transition hover:bg-cinema-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {checkingOut
              ? "Processing..."
              : "Checkout"}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;