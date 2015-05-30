
$(document).ready(function() {
	Init();
});

function Init() {
	var result = generateIndex();
	createIndex(result);
}
function createIndex(items) {
	for(var i = 0; i < items.count; i++) {
		$('#sidecontainer').first('#index').append('<div class="indexitem"> <a href="#">' + items[i].text + '</a> </div>');
	}
	
}

function generateIndex() {
	var index = [];
	var posts = $('.postheadertext');
	var total = posts.count;
	posts.each(function(p) {
		var current = new indexItem(p.html(), null);
		index[index.length + 1] = current;
	});
	
	return index;
}

var indexItem = function(title, link) {
	this.title = title;
	this.link = link;
}