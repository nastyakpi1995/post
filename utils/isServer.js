import { detect } from 'detect-browser';

export default function isServer() {
  return detect().name === 'node';
}
