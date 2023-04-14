const brightest = (colors) => {
  let brightestColor;
  let largestComponent = 0;

  for (let color of colors) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5), 16);
    let tempLargestComponent = Math.max(r, g, b);

    if (tempLargestComponent > largestComponent) {
      brightestColor = color;
      largestComponent = tempLargestComponent;
    }
  }

  return brightestColor;
};
