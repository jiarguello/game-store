const orderList = (list, orderBy, type) => {
  if (orderBy === 'ascendant') {
    list.sort((a, b) => {
      if (a[type] < b[type]) return -1;
      if (a[type] > b[type]) return 1;
      return 0;
    });
  }

  if (orderBy === 'descendant') {
    list.sort((a, b) => {
      if (a[type] > b[type]) return -1;
      if (a[type] < b[type]) return 1;
      return 0;
    });
  }

  return list;
}

export default orderList;
