	var a = new Array (4);
	   	 a[0]= 1500;
	   	 a[1]= 500;
	   	 a[2]= 1800;
	   	 a[3]= 700;
	 var l = new Array (4);
	   	 l[0]= 2500;
	   	 l[1]= 1500;
	   	 l[2]= 1000;
	   	 l[3]= 900;	
	 var x = a[0]+a[1]+a[2]+a[3];
	 var y = l[0]+l[1]+l[2]+l[3];
	 var aa = x/4;
	 var an = y/4;
	 var rs = aa/4;	

	document.getElementById("aa").innerHTML = aa;
	document.getElementById("al").innerHTML = an;

	if 	 (aa > an ){
		document.getElementById("result").innerHTML = rs ;
		document.getElementById("text").innerHTML = "<span>London</span> will be more affordable than <span>Amsterdam</span> for the New Years celebration Difference in price";
	}
	else{
		document.getElementById("result").innerHTML = rs ;
		document.getElementById("text").innerHTML = "<span>Amsterdam</span> will be more affordable than <span>London</span> for the New Years celebration Difference in price";
	}



