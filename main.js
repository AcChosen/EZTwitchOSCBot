const fs = require('fs');

var timer;
let botStatus = false;

let randomFollowIndex = 0;
let randomSubIndex = 0;

const tmi = require('tmi.js');

let client = new tmi.client();

const OSC = require('osc-js');

let osc = null;


const {app, 
    BrowserWindow,
    ipcMain, dialog} = require('electron');
const res = require('express/lib/response');
const shell = require('electron').shell;
let win = null;

const createWindow = () => //create window function
{
    win = new BrowserWindow({
        icon: 'icon.png',
        autoHideMenuBar: true,
        show: false,
        width: 1920, //window size
        height: 1080, //window size
        resizable: true,
        webPreferences: { //settings for web page features
            zoomFactor: 0.9,
            contextIsolation: false,
            nodeIntegration: true  //access to node functions

        }
    });
    win.loadFile("index.html");//front end page
    win.once('ready-to-show', () => {
        win.show()
      });
    //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);//when app is ready, create the window..


let allowCommand = true;
let currentTime = 0.0;

ipcMain.on("SaveFile", (event, data)=>
{
    const file = dialog.showSaveDialog({
        filters: [{
            name: 'Settings',
            extensions: ['vrcosc']
        }]
    }).then(result => 
        {
            filename = result.filePath;
            if (filename === undefined) 
            {
            // alert('the user clicked the btn but didn\'t created a file');
            return;
            }
            fs.writeFile(filename, data, 'utf8', function (err) 
            {
                if (err) {
                    console.log("An error occured while writing Object to File.");
                    return console.log(err);
                }
            
                console.log("VRCOSC file has been saved.");

            });
    
    });
});
ipcMain.on("LoadFile", (event)=>
{
    dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{
            name: 'Settings',
            extensions: ['vrcosc']
        }]
    }).then(result =>
        {
            if(result.canceled === true)
            {
                console.log("Cancelled opening file.");
                return;
            }
            if(result.filePaths[0] === undefined || !result.filePaths[0])
            {
                console.log("An error occured...")
                return;
            }
            const file = result.filePaths[0];
            fs.readFile(file, 'utf-8', function(err, d)
            {
                //console.log(data);+
                const data = JSON.parse(d);
                event.reply("LoadSettings", data);
                
            });
        })

});
// function CommandTimer(target) 
// {

// }

function ResetTimer()
{
    allowCommand = false;
    currentTime = 0;
}

