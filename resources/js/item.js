

//   let items = function (){
//     const item = {
      
//     };

//     const setItem = function (){

//     }

//   }



// document.addEventListener('load',()=>{
  
// });

const items = new Array();


const item = {
      
};


let a = document.querySelector("");
a.addEventListener('click',()=>{
  const item = {
      a: ""
  };
  item.a = document.querySelector("#project-contents").value; 
  addItems(item);
})

const addItem = function(i) {
  items.push(item);
  makeDom([item],false);
}

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener('click',()=>{
  let searchInput = document.querySelector("#searchInput");
  const sh = items.map((e)=>{e.title == searchInput.value});
  makeDom(sh,true);
})

const makeDom = function(i,reload){
  const sections = document.querySelector(".section-container");
  //reload 참이면 sections 안에 내용 날리는거 필요
  i.forEach(element => {
    
  sections.append(`
  <div class="item">
  <div class="item-header">
      <span class="item-header-title">
          ${element.title}
      </span>
  </div>
  <div class="item-contents">
      <span class="cont">이런저런 이야기</span>
  </div>
  <div class="item-cp-box">
      <span class="item-cp-box-title cpc-green">
          WHATSTHIS?
      </span>
  </div>
  <div class="item-clip">
      <div class="clip-file fc-darkwhite">
          <i class="fa-solid fa-file cc"></i>
          <span class="file-count">3</span>
      </div>
      <div class="clip-link fc-pink">
          <i class="fa-solid fa-flag cc"></i>
      </div>
      <div class="clip-time fc-darkwhite">
          <i class="fa-solid fa-clock"></i>
          <span class="time-string">11-28</span>
      </div>
  </div>
</div>
  `);
  });
}


// 모달창 토글

// 검색

// items로 setion-container 리스트 만드는 함수 필요