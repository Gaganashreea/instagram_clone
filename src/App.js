import React, { useState, useRef } from "react";
import "./App.css";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaFilm,
  FaFacebookMessenger,
  FaHeart,
  FaRegHeart,
  FaPlusSquare,
  FaUserCircle,
  FaBars,
  FaComment,
  FaPaperPlane,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

function App() {
  const postImages = [
    {
      src: "https://source.unsplash.com/600x600/?mountain",
      caption: "We've moved to the top of the table and we'll fight to stay there!",
    },
    {
      src: "https://source.unsplash.com/600x600/?beach",
      caption: "Happy morning 🌞⛱️",
    },
  ];

  const indianStories = [
    { name: "Your Story", img: "/your.jpg" },
    { name: "royalchalleng...", img: "/Rcb.jpg" },
    { name: "ratantata", img: "/Ratan.jpg" },
    { name: "ncet_official", img: "/ncet.jpg" },
    { name: "sudha_murthy...", img: "/Sudha.jpg" },
    { name: "coding.ninjas", img: "/Coding.jpg" },
    { name: "virat.koli", img: "/Virat.jpg" },
    { name: "ccbp_nxtwave", img: "/Nxtwave.jpg" },
    { name: "_nature_clickz_", img: "/nature.jpg" },
  ];

  const [postsState, setPostsState] = useState(
    postImages.map(() => ({ liked: false, saved: false }))
  );

  const commentRefs = useRef([]);

  const toggleLike = (index) => {
    setPostsState((prev) =>
      prev.map((post, i) =>
        i === index ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const toggleSave = (index) => {
    setPostsState((prev) =>
      prev.map((post, i) =>
        i === index ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const focusComment = (index) => {
    commentRefs.current[index]?.focus();
  };

  const sharePost = (index) => {
    alert(`Sharing post #${index + 1}... 🚀`);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="/Instagram_logo.svg.png" alt="Instagram" />
        </div>
        <nav className="nav-list">
          <ul>
            <li><FaHome /> <span>Home</span></li>
            <li><FaSearch /> <span>Search</span></li>
            <li><FaCompass /> <span>Explore</span></li>
            <li><FaFilm /> <span>Reels</span></li>
            <li><FaFacebookMessenger /> <span>Messages</span></li>
            <li><FaHeart /> <span>Notifications</span></li>
            <li><FaPlusSquare /> <span>Create</span></li>
            <li><FaUserCircle /> <span>Profile</span></li>
          </ul>
        </nav>
        <div className="more-link">
          <FaBars /> <span>More</span>
        </div>
      </aside>

      {/* Feed */}
      <main className="feed">
        {/* Stories */}
        <div className="stories">
          {indianStories.map((story, i) => (
            <div key={i} className="story">
              <div className="story-img">
                <img src={story.img} alt={story.name} />
              </div>
              <p>{story.name}</p>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="posts">
          {postImages.map((post, i) => {
            const username =
              i === 0
                ? "royalchallengers.bengaluru"
                : i === 1
                ? "_nature_clickz_"
                : `User${i + 1}`;

            const imageSrc =
              i === 0 ? "/royal.jpg" : i === 1 ? "/mrngphoto.jpg" : post.src;

            const avatarSrc =
              i === 0
                ? "/Rcb.jpg"
                : i === 1
                ? "/nature.jpg"
                : `https://i.pravatar.cc/32?img=${i + 30}`;

            return (
              <div key={i} className="post-card">
                <div className="post">
                  <div className="post-header">
                    <div className="avatar">
                      <img src={avatarSrc} alt={username} />
                    </div>
                    <span>{username}</span>
                  </div>

                  <div className="post-img">
                    <img src={imageSrc} alt="Post" />
                  </div>

                  <div
                    className="post-actions"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "1.8rem",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => toggleLike(i)}
                      aria-label="Like post"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      {postsState[i].liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    </button>
                    <button
                      onClick={() => focusComment(i)}
                      aria-label="Comment on post"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <FaComment />
                    </button>
                    <button
                      onClick={() => sharePost(i)}
                      aria-label="Share post"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <FaPaperPlane />
                    </button>
                    <button
                      onClick={() => toggleSave(i)}
                      aria-label="Save post"
                      style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer" }}
                    >
                      {postsState[i].saved ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                  </div>

                  <div className="post-likes" style={{ fontWeight: "bold" }}>
                    Liked by{" "}
                    <strong>
                      {postsState[i].liked ? "You" : `User${((i + 3) % 6) + 1}`}
                    </strong>{" "}
                    and others
                  </div>

                  <div className="post-caption">
                    <strong>{username}</strong> {post.caption}
                  </div>

                  <div className="post-comments">
                    <input
                      ref={(el) => (commentRefs.current[i] = el)}
                      type="text"
                      placeholder="Add a comment..."
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
