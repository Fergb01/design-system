import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'ghost', 'danger'];
const SIZES    = ['sm', 'md', 'lg'];

/**
 * Reusable button component 
 */
export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  iconLeading = null,
  iconTrailing = null,
  className = '',
  children,
  ...props
}) {
  const isDisabled = disabled || loading;

  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    loading  ? styles['btn--loading']  : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={classes}
      disabled={Tag === 'button' ? isDisabled : undefined}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}

      {!loading && iconLeading && (
        <span className={styles.icon} aria-hidden="true">
          {iconLeading}
        </span>
      )}

      <span className={styles.label}>{children}</span>

      {!loading && iconTrailing && (
        <span className={styles.icon} aria-hidden="true">
          {iconTrailing}
        </span>
      )}
    </Tag>
  );
}

Button.displayName = 'Button';