var commandName1, commandName2, commandName3, commandName4, commandName5, commandName6, commandName7, commandName8, commandName9, commandName10, commandName11, commandName12;
var paramAddr1, paramAddr2, paramAddr3, paramAddr4, paramAddr5, paramAddr6, paramAddr7, paramAddr8, paramAddr9, paramAddr10, paramAddr11, paramAddr12;
var followParamAddr1, followParamAddr2, followParamAddr3, followParamAddr4;
var subscribeParamAddr1, subscribeParamAddr2, subscribeParamAddr3, subscribeParamAddr4;
var paramValue1, paramValue2, paramValue3, paramValue4, paramValue5, paramValue6, paramValue7, paramValue8, paramValue9, paramValue10, paramValue11, paramValue12;
var followParamValue1, followParamValue2, followParamValue3, followParamValue4;
var subscribeParamValue1, subscribeParamValue2, subscribeParamValue3, subscribeParamValue4;
var valueType1, valueType2, valueType3, valueType4, valueType5, valueType6, valueType7, valueType8, valueType9, valueType10, valueType11, valueType12;
var followValueType1, followValueType2, followValueType3, followValueType4;
var subscribeValueType1, subscribeValueType2, subscribeValueType3, subscribeValueType4;
var botResponse1, botResponse2, botResponse3, botResponse4, botResponse5, botResponse6, botResponse7, botResponse8, botResponse9, botResponse10, botResponse11, botResponse12;
var followBotResponse1, followBotResponse2, followBotResponse3, followBotResponse4;
var subscribeBotResponse1, subscribeBotResponse2, subscribeBotResponse3, subscribeBotResponse4;
var isTimed1, isTimed2, isTimed3, isTimed4, isTimed5, isTimed6, isTimed7, isTimed8, isTimed9, isTimed10, isTimed11, isTimed12;
var followIsTimed1, followIsTimed2, followIsTimed3, followIsTimed4;
var subscribeIsTimed1, subscribeIsTimed2, subscribeIsTimed3, subscribeIsTimed4;
var waitTime1, waitTime2, waitTime3, waitTime4, waitTime5, waitTime6, waitTime7, waitTime8, waitTime9, waitTime10, waitTime11, waitTime12;
var followWaitTime1,followWaitTime2, followWaitTime3, followWaitTime4;
var subscribeWaitTime1,subscribeWaitTime2, subscribeWaitTime3, subscribeWaitTime4;
var finalparamAddr1, finalparamAddr2, finalparamAddr3, finalparamAddr4, finalparamAddr5, finalparamAddr6, finalparamAddr7, finalparamAddr8, finalparamAddr9, finalparamAddr10,finalparamAddr11, finalparamAddr12;
var followFinalAddr1, followFinalAddr2, followFinalAddr3, followFinalAddr4;
var subscribeFinalAddr1, subscribeFinalAddr2, subscribeFinalAddr3, subscribeFinalAddr4;
var finalparamValue1, finalparamValue2, finalparamValue3, finalparamValue4, finalparamValue5, finalparamValue6, finalparamValue7, finalparamValue8, finalparamValue9, finalparamValue10, finalparamValue11, finalparamValue12;
var followFinalParamValue1, followFinalParamValue2, followFinalParamValue3, followFinalParamValue4;
var subscribeFinalParamValue1, subscribeFinalParamValue2, subscribeFinalParamValue3, subscribeFinalParamValue4;
var finalvalueType1, finalvalueType2, finalvalueType3, finalvalueType4, finalvalueType5, finalvalueType6, finalvalueType7, finalvalueType8, finalvalueType9, finalvalueType10, finalvalueType11, finalvalueType12;
var followFinalValueType1, followFinalValueType2, followFinalValueType3, followFinalValueType4;
var subscribeFinalValueType1, subscribeFinalValueType2, subscribeFinalValueType3, subscribeFinalValueType4;

var followEnabled, subscribeEnabled;
var followRandom, subscribeRandom;



