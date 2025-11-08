const Search = ({
  searchTerm,
  setSearchTerm,
  recentSearchs,
  onSearch,
}: {
  searchTerm: string;
  recentSearchs: Array<string>;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}) => {
  return (
   <div className="
    // Main Wrapper
    container mx-auto px-4 sm:px-6 lg:px-8 py-6
    flex flex-col md:flex-row justify-between items-start md:items-center gap-4
    border-b border-gray-700/50 pb-6
">
    
    {/* Search Input and Button Group */}
    <div className="flex w-full md:w-auto items-center gap-2">
        <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") onSearch();
            }}
            type="text"
            placeholder="Search your Movie..."
            className="
                // Input Styling
                flex-grow p-3 rounded-full bg-gray-700 text-gray-100 
                border border-transparent transition duration-300
                focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600
                placeholder-gray-400 text-base min-w-[200px]
            "
        />
        <button 
            onClick={onSearch} 
            className="
                // Button Styling
                bg-red-600 hover:bg-red-700 text-white font-bold 
                py-3 px-6 rounded-full cursor-pointer 
                transition duration-300 transform hover:scale-105
            "
        >
            Search
        </button>
    </div>

    {/* Recent Searches Tags */}
    <div className="
        // Container Styling
        flex items-center flex-wrap gap-2 
        p-2 rounded-lg bg-gray-800/50 
        min-w-[195px] w-full md:w-auto
    ">
        <span className="text-gray-400 text-sm font-semibold mr-1">Recent:</span>
        {
            recentSearchs.map((element, idx) => (
                <span 
                    className="
                        // Tag Styling
                        bg-gray-700 text-gray-200 text-xs font-medium 
                        rounded-full px-3 py-1 cursor-pointer 
                        hover:bg-gray-600 transition duration-200
                        truncate max-w-[120px]
                    " 
                    key={idx}
                >
                    {element}
                </span>
            ))
        }
    </div>
</div>
  );
};

export default Search;
