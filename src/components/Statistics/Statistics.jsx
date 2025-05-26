import { StatisticsWrapped } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, Total, Positive }) => {
  return (
    <>
      <StatisticsWrapped>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {Total}</p>
        <p>Positive feedback: {Positive}%</p>
      </StatisticsWrapped>
    </>
  );
};

export default Statistics;
