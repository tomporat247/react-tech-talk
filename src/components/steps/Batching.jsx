import { useEffect, useRef, useState } from "react";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  user: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "150px",
  },
  load: { marginBottom: "20px" },
  row: { marginTop: "10px", marginBottom: "10px" },
}));

const getUserMock = () => ({
  name: "Lebron James",
  image:
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/4A31/production/_101539981_lebronjames.jpg",
  roles: ["Player", "Coach", "GM"],
});

const fetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve(getUserMock()), 3000));

const Batching = () => {
  const classes = useStyles();
  const firstRun = useRef(true);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    if (!firstRun.current) {
      if (loading) {
        console.log("user started loading");
      } else {
        console.log("user finished loading, loaded:", {
          userName,
          userImageUrl,
          userRoles,
        });
      }
    }
    firstRun.current = false;
  }, [loading, userImageUrl, userName, userRoles]);

  const fetch = async () => {
    setLoading(true);
    const { name, image, roles } = getUserMock();
    setLoading(false);
    setUserName(name);
    setUserImageUrl(image);
    setUserRoles(roles);
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Button
        className={classes.load}
        color="primary"
        variant="contained"
        onClick={fetch}
      >
        Load
      </Button>
      <div className={classes.row}>What will be printed to the console when I click the button?</div>
      <div className={classes.user}>
        {userImageUrl && <Avatar className={classes.row} src={userImageUrl} />}
        {userName && <div className={classes.row}>{userName}</div>}
      </div>
      {userRoles?.length > 0 && (
        <div className={classes.row}>Roles: {userRoles.join(", ")}</div>
      )}
    </>
  );
};

export default Batching;
