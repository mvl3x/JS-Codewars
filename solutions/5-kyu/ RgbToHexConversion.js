const rgb = (r, g, b) =>
  [r, g, b]
    .map((item) =>
      Math.max(0, Math.min(255, item))
        .toString(16)
        .padStart(2, "0")
        .toUpperCase()
    )
    .join("");
