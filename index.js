let all;
//TOGGLE SIDEBAR
const openSideBar = () => {
  document.querySelector('.allPages').setAttribute('style', 'width:calc( 100% - 14rem);position:absolute;top:0;left:14rem')
  document.querySelector('aside').setAttribute('style', 'width:14rem; ');
  setTimeout(() => {
    document.querySelectorAll(' aside div h2').forEach((el) => el.setAttribute('style', ' opacity:1; transform:translate(0px); display:block;  '));
  }, 200);
  document.querySelector('aside button').setAttribute('style', 'transform:translate(9rem);    ');
}

const closeSideBar = () => {
  document.querySelector('.allPages').setAttribute('style', 'width:calc( 100% - 4.5rem);position:absolute;top:0;left:4.5rem')
  document.querySelector('aside button').setAttribute('style', 'transform:translate(-10px);   ')
  document.querySelectorAll('aside div h2').forEach((el) => el.setAttribute('style', ' opacity:0;  transform:translate(-30px); display:none;'));
  document.querySelector('aside').setAttribute('style', 'width:4.5rem; ');
}

let icon = 'open';

const toggleSideBar = () => {
  if (icon == 'open') {

    closeSideBar();
    document.querySelector('.but').innerHTML =
      `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>`
    icon = 'close';

  } else {
    openSideBar();
    document.querySelector('.but').innerHTML =
      `
<svg   xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
      class="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
  </svg>
     `
    icon = 'open';
  }
}
//DARK MODE
let dark = 1;
const darkMode = () => {
  if (dark == 1) {
    document.querySelector('.dark-btn').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
  </svg>
  `
    const para = document.createElement("style");
    para.innerText = ":root{--black:white; --white:#111111;--boxShadow:rgba(0, 0, 0, 0.188)";
    // Append to body:
    document.body.appendChild(para);
    dark = 0;
  } else {
    document.querySelectorAll('style').forEach((el) => el.remove())
    document.querySelector('.dark-btn').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>
      `
    dark = 1;
  }
}
//home total:

const Totaladmin = () => {
  document.getElementById('totadmin').innerHTML = all.length
}



//modal update

const isClose = () => {
  document.querySelector(`#upmod1`).setAttribute("style", "display:none !important")
}
    
const modalUp=(el)=>{
  document.getElementById("upmod1").innerHTML =`
  <div id="allform">
  <h1>Update Admin</h1>
  <form >
  <span id='x' onclick='isClose()'>X</span>
      <div>
      <input type="text " value="${el.fullName}"  id="fullName1">
      <input type="text" value="${el.image}" id="image1"  ></div>
      <div>  
       <input type="text"  value="${el.phone}" id="phone1">
          <input type="text"  value="${el.adresse}" id="adresse1" >
       
      
      </div>
     
  </form> 
  <button  onclick ='uppAdmin(${el.id})'  class='save' >save</button>
</div>
  `
  document.querySelector(`#upmod1`).setAttribute("style", "display:block !important")


}
//update admin:
    const uppAdmin = (id) => {
      let image = document.getElementById(`image1`).value;
      let fullName = document.getElementById(`fullName1`).value;
      let adresse = document.getElementById(`adresse1`).value;
      let phone = document.getElementById(`phone1`).value;
      fetch(`http://localhost:8000/Admins/${id}`, {
    
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
          image: image,
          fullName: fullName,
          adresse: adresse,
          phone:phone
        })
    
      }).then(res => { console.log(res); window.location.reload() })
    }
//add admin form
const CloseFormAdmin = (el) => {
  document.querySelector(`.ajouter`).setAttribute("style", "display:none !important")
}
const OpenFormAdmin = (el) => {

  let x=document.querySelector('.ajouter').innerHTML = `

  <div  id="allform">
  <h1>Add Admin</h1>
  <span id="x"  onclick='CloseFormAdmin()'>x</span>
  <form>
<div>      <input type="text " placeholder="FullName" id="fullName">
<input type="text " placeholder="Email" id="email"> </div>
<div>        <input type="text " placeholder="Image" id="image">
<input type="text " placeholder="Adress" id="adresse"></div>
  </form>
  <button onclick='addAdmin()' class="save">Save</button>
  
  
</div>
  
  ` 
   document.querySelector(`.ajouter`).setAttribute("style", "display:block !important")
}
    // add  admin:
    const addAdmin = () => {
  
      let image = document.getElementById("image").value;
      let fullName = document.getElementById("fullName").value;
      let adresse = document.getElementById("adresse").value;
      
      fetch('http://localhost:8000/Admins', {
    
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
          image: image,
    
          fullName: fullName ,
          adresse:adresse
        })
    
      }).then(res => { console.log(res); window.location.reload() })
    }
    

    
