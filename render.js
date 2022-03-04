const crypto = require('crypto');
require('dotenv').config();
const {ipcRenderer} = require('electron');
const { username } = require('tmi.js/lib/utils');
isOn = false;
useDefaultBot = true;
useWhiteList = false;

// const Url = "https://id.twitch.tv/oauth2/token"
// const Params = {
//   headers: { "Content-Type": "application/json" },
//   body: {
//     client_id: 'bphfne90va96673b0onb4481fa7cq6',
//     client_secret: 'ug5zrviluyrgqmbpaghhjig1593ifo',
//     grant_type: "client_credentials"
//   },
//   method: "POST"
// }

function ToggleWhiteList()
{
    useWhiteList = document.getElementById("whiteListCheck").checked;
}

function ToggleDefaultBot()
{
    useDefaultBot = document.getElementsByName("botLoginCheckbox")[0].checked;  
    document.getElementById("botInfo").hidden = useDefaultBot;
}
function GenKeyHyperlink()
{
    ipcRenderer.send("GenHyperlink", "https://twitchtokengenerator.com/");
}

// let access_token = ""
// fetch(Url, Params)
//   .then(response => {access_token = response.json()["access_token"]}).catch(error => console.error(error));;
// console.log("Access Token: " + access_token);
function SaveCommandData(commandNum)
{
    var commandName = document.getElementById("command" + commandNum).value;
    var paramAddress = document.getElementById("command" + commandNum + "InitialAddress").value;
    var valueType = document.getElementById("command" + commandNum + "ValueType").value;
    if(valueType === "bool")
    {
        var paramValue = document.getElementsByName("cc" + commandNum)[0].checked;  
    }
    else
    {
        var paramValue = document.getElementById("command" + commandNum + "InitialValue").value;
    }
    var response = document.getElementById("command" + commandNum + "BotResponse").value;
    var timed = document.getElementById("command" + commandNum + "TimerCheck").checked;
    var waittime = document.getElementById("command" + commandNum + "WaitTime").value;
    var finaladdress = document.getElementById("command" + commandNum + "FinalAddress").value;
    var finalvalueType = document.getElementById("command" + commandNum + "FinalValueType").value;
    if(finalvalueType === "bool")
    {
        var finalValue = document.getElementsByName("ccfinal" + commandNum)[0].checked;  
    }
    else
    {
        var finalValue = document.getElementById("command" + commandNum + "FinalValue").value;
    }
    const commandData = {name: commandName, address: paramAddress, valueType: valueType, value: paramValue, botResponse: response, isTimed: timed, waitTime: waittime, fAddress: finaladdress, fValueType: finalvalueType, fValue: finalValue};
    return commandData;
}
function LoadCommandData(data, commandNum)
{
    document.getElementById("command" + commandNum).value = data.commandData[commandNum - 1].name;
    document.getElementById("command" + commandNum + "InitialAddress").value = data.commandData[commandNum - 1].address;
    document.getElementById("command" + commandNum + "ValueType").value = data.commandData[commandNum - 1].valueType;
    var valueType = document.getElementById("command" + commandNum + "ValueType").value;

    if(valueType === "bool")
    {
        document.getElementsByName("cc" + commandNum)[0].checked = data.commandData[commandNum - 1].value
    }
    else
    {
        document.getElementById("command" + commandNum + "InitialValue").value = data.commandData[commandNum - 1].value
    }
    IsBool(commandNum);
    document.getElementById("command" + commandNum + "BotResponse").value = data.commandData[commandNum - 1].botResponse;
    document.getElementById("command" + commandNum + "TimerCheck").checked = data.commandData[commandNum - 1].isTimed;
    document.getElementById("command" + commandNum + "WaitTime").value = data.commandData[commandNum - 1].waitTime;
    document.getElementById("command" + commandNum + "FinalAddress").value = data.commandData[commandNum - 1].fAddress;
    document.getElementById("command" + commandNum + "FinalValueType").value = data.commandData[commandNum - 1].fValueType;
    var finalvalueType = document.getElementById("command" + commandNum + "FinalValueType").value;
    if(finalvalueType === "bool")
    {
        document.getElementsByName("ccfinal" + commandNum)[0].checked = data.commandData[commandNum - 1].fValue;
    }
    else
    {
        document.getElementById("command" + commandNum + "FinalValue").value = data.commandData[commandNum - 1].fValue;
    }
    IsBoolFinal(commandNum);
    ShowHideTimer(commandNum);

}

