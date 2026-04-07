export default function getShellDistribution(atomicNumber) {
  if (atomicNumber <= 0) return [];

  const capacities = [2, 8, 8, 18, 18, 32, 32];
  let shells = [];
  let remaining = atomicNumber;

  for (let cap of capacities) {
    if (remaining <= 0) break;

    let electronsInShell = Math.min(remaining, cap);
    shells.push(electronsInShell);
    remaining -= electronsInShell;
  }

  return shells;
}