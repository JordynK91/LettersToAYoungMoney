class App extends React.Component{
	render(){
		return <div>
			<Title />
			<Button/>
			<QuoteShuffle/>
			</div>
	}
}

function Title(){
	return(
	<div className = 'title'>
			<h1> Letters to a Young Money </h1>
			<h2> Drakefying Rilke and Rilkefying Drake </h2>
	</div>
)}


function Button(){
	return(
	<div className = 'button'>Click Me</div>
		)}


function QuoteShuffle(DrakeQuotesArray){
	var DrakeQuotesArray = ["Whole squad on that real shit", "Do you love this shit? Are you high right now? Do you ever get nervous?",
 "Drinking every night because we drink to my accomplishments", "I'mma worry 'bout me, give a fuck about you", "I might be too strung out on compliments. Overdosed on confidence. Started not to give a fuck and stopped fearing the consequence",
 "Live for today, plan for tomorrow, party tonight","It's hard to do these things alone Just hold on, we're going home"]
	for (i=0; i<DrakeQuotesArray.length, i++)
    var random = Math.floor(Math.random() * DrakeQuotesArray.length)
   	var randomQuote = DrakeQuotesArray[random]
}




ReactDOM.render(
<App />,
document.getElementById('root')
)