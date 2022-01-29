import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Container,
  createTheme,
  StepConnector,
  ThemeProvider,
} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Jsx from "./steps/Jsx";
import Why from "./steps/Why";
import LogFun from "./steps/LogFun";
import Conditionals from "./steps/Conditionals";
import Performance from "./steps/Performance";
import Async from "./steps/Async";
import { Link, useParams } from "react-router-dom";
import { Check } from "@material-ui/icons";
import clsx from "clsx";
import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#784af4",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonRow: { position: "absolute", bottom: 10 },
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: theme.palette.primary.main,
    },
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.primary.main,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: theme.palette.primary.main,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const getSteps = () => {
  return [
    {
      title: "JSX",
      content: <Jsx> </Jsx>,
    },
    {
      title: "Why?",
      content: <Why> </Why>,
    },
    {
      title: "Conditionals",
      content: <Conditionals> </Conditionals>,
    },
    {
      title: "Performance",
      content: <Performance> </Performance>,
    },
    {
      title: "Log Fun",
      content: <LogFun> </LogFun>,
    },
    {
      title: "Async",
      content: <Async> </Async>,
    },
  ];
};

const HorizontalLinearStepper = () => {
  const classes = useStyles();
  const { step } = useParams();
  const activeStep = +(step ?? 0);
  const steps = getSteps();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          connector={<QontoConnector />}
          activeStep={activeStep}
        >
          {steps.map(({ title }) => (
            <Step key={title}>
              <StepLabel StepIconComponent={QontoStepIcon}>{title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
            </div>
          ) : (
            <div>
              <Container>{steps[activeStep].content}</Container>
              <div className={classes.buttonRow}>
                <Button
                  component={Link}
                  to={`/${activeStep - 1}`}
                  disabled={activeStep === 0}
                  className={classes.button}
                >
                  Back
                </Button>

                <Button
                  component={Link}
                  to={`/${activeStep + 1}`}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HorizontalLinearStepper;
