export default function getFullElectronConfiguration(n) {
  if (n <= 0) return "No electrons";

  const orbitals = [
    { name: "1s", cap: 2 }, { name: "2s", cap: 2 }, { name: "2p", cap: 6 },
    { name: "3s", cap: 2 }, { name: "3p", cap: 6 }, { name: "4s", cap: 2 },
    { name: "3d", cap: 10 }, { name: "4p", cap: 6 }, { name: "5s", cap: 2 },
    { name: "4d", cap: 10 }, { name: "5p", cap: 6 }, { name: "6s", cap: 2 },
    { name: "4f", cap: 14 }, { name: "5d", cap: 10 }, { name: "6p", cap: 6 },
    { name: "7s", cap: 2 }, { name: "5f", cap: 14 }, { name: "6d", cap: 10 },
    { name: "7p", cap: 6 }
  ];

  let remaining = n;
  let result = [];

  for (let orb of orbitals) {
    if (remaining <= 0) break;

    let take = Math.min(remaining, orb.cap);
    
    const superscripts = {
      '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', 
      '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    
    let subStr = take.toString().split('').map(digit => superscripts[digit]).join('');
    
    result.push(`${orb.name}${subStr}`);
    remaining -= take;
  }

  return result.join(' ');
}