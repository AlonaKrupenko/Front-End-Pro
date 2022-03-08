function validate(email) {
  const reg =
    /^(\"[^\ \"]{1,64}(?!.*\"\")\"|^(?!^\.)(?!.*\.@)(?!.*\.\.).{1,64})@(?!\-)(?!\d*\.)[a-zA-Z0-9\-]*\.[a-zA-Z0-9]*(?<!\-)$/;
  return reg.test(email);
}
