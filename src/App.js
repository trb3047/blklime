var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//렌더링 루트
var root = ReactDOM.createRoot(document.getElementById("root"));

//메뉴 정보
var menu = [["디자인", "index"], ["개발자 정보", "info"], ["로그인", "login"]];

//메뉴 파라미터 가져오기
function getPage() {
    var url = new URL(window.location.href);
    var page = url.searchParams.get('page');
    //값 없을 때 초기값
    return page ? page : "index";
}

//상단 레이아웃

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.page = getPage(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "header",
                { className: "theme1" },
                React.createElement(
                    "h1",
                    { className: "logo" },
                    React.createElement(
                        "a",
                        { href: "./index.html" },
                        "\uD3EC\uD2B8\uD3F4\uB9AC\uC624"
                    )
                ),
                React.createElement(
                    "nav",
                    null,
                    React.createElement(
                        "dl",
                        null,
                        React.createElement(
                            "dt",
                            { className: "blind" },
                            "\uBA54\uB274"
                        ),
                        menu.map(function (val, index) {
                            var link = "./index.html?page=" + val[1];
                            var nowPage = "";
                            if (val[1] == _this2.page || index == 0 && _this2.page == "edit") nowPage = "on";

                            return React.createElement(
                                "dd",
                                { key: index },
                                React.createElement(
                                    "a",
                                    { href: link, className: nowPage },
                                    val[0]
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

//하단 레이아웃


function Footer(props) {
    return React.createElement(
        "footer",
        null,
        React.createElement(
            "dl",
            null,
            React.createElement(
                "dt",
                { className: "blind" },
                "\uAD00\uB828 \uC0AC\uC774\uD2B8 \uB9C1\uD06C"
            ),
            React.createElement(
                "dd",
                null,
                React.createElement(
                    "a",
                    { href: "https://github.com/trb3047/blklime/", target: "_blank" },
                    "\uC18C\uC2A4\uCF54\uB4DC GitHub"
                )
            )
        ),
        React.createElement(
            "p",
            { className: "copy" },
            "Copyright \xA9 2024 \uCD5C\uC131\uD6C8 BLKLIME",
            React.createElement("br", null),
            "tailwindcss / react / nodejs / GitHub / Nginx / AWS"
        )
    );
}

//페이지

var Page = function (_React$Component2) {
    _inherits(Page, _React$Component2);

    function Page() {
        var _ref2;

        var _temp2, _this3, _ret2;

        _classCallCheck(this, Page);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref2, [this].concat(args))), _this3), _this3.page = getPage(), _this3.samList = ["디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인"], _temp2), _possibleConstructorReturn(_this3, _ret2);
    }

    _createClass(Page, [{
        key: "listOn",


        //디자인 페이지 애니메이션 이벤트
        value: function listOn() {
            window.onload = function () {
                var list = document.querySelectorAll(".sampleList .box");
                for (var i = 1; i < list.length + 1; i++) {
                    var obj = list[i - 1];
                    on(obj, i * 150);
                }
                function on(obj, timer) {
                    setTimeout(function () {
                        obj.classList.add("on");
                    }, timer);
                }
            };
        }
    }, {
        key: "render",
        value: function render() {
            //디자인
            if (this.page == "index") {
                return React.createElement(
                    "main",
                    { onLoad: this.listOn() },
                    React.createElement(
                        "h2",
                        { className: "text-xl" },
                        "\uC6F9\uC0AC\uC774\uD2B8 \uC81C\uC791"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "\uB514\uC790\uC778 \uBAA9\uB85D"
                    ),
                    React.createElement(
                        "ul",
                        { className: "sampleList" },
                        this.samList.map(function (cont, index) {
                            return React.createElement(
                                "li",
                                { key: index },
                                React.createElement(
                                    "a",
                                    { href: "./index.html?page=edit", className: "box", target: "_blank" },
                                    React.createElement(
                                        "p",
                                        { className: "img" },
                                        React.createElement("img", { src: "./", alt: "\uB514\uC790\uC778 \uB300\uD45C \uD654\uBA74 \uC774\uBBF8\uC9C0" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "contBox" },
                                        React.createElement(
                                            "h3",
                                            { className: "tit" },
                                            cont,
                                            " ",
                                            index + 1,
                                            "\uBC88"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "cont" },
                                            "\uAE54\uB054\uD568\uC744 \uCD94\uAD6C\uD55C \uB514\uC790\uC778\uC73C\uB85C \uAC04\uB2E8\uD55C \uB0B4\uC6A9\uC73C\uB85C\uB3C4 \uBCF4\uAE30 \uC88B\uC740 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4 \uAE54\uB054\uD568\uC744 \uCD94\uAD6C\uD55C \uB514\uC790\uC778\uC73C\uB85C \uAC04\uB2E8\uD55C \uB0B4\uC6A9\uC73C\uB85C\uB3C4 \uBCF4\uAE30 \uC88B\uC740 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"
                                        )
                                    )
                                )
                            );
                        })
                    ),
                    React.createElement(Login, null)
                );
            }
            //개발자 정보
            else if (this.page == "edit") {
                    return React.createElement(
                        "main",
                        { "class": "bg-white text-black" },
                        React.createElement(
                            "div",
                            { "class": "editArea" },
                            React.createElement(
                                "h2",
                                { "class": "text-xl" },
                                "\uC6F9\uC0AC\uC774\uD2B8 \uC81C\uC791"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "\uCE74\uD14C\uACE0\uB9AC \uAD00\uB9AC"
                            ),
                            React.createElement(
                                "ul",
                                { "class": "option" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "p",
                                        { "class": "tit" },
                                        "\uB300\uBA54\uB274"
                                    ),
                                    React.createElement(
                                        "ul",
                                        null,
                                        React.createElement(
                                            "li",
                                            null,
                                            "\uBA54\uB2741"
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            "\uBA54\uB2742"
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            "\uBA54\uB2743"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "addGroup" },
                                        React.createElement("input", { type: "text", placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", "class": "input" }),
                                        React.createElement(
                                            "button",
                                            { "class": "btn" },
                                            "\uCD94\uAC00"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "viewArea" },
                            React.createElement(
                                "div",
                                { "class": "header" },
                                React.createElement(
                                    "h3",
                                    { "class": "tit" },
                                    React.createElement(
                                        "a",
                                        { href: "#" },
                                        "\uC81C\uBAA9"
                                    )
                                ),
                                React.createElement(
                                    "ul",
                                    { "class": "nav" },
                                    React.createElement(
                                        "dl",
                                        null,
                                        React.createElement(
                                            "dt",
                                            { "class": "blind" },
                                            "\uBA54\uB274"
                                        ),
                                        React.createElement(
                                            "dd",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uBA54\uB2741"
                                            )
                                        ),
                                        React.createElement(
                                            "dd",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uBA54\uB2742"
                                            )
                                        ),
                                        React.createElement(
                                            "dd",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uBA54\uB2743"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { "class": "cont" },
                                React.createElement("div", { "class": "img1" }),
                                React.createElement("div", { "class": "banner" }),
                                React.createElement(
                                    "div",
                                    { "class": "notice" },
                                    React.createElement(
                                        "h4",
                                        { "class": "tit" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "\uACF5\uC9C0\uC0AC\uD56D"
                                        )
                                    ),
                                    React.createElement(
                                        "ul",
                                        null,
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                "\uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4 \uACF5\uC9C0\uC0AC\uD56D \uC81C\uBAA9\uC785\uB2C8\uB2E4"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { "class": "foot" },
                                React.createElement(
                                    "dl",
                                    null,
                                    React.createElement(
                                        "dt",
                                        { "class": "blind" },
                                        "\uAD00\uB828 \uC0AC\uC774\uD2B8 \uB9C1\uD06C"
                                    ),
                                    React.createElement(
                                        "dd",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "\uAD00\uB828 \uC0AC\uC774\uD2B8 \uB9C1\uD06C"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    { "class": "copy" },
                                    "Copyright \xA9 2024",
                                    React.createElement("br", null),
                                    "tailwindcss / nodejs / github"
                                )
                            )
                        )
                    );
                }
                //개발자 정보
                else if (this.page == "info") {
                        return React.createElement(
                            "main",
                            null,
                            React.createElement(
                                "h2",
                                { "class": "text-xl" },
                                "\uAC1C\uBC1C\uC790 \uC815\uBCF4"
                            ),
                            React.createElement(
                                "div",
                                { "class": "text-left mt-5 pl-5 pr-5 max-w-screen-md md:ml-auto md:mr-auto md:pl-0 md:pr-0" },
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        { "class": "overflow-hidden" },
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-2/12" },
                                            "\uC774\uB984"
                                        ),
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-10/12" },
                                            "\uCD5C\uC131\uD6C8"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "overflow-hidden mt-3" },
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-2/12" },
                                            "e-mail"
                                        ),
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-10/12" },
                                            "hoon_1215@naver.com"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "overflow-hidden mt-3" },
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-2/12" },
                                            "GitHub"
                                        ),
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-10/12" },
                                            React.createElement(
                                                "a",
                                                { href: "https://github.com/trb3047/", target: "_blank", "class": "btn apply" },
                                                "\uBC14\uB85C\uAC00\uAE30"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "mt-3 overflow-hidden pt-2 border-t border-t-white" },
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-2/12" },
                                            "\uC774\uB825"
                                        ),
                                        React.createElement(
                                            "ul",
                                            { "class": "float-left w-10/12" },
                                            React.createElement(
                                                "li",
                                                null,
                                                "24.05~24.10",
                                                React.createElement("br", null),
                                                "\uC0C8\uC2F9(SeSAC) \uC804\uC131\uD638 \uC120\uC0DD\uB2D8 (\uC601\uB4F1\uD3EC6\uAE30) \uD480\uC2A4\uD0DD \uD504\uB85C\uC81D\uD2B8 \uC2E4\uBB34\uACFC\uC815 \uC9C4\uD589\uC911"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "23.10~24.01",
                                                React.createElement("br", null),
                                                "\uC5D0\uC2A4\uC54C\uD14C\uD06C / \uAC1C\uC778\uC0AC\uC5C5\uC790 / \uC2A4\uB9C8\uD2B8 \uC2A4\uD1A0\uC5B4 \uB178\uD2B8\uBD81 \uD310\uB9E4 \uC0AC\uC5C5"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "22.12~23.09",
                                                React.createElement("br", null),
                                                "\uC790\uB77C\uB9AC\uD14C\uC77C\uCF54\uB9AC\uC544(\uC8FC) / OP(\uACC4\uC57D\uC9C1) / \uC2A4\uD1A0\uC5B4 \uC0C1\uD488 \uBC0F \uCC3D\uACE0 \uAD00\uB9AC"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "21.09~22.08",
                                                React.createElement("br", null),
                                                "\uCFE0\uD321\uD480\uD544\uBA3C\uD2B8\uC11C\uBE44\uC2A4 / \uCD9C\uACE0\uD300 \uCEA1\uD2F4 / \uACC4\uC57D\uC9C1 PS \uC0AC\uC6D0\uBD80\uD130 \uC2DC\uC791\uD574 \uD300 \uCEA1\uD2F4\uAE4C\uC9C0(\uBB3C\uB958 \uC0C1\uD669\uC5D0 \uB9DE\uAC8C \uC778\uB825 \uAD00\uB9AC)"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "21.03~21.09",
                                                React.createElement("br", null),
                                                "\uCFE0\uD321\uD480\uD544\uBA3C\uD2B8\uC11C\uBE44\uC2A4 / \uC77C\uC6A9\uC9C1"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "17.10~19.01",
                                                React.createElement("br", null),
                                                "(\uC8FC)\uC81C\uC774\uB137 / \uC0AC\uC6D0 / \uACF5\uACF5\uB3C4\uC11C\uAD00 \uC6F9 \uD37C\uBE14\uB9AC\uC2F1 \uBC0F \uB514\uC790\uC778 \uAD00\uB828 js\uAC1C\uBC1C(\uC6F9\uC571, \uD0A4\uC624\uC2A4\uD06C \uB4F1), \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C \uB2E4\uC218 \uD68D\uB4DD"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "16.10~17.09",
                                                React.createElement("br", null),
                                                "\uC774\uB178\uC6F9(\uC8FC) / \uC0AC\uC6D0 / \uC6F9\uC5D0\uC774\uC804\uC2DC \uC6F9 \uD37C\uBE14\uB9AC\uC154"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "16.03~16.07",
                                                React.createElement("br", null),
                                                "\uC11C\uC6B8\uD604\uB300\uC2E4\uC6A9\uC804\uBB38\uD559\uAD50 \uBC18\uC751\uD615 \uC6F9\uB514\uC790\uC778 \uC804\uBB38\uAC00 \uACFC\uC815 \uC218\uB8CC"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "overflow-hidden mt-3 pt-2 border-t border-t-white" },
                                        React.createElement(
                                            "p",
                                            { "class": "float-left w-2/12" },
                                            "\uD559\uB825"
                                        ),
                                        React.createElement(
                                            "ul",
                                            { "class": "float-left w-10/12" },
                                            React.createElement(
                                                "li",
                                                null,
                                                "12.03~20.12",
                                                React.createElement("br", null),
                                                "\uC22D\uC2E4\uB300\uD559\uAD50 \uC74C\uC545\uC6D0 4\uD559\uB144 \uC911\uD1F4 / \uAD00\uD604\uC545\uACFC(\uD2B8\uB7FC\uBCF8) \uC804\uACF5"
                                            ),
                                            React.createElement(
                                                "li",
                                                { "class": "mt-3" },
                                                "09.03~12.02",
                                                React.createElement("br", null),
                                                "\uD638\uD3C9\uACE0\uB4F1\uD559\uAD50 \uC878\uC5C5"
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    }
                    //로그인
                    else if (this.page == "login") {
                            return React.createElement(
                                "main",
                                null,
                                React.createElement(Login, null),
                                React.createElement(
                                    "div",
                                    { "class": "bgImgWeb" },
                                    React.createElement(
                                        "span",
                                        { "class": "blind" },
                                        "\uC6F9\uC0AC\uC774\uD2B8 \uBAA8\uC591 \uC774\uBBF8\uC9C0"
                                    )
                                )
                            );
                        }
                        //회원가입
                        else if (this.page == "join") {
                                return React.createElement(
                                    "main",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "loginBox" },
                                        React.createElement(
                                            "h2",
                                            { "class": "text-xl" },
                                            "\uD68C\uC6D0\uAC00\uC785"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "*\uD45C\uC2DC\uB294 \uD544\uC218 \uC785\uB825 \uC0AC\uD56D\uC785\uB2C8\uB2E4."
                                        ),
                                        React.createElement(
                                            "form",
                                            { action: "", id: "joinProcess" },
                                            React.createElement(
                                                "ul",
                                                { "class": "inputBox" },
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "label",
                                                        { "for": "id" },
                                                        "* ID"
                                                    ),
                                                    React.createElement("input", { type: "text", id: "id", placeholder: "ID", "class": "input" }),
                                                    React.createElement(
                                                        "p",
                                                        { "class": "w-full float-left mt-2" },
                                                        React.createElement(
                                                            "span",
                                                            { "class": "float-left mt-2" },
                                                            "\uC601\uBB38,\uC22B\uC790,\uD2B9\uC218\uBB38\uC790(-)\uB85C \uC870\uD569\uD574 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                                                        ),
                                                        React.createElement(
                                                            "button",
                                                            { "class": "btn apply float-right" },
                                                            "\uC911\uBCF5\uD655\uC778"
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "label",
                                                        { "for": "password" },
                                                        "* \uBE44\uBC00\uBC88\uD638"
                                                    ),
                                                    React.createElement("input", { type: "password", id: "password", placeholder: "password", "class": "input" }),
                                                    React.createElement(
                                                        "p",
                                                        { "class": "w-full float-left mt-2" },
                                                        "\uC601\uBB38,\uC22B\uC790,\uD2B9\uC218\uBB38\uC790\uB97C \uC870\uD569\uD55C 8\uC790\uB9AC \uC774\uC0C1\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "label",
                                                        { "for": "password" },
                                                        "* \uBE44\uBC00\uBC88\uD638 \uD655\uC778"
                                                    ),
                                                    React.createElement("input", { type: "password", id: "passwordCheck", placeholder: "passwordCheck", "class": "input" }),
                                                    React.createElement(
                                                        "p",
                                                        { "class": "w-full float-left mt-2" },
                                                        "\uC704\uC640 \uB3D9\uC77C\uD55C \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "label",
                                                        { "for": "password" },
                                                        "\uC774\uBA54\uC77C \uC8FC\uC18C"
                                                    ),
                                                    React.createElement("input", { type: "text", id: "emailAdress", placeholder: "e-mail", "class": "input" })
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "label",
                                                        { "for": "password" },
                                                        "* \uC804\uD654\uBC88\uD638"
                                                    ),
                                                    React.createElement("input", { type: "text", id: "phoneNumber", placeholder: "010-1234-5678", "class": "input" }),
                                                    React.createElement(
                                                        "p",
                                                        { "class": "w-full float-left mt-2" },
                                                        "\uD734\uB300\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "btnGroup" },
                                            React.createElement(
                                                "a",
                                                { href: "./index.html", "class": "btn" },
                                                "\uCDE8\uC18C"
                                            ),
                                            React.createElement(
                                                "a",
                                                { href: "./index.html", "class": "btn join" },
                                                "\uD68C\uC6D0\uAC00\uC785"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "bgImgWeb" },
                                        React.createElement(
                                            "span",
                                            { "class": "blind" },
                                            "\uC6F9\uC0AC\uC774\uD2B8 \uBAA8\uC591 \uC774\uBBF8\uC9C0"
                                        )
                                    )
                                );
                            }
        }
    }]);

    return Page;
}(React.Component);

//로그인 영역


function Login() {
    return React.createElement(
        "div",
        { className: "loginBox" },
        React.createElement(
            "h2",
            { className: "text-xl" },
            "\uB85C\uADF8\uC778\uD558\uACE0 \uC6F9 \uB514\uC790\uC778 \uC2DC\uC791\uD558\uAE30"
        ),
        React.createElement(
            "ul",
            { className: "inputBox mt-5" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "label",
                    { htmlFor: "id" },
                    "ID"
                ),
                React.createElement("input", { type: "text", id: "id", placeholder: "ID", className: "input" })
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "label",
                    { htmlFor: "password" },
                    "\uBE44\uBC00\uBC88\uD638"
                ),
                React.createElement("input", { type: "password", id: "password", placeholder: "password", className: "input" })
            )
        ),
        React.createElement(
            "p",
            { className: "idPass" },
            React.createElement(
                "a",
                { href: "#" },
                "ID \uCC3E\uAE30"
            ),
            React.createElement(
                "a",
                { href: "#" },
                "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
            )
        ),
        React.createElement(
            "div",
            { className: "btnGroup" },
            React.createElement(
                "a",
                { href: "./index.html", className: "btn apply" },
                "\uB85C\uADF8\uC778"
            ),
            React.createElement(
                "a",
                { href: "./index.html?page=join", className: "btn join" },
                "\uD68C\uC6D0\uAC00\uC785"
            )
        )
    );
}

function App() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Header, null),
        React.createElement(Page, null),
        React.createElement(Footer, null)
    );
}

root.render(React.createElement(App, null));