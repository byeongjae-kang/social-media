import { MoreVert } from "@material-ui/icons";
import "./post.css";

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="postProfileImg"
              />
              <span className="postUsername">bart</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Hey post</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" alt="" />
              <img className="likeIcon" src="assets/heart.png" alt="" />
              <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