function SaveFollowerData(followNum)
{
    var paramAddress = document.getElementById("followNote" + followNum + "InitialAddress").value;
    var valueType = document.getElementById("followNote" + followNum + "ValueType").value;
    if(valueType === "bool")
    {
        var paramValue = document.getElementsByName("fncb" + followNum)[0].checked;  
    }
    else
    {
        var paramValue = document.getElementById("followNote" + followNum + "InitialValue").value;
    }
    var response = document.getElementById("followNote" + followNum + "BotResponse").value;
    var timed = document.getElementById("followNote" + followNum + "TimerCheck").checked;
    var waittime = document.getElementById("followNote" + followNum + "WaitTime").value;
    var finaladdress = document.getElementById("followNote" + followNum + "FinalAddress").value;
    var finalvalueType = document.getElementById("followNote" + followNum + "FinalValueType").value;
    if(finalvalueType === "bool")
    {
        var finalValue = document.getElementsByName("finfinal" + followNum)[0].checked;  
    }
    else
    {
        var finalValue = document.getElementById("followNote" + followNum + "FinalValue").value;
    }
    const followData = {address: paramAddress, valueType: valueType, value: paramValue, botResponse: response, isTimed: timed, waitTime: waittime, fAddress: finaladdress, fValueType: finalvalueType, fValue: finalValue};
    return followData;
}
function SaveSubscriberData(subscribeNum)
{
    var paramAddress = document.getElementById("subscribeNote" + subscribeNum + "InitialAddress").value;
    var valueType = document.getElementById("subscribeNote" + subscribeNum + "ValueType").value;
    if(valueType === "bool")
    {
        var paramValue = document.getElementsByName("sncb" + subscribeNum)[0].checked;  
    }
    else
    {
        var paramValue = document.getElementById("subscribeNote" + subscribeNum + "InitialValue").value;
    }
    var response = document.getElementById("subscribeNote" + subscribeNum + "BotResponse").value;
    var timed = document.getElementById("subscribeNote" + subscribeNum + "TimerCheck").checked;
    var waittime = document.getElementById("subscribeNote" + subscribeNum + "WaitTime").value;
    var finaladdress = document.getElementById("subscribeNote" + subscribeNum + "FinalAddress").value;
    var finalvalueType = document.getElementById("subscribeNote" + subscribeNum + "FinalValueType").value;
    if(finalvalueType === "bool")
    {
        var finalValue = document.getElementsByName("sinfinal" + subscribeNum)[0].checked;  
    }
    else
    {
        var finalValue = document.getElementById("subscribeNote" + subscribeNum + "FinalValue").value;
    }
    const subData = {address: paramAddress, valueType: valueType, value: paramValue, botResponse: response, isTimed: timed, waitTime: waittime, fAddress: finaladdress, fValueType: finalvalueType, fValue: finalValue};
    return subData;
}
function SaveSubFollowCheckData()
{
    var followRandomization = document.getElementById("followNoteRandomize").checked;
    var followEnabled = document.getElementById("followNoteCheck").checked;
    var subscribeRandomization = document.getElementById("subscribeNoteRandomize").checked;
    var subscribeEnabled = document.getElementById("subscribeNoteCheck").checked;
    const subFollowCheckData = {fRandom: followRandomization, fEnable: followEnabled, sRandom: subscribeRandomization, sEnable: subscribeEnabled};
    return subFollowCheckData;
}



