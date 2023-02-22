import "../App.css"

function Joke({ joke }) {
    const { question, punchline } = joke[0]

    return (
        <div id="joke" className="container">
            <h4 className="question">
            { question }
            </h4>
            <p className="punchline">
            { punchline }
            </p>
        </div>
    )
}

export default Joke