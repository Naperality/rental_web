export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 text-base mb-6">
        Got a question or want to inquire about a rental? Fill out the form below and we’ll get back to you shortly.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
