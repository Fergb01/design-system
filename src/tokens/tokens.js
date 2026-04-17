/**
 * Design Tokens
 *
 * Single source of truth for all visual decisions.
 * Framework-agnostic: these values are consumed by
 * components via CSS custom properties injected at runtime.
 */

export const colors = {

  neutral: {
    0:   '#FFFFFF',
    50:  '#FAFAF8',
    100: '#F4F3EF',
    200: '#ECEAE4',
    300: '#E2E0DA',
    400: '#A09D97',
    500: '#6B6860',
    600: '#4A4845',
    700: '#2C2B29',
    800: '#1A1916',
    900: '#0D0D0B',
  },

  rose: {
    50:  '#F9EDEC',
    100: '#F0CBC9',
    200: '#E0A09B',
    300: '#D4918A',
    400: '#C17B74',  
    500: '#A86259',
    600: '#8A4940',
  },
  sage: {
    50:  '#EAF2EF',
    100: '#C4DDD6',
    200: '#9DC5BA',
    300: '#8FB8A8',
    400: '#7A9E8E',  
    500: '#618276',
    600: '#496660',
  },

  semantic: {
    success: '#6EBF8B',
    warning: '#E8A838',
    error:   '#D95F5F',
    info:    '#5F8ED9',
  },
};

export const typography = {
  fontFamily: {
    display: "'Instrument Serif', Georgia, serif",
    body:    "'DM Sans', system-ui, sans-serif",
    mono:    "'DM Mono', 'Courier New', monospace",
  },
  fontSize: {
    xs:   '0.625rem',   
    sm:   '0.75rem',   
    md:   '0.875rem',   
    base: '1rem',      
    lg:   '1.125rem',   
  },
  fontWeight: {
    light:   300,
    regular: 400,
    medium:  500,
  },
  lineHeight: {
    tight:  1.1,
    snug:   1.4,
    base:   1.7,
    loose:  1.9,
  },
  letterSpacing: {
    tight:  '-0.02em',
    normal: '0em',
    wide:   '0.06em',
    wider:  '0.12em',
    widest: '0.18em',
  },
};

export const spacing = {
  0:   '0',
  1:   '0.25rem',   //  4px
  2:   '0.5rem',    
  3:   '0.75rem',   
  4:   '1rem',      
  5:   '1.25rem',   
  6:   '1.5rem',    
};

export const borderRadius = {
  none: '0',
  sm:   '0.25rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  '2xl':'1.5rem',
  full: '9999px',
};

export const shadow = {
  sm:  '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  md:  '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
  lg:  '0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)',
  xl:  '0 24px 64px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.06)',
};

export const transition = {
  fast:   '150ms ease',
  base:   '220ms ease',
  slow:   '400ms ease',
  spring: '300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export const zIndex = {
  base:    0,
  raised:  10,
  overlay: 100,
  modal:   200,
  toast:   300,
};
