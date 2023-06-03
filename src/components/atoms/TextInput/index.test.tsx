/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import TextInput from './index';

test('renders input element with correct value', () => {
  const testValue = 'Test Value';
  const handleChange = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  render(<TextInput value={testValue} onChange={handleChange} />);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const inputElement = screen.getByRole('textbox') as HTMLInputElement;
  expect(inputElement.value).toBe(testValue);
});
