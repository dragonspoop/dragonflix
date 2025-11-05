
const Search = () => {
  return (
    <div className="flex justify-between p-2 pr-5 pl-5 gap-5">
    <input name='movie' type="text" placeholder='Search you Movie'className="border w-full p-2 rounded"/>
    <div className="border w-full content-center p-1">recent searchs</div>
    </div>
  )
}

export default Search