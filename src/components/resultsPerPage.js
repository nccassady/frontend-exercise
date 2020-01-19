import React from 'react'

class ResultsPerPage extends React.Component {
	render() {
		return(
			<div>
				<label htmlFor="maxResults">Max results per page</label>
				<input name="maxResults" value={this.props.maxResults} onChange={this.props.updateResultsPerPage}/>
			</div>
		)
	}
}

export default ResultsPerPage