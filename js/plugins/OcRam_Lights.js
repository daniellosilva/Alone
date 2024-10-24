//-----------------------------------------------------------------------------
// OcRam plugins - OcRam_Core.js        (will be embedded in all of my plugins)
//=============================================================================
/* DO NOT COPY, RESELL OR CLAIM ANY PIECE OF THIS SOFTWARE AS YOUR OWN!     *
 * Copyright(c) 2020, Marko Paakkunainen // mmp_81 (at) hotmail.com         */
"use strict"; var ShaderTilemap = ShaderTilemap || false; var Imported = Imported || {}; var Yanfly = Yanfly || {}; // In case there's no Yanfly plugins in use
if (!Imported.OcRam_Core) { // OcRam_Core has only the functionality which are used widely in all OcRam plugins...
    Game_Interpreter.prototype.event = function () { /* Get Game_Event in event editor like: this.event(); */ return ($gameMap) ? $gameMap.event(this._eventId) : null; };
    Game_Map.prototype.getEventsByName = function (event_name) { /* Get Game_Map events by name */ return this._events.filter(function (ev) { return ev.event().name == event_name; }); };
    Game_Event.prototype.getComments = function () { /* Returns all comments + commandIndex from Game_Event as Array */ if (this._erased || this._pageIndex < 0) return []; var comments = []; var i = 0; this.list().forEach(function (p) { if (p.code == 108) { p.commandIndex = i; comments.push(p); } i++; }); return comments; };
    Game_Event.prototype.getStringComments = function () { /* Returns all comments from Game_Event as String Array */ if (this._erased || this._pageIndex < 0) return []; var comments = []; this.list().filter(function (c) { return c.code == 108; }).forEach(function (p) { p.parameters.forEach(function (s) { comments.push(s); }); }); return comments; };
    ImageManager.loadOcRamBitmap = function (filename, hue) {  /* Load bitmap from ./img/ocram folder */ return this.loadBitmap('img/ocram/', filename, hue, false); };
    Imported.OcRam_Core = true; var OcRam_Core = OcRam_Core || function () { /* OcRam core class */ this.initialize.apply(this, arguments); };
    OcRam_Core.prototype.initialize = function () { /* Initialize OcRam core */ this.name = "OcRam_Core"; this.version = "1.05"; this.twh = [48, 48]; this.twh50 = [24, 24]; this.radian = Math.PI / 180; this._isIndoors = false; this._screenTWidth = Graphics.width / 48; this._screenTHeight = Graphics.height / 48; this.plugins = []; this._menuCalled = false; this.Scene_Map_callMenu = Scene_Map.prototype.callMenu; this.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded; };
    OcRam_Core.prototype.debug = function () { /* Debug core? console.log("OcRam_Core", arguments); */ };
    OcRam_Core.prototype.getBoolean = function (s) { /* Get 'safe' boolean */ if (!s) return false; s = s.toString().toLowerCase(); return (s == "true" && s != "0") ? true : false; };
    OcRam_Core.prototype.getArray = function (a, b) { /* Get plugin param array */ return a ? eval(a) : b || []; };
    OcRam_Core.prototype.getFloat = function (n) { /* Get float */ return isNaN(n - parseFloat(n)) ? 0 : parseFloat(n); };
    OcRam_Core.prototype.regulateRGBG = function (obj) { /* Regulate RGBG value (used in tints) */ obj.Red = parseInt(obj.Red).clamp(-255, 255); obj.Green = parseInt(obj.Green).clamp(-255, 255); obj.Blue = parseInt(obj.Blue).clamp(-255, 255); obj.Gray = parseInt(obj.Gray).clamp(-255, 255); return obj; };
    OcRam_Core.prototype.regulateHexRGBA = function (p) { /* Regulate HEX RGBA value */ if (p.substr(0, 1) !== "#") p = "#" + p; if (p.length == 7) p = p + "ff"; return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p)[0] || "#ffffffff"; }
    OcRam_Core.prototype.getJSON = function (s) { /* Get 'safe' JSON */ try { return JSON.parse(s); } catch (ex) { return null; } };
    OcRam_Core.prototype.getJSONArray = function (a) { /* Get 'safe' JSON Array */ var tmp = []; if (a) { OcRam.getArray(a, []).forEach(function (s) { tmp.push(OcRam.getJSON(s)); }); } return tmp; };
    OcRam_Core.prototype.followers = function () { /* Only a shortcut to $gamePlayer._followers.visibleFollowers(); */ return $gamePlayer ? $gamePlayer._followers.visibleFollowers() : []; };
    OcRam_Core.prototype.setIndoorsFlag = function () { /* Set indoors flag - Each plugin will call this when needed */ if (DataManager.isEventTest()) return; if ($dataMap.meta["indoors"] !== undefined) { this.debug("Indoors meta tag found in MAP note field!", $dataMap.meta); this._isIndoors = true; } else { if ($dataTilesets[$dataMap.tilesetId].meta["indoors"] !== undefined) { this.debug("Indoors meta tag found in TILESET note field!", $dataTilesets[$dataMap.tilesetId].meta); this._isIndoors = true; } else { this.debug("Indoors meta tag was NOT found!", undefined); this._isIndoors = false; } } };
    OcRam_Core.prototype.isIndoors = function () { /* Get indoors flag */ return this._isIndoors; };
    OcRam_Core.prototype.runCE = function (pCE_Id) { /* Run common event */ if ($gameTemp.isCommonEventReserved()) { var tmpId = pCE_Id; var tc = this; setTimeout(function () { tc.runCE(tmpId); }, 17); } else { $gameTemp.reserveCommonEvent(pCE_Id); } };
    OcRam_Core.prototype.extendMethod = function (c, b, cb) { /* Extend/override any method */ c[b] = function () { return cb.apply(this, arguments); }; };
    OcRam_Core.prototype.extendProto = function (c, b, cb) { /* Extend/override any proto */ c.prototype[b] = function () { return cb.apply(this, arguments); }; };
    OcRam_Core.prototype.addPlugin = function (name, version) { /* Initialize new OcRam plugin */ this[name] = {}; var new_plugin = this[name]; Imported["OcRam_" + name] = true; this.plugins.push(name); this[name]._menuCalled = false; new_plugin.name = name; new_plugin.version = version; new_plugin.parameters = PluginManager.parameters("OcRam_" + new_plugin.name); if (this.getBoolean(new_plugin.parameters["Debug mode"])) { new_plugin.debug = function () { var args = [].slice.call(arguments); args.unshift("OcRam_" + new_plugin.name + " (v" + new_plugin.version + ")", ":"); console.log.apply(console, args); }; console.log("OcRam_" + new_plugin.name + " (v" + new_plugin.version + ")", "Debug mode:", "Enabled"); console.log("OcRam_" + new_plugin.name + " (v" + new_plugin.version + ")", "Parameters:", new_plugin.parameters); } else { new_plugin.debug = function () { }; } var oc = this; new_plugin.extend = function (c, b, cb) { var cb_name = c.name + "_" + b; if (c[b]) { this[cb_name] = c[b]; oc.extendMethod(c, b, cb); } else { this[cb_name] = c.prototype[b]; oc.extendProto(c, b, cb); } }; }; var OcRam = new OcRam_Core(); // Create new OcRam_Core! (Below aliases)
    Scene_Map.prototype.callMenu = function () { /* Menu called? */ OcRam.Scene_Map_callMenu.call(this); OcRam.debug("Menu called:", true); OcRam._menuCalled = true; OcRam.plugins.forEach(function (p) { OcRam[p]._menuCalled = true; }); };
    Scene_Map.prototype.onMapLoaded = function () { /* Set and get tile dimensions and indoors flag */ OcRam.Scene_Map_onMapLoaded.call(this); if (!OcRam._menuCalled) { OcRam.twh = [$gameMap.tileWidth(), $gameMap.tileHeight()]; OcRam.twh50 = [OcRam.twh[0] * 0.5, OcRam.twh[1] * 0.5]; OcRam._screenTWidth = Graphics.width / OcRam.twh[0]; OcRam._screenTHeight = Graphics.height / OcRam.twh[1]; OcRam.debug("Tile w/h:", OcRam.twh); OcRam.setIndoorsFlag(); OcRam.menuCalled = false; } };
    CanvasRenderingContext2D.prototype.line = function (x1, y1, x2, y2) { /* Draw line to canvas context */ this.beginPath(); this.moveTo(x1, y1); this.lineTo(x2, y2); this.stroke(); };
    Game_Map.prototype.adjustX_OC = function (x) { /* Optimized core adjustX */ if (this.isLoopHorizontal()) { if (x < this._displayX - (this.width() - this.screenTileX()) * 0.5) { return x - this._displayX + $dataMap.width; } else { return x - this._displayX; } } else { return x - this._displayX; } };
    Game_Map.prototype.adjustY_OC = function (y) { /* Optimized core adjustY */ if (this.isLoopVertical()) { if (y < this._displayY - (this.height() - this.screenTileY()) * 0.5) { return y - this._displayY + $dataMap.height; } else { return y - this._displayY; } } else { return y - this._displayY; } };
    Game_CharacterBase.prototype.screenX_OC = function () { /* Optimized core screenX */ return Math.round($gameMap.adjustX_OC(this._realX) * OcRam.twh[0] + OcRam.twh50[0]); };
    Game_CharacterBase.prototype.screenY_OC = function () { /* Optimized core screenY */ return Math.round($gameMap.adjustY_OC(this._realY) * OcRam.twh[1] + OcRam.twh50[0] - this.shiftY() - this.jumpHeight()); };
} if (parseFloat(OcRam.version) < 1.05) alert("OcRam core v1.05 is required!");

//-----------------------------------------------------------------------------
// OcRam plugins - OcRam_Lights.js
//=============================================================================

"use strict"; if (!Imported || !Imported.OcRam_Core) alert('OcRam_Core.js ' +
    'is required!'); OcRam.addPlugin("Lights", "2.15");

