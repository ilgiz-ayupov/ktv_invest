export default function Arrow({
  width = "1rem",
  height = "1rem",
  fill = "none",
  stroke = "#1F336D",
  strokeWidth = "1.5",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 5L9 1" stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}
