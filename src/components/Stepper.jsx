import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Jsx from "./steps/Jsx";
import { Container } from "@material-ui/core";
import Why from "./steps/Why";
import LogFun from "./steps/LogFun";
import Conditionals from "./steps/Conditionals";
import Dependencies from "./steps/Dependencies";
import Performance from "./steps/Performance";
import Async from "./steps/Async";
import { Link, useParams } from "react-router-dom";

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
      title: "Dependencies",
      content: <Dependencies> </Dependencies>,
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
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ title }) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={title} {...stepProps}>
              <StepLabel {...labelProps}>{title}</StepLabel>
            </Step>
          );
        })}
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
  );
};

export default HorizontalLinearStepper;
