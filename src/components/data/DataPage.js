import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import {bindActionCreators} from 'redux';
import DataList from './DataList';
import DataSearch from './DataSearch';
//import DataApi from '../../api/mockDataPropApi';

class DataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onEntry = this.onEntry.bind(this);

	}

	dataRow(data, index) {
		return <div key={index}>{data.name}</div>;
	}

	onEntry(event) {
		event.preventDefault();
		//DataApi.entranceAdd(DataList(data));

	}
	render() {
		const {datas} = this.props;
		debugger;
		return(
			<div>
			<h1>Data Pasien</h1>
			<Link to="datas" className="btn btn-primary btn-lg">Tambah</Link>
			<DataSearch />
			<DataList datas={datas} onEntry={this.onEntry} />
			</div>

		);
	}
}

DataPage.propTypes = {
	//dispatch: PropTypes.func.isRequired,
	//datas: PropTypes.array.isRequired,
	//createData: PropTypes.func.isRequired,
	actions: PropTypes.object.isRequired,
	datas: PropTypes.array.isRequired
 };


function mapStateToProps(state, ownProps) {
	return {
		datas: state.datas
	};

}

function mapDispatchToProps(dispatch) {
	return {
		//createData: data => dispatch(dataAction.createData(data)),
		actions: bindActionCreators(dataAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
