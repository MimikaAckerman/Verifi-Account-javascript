//creamos una constante que seleccionara todos los apartados que declaramos en los inputs junto con su clases que llamamos code
const codes = document.querySelectorAll('.code')
    codes[0].focus() //enfocamos el elemento 

    //podemos ver que nos trae cada uno de los inputs que declaramos en el index.html
    console.log(codes);

    codes.forEach((code,idx) => {
        //creamos un evento
        code.addEventListener('keydown' ,(e) =>{
            //realizamos una condicional en la cual 
            if(e.key >= 0 && e.key <= 9){
                codes[idx].value =''
                setTimeout(() => codes[idx + 1].focus(),10)
            }else if (e.key === 'Backspace'){
                setTimeout(() => codes[idx -1].focus(),10)

            }
        })        
    });