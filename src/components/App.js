import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;

//Deliverables:

// WORKS! When the app starts, I can see all listings.
  // ListingsContainer and ListingCard
    //useEffect- fetch, with dependencies as []

// WORKS! I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
    //will useState to toggle between favorite and unfavorite

// WORKS! I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
    // fetch, method: "DELETE"

// I can search for listings by their name.
    //useState to change display based on filter