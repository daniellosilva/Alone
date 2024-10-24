//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.19] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 *
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Actor ID:
 *   - Select which ID(s) to affect.
 *
 *   Filename:
 *   - Selected actor(s) will have their menu images changed to this.
 *
 * ---
 * 
 * === Menu Command Plugin Commands ===
 * 
 * ---
 * 
 * Menu Command: Clear Forced Settings
 * - Clear any forced settings for the menu command symbols.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Disable
 * - Forcefully disable specific menu commands via their symbols.
 * - Matching forced enabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Enable
 * - Forcefully enable specific menu commands via their symbols.
 * - Matching forced disabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Hide
 * - Forcefully hide specific menu commands via their symbols.
 * - Matching forced shown symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Show
 * - Forcefully show specific menu commands via their symbols.
 * - Matching forced hidden symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 *   - Only applies to the Command Window style: Default Vertical.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   Subcategory:
 *   - The subcategory used for this command.
 *   - Leave empty for no subcategory.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 * 
 * ==== Subcategories ====
 * 
 * Subcategories are a new addition to the Main Menu Core version 1.18. When a
 * subcategory is set, it will only display Command Window items that belong
 * to that subcategory. Those Command Window items do not appear when there is
 * no subcategory active or if it's a different subcategory.
 * 
 * ---
 * 
 * To create a subcategory, a few things must be done:
 * 
 * 1. The subcategory symbol must be "subcategory".
 * 
 * 2. The string returned by JS: Ext determines the subcategory. In the default
 *    Plugin Parameters, 'datalog' is returned as the subcategory. This becomes
 *    the subcategory when picked.
 * 
 * 3. For the JS: Run Code, have the following code somewhere in it:
 * 
 *    const ext = arguments[0];
 *    this.setSubcategory(ext);
 * 
 * ---
 * 
 * To make a Command Window item be a part of a subcategory do the following:
 * 
 * 1. Take the JS: Ext string value (case sensitive).
 * 
 * 2. Set it as the target Command Window item's "Subcategory" value.
 * 
 * 3. If the subcategory doesn't exist, then this Command Window item will
 *    appear normally.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.19: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'CG Gallery', 'Credits Page', and 'Patch Notes' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'cgGallery', 'creditsPage', or
 *      'patchNotes' option(s) and click copy. Go to the target project's Main
 *      Menu Core's 'Command Window List' plugin parameter. Paste the command
 *      where you want it to go.
 * 
 * Version 1.18: October 27, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section into Plugin Parameters: Command Window List for
 *    "Subcategories" and adding info on how they are handled.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Tutorial List' command.
 * *** This is for the upcoming VisuMZ_2_TutorialPanelSys plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'tutorialList' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * ** Subcategory called "Datalog" is now added.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'subcategory' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Existing entries for Quest, Message Log, and Combat Log are now added
 *      to the Datalog subcategory.
 * * New Features!
 * ** Subcategory support is now added for the Main Menu Command Window.
 * *** Subcategories allow you to make some Command Window items invisible
 *     until a subcategory is selected. This helps reduce clutter and save room
 *     on the Command Window command list.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Changed actor graphics now reflect properly for those using the default
 *    status menu. Fix made by Irina.
 * 
 * Version 1.16: April 21, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Menu Command: Clear Forced Settings
 * *** Menu Command: Force Disable
 * *** Menu Command: Force Enable
 * *** Menu Command: Force Hide
 * *** Menu Command: Force Show
 * **** These new Plugin Commands allow you to forcefully show, hide, enable,
 *      or disable Plugin Commands regardless of their required settings.
 * **** We are not responsible for errors that occur by accessing menus that
 *      should otherwise be disabled or hidden.
 * 
 * Version 1.15: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: October 25, 2021
 * * Bug Fixes!
 * ** Plugin Parameter settings for automatic Command Window height adjustment
 *    should now work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Added a note for the Help File: Gold Window > Thinner Gold Window
 * *** Only applies to the Command Window style: Default Vertical.
 * 
 * Version 1.13: October 21, 2021
 * * Feature Update!
 * ** Rounding update applied to picture portraits so that coordinates aren't
 *    drawn on non-whole numbers due to base images having odd values. Update
 *    made by Olivia.
 * 
 * Version 1.12: July 16, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Message Log' command.
 * *** This is for the upcoming VisuMZ_3_MessageLog plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'MessageLog' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Actor ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Actor ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MenuCommand
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandClear
 * @text Menu Command: Clear Forced Settings
 * @desc Clear any forced settings for the menu command symbols.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceDisable
 * @text Menu Command: Force Disable
 * @desc Forcefully disable specific menu commands via their symbols.
 * Matching forced enabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceEnable
 * @text Menu Command: Force Enable
 * @desc Forcefully enable specific menu commands via their symbols.
 * Matching forced disabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceHide
 * @text Menu Command: Force Hide
 * @desc Forcefully hide specific menu commands via their symbols.
 * Matching forced shown symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceShow
 * @text Menu Command: Force Show
 * @desc Forcefully show specific menu commands via their symbols.
 * Matching forced hidden symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MainMenuCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @parent General:struct
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"subcategory\",\"Subcategory:str\":\"\",\"Icon:num\":\"230\",\"TextStr:str\":\"Datalog\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return this.isSubcategoryVisible(arguments[1]);\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"// This becomes the subcategory name. Case-sensitive.\\\\n\\\\nreturn 'datalog';\\\"\",\"CallHandlerJS:func\":\"\\\"const ext = arguments[0];\\\\nthis.setSubcategory(ext);\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"tutorialList\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.tutorial.menuCmd;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_TutorialPanelSys &&\\\\n    this.isTutorialListCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isTutorialListCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandTutorialList();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"messageLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.MessageLogMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_3_MessageLog &&\\\\n    this.isMessageLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isMessageLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandMessageLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"cgGallery\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"311\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.cgGalleryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CGGallery &&\\\\n    this.isCgGalleryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCgGalleryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCgGallery();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"creditsPage\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.CreditsPageMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CreditsPage &&\\\\n    this.isCreditsPageCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCreditsPageCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCreditsPage();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"patchNotes\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.PatchNotesMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_PatchNotes &&\\\\n    this.isPatchNotesCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isPatchNotesCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPatchNotes();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param Subcategory:str
 * @text Subcategory
 * @desc The subcategory used for this command.
 * Leave empty for no subcategory.
 * @default 
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
//=============================================================================

