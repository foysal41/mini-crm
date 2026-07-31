export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900">About Mini CRM</h1>

        <p className="mt-6 leading-8 text-gray-600">
          Mini CRM is a simple Customer Relationship Management system designed
          to help businesses organize daily tasks and improve team productivity.
          It provides secure authentication, task management, search, and
          pagination through a clean and responsive dashboard.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Task Management</h3>
            <p className="mt-2 text-sm text-gray-600">
              Create, update, assign, and track daily tasks.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Secure Access</h3>
            <p className="mt-2 text-sm text-gray-600">
              Role-based authentication for administrators and staff members.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Responsive UI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Modern dashboard that works seamlessly on desktop and mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}