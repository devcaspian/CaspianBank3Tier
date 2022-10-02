function Home({ theme }){

var background = "light";
var writing = "dark";

	if (theme === "light"){
		background = "light";
	    writing = "dark";
	} else {
	    background = "dark";
		writing = "white";
	}
	
	return(
		<Card
			bgcolor={background}
			txtcolor={writing}
			header="Caspian Banking Landing Page"
			title="Welcome to Caspian Banking"
			text="You can use this bank to fulfill your wildest dreams. we care"
			body={(<img src="bank.jpg" className="img-fluid" alt="Responsive image"/>)}

		/>

		
	)
}