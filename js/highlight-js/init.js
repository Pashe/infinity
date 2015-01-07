$(document).ready( function() {	
	hljs.configure({useBR: true});
	
	$("pre code").each(function() {
		hljs.highlightBlock(this);
	});
});