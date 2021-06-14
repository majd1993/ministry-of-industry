import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { createStore, createStyleSet } from 'botframework-webchat';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';

import WebChat from './WebChat';

import AvatarIcon from './avatar.png';

import './fabric-icons-inline.css';
import './MinimizableWebChat.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title1: {
    margin: '0px 0px 0px 20px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '27px',
    color: '#fffff',
    fontWeight: '700',
  },
  title2: {
    margin: '5px 0px 5px 20px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    color: '#b8b8b8', //'#C2C2C2',
    fontWeight: '400',
  },
  emptyMainTypography: {
    flexGrow: 1,
  },
  headerIconButton: {
    padding: '10px 10px 10px 10px',
  },
  avatarIcon: {
    width: '55px',
    height: '55px',
    margin: '0px 10px 0px 10px',
  },
}));


const MinimizableWebChat = (props) => {

  const classes = useStyles();

  const store = useMemo(
    () =>
      createStore({}, ({ dispatch }) => next => action => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
          dispatch({
            type: 'WEB_CHAT/SEND_EVENT',
            payload: {
              name: 'webchat/join',
              value: {
                language: window.navigator.language
              }
            }
          });
        } else if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
          if (action.payload.activity.from.role === 'bot') {
            setNewMessage(true);
          }
        }

        return next(action);
      }),
    []
  );

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: 'Transparent'
      }),
    []
  );

  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [side, setSide] = useState('right');
  const [token, setToken] = useState();

  // To learn about reconnecting to a conversation, see the following documentation:
  // https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-reconnect-to-conversation?view=azure-bot-service-4.0

  const handleFetchToken = useCallback(async () => {
    if (!token) {
      // const res = await fetch('https://e-councilhr.azurewebsites.net/directline/token', { method: 'POST' }, { mode: 'no-cors'});
      const res = await fetch(
        'https://webchat.botframework.com/api/tokens',
        {
          method: 'GET',
          headers: {
            'Authorization': 'BotConnector KxH5mTB3KH0.GOS2JFASIiLQlZttpBQUsxBmHjn-SbtS73Q7gKlh8ZA',
          }
        });
      // 'Authorization', 'BotConnector ' + 'YugL9gop8Zk.SJVwc4Jheg5HadjeRyHDBfbVI8P19s_V3S5qzeUoMoM'
      let token = await res.text();
      //console.log("roula")
      //console.log(token)
      // token ="ew0KICAiYWxnIjogIlJTMjU2IiwNCiAgImtpZCI6ICJsY0oxTXFpNkdKYXdCZEw5Y0dieEt5S1R6OE0iLA0KICAieDV0IjogImxjSjFNcWk2R0phd0JkTDljR2J4S3lLVHo4TSIsDQogICJ0eXAiOiAiSldUIg0KfQ.ew0KICAiYm90IjogIkUtQ291bmNpbEhSIiwNCiAgInNpdGUiOiAiWXVnTDlnb3A4WmsiLA0KICAiY29udiI6ICJJTnExemJBVllTQUM1QzVHQVJuaHBNLWEiLA0KICAibmJmIjogMTYxMzU2MDgyMSwNCiAgImV4cCI6IDE2MTM1NjQ0MjEsDQogICJpc3MiOiAiaHR0cHM6Ly93ZWJjaGF0LmJvdGZyYW1ld29yay5jb20vIiwNCiAgImF1ZCI6ICJodHRwczovL3dlYmNoYXQuYm90ZnJhbWV3b3JrLmNvbS8iDQp9.zRjR7eP_7lMg77fafDYcC0EaWQHQ_Yr9Jvia5oEm5c972_GvQyS6MZYOJuGGl6yykIGPVEhvvSpwjEDQwowiJnBPe-MJO8XHGjq5PJne099QU_UFi4FKvKeCWEKgvBQkq3e9rfXCNBkLy76w_2UpnyPmzPjvrnMCn_59KrQwrODZyK9UZN28ciZ8g7kmM6JrvTMcRqKu7vfzyLT0wl_gvjznVzo6aj60TWiKUsTJMM7TUFAdVorJnfpOq-S4MDBr1l2RII51ZqYmjMTo9AGK45iABEbRQHYFD-cdEr75cc7qcuY3k-iXQOtWIc939lrrh8axJKo_B48pxNi2ikndEg"
      setToken(token.substring(1, token.length - 1));
    }
  }, [setToken, token]);

  const handleMaximizeButtonClick = useCallback(async () => {
    setLoaded(true);
    setMinimized(false);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleMinimizeButtonClick = useCallback(() => {
    setMinimized(true);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleSwitchButtonClick = useCallback(() => {
    setSide(side === 'left' ? 'right' : 'left');
  }, [setSide, side]);

  // TODO: [P2] Currently, we cannot unmount Web Chat from DOM when it is minimized.
  //       Today, if we unmount it, Web Chat will call disconnect on DirectLineJS object.
  //       When minimized, we still want to maintain that connection while the UI is gone.
  //       This is related to https://github.com/microsoft/BotFramework-WebChat/issues/2750.

  return (
    <div className="minimizable-web-chat">
      {minimized && (
        <button className="maximize" onClick={handleMaximizeButtonClick}>
          <span className={token ? 'ms-Icon ms-Icon--MessageFill' : 'ms-Icon ms-Icon--Message'} />
          {newMessage && <span className="ms-Icon ms-Icon--CircleShapeSolid red-dot" />}
        </button>
      )}
      {loaded && (
        <div className={classNames(side === 'left' ? 'chat-box left' : 'chat-box right', minimized ? 'hide' : '')}>
          <header>
            {/* <div className="filler" /> */}
            <ListItem style={{ padding: '0px' }}>
              <div>
                <Typography className={classes.title1} >
                  {'Wael'}
                </Typography>
                <Typography className={classes.title2} >
                  {'Your MoIAT digital assistant'}
                </Typography>
              </div>
              <Typography className={classes.emptyMainTypography} ></Typography>

              <IconButton
                onClick={handleMinimizeButtonClick}
                className={classes.headerIconButton}
              >
                {React.createElement(
                  Icons['Remove'], { className: classes.groupTitleLeftIcon },

                )}
              </IconButton>
              <IconButton
                onClick={handleSwitchButtonClick}
                className={classes.headerIconButton}
              >
                {React.createElement(
                  Icons['SwapHoriz'], { className: classes.groupTitleLeftIcon },

                )}
              </IconButton>
              {/* <button className="switch" onClick={handleSwitchButtonClick}>
                <span className="ms-Icon ms-Icon--Switch" />
              </button>
              <button className="minimize" onClick={handleMinimizeButtonClick}>
                <span className="ms-Icon ms-Icon--ChromeMinimize" />
              </button> */}
              <img
                src={AvatarIcon}
                alt={''}
                className={classes.avatarIcon}
              />
            </ListItem>
          </header>
          <WebChat
            className="react-web-chat"
            onFetchToken={handleFetchToken}
            store={store}
            styleSet={styleSet}
            token={token}
          //handleFormDialogOpen={props.handleFormDialogOpen}
          />
        </div>
      )}
    </div>
  );
};

export default MinimizableWebChat;