const getAllAdmins = () => {

  fetch("http://localhost:8000/Admins").then((res) => res.json()).then((data) => {
    all = data;
    Totaladmin()
    document.querySelector('#showAdmins').innerHTML = all.map((el)=>
      `
      <div class="cardAdmin">
      <div id="photoAdmin">
      <img src="${el.image}" alt="">
      </div>
      <h3>${el.fullName}</h3>
      <h5>${el.adresse}</h5>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
      </span>
      <div id="buttonb">
        <button onclick ='deleteAdmin(${el.id})' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg></button>
        <button onclick =' modalUp(${JSON.stringify(el)})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
      </svg></button>
      </div>

    </div>
      
        `

    ).join("")
  }
  )
}
//delete admin:
const deleteAdmin = (id) => {
  fetch(`http://localhost:8000/Admins/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }


    }).then(res => console.log(res) , window.location.reload())
}



//showUsers:
//search user
let txt = ""
const searchUser = () => {
  txt = document.getElementById('searchInputUsers').value;
  getUsers()

}


const isCloseuser = () => {
  document.querySelector(`#upmod2`).setAttribute("style", "display:none !important")
}
    
const modalUpusers=(el)=>{
  document.getElementById("upmod2").innerHTML =`
  <div id="allform">
  <h1>Update useres</h1>
  <form >
  <span id='x' onclick='isCloseuser()'>X</span>
      <div>
      <input type="text" value="${el.fullName}"  id="fullName2">
      <input type="text" value="${el.image}" id="image2"></div>
      <div>  
       <input type="text"  value="${el.phone}" id="phone2">
          <input type="text"  value="${el.email}" id="email2">
       
      
      </div>
     
  </form> 
  <button  onclick ='uppusers(${el.id})'  class='save' >save</button>
</div>
  `
  document.querySelector(`#upmod2`).setAttribute("style", "display:block !important")


}
//update useres:
    const uppusers= (id) => {
      let image = document.getElementById(`image2`).value;
      let fullName = document.getElementById(`fullName2`).value;
      let email = document.getElementById(`email2`).value;
      let phone = document.getElementById(`phone2`).value;
      fetch(`http://localhost:8000/Users/${id}`, {
    
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        , body: JSON.stringify({
          image: image,
          fullName: fullName,
          email: email,
          phone:phone
        })
    
      }).then(res => { console.log(res); window.location.reload() })
    }

const getUsers =() => {

  fetch('http://localhost:8000/Users').then(res => res.json()).then(data => {
    all = data;


    document.querySelector('#showUsers').innerHTML = all.filter(x => x.fullName.includes(txt)).map(el=>(
      `
   <div class="cardUsers">
                <div id="photoUsers">
                <img src="${el.image}" alt="">
                </div>
                <div id="cordoUsers" > 
                <h3><span>Full Name:</span> ${el.fullName}</h3>
                <h3><span>Email: </span>${el.email}</h3>
                <h3><span>Phone Numbers: </span>${el.phone}</h3>
                <div id="buttonb">
                  <button    onclick ='deletUser(${el.id})'  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg></button>
                  <button onclick ='modalUpusers(${JSON.stringify(el)})'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                </svg></button>
                </div>
                </div>
               
           
              </div>
              `
   ) )

      .join(" ");



  })

}


const deletUser =(id) => {
  fetch(`http://localhost:8000/Users/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }


    }).then(res => console.log(res), window.location.reload())
}


const changecolor=(id)=>{
  document.querySelector('.select')?.removeAttribute("class")
  document.querySelector(`#${id}`).classList.add("select")


}

//add users form
const CloseFormusers = (el) => {
  document.querySelector(`#adduseres`).setAttribute("style", "display:none !important")
}
const OpenFormusers = (el) => {

  let x=document.querySelector('#adduseres').innerHTML = `

  <div  id="allform">
  <h1>Add Useres</h1>
  <span id="x"  onclick='CloseFormusers()'>x</span>
  <form>
<div>      <input type="text " placeholder="fullName" id="fullName">
<input type="text " placeholder="Email" id="email"> </div>
<div>        <input type="text " placeholder="image" id="image">
<input type="text " placeholder="phone" id="phone"></div>
  </form>
  <button onclick='adduseres()' class="save">Save</button>
  
  
</div>
  
  ` 
   document.querySelector(`#adduseres`).setAttribute("style", "display:block !important")
}
const adduseres= () => {
  
  let image = document.getElementById("image").value;
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  
  fetch('http://localhost:8000/Users', {

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    , body: JSON.stringify({
      image: image,

      fullName: fullName ,
      email:email,
      phone: phone
    })

  }).then(res => { console.log(res); window.location.reload() })
}


let f1="";
const searchproducts=(id)=>{
f1=document.querySelector(`#${id}`).textContent;

getproducts()
}

const getproducts= () => {

  fetch('http://localhost:8000/Products').then(res => res.json()).then(data => {
    all = data;


    document.querySelector('#showproducts').innerHTML = all.filter(x => x.title.includes(f1)).map((el)=>(
      `
   <div class="viewproducts">
                <div id="photoView">
                <img src="${el.image}" alt="">
                </div>
               
                <h4>${el.title}</h4>
                <h4>${el.description}</h4>
                <h4>${el.price}</h4>
                <div id="buttonb">
                  <button    onclick ='deletproducts(${el.id})'  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg></button>
                  <button onclick ='modalUpproducts(${JSON.stringify(el)})' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                </svg></button>
             
                </div>
               
           
              </div>
              `
   ) )

      .join(" ");

})  }
const deletproducts =(id) => {
  fetch(`http://localhost:8000/Products/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }


    }).then(res => console.log(res), window.location.reload())
}


const isCloseproducts = () => {
  document.querySelector(`#upmod3`).setAttribute("style", "display:none !important")
}
    
const modalUpproducts=(el)=>{
  document.getElementById("upmod3").innerHTML =`
  <div id="allform">
  <h1>Update Products</h1>
  <form >
  <span id='x' onclick='isCloseproducts()'>X</span>
      <div>
      <input type="text" value="${el.title}"  id="title3">
      <input type="text" value="${el.image}" id="image3"></div>
      <div>  
       <input type="text"  value="${el.price}" id="price3">
          <input type="text"  value="${el.description}" id="description3">
       
      
      </div>  <div> <input type="text"  value="${el.cath}" id="cath3">  </div>  
  </form> 
     
  <button  onclick ='uppproducts(${el.id})'  class='save' >save</button>
</div>
  `
  document.querySelector(`#upmod3`).setAttribute("style", "display:block !important")


}

//update products:
const uppproducts= (id) => {
  let image = document.getElementById(`image3`).value;
  lettitle = document.getElementById(`title3`).value;
  let price= document.getElementById(`price3`).value;
  let description = document.getElementById(`description3`).value;
  let cath = document.getElementById(`cath3`).value;
  fetch(`http://localhost:8000/Products/${id}`, {

    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    , body: JSON.stringify({
      image: image,
      description: description,
      title: title,
      price:price,
      cath:cath
    })

  }).then(res => { console.log(res); window.location.reload() })
}



const CloseFormproducts = (el) => {
  document.querySelector(`#addproducts`).setAttribute("style", "display:none !important")
}
const OpenFormproducts = (el) => {

  let x=document.querySelector('#addproducts').innerHTML = `

  <div  id="allform">
  <h1>Add Products</h1>
  <span id="x"  onclick='CloseFormproducts()'>x</span>
  <form>
<div>      <input type="text " placeholder="title" id="title">
<input type="text " placeholder="description" id="description"> </div>
<div>        <input type="text " placeholder="image" id="image">
<input type="text " placeholder="price" id="price"></div>
<div>       
<input type="text " placeholder="cath" id="cath"></div>
  </form>
  <button onclick='addproducts()' class="save">Save</button>
  
  
</div>
  
  ` 
   document.querySelector(`#addproducts`).setAttribute("style", "display:block !important")
}
const addproducts= () => {
  
  let image = document.getElementById(`image`).value;
  let title = document.getElementById(`title`).value;
  let price = document.getElementById(`price`).value;
  let description = document.getElementById(`description`).value;
  let cath = document.getElementById(`cath`).value;
  
  fetch('http://localhost:8000/Products', {

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    , body: JSON.stringify({
      image: image,
      description: description,
      price: price,
      title:title,
      catg:cath
    })

  }).then(res => { console.log(res); window.location.reload() })
}

let co=""
searchcontact=()=>{
co=document.getElementById("searchInputContact").value;
getcontacts()
}



const deletcontact =(id) => {
  fetch(`http://localhost:8000/Contacts/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }


    }).then(res => console.log(res), window.location.reload())
}



const getcontacts= () => {

  fetch('http://localhost:8000/Contacts').then(res => res.json()).then(data => {
    all = data;


    document.querySelector('#showcontacts').innerHTML = all.filter(x=>x.fullName.includes(co)).map((el)=>(
      `
      
      <div class="contactCard">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            <div class="content">
           <div>   <h1>${el.fullName}</h1>     <button  onclick ='deletcontact(${el.id})' ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
              class="bi bi-trash3" viewBox="0 0 16 16">
              <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg></button></div>
              <h3><span class="mail">Email :</span> ${el.email}</h3>
              <h3><span class="number">Phone :</span> ${el.phone}</h3>
              <p> ${el.fullName} ${el.info}</p>
            </div>
      </div>
    
      
  
              `
   ) )

      .join(" ");

})  }


















  