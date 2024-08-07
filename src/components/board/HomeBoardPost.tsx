import "./board-styles.css";

export const HomeBoardPost = (props: {
  userId: string;
  viewCount: number;
  updatedTime: string;
  likeCount: number;
  commentCount: number;
  postTitle: string;
}) => {
  const { userId, viewCount, updatedTime, likeCount, commentCount, postTitle } =
    props;

  return (
    <>
      <div className="home-board-post">
        <div className="home-board-post-info">
          <div>
            <span className="home-board-post-info-span-id-margin">
              {userId}
            </span>
            <span className="home-board-post-info-span-view-count-margin">
              <img src="/imgs/magnifier-16px.png" alt="조회수" />
              {viewCount}
            </span>
            <span>{updatedTime}</span>
          </div>
          <div>
            <span>
              <img src="/imgs/like-button-16px.png" alt="좋아요" />
              {likeCount}
            </span>
            <span className="home-board-post-info-span-comment-count-margin">
              <img src="/imgs/chat-16px.png" alt="댓글" />
              {commentCount}
            </span>
          </div>
        </div>
        <div className="home-board-post-title">
          <h3>{postTitle}</h3>
        </div>
      </div>
    </>
  );
};
