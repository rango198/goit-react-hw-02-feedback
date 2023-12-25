export const FeedbackOptions = ({ options, onHandleFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onHandleFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
