import { CheckCircle, X } from "lucide-react";

function Toast({
  message,
  onClose
}) {
  if (!message) return null;

  return (
    <div className="fixed right-4 top-24 z-[110] flex max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 shadow-2xl">
      <CheckCircle
        size={20}
        className="text-green-500"
      />

      <p className="flex-1 text-sm">
        {message}
      </p>

      <button onClick={onClose}>
        <X
          size={17}
          className="text-gray-400"
        />
      </button>
    </div>
  );
}

export default Toast;