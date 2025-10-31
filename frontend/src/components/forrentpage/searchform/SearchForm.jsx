import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const cities = ["All Cities", "Chicago", "Los Angeles", "Miami", "New York"];

  const [areaOpen, setAreaOpen] = useState(false);
  const [areaSearch, setAreaSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const areas = [
    { name: "Albany Park", city: "Chicago" },
    { name: "Altgeld Garden", city: "Chicago" },
    { name: "Andersonville", city: "Chicago" },
    { name: "Beverly", city: "Chicago" },
    { name: "Brickell", city: "Miami" },
  ];

  const [rentOpen, setRentOpen] = useState(false);
  const [rentSearch, setRentSearch] = useState("");
  const [selectedRent, setSelectedRent] = useState("For Rent");

  const rentOptions = ["Status", "For Rent", "For Sale", "New Construction"];

  const [typeOpen, setTypeOpen] = useState(false);
  const [typeSearch, setTypeSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Type");

  const typeOptions = ["Apartment", "Loft", "Single Family Home", "Villa"];

  const [bedOpen, setBedOpen] = useState(false);
  const [selectedBed, setSelectedBed] = useState("Bedrooms");
  const bedOptions = [
    "Any",
    ...Array.from({ length: 10 }, (_, i) => `${i + 1}`),
  ];

  const [bathOpen, setBathOpen] = useState(false);
  const [selectedBath, setSelectedBath] = useState("Bathrooms");
  const bathOptions = [
    "Any",
    ...Array.from({ length: 10 }, (_, i) => `${i + 1}`),
  ];

  const [minPriceOpen, setMinPriceOpen] = useState(false);
  const [selectedMinPrice, setSelectedMinPrice] = useState("Min. Price");
  const minPriceOptions = [
    "Any",
    "$500",
    "$1000",
    "$2000",
    "$4000",
    "$1530",
    "$7500",
    "$10000",
    "$15000",
    "$20000",
    "$25000",
    "$30000",
    "$40000",
    "$50000",
    "$75000",
    "$100000",
  ];

  const [maxPriceOpen, setMaxPriceOpen] = useState(false);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("Max. Price");
  const maxPriceOptions = [
    "Any",
    "$500",
    "$1000",
    "$2000",
    "$4000",
    "$1530",
    "$7500",
    "$10000",
    "$15000",
    "$20000",
    "$25000",
    "$30000",
    "$40000",
    "$50000",
    "$75000",
    "$100000",
    "$150000",
  ];

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const handleClear = () => {
    setKeyword("");

    setSelectedCity("All Cities");
    setCitySearch("");
    setCityOpen(false);

    setSelectedArea("All Areas");
    setAreaSearch("");
    setAreaOpen(false);

    setSelectedRent("For Rent");
    setRentSearch("");
    setRentOpen(false);

    setSelectedType("Type");
    setTypeSearch("");
    setTypeOpen(false);

    setSelectedBed("Bedrooms");
    setBedOpen(false);

    setSelectedBath("Bathrooms");
    setBathOpen(false);

    setSelectedMinPrice("Min. Price");
    setMinPriceOpen(false);

    setSelectedMaxPrice("Max. Price");
    setMaxPriceOpen(false);

    setShowAdvanced(false);

    // Optionally, notify parent to clear filters
    if (onSearch) onSearch({});
  };

  const handleSearch = () => {
    const filters = {
      keyword: keyword.trim(),
      city: selectedCity !== "All Cities" ? selectedCity : "",
      area: selectedArea !== "All Areas" ? selectedArea : "",
      rentStatus: selectedRent !== "Status" ? selectedRent : "",
      type: selectedType !== "Type" ? selectedType : "",
      bedrooms: selectedBed !== "Bedrooms" ? selectedBed : "",
      bathrooms: selectedBath !== "Bathrooms" ? selectedBath : "",
      minPrice:
        selectedMinPrice !== "Min. Price" && selectedMinPrice !== "Any"
          ? selectedMinPrice
          : "",
      maxPrice:
        selectedMaxPrice !== "Max. Price" && selectedMaxPrice !== "Any"
          ? selectedMaxPrice
          : "",
    };

    if (onSearch) onSearch(filters);
  };

  return (
    <div className="container">
      <div className="property-search-container">
        <div className="my-3 mx-3">
          <div className="row main-search-row">
            <div className="w-100 mt-3">
              <div className="col-spacing">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    className="form-control custom-input w-100"
                    placeholder="Enter Keyword..."
                    style={{ fontFamily: "Dosis, sans-serif" }}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3 ">
              <div className="row justify-content-center">
  <div className="col-lg-3 col-md-4 col-6 text-center">
    <button
      className="btn mt-lg-0 mt-3 app-btn btn-outline-secondary app-btn-outline btns w-100"
      onClick={handleClear}
    >
      Clear
    </button>
  </div>
  <div className="col-lg-3 col-md-4 col-6 text-center">
    <button
      className="btn mt-lg-0 mt-3 app-btn btns bt w-100"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
