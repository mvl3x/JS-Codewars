const createSecretHolder = (secret) => ({
  getSecret: () => secret,
  setSecret: (newSecret) => (secret = newSecret),
});
