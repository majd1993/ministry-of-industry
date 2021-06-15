// import React, { useEffect, useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';
import React, { useState, useEffect, useMemo } from "react";
// import socketIOClient from "socket.io-client";
import './WebChat.css';
import './custom.css'


//import * as adaptiveCardsPackage from 'adaptivecards';

/* adaptiveCardsPackage.AdaptiveCard.onParseElement = element => {

  console.log('element ', element)
  if (element.id && element.id === 'first_password') {
    console.log('changed')
  }
}; */

/* adaptiveCardsPackage.AdaptiveCard.onParseAction = action => {
  // const card = action.getActionById("openurl")
  // card.on
  console.log('action ', action)
  if (action.id && action.id === 'openurl') {
    //action.addEventListener("click", (console.log('kkk')));
    console.log(' clickkked 2')
    //action.onExecute(console.log(' clickkked 3'))
  }
}; */

// const ENDPOINT = "https://ministryofindustry.azurewebsites.net/"

const WebChat = ({ className, onFetchToken, store, token, /* handleSwitchWhenLanguageIsChosen */ }) => {

  const directLine = useMemo(() => createDirectLine({ token }), [token]);
  // We are adding a new middleware to handle card action
  const cardActionMiddleware = () => next => async ({ cardAction, getSignInUrl }) => {
    const { type, value } = cardAction;

    // console.log('cardAction', cardAction)
    // console.log('getSignInUrl', getSignInUrl)

    if (type === 'imBack' && value === 'English') {
      console.log('openUrl: ', type)
      console.log('supportteam: ', value)

      setResponse('English');
      //handleSwitchWhenLanguageIsChosen('right')
    }
    else if (type === 'imBack' && value === 'العربية') {
      console.log('openUrl: ', type)
      console.log('supportteam: ', value)

      setResponse('العربية');
      //handleSwitchWhenLanguageIsChosen('left')
    }

    return next({ cardAction, getSignInUrl });
  }

  //const [language, setLanguage] = useState(""); 
  //.webchat--css-iyfsm-rctxl4.webchat__stacked-layout.webchat__stacked-layout--from-user .webchat__stacked-layout__message-row
  //.webchat--css-iyfsm-rctxl4.webchat__stacked-layout .webchat__stacked-layout__message-row

  const styleSet = useMemo(
    () =>
      createStyleSet({
        userAvatarBackgroundColor: 'rgb(105,105,105)',
        botAvatarBackgroundColor: 'rgba(193, 52, 52, 0.93)',
        bubbleBackground: '#E0E0E0',
        bubbleFromUserBackground: '#141726',
        botAvatarInitials: 'Bot',
        userAvatarInitials: 'User',
        backgroundColor: '#f5f5f5',
        bubbleBorderRadius: "20px 20px 20px 20px",
        bubbleFromUserBorderRadius: "20px 20px 20px 20px",
        bubbleTextColor: '#070707',
        bubbleFromUserTextColor: "white",
        suggestedActionBorderColor: '#D4B678',
        suggestedActionBorderRadius: "4px",
        suggestedActionBackground: '#D4B678',
        suggestedActionDisabledTextColor: 'white',
        suggestedActionTextColor: "#ffffff",
        sendBoxTextColor: '#000000',
        avatarSize: 40,
      }),
    []
  );

  /* styleSet.textContent = {
    ...styleSet.textContent,
    fontFamily: "'Comic Sans MS', 'Arial', sans-serif",
    fontWeight: 'bold'
  } */

  const [response, setResponse] = useState('English');
  /* useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("language", data => {
      console.log("wessel")
      console.log(data)
      setResponse(data);
      //if else
    });
  }, []); */

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);


  console.log('response', response)

  return token ? (
    //<ReactWebChat className={`${className || ''} web-chat ${response.language!=='English'?'roula':''}`} directLine={directLine} store={store} styleSet={styleSet} /> // left to right
    <ReactWebChat
      className={`${className || ''} web-chat ${response !== 'English' ? 'roula' : ''}`}
      directLine={directLine}
      store={store}
      styleSet={styleSet}
    //adaptiveCardsPackage={adaptiveCardsPackage}
    cardActionMiddleware={cardActionMiddleware}
    />
  ) : (
    <div className={`${className || ''} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <span className="ms-Icon ms-Icon--Robot" />
        </div>
        <p>Please wait while we are connecting.</p>
      </div>
    </div>
  );
};

export default WebChat;
