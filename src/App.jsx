/**
 * Interactive documentation page that demonstrates all
 * components with live controls.
 */

import { useState } from 'react';
import { useTheme, ThemeProvider } from './utils/ThemeContext.jsx';
import { Button } from './components/Button/Button.jsx';
import { Badge  } from './components/Badge/Badge.jsx';
import { Input  } from './components/Input/Input.jsx';
import { colors, spacing, typography, borderRadius } from './tokens/tokens.js';
import './showcase.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? '☀︎' : '☽'}
    </button>
  );
}


function Section({ title, description, showToogle = false, children }) {
  return (
    <section className="showcase-section">
      <div className="showcase-header">
        <h2 className="showcase-section__title">{title}</h2>
         { showToogle && <ThemeToggle/>}
      </div>
      <div className="showcase-section__header">
        {description && (
          <p className="showcase-section__desc">{description}</p>
        )}
      </div>
      <div className="showcase-section__content">{children}</div>
    </section>
  );
}

function ColorSwatch({ name, value, label }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button className="swatch" onClick={copy} aria-label={`Copy ${value}`}>
      <span className="swatch__color" style={{ background: value }} />
      <span className="swatch__name">{label ?? name}</span>
      <span className="swatch__value">{copied ? 'Copied!' : value}</span>
    </button>
  );
}

function Showcase() {
  const [inputValue, setInputValue]     = useState('');
  const [loadingBtn, setLoadingBtn]     = useState(false);

  function simulateLoad() {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  }

  return (
    <div className="showcase">
      <main className="showcase-main">

        {/*  Color tokens  */}
        <Section
          title="Color tokens"
          description="All colors are defined as design tokens and map to CSS custom properties."
          showToogle= {true}
        >
          <div className="token-group">
            <h3 className="token-group__label">Rose</h3>
            <div className="swatch-row">
              {Object.entries(colors.rose).map(([scale, value]) => (
                <ColorSwatch key={scale} name={scale} value={value} label={`rose.${scale}`} />
              ))}
            </div>
          </div>
          <div className="token-group">
            <h3 className="token-group__label">Sage</h3>
            <div className="swatch-row">
              {Object.entries(colors.sage).map(([scale, value]) => (
                <ColorSwatch key={scale} name={scale} value={value} label={`sage.${scale}`} />
              ))}
            </div>
          </div>
          <div className="token-group">
            <h3 className="token-group__label">Neutral</h3>
            <div className="swatch-row">
              {Object.entries(colors.neutral).map(([scale, value]) => (
                <ColorSwatch key={scale} name={scale} value={value} label={`neutral.${scale}`} />
              ))}
            </div>
          </div>
          <div className="token-group">
            <h3 className="token-group__label">Semantic</h3>
            <div className="swatch-row">
              {Object.entries(colors.semantic).map(([name, value]) => (
                <ColorSwatch key={name} name={name} value={value} />
              ))}
            </div>
          </div>
        </Section>

        {/*  Typography  */}
        <Section
          title="Typography"
          description="Three font families — display, body, and mono — with a defined size and weight scale."
        >
          <div className="type-stack">
            <div className="type-specimen" style={{ fontFamily: typography.fontFamily.display, fontSize: '2.5rem', lineHeight: 1.1 }}>
              Display — <em>Instrument Serif</em>
            </div>
            <div className="type-specimen" style={{ fontFamily: typography.fontFamily.body, fontSize: '1rem', fontWeight: 300 }}>
              Body — DM Sans · The quick brown fox jumps over the lazy dog.
            </div>
            <div className="type-specimen" style={{ fontFamily: typography.fontFamily.mono, fontSize: '0.875rem' }}>
              Mono — DM Mono · const token = 'design-system';
            </div>
          </div>
          <div className="size-scale">
            {Object.entries(typography.fontSize).map(([name, size]) => (
              <div key={name} className="size-row">
                <span className="size-label">{name} · {size}</span>
                <span style={{ fontSize: size, lineHeight: 1.2, fontFamily: typography.fontFamily.body }}>
                  Aa
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/*  Spacing */}
        <Section
          title="Spacing scale"
          description="A consistent spacing scale based on 4px increments."
        >
          <div className="spacing-scale">
            {Object.entries(spacing).filter(([k]) => k !== '0').map(([name, value]) => (
              <div key={name} className="spacing-row">
                <span className="spacing-label">{name} · {value}</span>
                <div className="spacing-bar" style={{ width: value, height: '8px', background: 'var(--color-rose)', borderRadius: '2px', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </Section>

        {/*  Button  */}
        <Section
          title="Button"
          description="3 variants with 3 sizes."
        >
          <div className="demo-group">
            <p className="demo-label">Variants</p>
            <div className="demo-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div className="demo-group">
            <p className="demo-label">Sizes</p>
            <div className="demo-row demo-row--align-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div className="demo-group">
            <p className="demo-label">States</p>
            <div className="demo-row">
              <Button variant="primary" disabled>Disabled</Button>
              <Button
                variant="primary"
                loading={loadingBtn}
                onClick={simulateLoad}
              >
                {loadingBtn ? 'Saving...' : 'Click to load'}
              </Button>
              <Button variant="ghost" iconLeading="→" as="a" href="#" onClick={e => e.preventDefault()}>
                As anchor
              </Button>
            </div>
          </div>
        </Section>

        {/*  Badge  */}
        <Section
          title="Badge"
          description="Status indicators with semantic color variants."
        >
          <div className="demo-row demo-row--wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error">Failed</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" size="sm">Small</Badge>
            <Badge variant="error" size="sm">Small error</Badge>
          </div>
        </Section>

        {/*  Input  */}
        <Section
          title="Input"
        >
          <div className="input-grid">
            <Input
              label="Full name"
              placeholder="Fernanda Garduño"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              helperText="This will appear on your profile."
            />
            <Input
              label="Email"
              type="email"
              placeholder="fer@example.com"
              icon="✉"
            />
            <Input
              label="Username"
              placeholder="fergb01"
              error="This username is already taken."
              defaultValue="fer"
            />
            <Input
              label="Disabled field"
              placeholder="Can't touch this"
              disabled
            />
          </div>
        </Section>

      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Showcase />
    </ThemeProvider>
  );
}