function ExportSettings()
{
    const username = document.getElementById("botUsername").value;
    const channel = document.getElementById("targetChannel").value;
    const oauth = document.getElementById("oauth").value;
    const opPort = document.getElementById("operatingPort").value;
    const vrcPort = document.getElementById("vrcPort").value;
    const commandDelay = document.getElementById("commandDelay").value;
    const useDefault = document.getElementById("botLoginCheck").checked;
    const useWhite = document.getElementById("whiteListCheck").checked;
    const settingsData = {username: username, channel: channel, oauth, oauth, opPort: opPort, vrcPort: vrcPort, delay: commandDelay, useDefaultbot: useDefault, useWhiteList: useWhite};

    const commandData = [SaveCommandData(1), 
        SaveCommandData(2),
        SaveCommandData(3),
        SaveCommandData(4),
        SaveCommandData(5),
        SaveCommandData(6),
        SaveCommandData(7),
        SaveCommandData(8),
        SaveCommandData(9),
        SaveCommandData(10),
        SaveCommandData(11),
        SaveCommandData(12)];
  //  const followerData = [SaveFollowerData(1), SaveFollowerData(2), SaveFollowerData(3), SaveFollowerData(4)];
   // const subscriberData = [SaveSubscriberData(1), SaveSubscriberData(2), SaveSubscriberData(3), SaveSubscriberData(4)];
    //const subFollowCheckData = SaveSubFollowCheckData();
    //const data = {settingsData, commandData, subFollowCheckData, subscriberData, followerData};
    const data = {settingsData, commandData};
    
    const d = JSON.stringify(data, null, 2);
    ipcRenderer.send("SaveFile", d);
}
function ImportSettings()
{
    //document.getElementById('file-input').click();
    ipcRenderer.send("LoadFile");
}
ipcRenderer.on("LoadSettings", (event, data)=>
{
    document.getElementById("botUsername").value = data.settingsData.username;
    document.getElementById("targetChannel").value = data.settingsData.channel;
    document.getElementById("oauth").value = data.settingsData.oauth;
    document.getElementById("operatingPort").value = data.settingsData.opPort;
    document.getElementById("vrcPort").value = data.settingsData.vrcPort;
    document.getElementById("commandDelay").value = data.settingsData.delay;
    document.getElementById("botLoginCheck").checked = data.settingsData.useDefaultbot;
    document.getElementById("whiteListCheck").checked = data.settingsData.useWhiteList;
    ToggleDefaultBot();
    ToggleWhiteList();
    for (let i = 1; i < 13; i++) 
    {
        LoadCommandData(data, i);
    }
});

function RunMe()
{
    let btn = document.getElementById("botButton");
    var username = document.getElementById("botUsername").value;
    var channel = document.getElementById("targetChannel").value;
    var oauth = document.getElementById("oauth").value;
    var opPort = document.getElementById("operatingPort").value;
    var vrcPort = document.getElementById("vrcPort").value;
    var commandDelay = document.getElementById("commandDelay").value;
    if(username === "" && useDefaultBot === false)
    {
     //   alert("Invalid bot username!");
        return;
    }
    if(channel === "")
    {
      //  alert("Invalid target channel!");
        return;
    }
    if(oauth === "" && useDefaultBot === false)
    {
      //  alert("Invalid OAUTH Token!");
        return;
    }
    if(opPort === "")
    {
      //  alert("Invalid OAUTH Token!");
        return;
    }
    if(vrcPort === "")
    {
      //  alert("Invalid OAUTH Token!");
        return;
    }
    if(useDefaultBot === true)
    {
        username = process.env.OSCBOT_DEFAULTNAME;
        oauth = process.env.OSCBOT_TOKEN;
    }
    if(isOn === false)
    {
        //alert("Enabling Bot!");
        isOn = true;
        btn.style.backgroundColor = "darkgreen";
        btn.textContent = "Bot Enabled";
        ipcRenderer.send("StartBot", username, oauth, channel, opPort, vrcPort, commandDelay, useWhiteList);
        
    }
    else
    {
       // alert("Disabling Bot!");
        isOn = false;
        btn.style.backgroundColor = "darkred";
        btn.textContent = "Bot Disabled";
        ipcRenderer.send("StopBot", "hello from render process");
    }
    for (let i = 1; i < 13; i++) 
    {
        document.getElementById("command" + i).disabled = isOn;
        document.getElementById("command" + i + "InitialAddress").disabled = isOn;
        document.getElementById("command" + i + "InitialValue").disabled = isOn;
        document.getElementById("command" + i + "BotResponse").disabled = isOn;
        document.getElementById("command" + i + "WaitTime").disabled = isOn;
        document.getElementById("command" + i + "FinalAddress").disabled = isOn;
        document.getElementById("command" + i + "FinalValue").disabled = isOn;      
        document.getElementById("command" + i + "TimerCheck").disabled = isOn; 
        document.getElementById("command" + i + "FinalValueType").disabled = isOn; 
        document.getElementById("command" + i + "ValueType").disabled = isOn; 
    }
    // for (let i = 1; i < 5; i++) 
    // {
    //   //  document.getElementById("subscribeNote" + i).disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "InitialAddress").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "InitialValue").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "BotResponse").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "WaitTime").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "FinalAddress").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "FinalValue").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "TimerCheck").disabled = isOn;
    //     document.getElementById("subscribeNote" + i + "FinalValueType").disabled = isOn; 
    //     document.getElementById("subscribeNote" + i + "ValueType").disabled = isOn;        
    // }
    // for (let i = 1; i < 5; i++) 
    // {
    //    // document.getElementById("followNote" + i).disabled = isOn;
    //     document.getElementById("followNote" + i + "InitialAddress").disabled = isOn;
    //     document.getElementById("followNote" + i + "InitialValue").disabled = isOn;
    //     document.getElementById("followNote" + i + "BotResponse").disabled = isOn;
    //     document.getElementById("followNote" + i + "WaitTime").disabled = isOn;
    //     document.getElementById("followNote" + i + "FinalAddress").disabled = isOn;
    //     document.getElementById("followNote" + i + "FinalValue").disabled = isOn;
    //     document.getElementById("followNote" + i + "TimerCheck").disabled = isOn;
    //     document.getElementById("followNote" + i + "FinalValueType").disabled = isOn; 
    //     document.getElementById("followNote" + i + "ValueType").disabled = isOn;        
    // }
    // document.getElementById("followNoteRandomize").disabled = isOn;
    // document.getElementById("followNoteCheck").disabled = isOn;
    // document.getElementById("subscribeNoteRandomize").disabled = isOn;
    // document.getElementById("subscribeNoteCheck").disabled = isOn;

    document.getElementById("botUsername").disabled = isOn;
    document.getElementById("targetChannel").disabled = isOn;
    document.getElementById("oauth").disabled = isOn;
    document.getElementById("operatingPort").disabled = isOn;
    document.getElementById("vrcPort").disabled = isOn;
    document.getElementById("commandDelay").disabled = isOn;

    //ipcRenderer.send("msg", "hello from render process", "poop");
    // ipcRenderer.on("reply", (event,data)=>
    // {
    //     console.log(data);
    // });
    // console.log("Button Pressed!~");
}

