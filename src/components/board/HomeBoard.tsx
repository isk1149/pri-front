import "./board-styles.css";
import { HomeBoardTitle } from "./HomeBoardTitle";
import { HomeBoardPost } from "./HomeBoardPost";

const tempObjects = [
  {
    userId: "isk1149",
    viewCount: 127,
    updatedTime: "2024-08-07",
    likeCount: 43,
    commentCount: 6,
    postTitle: "today is Monday",
  },
  {
    userId: "wkddud",
    viewCount: 55,
    updatedTime: "2024-08-07",
    likeCount: 4,
    commentCount: 0,
    postTitle: "yesterday is Tuesday",
  },
  {
    userId: "pepsi",
    viewCount: 89,
    updatedTime: "2024-08-07",
    likeCount: 32,
    commentCount: 9,
    postTitle: "next week is good",
  },
  {
    userId: "wjdtnr998",
    viewCount: 144,
    updatedTime: "2024-08-07",
    likeCount: 29,
    commentCount: 2,
    postTitle: "next month is December",
  },
];

export const HomeBoard = (props: { title: string }) => {
  return (
    <>
      <div className="home-board">
        <HomeBoardTitle title={props.title} />
        {tempObjects.map((item) => (
          <HomeBoardPost
            userId={item.userId}
            viewCount={item.viewCount}
            updatedTime={item.updatedTime}
            likeCount={item.likeCount}
            commentCount={item.commentCount}
            postTitle={item.postTitle}
          />
        ))}
      </div>
    </>
  );
};
