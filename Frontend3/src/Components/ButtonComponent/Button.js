import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './Button.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  image: {
    position: 'relative',
    height: 310,
    // marginRight:15,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    // onClick: () => history.push("/"),
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),

  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));





export default function ButtonBases() {
  let usertype = localStorage.getItem('UserType');
  let show = 0;
  if (usertype) {
    show = 1;
  }
  console.log(usertype)
  const classes = useStyles();
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  const history = useHistory();

  function handlebtn1() {

    history.push('/loginpage');
  }
  function handlebtn4() {

    history.push('/Phistory');
  }

  function handlebtn2() {
    history.push('/exercise');

  }

  function handlebtn3() {
    history.push('/loginpage');
  }
  function handlebtn5() {
    history.push('/dprofile');
  }
  function handlebtn6() {
    history.push('/Viewdept');
  }
  function handlebtn7() {
    history.push('/viewpatients');
    // alert("doctor appoitments")
  }

  function handlebtn8() {
    alert("patients")
  }
  return (
    <div className={classes.root}>
      {show === 0 &&
        <ButtonBase
          onClick={handlebtn1}
          focusRipple
          key={1}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/chassenet/chassenet1504/chassenet150400053/41048304-nurse-taking-care-of-senior-woman-in-retirement-home-bandaging-her-arm.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>PAtIENTS</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
      {show === 0 &&
        <ButtonBase
          onClick={handlebtn2}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/rh2010/rh20101612/rh2010161200223/69586729-young-woman-lifting-dumbbells-with-personal-trainer-in-the-fitness-room-with-fitballs-on-the-backgro.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>EXERCISE</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
      {show === 0 &&
        <ButtonBase
          onClick={handlebtn3}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/scyther5/scyther51702/scyther5170200145/72952402-doctor-doctoring-clinic-medicine-cardiologist-patient-health-background-concept-stock-image.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>DOCTORS</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

      }

      {usertype === "patient" &&
        <ButtonBase
          onClick={handlebtn6}
          focusRipple
          key={1}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/chassenet/chassenet1504/chassenet150400053/41048304-nurse-taking-care-of-senior-woman-in-retirement-home-bandaging-her-arm.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>View doctors</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>}
      {usertype === "doctor" &&
        <ButtonBase
          onClick={handlebtn8}
          focusRipple
          key={1}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/chassenet/chassenet1504/chassenet150400053/41048304-nurse-taking-care-of-senior-woman-in-retirement-home-bandaging-her-arm.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>View patients</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
      {usertype === "doctor" &&

        <ButtonBase
          onClick={handlebtn5}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/rh2010/rh20101612/rh2010161200223/69586729-young-woman-lifting-dumbbells-with-personal-trainer-in-the-fitness-room-with-fitballs-on-the-backgro.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>Profile</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
      {usertype === "patient" &&
        <ButtonBase
          onClick={handlebtn2}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/rh2010/rh20101612/rh2010161200223/69586729-young-woman-lifting-dumbbells-with-personal-trainer-in-the-fitness-room-with-fitballs-on-the-backgro.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>EXERCISE</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>




      }
      {usertype === "patient" &&
        <ButtonBase
          onClick={handlebtn4}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/rh2010/rh20101612/rh2010161200223/69586729-young-woman-lifting-dumbbells-with-personal-trainer-in-the-fitness-room-with-fitballs-on-the-backgro.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>History</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      }
      {usertype === "doctor" &&
        <ButtonBase
          onClick={handlebtn7}
          focusRipple
          key={2}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "32%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://previews.123rf.com/images/scyther5/scyther51702/scyther5170200145/72952402-doctor-doctoring-clinic-medicine-cardiologist-patient-health-background-concept-stock-image.jpg')`,

            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <p>appointments</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>


      }

    </div>
  );
}