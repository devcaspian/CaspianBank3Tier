function Settings({authenticated, userData, setUserData, theme, setTheme}) {

const toggleTheme = () => {
	let newTheme;
	if (theme === "light"){
		newTheme = "dark";
	} else{
		newTheme = "light"
	}
	let email = userData.email;
	const url = `/account/updateTheme/${email}/${newTheme}`;
   (async () => {
			var res = await fetch(url);
			var data = await res.json();
		})();
	setTheme((curr) => (curr === "light" ? "dark" : "light"));
};

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

	return (
		<Card
			bgcolor={background}
			txtcolor={writing}
			header="Settings"
			title="Update your preferences to customize your banking experience"
			text={`Current theme: ${theme}`}
			body={<button variant={buttoncl} onClick={toggleTheme}>Change Theme</button>}
		/>
	)
}