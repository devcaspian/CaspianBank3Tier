

function Navbar({ authenticated, userData }){
	return(
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            {authenticated && <li className="nav-item">
                <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>}
           {authenticated && <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>}
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">Navbar 2</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            {authenticated && <li className="nav-item">
                <a className="nav-link">Welcome {userData.name}</a>
            </li>}
        </ul>
    </div>
</nav>

    );
}


function Navbar({ authenticated, userData }){
	return(
	<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#/CreateAccount/">Create Account</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#/login/">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
    </li>
     {authenticated && <li className="nav-item">
        <a className="nav-link" href="#/withdraw/">Withdraw</a>
    </li>}
  {authenticated && <li className="nav-item">
    <a className="nav-link" href="#/deposit/">Deposit</a>
  </li>}
  <li className="nav-item">
    <a className="nav-link" href="#/alldata/">AllData</a>
  </li>
   {authenticated && <li className="nav-item">
    <a>Welcome {userData.name}</a>
  </li>}
 
</ul>


	);
}



function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }