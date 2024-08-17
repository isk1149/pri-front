import "./board-styles.css";

export const HomeBoardTitle = (props: { title: string }) => {
  const { title } = props;

  return (
    <>
      <a href="#">
        <div className="home-board-title">
          <h2>{title}</h2>
        </div>
      </a>
    </>
  );
};