const _0x575458=_0xdb37;(function(_0x4fcc3d,_0x2e3a02){const _0x2e4565=_0xdb37,_0x1a3498=_0x4fcc3d();while(!![]){try{const _0x42c4d4=parseInt(_0x2e4565(0x1bf))/0x1*(-parseInt(_0x2e4565(0x189))/0x2)+-parseInt(_0x2e4565(0x194))/0x3*(-parseInt(_0x2e4565(0x1c7))/0x4)+-parseInt(_0x2e4565(0x1d5))/0x5+-parseInt(_0x2e4565(0x1bc))/0x6+-parseInt(_0x2e4565(0x247))/0x7+parseInt(_0x2e4565(0x22d))/0x8*(-parseInt(_0x2e4565(0x17e))/0x9)+parseInt(_0x2e4565(0x2ab))/0xa*(parseInt(_0x2e4565(0x310))/0xb);if(_0x42c4d4===_0x2e3a02)break;else _0x1a3498['push'](_0x1a3498['shift']());}catch(_0x5ab18e){_0x1a3498['push'](_0x1a3498['shift']());}}}(_0x2674,0x21989));function _0xdb37(_0x1bb806,_0x106b31){const _0x2674b6=_0x2674();return _0xdb37=function(_0xdb370d,_0x10fab0){_0xdb370d=_0xdb370d-0x15d;let _0x4616ce=_0x2674b6[_0xdb370d];return _0x4616ce;},_0xdb37(_0x1bb806,_0x106b31);}var label=_0x575458(0x212),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x575458(0x2c7)](function(_0x2d3375){const _0x5cbd70=_0x575458;return _0x2d3375[_0x5cbd70(0x1d9)]&&_0x2d3375[_0x5cbd70(0x234)][_0x5cbd70(0x302)]('['+label+']');})[0x0];VisuMZ[label][_0x575458(0x1a6)]=VisuMZ[label][_0x575458(0x1a6)]||{},VisuMZ['ConvertParams']=function(_0x15eb04,_0x27c38e){const _0xdfe795=_0x575458;for(const _0x345b83 in _0x27c38e){if(_0x345b83[_0xdfe795(0x20a)](/(.*):(.*)/i)){if('ErOWJ'==='EABQQ')return this[_0xdfe795(0x230)]||'';else{const _0x13432b=String(RegExp['$1']),_0x581eeb=String(RegExp['$2'])[_0xdfe795(0x274)]()[_0xdfe795(0x198)]();let _0x57f7a8,_0x4abd82,_0x51d9cf;switch(_0x581eeb){case'NUM':_0x57f7a8=_0x27c38e[_0x345b83]!==''?Number(_0x27c38e[_0x345b83]):0x0;break;case _0xdfe795(0x1d3):_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON['parse'](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x1748ab=>Number(_0x1748ab));break;case _0xdfe795(0x1cc):_0x57f7a8=_0x27c38e[_0x345b83]!==''?eval(_0x27c38e[_0x345b83]):null;break;case _0xdfe795(0x2fd):_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON[_0xdfe795(0x2ba)](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x3d6ae9=>eval(_0x3d6ae9));break;case _0xdfe795(0x2da):_0x57f7a8=_0x27c38e[_0x345b83]!==''?JSON[_0xdfe795(0x2ba)](_0x27c38e[_0x345b83]):'';break;case'ARRAYJSON':_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON['parse'](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x102ffc=>JSON[_0xdfe795(0x2ba)](_0x102ffc));break;case _0xdfe795(0x18a):_0x57f7a8=_0x27c38e[_0x345b83]!==''?new Function(JSON['parse'](_0x27c38e[_0x345b83])):new Function(_0xdfe795(0x304));break;case _0xdfe795(0x2ca):_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON[_0xdfe795(0x2ba)](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x1df596=>new Function(JSON['parse'](_0x1df596)));break;case _0xdfe795(0x305):_0x57f7a8=_0x27c38e[_0x345b83]!==''?String(_0x27c38e[_0x345b83]):'';break;case _0xdfe795(0x195):_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON['parse'](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x57cb8e=>String(_0x57cb8e));break;case _0xdfe795(0x18c):_0x51d9cf=_0x27c38e[_0x345b83]!==''?JSON[_0xdfe795(0x2ba)](_0x27c38e[_0x345b83]):{},_0x15eb04[_0x13432b]={},VisuMZ[_0xdfe795(0x308)](_0x15eb04[_0x13432b],_0x51d9cf);continue;case _0xdfe795(0x177):_0x4abd82=_0x27c38e[_0x345b83]!==''?JSON['parse'](_0x27c38e[_0x345b83]):[],_0x57f7a8=_0x4abd82[_0xdfe795(0x1b2)](_0x20eb9c=>VisuMZ[_0xdfe795(0x308)]({},JSON[_0xdfe795(0x2ba)](_0x20eb9c)));break;default:continue;}_0x15eb04[_0x13432b]=_0x57f7a8;}}}return _0x15eb04;},(_0x1d283c=>{const _0x1a17db=_0x575458,_0x472ef5=_0x1d283c[_0x1a17db(0x1ee)];for(const _0x1304fd of dependencies){if(_0x1a17db(0x263)===_0x1a17db(0x263)){if(!Imported[_0x1304fd]){alert(_0x1a17db(0x235)[_0x1a17db(0x251)](_0x472ef5,_0x1304fd)),SceneManager['exit']();break;}}else this[_0x1a17db(0x174)](_0x4e773f),this['drawItem'](_0x2a2fea);}const _0x3e20ec=_0x1d283c['description'];if(_0x3e20ec['match'](/\[Version[ ](.*?)\]/i)){if('IfOno'!==_0x1a17db(0x25f)){const _0x14833f=_0xf5c583[_0x1a17db(0x196)][_0x1a17db(0x2a3)];return _0x14833f===_0x338782?_0x2b1922[_0x1a17db(0x212)][_0x1a17db(0x1a6)][_0x1a17db(0x2d2)]:_0x103e5a['MainMenuCore'][_0x1a17db(0x1a6)][_0x1a17db(0x163)];}else{const _0x47169b=Number(RegExp['$1']);_0x47169b!==VisuMZ[label][_0x1a17db(0x26a)]&&(_0x1a17db(0x312)!==_0x1a17db(0x312)?(this[_0x1a17db(0x203)]=_0x505be9[_0x1a17db(0x280)](),this[_0x1a17db(0x221)]=0x3c,_0x279007[_0x1a17db(0x24c)][_0x1a17db(0x2e7)]['call'](this,_0x586a87),this['refresh']()):(alert(_0x1a17db(0x255)[_0x1a17db(0x251)](_0x472ef5,_0x47169b)),SceneManager[_0x1a17db(0x30b)]()));}}if(_0x3e20ec[_0x1a17db(0x20a)](/\[Tier[ ](\d+)\]/i)){if('ywuhI'!=='ywuhI')this[_0x1a17db(0x2f1)]=_0x595b59[_0x1a17db(0x2ed)](this[_0x1a17db(0x23f)][_0x1a17db(0x1fb)]()),this[_0x1a17db(0x2f1)][_0x1a17db(0x1e8)](this[_0x1a17db(0x233)][_0x1a17db(0x1f5)](this));else{const _0x4382d5=Number(RegExp['$1']);if(_0x4382d5<tier)alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1a17db(0x251)](_0x472ef5,_0x4382d5,tier)),SceneManager['exit']();else{if(_0x1a17db(0x20b)!==_0x1a17db(0x20b))return _0x10ffd2[_0x1a17db(0x24c)][_0x1a17db(0x226)]['call'](this);else tier=Math[_0x1a17db(0x2d1)](_0x4382d5,tier);}}}VisuMZ[_0x1a17db(0x308)](VisuMZ[label][_0x1a17db(0x1a6)],_0x1d283c[_0x1a17db(0x166)]);})(pluginData),PluginManager[_0x575458(0x31c)](pluginData[_0x575458(0x1ee)],_0x575458(0x1ec),_0x924f9c=>{const _0x448b09=_0x575458;VisuMZ[_0x448b09(0x308)](_0x924f9c,_0x924f9c);const _0x4f3f4c=_0x924f9c[_0x448b09(0x18f)],_0x453fbf=_0x924f9c[_0x448b09(0x2b1)];for(let _0x334002 of _0x4f3f4c){if(_0x448b09(0x214)===_0x448b09(0x20f))return this[_0x448b09(0x28f)][_0x448b09(0x2ac)];else{_0x334002=parseInt(_0x334002)||0x0;if(_0x334002<=0x0)continue;const _0x497f34=$gameActors[_0x448b09(0x219)](_0x334002);if(!_0x497f34)continue;_0x497f34[_0x448b09(0x223)](_0x453fbf);}}}),PluginManager['registerCommand'](pluginData[_0x575458(0x1ee)],_0x575458(0x211),_0x3cf3c3=>{const _0x290ef4=_0x575458;VisuMZ[_0x290ef4(0x308)](_0x3cf3c3,_0x3cf3c3);const _0x5f4087=_0x3cf3c3[_0x290ef4(0x26e)]>=_0x3cf3c3[_0x290ef4(0x183)]?_0x3cf3c3[_0x290ef4(0x183)]:_0x3cf3c3[_0x290ef4(0x26e)],_0x4287bd=_0x3cf3c3[_0x290ef4(0x26e)]>=_0x3cf3c3[_0x290ef4(0x183)]?_0x3cf3c3[_0x290ef4(0x26e)]:_0x3cf3c3[_0x290ef4(0x183)],_0x1c7496=Array(_0x4287bd-_0x5f4087+0x1)[_0x290ef4(0x1b1)]()[_0x290ef4(0x1b2)]((_0x84a985,_0x80c77a)=>_0x5f4087+_0x80c77a),_0x17bdf3=_0x3cf3c3[_0x290ef4(0x2b1)];for(let _0x156d06 of _0x1c7496){_0x156d06=parseInt(_0x156d06)||0x0;if(_0x156d06<=0x0)continue;const _0x2b1293=$gameActors['actor'](_0x156d06);if(!_0x2b1293)continue;_0x2b1293[_0x290ef4(0x223)](_0x17bdf3);}}),PluginManager['registerCommand'](pluginData[_0x575458(0x1ee)],_0x575458(0x295),_0x17ba6f=>{const _0x3cc5f3=_0x575458;VisuMZ[_0x3cc5f3(0x308)](_0x17ba6f,_0x17ba6f);const _0xd4e64a=_0x17ba6f[_0x3cc5f3(0x18f)];let _0x470d74=[];while(_0xd4e64a['length']>0x0){const _0x23cf9d=_0xd4e64a[_0x3cc5f3(0x21a)]();if(Array[_0x3cc5f3(0x267)](_0x23cf9d)){if(_0x3cc5f3(0x217)!==_0x3cc5f3(0x31d))_0x470d74=_0x470d74[_0x3cc5f3(0x1f4)](_0x23cf9d);else return _0x3cc5f3(0x18b);}else _0x470d74[_0x3cc5f3(0x25b)](_0x23cf9d);}const _0x5b05f7=_0x17ba6f[_0x3cc5f3(0x2b1)];for(let _0x40fefa of _0x470d74){_0x40fefa=parseInt(_0x40fefa)||0x0;if(_0x40fefa<=0x0)continue;const _0x247cef=$gameActors[_0x3cc5f3(0x219)](_0x40fefa);if(!_0x247cef)continue;_0x247cef[_0x3cc5f3(0x223)](_0x5b05f7);}}),PluginManager[_0x575458(0x31c)](pluginData[_0x575458(0x1ee)],_0x575458(0x2a2),_0x5d70ac=>{const _0x1dc191=_0x575458;VisuMZ[_0x1dc191(0x308)](_0x5d70ac,_0x5d70ac);const _0x2a946a=_0x5d70ac[_0x1dc191(0x1a7)]||[];for(const _0x4dcb41 of _0x2a946a){$gameSystem[_0x1dc191(0x262)](_0x4dcb41);}}),PluginManager['registerCommand'](pluginData[_0x575458(0x1ee)],'MenuCommandForceEnable',_0x26c20b=>{const _0x5cb190=_0x575458;VisuMZ[_0x5cb190(0x308)](_0x26c20b,_0x26c20b);const _0x2dc42c=_0x26c20b[_0x5cb190(0x1a7)]||[];for(const _0x19c1cd of _0x2dc42c){'CBHYp'!==_0x5cb190(0x19e)?(this[_0x5cb190(0x2df)](),this[_0x5cb190(0x1cf)](),this[_0x5cb190(0x1ca)]()):$gameSystem[_0x5cb190(0x2e6)](_0x19c1cd);}}),PluginManager['registerCommand'](pluginData[_0x575458(0x1ee)],'MenuCommandForceDisable',_0x3edce2=>{const _0x4d61d9=_0x575458;VisuMZ['ConvertParams'](_0x3edce2,_0x3edce2);const _0x10059c=_0x3edce2[_0x4d61d9(0x1a7)]||[];for(const _0x4a7aa6 of _0x10059c){$gameSystem[_0x4d61d9(0x1ff)](_0x4a7aa6);}}),PluginManager[_0x575458(0x31c)](pluginData['name'],_0x575458(0x29b),_0x1bebb8=>{const _0x471196=_0x575458;VisuMZ['ConvertParams'](_0x1bebb8,_0x1bebb8);const _0x7945f6=_0x1bebb8['Symbols']||[];for(const _0x52fa82 of _0x7945f6){$gameSystem[_0x471196(0x190)](_0x52fa82);}}),PluginManager[_0x575458(0x31c)](pluginData[_0x575458(0x1ee)],'MenuCommandForceShow',_0x4f6ca7=>{const _0x425507=_0x575458;VisuMZ[_0x425507(0x308)](_0x4f6ca7,_0x4f6ca7);const _0x32cf5a=_0x4f6ca7[_0x425507(0x1a7)]||[];for(const _0x498a84 of _0x32cf5a){_0x425507(0x1a8)===_0x425507(0x1a8)?$gameSystem['forceShowMainMenuCommand'](_0x498a84):this['initialize'](...arguments);}}),VisuMZ['MainMenuCore'][_0x575458(0x1f7)]=Game_System[_0x575458(0x24c)][_0x575458(0x2e7)],Game_System[_0x575458(0x24c)][_0x575458(0x2e7)]=function(){const _0x2233db=_0x575458;VisuMZ['MainMenuCore'][_0x2233db(0x1f7)][_0x2233db(0x269)](this),this[_0x2233db(0x26b)]();},Game_System['prototype'][_0x575458(0x26b)]=function(){const _0x345746=_0x575458;this[_0x345746(0x1af)]=this[_0x345746(0x1af)]||{'forceShow':[],'forceHide':[],'forceEnable':[],'forceDisable':[]};},Game_System['prototype'][_0x575458(0x26d)]=function(){const _0x4f086c=_0x575458;if(this[_0x4f086c(0x1af)]===undefined)this['initMainMenuCore']();const _0x476dd8=['forceShow',_0x4f086c(0x15e),_0x4f086c(0x1a0),_0x4f086c(0x25e)];for(const _0xfa1da4 of _0x476dd8){this[_0x4f086c(0x1af)][_0xfa1da4]=this[_0x4f086c(0x1af)][_0xfa1da4]||[];}return this[_0x4f086c(0x1af)];},Game_System['prototype'][_0x575458(0x243)]=function(_0x3de266,_0x41827c){const _0x57cdfe=_0x575458,_0x10ba01=this[_0x57cdfe(0x26d)]();if(!_0x10ba01[_0x41827c])return![];return _0x10ba01[_0x41827c][_0x57cdfe(0x302)](_0x3de266);},Game_System[_0x575458(0x24c)][_0x575458(0x262)]=function(_0x302cad){const _0x448377=_0x575458,_0x1eee21=this[_0x448377(0x26d)](),_0x18eee2=['forceShow',_0x448377(0x15e),_0x448377(0x1a0),'forceDisable'];for(const _0x4b2599 of _0x18eee2){_0x1eee21[_0x4b2599][_0x448377(0x2e9)](_0x302cad);}},Game_System['prototype'][_0x575458(0x1ef)]=function(_0x13963e){const _0x46df44=_0x575458,_0x50374e=this['mainMenuCoreSettings']();!_0x50374e[_0x46df44(0x232)][_0x46df44(0x302)](_0x13963e)&&_0x50374e['forceShow'][_0x46df44(0x25b)](_0x13963e),_0x50374e[_0x46df44(0x15e)][_0x46df44(0x2e9)](_0x13963e);},Game_System[_0x575458(0x24c)][_0x575458(0x190)]=function(_0x8f3d42){const _0x3ce9e9=_0x575458,_0x336c02=this[_0x3ce9e9(0x26d)]();if(!_0x336c02[_0x3ce9e9(0x15e)][_0x3ce9e9(0x302)](_0x8f3d42)){if('vBkZV'!==_0x3ce9e9(0x27c))return this[_0x3ce9e9(0x19c)]();else _0x336c02[_0x3ce9e9(0x15e)][_0x3ce9e9(0x25b)](_0x8f3d42);}_0x336c02['forceShow']['remove'](_0x8f3d42);},Game_System[_0x575458(0x24c)][_0x575458(0x2e6)]=function(_0x5beb71){const _0x253683=_0x575458,_0x9116da=this[_0x253683(0x26d)]();if(!_0x9116da['forceEnable'][_0x253683(0x302)](_0x5beb71)){if(_0x253683(0x201)!==_0x253683(0x296))_0x9116da[_0x253683(0x1a0)][_0x253683(0x25b)](_0x5beb71);else{const _0x10c40d=this[_0x253683(0x2f8)]();if(['top',_0x253683(0x309),_0x253683(0x259)][_0x253683(0x302)](_0x10c40d))return this[_0x253683(0x191)]();else return[_0x253683(0x1b7),_0x253683(0x2fa)][_0x253683(0x302)](_0x10c40d)?this['playtimeWindowRectBottomStyle']():_0xa28994[_0x253683(0x212)][_0x253683(0x1a6)]['Playtime'][_0x253683(0x30d)][_0x253683(0x269)](this);}}_0x9116da['forceDisable'][_0x253683(0x2e9)](_0x5beb71);},Game_System[_0x575458(0x24c)][_0x575458(0x1ff)]=function(_0x197aa5){const _0x53c4dd=_0x575458,_0x75540=this[_0x53c4dd(0x26d)]();!_0x75540[_0x53c4dd(0x25e)]['includes'](_0x197aa5)&&('CAPZw'!==_0x53c4dd(0x1d7)?_0x75540[_0x53c4dd(0x25e)][_0x53c4dd(0x25b)](_0x197aa5):(_0x3c8330[_0x53c4dd(0x24c)][_0x53c4dd(0x281)][_0x53c4dd(0x269)](this),this[_0x53c4dd(0x160)][_0x53c4dd(0x2fc)]=_0x2fa5c0[_0x53c4dd(0x212)][_0x53c4dd(0x1a6)][_0x53c4dd(0x31f)]['FontSize'])),_0x75540['forceEnable'][_0x53c4dd(0x2e9)](_0x197aa5);},VisuMZ[_0x575458(0x212)][_0x575458(0x27e)]=Game_Actor[_0x575458(0x24c)]['setup'],Game_Actor[_0x575458(0x24c)][_0x575458(0x2cb)]=function(_0x3c997a){const _0x2037b5=_0x575458;VisuMZ[_0x2037b5(0x212)][_0x2037b5(0x27e)][_0x2037b5(0x269)](this,_0x3c997a),this[_0x2037b5(0x185)]();},Game_Actor['prototype'][_0x575458(0x185)]=function(){const _0x13a540=_0x575458;this[_0x13a540(0x1b5)]='',this[_0x13a540(0x219)]()&&this[_0x13a540(0x219)]()['note'][_0x13a540(0x20a)](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)&&(this[_0x13a540(0x1b5)]=String(RegExp['$1']));},Game_Actor['prototype']['getMenuImage']=function(){const _0x5bcb2a=_0x575458;if(this[_0x5bcb2a(0x1b5)]===undefined)this[_0x5bcb2a(0x185)]();return this[_0x5bcb2a(0x1b5)];},Game_Actor[_0x575458(0x24c)]['setMenuImage']=function(_0x4d28e9){const _0x5a3b2b=_0x575458;if(this['_menuImage']===undefined)this[_0x5a3b2b(0x185)]();this[_0x5a3b2b(0x1b5)]=_0x4d28e9;},Game_Actor[_0x575458(0x24c)][_0x575458(0x205)]=function(){const _0x5da223=_0x575458;if(this[_0x5da223(0x219)]()['note'][_0x5da223(0x20a)](/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this['actor']()[_0x5da223(0x31b)]['match'](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if('bGGJe'===_0x5da223(0x204)){const _0x4f6b9b=this[_0x5da223(0x175)](),_0x5acaa2=this[_0x5da223(0x178)](0x1,![]),_0x111c5f=_0x83c2c9['boxWidth']-_0x4f6b9b,_0xac2b21=this['mainAreaBottom']()-_0x5acaa2;return new _0x18d834(_0x111c5f,_0xac2b21,_0x4f6b9b,_0x5acaa2);}else return Number(RegExp['$1']);}}return 0x0;},Game_Actor[_0x575458(0x24c)][_0x575458(0x318)]=function(){const _0x26d5aa=_0x575458;if(this[_0x26d5aa(0x219)]()[_0x26d5aa(0x31b)][_0x26d5aa(0x20a)](/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x26d5aa(0x219)]()['note'][_0x26d5aa(0x20a)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)){if(_0x26d5aa(0x2d0)===_0x26d5aa(0x27a)){if(_0x127114[_0x26d5aa(0x1fb)]()!==''){const _0x1746cc=_0x108985[_0x26d5aa(0x2ed)](_0x44f061['getMenuImage']());_0x1746cc[_0x26d5aa(0x1e8)](this[_0x26d5aa(0x2ee)][_0x26d5aa(0x1f5)](this,_0x48261e,_0x3c1493));}else this[_0x26d5aa(0x1c8)](_0x388966,_0x4ceb7e);}else return Number(RegExp['$2']);}}return 0x0;},Scene_MenuBase[_0x575458(0x24c)]['isDisplayActorMenuBackgroundImage']=function(){const _0x318f2f=_0x575458;return VisuMZ[_0x318f2f(0x212)][_0x318f2f(0x1a6)]['General'][_0x318f2f(0x2fb)][_0x318f2f(0x302)](this['constructor'][_0x318f2f(0x1ee)]);},VisuMZ['MainMenuCore'][_0x575458(0x1ab)]=Scene_MenuBase[_0x575458(0x24c)]['createBackground'],Scene_MenuBase[_0x575458(0x24c)][_0x575458(0x19a)]=function(){const _0x36207d=_0x575458;VisuMZ[_0x36207d(0x212)][_0x36207d(0x1ab)]['call'](this),this[_0x36207d(0x25d)]();},Scene_MenuBase['prototype'][_0x575458(0x25d)]=function(){const _0x4d22d0=_0x575458;this[_0x4d22d0(0x27f)]=new Sprite_MenuBackgroundActor(),this[_0x4d22d0(0x1ba)](this['_actorMenuBgSprite']);},VisuMZ[_0x575458(0x212)][_0x575458(0x193)]=Scene_MenuBase['prototype'][_0x575458(0x16d)],Scene_MenuBase['prototype'][_0x575458(0x16d)]=function(){const _0x27a7ca=_0x575458;VisuMZ[_0x27a7ca(0x212)][_0x27a7ca(0x193)]['call'](this),this[_0x27a7ca(0x282)]()&&this['_actorMenuBgSprite']&&(_0x27a7ca(0x28e)!==_0x27a7ca(0x28e)?(this[_0x27a7ca(0x1b5)]='',this['actor']()&&this[_0x27a7ca(0x219)]()['note'][_0x27a7ca(0x20a)](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)&&(this[_0x27a7ca(0x1b5)]=_0x5ed4ec(_0x166f35['$1']))):this[_0x27a7ca(0x27f)][_0x27a7ca(0x285)](this[_0x27a7ca(0x23f)]));},VisuMZ[_0x575458(0x212)][_0x575458(0x231)]=Scene_Menu['prototype']['create'],Scene_Menu[_0x575458(0x24c)]['create']=function(){const _0x5e3d5b=_0x575458;VisuMZ['MainMenuCore']['Scene_Menu_create']['call'](this),this[_0x5e3d5b(0x24f)](),this[_0x5e3d5b(0x1a2)](),this[_0x5e3d5b(0x17c)]();},Scene_Menu[_0x575458(0x24c)][_0x575458(0x298)]=function(){const _0x193827=_0x575458,_0x47fc2c=this[_0x193827(0x2e1)](),_0x595af8=new Window_MenuCommand(_0x47fc2c);_0x595af8[_0x193827(0x246)](_0x193827(0x1f0),this[_0x193827(0x2ff)]['bind'](this)),this['addWindow'](_0x595af8),this[_0x193827(0x1b6)]=_0x595af8;},VisuMZ[_0x575458(0x212)][_0x575458(0x1ad)]=Scene_Menu[_0x575458(0x24c)][_0x575458(0x2e1)],Scene_Menu[_0x575458(0x24c)][_0x575458(0x2e1)]=function(){const _0x15b496=_0x575458,_0xe7806b=this[_0x15b496(0x2f8)]();if(_0xe7806b===_0x15b496(0x2af))return this[_0x15b496(0x23c)]();else{if(_0xe7806b===_0x15b496(0x309))return this['commandWindowRectThinTopStyle']();else{if(_0xe7806b==='bottom')return this[_0x15b496(0x261)]();else{if(_0xe7806b===_0x15b496(0x2fa)){if(_0x15b496(0x2a1)!==_0x15b496(0x2a1)){if(this[_0x15b496(0x221)]<=0x0)this['refresh']();}else return this[_0x15b496(0x1ce)]();}else{if(_0xe7806b==='mobile')return this[_0x15b496(0x23b)]();else{if('zjCKE'==='KaloT'){_0x18eeee=_0x3b416f||_0x24c211[_0x15b496(0x313)],_0x1d8713=_0x4d3bfd||_0x3252fc['faceHeight'];const _0x1d0d6e=_0x17f751['characterName'](),_0x1d1ba6=_0x4a4119[_0x15b496(0x21f)](),_0x118c3d=_0x2c441c['loadCharacter'](_0x1d0d6e),_0x585f1a=_0x307307['isBigCharacter'](_0x1d0d6e),_0x36b37d=_0x118c3d[_0x15b496(0x2ea)]/(_0x585f1a?0x3:0xc),_0xe46a70=_0x118c3d[_0x15b496(0x1db)]/(_0x585f1a?0x4:0x8),_0x10fe6d=_0x2dc5da,_0x42a839=_0xa78112-0x2,_0x304a16=_0x65b1ab+_0xe2066b[_0x15b496(0x2c9)](_0x10fe6d/0x2),_0x5d1900=_0x55211a+_0x29306b[_0x15b496(0x294)]((_0x2d199b+_0xe46a70)/0x2);this[_0x15b496(0x2a3)]===_0x69afc2&&this[_0x15b496(0x2f0)](_0x580166['isBattleMember']());const _0x218fee=_0x4bee55[_0x15b496(0x1aa)](_0x4b8e59,_0x36b37d),_0x679ca4=_0x180600[_0x15b496(0x1aa)](_0x12fb5a,_0xe46a70),_0x56f9a7=_0x34393b[_0x15b496(0x2c9)](_0x299dbb+_0x572274[_0x15b496(0x2d1)](_0x1eb527-_0x36b37d,0x0)/0x2),_0x49bb89=_0x24ab9c[_0x15b496(0x2c9)](_0x3c5d42+_0x590b26['max'](_0x38205c-_0xe46a70,0x0)/0x2),_0x4016d5=_0x585f1a?0x0:_0x1d1ba6,_0x116d61=(_0x4016d5%0x4*0x3+0x1)*_0x36b37d,_0x5b57dd=_0xa6a899['floor'](_0x4016d5/0x4)*0x4*_0xe46a70;this['contents'][_0x15b496(0x161)](_0x118c3d,_0x116d61,_0x5b57dd,_0x218fee,_0x679ca4,_0x56f9a7,_0x49bb89),this['changePaintOpacity'](!![]);}else{const _0x4ee253=VisuMZ[_0x15b496(0x212)][_0x15b496(0x1ad)][_0x15b496(0x269)](this);return this[_0x15b496(0x319)](_0x4ee253),_0x4ee253;}}}}}}},Scene_Menu[_0x575458(0x24c)][_0x575458(0x319)]=function(_0x2d485a){const _0x407a12=_0x575458;if(this[_0x407a12(0x1f3)]()){if(_0x407a12(0x21b)!==_0x407a12(0x21b)){const _0x140ef6=_0x3a77db[_0x407a12(0x1db)]-this[_0x407a12(0x178)](0x1,![]);_0x51e53f['y']+=_0x140ef6;}else _0x2d485a[_0x407a12(0x1db)]-=this[_0x407a12(0x300)]()[_0x407a12(0x1db)];}this[_0x407a12(0x26c)]()&&(_0x2d485a[_0x407a12(0x1db)]-=this[_0x407a12(0x2b9)]()['height']);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x23c)]=function(){const _0x48f267=_0x575458,_0x242dc9=VisuMZ['MainMenuCore'][_0x48f267(0x1a6)][_0x48f267(0x1b0)][_0x48f267(0x1c2)],_0x3f67b4=Graphics[_0x48f267(0x25c)],_0x3d4421=this[_0x48f267(0x178)](_0x242dc9,!![]),_0xd2cf1d=0x0,_0x53f5ee=this[_0x48f267(0x16b)]();return new Rectangle(_0xd2cf1d,_0x53f5ee,_0x3f67b4,_0x3d4421);},Scene_Menu['prototype'][_0x575458(0x28a)]=function(){const _0xfff09a=_0x575458,_0x23106f=VisuMZ[_0xfff09a(0x212)][_0xfff09a(0x1a6)][_0xfff09a(0x1b0)]['Rows'],_0x52d0c9=Graphics[_0xfff09a(0x25c)],_0x313934=this[_0xfff09a(0x178)](0x1,!![]),_0x36dfe2=0x0,_0x43d32c=this[_0xfff09a(0x16b)]();return new Rectangle(_0x36dfe2,_0x43d32c,_0x52d0c9,_0x313934);},Scene_Menu['prototype'][_0x575458(0x261)]=function(){const _0x4eccfa=_0x575458,_0xfac38=VisuMZ[_0x4eccfa(0x212)][_0x4eccfa(0x1a6)][_0x4eccfa(0x1b0)][_0x4eccfa(0x1c2)],_0x300c35=Graphics[_0x4eccfa(0x25c)],_0x25c43d=this[_0x4eccfa(0x178)](_0xfac38,!![]),_0x4ebf4e=0x0,_0x239b47=this[_0x4eccfa(0x2c6)]()-_0x25c43d;return new Rectangle(_0x4ebf4e,_0x239b47,_0x300c35,_0x25c43d);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x1ce)]=function(){const _0xaf26e9=_0x575458,_0x3a576f=VisuMZ[_0xaf26e9(0x212)][_0xaf26e9(0x1a6)][_0xaf26e9(0x1b0)][_0xaf26e9(0x1c2)],_0x5ea8ea=Graphics['boxWidth'],_0x5abb2a=this[_0xaf26e9(0x178)](0x1,!![]),_0x1a265b=0x0,_0x1dbaac=this[_0xaf26e9(0x2c6)]()-_0x5abb2a;return new Rectangle(_0x1a265b,_0x1dbaac,_0x5ea8ea,_0x5abb2a);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x23b)]=function(){const _0x350ea8=_0x575458,_0x5bea4d=VisuMZ[_0x350ea8(0x212)][_0x350ea8(0x1a6)][_0x350ea8(0x1b0)]['Rows'],_0x357d0b=Graphics[_0x350ea8(0x25c)],_0x126d7b=Window_MenuCommand[_0x350ea8(0x24c)]['fittingHeight'](_0x5bea4d),_0xc00255=0x0,_0x4dee4a=Math[_0x350ea8(0x2bf)]((Graphics['boxHeight']-_0x126d7b)/0x2);return new Rectangle(_0xc00255,_0x4dee4a,_0x357d0b,_0x126d7b);},Scene_Menu[_0x575458(0x24c)]['commandWindowStyle']=function(){const _0x56d509=_0x575458;return VisuMZ[_0x56d509(0x212)]['Settings'][_0x56d509(0x1e2)];},Scene_Menu[_0x575458(0x24c)]['thinGoldWindow']=function(){const _0x3830d6=_0x575458;if(this['commandWindowStyle']()!==_0x3830d6(0x18d))return!![];return VisuMZ[_0x3830d6(0x212)][_0x3830d6(0x1a6)][_0x3830d6(0x1da)][_0x3830d6(0x2f3)];},Scene_Menu[_0x575458(0x24c)][_0x575458(0x2a9)]=function(){const _0x1d64a9=_0x575458,_0x544321=this['goldWindowRect']();this[_0x1d64a9(0x1c9)]=this[_0x1d64a9(0x1ae)]()?new Window_ThinGold(_0x544321):new Window_Gold(_0x544321),this[_0x1d64a9(0x15f)](this[_0x1d64a9(0x1c9)]);},VisuMZ[_0x575458(0x212)][_0x575458(0x314)]=Scene_Menu[_0x575458(0x24c)]['goldWindowRect'],Scene_Menu[_0x575458(0x24c)][_0x575458(0x1d2)]=function(){const _0x4cc4ed=_0x575458,_0x36071c=this[_0x4cc4ed(0x2f8)]();if([_0x4cc4ed(0x2af),'thinTop',_0x4cc4ed(0x259)][_0x4cc4ed(0x302)](_0x36071c)){if(_0x4cc4ed(0x218)===_0x4cc4ed(0x218))return this['goldWindowRectTopStyle']();else{const _0xe0e2b1=this[_0x4cc4ed(0x26d)]();!_0xe0e2b1[_0x4cc4ed(0x25e)]['includes'](_0x1fd238)&&_0xe0e2b1['forceDisable'][_0x4cc4ed(0x25b)](_0x392559),_0xe0e2b1[_0x4cc4ed(0x1a0)]['remove'](_0x404e5c);}}else{if([_0x4cc4ed(0x1b7),'thinBottom']['includes'](_0x36071c))return this['goldWindowRectBottomStyle']();else{if(_0x4cc4ed(0x306)===_0x4cc4ed(0x1a1))return this[_0x4cc4ed(0x1ce)]();else{const _0x5a0d08=VisuMZ[_0x4cc4ed(0x212)][_0x4cc4ed(0x314)][_0x4cc4ed(0x269)](this);return this[_0x4cc4ed(0x276)](_0x5a0d08),_0x5a0d08;}}}},Scene_Menu[_0x575458(0x24c)][_0x575458(0x276)]=function(_0x36927f){const _0x5d9814=_0x575458;if(this[_0x5d9814(0x1ae)]()){if(_0x5d9814(0x244)!==_0x5d9814(0x197)){if(VisuMZ[_0x5d9814(0x212)]['Settings'][_0x5d9814(0x1da)][_0x5d9814(0x2a4)]){const _0x376da4=_0x36927f[_0x5d9814(0x1db)]-this[_0x5d9814(0x178)](0x1,![]);_0x36927f['y']+=_0x376da4;}VisuMZ[_0x5d9814(0x212)]['Settings'][_0x5d9814(0x1da)][_0x5d9814(0x206)]&&(_0x36927f[_0x5d9814(0x1db)]=this[_0x5d9814(0x178)](0x1,![]));}else for(const _0x161c12 of _0x7b7a06[_0x5d9814(0x228)]){const _0x29aa1a=_0x161c12[_0x5d9814(0x1a3)];if(this[_0x5d9814(0x2a6)](_0x29aa1a,_0x161c12)){let _0x2b8b67=_0x161c12[_0x5d9814(0x2b8)];if(['',_0x5d9814(0x210)][_0x5d9814(0x302)](_0x2b8b67))_0x2b8b67=_0x161c12['TextJS'][_0x5d9814(0x269)](this);const _0x821e29=_0x161c12[_0x5d9814(0x1c0)];_0x821e29>0x0&&this[_0x5d9814(0x27b)]()!=='text'&&(_0x2b8b67=_0x5d9814(0x248)[_0x5d9814(0x251)](_0x821e29,_0x2b8b67));const _0x13640e=this[_0x5d9814(0x15d)](_0x29aa1a,_0x161c12),_0x33861c=_0x161c12[_0x5d9814(0x1eb)]['call'](this);this[_0x5d9814(0x2c2)](_0x2b8b67,_0x29aa1a,_0x13640e,_0x33861c),this['setHandler'](_0x29aa1a,_0x161c12['CallHandlerJS'][_0x5d9814(0x1f5)](this,_0x33861c));}this[_0x5d9814(0x164)](_0x29aa1a);}}},Scene_Menu[_0x575458(0x24c)]['goldWindowRectTopStyle']=function(){const _0x59d9b8=_0x575458,_0x4df8c0=this['mainCommandWidth'](),_0x6e9f82=this[_0x59d9b8(0x178)](0x1,![]),_0x5f5697=Graphics[_0x59d9b8(0x25c)]-_0x4df8c0,_0x5855dd=this[_0x59d9b8(0x2c6)]()-_0x6e9f82;return new Rectangle(_0x5f5697,_0x5855dd,_0x4df8c0,_0x6e9f82);},Scene_Menu['prototype']['goldWindowRectBottomStyle']=function(){const _0x4c27c3=_0x575458,_0x334200=this['mainCommandWidth'](),_0x2e7f7d=this[_0x4c27c3(0x178)](0x1,![]),_0x16d8ed=Graphics[_0x4c27c3(0x25c)]-_0x334200,_0x27ce92=this['mainAreaTop']();return new Rectangle(_0x16d8ed,_0x27ce92,_0x334200,_0x2e7f7d);},VisuMZ[_0x575458(0x212)]['Scene_Menu_createStatusWindow']=Scene_Menu['prototype'][_0x575458(0x16e)],Scene_Menu[_0x575458(0x24c)][_0x575458(0x16e)]=function(){const _0x279334=_0x575458;VisuMZ[_0x279334(0x212)][_0x279334(0x2e4)]['call'](this),this['adjustStatusWindowMobile']();},Scene_Menu[_0x575458(0x24c)][_0x575458(0x168)]=function(){const _0x1a92bf=_0x575458;this['commandWindowStyle']()==='mobile'&&(this[_0x1a92bf(0x2e5)][_0x1a92bf(0x237)]=0x0);},VisuMZ[_0x575458(0x212)]['Scene_Menu_statusWindowRect']=Scene_Menu[_0x575458(0x24c)][_0x575458(0x266)],Scene_Menu[_0x575458(0x24c)]['statusWindowRect']=function(){const _0x16705f=_0x575458,_0x4d3e15=this[_0x16705f(0x2f8)]();if([_0x16705f(0x2af),_0x16705f(0x309)][_0x16705f(0x302)](_0x4d3e15))return this['statusWindowRectTopStyle']();else{if([_0x16705f(0x1b7),'thinBottom'][_0x16705f(0x302)](_0x4d3e15)){if('fjOXr'===_0x16705f(0x253))_0x4bad09[_0x16705f(0x212)][_0x16705f(0x1a6)][_0x16705f(0x18e)]['VerticalStyle'][_0x16705f(0x269)](this,_0x41a157,_0x250278);else return this['statusWindowRectBottomStyle']();}else{if(_0x4d3e15===_0x16705f(0x259))return this['statusWindowRectMobileStyle']();else{if('sMyNG'===_0x16705f(0x199))return VisuMZ[_0x16705f(0x212)][_0x16705f(0x293)]['call'](this);else{const _0x2fe8ba=this[_0x16705f(0x24e)](this[_0x16705f(0x2bb)]());let _0x3e0241=this[_0x16705f(0x31e)](this[_0x16705f(0x2bb)]());_0x3e0241=_0x3e0241['replace'](/\\I\[(\d+)\]/gi,''),_0x21e330['resetFontSettings'](),this['commandNameWindowDrawBackground'](_0x3e0241,_0x2fe8ba),this[_0x16705f(0x23e)](_0x3e0241,_0x2fe8ba),this[_0x16705f(0x254)](_0x3e0241,_0x2fe8ba);}}}}},Scene_Menu[_0x575458(0x24c)]['statusWindowRectTopStyle']=function(){const _0x98a1cb=_0x575458,_0x3b5844=Graphics[_0x98a1cb(0x25c)],_0x1aaa65=this['mainAreaHeight']()-this[_0x98a1cb(0x1b6)][_0x98a1cb(0x1db)]-this[_0x98a1cb(0x1c9)][_0x98a1cb(0x1db)],_0x285c40=0x0,_0x16dd2a=this[_0x98a1cb(0x1b6)]['y']+this[_0x98a1cb(0x1b6)][_0x98a1cb(0x1db)];return new Rectangle(_0x285c40,_0x16dd2a,_0x3b5844,_0x1aaa65);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x1dd)]=function(){const _0x51ef2d=_0x575458,_0x4cdee1=Graphics['boxWidth'],_0x26a506=this['mainAreaHeight']()-this[_0x51ef2d(0x1b6)]['height']-this[_0x51ef2d(0x1c9)][_0x51ef2d(0x1db)],_0x3758fc=0x0,_0x4f990b=this[_0x51ef2d(0x1c9)]['y']+this[_0x51ef2d(0x1c9)]['height'];return new Rectangle(_0x3758fc,_0x4f990b,_0x4cdee1,_0x26a506);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x278)]=function(){const _0xf3b9b3=_0x575458,_0x54d6f5=Graphics[_0xf3b9b3(0x25c)],_0x130a87=this[_0xf3b9b3(0x239)]()-this['_goldWindow']['height'],_0x2afd5f=0x0,_0xf7135c=this[_0xf3b9b3(0x2c6)]()-this['_goldWindow'][_0xf3b9b3(0x1db)]-_0x130a87;return new Rectangle(_0x2afd5f,_0xf7135c,_0x54d6f5,_0x130a87);},Scene_Menu['prototype']['createPlaytimeWindow']=function(){const _0x14579b=_0x575458;if(!this[_0x14579b(0x268)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0xa02839=this[_0x14579b(0x300)]();this[_0x14579b(0x20c)]=new Window_Playtime(_0xa02839),this[_0x14579b(0x20c)][_0x14579b(0x22f)](VisuMZ['MainMenuCore'][_0x14579b(0x1a6)][_0x14579b(0x31f)][_0x14579b(0x2ce)]),this[_0x14579b(0x15f)](this[_0x14579b(0x20c)]);},Scene_Menu[_0x575458(0x24c)]['canCreatePlaytimeWindow']=function(){const _0x3cda68=_0x575458;return VisuMZ[_0x3cda68(0x212)][_0x3cda68(0x1a6)][_0x3cda68(0x31f)][_0x3cda68(0x1e9)];},Scene_Menu[_0x575458(0x24c)][_0x575458(0x1f3)]=function(){const _0x5a3644=_0x575458;return this[_0x5a3644(0x268)]()&&(VisuMZ[_0x5a3644(0x212)][_0x5a3644(0x1a6)][_0x5a3644(0x31f)][_0x5a3644(0x24b)]??!![]);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x300)]=function(){const _0x16488e=_0x575458,_0x28e4a4=this[_0x16488e(0x2f8)]();if(['top',_0x16488e(0x309),_0x16488e(0x259)]['includes'](_0x28e4a4))return this[_0x16488e(0x191)]();else{if(['bottom',_0x16488e(0x2fa)][_0x16488e(0x302)](_0x28e4a4))return this[_0x16488e(0x273)]();else{if(_0x16488e(0x2c4)===_0x16488e(0x2c4))return VisuMZ['MainMenuCore'][_0x16488e(0x1a6)][_0x16488e(0x31f)]['WindowRect']['call'](this);else this[_0x16488e(0x1f3)]()&&(_0x409fad[_0x16488e(0x1db)]-=this[_0x16488e(0x300)]()[_0x16488e(0x1db)]),this[_0x16488e(0x26c)]()&&(_0x43887b[_0x16488e(0x1db)]-=this[_0x16488e(0x2b9)]()[_0x16488e(0x1db)]);}}},Scene_Menu[_0x575458(0x24c)][_0x575458(0x191)]=function(){const _0x5dcd96=_0x575458,_0x1887de=this['mainCommandWidth'](),_0x420f45=this[_0x5dcd96(0x178)](0x1,![]),_0x2071bf=0x0,_0x1dd3e1=this[_0x5dcd96(0x2c6)]()-_0x420f45;return new Rectangle(_0x2071bf,_0x1dd3e1,_0x1887de,_0x420f45);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x273)]=function(){const _0x21300f=_0x575458,_0x4b7238=this[_0x21300f(0x175)](),_0x481d53=this[_0x21300f(0x178)](0x1,![]),_0x417465=0x0,_0x5d1a0d=this[_0x21300f(0x16b)]();return new Rectangle(_0x417465,_0x5d1a0d,_0x4b7238,_0x481d53);},Scene_Menu['prototype']['createVariableWindow']=function(){const _0x2de0a1=_0x575458;if(!this[_0x2de0a1(0x242)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x588092=this[_0x2de0a1(0x2b9)]();this['_variableWindow']=new Window_MenuVariables(_0x588092),this[_0x2de0a1(0x26f)][_0x2de0a1(0x22f)](VisuMZ[_0x2de0a1(0x212)]['Settings'][_0x2de0a1(0x207)]['BgType']),this[_0x2de0a1(0x15f)](this[_0x2de0a1(0x26f)]);},Scene_Menu[_0x575458(0x24c)]['canCreateVariableWindow']=function(){const _0x4e5f10=_0x575458;return VisuMZ[_0x4e5f10(0x212)]['Settings']['Variable'][_0x4e5f10(0x1e9)];},Scene_Menu['prototype'][_0x575458(0x26c)]=function(){const _0x22d762=_0x575458;return this[_0x22d762(0x242)]()&&(VisuMZ['MainMenuCore'][_0x22d762(0x1a6)][_0x22d762(0x207)][_0x22d762(0x24b)]??!![]);},Scene_Menu[_0x575458(0x24c)]['variableWindowRect']=function(){const _0x59322b=_0x575458,_0x22e316=this[_0x59322b(0x2f8)]();if([_0x59322b(0x2af),_0x59322b(0x309),'mobile']['includes'](_0x22e316)){if(_0x59322b(0x297)==='qSqxF'){if(!this[_0x59322b(0x2d4)]())return;const _0x10648c=this['variableWindowRect']();this[_0x59322b(0x1e1)]=new _0x1616d6(_0x10648c),this[_0x59322b(0x1e1)]['setBackgroundType'](_0x54a37a[_0x59322b(0x212)][_0x59322b(0x1a6)][_0x59322b(0x207)]['BgType']),this[_0x59322b(0x15f)](this[_0x59322b(0x1e1)]);}else return this[_0x59322b(0x288)]();}else{if(['bottom',_0x59322b(0x2fa)]['includes'](_0x22e316))return'yeShG'!==_0x59322b(0x2c1)?this['variableWindowRectBottomStyle']():this['canCreatePlaytimeWindow']()&&(_0x28c8bc[_0x59322b(0x212)][_0x59322b(0x1a6)][_0x59322b(0x31f)]['AdjustCommandHeight']??!![]);else{if(_0x59322b(0x27d)!=='qGOXG'){const _0x47d632=_0xdb1493[_0x59322b(0x212)][_0x59322b(0x1a6)][_0x59322b(0x1da)];if(_0x47d632[_0x59322b(0x2be)]===_0x45def5)_0x47d632[_0x59322b(0x2be)]=!![];const _0x3d66d7=_0xbaa842[_0x59322b(0x196)];if(!_0x47d632['ShowReserve']){if(_0x47d632[_0x59322b(0x2ec)])return _0x3d66d7[_0x59322b(0x2a3)]===_0x1e3ad3;return!![];}return![];}else return VisuMZ[_0x59322b(0x212)][_0x59322b(0x1a6)][_0x59322b(0x207)][_0x59322b(0x30d)]['call'](this);}}},Scene_Menu[_0x575458(0x24c)][_0x575458(0x288)]=function(){const _0x2a000e=_0x575458,_0x227a67=Graphics[_0x2a000e(0x25c)]-this[_0x2a000e(0x1c9)][_0x2a000e(0x2ea)]-(this[_0x2a000e(0x20c)]?this[_0x2a000e(0x20c)][_0x2a000e(0x2ea)]:0x0),_0x1e2311=this[_0x2a000e(0x178)](0x1,![]),_0x32a7ea=this['_goldWindow']['x']-_0x227a67,_0x2f5575=this[_0x2a000e(0x2c6)]()-_0x1e2311;return new Rectangle(_0x32a7ea,_0x2f5575,_0x227a67,_0x1e2311);},Scene_Menu['prototype'][_0x575458(0x2a5)]=function(){const _0x5209d3=_0x575458,_0x23800d=Graphics[_0x5209d3(0x25c)]-this[_0x5209d3(0x1c9)][_0x5209d3(0x2ea)]-(this[_0x5209d3(0x20c)]?this[_0x5209d3(0x20c)][_0x5209d3(0x2ea)]:0x0),_0x4cd761=this[_0x5209d3(0x178)](0x1,![]),_0x54eb9a=this[_0x5209d3(0x1c9)]['x']-_0x23800d,_0x58c874=this[_0x5209d3(0x16b)]();return new Rectangle(_0x54eb9a,_0x58c874,_0x23800d,_0x4cd761);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x17c)]=function(){const _0x5930fb=_0x575458;if(!this['needsDummyWindow']())return;const _0x1f8960=this[_0x5930fb(0x2b9)]();this[_0x5930fb(0x1e1)]=new Window_Base(_0x1f8960),this[_0x5930fb(0x1e1)][_0x5930fb(0x22f)](VisuMZ[_0x5930fb(0x212)][_0x5930fb(0x1a6)][_0x5930fb(0x207)][_0x5930fb(0x2ce)]),this[_0x5930fb(0x15f)](this[_0x5930fb(0x1e1)]);},Scene_Menu[_0x575458(0x24c)][_0x575458(0x2d4)]=function(){const _0x1434b5=_0x575458;if([_0x1434b5(0x18d),_0x1434b5(0x259)][_0x1434b5(0x302)](this['commandWindowStyle']()))return![];if(this[_0x1434b5(0x26f)])return![];return!![];},VisuMZ[_0x575458(0x212)][_0x575458(0x19d)]=Scene_Menu[_0x575458(0x24c)]['commandPersonal'],Scene_Menu[_0x575458(0x24c)][_0x575458(0x29a)]=function(){const _0x6a6695=_0x575458;if(this[_0x6a6695(0x2e2)]()&&this[_0x6a6695(0x2e5)])'PUlpa'!==_0x6a6695(0x2c3)?(_0x145967[_0x6a6695(0x30f)](_0x50fbd2),this[_0x6a6695(0x2b7)]()):($gameParty[_0x6a6695(0x245)]($gameParty[_0x6a6695(0x299)]()[0x0]),this[_0x6a6695(0x28d)]());else{if(this['commandWindowStyle']()===_0x6a6695(0x259))this[_0x6a6695(0x2e5)]['open']();VisuMZ[_0x6a6695(0x212)][_0x6a6695(0x19d)][_0x6a6695(0x269)](this);}},Scene_Menu[_0x575458(0x24c)][_0x575458(0x2e2)]=function(){const _0xfea515=_0x575458;return VisuMZ['MainMenuCore'][_0xfea515(0x1a6)][_0xfea515(0x1da)][_0xfea515(0x1e5)]&&$gameParty[_0xfea515(0x299)]()[_0xfea515(0x2ac)]<=0x1;},Scene_Menu[_0x575458(0x24c)][_0x575458(0x28d)]=function(){const _0x2d9d7d=_0x575458,_0x45b393=this[_0x2d9d7d(0x1b6)][_0x2d9d7d(0x22e)](),_0x7d0645=this[_0x2d9d7d(0x1b6)]['currentExt']();for(const _0x2b3dc4 of Window_MenuCommand['_commandList']){if('dYcMC'==='dYcMC'){if(_0x2b3dc4['Symbol']===_0x45b393){_0x2b3dc4[_0x2d9d7d(0x2d3)][_0x2d9d7d(0x269)](this,_0x7d0645);return;}}else this['_menuImage']=_0x2d097b(_0x37e272['$1']);}},VisuMZ['MainMenuCore'][_0x575458(0x1cb)]=Scene_Menu[_0x575458(0x24c)]['onPersonalCancel'],Scene_Menu[_0x575458(0x24c)]['onPersonalCancel']=function(){const _0x4c0d94=_0x575458;VisuMZ['MainMenuCore'][_0x4c0d94(0x1cb)][_0x4c0d94(0x269)](this);if(this[_0x4c0d94(0x2f8)]()===_0x4c0d94(0x259))this[_0x4c0d94(0x2e5)]['close']();},Scene_Menu['prototype'][_0x575458(0x29f)]=function(){const _0x222be4=_0x575458,_0x512b91=parseInt(this[_0x222be4(0x1b6)][_0x222be4(0x167)]());_0x512b91?($gameTemp[_0x222be4(0x30f)](_0x512b91),this['popScene']()):this[_0x222be4(0x1b6)][_0x222be4(0x215)]();},VisuMZ[_0x575458(0x212)][_0x575458(0x1d4)]=Scene_Menu[_0x575458(0x24c)][_0x575458(0x2de)],Scene_Menu['prototype'][_0x575458(0x2de)]=function(){const _0x380a46=_0x575458;VisuMZ[_0x380a46(0x212)]['Scene_Menu_commandFormation'][_0x380a46(0x269)](this);if(this['commandWindowStyle']()==='mobile')this[_0x380a46(0x2e5)]['open']();},VisuMZ[_0x575458(0x212)][_0x575458(0x176)]=Scene_Menu[_0x575458(0x24c)][_0x575458(0x279)],Scene_Menu[_0x575458(0x24c)]['onFormationCancel']=function(){const _0x4a1bb7=_0x575458;VisuMZ[_0x4a1bb7(0x212)][_0x4a1bb7(0x176)]['call'](this);if(this[_0x4a1bb7(0x2f8)]()==='mobile')this['_statusWindow'][_0x4a1bb7(0x303)]();},Scene_Menu[_0x575458(0x24c)][_0x575458(0x23a)]=function(){const _0x48f8dc=_0x575458;SceneManager[_0x48f8dc(0x25b)](Scene_Load);},Scene_Menu['prototype'][_0x575458(0x2ff)]=function(){const _0x45b963=_0x575458;this[_0x45b963(0x1b6)][_0x45b963(0x2e8)]()!==''?'usehx'!==_0x45b963(0x173)?(_0x2f1450[_0x45b963(0x212)][_0x45b963(0x1f7)]['call'](this),this[_0x45b963(0x26b)]()):this['_commandWindow']['removeSubcategory']():this[_0x45b963(0x2b7)]();};function Sprite_MenuBackgroundActor(){const _0x7d4721=_0x575458;this[_0x7d4721(0x2e7)](...arguments);}Sprite_MenuBackgroundActor['prototype']=Object[_0x575458(0x1a9)](Sprite['prototype']),Sprite_MenuBackgroundActor['prototype'][_0x575458(0x2a3)]=Sprite_MenuBackgroundActor,Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x2e7)]=function(){const _0xbd77e1=_0x575458;this[_0xbd77e1(0x23f)]=null,this[_0xbd77e1(0x30a)]=![],Sprite['prototype']['initialize']['call'](this),this['x']=Graphics['width'];},Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x285)]=function(_0x52ceec){const _0x3ef6ff=_0x575458;this[_0x3ef6ff(0x23f)]!==_0x52ceec&&(this[_0x3ef6ff(0x23f)]=_0x52ceec,this[_0x3ef6ff(0x1fd)]());},Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x1fd)]=function(){const _0x14a9f7=_0x575458;this[_0x14a9f7(0x30a)]=![],this[_0x14a9f7(0x23f)]?(this[_0x14a9f7(0x2f1)]=ImageManager[_0x14a9f7(0x2ed)](this['_actor']['getMenuImage']()),this['bitmap'][_0x14a9f7(0x1e8)](this[_0x14a9f7(0x233)]['bind'](this))):this[_0x14a9f7(0x2f1)]=new Bitmap(0x1,0x1);},Sprite_MenuBackgroundActor['prototype'][_0x575458(0x233)]=function(){const _0xf2d725=_0x575458;this[_0xf2d725(0x30a)]=!![],VisuMZ['MainMenuCore'][_0xf2d725(0x1a6)]['General'][_0xf2d725(0x222)]['call'](this);},Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x256)]=function(){const _0x52ba55=_0x575458;Sprite[_0x52ba55(0x24c)][_0x52ba55(0x256)][_0x52ba55(0x269)](this),this['_bitmapReady']&&(this[_0x52ba55(0x2df)](),this[_0x52ba55(0x1cf)](),this[_0x52ba55(0x1ca)]());},Sprite_MenuBackgroundActor['prototype'][_0x575458(0x2df)]=function(){const _0x3573f6=_0x575458;if(this[_0x3573f6(0x170)]>0x0){if('CrHZV'===_0x3573f6(0x2db)){const _0xd25feb=this[_0x3573f6(0x170)];this[_0x3573f6(0x1e0)]=(this[_0x3573f6(0x1e0)]*(_0xd25feb-0x1)+0xff)/_0xd25feb;}else return 0x1;}},Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x1cf)]=function(){const _0x4884fd=_0x575458;if(this[_0x4884fd(0x170)]>0x0){const _0x24d427=this[_0x4884fd(0x170)];this['x']=(this['x']*(_0x24d427-0x1)+this[_0x4884fd(0x16f)])/_0x24d427,this['y']=(this['y']*(_0x24d427-0x1)+this['_targetY'])/_0x24d427;}},Sprite_MenuBackgroundActor[_0x575458(0x24c)][_0x575458(0x1ca)]=function(){const _0x1dac09=_0x575458;if(this[_0x1dac09(0x170)]>0x0)this[_0x1dac09(0x170)]--;},ImageManager[_0x575458(0x17d)]=ImageManager[_0x575458(0x17d)]||0x9,ImageManager[_0x575458(0x22c)]=ImageManager[_0x575458(0x22c)]||0x6,Window_Base[_0x575458(0x24c)]['drawSvActor']=function(_0x1529d9,_0x26961c,_0x50c8c3){const _0x1eb33f=_0x575458,_0x134d5d=_0x1529d9[_0x1eb33f(0x20a)](/\$/i),_0x4789e3=ImageManager[_0x1eb33f(0x1a5)](_0x1529d9),_0x39c13e=_0x4789e3[_0x1eb33f(0x2ea)]/(_0x134d5d?0x1:ImageManager['svActorHorzCells']),_0x1a27a6=_0x4789e3[_0x1eb33f(0x1db)]/(_0x134d5d?0x1:ImageManager[_0x1eb33f(0x22c)]),_0x396b0f=0x0,_0x51329d=0x0;this[_0x1eb33f(0x160)][_0x1eb33f(0x161)](_0x4789e3,_0x396b0f,_0x51329d,_0x39c13e,_0x1a27a6,_0x26961c-_0x39c13e/0x2,_0x50c8c3-_0x1a27a6);},Window_MenuCommand[_0x575458(0x228)]=VisuMZ[_0x575458(0x212)][_0x575458(0x1a6)][_0x575458(0x2bd)],Window_MenuCommand[_0x575458(0x2ae)]=undefined,VisuMZ[_0x575458(0x212)][_0x575458(0x2e0)]=Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x2e7)],Window_MenuCommand['prototype']['initialize']=function(_0x23b32b){const _0x59dc89=_0x575458;this[_0x59dc89(0x230)]='',VisuMZ['MainMenuCore'][_0x59dc89(0x2e0)][_0x59dc89(0x269)](this,_0x23b32b),this[_0x59dc89(0x271)](_0x23b32b);},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x271)]=function(_0x26ae92){const _0x340265=_0x575458,_0x1e0fff=new Rectangle(0x0,0x0,_0x26ae92[_0x340265(0x2ea)],_0x26ae92[_0x340265(0x1db)]);this[_0x340265(0x2c5)]=new Window_Base(_0x1e0fff),this[_0x340265(0x2c5)][_0x340265(0x1e0)]=0x0,this[_0x340265(0x1ba)](this[_0x340265(0x2c5)]),this[_0x340265(0x21c)]();},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x257)]=function(){const _0x510a05=_0x575458;Window_HorzCommand[_0x510a05(0x24c)][_0x510a05(0x257)][_0x510a05(0x269)](this);if(this[_0x510a05(0x2c5)])this[_0x510a05(0x21c)]();},Window_MenuCommand[_0x575458(0x24c)]['updateCommandNameWindow']=function(){const _0x4afe45=_0x575458,_0x492f28=this[_0x4afe45(0x2c5)];_0x492f28[_0x4afe45(0x160)][_0x4afe45(0x213)]();const _0x358934=this[_0x4afe45(0x2f4)](this[_0x4afe45(0x2bb)]());if(_0x358934===_0x4afe45(0x18b)){const _0x3dddad=this[_0x4afe45(0x24e)](this[_0x4afe45(0x2bb)]());let _0x4d2429=this['commandName'](this[_0x4afe45(0x2bb)]());_0x4d2429=_0x4d2429[_0x4afe45(0x1bd)](/\\I\[(\d+)\]/gi,''),_0x492f28['resetFontSettings'](),this[_0x4afe45(0x315)](_0x4d2429,_0x3dddad),this[_0x4afe45(0x23e)](_0x4d2429,_0x3dddad),this[_0x4afe45(0x254)](_0x4d2429,_0x3dddad);}},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x315)]=function(_0x23c80f,_0x164aec){},Window_MenuCommand['prototype']['commandNameWindowDrawText']=function(_0x52ac17,_0x401600){const _0x5ca994=_0x575458,_0x5ec2e1=this[_0x5ca994(0x2c5)];_0x5ec2e1['drawText'](_0x52ac17,0x0,_0x401600['y'],_0x5ec2e1[_0x5ca994(0x1ea)],_0x5ca994(0x2aa));},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x254)]=function(_0x2ae51a,_0x2b40b8){const _0x31f2b1=_0x575458,_0xf2f941=this[_0x31f2b1(0x2c5)],_0x38e549=$gameSystem[_0x31f2b1(0x2cf)](),_0x2b2890=_0x2b40b8['x']+Math[_0x31f2b1(0x2c9)](_0x2b40b8[_0x31f2b1(0x2ea)]/0x2)+_0x38e549;_0xf2f941['x']=_0xf2f941[_0x31f2b1(0x2ea)]/-0x2+_0x2b2890,_0xf2f941['y']=Math[_0x31f2b1(0x2c9)](_0x2b40b8[_0x31f2b1(0x1db)]/0x4);},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x20d)]=function(){const _0x1c283f=_0x575458,_0x6b2060=SceneManager['_scene'][_0x1c283f(0x2f8)]();if(_0x6b2060===_0x1c283f(0x259)){const _0x44fa85=VisuMZ[_0x1c283f(0x212)][_0x1c283f(0x1a6)]['CustomCmdWin'][_0x1c283f(0x289)];return this[_0x1c283f(0x2b4)]()*_0x44fa85+0x8;}else{if(_0x1c283f(0x2c0)!==_0x1c283f(0x1c4))return Window_Command[_0x1c283f(0x24c)][_0x1c283f(0x20d)][_0x1c283f(0x269)](this);else{const _0x2c89c2=this['_duration'];this['opacity']=(this['opacity']*(_0x2c89c2-0x1)+0xff)/_0x2c89c2;}}},Window_MenuCommand[_0x575458(0x24c)]['makeCommandList']=function(){const _0xbb5742=_0x575458;this[_0xbb5742(0x287)]();},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x287)]=function(){const _0x14333d=_0x575458;for(const _0x206fee of Window_MenuCommand['_commandList']){if('ssHqP'===_0x14333d(0x1d6)){const _0x5c76a7=_0x206fee[_0x14333d(0x1a3)];if(this[_0x14333d(0x2a6)](_0x5c76a7,_0x206fee)){if(_0x14333d(0x220)===_0x14333d(0x220)){let _0x880e14=_0x206fee['TextStr'];if(['','Untitled'][_0x14333d(0x302)](_0x880e14))_0x880e14=_0x206fee['TextJS'][_0x14333d(0x269)](this);const _0x2a463b=_0x206fee[_0x14333d(0x1c0)];if(_0x2a463b>0x0&&this[_0x14333d(0x27b)]()!==_0x14333d(0x16a)){if(_0x14333d(0x1be)===_0x14333d(0x1be))_0x880e14=_0x14333d(0x248)['format'](_0x2a463b,_0x880e14);else{if(_0x1ed094[_0x14333d(0x2ad)][_0x14333d(0x1a6)]['QoL'][_0x14333d(0x311)]){}}}const _0xce9391=this[_0x14333d(0x15d)](_0x5c76a7,_0x206fee),_0xd2518d=_0x206fee['ExtJS'][_0x14333d(0x269)](this);this[_0x14333d(0x2c2)](_0x880e14,_0x5c76a7,_0xce9391,_0xd2518d),this['setHandler'](_0x5c76a7,_0x206fee[_0x14333d(0x2e3)][_0x14333d(0x1f5)](this,_0xd2518d));}else return _0x32caff[_0x14333d(0x212)][_0x14333d(0x1a6)]['General'][_0x14333d(0x2fb)]['includes'](this[_0x14333d(0x2a3)][_0x14333d(0x1ee)]);}this[_0x14333d(0x164)](_0x5c76a7);}else{const _0x4637bb=_0x497e3a[_0x14333d(0x2ed)](_0x153cad[_0x14333d(0x1fb)]());_0x4637bb[_0x14333d(0x1e8)](this['drawItemStatusPortraitStyleOnLoad'][_0x14333d(0x1f5)](this,_0x4a4937,_0x1c6cda));}}},Window_MenuCommand[_0x575458(0x24c)]['isMainMenuCommandVisible']=function(_0x4f63cc,_0x321ffc,_0x1e54fe){const _0x406817=_0x575458;if(!_0x1e54fe){if(_0x406817(0x2d8)!==_0x406817(0x21d)){if(!this[_0x406817(0x2d7)](_0x4f63cc,_0x321ffc))return![];}else return'iconText';}if($gameSystem[_0x406817(0x243)](_0x4f63cc,_0x406817(0x232)))return!![];if($gameSystem['getMainMenuSymbolState'](_0x4f63cc,_0x406817(0x15e)))return![];return _0x321ffc[_0x406817(0x29d)]['call'](this,_0x4f63cc,_0x321ffc);},Window_MenuCommand['prototype']['isMainMenuCommandEnabled']=function(_0x5856ee,_0x1ed3fb){const _0x590237=_0x575458;if($gameSystem['getMainMenuSymbolState'](_0x5856ee,_0x590237(0x1a0)))return!![];if($gameSystem[_0x590237(0x243)](_0x5856ee,_0x590237(0x25e)))return![];return _0x1ed3fb[_0x590237(0x20e)][_0x590237(0x269)](this,_0x5856ee,_0x1ed3fb);},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x164)]=function(_0x3c7b2b){const _0x17fce6=_0x575458;switch(_0x3c7b2b){case _0x17fce6(0x316):this[_0x17fce6(0x1f2)]();break;case _0x17fce6(0x2fe):this[_0x17fce6(0x1c1)](),this[_0x17fce6(0x1b4)]();break;case'options':this[_0x17fce6(0x2a8)]();break;case _0x17fce6(0x22a):this[_0x17fce6(0x2d5)]();break;case _0x17fce6(0x317):this[_0x17fce6(0x2f6)]();break;}},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x1f2)]=function(){},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x1c1)]=function(){},Window_MenuCommand['prototype'][_0x575458(0x1b4)]=function(){},Window_MenuCommand['prototype'][_0x575458(0x2a8)]=function(){},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x2d5)]=function(){},Window_MenuCommand[_0x575458(0x24c)]['addGameEndCommand']=function(){},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x28b)]=function(){const _0x1334e1=_0x575458,_0x56f1a1=SceneManager[_0x1334e1(0x196)][_0x1334e1(0x2f8)]();if([_0x1334e1(0x309),_0x1334e1(0x2fa)][_0x1334e1(0x302)](_0x56f1a1))return this['_list']?this[_0x1334e1(0x2dc)]():0x4;else return _0x56f1a1!==_0x1334e1(0x18d)?VisuMZ[_0x1334e1(0x212)][_0x1334e1(0x1a6)][_0x1334e1(0x1b0)]['Cols']:Window_Command[_0x1334e1(0x24c)][_0x1334e1(0x28b)][_0x1334e1(0x269)](this);},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x2e8)]=function(){return this['_subcategory']||'';},Window_MenuCommand['prototype'][_0x575458(0x2d7)]=function(_0x50caeb,_0xc9f25e){const _0x871867=_0x575458,_0x3b4153=_0xc9f25e['Subcategory']||'';if(!this['doesSubcategoryExist'](_0x3b4153)&&this[_0x871867(0x2e8)]()==='')return!![];return _0x3b4153===this['currentSubcategory']();},Window_MenuCommand['prototype'][_0x575458(0x240)]=function(_0x15e5de){const _0x58fe8c=_0x575458;return this['getSubcategoryList']()[_0x58fe8c(0x302)](_0x15e5de);},Window_MenuCommand[_0x575458(0x24c)]['getSubcategoryList']=function(){const _0x6fe55c=_0x575458;if(Window_MenuCommand[_0x6fe55c(0x2ae)]!==undefined)return Window_MenuCommand[_0x6fe55c(0x2ae)];Window_MenuCommand['SUBCATEGORY_LIST']=[];for(const _0x5f4ab1 of Window_MenuCommand[_0x6fe55c(0x228)]){const _0xa2e234=_0x5f4ab1[_0x6fe55c(0x1a3)];if(_0xa2e234!==_0x6fe55c(0x17b))continue;const _0x7a3851=_0x5f4ab1[_0x6fe55c(0x1eb)]['call'](this);Window_MenuCommand[_0x6fe55c(0x2ae)][_0x6fe55c(0x25b)](_0x7a3851);}return Window_MenuCommand[_0x6fe55c(0x2ae)];},Window_MenuCommand['prototype']['isSubcategoryVisible']=function(_0xf94c9d){const _0x4cdccb=_0x575458;if(!_0xf94c9d)return!![];const _0x27eeda=_0xf94c9d[_0x4cdccb(0x1eb)][_0x4cdccb(0x269)](this);for(const _0x37b43f of Window_MenuCommand[_0x4cdccb(0x228)]){if(_0x37b43f===_0xf94c9d)continue;const _0x1ef9d7=_0x37b43f['Subcategory']||'';if(_0x1ef9d7!==_0x27eeda)continue;const _0x306694=_0x37b43f[_0x4cdccb(0x1a3)];if(this[_0x4cdccb(0x2a6)](_0x306694,_0x37b43f,!![]))return!![];}return![];},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x1c6)]=function(_0x259499){const _0x382fb3=_0x575458;_0x259499=_0x259499;if(this[_0x382fb3(0x2e8)]()===_0x259499)return;this['_subcategory']=_0x259499,this[_0x382fb3(0x1f1)](),this[_0x382fb3(0x202)](0x0),this[_0x382fb3(0x28c)](0x0),this[_0x382fb3(0x215)]();},Window_MenuCommand[_0x575458(0x24c)]['removeSubcategory']=function(){const _0x3c5251=_0x575458,_0x2a20e9=this[_0x3c5251(0x2e8)]();this[_0x3c5251(0x230)]='',this[_0x3c5251(0x1f1)](),this[_0x3c5251(0x28c)](0x0);this[_0x3c5251(0x275)]>0x1&&(this[_0x3c5251(0x275)]=0x1,this[_0x3c5251(0x291)]());const _0x433dd7=Math[_0x3c5251(0x2d1)](this[_0x3c5251(0x2c8)](_0x2a20e9),0x0);this[_0x3c5251(0x2f5)](_0x433dd7),this[_0x3c5251(0x215)]();},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x227)]=function(){const _0x4f0c1d=_0x575458;return VisuMZ['MainMenuCore'][_0x4f0c1d(0x1a6)][_0x4f0c1d(0x1b0)][_0x4f0c1d(0x265)];},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x1f6)]=function(_0xf7e52e){const _0x196fd5=_0x575458,_0x41224a=this['commandStyleCheck'](_0xf7e52e);if(_0x41224a===_0x196fd5(0x1b9))_0x196fd5(0x2cd)!==_0x196fd5(0x2cd)?this[_0x196fd5(0x23f)]!==_0x25e7cc&&(this[_0x196fd5(0x23f)]=_0x2e6686,this[_0x196fd5(0x1fd)]()):this['drawItemStyleIconText'](_0xf7e52e);else _0x41224a===_0x196fd5(0x18b)?this[_0x196fd5(0x229)](_0xf7e52e):Window_Command['prototype'][_0x196fd5(0x1f6)]['call'](this,_0xf7e52e);},Window_MenuCommand[_0x575458(0x24c)][_0x575458(0x27b)]=function(){const _0x1d5dea=_0x575458;return VisuMZ['MainMenuCore']['Settings']['CustomCmdWin'][_0x1d5dea(0x2bc)];},Window_MenuCommand['prototype'][_0x575458(0x2f4)]=function(_0x533315){const _0xa1a0c9=_0x575458,_0x25c1cc=this[_0xa1a0c9(0x27b)]();if(_0x25c1cc!==_0xa1a0c9(0x1ed))return _0xa1a0c9(0x1fc)===_0xa1a0c9(0x1fc)?_0x25c1cc:_0x2eed59[_0xa1a0c9(0x212)][_0xa1a0c9(0x1a6)][_0xa1a0c9(0x1da)]['SoloQuick']&&_0xffae0d[_0xa1a0c9(0x299)]()[_0xa1a0c9(0x2ac)]<=0x1;else{if(_0xa1a0c9(0x1fe)!==_0xa1a0c9(0x1fe))_0x4a1faf[_0xa1a0c9(0x1db)]=this[_0xa1a0c9(0x178)](0x1,![]);else{const _0x7af3ec=this[_0xa1a0c9(0x31e)](_0x533315);if(_0x7af3ec[_0xa1a0c9(0x20a)](/\\I\[(\d+)\]/i)){if(_0xa1a0c9(0x187)!==_0xa1a0c9(0x187)){const _0x590e07=this['mainMenuCoreSettings']();if(!_0x590e07[_0x129788])return![];return _0x590e07[_0x2ff63e][_0xa1a0c9(0x302)](_0x68e5c3);}else{const _0x363f1a=this[_0xa1a0c9(0x24e)](_0x533315),_0x43a50d=this[_0xa1a0c9(0x180)](_0x7af3ec)[_0xa1a0c9(0x2ea)];return _0x43a50d<=_0x363f1a[_0xa1a0c9(0x2ea)]?_0xa1a0c9(0x1b9):'icon';}}else return'text';}}},Window_MenuCommand[_0x575458(0x24c)]['drawItemStyleIconText']=function(_0xa75fd7){const _0x2a6679=_0x575458,_0x20640d=this[_0x2a6679(0x24e)](_0xa75fd7),_0x21fed3=this[_0x2a6679(0x31e)](_0xa75fd7),_0x4fa38f=this[_0x2a6679(0x180)](_0x21fed3)[_0x2a6679(0x2ea)];this[_0x2a6679(0x2f0)](this['isCommandEnabled'](_0xa75fd7));let _0x8eb484=this['itemTextAlign']();if(_0x8eb484===_0x2a6679(0x2dd)){if(_0x2a6679(0x29c)!==_0x2a6679(0x184))this[_0x2a6679(0x1c5)](_0x21fed3,_0x20640d['x']+_0x20640d[_0x2a6679(0x2ea)]-_0x4fa38f,_0x20640d['y'],_0x4fa38f);else{const _0x1e316e=_0x563896[_0x2a6679(0x25c)],_0x3d8a34=this[_0x2a6679(0x239)]()-this['_commandWindow'][_0x2a6679(0x1db)]-this[_0x2a6679(0x1c9)][_0x2a6679(0x1db)],_0x129ae9=0x0,_0x21906c=this['_commandWindow']['y']+this[_0x2a6679(0x1b6)][_0x2a6679(0x1db)];return new _0x233be7(_0x129ae9,_0x21906c,_0x1e316e,_0x3d8a34);}}else{if(_0x8eb484===_0x2a6679(0x2aa)){const _0x1562df=_0x20640d['x']+Math[_0x2a6679(0x2c9)]((_0x20640d['width']-_0x4fa38f)/0x2);this[_0x2a6679(0x1c5)](_0x21fed3,_0x1562df,_0x20640d['y'],_0x4fa38f);}else this[_0x2a6679(0x1c5)](_0x21fed3,_0x20640d['x'],_0x20640d['y'],_0x4fa38f);}},Window_MenuCommand[_0x575458(0x24c)]['drawItemStyleIcon']=function(_0xca9725){const _0x43b59b=_0x575458;this[_0x43b59b(0x31e)](_0xca9725)[_0x43b59b(0x20a)](/\\I\[(\d+)\]/i);const _0x2318a2=Number(RegExp['$1']),_0xfce97a=this[_0x43b59b(0x24e)](_0xca9725),_0x295b7a=_0xfce97a['x']+Math[_0x43b59b(0x2c9)]((_0xfce97a[_0x43b59b(0x2ea)]-ImageManager[_0x43b59b(0x224)])/0x2),_0x2127fd=_0xfce97a['y']+(_0xfce97a[_0x43b59b(0x1db)]-ImageManager[_0x43b59b(0x2d6)])/0x2;this[_0x43b59b(0x252)](_0x2318a2,_0x295b7a,_0x2127fd);},VisuMZ['MainMenuCore'][_0x575458(0x1b8)]=Window_StatusBase['prototype'][_0x575458(0x209)],Window_StatusBase['prototype'][_0x575458(0x209)]=function(){const _0x371774=_0x575458;VisuMZ[_0x371774(0x212)][_0x371774(0x1b8)]['call'](this),this[_0x371774(0x1e3)]();},Window_StatusBase[_0x575458(0x24c)][_0x575458(0x1e3)]=function(){const _0x457b8d=_0x575458;for(const _0x496375 of $gameParty[_0x457b8d(0x299)]()){if(!_0x496375)continue;_0x496375[_0x457b8d(0x208)]()&&ImageManager['loadCharacter'](_0x496375[_0x457b8d(0x208)]());_0x496375['battlerName']()&&ImageManager[_0x457b8d(0x1a5)](_0x496375[_0x457b8d(0x172)]());if(_0x496375['getMenuImage']()){if(_0x457b8d(0x2b3)===_0x457b8d(0x2b3))ImageManager[_0x457b8d(0x2ed)](_0x496375['getMenuImage']());else return _0x25b21f['MainMenuCore'][_0x457b8d(0x1a6)]['Playtime'][_0x457b8d(0x1e9)];}}},Window_StatusBase[_0x575458(0x24c)][_0x575458(0x21e)]=function(){const _0x1b3912=_0x575458;return VisuMZ[_0x1b3912(0x212)][_0x1b3912(0x1a6)][_0x1b3912(0x182)];},Window_StatusBase[_0x575458(0x24c)][_0x575458(0x2eb)]=function(_0xbef374,_0x314ab7,_0x245670,_0x3ce922,_0x5124ae){const _0x4a015f=_0x575458;_0x3ce922=_0x3ce922||ImageManager['faceWidth'],_0x5124ae=_0x5124ae||ImageManager['faceHeight'];const _0x4fa327=ImageManager[_0x4a015f(0x313)],_0x28e61b=_0x5124ae-0x2,_0x2d7829=_0x314ab7+Math[_0x4a015f(0x2c9)]((_0x3ce922-_0x4fa327)/0x2);if(this[_0x4a015f(0x2a3)]===Window_MenuStatus){if(_0x4a015f(0x270)!==_0x4a015f(0x290))this[_0x4a015f(0x2f0)](_0xbef374['isBattleMember']());else{const _0x54159e=_0x35d569[_0x4a015f(0x20a)](/\$/i),_0x4728aa=_0x4c6bbb[_0x4a015f(0x1a5)](_0x12e576),_0x343155=_0x4728aa['width']/(_0x54159e?0x1:_0x45520f[_0x4a015f(0x17d)]),_0x44b803=_0x4728aa['height']/(_0x54159e?0x1:_0x1e049c[_0x4a015f(0x22c)]),_0x147c76=0x0,_0x1f3a4d=0x0;this[_0x4a015f(0x160)][_0x4a015f(0x161)](_0x4728aa,_0x147c76,_0x1f3a4d,_0x343155,_0x44b803,_0x4bfbd8-_0x343155/0x2,_0x2ff3e7-_0x44b803);}}this[_0x4a015f(0x1f9)](_0xbef374,_0x2d7829,_0x245670,_0x4fa327,_0x28e61b),this['changePaintOpacity'](!![]);},Window_StatusBase[_0x575458(0x24c)][_0x575458(0x2b6)]=function(_0x13d4dc,_0x13ed29,_0x3eec01,_0x4d6f7b,_0x19f33a){const _0x518893=_0x575458;_0x4d6f7b=_0x4d6f7b||ImageManager[_0x518893(0x313)],_0x19f33a=_0x19f33a||ImageManager['faceHeight'];const _0x1bcd17=_0x13d4dc[_0x518893(0x208)](),_0x1a1730=_0x13d4dc['characterIndex'](),_0x2a1679=ImageManager[_0x518893(0x17a)](_0x1bcd17),_0x144f96=ImageManager['isBigCharacter'](_0x1bcd17),_0x5cf1b3=_0x2a1679[_0x518893(0x2ea)]/(_0x144f96?0x3:0xc),_0x9056e0=_0x2a1679['height']/(_0x144f96?0x4:0x8),_0x592222=_0x4d6f7b,_0x4da233=_0x19f33a-0x2,_0x45ad24=_0x13ed29+Math[_0x518893(0x2c9)](_0x592222/0x2),_0x1d00b7=_0x3eec01+Math[_0x518893(0x294)]((_0x19f33a+_0x9056e0)/0x2);if(this[_0x518893(0x2a3)]===Window_MenuStatus){if(_0x518893(0x25a)!=='DWcbp')this['changePaintOpacity'](_0x13d4dc[_0x518893(0x1f8)]());else{if(this[_0x518893(0x1b5)]===_0x3b9fc6)this[_0x518893(0x185)]();return this[_0x518893(0x1b5)];}}const _0x7fa94d=Math[_0x518893(0x1aa)](_0x4d6f7b,_0x5cf1b3),_0x506764=Math[_0x518893(0x1aa)](_0x19f33a,_0x9056e0),_0x20d609=Math[_0x518893(0x2c9)](_0x13ed29+Math[_0x518893(0x2d1)](_0x4d6f7b-_0x5cf1b3,0x0)/0x2),_0x352a03=Math['floor'](_0x3eec01+Math['max'](_0x19f33a-_0x9056e0,0x0)/0x2),_0x443e8a=_0x144f96?0x0:_0x1a1730,_0x41b916=(_0x443e8a%0x4*0x3+0x1)*_0x5cf1b3,_0x5ca3b1=Math['floor'](_0x443e8a/0x4)*0x4*_0x9056e0;this[_0x518893(0x160)][_0x518893(0x161)](_0x2a1679,_0x41b916,_0x5ca3b1,_0x7fa94d,_0x506764,_0x20d609,_0x352a03),this[_0x518893(0x2f0)](!![]);},Window_StatusBase[_0x575458(0x24c)]['drawItemActorSvBattler']=function(_0x4e4e89,_0x1f92e5,_0x5c51c9,_0x58cff3,_0x3cde06){const _0x144f11=_0x575458;_0x58cff3=_0x58cff3||ImageManager[_0x144f11(0x313)],_0x3cde06=_0x3cde06||ImageManager[_0x144f11(0x284)];const _0x390311=ImageManager[_0x144f11(0x1a5)](_0x4e4e89[_0x144f11(0x172)]()),_0x372fd6=_0x390311['width']/ImageManager[_0x144f11(0x17d)],_0x325611=_0x390311['height']/ImageManager[_0x144f11(0x22c)],_0x998f00=_0x58cff3,_0x3b3b9f=_0x3cde06-0x2,_0x43b500=_0x1f92e5+Math['floor'](_0x998f00/0x2),_0x4a41b4=_0x5c51c9+Math[_0x144f11(0x294)]((_0x3cde06+_0x325611)/0x2);if(this[_0x144f11(0x2a3)]===Window_MenuStatus){if(_0x144f11(0x277)===_0x144f11(0x277))this['changePaintOpacity'](_0x4e4e89[_0x144f11(0x1f8)]());else{const _0x56e998=this[_0x144f11(0x2c5)];_0x56e998[_0x144f11(0x2cc)](_0x66cc69,0x0,_0x81823f['y'],_0x56e998[_0x144f11(0x1ea)],_0x144f11(0x2aa));}}const _0x5b7d77=_0x4e4e89[_0x144f11(0x1de)]&&_0x4e4e89[_0x144f11(0x1de)](),_0x4c74d5=0x0,_0x57d866=0x0,_0xb49a88=_0x5b7d77?_0x390311[_0x144f11(0x2ea)]:_0x372fd6,_0x210a65=_0x5b7d77?_0x390311[_0x144f11(0x1db)]:_0x325611,_0x3beb00=Math[_0x144f11(0x1aa)](0x1,_0x58cff3/_0xb49a88,_0x3cde06/_0x210a65),_0x5db3f5=_0x3beb00*_0xb49a88,_0x3a8b91=_0x3beb00*_0x210a65,_0x2407ee=Math[_0x144f11(0x2c9)](_0x1f92e5+Math[_0x144f11(0x2d1)](_0x58cff3-_0x5db3f5,0x0)/0x2),_0x297e3e=Math[_0x144f11(0x2c9)](_0x5c51c9+Math[_0x144f11(0x2d1)](_0x3cde06-_0x3a8b91,0x0)/0x2);this[_0x144f11(0x160)][_0x144f11(0x161)](_0x390311,_0x4c74d5,_0x57d866,_0xb49a88,_0x210a65,_0x2407ee,_0x297e3e,_0x5db3f5,_0x3a8b91),this[_0x144f11(0x2f0)](!![]);},Window_StatusBase[_0x575458(0x24c)][_0x575458(0x1dc)]=function(_0x4f8142,_0x461868,_0x47974a,_0x480ee5,_0x47b2fe){const _0x51e5e7=_0x575458,_0x50b983=ImageManager[_0x51e5e7(0x2ed)](_0x4f8142[_0x51e5e7(0x1fb)]());_0x480ee5=(_0x480ee5||ImageManager[_0x51e5e7(0x313)])-0x2,_0x47b2fe=(_0x47b2fe||ImageManager[_0x51e5e7(0x284)])-0x2;const _0x4934aa=_0x50b983[_0x51e5e7(0x2ea)],_0x1b36a2=_0x50b983['height'],_0x17e606=_0x480ee5,_0x9ade84=_0x47b2fe-0x2,_0xda1c12=_0x461868+Math[_0x51e5e7(0x2c9)](_0x17e606/0x2),_0x39e98c=_0x47974a+Math[_0x51e5e7(0x294)]((_0x47b2fe+_0x1b36a2)/0x2);if(this[_0x51e5e7(0x2a3)]===Window_MenuStatus){if(_0x51e5e7(0x169)===_0x51e5e7(0x169))this['changePaintOpacity'](_0x4f8142[_0x51e5e7(0x1f8)]());else{const _0x5654fb=_0x37091d[_0x51e5e7(0x25c)]-this[_0x51e5e7(0x1c9)][_0x51e5e7(0x2ea)]-(this['_playtimeWindow']?this[_0x51e5e7(0x20c)][_0x51e5e7(0x2ea)]:0x0),_0x5da85=this[_0x51e5e7(0x178)](0x1,![]),_0x331c39=this[_0x51e5e7(0x1c9)]['x']-_0x5654fb,_0x29c9ef=this[_0x51e5e7(0x2c6)]()-_0x5da85;return new _0x47bd81(_0x331c39,_0x29c9ef,_0x5654fb,_0x5da85);}}const _0x5a5b7b=Math[_0x51e5e7(0x1aa)](_0x480ee5,_0x4934aa),_0x232548=Math[_0x51e5e7(0x1aa)](_0x47b2fe,_0x1b36a2),_0x29a1b3=_0x461868+0x1,_0x409633=Math[_0x51e5e7(0x2d1)](_0x47974a+0x1,_0x47974a+_0x9ade84-_0x1b36a2+0x3);let _0x53434f=Math[_0x51e5e7(0x2bf)]((_0x4934aa-_0x5a5b7b)/0x2),_0x2eae8c=Math[_0x51e5e7(0x2bf)]((_0x1b36a2-_0x232548)/0x2);_0x53434f-=_0x4f8142['getMenuImageOffsetX'](),_0x2eae8c-=_0x4f8142[_0x51e5e7(0x318)]();if(Imported[_0x51e5e7(0x2a7)]){if(_0x51e5e7(0x286)==='tyeyb'){if(_0x30caa9[_0x51e5e7(0x243)](_0x1e1e81,_0x51e5e7(0x1a0)))return!![];if(_0x3e1a9e['getMainMenuSymbolState'](_0x236e80,_0x51e5e7(0x25e)))return![];return _0x5bc6b2[_0x51e5e7(0x20e)]['call'](this,_0x4d76de,_0xfe0d6a);}else{if(VisuMZ[_0x51e5e7(0x2ad)][_0x51e5e7(0x1a6)][_0x51e5e7(0x171)]['PixelateImageRendering']){}}}this[_0x51e5e7(0x160)][_0x51e5e7(0x161)](_0x50b983,_0x53434f,_0x2eae8c,_0x5a5b7b,_0x232548,_0x29a1b3,_0x409633),this[_0x51e5e7(0x2f0)](!![]);},Window_Status['prototype'][_0x575458(0x1f9)]=function(_0x1301c8,_0x41f95e,_0x4e03f4,_0x1161f4,_0x3ed3c4){const _0xc46c66=_0x575458;switch(this[_0xc46c66(0x21e)]()){case _0xc46c66(0x1e4):break;case _0xc46c66(0x272):this[_0xc46c66(0x2b6)](_0x1301c8,_0x41f95e,_0x4e03f4,_0x1161f4,_0x3ed3c4);break;case _0xc46c66(0x1e6):this[_0xc46c66(0x29e)](_0x1301c8,_0x41f95e,_0x4e03f4,_0x1161f4,_0x3ed3c4);break;default:Window_StatusBase['prototype'][_0xc46c66(0x1f9)][_0xc46c66(0x269)](this,_0x1301c8,_0x41f95e,_0x4e03f4,_0x1161f4,_0x3ed3c4);break;}},VisuMZ[_0x575458(0x212)][_0x575458(0x19f)]=Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x23d)],Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x23d)]=function(){const _0x55433a=_0x575458;VisuMZ[_0x55433a(0x212)]['Settings'][_0x55433a(0x1da)][_0x55433a(0x250)]?VisuMZ[_0x55433a(0x212)]['Window_MenuStatus_selectLast'][_0x55433a(0x269)](this):this[_0x55433a(0x2f5)](0x0);},VisuMZ[_0x575458(0x212)]['Window_MenuStatus_maxItems']=Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x2dc)],Window_MenuStatus['prototype'][_0x575458(0x2dc)]=function(){const _0x26fc11=_0x575458;return this['showOnlyBattleMembers']()?_0x26fc11(0x264)==='JccyJ'?_0xd1f8f5(_0x3f40b1['$1']):$gameParty[_0x26fc11(0x19b)]()['length']:VisuMZ['MainMenuCore'][_0x26fc11(0x225)][_0x26fc11(0x269)](this);},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x24a)]=function(){const _0x3adb93=_0x575458,_0x4671d9=VisuMZ[_0x3adb93(0x212)]['Settings']['General'];if(_0x4671d9[_0x3adb93(0x2be)]===undefined)_0x4671d9['ShowReserve']=!![];const _0x2f0907=SceneManager[_0x3adb93(0x196)];if(!_0x4671d9[_0x3adb93(0x2be)]){if(_0x4671d9['HideMainMenuOnly'])return _0x2f0907[_0x3adb93(0x2a3)]===Scene_Menu;return!![];}return![];},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x241)]=function(){const _0x3f775e=_0x575458,_0x230c33=SceneManager['_scene'][_0x3f775e(0x2a3)];if(_0x230c33===Scene_Menu)return _0x3f775e(0x179)===_0x3f775e(0x179)?VisuMZ['MainMenuCore'][_0x3f775e(0x1a6)]['StatusListStyle']:this[_0x3f775e(0x191)]();else{if(_0x3f775e(0x216)!==_0x3f775e(0x1c3))return VisuMZ['MainMenuCore']['Settings'][_0x3f775e(0x163)];else{const _0x4f77dc=_0x2519de[_0x3f775e(0x25c)]-this['_goldWindow'][_0x3f775e(0x2ea)]-(this[_0x3f775e(0x20c)]?this[_0x3f775e(0x20c)][_0x3f775e(0x2ea)]:0x0),_0x51471a=this[_0x3f775e(0x178)](0x1,![]),_0x14e0ba=this[_0x3f775e(0x1c9)]['x']-_0x4f77dc,_0x91c6bf=this[_0x3f775e(0x16b)]();return new _0x3a52d1(_0x14e0ba,_0x91c6bf,_0x4f77dc,_0x51471a);}}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x2ef)]=function(){const _0xca5723=_0x575458,_0x4d77bd=this['listStyle']();switch(_0x4d77bd){case _0xca5723(0x1d1):case _0xca5723(0x2f7):return 0x1;case _0xca5723(0x238):return 0x1;default:return $gameParty[_0xca5723(0x24d)]();}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x28b)]=function(){const _0x4326cb=_0x575458,_0x1c13eb=this[_0x4326cb(0x241)]();switch(_0x1c13eb){case'vertical':case _0x4326cb(0x2f7):return $gameParty[_0x4326cb(0x24d)]();default:return 0x1;}},VisuMZ[_0x575458(0x212)][_0x575458(0x181)]=Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x20d)],Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x20d)]=function(){const _0x3f9038=_0x575458,_0x9dd777=this['listStyle']();switch(_0x9dd777){case _0x3f9038(0x1d1):case _0x3f9038(0x2f7):case _0x3f9038(0x238):return this[_0x3f9038(0x31a)];case'thin':return Window_Selectable['prototype']['itemHeight'][_0x3f9038(0x269)](this);case _0x3f9038(0x1e7):return this[_0x3f9038(0x2b4)]()*0x2+0x8;default:return VisuMZ[_0x3f9038(0x212)][_0x3f9038(0x181)]['call'](this);}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x1f6)]=function(_0x4d3f32){this['drawPendingItemBackground'](_0x4d3f32),this['drawItemStatus'](_0x4d3f32);},VisuMZ[_0x575458(0x212)]['Window_MenuStatus_drawItemImage']=Window_MenuStatus[_0x575458(0x24c)]['drawItemImage'],Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x162)]=function(_0x4fe750,_0x556484,_0x505036,_0x10ae0f,_0x3cb814){const _0x2eeb62=_0x575458;switch(this['graphicType']()){case _0x2eeb62(0x1e4):break;case _0x2eeb62(0x272):this['drawItemActorSprite'](_0x4fe750,_0x556484,_0x505036+0x1,_0x10ae0f,_0x3cb814-0x2);break;case _0x2eeb62(0x1e6):this[_0x2eeb62(0x29e)](_0x4fe750,_0x556484,_0x505036+0x1,_0x10ae0f,_0x3cb814-0x2);break;default:this[_0x2eeb62(0x2eb)](_0x4fe750,_0x556484,_0x505036,_0x10ae0f,_0x3cb814);break;}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x1bb)]=function(_0x385a1d){const _0x2c1777=_0x575458;this['resetFontSettings']();const _0x507ef2=this['actor'](_0x385a1d),_0x509bd2=this[_0x2c1777(0x2b5)](_0x385a1d),_0x2ed89e=this[_0x2c1777(0x241)]();switch(_0x2ed89e){case _0x2c1777(0x1d1):this[_0x2c1777(0x1c8)](_0x507ef2,_0x509bd2);break;case _0x2c1777(0x2f7):this[_0x2c1777(0x292)](_0x507ef2,_0x509bd2);break;case _0x2c1777(0x238):this['drawItemStatusSoloStyle'](_0x507ef2,_0x509bd2);break;case _0x2c1777(0x258):this[_0x2c1777(0x165)](_0x507ef2,_0x509bd2);break;case _0x2c1777(0x1e7):this[_0x2c1777(0x1ac)](_0x507ef2,_0x509bd2);break;default:this[_0x2c1777(0x188)](_0x507ef2,_0x509bd2);break;}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x1c8)]=function(_0x2c1544,_0x272b1b){const _0x2c90ba=_0x575458;VisuMZ[_0x2c90ba(0x212)]['Settings'][_0x2c90ba(0x18e)][_0x2c90ba(0x1d0)][_0x2c90ba(0x269)](this,_0x2c1544,_0x272b1b);},Window_MenuStatus['prototype']['drawItemStatusPortraitStyle']=function(_0x3cd615,_0x422cd5){const _0x597424=_0x575458;if(_0x3cd615['getMenuImage']()!==''){const _0x41cba1=ImageManager['loadPicture'](_0x3cd615['getMenuImage']());_0x41cba1[_0x597424(0x1e8)](this[_0x597424(0x2ee)][_0x597424(0x1f5)](this,_0x3cd615,_0x422cd5));}else{if('fDobr'===_0x597424(0x200)){const _0x33789f=this[_0x597424(0x24e)](_0x53ad69),_0x2bb3aa=this['textSizeEx'](_0xa2a952)[_0x597424(0x2ea)];return _0x2bb3aa<=_0x33789f[_0x597424(0x2ea)]?_0x597424(0x1b9):_0x597424(0x18b);}else this[_0x597424(0x1c8)](_0x3cd615,_0x422cd5);}},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x2ee)]=function(_0x40a2ae,_0x2409f4){const _0x54c45c=_0x575458;VisuMZ[_0x54c45c(0x212)]['Settings'][_0x54c45c(0x18e)][_0x54c45c(0x2f9)]['call'](this,_0x40a2ae,_0x2409f4);},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x2d9)]=function(_0x22af2d,_0x25e6d1){const _0x55804f=_0x575458,_0x3420a9=ImageManager['loadPicture'](_0x22af2d[_0x55804f(0x1fb)]());_0x3420a9[_0x55804f(0x1e8)](this[_0x55804f(0x17f)][_0x55804f(0x1f5)](this,_0x22af2d,_0x25e6d1));},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x17f)]=function(_0x4b764d,_0x3e2001){const _0x5b4d04=_0x575458;VisuMZ[_0x5b4d04(0x212)]['Settings'][_0x5b4d04(0x18e)][_0x5b4d04(0x283)][_0x5b4d04(0x269)](this,_0x4b764d,_0x3e2001);},Window_MenuStatus['prototype'][_0x575458(0x165)]=function(_0x5e7695,_0x18f930){const _0x1d8a75=_0x575458;VisuMZ['MainMenuCore'][_0x1d8a75(0x1a6)][_0x1d8a75(0x18e)][_0x1d8a75(0x2a0)][_0x1d8a75(0x269)](this,_0x5e7695,_0x18f930);},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x1ac)]=function(_0x5305fc,_0x4fa8d6){const _0xed7279=_0x575458;VisuMZ[_0xed7279(0x212)][_0xed7279(0x1a6)][_0xed7279(0x18e)][_0xed7279(0x1cd)][_0xed7279(0x269)](this,_0x5305fc,_0x4fa8d6);},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x22b)]=function(){const _0x2ccc78=_0x575458,_0x5a54b7=this[_0x2ccc78(0x241)]();if([_0x2ccc78(0x258),'thicker'][_0x2ccc78(0x302)](_0x5a54b7))return![];return Window_StatusBase['prototype'][_0x2ccc78(0x22b)][_0x2ccc78(0x269)](this);},Window_MenuStatus[_0x575458(0x24c)][_0x575458(0x188)]=function(_0x2a3ff7,_0x4d2619){const _0x2eae1f=_0x575458;VisuMZ[_0x2eae1f(0x212)][_0x2eae1f(0x1a6)][_0x2eae1f(0x18e)][_0x2eae1f(0x1a4)]['call'](this,_0x2a3ff7,_0x4d2619);},Window_SkillStatus[_0x575458(0x24c)]['drawActorFace']=function(_0x15f961,_0x32afe1,_0x40f779,_0x108257,_0x5c3a87){const _0xc5dec7=_0x575458;switch(this[_0xc5dec7(0x21e)]()){case _0xc5dec7(0x1e4):break;case _0xc5dec7(0x272):this['drawItemActorSprite'](_0x15f961,_0x32afe1,_0x40f779,_0x108257,_0x5c3a87);break;case _0xc5dec7(0x1e6):this[_0xc5dec7(0x29e)](_0x15f961,_0x32afe1,_0x40f779,_0x108257,_0x5c3a87);break;default:Window_StatusBase[_0xc5dec7(0x24c)][_0xc5dec7(0x1f9)][_0xc5dec7(0x269)](this,_0x15f961,_0x32afe1,_0x40f779,_0x108257,_0x5c3a87);break;}},Window_EquipStatus['prototype'][_0x575458(0x1f9)]=function(_0x5bf82c,_0x6fd880,_0x31c99d,_0x2024aa,_0x4075d2){const _0x475089=_0x575458;switch(this[_0x475089(0x21e)]()){case _0x475089(0x1e4):break;case _0x475089(0x272):this[_0x475089(0x2b6)](_0x5bf82c,_0x6fd880,_0x31c99d,_0x2024aa,_0x4075d2);break;case _0x475089(0x1e6):this[_0x475089(0x29e)](_0x5bf82c,_0x6fd880,_0x31c99d,_0x2024aa,_0x4075d2);break;default:Window_StatusBase[_0x475089(0x24c)][_0x475089(0x1f9)][_0x475089(0x269)](this,_0x5bf82c,_0x6fd880,_0x31c99d,_0x2024aa,_0x4075d2);break;}};function Window_ThinGold(){const _0x341bd8=_0x575458;this[_0x341bd8(0x2e7)](...arguments);}Window_ThinGold['prototype']=Object[_0x575458(0x1a9)](Window_Gold[_0x575458(0x24c)]),Window_ThinGold[_0x575458(0x24c)]['constructor']=Window_ThinGold,Window_ThinGold[_0x575458(0x24c)][_0x575458(0x20d)]=function(){const _0x19b5c7=_0x575458;return this[_0x19b5c7(0x2b4)]();},Window_ThinGold[_0x575458(0x24c)][_0x575458(0x226)]=function(){const _0x99d1cf=_0x575458;return Window_Selectable[_0x99d1cf(0x24c)][_0x99d1cf(0x226)][_0x99d1cf(0x269)](this);};function _0x2674(){const _0x278024=['commandCommonEvent','ThinStyle','yfvag','MenuCommandClear','constructor','AutoGoldY','variableWindowRectBottomStyle','isMainMenuCommandVisible','VisuMZ_0_CoreEngine','addOptionsCommand','createGoldWindow','center','86780yJrgAS','length','CoreEngine','SUBCATEGORY_LIST','top','left','Step2','drawTimeLabel','JPcez','lineHeight','itemRect','drawItemActorSprite','popScene','TextStr','variableWindowRect','parse','index','Style','CommandList','ShowReserve','round','uwkRL','RJNzN','addCommand','PUlpa','cJVtH','_commandNameWindow','mainAreaBottom','filter','findExt','floor','ARRAYFUNC','setup','drawText','mrLSY','BgType','windowPadding','NHfbT','max','StatusListStyle','PersonalHandlerJS','needsDummyWindow','addSaveCommand','iconHeight','isIncludedInSubcategory','kjGZt','drawItemStatusSoloStyle','JSON','CrHZV','maxItems','right','commandFormation','updateOpacity','Window_MenuCommand_initialize','commandWindowRect','isSoloQuickMode','CallHandlerJS','Scene_Menu_createStatusWindow','_statusWindow','forceEnableMainMenuCommand','initialize','currentSubcategory','remove','width','drawItemActorFace','HideMainMenuOnly','loadPicture','drawItemStatusPortraitStyleOnLoad','numVisibleRows','changePaintOpacity','bitmap','laCsr','ThinGoldWindow','commandStyleCheck','smoothSelect','addGameEndCommand','portrait','commandWindowStyle','PortraitStyle','thinBottom','ActorBgMenus','fontSize','ARRAYEVAL','formation','commandCancel','playtimeWindowRect','resetTextColor','includes','close','return\x200','STR','zDMKE','JtCvM','ConvertParams','thinTop','_bitmapReady','exit','value','WindowRect','VarList','reserveCommonEvent','913HUcZdk','PixelateImageRendering','avKHC','faceWidth','Scene_Menu_goldWindowRect','commandNameWindowDrawBackground','item','gameEnd','getMenuImageOffsetY','adjustDefaultCommandWindowRect','innerHeight','note','registerCommand','iiuMN','commandName','Playtime','isMainMenuCommandEnabled','forceHide','addWindow','contents','blt','drawActorGraphic','InnerMenuListStyle','addSymbolBridge','drawItemStatusThinStyle','parameters','currentExt','adjustStatusWindowMobile','yDiND','text','mainAreaTop','variables','updateActor','createStatusWindow','_targetX','_duration','QoL','battlerName','usehx','drawItemBackground','mainCommandWidth','Scene_Menu_onFormationCancel','ARRAYSTRUCT','calcWindowHeight','yAWvM','loadCharacter','subcategory','createDummyWindow','svActorHorzCells','18WMUHTb','drawItemStatusSoloStyleOnLoad','textSizeEx','Window_MenuStatus_itemHeight','StatusGraphic','Step1Start','TqHKe','initMenuImage','changeTextColor','ptfpF','drawItemStatusDefaultStyle','61762EeCMwN','FUNC','icon','STRUCT','default','ListStyles','Step1','forceHideMainMenuCommand','playtimeWindowRectTopStyle','updateTimer','Scene_MenuBase_updateActor','227151zrfQRe','ARRAYSTR','_scene','bIaXL','trim','sMyNG','createBackground','battleMembers','goldWindowRectTopStyle','Scene_Menu_commandPersonal','CBHYp','Window_MenuStatus_selectLast','forceEnable','BamcA','createVariableWindow','Symbol','DefaultStyle','loadSvActor','Settings','Symbols','QYjjs','create','min','Scene_MenuBase_createBackground','drawItemStatusThickerStyle','Scene_Menu_commandWindowRect','thinGoldWindow','_mainMenuCore','CustomCmdWin','fill','map','drawAllItems','addOriginalCommands','_menuImage','_commandWindow','bottom','Window_StatusBase_loadFaceImages','iconText','addChild','drawItemStatus','922104sbNskd','replace','uXWqM','3fVRtRF','Icon','addFormationCommand','Rows','XvKcB','aUMBK','drawTextEx','setSubcategory','8kcpmxy','drawItemStatusVerticalStyle','_goldWindow','updateDuration','Scene_Menu_onPersonalCancel','EVAL','ThickerStyle','commandWindowRectThinBottomStyle','updatePosition','VerticalStyle','vertical','goldWindowRect','ARRAYNUM','Scene_Menu_commandFormation','595280lGUPlQ','ssHqP','BNFZp','drawTimeIcon','status','General','height','drawItemActorMenuImage','statusWindowRectBottomStyle','hasStaticSvBattler','FontSize','opacity','_dummyWindow','CommandWindowStyle','loadOtherActorImages','none','SoloQuick','svbattler','thicker','addLoadListener','Enable','innerWidth','ExtJS','ChangeActorMenuImageGroup','auto','name','forceShowMainMenuCommand','cancel','refresh','addMainCommands','adjustCommandHeightByPlaytime','concat','bind','drawItem','Game_System_initialize','isBattleMember','drawActorFace','Time','getMenuImage','fZZqC','loadBitmap','SHUcT','forceDisableMainMenuCommand','khqAa','bbyBE','select','_playtimeText','skvcm','getMenuImageOffsetX','AutoGoldHeight','Variable','characterName','loadFaceImages','match','hVakX','_playtimeWindow','itemHeight','EnableJS','Xxshi','Untitled','ChangeActorMenuImageRange','MainMenuCore','clear','CoatT','activate','ONOtY','OtVln','lMXYo','actor','shift','FdPjr','updateCommandNameWindow','lPZlT','graphicType','characterIndex','TzTXU','_timer','ActorBgMenuJS','setMenuImage','iconWidth','Window_MenuStatus_maxItems','colSpacing','itemTextAlign','_commandList','drawItemStyleIcon','save','isExpGaugeDrawn','svActorVertCells','577704GZuaDD','currentSymbol','setBackgroundType','_subcategory','Scene_Menu_create','forceShow','onBitmapLoad','description','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','systemColor','openness','solo','mainAreaHeight','commandLoad','commandWindowRectMobileStyle','commandWindowRectTopStyle','selectLast','commandNameWindowDrawText','_actor','doesSubcategoryExist','listStyle','canCreateVariableWindow','getMainMenuSymbolState','RpCen','setTargetActor','setHandler','1570030vMuSGD','\x5cI[%1]%2','JUlCa','showOnlyBattleMembers','AdjustCommandHeight','prototype','maxBattleMembers','itemLineRect','createPlaytimeWindow','StatusSelectLast','format','drawIcon','udPPv','commandNameWindowCenter','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','update','callUpdateHelp','thin','mobile','IVFVe','push','boxWidth','createActorMenuBackgroundImageSprite','forceDisable','IfOno','normalColor','commandWindowRectBottomStyle','clearShowMainMenuCommand','WvWJd','pZAHp','TextAlign','statusWindowRect','isArray','canCreatePlaytimeWindow','call','version','initMainMenuCore','adjustCommandHeightByVariable','mainMenuCoreSettings','Step1End','_variableWindow','nKplk','createCommandNameWindow','sprite','playtimeWindowRectBottomStyle','toUpperCase','_scrollDuration','applyThinnerGoldWindowRect','IWMzt','statusWindowRectMobileStyle','onFormationCancel','PljIM','commandStyle','vBkZV','qGOXG','Game_Actor_setup','_actorMenuBgSprite','playtimeText','resetFontSettings','isDisplayActorMenuBackgroundImage','SoloStyle','faceHeight','setActor','olshS','makeMainMenuCoreCommandList','variableWindowRectTopStyle','MobileThickness','commandWindowRectThinTopStyle','maxCols','setTopRow','onPersonalOk','qfjoq','_data','lYOWa','updateSmoothScroll','drawItemStatusPortraitStyle','Scene_Menu_statusWindowRect','ceil','ChangeActorMenuImageJS','TLeAv','JSDtM','createCommandWindow','members','commandPersonal','MenuCommandForceHide','IwfmE','ShowJS','drawItemActorSvBattler'];_0x2674=function(){return _0x278024;};return _0x2674();}function Window_Playtime(){const _0x5a5304=_0x575458;this[_0x5a5304(0x2e7)](...arguments);}Window_Playtime[_0x575458(0x24c)]=Object[_0x575458(0x1a9)](Window_Selectable[_0x575458(0x24c)]),Window_Playtime['prototype']['constructor']=Window_Playtime,Window_Playtime[_0x575458(0x24c)][_0x575458(0x2e7)]=function(_0x205499){const _0x58d40e=_0x575458;this[_0x58d40e(0x203)]=$gameSystem['playtimeText'](),this[_0x58d40e(0x221)]=0x3c,Window_Selectable[_0x58d40e(0x24c)][_0x58d40e(0x2e7)][_0x58d40e(0x269)](this,_0x205499),this[_0x58d40e(0x1f1)]();},Window_Playtime['prototype'][_0x575458(0x20d)]=function(){return this['lineHeight']();},Window_Playtime[_0x575458(0x24c)][_0x575458(0x256)]=function(){const _0x465a64=_0x575458;Window_Selectable[_0x465a64(0x24c)][_0x465a64(0x256)][_0x465a64(0x269)](this),this[_0x465a64(0x192)]();},Window_Playtime[_0x575458(0x24c)]['updateTimer']=function(){const _0x2c2c98=_0x575458;if(this['_timer']-->0x0){if(_0x2c2c98(0x307)===_0x2c2c98(0x2f2)){const _0x182c40=_0x41cd18[_0x2c2c98(0x212)][_0x2c2c98(0x1ad)][_0x2c2c98(0x269)](this);return this['adjustDefaultCommandWindowRect'](_0x182c40),_0x182c40;}else{if(this['_timer']<=0x0)this[_0x2c2c98(0x1f1)]();}}},Window_Playtime[_0x575458(0x24c)][_0x575458(0x1f1)]=function(){const _0x143883=_0x575458;this['_timer']=0x3c;const _0x3a5f2f=this[_0x143883(0x24e)](0x0),_0x7ccde9=_0x3a5f2f['x'],_0x5e235a=_0x3a5f2f['y'],_0x3d53cd=_0x3a5f2f[_0x143883(0x2ea)];this[_0x143883(0x160)]['clear'](),this['drawTimeIcon'](_0x3a5f2f),this[_0x143883(0x2b2)](_0x3a5f2f),this['drawPlaytime'](_0x3a5f2f);},Window_Playtime[_0x575458(0x24c)]['resetFontSettings']=function(){const _0x588a40=_0x575458;Window_Selectable[_0x588a40(0x24c)][_0x588a40(0x281)][_0x588a40(0x269)](this),this[_0x588a40(0x160)][_0x588a40(0x2fc)]=VisuMZ[_0x588a40(0x212)][_0x588a40(0x1a6)][_0x588a40(0x31f)]['FontSize'];},Window_Playtime[_0x575458(0x24c)][_0x575458(0x1d8)]=function(_0x15a7bf){const _0x4e4938=_0x575458;if(VisuMZ['MainMenuCore'][_0x4e4938(0x1a6)][_0x4e4938(0x31f)][_0x4e4938(0x1c0)]>0x0){const _0x2ac61b=VisuMZ[_0x4e4938(0x212)][_0x4e4938(0x1a6)][_0x4e4938(0x31f)][_0x4e4938(0x1c0)],_0x787615=_0x15a7bf['y']+(this[_0x4e4938(0x2b4)]()-ImageManager[_0x4e4938(0x2d6)])/0x2;this[_0x4e4938(0x252)](_0x2ac61b,_0x15a7bf['x'],_0x787615);const _0x4861ef=ImageManager[_0x4e4938(0x224)]+0x4;_0x15a7bf['x']+=_0x4861ef,_0x15a7bf[_0x4e4938(0x2ea)]-=_0x4861ef;}},Window_Playtime['prototype'][_0x575458(0x2b2)]=function(_0x3ce77c){const _0x3510fd=_0x575458;this[_0x3510fd(0x281)](),this[_0x3510fd(0x186)](ColorManager[_0x3510fd(0x236)]());const _0x963cd3=VisuMZ[_0x3510fd(0x212)][_0x3510fd(0x1a6)][_0x3510fd(0x31f)][_0x3510fd(0x1fa)];this[_0x3510fd(0x2cc)](_0x963cd3,_0x3ce77c['x'],_0x3ce77c['y'],_0x3ce77c[_0x3510fd(0x2ea)],_0x3510fd(0x2b0)),this[_0x3510fd(0x301)]();},Window_Playtime[_0x575458(0x24c)]['drawPlaytime']=function(_0x44c042){const _0x41737b=_0x575458,_0x4e9c9d=$gameSystem[_0x41737b(0x280)]();this[_0x41737b(0x2cc)](_0x4e9c9d,_0x44c042['x'],_0x44c042['y'],_0x44c042[_0x41737b(0x2ea)],_0x41737b(0x2dd));};function Window_MenuVariables(){this['initialize'](...arguments);}Window_MenuVariables[_0x575458(0x24c)]=Object[_0x575458(0x1a9)](Window_Selectable[_0x575458(0x24c)]),Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x2a3)]=Window_MenuVariables,Window_MenuVariables['prototype'][_0x575458(0x2e7)]=function(_0x1da7e5){const _0x340de7=_0x575458;Window_Selectable[_0x340de7(0x24c)][_0x340de7(0x2e7)][_0x340de7(0x269)](this,_0x1da7e5),this[_0x340de7(0x28f)]=VisuMZ['MainMenuCore'][_0x340de7(0x1a6)][_0x340de7(0x207)][_0x340de7(0x30e)],this[_0x340de7(0x1f1)]();},Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x20d)]=function(){const _0x5b2410=_0x575458;return this[_0x5b2410(0x2b4)]();},Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x28b)]=function(){const _0x26406a=_0x575458,_0x1df32e=SceneManager[_0x26406a(0x196)]['commandWindowStyle']();if(_0x1df32e===_0x26406a(0x18d))return 0x1;else{if(_0x26406a(0x249)!==_0x26406a(0x249))_0x39705f[_0x26406a(0x212)]['Settings']['ListStyles'][_0x26406a(0x2a0)][_0x26406a(0x269)](this,_0x430d2d,_0x3e7adb);else return VisuMZ[_0x26406a(0x212)][_0x26406a(0x1a6)][_0x26406a(0x207)][_0x26406a(0x30e)][_0x26406a(0x2ac)];}},Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x281)]=function(){const _0x2000b7=_0x575458;Window_Selectable[_0x2000b7(0x24c)][_0x2000b7(0x281)][_0x2000b7(0x269)](this),this[_0x2000b7(0x160)][_0x2000b7(0x2fc)]=VisuMZ[_0x2000b7(0x212)][_0x2000b7(0x1a6)][_0x2000b7(0x207)][_0x2000b7(0x1df)],this['changeTextColor'](ColorManager['systemColor']());},Window_MenuVariables[_0x575458(0x24c)]['maxItems']=function(){const _0x34592d=_0x575458;return this[_0x34592d(0x28f)]['length'];},Window_MenuVariables['prototype'][_0x575458(0x1b3)]=function(){const _0x3cdf45=_0x575458,_0x481882=this['topIndex']();for(let _0x30ed1d=0x0;_0x30ed1d<this['maxVisibleItems']();_0x30ed1d++){const _0x735270=_0x481882+_0x30ed1d;_0x735270<this[_0x3cdf45(0x2dc)]()&&(this[_0x3cdf45(0x174)](_0x735270),this['drawItem'](_0x735270));}},Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x174)]=function(_0x45eb38){},Window_MenuVariables[_0x575458(0x24c)][_0x575458(0x1f6)]=function(_0x3af723){const _0x5d49d4=_0x575458,_0x3ad9a1=this['_data'][_0x3af723];if(_0x3ad9a1<=0x0)return;if(!$dataSystem[_0x5d49d4(0x16c)][_0x3ad9a1])return;const _0x56e793=this[_0x5d49d4(0x24e)](_0x3af723);this[_0x5d49d4(0x281)]();let _0x5c9c75=0x0,_0x502f5c=$dataSystem[_0x5d49d4(0x16c)][_0x3ad9a1][_0x5d49d4(0x198)]();_0x502f5c[_0x5d49d4(0x20a)](/\\I\[(\d+)\]/i)&&(_0x5c9c75=Number(RegExp['$1']),_0x502f5c=_0x502f5c[_0x5d49d4(0x1bd)](/\\I\[(\d+)\]/i,'')[_0x5d49d4(0x198)]());if(_0x5c9c75>0x0){const _0x28aa1c=_0x56e793['y']+(this[_0x5d49d4(0x2b4)]()-ImageManager[_0x5d49d4(0x2d6)])/0x2;this[_0x5d49d4(0x252)](_0x5c9c75,_0x56e793['x'],_0x28aa1c);const _0x456c60=ImageManager[_0x5d49d4(0x224)]+0x4;_0x56e793['x']+=_0x456c60,_0x56e793[_0x5d49d4(0x2ea)]-=_0x456c60;}this[_0x5d49d4(0x2cc)](_0x502f5c,_0x56e793['x'],_0x56e793['y'],_0x56e793['width'],_0x5d49d4(0x2b0)),this[_0x5d49d4(0x186)](ColorManager[_0x5d49d4(0x260)]()),this['drawText']($gameVariables[_0x5d49d4(0x30c)](_0x3ad9a1),_0x56e793['x'],_0x56e793['y'],_0x56e793[_0x5d49d4(0x2ea)],_0x5d49d4(0x2dd));};