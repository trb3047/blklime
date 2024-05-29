//렌더링 루트
const root = ReactDOM.createRoot(document.getElementById("root"));
//컨텐츠 영역이름
const contArea = "contentArea";

//상단 레이아웃
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 0 };
    }

    render() {
        return (
        <header className="theme1">
            <h1 className="logo"><a href="./index.html">포트폴리오</a></h1>
            <nav>
                <dl>
                    <dt className="blind">메뉴</dt>
                    <dd><a href="./design/index.html" target="_blank" className="on">디자인</a></dd>
                    <dd><a href="./design/info.html" target="_blank">개발자 정보</a></dd>
                    <dd><a href="./design/login.html" target="_blank">로그인</a></dd>
                </dl>
            </nav>
        </header>
        );
    }

}

//하단 레이아웃
function Footer(props) {
    return (
    <footer>
        <dl>
            <dt className="blind">관련 사이트 링크</dt>
            <dd><a href="https://github.com/trb3047/blklime/" target="_blank">소스코드 GitHub</a></dd>
        </dl>
        <p className="copy">Copyright © 2024 최성훈 BLKLIME<br />tailwindcss / react / nodejs / GitHub / Nginx / AWS</p>
    </footer>
    );
}

//디자인 페이지
class Sample extends React.Component {
    myRef = React.createRef();

    listName = "sampleList"; 

    samList = ["디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인"];

    render() {
        return (
            <main id={contArea}>
                <h2 className="text-xl">웹사이트 제작</h2>
                <p>디자인 목록</p>
                <ul className={this.listName}>
                    {this.samList.map((cont, index) => {
                        return (
                    <li key={index}>
                        <a href="./design/edit.html" className="box on" target="_blank">
                            <p className="img"><img src="./" alt="디자인 대표 화면 이미지" /></p>
                            <div className="contBox">
                                <h3 className="tit">{cont} {index+1}번</h3>
                                <p className="cont">깔끔함을 추구한 디자인으로 간단한 내용으로도 보기 좋은 웹사이트를 구성할 수 있습니다 깔끔함을 추구한 디자인으로 간단한 내용으로도 보기 좋은 웹사이트를 구성할 수 있습니다</p>
                            </div>
                        </a>
                    </li>
                            );
                    })}
                </ul>
                <Login />
            </main>
        );
    }
    
}

//로그인 영역
function Login() {
    return (
        <div className="loginBox">
            <h2 className="text-xl">로그인하고 웹 디자인 시작하기</h2>
            <ul className="inputBox mt-5">
                <li><label htmlFor="id">ID</label><input type="text" id="id" placeholder="ID" className="input" /></li>
                <li><label htmlFor="password">비밀번호</label><input type="password" id="password" placeholder="password" className="input" /></li>
            </ul>
            <p className="idPass">
                <a href="#">ID 찾기</a>
                <a href="#">비밀번호 찾기</a>
            </p>
            <div className="btnGroup">
                <a href="#" className="btn apply">로그인</a>
                <a href="./join.html" className="btn join">회원가입</a>
            </div>
        </div>
    );
}


function App() {
    return (
        <div className='container'>
            <Header />
            <Sample />
            <Footer />
        </div>
    );
}

root.render(<App />);