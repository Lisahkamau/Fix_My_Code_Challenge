#!/usr/bin/env node

function printSquare(size) {
	    for (let i = 0; i < size; i++) {
		            let row = '';
			            for (let j = 0; j < size; j++) {
					                row += '#';
							        }
				            console.log(row);
					        }
}

// Read the command-line argument
const size = process.argv[2];

// Check if size is provided
if (!size || isNaN(parseInt(size))) {
	    console.log('Usage: ./1-print_square.js <size>');
} else {
	    printSquare(parseInt(size));
}

