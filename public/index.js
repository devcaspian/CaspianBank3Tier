

function Spa(){

//userData and authenticated status are available to pass to all child components
const [userData, setUserData] = React.useState({});
const [authenticated, setAuthenticated] = React.useState(false);
const [theme, setTheme] = React.useState("light");




//declate firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAn8DFfFJukht5zcNHseZZCLTfGvJPz5wA",
  authDomain: "mitcourse-bacc5.firebaseapp.com",
  databaseURL: "https://mitcourse-bacc5-default-rtdb.firebaseio.com",
  projectId: "mitcourse-bacc5",
  storageBucket: "mitcourse-bacc5.appspot.com",
  messagingSenderId: "1019104239552",
  appId: "1:1019104239552:web:8938fa3d9051c5df327225"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();

//need to rewrite, encap

  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser && !authenticated) {
		setAuthenticated(true);
      console.log(firebaseUser.email);
	  fetch(`account/lookup/${firebaseUser.email}`)
		.then(response => response.json())
		.then(data => {
			setUserData(data);
			console.log(userData);
			setTheme(data.theme)
		})
     
      
    } else if (!firebaseUser){
      console.log("User is not logged in");
    }
  });



	return(

		
		
		<HashRouter userData={userData} setUserData={setUserData} >
		 <Navbar userData={userData} setUserData={setUserData} authenticated={authenticated} />
		 
		 <Route path="/" exact>
			<Home userData={userData} setUserData={setUserData} theme={theme} />
		 </Route>
		 <Route path="/createaccount/" component={CreateAccount} theme={theme} />
		 <Route path="/login/" exact>
			<Login authenticated={authenticated} setAuthenticated={setAuthenticated} theme={theme} setTheme={setTheme} />
		 </Route>
		 <Route path="/alldata/" component={AllData} />
		 <Route path="/withdraw/" exact>
			<Withdraw authenticated={authenticated} userData={userData} setUserData={setUserData} theme={theme} />
		 </Route>
		 <Route path="/deposit/" exact>
			<Deposit authenticated={authenticated} userData={userData} setUserData={setUserData} theme={theme} />
		 </Route>
		 <Route path="/settings/" exact>
			<Settings theme={theme} setTheme={setTheme} userData={userData} />
		 </Route>
		 
		</HashRouter>
	);
}

ReactDOM.render(
	<Spa/>,
	document.getElementById("root")
)