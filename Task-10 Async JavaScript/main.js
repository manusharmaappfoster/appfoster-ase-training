document.addEventListener("DOMContentLoaded", (event) => {
    handleIntialCall();
  });

  
const  handleIntialCall = async () =>{
    try{
        const initialData = await fetch('https://gorest.co.in/public/v2/users')
        if(initialData){
         let data = await initialData.json();
         let html = '';

         data.forEach(((item,index)=>{
          html+=`<div class="name1">
            <span>${index+1}</span>
            <h3>${item?.name}</h3>
            <img id='eye${index}' onClick='handleClick(${item.id})'  src="images/view.png" data-toggle="modal" data-target="#exampleModalCenter" >
            </div>`
         }))
         document.getElementById('main-container').innerHTML = html
        }
    }catch(err){
        alert(err)
    }
}

const handleClick = async(id) =>{
    document.getElementsByClassName('modal-body').innerHTML=''
    try{
      const userData = await fetch(`https://gorest.co.in/public/v2/users/${id}`)
      if(userData){
        let data = await userData.json()
        document.getElementsByClassName('modal-title')[0].innerText = data.name;
        console.log(data);
        let html= `<div class="user-container">
        <div class="user-grid">
          <div>Email: </div>
          <div>${data?.email}</div>
        </div>
        <div class="user-grid">
          <div>Gender:</div>
          <div>${data?.gender}</div>
        </div>
        <div class="user-grid">
           <div>Status: </div>
      <div>${data?.status}</div>
       </div>
       </div>
       `
        document.getElementsByClassName('modal-body')[0].innerHTML= html
      }
    }catch(err){
        alert(err)
    }
}
