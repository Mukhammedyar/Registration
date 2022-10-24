let name=document.querySelector('#name'),
table=document.querySelector('.table'),
edit=document.querySelector('#edit'),
add=document.querySelector('#add');


function addUser(){
			
}

/*btn.addEventListener('click',(e) =>{			
 addUser()
 })
*/


for(let k=0; k<data.length; k++){
				let tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="mx-3">${k}</td>
				<td>${data[k].name}</td>
				<td>${data[k].user}</td>
				<td>${data[k].admin}</td>
				<td>${data[k].pass}</td>
				<button class="btn btn-danger delete">delete</button>
				`;
				table.append(tr)
}

