'use client';

import { useEffect, useRef } from 'react';

export default function DesignDocument({ body, scripts, styles }) {
  const contentRef = useRef(null);

  useEffect(() => {
    for (const scriptContent of scripts) {
      const runScript = new Function(scriptContent);
      runScript();
    }
  }, [scripts]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styles }} />
      <main ref={contentRef} dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
