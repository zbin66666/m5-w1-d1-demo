class HelloMessage extends React.Component {
    render() {
        return React.creatElement(
            "div",
            null,
            "Hello",
            this.props.name

        );
    }
}
ReacrDOM.render(React.createElement(HelloMessage,
    { name: "WestCliff"}),
    document.getElementById('hello-example'));