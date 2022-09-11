function Spa(){
	return(
		
		<HashRouter >
		 <Navbar/>
		 <UserContext.Provider value={{users: [{name: 'caspian', email: 'caspian.alderman@gmail.com', password: '1234', balance: 1500}]}}>
		 <Route path="/" exact component={Home} />
		 <Route path="/createaccount/" component={CreateAccount} />
		 <Route path="/alldata/" component={AllData} />
		 <Route path="/withdraw/" component={Withdraw} />
		 <Route path="/deposit/" component={Deposit} />
		 </UserContext.Provider>
		</HashRouter>
	);
}

ReactDOM.render(
	<Spa/>,
	document.getElementById("root")
)