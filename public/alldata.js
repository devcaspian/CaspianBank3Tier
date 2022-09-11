function AllData(){
	const [data, setData] = React.useState('');

	React.useEffect(() => {
		fetch('/account/all')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(JSON.stringify(data));
			});
	}, []);


	return(
		<Card
		bgcolor="primary"
		 header="User Data"
		body=<ul>{data}</ul>
		/>
	); 
}