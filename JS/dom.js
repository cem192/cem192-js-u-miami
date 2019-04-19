//Task #1

function addTags(){
	var meta = document.createElement("META");
	meta.setAttribute("charset","UTF-8");

	var title = document.createElement("TITLE");
	var node = document.createTextNode("Working with DOM");
	title.appendChild(node);

	document.head.appendChild(meta);
	document.head.appendChild(title);
}
    


//Task #2
function addTags(){

	var h1 = document.createElement("H1");
	var h1node = document.createTextNode("Working with the DOM");
	h1.appendChild(h1node);

	var p = document.createElement("P");
	var pnode = document.createTextNode("This is so much fun!");
	p.appendChild(pnode);

	document.body.appendChild(h1);
	document.body.appendChild(p);



}

// Task #3
function addTags(){

    var ul = document.createElement('ul');

    info = ["HTML","CSS","Javascript"];

    document.body.appendChild(ul);
    info.forEach(addItems);

    function addItems(element, index, arr) {
        var li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML=li.innerHTML + element;
        }
}
