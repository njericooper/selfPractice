import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
    const [breeds, setBreeds] = useState([]);

    return( 
        <div className="search-params">
            <form >
                <label htmlFor="location">
                    Location
                    <input 
                    id ="location" 
                    value={location}
                    placeholder="Location" 
                    onChange={e => setLocation (e.target.value)} 
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;
