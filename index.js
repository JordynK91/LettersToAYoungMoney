class App extends React.Component{
	render(){
		return <div>
			<Title />
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

ReactDOM.render(
<App />,
document.getElementById('root')
)