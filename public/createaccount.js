function CreateAccount({ theme }){
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState('');
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');


	  var background = "light";
	  var writing = "dark";
	  var buttoncl = "btn btn-dark"


	function validate(field, label){
		if (!field) {
			setStatus('Error: ' + label);
			setTimeout(() => setStatus(''),3000);
			return false;
		};
		if (label === 'password' && field.length < 8) {
			setStatus('Error: password must be at least 8 characters');
			setTimeout(() => setStatus(''),3000);
			return false;
		}
		return true;
	}

	function handleCreate(){
		console.log(name, email, password);
		if (!validate(name, 'name')) return;
		if (!validate(email, 'email')) return;
		if (!validate(password, 'password')) return;
		fetch(`/account/create/${name}/${email}/${password}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				const auth = firebase.auth();
				const promise = auth.createUserWithEmailAndPassword(email, password);

				promise.catch(({message}) => console.log(message))
			});
		setShow(false);
	}



	function clearForm(){
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}

	return(
		<Card
		 bgcolor={background}
		 txtcolor={writing}
		 header="Create Account"
		 status={status}
		 body={show ? (
			 <>
			 Name<br/>
			 <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
			 Email Address<br/>
			 <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
			 Password<br/>
			  <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
			  <button type="submit" variant={buttoncl} onClick={handleCreate}>Create Account</button>
			 </>
		 ):(
		     <>
			 <h5>Success!</h5>
			 <button type="submit" variant={buttoncl} onClick={clearForm}>Add another account</button>
			 </>
		 )}
		/>
	)
}