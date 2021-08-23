import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState("");
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || `${PF}person/noCover.png`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || `${PF}person/noAvatar.png`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <h4 className="profileInfoDesc">{user.desc}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
