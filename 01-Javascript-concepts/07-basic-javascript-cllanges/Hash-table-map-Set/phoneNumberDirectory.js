function phoneNumberDirectory(phoneNumber) {
  const directory = new Map();

  for (const entry of phoneNumber) {
    const [name, phoneNumber] = entry.split(':');

    directory.set(name, phoneNumber);
  }

  return directory;
}
