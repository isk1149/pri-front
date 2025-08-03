import "./home-board-styles.css";

export const HomeBoardPost = (props: {
  inserter: string;
  userId: string;
  viewCount: number;
  insertedTime: string;
  updatedTime: string;
  recommendationCount: number;
  commentCount: number;
  title: string;
}) => {
  const {
    inserter,
    userId,
    viewCount,
    insertedTime,
    updatedTime,
    recommendationCount,
    commentCount,
    title,
  } = props;

  return (
    <>
      <div className="home-board-post">
        <div className="home-board-post-info">
          <div>
            <span className="home-board-post-info-span-id-margin">
              {inserter}
            </span>
            <span className="home-board-post-info-span-view-count-margin">
              <img src="/imgs/magnifier-16px.png" alt="조회수" />
              {viewCount}
            </span>
            <span>{insertedTime}</span>
          </div>
          <div>
            <span>
              <img src="/imgs/like-button-16px.png" alt="좋아요" />
              {recommendationCount}
            </span>
            <span className="home-board-post-info-span-comment-count-margin">
              <img src="/imgs/chat-16px.png" alt="댓글" />
              {commentCount}
            </span>
          </div>
        </div>
        <div className="home-board-post-title">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};
