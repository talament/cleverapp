import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const Button = styled(MuiButton)(({
    theme // Pure magic from https://material-ui.com/styles/api/#examples-4
  }) => ({
    borderRadius: '4px',
    textTransform: 'none',
    margin: theme.spacing(1),
}));

export default Button;
