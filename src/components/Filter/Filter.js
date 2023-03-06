const Filter = function ({ handleFilterChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
