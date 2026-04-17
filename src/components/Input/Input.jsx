/**
 * Accessible text input 
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

      {/* Error message */}
      {hasError && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

Input.displayName = 'Input';
