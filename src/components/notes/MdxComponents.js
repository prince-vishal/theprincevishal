import { Children, cloneElement, isValidElement } from 'react';

export function MarginNote({ children, side, color }) {
  const classes = ['margin-note', side === 'left' ? 'left' : '', color === 'blue' ? 'blue' : '']
    .filter(Boolean)
    .join(' ');

  return <aside className={classes}>{children}</aside>;
}

export function Divider() {
  return (
    <div className="div">
      <span>✦</span>
    </div>
  );
}

export function PullQuote({ children }) {
  return <blockquote className="pull">{children}</blockquote>;
}

export function EndMark() {
  return (
    <div className="end-mark">
      <div className="glyph">❦</div>
      <span className="fin">— end of note —</span>
    </div>
  );
}

export function Footnotes({ children }) {
  return <div className="footnotes">{children}</div>;
}

export function FnRef({ children }) {
  return <span className="fn-ref">{children}</span>;
}

export function Lede({ children }) {
  const child = Children.count(children) === 1 ? Children.only(children) : null;

  if (isValidElement(child) && child.type === 'p') {
    return cloneElement(child, {
      className: ['lede', child.props.className].filter(Boolean).join(' '),
    });
  }

  return <p className="lede">{children}</p>;
}

export function mdxComponents() {
  return {
    MarginNote,
    Divider,
    PullQuote,
    EndMark,
    Footnotes,
    FnRef,
    Lede,
  };
}
