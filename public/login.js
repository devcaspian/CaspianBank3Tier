function Login({ authenticated, setAuthenticated, theme, setTheme }){
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const auth = firebase.auth();

	  var background = "light";
	  var writing = "dark";
	  var buttoncl = "btn btn-dark"

	if (theme === "light"){
		background = "light";
	    writing = "dark";
		buttoncl = "outline-dark";
	} else {
	    background = "dark";
		writing = "white";
		buttoncl = "outline-light";
	}



	function handleLogin(){
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => {
			setStatus('login failed');
			console.log(e.message);
		});
		setShow(false);
	}

	function handleLogout(){
		const auth = firebase.auth();
		auth.signOut();
		setAuthenticated(false);
		setShow(true);
		setTheme("light");
	}



	return(
		<Card
		 bgcolor={background}
	   txtcolor={writing}
		 header={authenticated ? "Logout" : "Login"}
		 status={status}
		 body={authenticated ? (
			 <>
			 <h5>You are logged in</h5>
			 <button type="submit" variant={buttoncl} onClick={handleLogout}>Logout</button>
			 </>
		 ):(
		     <>
			 Email Address<br/>
			 <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
			 Password<br/>
			  <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
			  <button type="submit" variant={buttoncl} onClick={handleLogin}>Login</button>
			 </>
		 )}
		/>
	)
}