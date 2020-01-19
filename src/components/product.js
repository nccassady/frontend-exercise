import React from 'react'

class Product extends React.Component {
	render() {
		var price = "unavailable"
		if (this.props.price) {
			price = (this.props.price.value.centAmount / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})
		}
		return (
			<div className="product">
				<img src={this.props.imgUrl} alt="" width="100" height="100"/>
				<div>{this.props.name}</div>
				<div>{price}</div>
			</div>
		)
	}
}

export default Product