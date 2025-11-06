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
    <div className="mr-5 ml-5 flex justify-between pt-2 gap-2 ">
      <div className="flex  justify-between">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
          type="text"
          placeholder="Search you Movie"
          className="border min-w-120 p-2"
        />
        <button onClick={onSearch} className="border ml-2 min-w-40">
          Search
        </button>
      </div>
      <div className=" flex p-1 min-w-205 truncate">
        {
          recentSearchs.map((element, idx) => (
            <span className="bg-gray-700  min-w-20 rounded p-1 pr-2 pl-2 mr-2" key={idx}>{element}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
