function EmptyState({
  title = "Nothing found",
  description = "There is nothing to display right now."
}) {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-white/5 p-5 text-3xl">
        🎬
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;