interface TrendProps {
  title: string;
  posterPath: string;
}

const Trending = ({
  title,
  posterPath,
}: TrendProps) => {

  return (
    // Inside your Trending component (e.g., in a file named Trending.jsx)

<div className="
    // Base styles
    bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer 
    
    // Interactive styles (Hover)
    transform hover:scale-[1.03] transition-all duration-300 ease-in-out 
    
    // Subtle red glow on hover
    hover:shadow-red-900/70 hover:shadow-2xl 
    
    // Enforce 2:3 aspect ratio (recommended, requires custom CSS or plugin)
    // For a quick fix without the plugin, use 'h-full' and ensure the parent has a fixed height
    
    group relative
">
    
    {/* Movie Poster Image */}
    <img 
        src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
        alt={title} 
        className="w-full h-auto object-cover rounded-t-lg transition duration-300 group-hover:opacity-80"
    />

    {/* Movie Title and Info */}
    <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-100 truncate">{title}</h3>
        {/* Optional: Add a subtle rating badge here */}
        <p className="text-sm text-gray-400">Action/Sci-Fi</p> 
    </div>

    {/* Action Overlay (The "Watch Now" button on hover) */}
    <div className="
        absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
    ">
        <button className="
            bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full 
            transform hover:scale-105 transition duration-200
        ">
            Watch Now
        </button>
    </div>
</div>
  );
};

export default Trending;
