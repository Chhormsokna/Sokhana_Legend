import { X } from "lucide-react";

function toEmbedUrl(url) {
  if (!url) return "";

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  );

  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : url;
}

function TrailerModal({
  isOpen,
  trailerUrl,
  title,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close trailer"
          className="absolute -top-11 right-0 rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
          <iframe
            src={toEmbedUrl(trailerUrl)}
            title={title ? `${title} Trailer` : "Trailer"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default TrailerModal;
