import React, { useState } from 'react';
import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar'
import './SearchResult.css'

function SearchResult() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (formData) => {
        // Simulate fetching results (replace this with actual API call)
        const results = [
            { name: 'Result 1', description: 'Description 1' },
            { name: 'Result 2', description: 'Description 2' },
            { name: 'Result 3', description: 'Description 3' }
            // Add more results as needed
        ];

        setSearchResults(results);
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <Hero onSearch={handleSearch} />
                <SearchResult results={searchResults} />
            </div>
        </>
    );
};

// function SearchResult(results) {
//     return (
//         <>
//             <Navbar />
//             <div className="search-result">
//                 <h1>Search Results</h1>
//                 <div id="search-results">
//                     {results.map((result, index) => (
//                         <div key={index}>
//                             <h3>{result.name}</h3>
//                             <p>{result.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

export default SearchResult