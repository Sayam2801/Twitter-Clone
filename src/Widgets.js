import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1399831783613423616"} />
        <TwitterTweetEmbed tweetId={"1400045810222575618"} />
        <TwitterTweetEmbed tweetId={"1399355910670237699"} />
        <TwitterTweetEmbed tweetId={"1399356016165154824"} />
        <TwitterTweetEmbed tweetId={"1399363453085700100"} />
        <TwitterTweetEmbed tweetId={"1399356291919880192"} />
        <TwitterTweetEmbed tweetId={"1399374855263371264"} />
        <TwitterTweetEmbed tweetId={"1399371184358105089"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sayambrand"
          options={{ height: 600 }}
        />
        <TwitterShareButton
          url={"https://www.sayamkumar.com"}
          options={{ text: "React Developer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;