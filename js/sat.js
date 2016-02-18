
function get2urlphp(url,va)
{
	window.location = url + "?" + va;
	
}

function get2url(url)
{
	window.location = url;
	
}


function encrypt_low(number)
{
	var d = new Date();
	var n = d.getTime();

	seconds = n/1000;

	return(number+seconds);
}



function fetch(id)
{
	var x = document.getElementById(id);
	return x;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function createx(what,name,classm,linkto)
{
	var h1 = document.createElement(what);
	h1.setAttribute("id",name);
	h1.setAttribute("class",classm);
	var x = document.getElementById(linkto);
	x.appendChild(h1);
	return name;

}


function create(what,linkto)
{
	if(linkto == "#body")
	{
	var h1 = document.createElement(what);
	value = Math.floor((Math.random() * 1000) + 1);
	h1.setAttribute("id",value);
	//var x = document.getElementById(linkto);
	//x.appendChild(h1);
	document.body.appendChild(h1);
	return(value);

	}
	else
	{
	//what = '"' + what + '"';
	//linkto = '"' + linkto + '"';linkto
	var h1 = document.createElement(what);
	value = Math.floor((Math.random() * 1000) + 1);
	h1.setAttribute("id",value);
	var x = document.getElementById(linkto);
	x.appendChild(h1);
	return(value);
	}

}


function createimg(image,linkto)
{
	var imgx = create("img",linkto);
	setinside(imgx,"src",image);
	return imgx;
}

function createa(ref,linkto)
{
	var imgx = create("img",linkto);
	setinside(imgx,"href",ref);
	return imgx;
}

function setinside(what,which,value)
{
	var x = document.getElementById(what);
	x.setAttribute(which,value);
	return true;
}

function setlink(css,linkto)
{
	if(linkto == "#body")
	{
		var xy = document.createElement("link");
		xy.setAttribute("rel","stylesheet");
		value = Math.floor((Math.random() * 1000) + 1);
		xy.setAttribute("id",value);
		xy.setAttribute("type","text/css");
		xy.setAttribute("href",css);
		
		document.body.appendChild(xy);
		return(value);
	}
	else
	{
	var xy = create("link",linkto);
	setinside(xy,"rel","stylesheet");
	setinside(xy,"type","text/css");
	setinside(xy,"href",css);
	return(xy);
   }


}

function changeid(what,to)
{
	var x = document.getElementById(what);
	x.setAttribute("id",to);
	return what;
}

function changeclass(what,to)
{
	var x = document.getElementById(what);
	x.setAttribute("class",to);
}

function sethtml(what,value)
{
	//var x = document.getElementById(what);
	var y = fetch(what);
	y.innerHTML = value;
}

function appendhtml(what,value)
{
	//var x = document.getElementById(what);
	var y = fetch(what);
	y.innerHTML += value;
}




function createdivx(app)
{
	var h1 = document.createElement("div");
	value = Math.floor((Math.random() * 1000) + 1);
	h1.setAttribute("id",value);
	var h2 = document.getElementById(app);
	h2.appendChild(h1);
	return(value);

}




function creatediv()
{
	var h1 = document.createElement("div");
	value = Math.floor((Math.random() * 1000) + 1);
	h1.setAttribute("id",value);
	//var h2 = document.getElementById(app);
	document.body.appendChild(h1);
	return(value);

}


function createbody()
{
	var h1 = document.createElement("BODY");
	value = Math.floor((Math.random() * 1000) + 1);
	h1.setAttribute("id",value);
	//var h2 = document.getElementById(app);
	//document.body.appendChild(h1);
	return(value);

}

function rand(bottom,top)
{
	value = Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
	return(value);
}


function refreshpage()
{
	location.reload();
}

function hide(get_id)
{
	var item =  document.getElementById(get_id);
	item.style.display = 'none';
	//item.style.fontWeight="";
}

function show(get_id)
{
	var item =  document.getElementById(get_id);
	item.style.display = 'block';
	//item.style.fontWeight="bold";

}

function boldt(get_id)
{
	item =  document.getElementById(get_id);

	
	if (item.style.fontWeight != 'bold')
	{
		item.style.fontWeight = '';
	}
	else{
		item.style.fontWeight = 'bold';
	}
}

function toggledisplay(get_id)
{
	var item =  document.getElementById(get_id);

	
	if (item.style.display != 'none')
	{
		item.style.display = '';
	}
	else{
		item.style.display = 'none';
	}
}


function post(parameters,upload_url,callback)
{
	var xhr = new XMLHttpRequest();
            xhr.open('POST', upload_url, false);
            

		xhr.setHeader('Access-Control-Allow-Origin', "http://localhost:8000');

        xhr.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        xhr.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            xhr.onreadystatechange = function() {
            if (this.readyState == 4){
                if (this.status == 200) {
                	 callback(this.responseText);
                     }else if (this.status >= 400) {
                        callback("Problem");
                }
            }
            }

        xhr.send(parameters);
}

function quickmail(){
	this.sendto = "";
	this.from = "";
	this.username = "";
	this.password = "";
	this.server = "";
	this.encryption = "tls";
	this.mailport = "587";
	this.mailtitle = "";
	this.mailsubject = "";
	this.mailbody = "";
	this.send = function send(){
		var parameters = "to="+this.sendto+"&from="+this.from+"&user="+this.username+"&pass="+this.password+"&host="+this.server+"&encryption="+this.encryption+"&portm="+this.mailport+"&main="+this.mailtitle+"&subject="this.mailsubject+"&body="+this.mailbody;
		function callback(response){
			alert(response);
		}
		post(parameters,"http://izifiso.com/satmail/trymail.php",callback);
	}
}