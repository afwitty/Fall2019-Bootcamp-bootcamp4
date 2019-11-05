import React, { Component } from 'react';

export default ({filterText, bldgList, selectedUpdate, deleteUpdate}) => {

	const buildingList = bldgList
	.filter(directory => {
		return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toUpperCase().indexOf(filterText.toUpperCase()) >= 0
	})
	.map(directory => {
		return (
			<tr 
				key={directory.id}
				onClick={() => selectedUpdate(directory.id)}
			>
			<td>{directory.code} </td>
			<td>{directory.name} </td>

			<button onClick = {() => deleteUpdate(directory)}>Remove</button>

			</tr>
		);
	});

	return (
		<div>
			<ul>
				{buildingList}
			</ul>
		</div>);

}

