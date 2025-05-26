import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({keys, handleFeedback}) => {
  return (
    <>
      {keys.map(key => (
        <Button
          type="button"
          key={key}
          onClick={() => handleFeedback(key)}
        >
          {key}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;
