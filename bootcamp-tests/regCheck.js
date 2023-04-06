function regCheck(registration, pattern){
  return registration.endsWith(pattern) || registration.startsWith(pattern);
}