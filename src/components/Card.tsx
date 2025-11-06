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
    <div className="max-w-70 rounded-xl overflow-hidden shadow-lg bg-gray-800">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{releaseDate}</span>
          <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded-full">
            {voteAverage.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
