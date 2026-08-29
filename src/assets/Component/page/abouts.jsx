import {
  Film,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: Film,
      title: "Premium Cinema",
      description:
        "Enjoy movies with modern screens and immersive sound."
    },
    {
      icon: Sparkles,
      title: "Great Experience",
      description:
        "A comfortable environment designed for movie lovers."
    },
    {
      icon: Users,
      title: "For Everyone",
      description:
        "Perfect entertainment for friends, families and couples."
    },
    {
      icon: Heart,
      title: "Made for Movie Lovers",
      description:
        "We are passionate about creating memorable movie experiences."
    },
  ];

  return (
    <div>
      <section className="border-b border-white/10 bg-zinc-950 py-20">
        <div className="container-cinema text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cinema-500">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Welcome to Legend Cinema
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            A modern cinema experience where great movies,
            comfortable spaces and unforgettable moments
            come together.
          </p>
        </div>
      </section>

      <section className="container-cinema py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-zinc-900 p-7"
              >
                <Icon
                  size={32}
                  className="text-cinema-500"
                />

                <h2 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;