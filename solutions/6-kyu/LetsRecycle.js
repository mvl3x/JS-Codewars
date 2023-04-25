const recycle = (listOfProducts) =>
  ["paper", "glass", "organic", "plastic"].map((material) =>
    listOfProducts
      .filter(
        (product) =>
          product.material === material || product.secondMaterial === material
      )
      .map((product) => product.type)
  );
