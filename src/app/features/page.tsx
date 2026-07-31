const features = [
  {
    title: "Task Management",
    description:
      "Create, assign, update, and manage daily tasks with ease.",
  },
  {
    title: "Secure Authentication",
    description:
      "User registration, login, logout, and role-based access control.",
  },
  {
    title: "Smart Search",
    description:
      "Quickly find tasks using the built-in search functionality.",
  },
  {
    title: "Pagination",
    description:
      "Browse large task lists efficiently with paginated tables.",
  },
  {
    title: "Responsive Dashboard",
    description:
      "Modern dashboard optimized for desktop, tablet, and mobile devices.",
  },
  {
    title: "REST API",
    description:
      "Backend APIs for seamless task management and data handling.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Features
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Mini CRM provides essential tools to help teams organize tasks,
            improve collaboration, and increase productivity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                🚀
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;