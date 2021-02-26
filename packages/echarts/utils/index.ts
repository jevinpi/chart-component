
function S8() {
  return (((1+Math.random())*0x10000000)|0).toString(16).substring(1);
}
export function getUid(prefix: string = 'ascs') {
  return `${prefix}-${S8()}`;
}