ipcMain.on("RecieveCommandData1", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName1 = name;
    paramAddr1 = address;
    paramValue1 = value;
    valueType1 = type;
    botResponse1 = response;
    isTimed1 = isTimed;
    waitTime1 = waitTime;
    finalparamAddr1 = finaladdress;
    finalparamValue1 = finalvalue;
    finalvalueType1 = finaltype;
    if(commandName1.toString() === "")
    {
        return;
    }
    console.log(commandName1 + " " + paramAddr1 + " " + paramValue1 + " " + valueType1 + " " + botResponse1);
});
ipcMain.on("RecieveCommandData2", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName2 = name;
    paramAddr2 = address;
    paramValue2 = value;
    valueType2 = type;
    botResponse2 = response;
    isTimed2 = isTimed;
    waitTime2 = waitTime;
    finalparamAddr2 = finaladdress;
    finalparamValue2 = finalvalue;
    finalvalueType2 = finaltype;
    if(commandName2.toString() === "")
    {
        return;
    }
    console.log(commandName2 + " " + paramAddr2 + " " + paramValue2 + " " + valueType2 + " " + botResponse2);
});
ipcMain.on("RecieveCommandData3", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName3 = name;
    paramAddr3 = address;
    paramValue3 = value;
    valueType3 = type;
    botResponse3 = response;
    isTimed3 = isTimed;
    waitTime3 = waitTime;
    finalparamAddr3 = finaladdress;
    finalparamValue3 = finalvalue;
    finalvalueType3 = finaltype;
    if(commandName3.toString() === "")
    {
        return;
    }
    console.log(commandName3 + " " + paramAddr3 + " " + paramValue3 + " " + valueType3 + " " + botResponse3);
});
ipcMain.on("RecieveCommandData4", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName4 = name;
    paramAddr4 = address;
    paramValue4 = value;
    valueType4 = type;
    botResponse4 = response;
    isTimed4 = isTimed;
    waitTime4 = waitTime;
    finalparamAddr4 = finaladdress;
    finalparamValue4 = finalvalue;
    finalvalueType4 = finaltype;
    if(commandName4.toString() === "")
    {
        return;
    }
    console.log(commandName4 + " " + paramAddr4 + " " + paramValue4 + " " + valueType4 + " " + botResponse4);
});
ipcMain.on("RecieveCommandData5", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName5 = name;
    paramAddr5 = address;
    paramValue5 = value;
    valueType5 = type;
    botResponse5 = response;
    isTimed5 = isTimed;
    waitTime5 = waitTime;
    finalparamAddr5 = finaladdress;
    finalparamValue5 = finalvalue;
    finalvalueType5 = finaltype;
    if(commandName5.toString() === "")
    {
        return;
    }
    console.log(commandName5 + " " + paramAddr5 + " " + paramValue5 + " " + valueType5 + " " + botResponse5);
});
ipcMain.on("RecieveCommandData6", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName6 = name;
    paramAddr6 = address;
    paramValue6 = value;
    valueType6 = type;
    botResponse6 = response;
    isTimed6 = isTimed;
    waitTime6 = waitTime;
    finalparamAddr6 = finaladdress;
    finalparamValue6 = finalvalue;
    finalvalueType6 = finaltype;
    if(commandName6.toString() === "")
    {
        return;
    }
    console.log(commandName6 + " " + paramAddr6 + " " + paramValue6 + " " + valueType6 + " " + botResponse6);
});
ipcMain.on("RecieveCommandData7", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName7 = name;
    paramAddr7 = address;
    paramValue7 = value;
    valueType7 = type;
    botResponse7 = response;
    isTimed7 = isTimed;
    waitTime7 = waitTime;
    finalparamAddr7 = finaladdress;
    finalparamValue7 = finalvalue;
    finalvalueType7 = finaltype;
    if(commandName7.toString() === "")
    {
        return;
    }
    console.log(commandName7 + " " + paramAddr7 + " " + paramValue7 + " " + valueType7 + " " + botResponse7);
});
ipcMain.on("RecieveCommandData8", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName8 = name;
    paramAddr8 = address;
    paramValue8 = value;
    valueType8 = type;
    botResponse8 = response;
    isTimed8 = isTimed;
    waitTime8 = waitTime;
    finalparamAddr8 = finaladdress;
    finalparamValue8 = finalvalue;
    finalvalueType8 = finaltype;
    if(commandName8.toString() === "")
    {
        return;
    }
    console.log(commandName8 + " " + paramAddr8 + " " + paramValue8 + " " + valueType8 + " " + botResponse8);
});
ipcMain.on("RecieveCommandData9", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName9 = name;
    paramAddr9 = address;
    paramValue9 = value;
    valueType9 = type;
    botResponse9 = response;
    isTimed9 = isTimed;
    waitTime9 = waitTime;
    finalparamAddr9 = finaladdress;
    finalparamValue9 = finalvalue;
    finalvalueType9 = finaltype;
    if(commandName9.toString() === "")
    {
        return;
    }
    console.log(commandName9 + " " + paramAddr9 + " " + paramValue9 + " " + valueType9 + " " + botResponse9);
});
ipcMain.on("RecieveCommandData10", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName10 = name;
    paramAddr10 = address;
    paramValue10 = value;
    valueType10 = type;
    botResponse10 = response;
    isTimed10 = isTimed;
    waitTime10 = waitTime;
    finalparamAddr10 = finaladdress;
    finalparamValue10 = finalvalue;
    finalvalueType10 = finaltype;
    if(commandName10.toString() === "")
    {
        return;
    }
    console.log(commandName10 + " " + paramAddr10 + " " + paramValue10 + " " + valueType10 + " " + botResponse10);
});
ipcMain.on("RecieveCommandData11", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName11 = name;
    paramAddr11 = address;
    paramValue11 = value;
    valueType11 = type;
    botResponse11 = response;
    isTimed11 = isTimed;
    waitTime11 = waitTime;
    finalparamAddr11 = finaladdress;
    finalparamValue11 = finalvalue;
    finalvalueType11 = finaltype;
    if(commandName11.toString() === "")
    {
        return;
    }
    console.log(commandName11 + " " + paramAddr11 + " " + paramValue11 + " " + valueType11 + " " + botResponse11);
});
ipcMain.on("RecieveCommandData12", (event,name,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    commandName12 = name;
    paramAddr12 = address;
    paramValue12 = value;
    valueType12 = type;
    botResponse12 = response;
    isTimed12 = isTimed;
    waitTime12 = waitTime;
    finalparamAddr12 = finaladdress;
    finalparamValue12 = finalvalue;
    finalvalueType12 = finaltype;
    if(commandName2.toString() === "")
    {
        return;
    }
    console.log(commandName12 + " " + paramAddr12 + " " + paramValue12 + " " + valueType12 + " " + botResponse12);
});
ipcMain.on("RecieveFollowData1", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    followParamAddr1 = address;
    followParamValue1 = value;
    followValueType1 = type;
    followBotResponse1 = response;
    followIsTimed1 = isTimed;
    followWaitTime1 = waitTime;
    followFinalAddr1 = finaladdress;
    followFinalParamValue1 = finalvalue;
    followFinalValueType1 = finaltype;
    if(followParamAddr1.toString() === "")
    {
        return;
    }
    console.log(followParamAddr1 + " " + followParamValue1 + " " + followValueType1 + " " + followBotResponse1);
});
ipcMain.on("RecieveFollowData2", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    followParamAddr2 = address;
    followParamValue2 = value;
    followValueType2 = type;
    followBotResponse2 = response;
    followIsTimed2 = isTimed;
    followWaitTime2 = waitTime;
    followFinalAddr2 = finaladdress;
    followFinalParamValue2 = finalvalue;
    followFinalValueType2 = finaltype;
    if(followParamAddr2.toString() === "")
    {
        return;
    }
    console.log(followParamAddr2 + " " + followParamValue2 + " " + followValueType2 + " " + followBotResponse2);
});
ipcMain.on("RecieveFollowData3", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    followParamAddr3 = address;
    followParamValue3 = value;
    followValueType3 = type;
    followBotResponse3 = response;
    followIsTimed3 = isTimed;
    followWaitTime3 = waitTime;
    followFinalAddr3 = finaladdress;
    followFinalParamValue3 = finalvalue;
    followFinalValueType3 = finaltype;
    if(followParamAddr3.toString() === "")
    {
        return;
    }
    console.log(followParamAddr3 + " " + followParamValue3 + " " + followValueType3 + " " + followBotResponse3);
});
ipcMain.on("RecieveFollowData4", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    followParamAddr4 = address;
    followParamValue4 = value;
    followValueType4 = type;
    followBotResponse4 = response;
    followIsTimed4 = isTimed;
    followWaitTime4 = waitTime;
    followFinalAddr4 = finaladdress;
    followFinalParamValue4 = finalvalue;
    followFinalValueType4 = finaltype;
    if(followParamAddr4.toString() === "")
    {
        return;
    }
    console.log(followParamAddr4 + " " + followParamValue4 + " " + followValueType4 + " " + followBotResponse4);
});
ipcMain.on("RecieveSubscribeData1", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    subscribeParamAddr1 = address;
    subscribeParamValue1 = value;
    subscribeValueType1 = type;
    subscribeBotResponse1 = response;
    subscribeIsTimed1 = isTimed;
    subscribeWaitTime1 = waitTime;
    subscribeFinalAddr1 = finaladdress;
    subscribeFinalParamValue1 = finalvalue;
    subscribeFinalValueType1 = finaltype;
    if(subscribeParamAddr1.toString() === "")
    {
        return;
    }
    console.log(subscribeParamAddr1 + " " + subscribeParamValue1 + " " + subscribeValueType1 + " " + subscribeBotResponse1);
});
ipcMain.on("RecieveSubscribeData2", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    subscribeParamAddr2 = address;
    subscribeParamValue2 = value;
    subscribeValueType2 = type;
    subscribeBotResponse2 = response;
    subscribeIsTimed2 = isTimed;
    subscribeWaitTime2 = waitTime;
    subscribeFinalAddr2 = finaladdress;
    subscribeFinalParamValue2 = finalvalue;
    subscribeFinalValueType2 = finaltype;
    if(subscribeParamAddr2.toString() === "")
    {
        return;
    }
    console.log(subscribeParamAddr2 + " " + subscribeParamValue2 + " " + subscribeValueType2 + " " + subscribeBotResponse2);
});
ipcMain.on("RecieveSubscribeData3", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    subscribeParamAddr3 = address;
    subscribeParamValue3 = value;
    subscribeValueType3 = type;
    subscribeBotResponse3 = response;
    subscribeIsTimed3 = isTimed;
    subscribeWaitTime3 = waitTime;
    subscribeFinalAddr3 = finaladdress;
    subscribeFinalParamValue3 = finalvalue;
    subscribeFinalValueType3 = finaltype;
    if(subscribeParamAddr3.toString() === "")
    {
        return;
    }
    console.log(subscribeParamAddr3 + " " + subscribeParamValue3 + " " + subscribeValueType3 + " " + subscribeBotResponse3);
});
ipcMain.on("RecieveSubscribeData4", (event,address,value,type,response,isTimed,waitTime,finaladdress,finalvalue,finaltype)=>
{
    subscribeParamAddr4 = address;
    subscribeParamValue4 = value;
    subscribeValueType4 = type;
    subscribeBotResponse4 = response;
    subscribeIsTimed4 = isTimed;
    subscribeWaitTime4 = waitTime;
    subscribeFinalAddr4 = finaladdress;
    subscribeFinalParamValue4 = finalvalue;
    subscribeFinalValueType4 = finaltype;
    if(subscribeParamAddr4.toString() === "")
    {
        return;
    }
    console.log(subscribeParamAddr4 + " " + subscribeParamValue4 + " " + subscribeValueType4 + " " + subscribeBotResponse4);
});



