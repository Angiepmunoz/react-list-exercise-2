import Result from "./Result.jsx"

const Results = () => {
  const results = [
    {
      percentage: "20%",
      title: "Mobile engagement",
      description:
        "An AI-powered solution can reduce average handle time by 20%, resulting in cost benefits of hundreds of thousands of dollars.",
    },
    {
      percentage: "60%",
      title: "Omnichannel expectations",
      description:
        "60% of healthcare consumers requested out-of-pocket costs from providers ahead of care, but barely half were able to get the information.",
    },
    {
      percentage: "82%",
      title: "Shifting expectations",
      description:
        "82% of healthcare consumers who sought pricing information said costs influenced their healthcare decision making process.",
    },
  ];
  return (
    <div  className="results-section">
        <h1>Results</h1>
        <h2>Healthcare provider realities</h2>
        <a href="#">Source: IBM Institute for Business Value study, "Better health outcomes with AI-powered virtual assistants"</a>
        <div className="results-container">
            {results.map((result, i)=> {
                return <Result key={i} result={result}/>
            })}
        </div>
    </div>
  )
};

export default Results;
