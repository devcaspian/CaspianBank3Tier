function Deposit({ authenticated, userData, setUserData, theme }){

 const ctx = React.useContext(UserContext);
 const [depositAmount, setDepositAmount] = React.useState(0);
 const [show, setShow] = React.useState(true);
 const [balance, setBalance] = React.useState(userData.balance);
 const [status, setStatus] = React.useState('');


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


  function validate(){
	 if (depositAmount < 0){
		setStatus('Error: Deposit amount must be greater than $0');
		setTimeout(() => setStatus(''),3000);
			return false;
	 }
	 if (isNaN(depositAmount)) {
		 setStatus('Error: Deposit amount must be a number');
		 setTimeout(() => setStatus(''),3000);
			return false;
	 }
	 return true;
 }


 function handleDeposit(){
  if (!validate()) return; 
  let newTotal = parseInt(balance) + parseInt(depositAmount)
  setBalance(newTotal); 
  let email = userData.email;
  const url = `/account/update/${email}/${parseInt(depositAmount)}`;
   (async () => {
			var res = await fetch(url);
			var data = await res.json();
		})();
  let copiedData = {...userData};
  copiedData.balance = newTotal;
  setUserData(copiedData);
  setShow(false);
  event.preventDefault();
};

 function clearForm(){
	setDepositAmount(0);
	setShow(true);
 }

 return(
	<Card
	   title=""
	   bgcolor={background}
	   txtcolor={writing}
	   header="Deposit"
	   status={status}
	   body={show ? (
			 <>
			 <h2>Current Balance: ${balance} </h2>
			 Deposit Amount<br/>
			 <input type="number" className="form-control" id="deposit-amount" placeholder="Enter deposit amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>
			  <button type="submit" variant={buttoncl} onClick={handleDeposit}>Deposit ${depositAmount}</button>
			 </>
		 ):(
		     <>
			 <h5>Success!</h5>
			 <h2>Current Balance: ${balance} </h2>
			 <button type="submit" variant={buttoncl} onClick={clearForm}>Make Another Deposit</button>
			 </>
		 )}

	/>
 )
}