/*:
 * @plugindesc v2.15 You may use event comments or plugin commands to control different type of light sources. PLUGIN NAME MUST BE OcRam_Lights.js
 * @author OcRam
 *
 * @param Use OcRam_Local_Coop
 * @type boolean
 * @desc https://forums.rpgmakerweb.com/index.php?threads/ocram-local-coop.90808
 * @default true

 * @param Use P1 light for P2-P4
 * @parent Use OcRam_Local_Coop
 * @type boolean
 * @desc Use player 1 light source for all players.
 * @default true
 *
 * @param Use OcRam_Time_System
 * @type boolean
 * @desc https://forums.rpgmakerweb.com/index.php?threads/ocram-time-system.107735
 * @default true
 *
 * @param Use auto tinting
 * @parent Use OcRam_Time_System
 * @type boolean
 * @desc Use also time system built-in auto tinting?
 * @default false
 *
 * @param Night BG color
 * @parent Use OcRam_Time_System
 * @type text
 * @desc Background color for night.
 * @default #303040ff
 *
 * @param Dawn BG color
 * @parent Use OcRam_Time_System
 * @type text
 * @desc Background color for dawn.
 * @default #ffaa80ff
 *
 * @param Day BG color
 * @parent Use OcRam_Time_System
 * @type text
 * @desc Background color for day.
 * @default #ffffffff
 *
 * @param Dusk BG color
 * @parent Use OcRam_Time_System
 * @type text
 * @desc Background color for dusk.
 * @default #ffaa80ff
 *
 * @param Use tint indoors
 * @parent Use OcRam_Time_System
 * @type boolean
 * @desc Use day phase tint also in <indoors> maps
 * @default false
 * 
 * @param Other settings
 * @desc This parameter is just for grouping
 *
 * @param Battle light data
 * @parent Other settings
 * @type struct<LightData>
 * @desc Light source for battle lights
 * @default {"LightType":"1","Radius":"400","Color":"#ffea00ff","OffsetX":"0","OffsetY":"0","Degrees":"360","Angle":"0","Rotation":"0","StartAt":"0"}
 *
 * @param Player light data
 * @parent Other settings
 * @type struct<LightData>
 * @desc Default light source for player.
 * @default {"LightType":"1","Radius":"400","Color":"#ffea00ff","OffsetX":"0","OffsetY":"0","Degrees":"360","Angle":"0","Rotation":"0","StartAt":"0.1"}
 * 
 * @param Flashlight up fix value
 * @parent Other settings
 * @type number
 * @desc When player light source is cone aka. flashlight. Adjust Y value if player faces up.
 * @default 12
 *
 * @param Viewbox margin
 * @parent Other settings
 * @type number
 * @min 0
 * @max 1024
 * @desc Margin for lights viewbox (used to fill areas caused by 'shake screen')
 * @default 64
 * 
 * @param Lights kill switchId
 * @parent Other settings
 * @type switch
 * @desc Kill switch id. If this switch is ON ALL lights are OFF
 * @default 0
 *
 * @param Debug mode
 * @parent Other settings
 * @type boolean
 * @desc Write some events to console log (F8 or F12).
 * @default false
 *
 * @help
 * ----------------------------------------------------------------------------
 * Introduction                                      (Embedded OcRam_Core v1.5)
 * ============================================================================
 * This plugin will add 1 layer for light sources. You may use event comments
 * or plugin commands to control different type of light sources.
 *
 * Light data for characters, terrain and events are carried over save/load.
 * Example if you change light source via plugin command it will be saved
 * on game save and when loaded light data will persist!
 *
 * NOTE: If you use OcRam_Local_Coop/OcRam_Time_System make sure they are
 * up-to-date and imported BEFORE OcRam_Lights -plugin.
 *
 * If OcRam_Time_System is in use: "light_bg" plugin command will override any
 * time bound auto tinting until next time player is transferred.
 *
 * ----------------------------------------------------------------------------
 * Event comments
 * ============================================================================
 * *Comment* <light:[type:0-9]:[radius:1-1000]:[color:#rrggbbaa]>
 * *Comment* <light-ex:x,y:degrees:angle:rotation:startAt>
 *
 * Example for 'fire' put following comment to active page:
 * *Comment* <light:5:300:#ffdd00ff:360>
 * 
 * Example light source with 60 degree cone, offset 2 tiles up, start angle 
 * 45deg and is rotating slowly: *Comment* <light-ex:0,-96:60:45:1>
 *
 * NOTE: Event may have SEVERAL light sources and each <light...> comment
 * should be followed by <light-ex...> comment! IF plugin command is used to 
 * this event, it will override multiple light sources created via event 
 * comments! Each event PAGE may include individual light source.
 * 
 * MULTIPLE LIGHT SOURCES WORKS ONLY FOR EVENTS!
 * 
 * EXAMPLE ON MULTIPLE EVENT COMMENTING (with static and cycling color):
 * *Comment* <light:1:300:[60,#ff0000,#00ff00,#0000ff]>
 * *Comment* <light-ex:0,0:45:0:0:0>
 * *Comment* <light:1:300:#ffffff>
 * *Comment* <light-ex:0,0:45:180:0:0>
 * 
 * NOTE2: Ex-parameters will be applied on base light source so you may have
 * for example flickering/strobo or pulsating rotating flash light effect!
 * 
 * ----------------------------------------------------------------------------
 * Tileset meta tags for terrain light default values (in TILESET note field)
 * NOTE: You do not NEED to setup default values if plugin cmds are used
 * ============================================================================
 * Example for terrain tag 1: <light1:1:48:#ffffff>
 * ...
 * Example for terrain tag 7: <light7:1:48:#ffffff>
 * 
 * ----------------------------------------------------------------------------
 * Plugin commands
 * ============================================================================
 * Plugin command (to control BG light INSTANTLY):
 *   light_bg [color]     - OR -     light_bg [color] 0
 *   light_bg #ff0000ff   - OR -     light_bg ff0000ff 0
 *
 * Plugin command (to control fading BG light) fade_speed is given in seconds:
 *   light_bg [color] [fade_speed]
 *   Example: *Plugin Command* light_event #ff0000ff 4
 * 
 * Plugin command (to control event light source by Id):
 *   light_event [event_id] [type] [radius] [color]
 *   Example: *Plugin Command* light_event 1 256 #ff0000ff
 *
 * Plugin command (to control event light source by event name):
 *   light_event_name [event_name] [type] [radius] [color]
 *   Example: *Plugin Command* light_event_name my_events 256 #ff0000ff
 *
 * Plugin command (to control player light source):
 *   light_player [type] [radius] [color]
 *   Example: *Plugin Command* light_player 1 256 #ff0000ff
 * 
 * Plugin command (to control player light EX params):
 *   light_player_ex [x,y] [degrees] [angle] [rotation] [startAt]
 *   Example: *Plugin Command* light_player_ex 0,0 90 0 4 0.2
 *
 * Plugin command (to control all followers light source):
 *   light_followers [type] [radius] [color]
 *   Example: *Plugin Command* light_followers 1 256 #ff0000ff
 * 
 * Plugin command (to control followers light EX params):
 *   ligh_followers_ex [x,y] [degrees] [angle] [rotation] [startAt]
 *   Example: *Plugin Command* light_followers_ex 0,0 90 0 4 0.2
 *
 * Plugin command (to control individual follower light source):
 *   light_follower [follower:1-3] [type] [radius] [color]
 *   Example: *Plugin Command* light_follower 1 1 256 #ff0000ff
 *   
 * Plugin command (to control individual follower light EX params):
 *   ligh_follower_ex [x,y] [degrees] [angle] [rotation] [startAt]
 *   Example: *Plugin Command* light_follower_ex 1 0,0 90 0 4 0.2
 *   
 * Plugin command (to control terrain lights)
 *   terrain_light [terrain_tag] [type] [radius] [color]
 *   Example: *Plugin Command* terrain_light 1 1 48 #ff0000ff
 * 
 * Plugin command (to control battle left/right light sources):
 *   battle_light [type:0-9] [radius:1-1000] [color]
 *   Example: *Plugin Command* battle_light 5 400 #ffea00ff
 *   
 * Plugin command (to control battle light EX params)
 *   battle_light_ex [x,y] [degrees] [angle] [rotation] [startAt]
 *   Example: *Plugin Command* battle_light_ex 0,0 90 0 4 0.0
 *   
 * ALL COLOR PARAMETERS CAN BE REPLACED WITH COLOR CYCLES!:
 *  Syntax for color cycle is [fade,color1,color2,etc...]
 *  fade is given as frames between 2 colors
 * 
 *     Example for 120 frames cycling red-green-blue event comment: 
 *     *Comment* <light:1:400:[120,#ff0000,#00ff00,#0000ff]>
 * 
 *     Example for 60 frames cycling red-blue plugin command:
 *     *Plugin Command* light_player 1 300 [60,#ff0000,#0000ff]
 * 
 * Following types are possible
 *   0 = Light OFF
 *   1 = Fixed (like normal LED)
 *   2 = Flickering little (like little broken light) 90% on / 10% off
 *   3 = Flickering (like almost broken light) 50% on / 50% off
 *   4 = Flickering a lot (like realy broken light) 10% on / 90% off
 *   5 = Fire
 *   6 = Strobo
 *   7 = Pulsating fast
 *   8 = Pulsating
 *   9 = Pulsating slow
 *   
 *
 * ----------------------------------------------------------------------------
 * JavaScript commands
 * ============================================================================
 * Player and follower objects will have getEventsInLightRadius() -function
 * To use this function, below is example how to iterate results:
 * $gamePlayer.getEventsInLightRadius().forEach(function(a) {...});
 * 
 * Game event objects will have getObjectsInLightRadius() (returns array) and 
 * isPlayerInLightRadius() (returns boolean) -functions
 * 
 * EVENT SCOPE: 
 * this.event().isPlayerInLightRadius();
 * this.event().getObjectsInLightRadius().forEach(function(a) {...});
 * 
 * GENERIC SCOPE: 
 * $gameMap.events()[x].isPlayerInLightRadius();
 * $gameMap.events()[x].getObjectsInLightRadius().forEach(function(a) {...});
 * 
 * NOTE: isPlayerInLightRadius() will also check if follower is in radius!
 * 
 * EXTRA: To check if obj b is in radius of obj a.
 * All parameters are numeric and degrees must be 1 - 360.
 * OcRam.Lights.isInRange(tx, ty, px, py, range, degrees, dir);
 * 
 * Advanced JS to add new light source to event (must know JS basics):
 *   ex_params = {offset: [0, 0], degrees: 0, angle: 0, rotation: 0};
 *   ev._lightData.push(new Light_Data(ev, type, color, radius, ex_params));
 * 
 * ----------------------------------------------------------------------------
 * Terms of Use
 * ============================================================================
 * Edits are allowed as long as "Terms of Use" is not changed in any way.
 *
 * NON-COMMERCIAL USE: Free to use with credits to 'OcRam'
 *
 * If you gain money with your game by ANY MEANS (inc. ads, crypto-mining,
 * micro-transactions etc..) it's considered as COMMERCIAL use of this plugin!
 *
 * COMMERCIAL USE: (Standard license: 5 EUR, No-credits license: 40 EUR)
 * Payment via PayPal (https://paypal.me/MarkoPaakkunainen), please mention
 * PLUGIN NAME(S) you are buying / ALL plugins and your PROJECT NAME(S).
 *
 * Licenses are purchased per project and standard license requires credits.
 * If you want to buy several licenses: Every license purhased will give you
 * discount of 2 EUR for the next license purchase until minimum price of
 * 2 EUR / license. License discounts can be used to any of my plugins!
 * ALL of my plugins for 1 project = 40 EUR (standard licenses)
 *
 * https://forums.rpgmakerweb.com/index.php?threads/ocram-lights.108614
 *
 * DO NOT COPY, RESELL OR CLAIM ANY PIECE OF THIS SOFTWARE AS YOUR OWN!
 * Copyright (c) 2020, Marko Paakkunainen // mmp_81 (at) hotmail.com
 *
 * ----------------------------------------------------------------------------
 * Version History
 * ============================================================================
 * 2019/09/06 v2.00 - Initial release for v2.00
 * 2019/09/11 v2.01 - New feature terrain lights! (credits to: bazrat)
 *                    + plugin commands for terrain lights.
 * 2019/11/09 v2.02 - Fixed bug where "light_e*" plugin commands crashed game
 *                    Fixed bug where game crashed if OcRam_Local_Coop was 
 *                    used and player joined game while not in map
 *                    New plugin parameter: Lights kill switch for all lights!
 * 2019/11/23 v2.03 - Terrain lights will be purged when moved to another map!
 * 2020/03/14 v2.04 - OcRam core v1.04 (requirement for all of my plugins)
 *                    Fixed bugs on load, when event/player 
 *                    lights were controlled via plugin commands.
 *                    Done some optimizations >> pre-calculations + RMMV core 
 *                    function optimization (Game_Map.adjustX/Y and 
 *                    Game_CharacterBase.screenX/Y)
 *                    Battle light-ex plugin command (battle_light_ex)
 *                    Right light source offsetX in battle scene now works as 
 *                    intended (reversed offsetX)
 *                    Looped map bug is now fixed (Credits: jaxcap & faelim)
 * 2020/05/11 v2.05 - Check that terrain light data exists before update
 *                    (Credits to Tuomo L & dragonx777)
 * 2020/05/21 v2.06 - New plugin command light_player_ex and same for followers
 *                    New light-ex param: startAt (starts light gradient at %)
 *                    New plugin param: "Flashlight up fix value"
 *                    New JS calls for player, follower and event objects 
 *                    to get all objects in current light radius + Game events 
 *                    will have additional isPlayerInLightRadius() -function
 *                    (Credits to rohzek and PresaDePrata)
 * 2020/05/30 v2.07 - Fixed bug: Clears light data when exited to menu
 *                    
 *                    Fixed bug where "Test event" crashed game - Requires
 *                    OcRam_Core v1.5 (Credits to jjraymonds)
 *                    
 *                    Added color cycles to all light sources. Use new syntax 
 *                    and replace color param with it (Credits to Skurge)!
 *                    
 *                    Multiple lights per event (Credits to EthanFox)
 *                    NOTE: Officially available only via EVENT comments!
 *                    (or advanced JS - need to know basics at least)
 * 2020/05/31 v2.08 - Backward compatible save files (before multiple lights)
 * 2020/06/12 v2.09 - Fixed bug: Will now properly clear all lights on 
 *                    "Return to title" command and "Game over"
 * 2020/07/04 v2.10 - Fixed battle light plugin command bugs where game crashed
 *                    (Credits to: user3k)
 * 2020/09/08 v2.11 - Terrain lights are now properly initialized
 *                    (Credits to Warpholomey)
 * 2020/09/30 v2.12 - Flicker a lot light type now works (credits to Flanxei)
 * 2020/10/12 v2.13 - Added support for more than 3 followers!
 *                    (Credits to 41728280)
 * 2020/11/22 v2.14 - Game over, go to title now resets player light data!
 *                    (Credit to belatucadrus)
 * 2021/03/07 v2.15 - Added new JS OcRam.forceDayPhase() to force dayphase
 *                    autotint (Credits to OpenTanget)
 */
