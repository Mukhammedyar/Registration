let email=document.querySelector('#email'),
pass=document.querySelector('#pass'),
name=document.querySelector('#name'),
btn=document.querySelector('.btn'),
card=document.querySelector('.card'),
alerts=document.querySelector('.alert'),
alertd=document.querySelector('.alertd')
;

//user yoki adminni tekshirish
function UserYes(){
    
				for(let i=0; i<data.length; i++){
		
			if (name.value==data[i].name){
								if (pass.value==data[i].pass) {	
												switch (email.value) {
																case data[i].user: 
																window.location='./user.html'
																scc()
																 break;
																case data[i].admin:
																scc();
															window.location='./admin.html'
																 break;
																default: alert('email is invalid')
																err()
												
												}//case
								}else{
												err()
								}					
				}else{
								if (name.value!=data[i].name || pass.value!=data[i].pass) {
											err()	
								}
				}
			   
				}//for

}//func()


//error function 
function err(){
				pass.classList.add('border-danger')
								name.classList.add('border-danger')
								email.classList.add('border-danger')
								email.classList.remove('shadow-g')
							 pass.classList.remove('shadow-g')
							  
								name.classList.add('shadow-d')
								email.classList.add('shadow-d')
							 pass.classList.add('shadow-d')
	
}
//success function
function scc(){
				pass.classList.add('border-success')
								name.classList.add('border-success')
								email.classList.add('border-success')
								
								name.classList.remove('shadow-d');
name.classList.add('shadow-g')
								email.classList.remove('shadow-d')
							 pass.classList.remove('shadow-d')
							 
								email.classList.add('shadow-g')
							 pass.classList.add('shadow-g')
							 
}




function inputErr(email,pass){
				if (name.value!="" && pass.value!="" && email.value!="") {
								UserYes();
				}else{
								if (name.value=="") {
												name.setAttribute('placeholder',"name is empty")
								}
								if(email.value==""){
												email.setAttribute('placeholder',"email is empty")
								}
								if(pass.value==""){
												pass.setAttribute('placeholder',"password is empty")
								}
								
				}
				
				
				
}

btn.addEventListener('click', (e) =>{
				
				inputErr(this.email, this.pass)
				UserYes()
				
})

