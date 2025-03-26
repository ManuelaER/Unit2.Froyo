const inputPrompt = prompt(
    "Please enter a list of comma-separated (no spaces) froyo flavors!",
    "vanilla,vanilla,strawberry,coffee,coffee");


    const stringArray = inputPrompt.split(",");

const flavors = (stringArray);

const objectsFlvrs = (key,value) => {
    const flavors = {};
    flavors[key] = value;
    return flavors;
}

function countOrders(flavors) {
  const counts = {};
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    counts[flavor] = (counts[flavor] || 0) + 1;
  }

  return counts;
}

const flavorCounts = countOrders(flavors);
console.table(flavorCounts);