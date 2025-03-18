import { useState } from "react";
import JobList from "./components/JobList";
import iconRemove from "./images/icon-remove.svg";

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter) ? prevFilters : [...prevFilters, filter]
    );
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter)
    );
  };

  const clearFilters = () => setSelectedFilters([]);

  return (
    <main>
      <div className="top-background py-14 bg-Desaturated-Dark-Cyan"></div>

      {/* Filter Display Section */}
      {selectedFilters.length > 0 && (
        <div className="px-4 lg:px-0">
          <div className="bg-white shadow-md p-4 rounded-md flex gap-2 items-center justify-between max-w-[1100px] mx-auto mt-6">
            <div className="flex flex-wrap gap-4">
              {selectedFilters.map((filter) => (
                <div
                  key={filter}
                  className="flex items-center bg-Light-Grayish-Cyan-Filter-Tablets text-Desaturated-Dark-Cyan pl-2 rounded-sm text-base font-bold"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className=" text-white px-2 py-2 bg-Desaturated-Dark-Cyan hover:bg-Very-Dark-Grayish-Cyan cursor-pointer rounded-r-sm ml-2"
                  >
                    <img src={iconRemove} alt="Remove filter" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="text-Desaturated-Dark-Cyan font-bold hover:underline cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <JobList selectedFilters={selectedFilters} addFilter={addFilter} />
    </main>
  );
};

export default App;
