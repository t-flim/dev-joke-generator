import "../App.css"

function Button({ onClick }) {

    return (
        <div className="buttons">
            <button className="fetch-joke" onClick={onClick}>Next Joke</button>
        </div>
    )
}

export default Button