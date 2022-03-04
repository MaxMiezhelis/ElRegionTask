function dscount(string, char1, char2) {
  let stringSearch = char1 + char2;
  string = string.toLowerCase();
  let count = -1;
  let index = -2;
  while (index !== -1) {
    count++;
    index = string.indexOf(stringSearch, index + 1);
  }
  return count;
}
try {
  test(dscount, ["ab___ab__", "a", "b"], 2);
  test(dscount, ["___cd____", "c", "d"], 1);
  test(dscount, ["de_______", "d", "e"], 1);
  test(dscount, ["12_12__12", "1", "2"], 3);
  test(dscount, ["_ba______", "a", "b"], 0);
  test(dscount, ["_a__b____", "a", "b"], 0);
  test(dscount, ["-ab-аb-ab", "a", "b"], 2);
  test(dscount, ["aAa", "a", "a"], 2);

  console.info("Congratulations! All tests passed.");
} catch (e) {
  console.error(e);
}

function test(call, args, count, n) {
  let r = call.apply(n, args) === count;
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw "Test failed!";
}
