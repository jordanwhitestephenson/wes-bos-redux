import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
const Photo = React.createClass({
	render() {
        const { post, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${this.props.post.code}`}>
						<img
							src={this.props.post.display_src}
							alt={this.props.post.caption}
						/>
						{this.props.post.caption}
					</Link>
					<CSSTransitionGroup
						transitionName="like"
						transitionElementTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">
							{this.props.post.likes}
						</span>
					</CSSTransitionGroup>
				</div>
				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
                        <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
						<Link className="button" to={`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble">
									{comments[post.code] ? comments[post.code].legnth : 0}
								</span>
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
});
export default Photo;
