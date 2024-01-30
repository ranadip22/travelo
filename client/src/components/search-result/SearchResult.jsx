import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function SearchResult() {
    const { searchResults } = useParams();
    useEffect(() => { }, [searchResults]);
    return (
        <>
            <Navbar />
            <div className="search-results">
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((p) => (
                        <div key={p.id} className="package-card">
                            {/* Render package details, e.g., title, image, price, etc. */}
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    );
};

export default SearchResult