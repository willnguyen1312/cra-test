import context from "./testHelper";

export const MyContext = {
  Consumer(props: any) {
    return props.children(context);
  }
};
