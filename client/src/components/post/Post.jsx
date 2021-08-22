import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.find((user) => user.id === post.userId);

  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={user.profilePicture}
                alt=""
                className="postProfileImg"
              />
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="assets/like.png"
                alt=""
                onClick={likeHandler}
              />
              <img
                className="likeIcon"
                src="assets/heart.png"
                alt=""
                onClick={likeHandler}
              />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