ipcRenderer.on("GetCommandData", (event, commandNum)=>
{
    var data = SaveCommandData(commandNum);
    ipcRenderer.send("RecieveCommandData" + commandNum, data.name, data.address, data.value, data.valueType, data.botResponse, data.isTimed, data.waitTime, data.fAddress, data.fValue, data.fValueType);
});


// ipcRenderer.on("GetFollowSubChecks", (event, commandNum)=>
// {
//     var data = SaveSubFollowCheckData();
//     ipcRenderer.send("RecieveFollowSubChecks", data.fEnable,data.fRandom, data.sEnable, data.sRandom);
// });

// ipcRenderer.on("GetFollowData", (event, followNum)=>
// {
//     var data = SaveFollowerData(followNum);
//     ipcRenderer.send("RecieveFollowData" + followNum, data.address, data.value, data.valueType, data.botResponse, data.isTimed, data.waitTime, data.fAddress, data.fValue, data.fValueType);
// });

// ipcRenderer.on("GetSubscribeData", (event, subscribeNum)=>
// {
//     var data = SaveSubscriberData(subscribeNum);
//     ipcRenderer.send("RecieveSubscribeData" + subscribeNum, data.address, data.value, data.valueType, data.botResponse, data.isTimed, data.waitTime, data.fAddress, data.fValue, data.fValueType);
// });

function ShowHideTimer(commandNum)
{
    var chbox = document.getElementById("command" + commandNum + "TimerCheck");
    var vis = "none";
    if(chbox.checked)
    {
        vis = "block";
    }
    else
    {
        vis = "none";
    }
    document.getElementById("command" + commandNum + "TimerDiv").style.display = vis;
}
// function FnShowHideTimer(commandNum)
// {
//     var chbox = document.getElementById("followNote" + commandNum + "TimerCheck");
//     var vis = "none";
//     if(chbox.checked)
//     {
//         vis = "block";
//     }
//     else
//     {
//         vis = "none";
//     }
//     document.getElementById("followNote" + commandNum + "TimerDiv").style.display = vis;
// }
// function SnShowHideTimer(commandNum)
// {
//     var chbox = document.getElementById("subscribeNote" + commandNum + "TimerCheck");
//     var vis = "none";
//     if(chbox.checked)
//     {
//         vis = "block";
//     }
//     else
//     {
//         vis = "none";
//     }
//     document.getElementById("subscribeNote" + commandNum + "TimerDiv").style.display = vis;
// }

