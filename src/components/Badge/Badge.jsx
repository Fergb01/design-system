/**
 * Small label component for status, categories, and counts.
 */

import styles from './Badge.module.css';

export function Badge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = [
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';
