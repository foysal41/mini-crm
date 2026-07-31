const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>

        <p className="mt-4 text-gray-600">
          Have questions or need assistance? Feel free to contact us. Were
          here to help.
        </p>

        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-600">mdfoysal.mf33@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-gray-600">+880 1701035894</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">📍 Address</h3>
            <p className="text-gray-600">
              Khulna, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;