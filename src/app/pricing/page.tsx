const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      features: [
        "Task Management",
        "Up to 5 Users",
        "Search",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "$19",
      popular: true,
      features: [
        "Unlimited Tasks",
        "Up to 20 Users",
        "Priority Support",
        "Advanced Dashboard",
      ],
    },
    {
      name: "Enterprise",
      price: "$39",
      features: [
        "Unlimited Users",
        "Role Management",
        "Analytics",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Pricing Plans
          </h1>

          <p className="mt-4 text-gray-600">
            Choose the perfect plan for your team and business needs.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.popular ? "border-blue-600" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}

              <h2 className="mt-4 text-2xl font-bold">{plan.name}</h2>

              <div className="mt-4">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;