var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0; ;
var questions = [
	["What kind of R.V. do Walt and Jesse cook meth in ?","A Winnebago","A Bounder","A Dutchmen","B"],
	["Saul’s goons are called ?","Hugo and Clyde","Huell and Kuby","Joel and Cubert","B"],
	["Why does Tuco freak out and beat one of his men to death in the junkyard at the end of season one?","The guy spoke for tuco","The guy sampled the blue meth","The guy wore Heisenbergs hat","A"],
    ["Who was poisoned with ricin?","Brock","Ted Beneke","No one","C"],
	["Who was originally set to die by the end of season one?","Hank","Jesse","Walt","B"],
	["Saul consistently invokes this phrase-as-location:","Schmuck City","Shit Creek","Mount Doom","B"],
    ["How many victims died in the Wayfarer 515 plane crash?","52","113","167","C"],
	["Jesse’s special brand of meth is called…","Rabid Dog","Chili P","Cayenne G","B"],
	["Which of Jesse’s acquaintances can play piano?","Badger","Skinny Pete","Combo","B"],
    ["BrBa has referenced this famous poet numerous times:","Rober Frost","Walt Whitman","Robert Browning","B"],
	["What’s Walt’s middle name?","Hartley","Hartwell","Harvey","B"],
	["Breaking Bad has been nominated for Outstanding Drama Series four times at the Emmys. How many has times has it won?","Once","Twice","Thrice","A"],
    ["Who does Declan the drug dealer look like, according to one of Todd’s neo-Nazi uncles?","The Hulk","The Rock","Wolverine","C"],
	["What was Mike Ehrmantraut’s career before working with Gus Fring?","Police officer","Bouncer","Lawyer","A"],
	["What’s Jesse’s old dream?","To be a chef","To be an artist","To be a surfer","B"],
    ["Saul’s birth name was…","Saul McGill","Saul McCormick","Saul McKay","A"],
	["Lydia Rodarte-Quayle helps Walt expand his empire overseas by shipping meth to…","Belize","Romania","Czech Republic","C"],
	["Which dream of Skyler’s do we learn went unrealized?","Going to Cancun","Being a writer","Owning a business","B"],
    ["What drug do we NOT see Jesse use?","Heroin","Ecstasy","Weed","B"],
    ["When Walt retired from the meth game, how much money did he walk away with?","4 million","80 million","1 billion","B"]
];

function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		alert("Correct!");
		correct++;
	}
	 else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos][4]);
    } 
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);