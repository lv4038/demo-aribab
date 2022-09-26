export function styleStrToObj(str) {
  const obj = {};
  // font-size 转为 fontSize, 将;替换为空，根据:切割，拿到一个数组，再遍历数组
  const s = str
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    })
    .replace(/;\s?$/g, "")
    .split(/:|;/g);
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  }
  return obj;
}
