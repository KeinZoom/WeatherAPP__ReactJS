function Search({ searchParams, setSearchParams, handleClick }) {
  return (
    <div className="search__engine">
      <input
        type="text"
        name="search"
        placeholder="Enter the country name"
        value={searchParams}
        onChange={(event) => setSearchParams(event.target.value)}
      />
      <button onClick={handleClick}>Search Country</button>
    </div>
  );
}

export default Search;
