function Withdraw(){

 const ctx = React.useContext(UserContext);
 const [withdrawAmount, setWithdrawAmount] = React.useState(0);
 const [show, setShow] = React.useState(true);
 const [balance, setBalance] = React.useState(100);
 const [status, setStatus] = React.useState('');

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
	   bgcolor="primary"
	   header="Withdraw"
	   status={status}
	   body={show ? (
			 <>
			 <h2>Current Balance: ${balance} </h2>
			 Withrawal Amount<br/>
			 <input type="input" className="form-control" id="withdraw-amount" placeholder="Enter withdrawal amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>
			  <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw ${withdrawAmount}</button>
			 </>
		 ):(
		     <>
			 <h5>Success!</h5>
			 <h2>Current Balance: ${balance} </h2>
			 <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
			 </>
		 )}

	/>
 )
}