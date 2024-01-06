import React from 'react';

export type NavbarTypeProps = Array<{
  logo?: React.ReactNode;
  label: string;
  path: string;
}>;

export type ColorTemplatesTypeProps = {
  primary?: string;
  secondary?: string;
  danger?: string;
  success?: string;
  warning?: string;
  inherit?: boolean;
  light?: string;
  dark?: string;
};
