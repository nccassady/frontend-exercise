import React from 'react'
import './App.css'
import Products from './components/products.js'
import Categories from './components/categories.js'
import ResultsPerPage from './components/resultsPerPage.js'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedCategories: [],
			maxResults: 25
		}
	}

	updateResultsPerPage(event) {
		var newMaxResults = event.target.value
		this.setState({
			maxResults: newMaxResults
		})
	}

	updateCategoryFilters(event) {
		const categoryId = event.target.getAttribute('name')
		if (event.target.checked) {
			this.setState({
				selectedCategories: this.state.selectedCategories.concat(categoryId)
			})
		} else {
			this.setState({
				selectedCategories: this.state.selectedCategories.filter(
					function(category) {
						return category !== categoryId
					}
				)
			})
		}
	}

	render() {
		return (
			<div className="App">
				<div className="filters">
					<ResultsPerPage
						updateResultsPerPage={this.updateResultsPerPage.bind(this)}
						maxResults={this.state.maxResults} />
					<Categories 
						updateCategoryFilters={this.updateCategoryFilters.bind(this)} />
				</div>
				<Products 
					categoryList={this.state.selectedCategories}
					maxResults={this.state.maxResults} />
			</div>
		);
	}
}

export default App;
