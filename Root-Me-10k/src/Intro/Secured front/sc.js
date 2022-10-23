a = document.getElementById("content");
b = a;
i = a;
j = String.fromCharCode(51, 115, 123, 77, 82);
a = j;
s = a;
k = a;
k = s;
l = s.split("").reverse().join("");
b = [
  102, 120, 117, 52, 119, 124, 98, 119, 107, 117, 51, 120, 106, 107, 98, 51,
  101,
];
h = Array(17)
  .fill(4)
  .map((e, z) => b[z] - e + 1);
d = [118, 102, 112, 119, 52, 113, 124, 120];
m = 10;
while (true) {
  m++;
  p = m;
  p -= 6;
  if (p > 0 && m > 2) {
    break;
  }
}
j = Array(8)
  .fill(0)
  .map((e, v) => e + (p ^ d[v]));
d = prompt(
  String.fromCharCode(
    84, // t
    101, // e
    108, // l
    108,
    32,
    109,
    101,
    44,
    32,
    119,
    104,
    97,
    116,
    32,
    105,
    115,
    32,
    116,
    104,
    101,
    32,
    102,
    108,
    97,
    103
  )
);
console.log(h.map((t) => String.fromCharCode(t)).join(""), " : ", d.substring(5, 22));
console.log(d.substring(0, 5), " : ", l);
console.log(j.map((t) => String.fromCharCode(t)).join(""), " : ", d.substring(22));
if (
  h.map((t) => String.fromCharCode(t)).join("") == d.substring(5, 22) &&
  d.substring(0, 5) == l &&
  j.map((t) => String.fromCharCode(t)).join("") == d.substring(22)
) {
  i.innerHTML = String.fromCharCode(
    67,
    111,
    114,
    114,
    101,
    99,
    116,
    33,
    32,
    89,
    111,
    117,
    32,
    99,
    97,
    110,
    32,
    118,
    97,
    108,
    105,
    100,
    97,
    116,
    101,
    32,
    116,
    104,
    105,
    115,
    32,
    99,
    104,
    97,
    108,
    108,
    101,
    110,
    103,
    101,
    32,
    119,
    105,
    116,
    104,
    32,
    116,
    104,
    105,
    115,
    33
  );
} else {
  i.innerHTML = String.fromCharCode(84, 111, 111, 32, 98, 97, 100, 32, 68, 58);
}
