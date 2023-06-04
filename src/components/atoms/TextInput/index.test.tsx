/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import TextInput from './index';

test('renders input element with correct value', () => {
  const testValue = 'Test Value';
  const handleChange = jest.fn();

  render(<TextInput value={testValue} onChange={handleChange} />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBe(testValue);
});
