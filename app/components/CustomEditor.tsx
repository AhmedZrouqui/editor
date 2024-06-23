'use client';

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import React, { useEffect } from 'react';

function CustomEditor() {
  const monaco = useMonaco();

  useEffect(() => {
    // do conditional chaining
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    // or make sure that it exists by other ways
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  return (
    <Editor
      height={300}
      width={700}
      defaultValue="// some comment"
      defaultLanguage="javascript"
    />
  );
}

export default CustomEditor;
