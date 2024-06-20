export const getDateAndTime = (data) => {
  const date = new Date(data);

  // Options for formatting the date
  const options = {
    weekday: "short", // (SAT)
    month: "short", // (JUN)
    day: "2-digit", // (22)
    hour: "numeric", // (11)
    minute: "2-digit", // (00)
    hour12: true, // (AM/PM)
  };

  // Format the date according to options
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate.toUpperCase(); // Convert to uppercase as per your example
};
