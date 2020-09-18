import React, { ReactNode } from 'react';

type PropOpts = { children: ReactNode[] };
export default function Layout(props: PropOpts) {
  const { children } = props;
  return <div style={{ border: 'solid 1px' }}>{children}</div>;
}
