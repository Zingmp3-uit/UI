import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';


const CustomSwitch = withStyles({
    switchBase: {
        color: '#0775cf',
        '&$checked': {
            color: '#0775cf',
        },
        '&$checked + $track': {
            backgroundColor: '#0775cf',
        },
    },
    checked: {},
    track: {},
})(Switch);

export default CustomSwitch