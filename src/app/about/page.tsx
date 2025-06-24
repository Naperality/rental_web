export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About Us</h1>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-blue-600">Rentals by Napoleon</span> —
        your trusted platform for affordable and comfortable living spaces in Cebu and beyond.
        We specialize in connecting individuals and families to cozy, convenient rentals that
        feel like home.
      </p>

      <p className="text-gray-700 text-base leading-relaxed mb-4">
        Whether you're a student, working professional, or traveler, our goal is to make the
        search for housing simple, fast, and stress-free. Every listing is hand-verified,
        ensuring quality and transparency.
      </p>

      <p className="text-gray-700 text-base leading-relaxed">
        Got questions or want to list your property? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> —
        we're here to help!
      </p>
    </section>
  );
}
