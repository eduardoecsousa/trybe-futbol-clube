export default class ErrorTratative extends Error {
  constructor(
    public message: string,
    public name: string,
    public code: number,
  ) {
    super(message);
  }
}
