//렌더링 루트
const root = ReactDOM.createRoot(document.getElementById("root"));
 
//메뉴 정보
const menu = [
    ["디자인", "index"],
    ["개발자 정보", "info"],
    ["로그인", "login"]
];

//메뉴 파라미터 가져오기
function getPage() {
    const url = new URL(window.location.href);
    let page = url.searchParams.get('page');
    //값 없을 때 초기값
    return (page) ? page : "index";
}

//상단 레이아웃
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.page = getPage();
    }

    render() {
        return (
            <header className="theme1">
                <h1 className="logo"><a href="./index.html">포트폴리오</a></h1>
                <nav>
                    <dl>
                        <dt className="blind">메뉴</dt>
                    {menu.map((val, index) => {
                        let link = "./index.html?page=" + val[1];
                        let nowPage = "";
                        if(val[1] == this.page || (index == 0 && this.page == "edit")) nowPage = "on";
                        
                        return (
                        <dd key={index}><a href={link} className={nowPage}>{val[0]}</a></dd>
                        );
                    })}
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

//페이지
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.page = getPage();
    }
    //디자인 페이지 애니메이션 이벤트
    listOn() {
        window.onload = function(){
            var list = document.querySelectorAll(".sampleList .box");
            for (var i=1; i<list.length+1; i++) {
                var obj = list[i-1];
                on(obj, i*150);
            }
            function on(obj, timer) {
                setTimeout(function(){
                    obj.classList.add("on");
                }, timer);
            }             
        }
    }

    samList = ["디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인"];

    render() {
        //디자인
        if(this.page == "index"){
            return (
                <main onLoad={this.listOn()}>
                    <h2 className="text-xl">웹사이트 제작</h2>
                    <p>디자인 목록</p>
                    <ul className="sampleList">
                        {this.samList.map((cont, index) => {
                            return (
                        <li key={index}>
                            <a href="./index.html?page=edit" className="box" target="_blank">
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
        //개발자 정보
        else if(this.page == "edit") {
            return (
                <main class="bg-white text-black">
                <div class="editArea">
                    <h2 class="text-xl">웹사이트 제작</h2>
                    <p>카테고리 관리</p>
                    <ul class="option">
                        <li><p class="tit">대메뉴</p>
                            <ul>
                                <li>메뉴1</li>
                                <li>메뉴2</li>
                                <li>메뉴3</li>
                            </ul>
                            <div class="addGroup">
                                <input type="text" placeholder="이름을 입력해주세요" class="input" />
                                <button class="btn">추가</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="viewArea">
                    <div class="header">
                        <h3 class="tit"><a href="#">제목</a></h3>
                        <ul class="nav">
                            <dl>
                                <dt class="blind">메뉴</dt>
                                <dd><a href="#">메뉴1</a></dd>
                                <dd><a href="#">메뉴2</a></dd>
                                <dd><a href="#">메뉴3</a></dd>
                            </dl>
                        </ul>
                    </div>
                    <div class="cont">
                        <div class="img1"></div>
                        <div class="banner">
    
                        </div>
                        <div class="notice">
                            <h4 class="tit"><a href="#">공지사항</a></h4>
                            <ul>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                                <li><a href="#">공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="foot">
                        <dl>
                            <dt class="blind">관련 사이트 링크</dt>
                            <dd><a href="#">관련 사이트 링크</a></dd>
                        </dl>
                        <p class="copy">Copyright © 2024<br />tailwindcss / nodejs / github</p>
                    </div>
                </div>
            </main>
            );
        }
        //개발자 정보
        else if(this.page == "info") {
            return (
                <main>
                    <h2 class="text-xl">개발자 정보</h2>
                    <div class="text-left mt-5 pl-5 pr-5 max-w-screen-md md:ml-auto md:mr-auto md:pl-0 md:pr-0">
                        <ul>
                            <li class="overflow-hidden">
                                <p class="float-left w-2/12">이름</p>
                                <p class="float-left w-10/12">최성훈</p>
                            </li>
                            <li class="overflow-hidden mt-3">
                                <p class="float-left w-2/12">e-mail</p>
                                <p class="float-left w-10/12">hoon_1215@naver.com</p>
                            </li>
                            <li class="overflow-hidden mt-3">
                                <p class="float-left w-2/12">GitHub</p>
                                <p class="float-left w-10/12"><a href="https://github.com/trb3047/" target="_blank" class="btn apply">바로가기</a></p>
                            </li>
                            <li class="mt-3 overflow-hidden pt-2 border-t border-t-white">
                                <p class="float-left w-2/12">이력</p>
                                <ul class="float-left w-10/12">
                                    <li>24.05~24.10<br />새싹&#40;SeSAC&#41; 전성호 선생님 &#40;영등포6기&#41; 풀스택 프로젝트 실무과정 진행중</li>
                                    <li class="mt-3">23.10~24.01<br />에스알테크 / 개인사업자 / 스마트 스토어 노트북 판매 사업</li>
                                    <li class="mt-3">22.12~23.09<br />자라리테일코리아&#40;주&#41; / OP&#40;계약직&#41; / 스토어 상품 및 창고 관리</li>
                                    <li class="mt-3">21.09~22.08<br />쿠팡풀필먼트서비스 / 출고팀 캡틴 / 계약직 PS 사원부터 시작해 팀 캡틴까지&#40;물류 상황에 맞게 인력 관리&#41;</li>
                                    <li class="mt-3">21.03~21.09<br />쿠팡풀필먼트서비스 / 일용직</li>
                                    <li class="mt-3">17.10~19.01<br />&#40;주&#41;제이넷 / 사원 / 공공도서관 웹 퍼블리싱 및 디자인 관련 js개발&#40;웹앱, 키오스크 등&#41;, 웹접근성 마크 다수 획득</li>
                                    <li class="mt-3">16.10~17.09<br />이노웹&#40;주&#41; / 사원 / 웹에이전시 웹 퍼블리셔</li>
                                    <li class="mt-3">16.03~16.07<br />서울현대실용전문학교 반응형 웹디자인 전문가 과정 수료</li>
                                </ul>  
                            </li>
                            <li class="overflow-hidden mt-3 pt-2 border-t border-t-white">
                                <p class="float-left w-2/12">학력</p>
                                <ul class="float-left w-10/12">
                                    <li>12.03~20.12<br />숭실대학교 음악원 4학년 중퇴 / 관현악과&#40;트럼본&#41; 전공</li>
                                    <li class="mt-3">09.03~12.02<br />호평고등학교 졸업</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </main>
            );
        }
        //로그인
        else if(this.page == "login") {
            return (
                <main>
                    <Login />
                    <div class="bgImgWeb"><span class="blind">웹사이트 모양 이미지</span></div>
                </main>
            );
            
        }
        //회원가입
        else if(this.page == "join") {
            return (
                <main>
                    <div class="loginBox">
                        <h2 class="text-xl">회원가입</h2>
                        <p>*표시는 필수 입력 사항입니다.</p>
                        <form action="" id="joinProcess">
                            <ul class="inputBox">
                                <li><label for="id">* ID</label>
                                    <input type="text" id="id" placeholder="ID" class="input" />
                                    <p class="w-full float-left mt-2">
                                        <span class="float-left mt-2">영문,숫자,특수문자(-)로 조합해 만들 수 있습니다.</span>
                                        <button class="btn apply float-right">중복확인</button>
                                    </p>
                                </li>
                                <li><label for="password">* 비밀번호</label>
                                    <input type="password" id="password" placeholder="password" class="input" />
                                    <p class="w-full float-left mt-2">영문,숫자,특수문자를 조합한 8자리 이상의 비밀번호를 입력해주세요.</p>
                
                                </li>
                                <li><label for="password">* 비밀번호 확인</label>
                                    <input type="password" id="passwordCheck" placeholder="passwordCheck" class="input" />
                                    <p class="w-full float-left mt-2">위와 동일한 비밀번호를 입력해주세요.</p>
                                </li>
                                <li><label for="password">이메일 주소</label>
                                    <input type="text" id="emailAdress" placeholder="e-mail" class="input" />
                                </li>
                                <li><label for="password">* 전화번호</label>
                                    <input type="text" id="phoneNumber" placeholder="010-1234-5678" class="input" />
                                    <p class="w-full float-left mt-2">휴대폰 번호를 입력해주세요.</p>
                                </li>
                            </ul>
                        </form>
                        <div class="btnGroup">
                            <a href="./index.html" class="btn">취소</a>
                            <a href="./index.html" class="btn join">회원가입</a>
                        </div>
                    </div>
                    <div class="bgImgWeb"><span class="blind">웹사이트 모양 이미지</span></div>
                </main>
            );
            
        }
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
                <a href="./index.html" className="btn apply">로그인</a>
                <a href="./index.html?page=join" className="btn join">회원가입</a>
            </div>
        </div>
    );
}


function App() {
    return (
        <div className='container'>
            <Header />
            <Page />
            <Footer />
        </div>
    );
}

root.render(<App />);