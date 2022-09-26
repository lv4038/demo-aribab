// 如果对象有key，就返回true
export function isEmptyObject(obj) {
  return !!Object.keys(obj).length;
}
