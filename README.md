# EZTwitchOSCBot
A really simple but customizable Twitch bot with a GUI interface that takes chat commands and sends them to VRChat through OSC.
This was more a project to teach myself node.js a bit better!

![alt text](https://i.imgur.com/QtTP92d.png)

## Quick start guide:
1. Download release.
2. Unzip files and open TwitchToOSCBot.exe
3. Under Bot configuration, enter the name of the Twitch channel you want the bot to run on.
4. Start writing commands! In any open fields, start entering information for the commands, such as the name of the command (which is what viewers will enter for the bot to react).
5. When you are ready, hit the "Click To Enable Bot!" button.
6. Test in your Twitch Chat!
7. (Optional: If you are using the default bot, type /mod vrcoscbot in your chat to give that bot mod perms so that it doesn't get timed out with too many responses. If you do not care about about the bot responses or don't feel comfortabler modding that account, it will not affect how the bot performs regarding the osc command or any of the other features. I don't know if there's a better way to get it so that the bot doesn't get timed out by twitch without modding the account unfortunately).

## Features:
- Up to 12 commands with custom addressses, values, value types, and a bot chat response.
- Supports sending Int, Float, and Bool OSC messages.
- Optional Timed feature to allow a command to fire a second OSC message after a determined amount of time.
- Optional delay fuction to prevent chat from spamming commands to much.
- Optional setting of custom incoming and outgoing ports.
- Optional custom bot accounts. Unchecking the "Use default public bot" checkbox will allow you to enter a custom Twitch account and OAUTH token for the bot to live on instead.
- Ability to save and load your commands. After entering all your information in, you can save it to a .vrcosc file and open it again for later, in case you have different avatars with different commands!
- Added toggleable whitelist! Allows the bot to ignore commands from anyone who isn't on the list if the list is enabled.
