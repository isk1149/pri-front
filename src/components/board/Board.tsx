import "./board-styles.css";

export const Board = () => {
  return (
    <>
      <div className="board">
        <table>
          <tr>
            <th className="board-th-title">제목</th>
            <th className="board-th-writer">작성자</th>
            <th className="board-th-writing-date">작성일</th>
            <th className="board-th-view-count">조회</th>
            <th className="board-th-recommendation-count">추천</th>
          </tr>
          <tr>
            <td className="board-td-title ">1</td>
            <td className="board-td-writer ">2</td>
            <td className="board-td-writing-date ">3</td>
            <td className="board-td-view-count ">4</td>
            <td className="board-td-recommendation-count ">5</td>
          </tr>
        </table>
      </div>
    </>
  );
};
