import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './app-link.module.css';
import { UrlObject } from 'url';

export function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