/*
 * ----------------------------------------------------------------------------
 * RMMV CORE function overrides (destructive) are listed here
 * ============================================================================
 * - No overrides -
 */

/*~struct~LightData:
 *
 * @param LightType
 * @type select
 * @option None
 * @value 0
 * @option Normal
 * @value 1
 * @option Flicker little
 * @value 2
 * @option Flicker
 * @value 3
 * @option Flicker a lot
 * @value 4
 * @option Fire
 * @value 5
 * @option Strobo
 * @value 6
 * @option Pulsating fast
 * @value 7
 * @option Pulsating
 * @value 8
 * @option Pulsating slow
 * @value 9
 * @desc Light type for this light source.
 * @default 1
 *
 * @param Radius
 * @type number
 * @min 48
 * @max 1000
 * @desc Radius in pixels.
 *
 * @param Color
 * @type text
 * @desc Color as #rrggbbaa. Example: #ffffffff
 * @default #ffffffff
 * 
 * @param OffsetX
 * @type number
 * @min -1000
 * @max 1000
 * @desc Light source x-offset.
 * @default 0
 * 
 * @param OffsetY
 * @type number
 * @min -1000
 * @max 1000
 * @desc Light source y-offset.
 * @default 0
 * 
 * @param Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc Light source cone degrees (360 = full circle, 180 = half circle).
 * @default 360
 * 
 * @param Angle
 * @type number
 * @min 0
 * @max 360
 * @desc Light source fixed angle (or start angle if rotated).
 * @default 0
 * 
 * @param Rotation
 * @type number
 * @min 0
 * @max 1000
 * @desc Rotation degrees per frame.
 * @default 0
 * 
 * @param StartAt
 * @type number
 * @min 0
 * @max 1
 * @desc Start light gradient position. Example 0.2 would start light gradient 20% from epicenter.
 * @decimals 3
 * @default 0.000
 */

