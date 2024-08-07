import "./sidebar-styles.css";

export const Advertisement = (props: { imgPath: string }) => {
  const { imgPath } = props;

  return (
    <>
      <div className="advertisement">
        {/* rel 속성은 링크된 리소스와 현재 문서 간의 관계를 정의하는 HTML5 속성임. 
            target="_blank"와 함께 사용될 때 rel="noreferrer"는 추가적인 보안 및 개인정보 보호 기능을 제공함.
            rel="noreferrer"의 주요 기능은
            1. Referer 정보 숨김 : 링크를 클릭했을 때, 링크가 클릭된 페이지의 URL(Referer)을 전송하지 않음. 
                                  이는 개인정보 보호 및 보안 강화에 도움을 준다.
            2. No Opener: rel="noreferrer"는 암묵적으로 noopener를 포함함.
                          noopener는 새로 열린 페이지가 원래 페이지의 window.opener 속성에 접근하지 못하게 함.
                          이는 새로 열린 페이지가 원래 페이지에 대한 참조를 가질 수 없게 하여, 보안상 취약점을 방지함.
        */}
        <a href="https://www.naver.com" target="_blank" rel="noreferrer">
          <img src={imgPath} alt="광고배너" />
        </a>
      </div>
    </>
  );
};
