export interface MyResponeData<I extends object, O extends object> {
  response: O;
  headers: I;
}
export interface MyResponse<T extends object>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends PromiseLike<MyResponeData<any, T>> {}
