import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { styled } from '@material-ui/core/styles';

export default {
  title: 'Progress Bar',
};

const Container = styled('div')(({
    theme // Pure magic from https://material-ui.com/styles/api/#examples-4
  }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    width: '75vw',
}));

export const animated = () => <Container><LinearProgress color="secondary" /></Container>;
export const static50percent = () => <Container><LinearProgress color="secondary" variant="determinate" value="50" /></Container>;
