import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const defaultBtn = () => <Button variant="contained">Default</Button>;
export const primary = () => <Button variant="contained" color="primary">Primary</Button>;
export const secondary = () => <Button variant="contained" color="secondary">Secondary</Button>;
