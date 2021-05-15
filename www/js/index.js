var pin; var name; var address; var address2; var city; var state;   
var zip; var opbalance; var accountnumber

var acc  = 0;

// function uniqueNumber() {
//     var date = new Date();
//     var timestamp = date.getTime();
//     return timestamp;
//     //var date = Date.now();
//     //return date;
// }

function generatorAc(){
    document.getElementById("GenAC").innerHTML = 1608295011982;
    localStorage.setItem("accountnumber","1608295011982");
}

function show(){
    var count  = 3;
    a = prompt("Enter Password");
    if(a == "admin"){
        alert("Successfull")
    }
    else{
        alert(" UnSuccessfull.Chances Remaining: " +count);
        count--;
        if(count<0){
            window.location.href="index.html";
        }
        else{
            show();
}}}

function createAccount(){
    localStorage.setItem("pin",$("#data1").val()); 
    localStorage.setItem("name",$("#data2").val()); 
    localStorage.setItem("address",$("#data3").val()); 
    localStorage.setItem("address2",$("#data4").val()); 
    localStorage.setItem("city",$("#data5").val()); 
    localStorage.setItem("state",$("#data6").val()); 
    localStorage.setItem("zip",$("#data7").val()); 
    localStorage.setItem("opbalance",$("#data8").val()); 
    alert("Successful");
    window.location.href = "welcome.html" ;
    show();
}

var pin; var name; var address; var address2; var city; var state;   
var zip; var opbalance; 
var cubalance = parseInt(opbalance);

function editAccount(){
    localStorage.setItem("pin",$("#adata1").val()); 
    localStorage.setItem("name",$("#adata2").val()); 
    localStorage.setItem("address",$("#adata3").val()); 
    localStorage.setItem("address2",$("#adata4").val()); 
    localStorage.setItem("city",$("#adata5").val()); 
    localStorage.setItem("state",$("#adata6").val()); 
    localStorage.setItem("zip",$("#adata7").val()); 
    localStorage.setItem("cubalance",$("#adata8").val()); 
    document.getElementById("GenAC").innerHTML= +accountnumber;
    alert("Successful");
    window.location.href = "welcome.html" ;
    show();
}

function admin() {
	var adminPass = "admin" ;
	if($("#InputNumber").val()==''){alert("Enter account number");}
	else{
	    if($("#InputNumber").val() === adminPass){
	         if($("#InputPin").val() ===''){alert("Enter Pin");}
	         else{
	            if($("#InputPin").val()== adminPass ){
	                 alert("Sign in Successfully");
	                 window.location.href="welcome.html";
                    show();
	                }
	                else{alert("Wrong Password");}
	            }
	        }
	        else{
	            alert("Invalid ID");
	        }
	}
}

function load_details(){
	accountnumber = localStorage.getItem('accountnumber')
	opbalance = localStorage.getItem('opbalance')
	city = localStorage.getItem('city')
	cubalance = localStorage.getItem('cubalance')
	document.getElementById("ud1").innerHTML += accountnumber;
	document.getElementById("ud2").innerHTML += city+ " Branch";
	document.getElementById("ud3").innerHTML += opbalance;
	document.getElementById("ud4").innerHTML += cubalance;
	document.getElementById("ud5").innerHTML += "RX98356";
}

function user() {
    accountnumber = 1608295011982
    pin = 1234
    if($("#InputNumber1").val()==''){alert("Enter account number");}
    else{
    if($("#InputNumber1").val() != accountnumber){alert("Wrong account number");}
    else{
    if($("#InputPin1").val() ==''){alert("Enter Pin");}
    else{
    if($("#InputPin1").val()!= pin){alert("Wrong Password");}
    else{
    window.location.href="UserHome.html";
}}}}}

function userprofile(){
	document.getElementById("up1").innerHTML= name;
	document.getElementById("up2").innerHTML= accountnumber;
	document.getElementById("up3").innerHTML= address+ " " +address2;
	document.getElementById("up4").innerHTML= state;
	document.getElementById("up5").innerHTML= zip;
	document.getElementById("up6").innerHTML= city+ " Branch";
}

function transfer(){

	if( $("#SenderName").val()=='' || $("#SenderAc").val()=='' || $("#SenderAc2").val()=='' || $("#SenderIFSC").val()==''|| $("#SenderMoney").val()=='' ){alert("Please Enter Sender's Bank Details");}
	else{
       	 if($("#SenderName").val()==''){alert("Sender's Name required");}
	  else{ 
	   if($("#SenderAc").val() != $("#SenderAc2").val()){alert("Sender's Account Number does not match");}
	    else{
	     if($("#SenderAc").val()==''){alert("Sender's Account No. required");}
	      else{ 
	       if($("#SenderAc2").val()==''){alert("Sender's Account No. required");}
	        else{ 
	         if($("#SenderIFSC").val()==''){alert("Sender's IFSC code required");}
                  else{ 
	           if($("#SenderMoney").val()==''){alert("Enter Money to be transfered");}
	            else{
	             if($("#SenderMoney").val()>cubalance){alert("Insufficient Balance")}
	              else{
	            localStorage.setItem("trans",$("#SenderMoney").val()); 
	            alert("Details entered Successfully");
                window.location.href="ConftransferM.html";   
}}}}}}}}}

function ConfPay(){
    if($("#ConfTransferA").val() != $("#ConfTransferB").val()){alert("PIN Code do not match");}
        else{
        if($("#ConfTransferA").val()==''){alert("PIN REQUIRED");}
        else{ 
        if($("#ConfTransferB").val()==''){alert("PIN REQUIRED");}
        else{ 
        if($("#ConfTransferB").val() == "1234"){
        alert("PIN entered Successfully");
        cubalance = localStorage.getItem('opbalance')
        cubalance = cubalance- +localStorage.getItem("trans");
        localStorage.setItem("cubalance",cubalance)
        window.location.href = "PaymentSuccessful.html" ;    
}}}}}

function PaySucDet() {
          document.getElementById("p1").innerHTML= "Amount deducted from account: Rs." +localStorage.getItem("trans");
}
