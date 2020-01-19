import React from 'react'
import { requestBuilder, client } from './api.js'

class Categories extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: {}
		}
	}

	componentDidMount() {
		this.getCategories().then(response => 
			this.setState({
				categories: response.body.results
			})
		)
	}

	getCategories() {
		const categoriesUri = requestBuilder.categories
			.build()

		const categoriesRequest = {
			uri: categoriesUri,
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}
		}

		return client.execute(categoriesRequest)
	}

	render() {
		return (
			<form onChange={this.props.updateCategoryFilters}>
				{Object.keys(this.state.categories).map(category =>
					<div key={this.state.categories[category].id} >
						<input
							type="checkbox"
							name={this.state.categories[category].id}/>
						<label htmlFor={this.state.categories[category].id}>{this.state.categories[category].name.en}</label>
					</div>
				)}
			</form>
		)
	}
}

export default Categories