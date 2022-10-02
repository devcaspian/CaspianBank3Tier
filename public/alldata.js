function AllData(){
	const [data, setData] = React.useState('');
	const [currentUser, setCurrentUser] = React.useState('');

	React.useEffect(() => {
		fetch('/account/all')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(JSON.stringify(data));
			});
	}, []);

		React.useEffect(() => {
		fetch('/account/lookup/fakeman@user.com')
			.then(response => response.json())
			.then(user => {
				console.log(user);
				setCurrentUser((user));
			});
	}, []);


	return(
		<>
		<h1>Hello {currentUser.name}</h1>
		<Card
		bgcolor="primary"
		 header="User Data"
		body=<ul>{data}</ul>
		/>
		</>
	); 
}