// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let col = $('#input_width').val();
	let row = $('#input_height').val();
	$('#pixel_canvas td').remove();
	$('#pixel_canvas tr').remove();
	for(let i = 1; i <= row; i++) {
		$('#pixel_canvas').append('<tr></tr>');
	}
	for(let i = 1; i <= col; i++) {
		$('#pixel_canvas tr').append('<td></td>');
	}
}

function makeColor() {
	/**/
}

function reset() {
	/**/
}

$('#input_width,#input_height').on('change',makeGrid);
$('#input_reset').click(reset);