import "../../sass/components/_buttons.scss";

class Button extends React.Component {
    render() {
        return (
            <button className="button" onClick={this.props.clickHandler}>{this.props.text}</button>
        )
    }
}

export default Button;