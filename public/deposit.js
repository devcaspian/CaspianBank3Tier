function Deposit(){

 const ctx = React.useContext(UserContext);
 const [depositAmount, setDepositAmount] = React.useState(0);
 const [show, setShow] = React.useState(true);
 const [balance, setBalance] = React.useState(100);
 const [status, setStatus] = React.useState('');

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
  setBalance(parseInt(balance) + parseInt(depositAmount)); 
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
	   bgcolor="primary"
	   header="Deposit"
	   status={status}
	   body={show ? (
			 <>
			 <h2>Current Balance: ${balance} </h2>
			 Deposit Amount<br/>
			 <input type="number" className="form-control" id="deposit-amount" placeholder="Enter deposit amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>
			  <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit ${depositAmount}</button>
			 </>
		 ):(
		     <>
			 <h5>Success!</h5>
			 <h2>Current Balance: ${balance} </h2>
			 <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
			 </>
		 )}

	/>
 )
}