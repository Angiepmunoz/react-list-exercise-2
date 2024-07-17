
const Result = ({result})=>{
    return (
        <article className="result">
            <p className="result-percentage">{result.percentage}</p>
            <p className="result-title">{result.title}</p>
            <p className="result-description">{result.description}</p>
        </article>
    )
}

export default Result