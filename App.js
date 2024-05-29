var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//렌더링 루트
var root = ReactDOM.createRoot(document.getElementById("root"));
//컨텐츠 영역이름
var contArea = "contentArea";

//상단 레이아웃

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = { page: 0 };
        return _this;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
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
                        React.createElement(
                            "dd",
                            null,
                            React.createElement(
                                "a",
                                { href: "./index.html", className: "on" },
                                "\uB514\uC790\uC778"
                            )
                        ),
                        React.createElement(
                            "dd",
                            null,
                            React.createElement(
                                "a",
                                { href: "./info.html" },
                                "\uAC1C\uBC1C\uC790 \uC815\uBCF4"
                            )
                        ),
                        React.createElement(
                            "dd",
                            null,
                            React.createElement(
                                "a",
                                { href: "./login.html" },
                                "\uB85C\uADF8\uC778"
                            )
                        )
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

//디자인 페이지

var Sample = function (_React$Component2) {
    _inherits(Sample, _React$Component2);

    function Sample() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Sample);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Sample.__proto__ || Object.getPrototypeOf(Sample)).call.apply(_ref, [this].concat(args))), _this2), _this2.myRef = React.createRef(), _this2.listName = "sampleList", _this2.samList = ["디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인", "디자인"], _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Sample, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                { id: contArea },
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
                    { className: this.listName },
                    this.samList.map(function (cont, index) {
                        return React.createElement(
                            "li",
                            { key: index },
                            React.createElement(
                                "a",
                                { href: "./edit.html", className: "box on", target: "_blank" },
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
    }]);

    return Sample;
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
                { href: "#", className: "btn apply" },
                "\uB85C\uADF8\uC778"
            ),
            React.createElement(
                "a",
                { href: "./join.html", className: "btn join" },
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
        React.createElement(Sample, null),
        React.createElement(Footer, null)
    );
}

root.render(React.createElement(App, null));