import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (ui, { customEntries, ...options } = {}) => {
  const AllTheProviders = ({ children }) => children;

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render, userEvent };
