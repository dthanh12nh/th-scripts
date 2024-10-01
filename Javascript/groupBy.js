function groupBy(items, propertyName) {
  return items.reduce((accumulator, current) => {
    const key = current[propertyName];

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(current);
    return accumulator;
  });
}