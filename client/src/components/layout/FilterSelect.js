import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByComplete } from '../../actions/filters';
import { Select } from 'react-materialize';

export class FilterSelect extends React.Component {
  onSortChange = (e) => {
    if (e.target.value === 'attention') {
      this.props.sortByComplete();
    } else {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <li className='collection-item'>
        {' '}
        <Select
          id='Select-9'
          multiple={false}
          onChange={this.onSortChange}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value={this.props.filters.sortBy}
        >
          <option value='date'>Sort By Date</option>
          <option value='attention'>Sort By Complete</option>
        </Select>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByComplete: () => dispatch(sortByComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect);
