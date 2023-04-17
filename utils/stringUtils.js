export const getHasPrefixList = (prefix, names = []) =>
  names.filter(name => {
    if (!name.includes(prefix)) {
      return false;
    }

    let index = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i] === name[i].toUpperCase()) {
        index = i;
        break;
      }
    }
    return name.slice(0, index) === prefix;
  });
