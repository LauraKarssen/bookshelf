// Assignment 2 made by Laura Karssen
// 10179526
// Randomized excuse letter based on the love-letter concept


var chance = require('chance').Chance(); // npm install --save chance
var wrap = require('word-wrap') // npm install --save word-wrap

const greeting = ['Mr, ', 'Mrs, ', 'Miss, ', 'Ms, '];
const adjectives = ['really', 'genuinely', 'honestly', 'legitimately', 'truly', 'admittedly', 'unquestionably', 'definitely', 'positively', 'rightly', 'surely', 'sincerely', 'very much', 'devotedly'];
const verbs = ['want', 'need', 'wish', 'long', 'demand', 'crave', 'fancy', 'hunger', 'require', 'yearn', 'thirst'];
const show = ['to give', 'to accord', 'to award', 'to deliver', 'to donate', 'to grand', 'to hand out', 'to hand over', 'to present', 'to provide'];
const adjective = ['sincerest', 'candid', 'genuine', 'heartfelt', 'earnest', 'forthright', 'honest', 'legitimate'];
const sorry = ['apologies', 'amends', 'atonement', 'concession', 'excuse', 'justification', 'redemption', 'reparation', 'penance'];
const verb = ['did', 'accomplished', 'achieved', 'completed', 'concluded', 'created', 'executed', 'operated', 'performed', 'prepared', 'produced'];
const describe = ['unforgivable', 'contemptible', 'deplorable', 'disgraceful', 'indefensible', 'outrageous', 'shameful', 'unconscionable', 'unjustifiable', 'untenable', 'inexpiable', 'wrong'];
const aspiration = ['hope', 'anticipate', 'assume', 'believe', 'cherish', 'wish', 'aspire', 'await', 'desire', 'foresee', 'pray', 'presume', 'suppose', 'suspect', 'trust', 'deem likely', 'have faith', 'keep my fingers crossed'];
const help = ['forgive', 'absolve', 'condone', 'excuse', 'forget', 'overlook', 'bear with', 'bury the hatchet for', 'kiss and make up with', 'laugh off with', 'accept the apology for', 'let it go for'];
const end = ['Kind', 'Affectionate', 'Amiable', 'Compassionate', 'Considerate', 'Cordial', 'Courteous', 'Friendly', 'Gentle', 'Loving'];
const ing = ['Commendations', 'Compliments', 'Deference', 'Devoirs', 'Greeting', 'Salutation', 'Regards', 'Salutations', 'Good Wishes', 'Love and Kisses'];

//Picks a random element from an array
function choice(array) {
		var index = chance.natural({'min': 0, 'max': array.length - 1});
		return array[index];

}

//Randomly picks or not a random element from an array
function maybe(array) {
		if( chance.bool() ) {
			return choice(array);
		} else {
			return '';
		}
}

//Generates a short phrase consisting of randomly chosen adjectives and nouns
function short() {
			return 'Dear ' + choice(greeting) + 'I ' + choice(verbs) + ' ' + choice(show) + ' ' + 'my ' + choice(sorry) + '. ' + 'What I ' + choice(verb) + ' was ' + choice(describe) + '. ' + 'I ' + choice(aspiration) + ' that you will ' + choice(help) + ' me. ' + choice(end) + ' ' + choice(ing) + '. ' ;
}

//Generates a sentence composed of randomly, or not, chosen adjectives and nouns
function long() {
			return 'Dear ' + choice(greeting) + 'I ' + maybe(adjectives) + ' ' + choice(verbs) + ' ' + choice(show) + ' ' + 'my ' + maybe(adjective) + ' ' + choice(sorry) + '. ' + 'What I ' + choice(verb) + ' was ' + choice(describe) + '. ' + 'I ' + choice(aspiration) + ' that you will ' + choice(help) + ' me. ' + choice(end) + ' ' + choice(ing) + '. ' ;
}

// --- Format output ---
// Header
console.log('\n');

// Single string
var text = '';

// Loop generating 3 sentences
for(var i = 0; i<3; i++) {
	text += long();
}

// 65 characters
console.log(wrap(text, {'width': 50}));

// Footer
console.log('\n');
