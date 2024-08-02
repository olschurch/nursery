'use client';

import React, { ReactNode, useId, useRef, useState } from 'react';
import styles from './dropdown.module.css';
import Link from 'next/link';
import { Button } from '../ui/button';
import clsx from 'clsx';

export function DropdownMenuLinkItem({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link href={href} onClick={onClick} className="dropdown--link">
        {text}
      </Link>
    </li>
  );
}

export function Dropdown({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setIsLinkClicked(true);
    setTimeout(() => {
      setIsLinkClicked(false);
    }, 300); // Adjust this value if needed
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === DropdownMenuLinkItem) {
      // @ts-expect-error
      return React.cloneElement(child, { onClick: handleLinkClick });
    }
    return child;
  });

  return (
    <div
      className={clsx(styles.wrapper, 'dropdown--wrapper', {
        [styles.linkClicked]: isLinkClicked,
      })}
      ref={wrapperRef}
    >
      <Button
        type="button"
        variant="ghost"
        className={styles.trigger}
        aria-controls={id}
      >
        {title}
      </Button>
      <ul className={styles.menu} id={id}>
        {childrenWithProps}
      </ul>
    </div>
  );
}
