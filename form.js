
let form=document.querySelector('.form')
let users = [];
form.addEventListener('submit', function(event ) {
 event.preventDefault();
    let user_name=document.getElementsByName('name')[0].value   
    let user_email=document.getElementsByName('email')[0].value
    let user_age=document.getElementsByName('age')[0].value 
    let objdata={
              user_name:user_name,
        user_email:user_email,
        user_age:user_age,
        checkbutton:false

    }
    
    
    let emailindex=users.findIndex((user)=>{
        
       
      return   objdata.user_email===user.user_email
      
})
if(emailindex!=-1){
    users[emailindex]=objdata
}

else{
  users.push(objdata)  
}

    



rerender()

});
function rerender(){   
    let newtable=document.querySelector(".tablebody")
    newtable.innerHTML=""
    users.forEach((userP)=>{
        let newrow=document.createElement('tr')
        const nametd= document.createElement('td')
        nametd.innerHTML=userP.user_name
        let emailtd=document.createElement('td')
        emailtd.innerHTML=userP.user_email
        let agetd=document.createElement('td')
        agetd.innerHTML=userP.user_age
        const delteButton=document.createElement('button')
        const checkbutton=document.createElement('input')
        checkbutton.checked = userP.checkbutton;
        checkbutton.type='checkbox';
       checkbutton.onclick=()=>{
            debugger;
          if( userP.checkbutton){
            userP.checkbutton=false
          }
          else{
            userP.checkbutton=true
          }
         } 
        delteButton.onclick = ()=>{
             users = users.filter((user)=>{
              return  user.user_email != userP.user_email; });
         
            
            rerender()

        }
        delteButton.innerText="delete row"
        newrow.appendChild(nametd)
        newrow.appendChild(emailtd)
        newrow.appendChild(agetd)
        newrow.appendChild(delteButton)
        newrow.appendChild(checkbutton)
        
        newtable.appendChild(newrow)


        
        
        

        })


}

let rowsdelete=document.querySelector(".deleterow")

rowsdelete.onclick=()=>{
    users=users.filter((user)=>{
        return user.checkbutton==false
       
    })
    console.log(users)

    rerender()
}

    








    




        
    





