function Withdraw({ authenticated, userData, setUserData, theme }){

 const ctx = React.useContext(UserContext);
 const [withdrawAmount, setWithdrawAmount] = React.useState(0);
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
	 if (withdrawAmount > balance){
		setStatus('Error: Insufficient Funds');
		setTimeout(() => setStatus(''),3000);
			return false;
	 }
	 if (isNaN(withdrawAmount)) {
		 setStatus('Error: Withdrawal amount must be a number');
		 setTimeout(() => setStatus(''),3000);
			return false;
	 }
	 return true;
 }


 function handleWithdraw(){
 if (!validate()) return; 
 let newTotal =  balance - withdrawAmount;
  setBalance(newTotal); 
  let email = userData.email;
  const url = `/account/update/${email}/${-withdrawAmount}`;
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
	setWithdrawAmount(0);
	setShow(true);
 }

 return(
	<Card
	   title=""
	   bgcolor={background}
	   txtcolor={writing}
	   header="Withdraw"
	   status={status}
	   body={show ? (
			 <>
			 <h2>Current Balance: ${balance} </h2>
			 Withrawal Amount<br/>
			 <input type="input" className="form-control" id="withdraw-amount" placeholder="Enter withdrawal amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>
			  <button type="submit" variant={buttoncl} onClick={handleWithdraw}>Withdraw ${withdrawAmount}</button>
			 </>
		 ):(
		     <>
			 <h5>Success!</h5>
			 <h2>Current Balance: ${balance} </h2>
			 <button type="submit" variant={buttoncl} onClick={clearForm}>Make Another Withdrawal</button>
			 </>
		 )}

	/>
 )
}