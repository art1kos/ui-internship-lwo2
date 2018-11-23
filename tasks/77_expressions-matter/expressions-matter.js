export const expressionMatter = (num1, num2, num3) => {
  const firstExpression = num1 * (num2 + num3);
  const secondExpression = num1 * num2 * num3;
  const thirdExpression = num1 + num2 * num3;
  const fourthExpression = (num1 + num2) * num3;
  const fifthExpression = (num1 + num3) * num2;
  const sixthExpression = num1 + num2 + num3;
  let max = 0;
  if (firstExpression > max) max = firstExpression;
  if (secondExpression > max) max = secondExpression;
  if (thirdExpression > max) max = thirdExpression;
  if (fourthExpression > max) max = fourthExpression;
  if (fifthExpression > max) max = fifthExpression;
  if (sixthExpression > max) max = sixthExpression;
  return max;
};
