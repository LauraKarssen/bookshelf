/*
	file: 	assignment-1: bookshelf.js
	desc: 	simple script that matches incoming arguments (--title, --author, --kind and --price) 
			with a simple database
	author: laurakarssen
	date: 	08/11/16
*/


// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of books
var book1_title = "Extremely Loud and Incredibly Close";
var book1_author = "Jonathan Safran Foer";
var book1_kind = "Paperback";
var book1_price = "10";

var book2_title = "A Brief History of Time";
var book2_author = "Stephen Hawking";
var book2_kind = "Paperback";
var book2_price = "13.99";

var book3_title = "The Age of Absurdity: Why Modern Life Makes it Hard to be Happy";
var book3_author = "Michael Foley";
var book3_kind = "Paperback";
var book3_price = "12.99";

var book4_title = "To Kill a Mockingbird";
var book4_author = "Harper Lee";
var book4_kind = "Paperback";
var book4_price = "9.50";

var book5_title = "The Power of Now: A Guide to Spiritual Enlightenment";
var book5_author = "Eckhart Tolle";
var book5_kind = "Trade Paperback";
var book5_price = "15.99";

// initialise program (aka commander) 
program
  .version('0.0.1')
  .option('-t, --title [value]', 'Title of the book to match', 'empty') //What does the 'empty' do?
  .option('-a, --author [value]', 'Author of the book to match', 'empty')
  .option('-k, --kind [value]', 'Kind of the book to match', 'empty')
  .option('-p, --price [value]', 'Price of the book to match', 'empty')
  .parse(process.argv);	// I don't really know what this is							

// match value of input's "title" argument
switch(program.title)
{
	case book1_title:
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_kind);
		console.log(book1_price);
		break;
	case book2_title:
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_kind);
		console.log(book2_price);
		break;
	case book3_title:
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_kind);
		console.log(book3_price);
		break;
	case book4_title:
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_kind);
		console.log(book4_price);
		break;
	case book5_title:
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_kind);
		console.log(book5_price);
		break;
	//default:
	//	console.log(program.title); 
	//	break; 
	// I didn't know how to create a 'general' default that would appear if the input wouldn't match with anything, WITHOUT giving 4 'No Matches'
}

// match value of input's "author" argument
switch(program.author)
{
	case book1_author:
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_kind);
		console.log(book1_price);
		break;
	case book2_author:
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_kind);
		console.log(book2_price);
		break;
	case book3_author:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_kind);
		console.log(book3_price);
		break;
	case book4_author:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_kind);
		console.log(book4_price);
		break;
	case book5_author:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_kind);
		console.log(book5_price);
		break;
	//default:
	//	console.log(program.author); 
	//	break;
}

// match value of input's "kind" argument
switch(program.kind)
{
	case book1_kind:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_kind);
		console.log(book1_price);
		//break;
		//nobreak because of multiple paperbacks
	case book2_kind:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_kind);
		console.log(book2_price);
		//break;
	case book3_kind:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_kind);
		console.log(book3_price);
		//break;
	case book4_kind:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_kind);
		console.log(book4_price);
		break;
	case book5_kind:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_kind);
		console.log(book5_price);
		break;
	//default:
	//	console.log("No Match...");
	//	break;
}

// match value of input's "price" argument
switch(program.price)
{
	case book1_price:
		// input match book1
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_kind);
		console.log(book1_price);
		break;
	case book2_price:
		// input match book2
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_kind);
		console.log(book2_price);
		break;
	case book3_price:
		// input match book3
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_kind);
		console.log(book3_price);
		break;
	case book4_price:
		// input match book4
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_kind);
		console.log(book4_price);
		break;
	case book5_price:
		// input match book5
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_kind);
		console.log(book5_price);
		break;
	//default:
	//	console.log("No Match...");
	//	break;
}
