
//Get modals
var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("button");
//get spans
var spans = document.getElementsByClassName("close");
//add function to buttons open modals
for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function () {
		modals[i].style.display = "block";
	}
}
for (let i = 0; i < spans.length; i++) {
	spans[i].onclick = function () {
		modals[i].style.display = "none";
	}
}

// set elements of message form
let nameIn = document.getElementById("nameIndex");
let emailIn = document.getElementById("emailIndex");
let contentIn = document.getElementById("contentIndex");
let messageIn = document.getElementById("messageIndex");
//check for values
function CheckFormElements() {
	if (nameIn.value == "") {
		throw "Name input is empty. Please enter your name.";
	}
	if (emailIn.value == "") {
		throw "Email input is empty. Please enter your email.";
	}
	if (messageIn.value == "") {
		throw "Please enter your message before send";
	}
}

//Function calls for element check and write to file functions then display a message to user 
function GenerateMessage() {
	try {
		CheckFormElements();
		saveFile();
		alert("Thank you for your message. We will contact you back as soon as possible. You can see downloaded copy of your message")

	} catch (error) {
		alert(error);
	}

}

// Saving message form to a file and download it as .txt file
let saveFile = () => {

	let data =
		'\r Your Message Send To Geo Lab ' + ' \r\n ' +
		'Name: ' + nameIn.value + ' \r\n ' +
		'Email: ' + emailIn.value + ' \r\n ' +
		'Content: ' + contentIn.value + ' \r\n ' +
		'Message: ' + messageIn.value;
	console.log(data);
	//Get date
	let today = new Date().toISOString().slice(0, 10);
	let date = "Message_" + today + ".txt"
	// Convert the text to BLOB.
	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = date;	   // The file to save the data.

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	}
	else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click();
}

// set elements of order form
let namefirst = document.getElementById("name");
let lastname = document.getElementById("lastname");
let organization = document.getElementById("organization");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let fax = document.getElementById("fax");
let address = document.getElementById("address");
let addresstwo = document.getElementById("address2");
let city = document.getElementById("city");
let region = document.getElementById("region");
let postalcode = document.getElementById("postalcode");
let country = document.getElementById("country");
let ts1 = document.getElementById("ts1");
let ts2 = document.getElementById("ts2");
let ts3 = document.getElementById("ts3");
let ts4 = document.getElementById("ts4");
let ts1d = document.getElementById("ts1-d");
let ts2d = document.getElementById("ts2-d");
let ts3d = document.getElementById("ts3-d");
let ts4d = document.getElementById("ts4-d");
let ts1k = document.getElementById("ts1-k");
let ts2k = document.getElementById("ts2-k");
let ts3k = document.getElementById("ts3-k");
let ts4k = document.getElementById("ts4-k");
let description = document.getElementById("description");

//function for check required elements in Order form
function CheckOrderElements() {
	if (namefirst.value == "" || lastname.value == "" || email.value == "" || phone.value == "" || address.value == "" || city.value == "" || postalcode.value == "" || city.value == "") {
		throw "Please fill required spaces in personal details (*)";
	}

}

let saveOrder = () => {
	try {
		CheckOrderElements();
		// Calculate total cost of order
		let total = (ts1.value * 80) + (ts2.value * 40) + (ts3.value * 100) + (ts4.value * 60) + (ts1d.value * 300) + (ts2d.value * 250)
			+ (ts3d.value * 325) + (ts4d.value * 275) + (ts1k.value * 40) + (ts2k.value * 40) + (ts3k.value * 100) + (ts4k.value * 40);
		// Prepare String data for order print
		let data =
			'\r Your Message Send To Geo Lab ' + ' \r\n ' +
			'Name: ' + namefirst.value + ' ' + lastname.value + ' \r\n ' +
			'Organization: ' + organization.value + ' \r\n ' +
			'Email: ' + email.value + ' \r\n ' +
			'Phonet: ' + phone.value + ' \r\n ' +
			'Fax: ' + fax.value + ' \r\n ' + ' \r\n ' +
			'Address: ' + address.value + ' \r\n ' +
			addresstwo.value + ' \r\n ' +
			'City: ' + city.value + ' \r\n ' +
			'Region: ' + region.value + ' \r\n ' +
			'Postal Code: ' + postalcode.value + ' \r\n ' +
			'Country: ' + country.value + ' \r\n ' + ' \r\n ' +
			'Your Order Details' + ' \r\n ' +
			'Thin section s' + ' \r\n ' +
			'50 mm x 75 mm = ' + ts1.value + " x $80" + ' \r\n ' +
			'27 mm x 46 mm = ' + ts2.value + " x $40" + ' \r\n ' +
			'Polished Thin section s' + ' \r\n ' +
			'50 mm x 75 mm = ' + ts3.value + " x $100" + ' \r\n ' +
			'27 mm x 46 mm = ' + ts4.value + " x $60" + ' \r\n ' + ' \r\n ' +
			'Description Thin section s' + ' \r\n ' +
			'50 mm x 75 mm = ' + ts1d.value + " x $300" + ' \r\n ' +
			'27 mm x 46 mm = ' + ts2d.value + " x $250" + ' \r\n ' +
			'Description Polished Thin section s' + ' \r\n ' +
			'50 mm x 75 mm = ' + ts3d.value + " x $325" + ' \r\n ' +
			'27 mm x 46 mm = ' + ts4d.value + " x $275" + ' \r\n ' + ' \r\n ' +
			'Kimberlites' + ' \r\n ' +
			'Thin Section = ' + ts1k.value + " x $40" + ' \r\n ' +
			'Wedged Thin Section = ' + ts2k.value + " x $40" + ' \r\n ' +
			'Polished = ' + ts3k.value + " x $100" + ' \r\n ' +
			'Core Slab = ' + ts4k.value + " x $40" + ' \r\n ' + ' \r\n ' +
			'Job Description' + ' \r\n ' +
			description.value + ' \r\n ' + ' \r\n ' +
			'Your total is = $' + total + ' + Tax';

		alert("Thank you for your order, please see order details in downloaded file. Please print a copy of order details and attach it to your mail. ")

		//Get date
		let today = new Date().toISOString().slice(0, 10);
		let date = "ORDER_" + today + ".txt"
		// Convert the text to BLOB.
		const textToBLOB = new Blob([data], { type: 'text/plain' });
		// The file to save the data.
		const sFileName = date;

		let newLink = document.createElement("a");
		newLink.download = sFileName;

		if (window.webkitURL != null) {
			newLink.href = window.webkitURL.createObjectURL(textToBLOB);
		}
		else {
			newLink.href = window.URL.createObjectURL(textToBLOB);
			newLink.style.display = "none";
			document.body.appendChild(newLink);
		}

		newLink.click();
	} catch (error) {
		alert(error);
	}

}


//Function for functionalty of slider and google map
(function ($, document, window) {

	$(document).ready(function () {
		//set slider in index page
		$(".hero").flexslider({
			directionNav: false,
			controlNav: true,
		});
		// set google map values in contact page
		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if (map.length) {

			map.gmap3({
				map: {
					options: {
						center: [latitude, longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker: {
					latLng: [latitude, longitude],
				}
			});

		}
	});

	$(window).load(function () {

	});

})(jQuery, document, window);


