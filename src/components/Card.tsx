interface CardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
}

const Card = ({
  title,
  posterPath,
  releaseDate,
  voteAverage,
}: CardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="
    cursor-pointer max-w-70 rounded-xl overflow-hidden shadow-lg bg-gray-800
    
    // Base for transitions
    transform transition-all duration-300 ease-in-out
    
    // Hover effects
    hover:scale-[1.05] // Slightly enlarges the card
    hover:shadow-red-800/40 hover:shadow-2xl // Adds a red glowing shadow
    
    group // Needed for child element opacity changes if you want them
">
    <img src={imageUrl} alt={title} className="w-full h-auto transition-opacity duration-300 group-hover:opacity-85" />
    <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">{releaseDate}</span>
            <span className="
                text-sm bg-yellow-500 text-black px-2 py-1 rounded-full
                transition-all duration-300 group-hover:scale-110 group-hover:shadow-md
            ">
                {voteAverage.toFixed(1)}
            </span>
        </div>
    </div>
</div>
  );
};

export default Card;
