const Edit = document.querySelectorAll('.input-dados');
const button = document.querySelector('#btn-login');
//Pegar o evento de focar nos Edit e adicionar a classe active na Label
Edit.forEach((e)=>{
    e.addEventListener('focus',({target})=>{
      const span = target.previousElementSibling;
      span.classList.add('active');
    })
    e.addEventListener('blur',({target})=>{
      const span = target.previousElementSibling;
      if(target.value.length === 0){
        span.classList.remove('active');
      }
    })
    e.addEventListener('blur', ()=>{
      let disabled = false;
      Edit.forEach((e)=>{
        if(e.value.length === 0){
          disabled = true;
        }
        
      })
      if(!disabled){
          button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', '');
      }
    })
})