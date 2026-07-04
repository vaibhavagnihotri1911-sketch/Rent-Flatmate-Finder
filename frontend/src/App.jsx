function App() {
  const listings = [
    {
      location: "Noida",
      rent: 12000,
      furnished: "Yes",
      score: 95
    },
    {
      location: "Delhi",
      rent: 10000,
      furnished: "No",
      score: 80
    },
    {
      location: "Kanpur",
      rent: 8000,
      furnished: "Yes",
      score: 70
    }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>🏠 Rent & Flatmate Finder</h1>

      <p>
        Find rooms and compatible flatmates based on
        location and budget.
      </p>

      {listings.map((room, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            width: "450px"
          }}
        >
          <h2>{room.location}</h2>

          <p>Rent: ₹{room.rent}</p>

          <p>Furnished: {room.furnished}</p>

          <p>
            Compatibility Score:
            <b> {room.score}/100</b>
          </p>

          <button>I'm Interested</button>
        </div>
      ))}
    </div>
  );
}

export default App;