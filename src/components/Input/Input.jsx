/**
 * Input.jsx
 *
 * Accessible text input with:
 *   - Visible label (always — no placeholder-only labels)
 *   - Helper text
 *   - Error state with message
 *   - Disabled state
 *   - Leading icon support
 *   - Auto-generated id linking label → input (WCAG 1.3.1)
 *
 * Usage:
 *   <Input
 *     label="Email address"
 *     type="email"
 *     placeholder="you@example.com"
 *     helperText="We'll never share your email."
 *   />
 *
 *   <Input
 *     label="Username"
 *     error="Username is already taken."
 *     value={username}
 *     onChange={(e) => setUsername(e.target.value)}
 *   />
 */

import { useId } from 'react';
import styles from './Input.module.css';

export function Input({
  label,
  helperText,
  error,
  icon = null,
  disabled = false,
  className = '',
  id: externalId,
  ...props
}) {
  // useId generates a stable unique id — avoids manual id management
  const internalId = useId();
  const id         = externalId ?? internalId;
  const helperId   = `${id}-helper`;
  const errorId    = `${id}-error`;

  const hasError  = Boolean(error);
  const hasHelper = Boolean(helperText) && !hasError;

  const wrapperClasses = [
    styles.wrapper,
    hasError  ? styles['wrapper--error']    : '',
    disabled  ? styles['wrapper--disabled'] : '',
    icon      ? styles['wrapper--icon']     : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      {/* Label — always visible */}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={wrapperClasses}>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}

        <input
          id={id}
          className={styles.input}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? errorId : hasHelper ? helperId : undefined
          }
          {...props}
        />
      </div>

      {/* Helper text */}
      {hasHelper && (
        <p id={helperId} className={styles.helper}>
          {helperText}
        </p>
      )}

      {/* Error message — role="alert" announces to screen readers */}
      {hasError && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

Input.displayName = 'Input';
