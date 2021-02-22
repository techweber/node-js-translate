const translate = require('translate');

async function translateString( str, translateTo ) {

	translate.engine = 'libre';
	const translated_string = await translate(str, translateTo);
	console.log(translated_string);

}

// English to Spanish
translateString('Hello World', "ru");

