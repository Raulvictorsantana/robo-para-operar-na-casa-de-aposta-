

//  div 'btn' foi pego direto do browser para funcionar em outros sites precisa alterar a div para o botão que aposta e para a aposta  
document.querySelectorAll('.btn btn-success bet font-family-title ng-star-inserted').forEach((item, index) => {
  setTimeout(() => {
		if(!item.classList.contains('.btn btn-success bet font-family-title ng-star-inserted')){
        	item.click();
        	contador++;
			
		} else { 
		return false;
    }// A cada 20 segundo o programa aperta para aposta e parar a aposta apos mais 20 segundos
  }, index * 20000);
});


