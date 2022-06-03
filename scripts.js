const Edit = document.querySelectorAll('.input-dados');

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
})