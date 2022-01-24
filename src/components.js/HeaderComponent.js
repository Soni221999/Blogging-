import './Header.css';
import React from 'react';


export default function Header() {
  return (
    <div className="header">
      <div className="topnav">
  <a  href="/">Home</a>
  <a href="/getCommunitys">Community</a>
  <a href="/getBloggers">Blogger</a>
  <a href="/signup">Register</a>
  <a href="/signout">Signout</a>
     </div>
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
      
      <img
        className="headerImg"
        src="https://c4.wallpaperflare.com/wallpaper/208/132/901/leaves-light-green-background-wallpaper-preview.jpg"
        alt=""
      />
    </div>
  );
}