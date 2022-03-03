# EZTwitchOSCBot
A really simple but customizable Twitch bot with a GUI interface that takes chat commands and sends them to VRChat through OSC.
This was more a project to teach myself node.js a bit better!

https://imgur.com/a/SZDBOFx

## Quick start guide:
1. Download release.
2. Unzip files and open TwitchToOSCBot.exe
3. Under Bot configuration, enter the name of the Twitch channel you want the bot to run on.
4. Start writing commands! In any open fields, start entering information for the commands, such as the name of the command (which is what viewers will enter for the bot to react).
5. When you are ready, hit the "Click To Enable Bot!" button.
6. Test in your Twitch Chat!

## Features:
- Up to 12 commands with custom addressses, values, value types, and a bot response
- Optional Timed feature to allow a command to fire a second OSC message after a determined amount of time.
- Optional delay fuction to prevent chat from spamming commands to much.
- Optional custom bot accounts. Unchecking the "Use default public bot" checkbox will allow you to enter a custom Twitch account and OAUTH token for the bot to live on instead.
- Ability to save and load your commands. After entering all your information in, you can save it to a .vrcosc file and open it again for later, in case you have different avatars with different commands!