ipcMain.on("RecieveFollowSubChecks", (event,followerCheck,followerRandom,subCheck,subRandom)=>
{
    followEnabled = followerCheck;
    followRandom = followerRandom;
    subscribeEnabled = subCheck;
    subscribeRandom = subRandom;
    console.log("Follower Notifications: " + followEnabled + "\n" + "Randomize Follow Notifications: "  + followRandom + "\n" + "Subscriber Notifications: " + subscribeEnabled + "\n" + "Randomize Subscriber Notifications: " + subscribeRandom);
});

ipcMain.on("GenHyperlink", (event, link)=>
{
    event.preventDefault();
    shell.openExternal(link);
});



ipcMain.on("StartBot", (event,BOT_USERNAME,OAUTH_TOKEN, CHANNEL_NAME, OPPORT, VRCPORT, DELAY)=>
{
    try
    {
        console.log("Starting Bot...");
        if(BOT_USERNAME === "")
        {
            throw("Bot username invalid!");
        }
        if(OAUTH_TOKEN === "")
        {
            throw ("OAUTH Token invalid!");
        }
        if(CHANNEL_NAME === "")
        {
            throw ("Target channel invalid!");
        }
            // Define configuration options
            const opts = {
                identity: {
                username: BOT_USERNAME,
                password: OAUTH_TOKEN
                },
                channels: [
                CHANNEL_NAME
                ]
            };

            event.reply("GetCommandData", 1);
            event.reply("GetCommandData", 2);
            event.reply("GetCommandData", 3);
            event.reply("GetCommandData", 4);
            event.reply("GetCommandData", 5);
            event.reply("GetCommandData", 6);
            event.reply("GetCommandData", 7);
            event.reply("GetCommandData", 8);
            event.reply("GetCommandData", 9);
            event.reply("GetCommandData", 10);
            event.reply("GetCommandData", 11);
            event.reply("GetCommandData", 12);



            event.reply("GetFollowData", 1);
            event.reply("GetFollowData", 2);
            event.reply("GetFollowData", 3);
            event.reply("GetFollowData", 4);

            event.reply("GetSubscribeData", 1);
            event.reply("GetSubscribeData", 2);
            event.reply("GetSubscribeData", 3);
            event.reply("GetSubscribeData", 4);

            event.reply("GetFollowSubChecks", 0);




            //OSC Stuff

            const options = { send: { port: parseInt(VRCPORT) } }
            osc = new OSC({ plugin: new OSC.DatagramPlugin(options) })
            osc.open({ port: parseInt(OPPORT) });


            
            // Create a client with our options
            client = new tmi.client(opts);
            
            // Register our event handlers (defined below)
            client.on('message', onMessageHandler);
            client.on('connected', onConnectedHandler);
            
            // Connect to Twitch:
            client.connect();
            currentTime = parseInt(DELAY) + 1;
            function onMessageHandler (target, context, msg, self) {
                if (self) { return; } // Ignore messages from the bot
                if(allowCommand === false)
                {
                    console.log("Command not allowed!");
                    return;
                }
            
                // Remove whitespace from chat message
                const commandName = msg.trim();
            
                // If the command is known, let's execute it
                if (commandName === commandName1) 
                {
                    CallOSCFunction(paramAddr1, paramValue1, valueType1);
                    console.log(valueType1);
                    client.say(target, botResponse1);
                    CallTimedOSCFunction(isTimed1, waitTime1, finalparamAddr1, finalparamValue1, finalvalueType1);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }
                else if(commandName === commandName2)
                {
                    CallOSCFunction(paramAddr2, paramValue2, valueType2);
                    console.log(valueType2);
                    client.say(target, botResponse2);
                    CallTimedOSCFunction(isTimed2, waitTime2, finalparamAddr2, finalparamValue2, finalvalueType2);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }
                else if(commandName === commandName3)
                {
                    CallOSCFunction(paramAddr3, paramValue3, valueType3);
                    console.log(valueType3);
                    client.say(target, botResponse3);
                    CallTimedOSCFunction(isTimed3, waitTime3, finalparamAddr3, finalparamValue3, finalvalueType3);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }
                else if(commandName === commandName4)
                {
                    CallOSCFunction(paramAddr4, paramValue4, valueType4);
                    console.log(valueType4);
                    client.say(target, botResponse4);
                    CallTimedOSCFunction(isTimed4, waitTime4, finalparamAddr4, finalparamValue4, finalvalueType4);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }
                else if(commandName === commandName5)
                {
                    CallOSCFunction(paramAddr5, paramValue5, valueType5);
                    console.log(valueType5);
                    client.say(target, botResponse5);
                    CallTimedOSCFunction(isTimed5, waitTime5, finalparamAddr5, finalparamValue5, finalvalueType5);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                
                }
                else if(commandName === commandName6)
                {
                    CallOSCFunction(paramAddr6, paramValue6, valueType6);
                    console.log(valueType6);
                    client.say(target, botResponse6);
                    CallTimedOSCFunction(isTimed6, waitTime6, finalparamAddr6, finalparamValue6, finalvalueType6);
                    console.log(`* Executed ${commandName} command`);
                }  
                else if(commandName === commandName7)
                {
                    CallOSCFunction(paramAddr7, paramValue7, valueType7);
                    console.log(valueType7);
                    client.say(target, botResponse7);
                    CallTimedOSCFunction(isTimed7, waitTime7, finalparamAddr7, finalparamValue7, finalvalueType7);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }  
                else if(commandName === commandName8)
                {
                    CallOSCFunction(paramAddr8, paramValue8, valueType8);
                    console.log(valueType8);
                    client.say(target, botResponse8);
                    CallTimedOSCFunction(isTimed8, waitTime8, finalparamAddr8, finalparamValue8, finalvalueType8);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }  
                else if(commandName === commandName9)
                {
                    CallOSCFunction(paramAddr9, paramValue9, valueType9);
                    console.log(valueType9);
                    client.say(target, botResponse9);
                    CallTimedOSCFunction(isTimed9, waitTime9, finalparamAddr9, finalparamValue9, finalvalueType9);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }  
                else if(commandName === commandName10)
                {
                    CallOSCFunction(paramAddr10, paramValue10, valueType10);
                    console.log(valueType10);
                    client.say(target, botResponse10);
                    CallTimedOSCFunction(isTimed10, waitTime10, finalparamAddr10, finalparamValue10, finalvalueType10);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }  
                else if(commandName === commandName11)
                {
                    CallOSCFunction(paramAddr11, paramValue11, valueType11);
                    console.log(valueType11);
                    client.say(target, botResponse11);
                    CallTimedOSCFunction(isTimed11, waitTime11, finalparamAddr11, finalparamValue11, finalvalueType11);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }
                else if(commandName === commandName12)
                {
                    CallOSCFunction(paramAddr12, paramValue12, valueType12);
                    console.log(valueType12);
                    client.say(target, botResponse12);
                    CallTimedOSCFunction(isTimed12, waitTime12, finalparamAddr12, finalparamValue12, finalvalueType12);
                    console.log(`* Executed ${commandName} command`);
                    ResetTimer();
                }            
                else 
                {
                    //console.log(`* Unknown command ${commandName}`);
                }
            }

        botStatus = true;
        // Called every time the bot connects to Twitch chat
        function onConnectedHandler (addr, port) 
        {
            console.log(`* Connected to ${addr}:${port}`);
        }
        // expServer = exp.listen(expport, () => {
        //     console.log(`Example exp app listening at http://localhost:${expport}`);
        //   })
        timer = setInterval(() => 
        {
            if(currentTime >= parseInt(DELAY * 1000))
            {
                allowCommand = true;
            }
            else
            {
                currentTime += 1000;
            }
             //console.log(currentTime);
        }, 1000);
        


    }
    catch(error)
    {
        //console.error(error);
        //stopBot();
    }



});

