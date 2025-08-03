import "./home-board-styles.css";
import { HomeBoardTitle } from "./HomeBoardTitle";
import { HomeBoardPost } from "./HomeBoardPost";
import { useEffect, useState } from "react";
import { currentDate } from "../../util/CurrentDate";

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

export const HomeBoard = (props: { title: string; boardId: number }) => {
  const { title, boardId } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const offset: number = 0; //고정
    const limit: number = 4; //고정

    fetch(
      `http://localhost:8000/board-service/api/v1/posts?boardId=${boardId}&offset=${offset}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(`json: ${json}`);
        // console.log(`json.data: ${json.data}`);
        setPosts(json.data);
      })
      .catch((error) => {
        console.error("HomeBoard error");
        // throw new Error(`HTTP error! status: ${error.status}`);
      });
  }, [boardId]); //React는 안정성을 보장하기 위해, useEffect 안에서 사용되는 모든 외부 변수는 의존성 배열에 포함해야 한다고 권고함

  return (
    <>
      <div className="home-board">
        <HomeBoardTitle title={title} boardId={boardId} />
        {posts && posts.length > 0 ? ( //undefined 또는 null이 아니면서 배열 길이가 1이상
          posts.map(
            (post: {
              id: number;
              inserter: string;
              userId: string;
              viewCount: number;
              insertedTime: string;
              updatedTime: string;
              recommendationCount: number;
              commentCount: number;
              title: string;
            }) => (
              <HomeBoardPost
                key={post.id}
                inserter={post.inserter}
                userId={""}
                viewCount={post.viewCount}
                insertedTime={post.insertedTime}
                updatedTime={""}
                recommendationCount={post.recommendationCount}
                commentCount={0}
                title={post.title}
              />
            )
          )
        ) : (
          <HomeBoardPost
            key={0}
            inserter={"관리자"}
            userId={"관리자"}
            viewCount={0}
            insertedTime={currentDate("YYYY.MM.DD")}
            updatedTime={currentDate("YYYY.MM.DD")}
            recommendationCount={0}
            commentCount={0}
            title={"서버점검중입니다."}
          />
        )}
      </div>
    </>
  );
};
