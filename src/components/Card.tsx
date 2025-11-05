const Card = ({ data: { Title, Released, Genre, Poster } }) => {
  // const Title=data.Title;
  return (
    <div className="border m-3 max-w-55 text-nowrap rounded-xl ">
      <img src={Poster} alt="" className=" h-45 m-auto" />

      <div className="bg-amber-600 z-10 truncate p-2 rounded-b-xl">
        <div>Title:{Title}</div>
        <div>Genre:{Genre}</div>
      </div>
    </div>
  );
};

export default Card;
