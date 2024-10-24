{{MvPlugin
|preview = <youtube>https://www.youtube.com/watch?v=Es4-wDMwCF8</youtube>
|link2 = <html><iframe src="https://itch.io/embed/507967" height="167" width="552" frameborder="0"></iframe></html>
|link3 = <html><iframe src="https://itch.io/embed/398158" height="167" width="552" frameborder="0"></iframe></html>

}}
[[Category:RPG Maker MV Core Plugins]]
[[Category:RPG Maker MV Menu Plugins]]

{{Yanfly Engine Plugins}}

== Introduction ==

 <nowiki>For those who wish to alter the various aspects of the main menu commands
without needing to touch the source code can use this plugin to do so.
Although this plugin mostly ports the menu creation process to the Plugin
Manager parameters, it allows for a cleaner way to handle the menu command
management process.
</nowiki>

== How to Use This Plugin ==

 <nowiki>Each section in the parameters is divided up into various parts. Each of
these parts play a role in how the menu command functions. Here's what each
part does:

Name
- This is how the command will appear visually in the main menu. This is an
eval, which means, it's code driven. If you want the command to appear just
as it is, use 'quotes' around it.

Symbol
- This is the identifier for the command. Each command should have a unique
symbol, so much as to not cause conflicts with each command. However, shared
symbols are perfectly fine as long as you're fine with them performing the
same function when selected.

Show
- This is an eval condition for whether or not the command shows up in the
main menu. If you wish for this to always show up, simply use 'true' without
the quotes.

Enabled
- This is an eval condition for whether or not the command is enabled. The
difference between showing a command and enabling a command is that a
command can show, but it can't be selected because it isn't enabled. If you
wish for this command to always be enabled, use 'true' without the quotes.

Ext
- Stands for extension. This serves as a secondary symbol for the command
and it can be used for pretty much anything. It has no direct impact on the
command unless the command's objective is related to the extension value.
The majority of commands do not need to make use of the Ext value.

Main Bind
- This is an eval function that is to be ran when this command is selected
straight from the main menu. The function that is to be bound to this
command needs to be accessible from Scene_Menu is some way or another. For
commands that are meant to select an actor first, use
'this.commandItem.bind(this)' without the quotes.

Actor Bind
- This is an eval function that is to be ran when an actor is selected after
choosing this command, usually to push a scene. This function isn't needed
for any menu commands that don't require selecting an actor.
</nowiki>

== Examples ==

 <nowiki>The following are some examples to help you add/alter/change the way
commands appear for your main menu.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

      Name: TextManager.item
    Symbol: item
      Show: this.needsCommand('item')
   Enabled: this.areMainCommandsEnabled()
       Ext:
 Main Bind: this.commandItem.bind(this)
Actor Bind:

The item command is made using the above example. 'TextManager.item' is how
the command name will appear. It draws the name information from the
database Text Manager entry for 'Item' and uses whatever you put into the
database in here. The symbol 'item' is used to make the item command's
unique identifier. In order for the command to show, it will run a
'needsCommand' function to check if it will appear. This 'needsCommand'
function is related to your database on whether or not you want the item to
appear there. In order for this command to be enabled, it will check for
whether or not the main commands are enabled, which is related to whether or
not there are actors in the current party. And finally, the line of code
'this.commandItem.bind(this)' is the command that will run once the item
entry is selected.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

      Name: TextManager.skill
    Symbol: skill
      Show: this.needsCommand('skill')
   Enabled: this.areMainCommandsEnabled()
       Ext:
 Main Bind: this.commandPersonal.bind(this)
Actor Bind: SceneManager.push(Scene_Skill)

The skill command is made using the above example. 'TextManager.skill' is
how the command name will appear. It draws the name information from the
database Text Manager entry for 'Skill' and uses whatever you put into the
database in here. The symbol 'skill' is used to make the skill command's
unique identifier. In order for the command to show, it will run a line code
'needsCommand' function to check if it will appear. This 'needsCommand'
function is related to your database on whether or not you want the skill
option to appear there. In order for this command to be enabled, it will
check for whether or not the main commands are enabled, which is related to
whether or not there are actors in the current party. This time, the main
bind command is to send the player to the actor selection process using
'this.commandPersonal.bind(this)' instead. Once the player selects an actor,
'SceneManager.push(Scene_Skill)' is then ran to send the player to
Scene_Skill to manage the actor's skills.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

      Name: 'Common Event 1'
    Symbol: common event
      Show: false
   Enabled: true
       Ext: 1
 Main Bind: this.callCommonEvent.bind(this)
Actor Bind:

This is a customized command that is included by default with the plugin.
This command's name is 'Common Event 1', but it can be changed to whatever
you want by simply changing what's in between the 'quotes' in the parameter
settings. The symbol is the identifier for all common events. However, by
default, this common event item does not show in the main menu. If you want
it to appear, set the Show option to 'true' without the quotes and it will
appear. Because the Enabled option is 'true', the command can always be
selected by the player. The Ext actually has a role with this command. The
Ext determines which common event is to be played. In this example, the Ext
value is 1, which means common event 1 will be ran when this command is
selected. Should the Ext value equal to 25, it will be common event 25 that
will run once this command is selected. The reason is because the Main Bind
for this command option is 'this.callCommonEvent.bind(this)', which is a
function included in this plugin to allow for common events to be ran.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</nowiki>

{{Tips & Tricks MV}}

* [[Tonberry Shop (MV Plugin Tips & Tricks)|Tonberry Shop]]

== Changelog ==

 <nowiki>Version 1.03:
- Updated for RPG Maker MV version 1.5.0.

Version 1.02:
- The gold window will now match the command window's width.

Version 1.01:
- Added 'Hide Actor Window', 'Hide Gold Window', 'Blurry Background'
parameters for the plugin settings.

Version 1.00:
- Finished plugin!
</nowiki>

<!-- This is a comment, remove the arrows surrounding this for the categories you want to show -->
<!-- [[Category:RPG Maker MV Core Plugins]] -->
<!-- [[Category:RPG Maker MV Battle Plugins]] -->
<!-- [[Category:RPG Maker MV Item Plugins]] -->
<!-- [[Category:RPG Maker MV Skill Plugins]] -->
<!-- [[Category:RPG Maker MV Equip Plugins]] -->
<!-- [[Category:RPG Maker MV Status Menu Plugins]] -->
<!-- [[Category:RPG Maker MV Gameplay Plugins]] -->
<!-- [[Category:RPG Maker MV Movement Plugins]] -->
<!-- [[Category:RPG Maker MV Quest Plugins]] -->
<!-- [[Category:RPG Maker MV Options Plugins]] -->
<!-- [[Category:RPG Maker MV Eventing Plugins]] -->
[[Category:RPG Maker MV Utility Plugins]]
[[Category:RPG Maker MV Mechanical Plugins]]
[[Category:RPG Maker MV Visual Plugins]]
[[Category:RPG Maker MV Menu Plugins]]
<!-- [[Category:RPG Maker MV Message Plugins]] -->
[[Category:RPG Maker MV Quality of Life Plugins]]
<!-- [[Category:RPG Maker MV Plugin Tips & Tricks]] -->
<!-- [[Category:Action Sequences (MV)]] -->
<!-- [[Category:Main Menu Manager Integration (MV)]] -->
<!-- [[Category:Notetags (MV)]] -->
<!-- [[Category:Options Core Integration (MV)]] -->
<!-- [[Category:Plugin Commands (MV)]] -->
<!-- [[Category:Script Calls (MV)]] -->
<!-- [[Category:Text Codes (MV)]] -->
