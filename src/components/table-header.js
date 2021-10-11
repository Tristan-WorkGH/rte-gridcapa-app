import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: 200,
    },
}));

const TableHeader = ({
    taskData,
    onSelectedDateChange,
    onSelectedTimeChange,
}) => {
    const classes = useStyles();
    const defaultTimestamp = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        0,
        30
    );

    let taskStatus = taskData === null ? 'Not created' : taskData.status;

    function pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    const defaultDate =
        defaultTimestamp.getFullYear() +
        '-' +
        pad(defaultTimestamp.getMonth() + 1) +
        '-' +
        pad(defaultTimestamp.getDate());

    return (
        <Grid container className={classes.container}>
            <Grid item xs={3}>
                <Typography variant="body1">
                    CSE D2CC Capacity Calculation Supervisor
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <form noValidate>
                    <TextField
                        id="date"
                        label={<FormattedMessage id="selectTimestampDate" />}
                        type="date"
                        defaultValue={defaultDate}
                        data-test="timestamp-date-picker"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={onSelectedDateChange}
                    />
                </form>
            </Grid>
            <Grid item xs={3}>
                <form noValidate>
                    <TextField
                        id="time"
                        label={<FormattedMessage id="selectTimestampTime" />}
                        type="time"
                        defaultValue={defaultTimestamp
                            .toLocaleTimeString()
                            .substr(0, 5)}
                        data-test="timestamp-time-picker"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 3600,
                        }}
                        onChange={onSelectedTimeChange}
                    />
                </form>
            </Grid>
            <Grid item xs={3}>
                <Chip data-test="timestamp-status" label={taskStatus} />
            </Grid>
        </Grid>
    );
};

export default TableHeader;
