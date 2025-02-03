import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import Home from './Home';
import { appName } from '../../../utils/constants.ts';

describe('Home Component', () => {
  let mockSetView: Mock<(...args: never[]) => never>;

  beforeEach(() => {
    mockSetView = vi.fn();
    render(<Home setView={mockSetView} />);
    vi.clearAllMocks();
  });

  test('renders title', () => {
    // Check if the app name is rendered
    expect(screen.getByText(appName)).toBeInTheDocument();
  });

  test('renders button', () => {
    // Check if the button is rendered
    const buttonElement = screen.getByRole('button', { name: /Duel! \(2 players\)/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
