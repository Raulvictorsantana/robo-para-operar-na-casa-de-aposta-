


document.querySelectorAll('.btn btn-success bet font-family-title ng-star-inserted').forEach((item, index) => {
  setTimeout(() => {
		if(!item.classList.contains('.btn btn-success bet font-family-title ng-star-inserted')){
        	item.click();
        	contador++;
			
		} else { 
		return false;
    }
  }, index * 20000);
});