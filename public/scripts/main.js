var CommentBox = require("scripts/commentBox.js");

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<CommentBox />Ha
			</div>
		);
	}
})

ReactDOM.render(
	<Main />
)
module.exports = main;