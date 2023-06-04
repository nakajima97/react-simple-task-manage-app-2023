/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

test('renders button element', () => {
  const buttonText = 'Click me';
  const onClick = jest.fn();

  render(<Button text={buttonText} onClick={onClick}></Button>);

  const button = screen.getByText('Click me');

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});
