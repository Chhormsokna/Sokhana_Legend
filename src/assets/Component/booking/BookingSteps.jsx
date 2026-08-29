import { Check } from "lucide-react";

const DEFAULT_STEPS = ["Showtime", "Seats", "Payment"];

function BookingSteps({
  steps = DEFAULT_STEPS,
  currentStep = 0,
}) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => {
        const isDone = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <li
            key={step}
            className="flex items-center gap-2"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                isDone
                  ? "bg-cinema-600 text-white"
                  : isCurrent
                    ? "border-2 border-cinema-500 text-cinema-500"
                    : "border border-white/10 text-gray-500"
              }`}
            >
              {isDone ? <Check size={15} /> : index + 1}
            </span>

            <span
              className={`text-sm font-semibold ${
                isCurrent ? "text-white" : "text-gray-500"
              }`}
            >
              {step}
            </span>

            {index < steps.length - 1 && (
              <span className="mx-2 hidden h-px w-10 bg-white/10 sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default BookingSteps;
