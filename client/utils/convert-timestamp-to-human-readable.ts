// date format yyyy/mm/dd
export const convertTimeStampToHumanReadable = (timeStamp: number) => {
  const Months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dev",
  ];
  const date = new Date(timeStamp);
  const month = Months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  const formatedDate = `${year}/${month}/${day}`;
  return formatedDate;
};
