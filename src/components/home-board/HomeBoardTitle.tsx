import "./home-board-styles.css";

export const HomeBoardTitle = (props: { title: string; boardId: number }) => {
  const { title, boardId } = props;

  return (
    <>
      <a href={`/board/${boardId}`}>
        <div className="home-board-title">
          <h2>{title}</h2>
        </div>
      </a>
    </>
  );
};
