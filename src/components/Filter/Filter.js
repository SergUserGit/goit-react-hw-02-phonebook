import PropTypes from 'prop-types';

const Filter = function ({ handleFilterChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
