import { Link } from 'react-router-dom';
import './PostCard.css';
import {format, formatDistance} from 'date-fns';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <Link to={`/posts/${post._id}`} className="post-card-link">
                <h2>{post.title}</h2>
                <div className="post-meta">
                    <span className="post-author">By {post.user?.name || 'Unknown'}</span>
                    <span className="post-date">{formatDistance(post.createDate, new Date(), {addSuffix: true})} </span>
                    <span className="post-date-hover">{format(post.createDate, 'LLL dd, yyyy')}</span>
                </div>
                <p className="post-preview">
                    {post.body.substring(0, 150)}
                    {post.body.length > 150 ? '...' : ''}
                </p>
                <span className="read-more">Read more →</span>
            </Link>
        </div>
    );
};

export default PostCard;