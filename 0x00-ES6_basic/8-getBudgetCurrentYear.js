function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();
  const budget = {
    [`income-${year}`]: income,
    [`gdb-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };

  return budget;
}
