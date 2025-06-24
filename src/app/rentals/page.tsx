type Rental = {
  id: number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
};

const rentals: Rental[] = [
  {
    id: 1,
    title: "Modern Studio in Cebu IT Park",
    location: "Lahug, Cebu City",
    price: "₱18,000/month",
    imageUrl: "https://source.unsplash.com/featured/?apartment", // Replace with your own
  },
  {
    id: 2,
    title: "Cozy Apartment near Ayala",
    location: "Mabolo, Cebu City",
    price: "₱15,000/month",
    imageUrl: "https://source.unsplash.com/featured/?condo",
  },
  {
    id: 3,
    title: "Furnished Condo with Sea View",
    location: "SRP, Cebu",
    price: "₱25,000/month",
    imageUrl: "https://source.unsplash.com/featured/?sea,condo",
  },
];

export default function RentalsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Available Rentals</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={rental.imageUrl}
              alt={rental.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">{rental.title}</h2>
              <p className="text-sm text-gray-500">{rental.location}</p>
              <p className="text-sm font-medium text-blue-600">{rental.price}</p>
              <a
                href="/contact"
                className="inline-block mt-2 text-sm text-blue-600 hover:underline"
              >
                Inquire Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