(function () {

    // ------------------------------------------------------------------------------
    // Plugin variables and parameters
    // ==============================================================================
    var OcRam_Utils = {}; var _this = this; // Get float is now declared in case core isn't 1.05.... backward compatibility...
    OcRam_Core.prototype.getFloat = function (n) { /* Get float */ return isNaN(n - parseFloat(n)) ? 0 : parseFloat(n); };

    // Player default light
    var _playerLightData = JSON.parse(this.parameters['Player light data']);
    var _playerLightType = Number(_playerLightData.LightType) || 0;
    var _playerLightRadius = Number(_playerLightData.Radius) || 0;
    var _playerLightColor = _playerLightData.Color || '#ffffffff';
    var _playerLightExParams = { offset: [_playerLightData.OffsetX, _playerLightData.OffsetY], degrees: _playerLightData.Degrees, angle: _playerLightData.Angle, rotation: _playerLightData.Rotation, startAt: _playerLightData.StartAt };
    var _followerLightExParams = [_playerLightExParams, _playerLightExParams, _playerLightExParams];
    var _flashLightUpFixValue = Number(this.parameters['Flashlight up fix value']) || 0;
    
    // OcRam_Local_Coop
    var _useLocalCoop = OcRam.getBoolean(this.parameters['Use OcRam_Local_Coop']);
    var _useP1LightForAll = OcRam.getBoolean(this.parameters['Use P1 light for P2-P4']);

    // OcRam_Time_System
    var _useTimeSystem = OcRam.getBoolean(this.parameters['Use OcRam_Time_System']);
    var _useAutoTint = OcRam.getBoolean(this.parameters['Use auto tinting']);
    var _nightBGColor = OcRam.regulateHexRGBA(this.parameters['Night BG color']) || '#303040ff';
    var _dawnBGColor = OcRam.regulateHexRGBA(this.parameters['Dawn BG color']) || '#ffaa80ff';
    var _dayBGColor = OcRam.regulateHexRGBA(this.parameters['Day BG color']) || '#ffffffff';
    var _duskBGColor = OcRam.regulateHexRGBA(this.parameters['Dusk BG color']) || '#ffaa80ff';
    var _useTintIndoors = OcRam.getBoolean(this.parameters['Use tint indoors']);

    // Generic options
    var _battleLightData = JSON.parse(this.parameters['Battle light data']);
    var _battleLightExParams = { offset: [_battleLightData.OffsetX, _battleLightData.OffsetY], degrees: _battleLightData.Degrees, angle: _battleLightData.Angle, rotation: _battleLightData.Rotation, startAt: OcRam.getFloat(_battleLightData.StartAt) };
    var _margin = Number(this.parameters['Viewbox margin']) || 64; var _marginPreCalc = _margin / 48;
    var _killSwitchId = Number(this.parameters['Lights kill switchId']) || 0;

    var _prevDayPhase = -1; var _justLoaded = false;

    // For faster memory access...
    var _mapLights = null; var _battleLights = null;
    var _terrainLightSources = []; var _pluginCmdNotations = [null, null, null, null, null, null, null]; var _tileMapNotations = [];
    var _terrainLightExParams = { offset: [0, 0], degrees: 0, angle: 0, rotation: 0, startAt: 0 };

    var _lightScreenXFunc = Game_CharacterBase.prototype.screenX_OC;
    var _lightScreenYFunc = function () {
        return Math.round($gameMap.adjustY_OC(this._realY) * OcRam.twh[1] + OcRam.twh50[1]);
    };

    if (_useLocalCoop) {
        if (!Imported.OcRam_Local_Coop) {
            this.debug("OcRam_Local_Coop must be declared BEFORE OcRam_Lights!", "Can't use local coop!"); _useLocalCoop = false;
        } else {
            if (parseFloat(OcRam_Local_Coop.version) < 2.09) {
                this.debug("OcRam_Local_Coop must be at least v2.09!", "Can't use local coop!"); _useLocalCoop = false;
            }
        } this.debug("OcRam_Local_Coop", "Loaded successfully!");
    }

    if (_useTimeSystem) {
        if (!Imported.OcRam_Time_System) {
            this.debug("OcRam_Time_System must be declared BEFORE OcRam_Lights!", "Can't use time system!"); _useTimeSystem = false;
        } else {
            if (parseFloat(OcRam_Time_System.version) < 1.01) {
                this.debug("OcRam_Time_System must be at least v1.01!", "Can't use time system!"); _useTimeSystem = false;
            }
        } if (_useTimeSystem) {
            this.debug("OcRam_Time_System", "Loaded successfully!"); OcRam_Time_System._useAutoTint = _useAutoTint;
            this.debug("_dayPhaseVarId=" + OcRam_Time_System._dayPhaseVarId, "_effectTransitionTime=" + OcRam_Time_System._effectTransitionTime);
        }
    }

    var _lightType = {
        "Off": 0,
        "Normal": 1,
        "Flicker_Little": 2,
        "Flicker": 3,
        "Flicker_Lot": 4,
        "Fire": 5,
        "Strobo": 6,
        "Pulsating_Fast": 7,
        "Pulsating": 8,
        "Pulsating_Slow": 9
    }; var _intervalHandle = null;

    var _tintBG = ''; var _currentTintColor = hexToRGBA("#ffffffff");
    var _fireFramesLimit = 6; var _fireOpacity = 1;
    var _flickTimeOn = 24; var _flickTimeOff = 240;
    var _isIndoors = false;

    // Pre-calculate for faster processing...
    var _pi = Math.PI; var _pi2 = _pi / 180;
    var _dirMatrix = [0, 225, 270, 315, 180, 0, 0, 135, 90, 45];

    var resetPlayerLightData = () => {
        _playerLightData = JSON.parse(this.parameters['Player light data']);
        _playerLightType = Number(_playerLightData.LightType) || 0;
        _playerLightRadius = Number(_playerLightData.Radius) || 0;
        _playerLightColor = _playerLightData.Color || '#ffffffff';
        _playerLightExParams = { offset: [_playerLightData.OffsetX, _playerLightData.OffsetY], degrees: _playerLightData.Degrees, angle: _playerLightData.Angle, rotation: _playerLightData.Rotation, startAt: _playerLightData.StartAt };
        _followerLightExParams = [_playerLightExParams, _playerLightExParams, _playerLightExParams];
    }

    this.isInRange = function (tx, ty, px, py, range, angle, td) {

        // If there's no radius return false
        if (angle == 0) angle = 360; if (range < 1) return false;

        // Check impossible
        var ax = Math.abs(px - tx); if (ax > range) return false;
        var ay = Math.abs(py - ty); if (ay > range) return false;
        if ((ax + ay) > (range * 1.5)) return false; // To make radius as circle - Other wise would be square
        if (angle == 360) return true; // Skip all elses if 360 degrees... it will be true...

        if (angle < 23) { // < 45 deg (same line)
            if (tx == px) {
                if (td == 2 && (ty - py) < 0) return true;
                if (td == 8 && (ty - py) > 0) return true;
            } if (ty == py) {
                if (td == 4 && (tx - px) > 0) return true;
                if (td == 6 && (tx - px) < 0) return true;
            } return false;
        } else if (angle < 69) { // 45 deg
            if (ax < ay) {
                if (td == 2 && (ty - py) < 0) return true;
                if (td == 8 && (ty - py) > 0) return true;
            } if (ay < ax) {
                if (td == 6 && (tx - px) < 0) return true;
                if (td == 4 && (tx - px) > 0) return true;
            } return false;
        } else if (angle < 114) { // 90 deg
            if (ax < ay + 1) {
                if (td == 2 && (ty - py) < 0) return true;
                if (td == 8 && (ty - py) > 0) return true;
            } if (ay < ax + 1) {
                if (td == 6 && (tx - px) < 0) return true;
                if (td == 4 && (tx - px) > 0) return true;
            } return false;
        } else if (angle < 159) { // 135 deg
            if (td == 8 && (ty - py) <= 0) return false;
            if (td == 2 && (ty - py) >= 0) return false;
            if (td == 4 && (tx - px) <= 0) return false;
            if (td == 6 && (tx - px) >= 0) return false;
        } else if (angle < 204) { // 180 deg
            if (td == 8 && (ty - py) < 0) return false;
            if (td == 2 && (ty - py) > 0) return false;
            if (td == 4 && (tx - px) < 0) return false;
            if (td == 6 && (tx - px) > 0) return false;
        } else if (angle < 249) { // 225 deg ***
            if (td == 2 && (ty - py) <= 0) return true;
            if (td == 8 && (ty - py) >= 0) return true;
            if (td == 6 && (tx - px) <= 0) return true;
            if (td == 4 && (tx - px) >= 0) return true;
            return false;
        } else if (angle < 294) { // 270 deg
            if (ax < ay + 1) {
                if (td == 8 && (ty - py) < 0) return false;
                if (td == 2 && (ty - py) > 0) return false;
            } if (ay < ax + 1) {
                if (td == 4 && (tx - px) < 0) return false;
                if (td == 6 && (tx - px) > 0) return false;
            }
        } else { // < 360 deg (same line)
            if (px == tx) {
                if (td == 8 && (ty - py) < 0) return false;
                if (td == 2 && (ty - py) > 0) return false;
            } if (py == ty) {
                if (td == 4 && (tx - px) < 0) return false;
                if (td == 6 && (tx - px) > 0) return false;
            }
        }

        return true; // Should be in range...

    };

    this.forceDayPhase = instant => {
        _prevDayPhase = -1; $gameMap._forcedTint_OC = false;
        triggerDayPhase(instant);
    };

    // ------------------------------------------------------------------------------
    // Plugin commands
    // ==============================================================================
    this.extend(Game_Interpreter, "pluginCommand", function (command, args) {

        switch (command.toLowerCase()) {

            case "light_event": _this.debug("light_event", args);
                // eventID, type, radius, color + opacity as hex ie. #ffffffff
                if (args[0] == "this") args[0] = this._eventId;
                var ev = $gameMap.getEventById(parseInt(args[0]));
                if (ev != null) {
                    if (args[1] == "0") {
                        ev._lightData = null;
                    } else {
                        ev._lightData = [new Light_Data(ev, parseInt(args[1]), args[3], parseInt(args[2]) * 0.5)];
                    }
                } else {
                    _this.debug("EVENT NOT FOUND! ", ev);
                }  break;

            case "light_event_name": _this.debug("light_event_name", args);
                $gameMap._events.forEach(function (ev) {
                    if (ev != null) {
                        if (ev.event().name == args[0]) {
                            if (ev != null) ev._lightData = (args[1] == "0") ? null : [new Light_Data(ev, parseInt(args[1]), args[3], parseInt(args[2]) * 0.5)];
                        }
                    } else {
                        _this.debug("EVENT NOT FOUND! ", ev);
                    }
                }); break;

            case "light_player": _this.debug("light_player", args);
                var ev = $gamePlayer;
                _playerLightType = parseInt(args[0]);
                if (_playerLightType != 0) {
                    _playerLightRadius = parseInt(args[1]);
                    _playerLightColor = args[2];
                    ev._lightData = new Light_Data(ev, _playerLightType, _playerLightColor, _playerLightRadius * 0.5, _playerLightExParams);
                } else {
                    ev._lightData = null;
                    _playerLightRadius = 0;
                    _playerLightColor = '';
                } break;

            case "light_player_ex": _this.debug("light_player_ex", args);
                _playerLightExParams.offset = eval("[" + args[0] + "]");;
                _playerLightExParams.degrees = Number(args[1]);
                _playerLightExParams.angle = Number(args[2]);
                _playerLightExParams.rotation = Number(args[3]);
                _playerLightExParams.startAt = OcRam.getFloat(args[4]);
                if (_playerLightType != 0) {
                    $gamePlayer._lightData = new Light_Data($gamePlayer, _playerLightType, _playerLightColor, _playerLightRadius * 0.5, _playerLightExParams);
                } break;

            case "light_followers": _this.debug("light_followers", args);
                var light_type = parseInt(args[0]);
                var light_radius = parseInt(args[1]);
                var light_color = args[2];
                $gamePlayer._followers.visibleFollowers().forEach(function (ev) {
                    if (ev !== null) { // We got valid follower?
                        if (light_type != 0) {
                            ev.setupLightData(light_type, light_radius, light_color);
                        } else {
                            ev._lightData = null;
                        }
                    }
                }); break;

            case "light_followers_ex": _this.debug("light_followers_ex", args);
                if ($gameParty.maxBattleMembers() < 2) return;
                for (var i = 0; i < $gameParty.maxBattleMembers() - 2; i++) {
                    _followerLightExParams[i].offset = eval("[" + args[0] + "]");;
                    _followerLightExParams[i].degrees = Number(args[1]);
                    _followerLightExParams[i].angle = Number(args[2]);
                    _followerLightExParams[i].rotation = Number(args[3]);
                    _followerLightExParams[i].startAt = OcRam.getFloat(args[4]);
                } $gamePlayer._followers.visibleFollowers().forEach(function (ev) {
                    if (ev !== null) { // We got valid follower?
                        if (ev._lightData) {
                            ev.setupLightData(ev._lightData._lightType, ev._lightData._radius * 2, RGBAToHex(ev._lightData._color));
                        } else {
                            ev.setupLightData(_playerLightType, _playerLightRadius, _playerLightColor);
                        }
                    }
                }); break;

            case "light_follower": _this.debug("light_follower", args);
                var follower_pos = parseInt(args[0]);
                var light_type = parseInt(args[1]);
                var light_radius = parseInt(args[2]);
                var light_color = args[3];
                $gamePlayer._followers.visibleFollowers().forEach(function (ev) {
                    if (ev !== null) { // We got valid follower?
                        if (ev._memberIndex == follower_pos) {
                            if (light_type != 0) {
                                ev.setupLightData(light_type, light_radius, light_color); return;
                            } else {
                                ev._lightData = null; return;
                            }
                        }
                    }
                }); break;

            case "light_follower_ex": _this.debug("light_follower_ex", args);
                if ($gameParty.maxBattleMembers() < 2) return;
                for (var i = 0; i < $gameParty.maxBattleMembers() - 2; i++) {
                    var follower_pos = parseInt(args[0]);
                    _followerLightExParams[i].offset = eval("[" + args[1] + "]");;
                    _followerLightExParams[i].degrees = Number(args[2]);
                    _followerLightExParams[i].angle = Number(args[3]);
                    _followerLightExParams[i].rotation = Number(args[4]);
                    _followerLightExParams[i].startAt = OcRam.getFloat(args[5]);
                } if (follower_pos < 0) follower_pos = 0;
                if (follower_pos > $gamePlayer._followers.visibleFollowers().length) {
                    follower_pos = $gamePlayer._followers.visibleFollowers().length;
                } var ev = $gamePlayer._followers.visibleFollowers()[follower_pos - 1];
                if (ev) {
                    if (ev._lightData) {
                        ev.setupLightData(ev._lightData._lightType, ev._lightData._radius * 2, RGBAToHex(ev._lightData._color));
                    } else {
                        ev.setupLightData(_playerLightType, _playerLightRadius * 0.5, _playerLightColor);
                    }
                } break;

            case "battle_light": _this.debug("battle_light", args);
                _battleLightData.LightType = parseInt(args[0]);
                _battleLightData.Radius = parseInt(args[1]);
                _battleLightData.Color = args[2]; break;

            case "battle_light_ex": _this.debug("battle_light_ex", args);
                _battleLightExParams.offset = eval("[" + args[0] + "]");;
                _battleLightExParams.degrees = Number(args[1]);
                _battleLightExParams.angle = Number(args[2]);
                _battleLightExParams.rotation = Number(args[3]);
                _battleLightExParams.startAt = OcRam.getFloat(args[4]);
                break;

            case "terrain_light": _this.debug("terrain_light", args);

                var tag_id = args[0] || parseInt(args[0]);
                var light_type = args[1] || parseInt(args[1]);
                var light_radius = args[2] || parseInt(args[2]);
                var light_color = args[3] || "#ffffff";

                if (light_type > -1) {
                    _pluginCmdNotations[tag_id] = [light_type, light_radius, light_color];
                } else {
                    _pluginCmdNotations[tag_id] = null;
                }

                if ($gameMap) $gameMap.initTerrainLights();

                break;

            case "light_bg": _this.debug("light_bg", args);
                if ($gameMap != null) $gameMap._forcedTint_OC = true;
                if (args[0] == null) {
                    startTinting("#ffffffff", 0);
                } else {
                    if (args[1]) {
                        startTinting(args[0], Number(args[1]));
                    } else {
                        startTinting(args[0], 0);
                    }
                } break;

            default:
                _this["Game_Interpreter_pluginCommand"].apply(this, arguments);

        }

    });

    // ------------------------------------------------------------------------------
    // RMMV core - New methods (for various classes)
    // ==============================================================================

    Game_CharacterBase.prototype.isPlayer_Lights_OC = function () { return false; };
    Game_Player.prototype.isPlayer_Lights_OC = function () { return true; };
    Game_Follower.prototype.isPlayer_Lights_OC = function () { return true; };

    Game_Follower.prototype.setupLightData = function (light_type, light_radius, light_color) {
        if (light_type != 0) {
            this._lightData = new Light_Data(this, light_type, light_color, parseInt(light_radius * 0.5), _followerLightExParams[this._memberIndex - 1]);
        } else {
            this._lightData = null;
        }
    };

    // Clear lights when exited to title screen!
    this.extend(Scene_GameEnd, "commandToTitle", function () {
        clearLightsInterval(); _terrainLightSources = []; resetPlayerLightData();
        _this["Scene_GameEnd_commandToTitle"].apply(this, arguments);
    });

    // Return to Title Screen
    this.extend(Game_Interpreter, "command354", function () {
        clearLightsInterval(); _terrainLightSources = []; resetPlayerLightData();
        _this["Game_Interpreter_command354"].apply(this, arguments); return true;
    });

    // Game over
    this.extend(Scene_Gameover, "gotoTitle", function () {
        clearLightsInterval(); _terrainLightSources = []; resetPlayerLightData();
        _this["Scene_Gameover_gotoTitle"].apply(this, arguments);
    });

    // Is player or follower in radius of this event?
    Game_Event.prototype.isPlayerInLightRadius = function () { // Must have valid light source - else will return always false
        if (!$gameMap) return false;
        if (!this._lightData || this._lightData[0]._lightType == 0) return false;
        var ld = this._lightData[0]; var r = Math.ceil(ld._radius / 48);
        var in_range = _this.isInRange(this._x, this._y, $gamePlayer._x, $gamePlayer._y, r, ld._lightExParams.degrees, this._direction);
        if (in_range) return true; var tc = this;
        $gamePlayer._followers.visibleFollowers().forEach(function (f) {
            if (_this.isInRange(tc._x, tc._y, f._x, f._y, r, ld._lightExParams.degrees, tc._direction)) in_range = true; return;
        }); return in_range;
    };

    // Get all objects in light radius
    Game_Event.prototype.getObjectsInLightRadius = function () { // Must have valid light source - else will return always false
        if (!$gameMap) return false; if (!this._lightData || this._lightData._lightType == 0) return false;
        var ld = this._lightData; var r = Math.ceil(ld._radius / 48); var tc = this; var events_in_range = [];
        $gameMap.events().forEach(function (ev) {
            if (!ev._erased && ev._eventId != tc._eventId) {
                if (_this.isInRange(tc._x, tc._y, ev._x, ev._y, r, ld._lightExParams.degrees, tc._direction)) events_in_range.push(ev);
            }
        }); if (_this.isInRange(this._x, this._y, $gamePlayer._x, $gamePlayer._y, r, ld._lightExParams.degrees, this._direction)) events_in_range.push($gamePlayer);
        $gamePlayer._followers.visibleFollowers().forEach(function (f) {
            if (_this.isInRange(tc._x, tc._y, f._x, f._y, r, ld._lightExParams.degrees, tc._direction)) events_in_range.push(f);
        }); return events_in_range;
    };

    // Get events in light radius
    Game_Player.prototype.getEventsInLightRadius = function () { // Must have valid light source - else will return always false
        if (!$gameMap) return false; if (!this._lightData || this._lightData._lightType == 0) return false;
        var ld = this._lightData; var r = Math.ceil(ld._radius / 48); var tc = this; var events_in_range = [];
        $gameMap.events().forEach(function (ev) {
            if (!ev._erased) {
                if (_this.isInRange(tc._x, tc._y, ev._x, ev._y, r, ld._lightExParams.degrees, tc._direction)) events_in_range.push(ev);
            }
        }); return events_in_range;
    }; Game_Follower.prototype.getEventsInLightRadius = function () { // Must have valid light source - else will return always false
        if (!$gameMap) return false; if (!this._lightData || this._lightData._lightType == 0) return false;
        var ld = this._lightData; var r = Math.ceil(ld._radius / 48); var tc = this; var events_in_range = [];
        $gameMap.events().forEach(function (ev) {
            if (!ev._erased) {
                if (_this.isInRange(tc._x, tc._y, ev._x, ev._y, r, ld._lightExParams.degrees, tc._direction)) events_in_range.push(ev);
            }
        }); return events_in_range;
    };

    // New method to setup light data for game event
    Game_Event.prototype.setupNewLightData = function () {

        var cmts = getCommentsOnActivePage(this, "<light:");
        var cmts_ex = getCommentsOnActivePage(this, "<light-ex:");

        if (cmts.length < 1) { // No light data
            this._lightData = null;
        } else { // We got light data, but is it valid?

            this._lightData = [];

            for (var i = 0; i < cmts.length; i++) {

                // <light:[type:0-9]:[radius:1-1000]:[color:#rrggbbaa]>
                var ls_params = (cmts[i] + "::::").split(":");
                ls_params[1] = parseInt((ls_params[1]).replace(">", ""));
                ls_params[2] = parseInt((ls_params[2]).replace(">", ""));
                ls_params[3] = (ls_params[3]).replace(">", "");

                var ex_params = { offset: [0, 0], degrees: 0, angle: 0, rotation: 0 };
                if (cmts_ex && i < cmts_ex.length && cmts_ex[i]) { // Extended parameters
                    // <light-ex:x,y:degrees:angle:rotation:startAt>
                    var tmp = (cmts_ex[i] + "::::").split(":");
                    tmp[1] = (tmp[1]).replace(">", "");
                    ex_params.offset = eval("[" + tmp[1] + "]");
                    tmp[2] = (tmp[2]).replace(">", "");
                    ex_params.degrees = parseInt(tmp[2]);
                    tmp[3] = (tmp[3]).replace(">", "");
                    ex_params.angle = parseInt(tmp[3]);
                    tmp[4] = (tmp[4]).replace(">", "");
                    ex_params.rotation = parseInt(tmp[4]);
                    tmp[5] = (tmp[5]).replace(">", "");
                    ex_params.startAt = OcRam.getFloat(tmp[5]);
                }

                this._lightData.push(new Light_Data(this, parseInt(ls_params[1]), ls_params[3], parseInt(ls_params[2]) * 0.5, ex_params));

            }

        }
    };

    // Get MAP event object by it's ID
    Game_Map.prototype.getEventById = function (ev_id) {
        var ret = null;
        $gameMap._events.forEach(function (ev) {
            if (ev && ev.eventId() == ev_id) ret = ev; return;
        }); return ret;
    };

    // Save light data to game system
    Game_System.prototype.saveLightData = function () {

        var target_color = window._targetLightBGColorRGBA_OC;
        if (target_color === undefined) target_color = null;
        $gameSystem._lightBGColor = (target_color == null) ? _tintBG : 'rgba(' + target_color.r + ', ' + target_color.g + ', ' + target_color.b + ', ' + target_color.a + ')';

        $gameSystem._forcedTint_OC = $gameMap._forcedTint_OC;

        $gameSystem._playerLightData_OC = [];
        $gameSystem._playerLightData_OC.push($gamePlayer._lightData);
        $gamePlayer._followers.visibleFollowers().forEach(function (ev) {
            if (ev !== null) $gameSystem._playerLightData_OC.push(ev._lightData);
        });

        $gameSystem._eventLightData_OC = [];
        $gameMap._events.forEach(function (ev) {
            if (ev !== null) $gameSystem._eventLightData_OC.push(ev._lightData);
        });

        this._pluginCmdNotations = _pluginCmdNotations;

    };

    // Load light data from game system
    Game_System.prototype.loadLightData = function () {

        if ($gameSystem._lightBGColor !== undefined) { // Do not break old saves...

            _tintBG = ($gameSystem._lightBGColor).toLowerCase();
            if (_tintBG.indexOf("rgba(") > -1) {
                _currentTintColor = eval("ocHaxor_" + _tintBG + ";");
            } else {
                _currentTintColor = eval("ocHaxor_rgba(255, 255, 255, 1)");
            }

            $gameMap._forcedTint_OC = $gameSystem._forcedTint_OC;

            var i = 0; createNewLightData($gamePlayer, $gameSystem._playerLightData_OC[i]);

            

            if ($gameParty.maxBattleMembers() > 1) {
                for (i; i < $gameParty.maxBattleMembers() - 1;) {
                    createNewLightData($gamePlayer._followers.visibleFollowers()[i], $gameSystem._playerLightData_OC[++i]);
                }
            }

            i = 0;

            $gameMap._events.forEach(function (ev) {
                if (ev !== null) {
                    createNewLightDataArr(ev, $gameSystem._eventLightData_OC[i++]);
                }
            });

            _pluginCmdNotations = this._pluginCmdNotations;

        }

    };

    Game_CharacterBase.prototype.isEvent_OC = function () { return false; };
    Game_Event.prototype.isEvent_OC = function () { return true; };

    // Fix for MOG_EventSensor
    Game_Follower.prototype.check_event_sensor = function () { };
    Game_Player.prototype.check_event_sensor = function () { };

    // ------------------------------------------------------------------------------
    // RMMV core - Aliases (Game_System, Game_Event and Spritesets)
    // ==============================================================================

    // Fix for Yanfly EventMiniLabel
    if (Imported.YEP_EventMiniLabel) {
        this.extend(Window_EventMiniLabel, "gatherDisplayData", function () {
            if (this._character.isEvent_OC()) _this["Window_EventMiniLabel_gatherDisplayData"].apply(this, arguments);
        });
    }

    // Set _justLoaded flag to true on player transfer
    this.extend(Game_Player, "performTransfer", function () {
        clearLightsInterval(); _this["Game_Player_performTransfer"].apply(this, arguments);
        $gameMap._forcedTint_OC = false; _terrainLightSources = [];
    });

    this.extend(Game_System, "onAfterLoad", function () {
        _intervalHandle = null; _justLoaded = true;
        _this["Game_System_onAfterLoad"].apply(this, arguments); this.loadLightData(); _terrainLightSources = [];
    });

    this.extend(Game_System, "onBeforeSave", function () {
        this.saveLightData(); _this["Game_System_onBeforeSave"].apply(this, arguments);
    });

    this.extend(Game_Event, "setupPage", function () {
        _this["Game_Event_setupPage"].apply(this, arguments); this.setupNewLightData();
    });

    this.extend(Spriteset_Map, "createLowerLayer", function () {
        _this["Spriteset_Map_createLowerLayer"].apply(this, arguments);
        if (_mapLights == null) _mapLights = new OcRam_Light_Layer();
        this.addChild(_mapLights); setIndoorsFlag();
        if (_useTimeSystem) { // Use OcRam_Time_System?
            if (!$gameMap._forcedTint_OC) {
                if (_isIndoors && !_useTintIndoors) {
                    _this.debug("Indoors", "NO TINT!");
                    if (_intervalHandle != null) {
                        window.clearInterval(_intervalHandle);
                        _intervalHandle = null; // Let's clear this interval
                    } _tintBG = '#ffffffff'; _currentTintColor = hexToRGBA("#ffffffff");
                } else {
                    if (!_this._menuCalled) {
                        _prevDayPhase = -1; triggerDayPhase(true);
                    }
                }
            }
        } _this._menuCalled = false;
    });

    this.extend(Spriteset_Map, "update", function () {
        _this["Spriteset_Map_update"].apply(this, arguments); _mapLights.updateMapLights();
    });

    this.extend(Spriteset_Battle, "createLowerLayer", function () {
    
        _this["Spriteset_Battle_createLowerLayer"].apply(this, arguments);

        if (_battleLights == null) _battleLights = new OcRam_Light_Layer();

        this.addChild(_battleLights);

        // Add battle lights
        var tmp_y = parseInt(Graphics.height * 0.5) - OcRam.twh[1]; _battleLights._leftLightSource = {};
        _battleLights._rightLightSource = {};
        _battleLights._leftLightSource.isPlayer_Lights_OC = function () { return false; };
        _battleLights._leftLightSource._battleSrc = "left";
        _battleLights._leftLightSource._realX = 0;
        _battleLights._leftLightSource._realY = tmp_y;
        _battleLights._leftLightSource._direction = 6;
        _battleLights._leftLightSource.screenX_OC = function () { return this._realX; };
        _battleLights._leftLightSource.screenY_OC = function () { return this._realY; };
        _battleLights._leftLightSource._lightData = new Light_Data(_battleLights._leftLightSource, parseInt(_battleLightData.LightType),
            _battleLightData.Color, parseInt(_battleLightData.Radius), _battleLightExParams);

        _battleLights._rightLightSource.isPlayer_Lights_OC = function () { return false; };
        _battleLights._rightLightSource._battleSrc = "right";
        _battleLights._rightLightSource._realX = Graphics.width;
        _battleLights._rightLightSource._realY = tmp_y;
        _battleLights._rightLightSource._direction = 4;
        _battleLights._rightLightSource.screenX_OC = function () { return this._realX; };
        _battleLights._rightLightSource.screenY_OC = function () { return this._realY; };
        _battleLights._rightLightSource._lightData = new Light_Data(_battleLights._rightLightSource, parseInt(_battleLightData.LightType),
            _battleLightData.Color, parseInt(_battleLightData.Radius), _battleLightExParams);

        if (_battleLightExParams.offset[0]) { // Adjust right light source correctly by offset parameter...
            _battleLights._rightLightSource._realX = _battleLights._rightLightSource._realX + (-(_battleLightExParams.offset[0] * 2));
        }
        
    });

    this.extend(Spriteset_Battle, "update", function () {
        _this["Spriteset_Battle_update"].apply(this, arguments); _battleLights.updateBattleLights();
    });

    if (_useTimeSystem) { // Use OcRam_Time_System?
        this.extend(Game_Variables, "onChange", function () {
            _this["Game_Variables_onChange"].apply(this, arguments); triggerDayPhase(false);
        });
    }

    // ------------------------------------------------------------------------------
    // Light_Data class for single light source
    // ==============================================================================

    function Light_Data() {
        this.initialize.apply(this, arguments);
    }

    Light_Data.prototype.initialize = function (parent, light_type, light_color, radius, ex_params) {

        var color = light_color;
        this._originalColor = color;

        this._colorIndex = 1; this._cycleCounter = 0; this._cycleFader = 0;
        if (light_color.indexOf("]") > 0) {
            light_color = light_color.replace("[", "");
            light_color = light_color.replace("]", "");
            var arr_tmp = light_color.split(","); color = arr_tmp[1];
            for (var i = 1; i < arr_tmp.length; i++) {
                arr_tmp[i] = hexToRGBA(arr_tmp[i]);
            } _this.debug("NEW - light rotator: ", arr_tmp);
            this._multipleColors = [arr_tmp[1], arr_tmp[2], arr_tmp[3]];
            this._cycleFader = arr_tmp[0];
            this._colorCount = arr_tmp.length - 1;
            this._cycleCounter = arr_tmp[0] + 1;
        } else {
            this._multipleColors = null;
            this._colorCount = 1;
        }

        // To be updated later on...
        this._x = 0; this._y = 0; this._dir = 0; this._rotationCounter = 0;
        this._currentColor = hexToRGBA(color); this._currentRadius = radius;
        this._flickIsOn = false; this._flicksRemaining = 0; this._lightExParams = exParamCopy(ex_params);
        if (this._lightExParams) {
            this._lightExParams.offset[0] = parseInt(this._lightExParams.offset[0]) || 0;
            this._lightExParams.offset[1] = parseInt(this._lightExParams.offset[1]) || 0;
            this._lightExParams.degrees = parseInt(this._lightExParams.degrees) || 360;
            this._lightExParams.rotation = parseInt(this._lightExParams.rotation) || 0;
            this._lightExParams.angle = parseInt(this._lightExParams.angle) || 0;
            this._lightExParams.startAt = OcRam.getFloat(this._lightExParams.startAt);
        } else { // No Ex-Params were given...
            this._lightExParams = { offset: [0, 0], degrees: 0, angle: 0, rotation: 0, startAt: 0 };
        }
        
        // Static stuff... updated only on page activation etc... 
        this._lightType = light_type; this._color = hexToRGBA(color);
        this._radius = radius; this._parentObject = parent;

        if (this._parentObject._battleSrc) {
            if (this._lightExParams.angle != 0) {
                if (this._parentObject._battleSrc == "right") { // Reverse ex-params
                    this._lightExParams.angle = 180 - parseInt(this._lightExParams.angle);
                    this._lightExParams.rotation = -parseInt(this._lightExParams.rotation);
                    this._lightExParams.offset[0] = -parseInt(this._lightExParams.offset[0]);
                }
            }
        }

        //_this.debug("NEW lightData", this);

    };

    Light_Data.prototype.updateColorCycle = function () {

        if (this._colorCount > 1) {

            // Pre-calculate color steps for faster processing!
            if (this._cycleCounter > this._cycleFader) {
                var target_color = this._multipleColors[this._colorIndex];
                this._preCalcColorSteps = [
                    (target_color.r - this._currentColor.r) / this._cycleFader,
                    (target_color.g - this._currentColor.g) / this._cycleFader,
                    (target_color.b - this._currentColor.b) / this._cycleFader,
                    (target_color.a - this._currentColor.a) / this._cycleFader
                ]; this._colorIndex = (this._colorIndex + 1) % this._colorCount; this._cycleCounter = 0;
            } this._cycleCounter++;
            
            // Do cycle based on precalculated values
            this._currentColor.r += this._preCalcColorSteps[0];
            this._currentColor.g += this._preCalcColorSteps[1];
            this._currentColor.b += this._preCalcColorSteps[2];
            this._currentColor.a += this._preCalcColorSteps[3];

            this._currentColor.r = parseInt(this._currentColor.r);
            this._currentColor.g = parseInt(this._currentColor.g);
            this._currentColor.b = parseInt(this._currentColor.b);
            this._currentColor.a = parseInt(this._currentColor.a);

        }

    };

    Light_Data.prototype.update = function (light_layer, ctx) {

        // Check that this class instance is bound to parent object...
        if (this._parentObject === null || light_layer === undefined) return;

        var obj = this._parentObject; // These must be updated even if event is not moving...


        this._x = obj.screenX_OC() + _margin;
        this._y = obj.screenY_OC() + _margin;

        this._dir = obj._direction;
        this._flickIsOn = this._flickIsOn || false;
        this._flicksRemaining = this._flicksRemaining || 0;

        this.updateColorCycle();

        // Light sources that needs computing
        switch (this._lightType) {

            case _lightType.Off: return;

            case _lightType.Flicker_Little: // Flickering little (like little broken light) 90% on / 10 % off
                if (this._flicksRemaining == 0) {
                    if (!this._flickIsOn) {
                        this._flicksRemaining = parseInt(_flickTimeOn * Math.random()); this._flickIsOn = true;
                    } else {
                        this._flicksRemaining = parseInt(_flickTimeOff * Math.random()); this._flickIsOn = false;
                    }
                } else { this._flicksRemaining--; }
                this._currentColor.a = (this._flickIsOn) ? 0 : this._color.a; 
                break;

            case _lightType.Flicker: // Flickering (like almost broken light) 50% on / 50 % off
                if (this._flicksRemaining == 0) {
                    if (!this._flickIsOn) {
                        this._flicksRemaining = parseInt(_flickTimeOn * 3 * Math.random()); this._flickIsOn = true;
                    } else {
                        this._flicksRemaining = parseInt(_flickTimeOn * 3 * Math.random()); this._flickIsOn = false;
                    }
                } else { this._flicksRemaining--; }
                this._currentColor.a = (this._flickIsOn) ? 0 : this._color.a;
                break;

            case _lightType.Flicker_Lot: // Flickering a lot (like realy broken light) 10% on / 90 % off
                if (this._flicksRemaining == 0) {
                    if (!this._flickIsOn) {
                        this._flicksRemaining = parseInt(_flickTimeOff * Math.random()); this._flickIsOn = true;
                    } else {
                        this._flicksRemaining = parseInt(_flickTimeOn * Math.random()); this._flickIsOn = false;
                    }
                } else { this._flicksRemaining--; }
                this._currentColor.a = (this._flickIsOn) ? 0 : this._color.a;
                break;

            case _lightType.Fire: // Try to simulate fire
                if (this._flicksRemaining >= _fireFramesLimit) {
                    this._flicksRemaining = 0;
                    this._currentRadius = this._radius * (0.98 + (0.04 * Math.random()));
                    _fireOpacity = 0.94 + (0.06 * Math.random());
                } this._currentColor.r = parseInt(this._color.r * _fireOpacity);
                this._currentColor.g = parseInt(this._color.g * _fireOpacity);
                this._currentColor.b = parseInt(this._color.b * _fireOpacity);
                this._currentColor.a = this._color.a * _fireOpacity;
                if (Math.random() < 0.8) { this._flicksRemaining++; }
                break;

            case _lightType.Strobo: // Strobo...
                if (this._flicksRemaining == 0) {
                    this._flicksRemaining = 2;
                    this._flickIsOn = !this._flickIsOn;
                } else { this._flicksRemaining--; }
                this._currentColor.a = (this._flickIsOn) ? 0 : this._color.a;
                break;

            case _lightType.Pulsating_Slow: // Pulsating SLOW
                if (this._flickIsOn) {
                    this._currentColor.a = parseFloat(this._currentColor.a) - 0.003;
                } else {
                    this._currentColor.a = parseFloat(this._currentColor.a) + 0.003;
                } if (this._currentColor.a < 0.1) {
                    this._flickIsOn = false;
                } else if (this._currentColor.a >= this._color.a) {
                    this._flickIsOn = true;
                } break;

            case _lightType.Pulsating: // Pulsating
                if (this._flickIsOn) {
                    this._currentColor.a = parseFloat(this._currentColor.a) - 0.01;
                } else {
                    this._currentColor.a = parseFloat(this._currentColor.a) + 0.01;
                } if (this._currentColor.a < 0.1) {
                    this._flickIsOn = false;
                } else if (this._currentColor.a >= this._color.a) {
                    this._flickIsOn = true;
                } break;

            case _lightType.Pulsating_Fast: // Pulsating FAST
                if (this._flickIsOn) {
                    this._currentColor.a = parseFloat(this._currentColor.a) - 0.02;
                } else {
                    this._currentColor.a = parseFloat(this._currentColor.a) + 0.02;
                } if (this._currentColor.a < 0.1) {
                    this._flickIsOn = false;
                } else if (this._currentColor.a >= this._color.a) {
                    this._flickIsOn = true;
                } break;

        }

        if (ctx !== null) {

            if (this._lightExParams.degrees == 0 || this._lightExParams.degrees == 360) { // "Normal" full circle light source
                ctx.radialGradient(this._x + this._lightExParams.offset[0], this._y + this._lightExParams.offset[1], this._currentRadius, this._currentColor);
            } else { // Cone light source
                var angle = this._lightExParams.angle || _dirMatrix[this._dir]; // Use angle if defined else direction
                if (this._lightExParams.rotation != 0) { // Is rotating?
                    this._lightExParams.angle += this._lightExParams.rotation;
                    if (this._lightExParams.angle > 360) this._lightExParams.angle = 0;
                    angle = this._lightExParams.angle;
                } if (obj.isPlayer_Lights_OC() && this._dir == 8) { // Fix for "flash light" effect
                    ctx.radialCone(this._x + this._lightExParams.offset[0], this._y + this._lightExParams.offset[1] - _flashLightUpFixValue, this._currentRadius, this._currentColor, angle, this._lightExParams.degrees, this._lightExParams.startAt);
                } else {
                    ctx.radialCone(this._x + this._lightExParams.offset[0], this._y + this._lightExParams.offset[1], this._currentRadius, this._currentColor, angle, this._lightExParams.degrees, this._lightExParams.startAt);
                }
            }
        }

    };

    // ------------------------------------------------------------------------------
    // OcRam_Light_Layer (copied template from rpg_core tilemap class)
    // ==============================================================================

    function OcRam_Light_Layer() {
        this.initialize.apply(this, arguments);
    }
	
    OcRam_Light_Layer.prototype = Object.create(PIXI.Container.prototype);
    OcRam_Light_Layer.prototype.constructor = OcRam_Light_Layer;
	
    OcRam_Light_Layer.prototype.initialize = function () {
        PIXI.Container.call(this);
        this.x = -_margin; this.y = -_margin;
        this._width = Graphics.boxWidth + _margin * 2;
        this._height = Graphics.boxHeight + _margin * 2;
        this._dx = -_marginPreCalc; this._dy = -_marginPreCalc;
        this._sprites = []; // This is where the light "holes" come to
        this._bg = new Bitmap(this._width, this._height);
        _this.debug("OcRam_Light_Layer.prototype.initialize", this);
    };

    OcRam_Light_Layer.prototype.updateBattleLights = function () {

        this.clearLightLayer(); // Remove old sprites (light sources)
        if (_tintBG === '') return; // No lights...

        // Draw light layer background
        var c = this._bg.canvas; var ctx = c.getContext("2d");
        ctx.globalCompositeOperation = 'copy';
        this._bg.fillRect(0, 0, this._width, this._height, _tintBG);
        ctx.globalCompositeOperation = 'lighter';
        if ($gameSwitches.value(_killSwitchId)) { this.addCompositeLayer(); return; }

        this._leftLightSource._lightData.update(this, ctx);
        this._rightLightSource._lightData.update(this, ctx);

        this.addCompositeLayer();

    };

    OcRam_Light_Layer.prototype.updateMapLights = function () {

        this.clearLightLayer(); // Remove old sprites (light sources)
        if (_tintBG === '') return; // No lights...

        // Draw light layer background
        var c = this._bg.canvas; var ctx = c.getContext("2d");
        ctx.globalCompositeOperation = 'copy';
        this._bg.fillRect(0, 0, this._width, this._height, _tintBG);
        ctx.globalCompositeOperation = 'lighter';

        // Display x, y
        this._dx = $gameMap.displayX() - _marginPreCalc; this._dy = $gameMap.displayY() - _marginPreCalc;

        if ($gameSwitches.value(_killSwitchId)) { this.addCompositeLayer(); return; }

        // Update $gamePlayer light source
        if ($gamePlayer._lightData !== null) {
            if ($gamePlayer._lightData === undefined) {
                $gamePlayer._lightData = new Light_Data($gamePlayer, _playerLightType, _playerLightColor, _playerLightRadius * 0.5, _playerLightExParams);
            } $gamePlayer._lightData.update(this, ctx);
        }

        var class_ref = this; // Reference to this class... because we are about to leave this scope.

        $gamePlayer._followers.visibleFollowers().forEach(function (ev) {
            if (ev !== null) { // We got valid follower?
                ev.updateLightData_OC(class_ref, ctx);
            }
        });

        $gameMap._events.forEach(function (ev) { // Update EVENT light sources
            if (ev !== null) { // We got valid event?
                if (ev._lightData) {
                    for (var i = 0; i < ev._lightData.length; i++) {
                        ev._lightData[i].update(class_ref, ctx);
                    }
                }
            }
        });

        for (var k in _terrainLightSources) {
            if (_terrainLightSources[k]._lightData) {
                //if (_terrainLightSources[k]._renderLight) _terrainLightSources[k]._lightData.update(class_ref, ctx);
                _terrainLightSources[k]._lightData.update(class_ref, ctx);
            }
        }

        this.addCompositeLayer();

    };

    var _prevFollowerLightData = [null, null, null];

    if (_useLocalCoop && _useP1LightForAll) {
        Game_Follower.prototype.updateLightData_OC = function (light_layer_ref, ctx) {
            if (this._playerIndex_OC != 0) {
                if ($gameTemp._reservePlayerIndexJoined != 0 && ($gameTemp._reservePlayerIndexJoined == this._memberIndex || !this._lightData)) {
                    $gameTemp._reservePlayerIndexJoined = 0;
                    _prevFollowerLightData[this._memberIndex - 1] = this._lightData;
                    this._lightData = new Light_Data(this, _playerLightType, _playerLightColor, _playerLightRadius * 0.5, _playerLightExParams);
                } if (this._lightData) this._lightData.update(light_layer_ref, ctx);
            } else {
                if ($gameTemp._reservePlayerIndexLeft != 0 && $gameTemp._reservePlayerIndexLeft == this._memberIndex) {
                    $gameTemp._reservePlayerIndexLeft = 0;
                    this._lightData = _prevFollowerLightData[this._memberIndex - 1] || null;
                } if (this._lightData) this._lightData.update(light_layer_ref, ctx);
            }
        };
    } else {
        Game_Follower.prototype.updateLightData_OC = function (light_layer_ref, ctx) {
            if (this._lightData) this._lightData.update(light_layer_ref, ctx);
        };
    }

    // Copied template from rpg_core (weather class)
    OcRam_Light_Layer.prototype.addCompositeLayer = function () {
        var sprite = new Sprite(this.viewport);
        sprite.bitmap = this._bg;
        sprite.opacity = 255;
        sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY; //2;
        this._sprites.push(sprite);
        this.addChild(sprite);
    };

    OcRam_Light_Layer.prototype.clearLightLayer = function () {
        for (var i = 0; i < this._sprites.length; i++) {
            this.removeChild(this._sprites.pop());
        }
    };

    // Source: https://www.w3schools.com/tags/canvas_createradialgradient.asp
    CanvasRenderingContext2D.prototype.radialGradient = function (x1, y1, r1, c) {
        var grd = this.createRadialGradient(x1, y1, 0, x1, y1, r1);
        grd.addColorStop(0, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')');
        grd.addColorStop(1, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)');
        this.fillStyle = grd; this.fillRect(x1 - r1, y1 - r1, r1 * 2, r1 * 2);
    };

    CanvasRenderingContext2D.prototype.radialCone = function (x1, y1, r1, c, angle, deg, start_at) {

        var deg50 = parseInt(deg * 0.5);
        
        var grd = this.createRadialGradient(x1, y1, 0, x1, y1, r1);
        if (start_at != 0) {
            grd.addColorStop(0, 'transparent');
            grd.addColorStop(start_at, 'transparent');
            grd.addColorStop(start_at, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')');
            grd.addColorStop(1, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)');
        } else {
            grd.addColorStop(0, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')');
            grd.addColorStop(1, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)');
        }

        this.fillStyle = grd; this.beginPath(); this.moveTo(x1, y1); // Center

        if (deg >= 180) { // Irregular Hexagon
            var x = x1 + r1 * Math.cos(-(angle - deg50) * _pi2) * 3;
            var y = y1 + r1 * Math.sin(-(angle - deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle - deg50 * 0.5) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle - deg50 * 0.5) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle + deg50 * 0.5) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle + deg50 * 0.5) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle + deg50) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle + deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
        } else if (deg > 90) { // Irregular Square
            var x = x1 + r1 * Math.cos(-(angle - deg50) * _pi2) * 3;
            var y = y1 + r1 * Math.sin(-(angle - deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle + deg50) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle + deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
        } else { // Triangle
            var x = x1 + r1 * Math.cos(-(angle - deg50) * _pi2) * 3;
            var y = y1 + r1 * Math.sin(-(angle - deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
            x = x1 + r1 * Math.cos(-(angle + deg50) * _pi2) * 3;
            y = y1 + r1 * Math.sin(-(angle + deg50) * _pi2) * 3;
            this.lineTo(parseInt(x), parseInt(y));
        } this.closePath(); this.fill();

    };

    var OC_Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        OC_Scene_Map_start.call(this); $gameMap.initTerrainLights();
    };

    Game_Map.prototype.initTerrainLights = function () {

        if (_terrainLightSources.length > 0 || DataManager.isEventTest()) return;

        mapCulling();

        _tileMapNotations = [];
        var ts_meta = $dataTilesets[$dataMap.tilesetId].meta;
        for (var i = 0; i < 8; i++) {
            if (ts_meta["light" + i]) {
                _tileMapNotations.push((ts_meta["light" + i] + "::").split(":"));
            } else {
                _tileMapNotations.push(null);
            }            
        }

        var flags = this.tilesetFlags(); var tiles = null;

        for (var x = 0; x < this.width(); x++) {
            for (var y = 0; y < this.height(); y++) {
                if (this.isValid(x, y)) {
                    tiles = this.layeredTiles(x, y);
                    for (var i = 0; i < tiles.length; i++) {
                        var tag = flags[tiles[i]] >> 12;
                        if (tag > 0) {
                            setupTerrainLightByTag(x, y, tag);
                        }
                    }
                }
            }
        }

    };

    // ------------------------------------------------------------------------------
    // Utility functions
    // ==============================================================================

    function mapCulling() {

        var mx = $gameMap._displayX - 4; var my = $gameMap._displayY - 4;
        var ex = mx + OcRam._screenTWidth + 8; var ey = my + OcRam._screenTHeight + 8;

        var s = null;
        for (var k in _terrainLightSources) {
            s = _terrainLightSources[k];
            if (s.x < mx) { s._renderLight = false; }
            else if (s.x > ex) { s._renderLight = false; }
            else if (s.y < my) { s._renderLight = false; }
            else if (s.y > ey) { s._renderLight = false; }
            else { s._renderLight = true; }
        }

    }

    function setupTerrainLightByTag(x, y, tag) {
        var k = [x, y];
        if (_pluginCmdNotations[tag]) {
            _terrainLightSources[k] = { _x: x, _y: y, _realX: x, _realY: y, _direction: 5, _tagId: tag, screenX_OC: _lightScreenXFunc, screenY_OC: _lightScreenYFunc };
            _terrainLightSources[k]._lightData = new Light_Data(_terrainLightSources[k], parseInt(_pluginCmdNotations[tag][0]), _pluginCmdNotations[tag][2], parseInt(_pluginCmdNotations[tag][1]), _terrainLightExParams);
        } else {
            if (_tileMapNotations[tag]) {
                _terrainLightSources[k] = { _x: x, _y: y, _realX: x, _realY: y, _direction: 5, _tagId: tag, screenX_OC: _lightScreenXFunc, screenY_OC: _lightScreenYFunc };
                _terrainLightSources[k]._lightData = new Light_Data(_terrainLightSources[k], parseInt(_tileMapNotations[tag][0]), _tileMapNotations[tag][2], parseInt(_tileMapNotations[tag][1]), _terrainLightExParams);
            }
        }
    }

    function setIndoorsFlag() {
        if (!_useTimeSystem || DataManager.isEventTest()) return false;
        var tileset_meta = $dataMap.meta;
        if (tileset_meta["indoors"] !== undefined) {
            _this.debug("Indoors meta tag found in MAP note field!", tileset_meta);
            _isIndoors = true;
        } else {
            tileset_meta = $dataTilesets[$dataMap.tilesetId].meta;
            if (tileset_meta["indoors"] !== undefined) {
                _this.debug("Indoors meta tag found in TILESET note field!", tileset_meta);
                _isIndoors = true;
            } else {
                _this.debug("Indoors meta tag was NOT found!", tileset_meta);
                _isIndoors = false;
            }
        }
    }

    function clearLightsInterval() {
        if (_intervalHandle != null) { // Let's clear this interval
            _this.debug("Interval cleared!", _intervalHandle);
            window.clearInterval(_intervalHandle);
            _intervalHandle = null;
        }
    }

    function startTinting(color, duration) {

        if (_intervalHandle != null) {
            _this.debug("Old tint found... Starting new one... ", color + ", " + duration);
            clearLightsInterval();
        }

        _this.debug("Tint started! ", color + ", " + duration);
        var target_color = hexToRGBA(color);
        window._targetLightBGColorRGBA_OC = target_color;

        if (duration < 1) {
            _this.debug("Tint done! ", target_color); _currentTintColor = target_color;
            _tintBG = 'rgba(' + target_color.r + ', ' + target_color.g + ', ' + target_color.b + ', ' + target_color.a + ')';
            return;
        }

        var one_step = 16.666667; // 16.666667 ~1 frame
        var total_steps = (1000 / one_step);

        // Pre-calculate how much each color is added on each step
        var add_red = (target_color.r - _currentTintColor.r) / (duration * total_steps);
        var add_green = (target_color.g - _currentTintColor.g) / (duration * total_steps);
        var add_blue = (target_color.b - _currentTintColor.b) / (duration * total_steps);
        var add_opa = 0; add_opa = parseFloat((target_color.a - _currentTintColor.a) / (duration * total_steps));

        // Example one step is 10ms total steps is 100 = 1sec = 1000ms
        // Example: 5 sec fade is 5 * 100 * 10 = 5000 ms = 5 sec
        var counter = 0; var counter_target = duration * total_steps;

        _intervalHandle = window.setInterval(function () {

            counter++; // It's important to increase counter... IMO

            _currentTintColor.r += add_red;
            _currentTintColor.g += add_green;
            _currentTintColor.b += add_blue;
            _currentTintColor.a = parseFloat(_currentTintColor.a) + add_opa;

            if (counter > counter_target) { // Check if we have reached time limit given
                _this.debug("Tint done! ", target_color); _currentTintColor = target_color; clearLightsInterval();
            } _tintBG = 'rgba(' + parseInt(_currentTintColor.r) + ', ' + parseInt(_currentTintColor.g) + ', ' + parseInt(_currentTintColor.b) + ', ' + _currentTintColor.a + ')';

        }, one_step); // Each step is [one_step]ms
    }

    function getCommentsOnActivePage(game_event, starts_with) {

        if (game_event.page() === undefined) return [];

        var str_cmts = [];

        if (starts_with === undefined) {
            game_event.page().list.forEach(function (cmd) {
                if (cmd.code == 108) { str_cmts.push(cmd.parameters[0]); }
            });
        } else {
            game_event.page().list.forEach(function (cmd) {
                if (cmd.code == 108) {
                    if ((cmd.parameters[0]).substr(0, starts_with.length) == starts_with) str_cmts.push(cmd.parameters[0]);
                }
            });
        } return str_cmts;

    }

    function triggerDayPhase(instant_tint) {

        var day_phase_var = OcRam_Time_System._dayPhaseVarId;

        if (_prevDayPhase != $gameVariables.value(day_phase_var) || _prevDayPhase == -1) {
            if ($gameMap._forcedTint_OC) return;
            _this.debug("Day phase variable changed. Phase:", $gameVariables.value(day_phase_var) + ", isInstant: " + instant_tint);
            _prevDayPhase = $gameVariables.value(day_phase_var);
            var this_color = '';
            switch (_prevDayPhase) {
                case 1: this_color = _nightBGColor; break;
                case 2: this_color = _dawnBGColor; break;
                case 3: this_color = _dayBGColor; break;
                case 4: this_color = _duskBGColor; break;
            } if (_isIndoors && !_useTintIndoors) this_color = '#ffffffff';
            _this.debug("Day phase bg color:", this_color);
            if (this_color) startTinting(this_color, (instant_tint) ? 0 : parseInt(OcRam_Time_System._effectTransitionTime / 60));
        }

    }

    function createNewLightData(obj, light_data) { // Game_System saves only data NOT actual references... Need to re-attach 'em!
        if (obj) {
            if (light_data === null) {
                obj._lightData = null;
            } else {
                var c = (!light_data._originalColor) ? RGBAToHex(light_data._color) : light_data._originalColor;
                obj._lightData = new Light_Data(obj, light_data._lightType, c, light_data._radius, light_data._lightExParams);
                light_data = undefined;
            }
        }
    }

    function createNewLightDataArr(obj, light_data) { // Game_System saves only data NOT actual references... Need to re-attach 'em!
        if (obj) {
            if (light_data === null) {
                obj._lightData = null;
            } else {
                obj._lightData = [];
                for (var i = 0; i < light_data.length; i++) {
                    obj._lightData.push(new Light_Data(obj, light_data[i]._lightType, light_data[i]._originalColor, light_data[i]._radius, light_data[i]._lightExParams));
                } light_data = undefined;
            }
        }
    }

    // hexToRGB & hexToRGBA Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb?rq=1

    // Convert from Hex to RGB
    function hexToRGB(p) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Convert from Hex to RGBA
    function hexToRGBA(p) {
        if (p.length < 9) p = p + "ff";
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: parseFloat(parseFloat(parseInt(result[4], 16) / 255).toFixed(2))
        } : null;
    }

    function RGBAToHex(rgba) {
        return "#" + padHex(rgba.r) + padHex(rgba.g) + padHex(rgba.b) + padHex((255 * rgba.a));
    }

    function padHex(p) {
        return ("00" + p.toString(16)).substr(-2);
    }

    // Objects are always 'byref' in JS >> lets make it 'byval'... Sorry for VB terms here LOL
    function exParamCopy(ex_params) {
        var tmp = { offset: [0, 0], degrees: 0, angle: 0, rotation: 0 };
        if (ex_params) {
            tmp.offset[0] = parseInt(ex_params.offset[0]) || 0;
            tmp.offset[1] = parseInt(ex_params.offset[1]) || 0;
            tmp.degrees = parseInt(ex_params.degrees) || 360;
            tmp.rotation = parseInt(ex_params.rotation) || 0;
            tmp.angle = parseInt(ex_params.angle) || 0;
            tmp.startAt = OcRam.getFloat(ex_params.startAt);
        } return tmp;
    }

    // Allows usage of css styled colors AND numeric values in code.
    // Example: eval("ocHaxor_" + "rgba(255, 0, 0, 0)" + ";") == ocHaxor_rgb(255, 0, 0, 0);
    function ocHaxor_rgba(r, g, b, a) {
        return {
            r: parseInt(r),
            g: parseInt(g),
            b: parseInt(b),
            a: parseFloat(a).toFixed(2)
        };
    }

}.bind(OcRam.Lights)());