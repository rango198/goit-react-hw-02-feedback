import { Notification } from '../Notification/Notification';

export const Statistics = ({
  goodCounter,
  neutralCounter,
  badCounter,
  total,
  positivePercentage,
}) => {
  return total ? (
    <>
      <ul>
        <li>Good: {goodCounter}</li>
        <li>Neutral: {neutralCounter}</li>
        <li>Bed: {badCounter}</li>
      </ul>
      <p>Total feedbacks: {total}</p>
      <p>Positive Feedbacks: {positivePercentage} %</p>
    </>
  ) : (
    <Notification msg="There is no feedback" />
  );
};
