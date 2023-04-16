const getParticipants = (handshakes) => {
  let count = 0;

  while (handshakes > (count * (count - 1)) / 2) {
    count++;
  }

  return count;
};
