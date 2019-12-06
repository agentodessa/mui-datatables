import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const defaultHeadRowStyles = {
  root: {},
};

class TableHeadRow extends React.Component {
  static propTypes = {
    /** Extend the style applied to components */
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <TableRow
        className={clsx({
          [classes.root]: true,
        })}>
        {this.props.children}
      </TableRow>
    );
  }
}

export default withStyles(defaultHeadRowStyles, { name: 'MUIDataTableHeadRow' })(TableHeadRow);
