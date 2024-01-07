const getDday = (date: string): number => {
  const arr = date.split("-").map((el) => +el);
  const today = new Date();
  const due = new Date(arr[0], arr[1] - 1, arr[2]);
  const timeGap = due.getTime() - today.getTime();

  return Math.ceil(timeGap / (1000 * 60 * 60 * 24));
};

export default getDday;
