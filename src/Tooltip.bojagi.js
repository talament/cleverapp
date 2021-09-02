import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from './Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';

export default {
  title: 'Tooltip',
};

export const standard = () => <Tooltip title="Standard tooltip"><Button>Hover me</Button></Tooltip>;
export const arrow = () => <Tooltip title="Arrow tooltip" arrow><Button>Arrow</Button></Tooltip>;
export const fade = () => <Tooltip title="Fade tooltip" TransitionComponent={Fade}><Button>Fade</Button></Tooltip>;
export const zoom = () => <Tooltip title="Zoom tooltip" TransitionComponent={Zoom}><Button>Zoom</Button></Tooltip>;