ipcMain.on("StopBot", (event,data)=>
{
    stopBot();
    clearInterval(timer);
});

function CallOSCFunction(address, value, valueType)
{
    if(valueType === "bool")
    {
        sendBool(address, value);
        return;
    }
    if(valueType === "int")
    {
        sendInt(address, value);
        return;
    }
    if(valueType === "float")
    {
        sendFloat(address, value);
        return;
    }
}


function CallTimedOSCFunction(timed, wait, address, value, valueType)
{
    if(timed === false)
    {
        return;
    }
    else
    {
        setTimeout(() => CallOSCFunction(address, value, valueType), parseInt(wait));
    }
}



function stopBot()
{
    client.disconnect();
    console.log("Bot Stopped...");
    if(osc !== null)
    {
        osc.close();
    }
    // if(expServer !== null)
    // {
    //     expServer.close();
    // }
    botStatus = false;
}
function sendInt(address, value)
{
  var num = parseInt(value);
  if(isNaN(num))
  {
      num = getRandomInt(100);
  }
  const message = new OSC.Message(address, Math.floor(num));
  console.log("Sent Int Message! " + address + " " + value);
  osc.send(message);
  return;
}
function sendFloat(address, value)
{
  var num = parseFloat(value)
  if(isNaN(num))
  {
      num = Math.random();
  }
  const message = new OSC.Message(address, num);
  console.log("Sent Float Message! " + address + " " + value);
  osc.send(message);
  return;
}
function sendBool(address, value)
{
  const message = new OSC.Message(address, value);
  console.log("Sent Bool Message! " + address + " " + value);
  osc.send(message);
  return;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function GenerateRandomNumNoRepeat(previousNum)
  {
      let x = Math.random(4);
      if(x === previousNum)
      {
          x = GenerateRandomNumNoRepeat(previousNum);
      }
      return x;
  }
