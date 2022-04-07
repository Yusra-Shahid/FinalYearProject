import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import './Button.css';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent:'space-evenly',
  },
  image: {
    position: 'relative',
    height: 340,
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

  function handlebtn1(){
    history.push('/requestblood');
  }

  function handlebtn2(){
    history.push('/donateblood');

  }


  return (
    <div className={classes.root}>
    
      <ButtonBase
          onClick={handlebtn1}
          focusRipple
          key={1}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "40%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('https://www.seekpng.com/png/detail/21-214042_for-developers-blood-clipart-blood-donation-png.png')`,
             
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
              <p>REQUEST BLOOD</p>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

        <ButtonBase
        onClick={handlebtn2}
        focusRipple
        key={2}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "40%",
        }}
      >
          <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url('https://wwwcache.wral.com/asset/news/local/2020/01/20/18898590/01.20donation-DMID1-5lkc4heqe-640x360.jpg')`,
           
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
            <p>DONATE BLOOD</p>
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}