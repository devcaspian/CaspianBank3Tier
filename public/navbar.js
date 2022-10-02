function Navbar({ authenticated, userData }){
	return(
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            {authenticated ? (<li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            ) : (
            <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            )}
            {authenticated ? (<li className="nav-item">
                <a className="nav-link" href="#/login/">Logout</a>
            </li>
            ) : (
            <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
            </li>
            )}
            {authenticated && <li className="nav-item">
                <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>}
           {authenticated && <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>}
            {authenticated && <li className="nav-item">
                <a className="nav-link" href="#/settings/">Settings</a>
            </li>} 
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">Caspian Banking</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"></a>
            </li>
            {authenticated && <li className="nav-item" style = {{ marginLeft: 225 }}>
                <a className="nav-link">Welcome {userData.name}</a>
            </li>}
        </ul>
    </div>
</nav>

    );
}