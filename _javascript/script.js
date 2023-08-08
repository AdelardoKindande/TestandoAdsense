var hamburguer = document.querySelector(".menu-btn");

hamburguer.addEventListener("click", function(){
     document.querySelector(".sidebar").classList.toggle("show-menu");
});

const searchWapper = document.querySelector('.search');
const inputBox = searchWapper.querySelector('input');
const pesquiBox = searchWapper.querySelector('.list');
const icon = searchWapper.querySelector('.icon');
let linkTag = searchWapper.querySelector('a');
let webLink;

inputBox.onkeyup =(e) =>{
     let userData = e.target.value;
     let emptyArrey = [];

     if(e.key === 'Enter' ){
          if(userData){
               window.open(`https://adelardokindande.github.io/search?q${userData}`, '_Blank');
          }
     }

     if(userData){
          icon.onclick = ()=>{
               webLink = `https://adelardokindande.github.io/search?q${userData}`; 
               linkTag.setAttribute('href', webLink);
               linkTag.click();
          }

          emptyArrey = pesquisa.filter((data) => {
               return data.toLocalleLowerCase().startWitch(userData.toLocalleLowerCase());
          });

          emptyArrey = emptyArrey.map((data)=>{
               return data = `<li>${data}</li>`;
          });

          searchWapper.classList.add('active');
          ShowPesquisa(emptyArrey);
          let allList = pesquiBox.querySelectorAll('li');
          for (let i = 0; i < allList.length; i++) {
               allList[i].setAttribute('onclick', 'select(this)');
               
          }
          
     }

     function select(element){
     let selectData = element.textContent;
     inputBox.value = selectData;
     icon.onclick = ()=>{
          webLink = `https://adelardokindande.github.io/search?q${selectData}`; 
          linkTag.setAttribute('href', webLink);
          linkTag.click();
     }

     searchWapper.classList.remove('active');
   }
}


  function ShowPesquisa(list){
     let listData;
     if(!list.lenght){
          userValue = inputBox.value;
          listData = `<li>${userData}</li>`
     }else{
          listData = list.join('');
     }

     pesquiBox.innerHTML = listData;
     }
