import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const AntrianListRow = ({data}) => {
  return(
    <tr>
      <td>{data.number}</td>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.address}</td>
      <td><button className="btn">Selesaikan</button></td>

    </tr>
  );
};


AntrianListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default AntrianListRow;






//<td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
