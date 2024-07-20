import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('should display an overlay if text is used', () => {
    render(<Hero src="/foo.jpg" alt="something" text="Foo" />);

    expect(screen.queryByTestId('overlay')).toBeTruthy();
  });

  it('should NOT display an overlay if no text is passed', () => {
    render(<Hero src="/foo.jpg" alt="something" />);

    expect(screen.queryByTestId('overlay')).toBeFalsy();
  });

  it('should render text passed in', () => {
    render(<Hero src="/foo.jpg" alt="something" text="Foo" />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual(
      'Foo',
    );
  });

  it('should allow for object positioning', () => {
    render(
      <Hero
        src="/foo.jpg"
        alt="something"
        text="Foo"
        objectPosition="50% 75%"
      />,
    );

    expect(screen.getByRole('img').style.objectPosition).toEqual('50% 75%');
  });
});
