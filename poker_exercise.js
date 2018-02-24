// Poker hand function "isStraightFlush"
// (Ok, so histograms turned out to be unwieldy, at least for this hand type.)

var ranks = ['2', '3', '4', '5','6', '7','8', '9','10', 'J','Q','K','A'];
// var suits = ['diamonds', 'hearts', 'clubs', 'spades'];
	

var hand1 = [{ 'suit': 'hearts', 'rank': '10'}, 
	    { 'suit': 'hearts', 'rank': 'J'},
	    { 'suit': 'hearts', 'rank': 'A'},
	    { 'suit': 'hearts', 'rank': 'Q'},
	    { 'suit': 'hearts', 'rank': 'K'}
	   ];

var hand2 = [{'suit': 'diamonds', 'rank': '6'},
	     {'suit': 'clubs', 'rank': 'A'},
	     {'suit': 'spades', 'rank': 'Q'},
	     {'suit': 'spades', 'rank': '2'},
	     {'suit': 'hearts', 'rank': '4'}
	     ];

// sort by the index of our rank array, descending   
function compare(a, b) {
    return ranks.indexOf(b.rank) - ranks.indexOf(a.rank);
}


function isFlush (h) {    
    h.sort(compare);
    if (h.length == 5 && h[0].suit == h[h.length - 1].suit) {
	return true;
    }
    return false;
}

function NinaRow (h, n) {
    h.sort(compare);
    if (n > h.length) {
	return false;
    }
    let c = 0;
    for(i = 0; i <= h.length -2; i++) {       
	let diff = ranks.indexOf(h[i].rank) - ranks.indexOf(h[i+1].rank);
	 if (diff == 1) {
	    c++;
	    if (c == n -1) {
		return true;
	    }
	}
	else {
	    return false;
	}
    }
}

function isStraightFlush(h) {
    if (isFlush(h) && NinaRow(h,5)) {
	return true;
    }
    else {
	return false;
    }
}
console.log('Hand number 1 ... is it a StraightFlush?');
console.log(hand1);
console.log(isStraightFlush(hand1));
console.log('Hand number 2 ... is it a StraightFlush?');
console.log(hand2);
console.log(isStraightFlush(hand2));