function IsBool(num)
{
    let v = document.getElementById("command" + num + "ValueType").value;
    if(v === "bool")
    {
        document.getElementsByName("cc" + num + "div")[0].hidden = false;
        document.getElementsByName("cc" + num + "div")[0].style.display = "inline-block";
        document.getElementsByName("civ" + num)[0].hidden = true;
        return;
    }
    else
    {
        document.getElementsByName("cc" + num + "div")[0].hidden = true;
        document.getElementsByName("cc" + num + "div")[0].style.display = "none";
        document.getElementsByName("civ" + num)[0].hidden = false;
        return;
    }
}

// function FnIsBool(num)
// {
//     let v = document.getElementById("followNote" + num + "ValueType").value;
//     if(v === "bool")
//     {
//         document.getElementsByName("fncb" + num + "div")[0].hidden = false;
//         document.getElementsByName("fncb" + num + "div")[0].style.display = "inline-block";
//         document.getElementsByName("fniv" + num)[0].hidden = true;
//         return;
//     }
//     else
//     {
//         document.getElementsByName("fncb" + num + "div")[0].hidden = true;
//         document.getElementsByName("fncb" + num + "div")[0].style.display = "none";
//         document.getElementsByName("fniv" + num)[0].hidden = false;
//         return;
//     }
// }
// function SnIsBool(num)
// {
//     let v = document.getElementById("subscribeNote" + num + "ValueType").value;
//     if(v === "bool")
//     {
//         document.getElementsByName("sncb" + num + "div")[0].hidden = false;
//         document.getElementsByName("sncb" + num + "div")[0].style.display = "inline-block";
//         document.getElementsByName("sniv" + num)[0].hidden = true;
//         return;
//     }
//     else
//     {
//         document.getElementsByName("sncb" + num + "div")[0].hidden = true;
//         document.getElementsByName("sncb" + num + "div")[0].style.display = "none";
//         document.getElementsByName("sniv" + num)[0].hidden = false;
//         return;
//     }
// }
function IsBoolFinal(num)
{
    let v = document.getElementById("command" + num + "FinalValueType").value;
    if(v === "bool")
    {
        document.getElementsByName("ccfinal" + num + "div")[0].hidden = false;
        document.getElementsByName("ccfinal" + num + "div")[0].style.display = "inline-block";
        document.getElementsByName("cfv" + num)[0].hidden = true;
        return;
    }
    else
    {
        document.getElementsByName("ccfinal" + num + "div")[0].hidden = true;
        document.getElementsByName("ccfinal" + num + "div")[0].style.display = "none";
        document.getElementsByName("cfv" + num)[0].hidden = false;
        return;
    }
}
// function FnIsBoolFinal(num)
// {
//     let v = document.getElementById("followNote" + num + "FinalValueType").value;
//     if(v === "bool")
//     {
//         document.getElementsByName("fnfinal" + num + "div")[0].hidden = false;
//         document.getElementsByName("fnfinal" + num + "div")[0].style.display = "inline-block";
//         document.getElementsByName("fnfv" + num)[0].hidden = true;
//         return;
//     }
//     else
//     {
//         document.getElementsByName("fnfinal" + num + "div")[0].hidden = true;
//         document.getElementsByName("fnfinal" + num + "div")[0].style.display = "none";
//         document.getElementsByName("fnfv" + num)[0].hidden = false;
//         return;
//     }
// }
// function SnIsBoolFinal(num)
// {
//     let v = document.getElementById("subscribeNote" + num + "FinalValueType").value;
//     if(v === "bool")
//     {
//         document.getElementsByName("snfinal" + num + "div")[0].hidden = false;
//         document.getElementsByName("snfinal" + num + "div")[0].style.display = "inline-block";
//         document.getElementsByName("snfv" + num)[0].hidden = true;
//         return;
//     }
//     else
//     {
//         document.getElementsByName("snfinal" + num + "div")[0].hidden = true;
//         document.getElementsByName("snfinal" + num + "div")[0].style.display = "none";
//         document.getElementsByName("snfv" + num)[0].hidden = false;
//         return;
//     }
// }
// const generatePassword = () =>
// {
//     //ipcRenderer.send('generatePassword', document.querySelector('.keyWord').value);
//     // alert(data);
//     console.log("Event recieved!");
// };

// ipcRenderer.on('recievePassword', (event, data) =>
// {
//     alert(data);
// });