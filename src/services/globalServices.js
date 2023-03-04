/**
 checks and validates search criteria
 */
const validateSearch = (source, dest, deptDate, returnDate, selectTrip) => {
  let flag = true;

  if (selectTrip?.toUpperCase() === "ONE") {
    flag = source?.length === 0 || dest?.length === 0 || deptDate?.length === 0;
  } else {
    flag =
      source?.length === 0 ||
      dest?.length === 0 ||
      deptDate?.length === 0 ||
      returnDate?.length === 0;
  }

  return flag;
};

/**
    filter flight list by source and destination
   */
const filterBySourceDest = (payload, response) => {
  let resultArr = [];

  let tempArr = [...response];
  const sourceCity = payload?.source;
  const destCity = payload?.destination;

  resultArr = tempArr.filter(
    (val) =>
      val?.deptCity?.toLowerCase() === sourceCity?.toLowerCase() &&
      val?.arivalCity?.toLowerCase() === destCity?.toLowerCase()
  );

  return resultArr;
};

export { validateSearch, filterBySourceDest };
