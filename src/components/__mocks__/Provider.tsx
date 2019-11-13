// testHelpers.js
const context = {
  onAddToCartClick: jest.fn()
};

export const MyContext = {
  Consumer(props: any) {
    return props.children(context);
  }
};
