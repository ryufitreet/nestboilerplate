function sleep(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

export default sleep;
