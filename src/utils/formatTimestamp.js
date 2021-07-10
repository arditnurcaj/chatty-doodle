import dayjs from "dayjs";

const formatTimestamp = (timestamp) =>
  dayjs(timestamp).format("D MMM YYYY h:mm");

export default formatTimestamp;
