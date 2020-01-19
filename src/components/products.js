import React from 'react'
import { requestBuilder, client } from './api.js'
import Product from './product.js'

class Products extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: {},
			total: 0
		}
	}

	componentDidMount() {
		this.getProducts().then(response => {
					this.setState({
						products: response.body.results,
						total: response.body.total
					})
				})
	}

	componentDidUpdate(prevProps) {
		if ((this.props.categoryList !== prevProps.categoryList)
			|| (this.props.maxResults !== prevProps.maxResults)) {
			this.getProducts().then(response => {
				this.setState({
					products: response.body.results,
					total: response.body.total
				})
			})
		}
	}

	getProducts() {
		var productProjectionsUri
		var maxResults = parseInt(this.props.maxResults)
		if (this.props.categoryList.length > 0) {
			var categoryString = this.props.categoryList.map(x=>`"${x}"`).join(',')
			productProjectionsUri = requestBuilder.productProjectionsSearch
				.parse({
					perPage: maxResults,
					priceCurrency: "USD",
					filter: ['categories.id:' + categoryString]
				})
				.withTotal(true)
				.build()
			var filterString = 'filter=category in (' + categoryString + ')'
			productProjectionsUri += '&' + encodeURIComponent(filterString)
		} else {
			productProjectionsUri = requestBuilder.productProjections
				.parse({
					perPage: maxResults,
					priceCurrency: "USD"
				})
				.withTotal(true)
				.build()
		}


		const productProjectionsRequest = {
			uri: productProjectionsUri,
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}
		}

		return client.execute(productProjectionsRequest)
	}

	render() {
		return (
			<div>{Object.keys(this.state.products).map(key => 
				<Product
					key={this.state.products[key].id}
					name={this.state.products[key].name.en} 
					imgUrl={this.state.products[key].masterVariant.images[0].url}
					price={this.state.products[key].masterVariant.price}/>
				)}
			</div>
		)
	}
}

export default Products