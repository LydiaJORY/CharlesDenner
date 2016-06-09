window.onload = function () {

	var parallaxBox = document.getElementById ( 'parallaxeWrap' );


	/**
	 * Image premier plan
	 */
	var c1 = document.getElementById ( 'l1' );
	var c1left = c1.offsetLeft;
	var c1top = c1.offsetTop;

	/**
	 * Image second plan
	 */
	var c2 = document.getElementById ( 'l2' );
	var c2left = c1.offsetLeft;
	var c2top = c1.offsetTop;

	/**
	 * Image 3ème plan
	 */
	var c3 = document.getElementById ( 'l3' );
	var c3left = c1.offsetLeft;
	var c3top = c1.offsetTop;


	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		/**
		 * On parallaxe les éléments qu'on veut
		 * en précisant la speed (dernier paramètre)
		 */
		mouseParallax (c1, c1left, c1top, x, y, 15 );
		mouseParallax (c2, c1left, c1top, x, y, 35 );
		mouseParallax (c3, c1left, c1top, x, y, 50 );
	}
	
}

function mouseParallax ( obj, left, top, mouseX, mouseY, speed ) {
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}
