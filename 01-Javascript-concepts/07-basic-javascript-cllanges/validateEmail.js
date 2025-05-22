function validateEmail(email) {
  if (email.indexOf('@') === -1) {
    return false;
  }

  // split the email into local part
  const [localPart, domain] = email.split('@');
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExt = domain.split('.');
  if (domainExt.length < 2 || domainExt[1] < 2) {
    return false;
  }
  return true;
}
