import React from 'react';
import $ from 'jquery';

class Buckets extends React.Component{
	constructor(props) {
		super(props);
		this.addBucket = this.addBucket.bind(this);
		this.state = { buckets: [] };
	}

componentWillMount(){
	$.ajax({
		url: '/buckets',
		type: 'GET',
		dataType: 'JSON'
	}).done( buckets => {
		this.setState({ buckets: buckets});
	});
}

addBucket(bucket){
	this.setState({buckets: [...this.state.buckets, bucket]})
}

render() {
	let buckets = this.state.buckets.map( bucket => {
		return(<Bucket key={`bucket-${bucket._id}`} />);
	})
	return(
		<div>
			<BucketForm addBucket={this.addBucket} />
			<div>
				{buckets}
			</div>
		</div>
	)
}



}

export default Buckets;