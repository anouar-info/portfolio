// src/components/ClientMDXRenderer.tsx
'use client'; // Mark as client component

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import of the MDX renderer with ssr: false
const MDXRenderer = dynamic(() => import('./MDXRenderer'), {
  ssr: false,
  loading: () => <p>Loading content...</p>
});

interface ClientMDXRendererProps {
  compiledSource: string;
}

const ClientMDXRenderer: React.FC<ClientMDXRendererProps> = ({ compiledSource }) => {
  return <MDXRenderer compiledSource={compiledSource} />;
};

export default ClientMDXRenderer;