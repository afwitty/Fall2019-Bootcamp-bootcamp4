import React from 'react';

export default ({bldgList,selectedBuilding}) => {

	const viewBuilding = bldgList
	.filter(directory => {
		return directory.id == selectedBuilding
	})
	.map(directory => {
		if (directory.coordinates) {
			const x = directory.coordinates.latitude
			const y = directory.coordinates.longitude
			return (
				<tr key={directory.id}>
					<dl>{"Code: "}{directory.code}</dl>
					<dl>{"Name: "}{directory.name}</dl>
					<dl>{"Address: "}{directory.address}</dl>
					<dl>{"Coordinates: "}{directory.coordinates.latitude}{", "}{directory.coordinates.longitude}</dl>
				</tr>
			);
		}
		return (
			<tr key={directory.id}>
				<dl>{"Code: "}{directory.code}</dl>
				<dl>{"Name: "}{directory.name}</dl>
			</tr>
		);
	});
	
	return (
		<ul>
			<p>
				{' '}
				<i>Click on a name to view more information</i>
			</p>
			<ul>
				{viewBuilding}
            </ul>
		</ul>
	)
}
