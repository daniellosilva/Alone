//=============================================================================
// MPP_MessageSE.js
//=============================================================================
// Copyright (c) 2021 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc Add the function to sound SE to [Display text].
 * @author Mokusei Penguin
 * @url 
 *
 * @help [version 1.1.1]
 * This plugin is for RPG Maker MV and MZ.
 * 
 *  [Display text] control characters:
 *   \SE[n]        # Change letter SE to n / 0 with no SE
 * 
 * ▼ Plugin command details
 *  - In MV, the variable N is referred to by writing v [N] in the item for
 *    inputting a numerical value.
 *  - In MZ, in the item to enter a numerical value, select the text and
 *    write v [N] to refer to the variable N.
 *    
 *  〇 MV / MZ
 *  
 *  〇 SetMesCharSe index
 *       index : Letter SE number
 *   - Change the letter SE to n.
 *   - The default value is 1.
 *   - The control character \SE is temporary, but in the case of a
 *     plug-in command, it is applied to all text display after execution.
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠ is half-width)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 * @command messageSe
 * @desc 
 *
 * @arg index
 * @desc 0: No SE
 * @type number
 * @min 0
 * @default 1
 * 
 * 
 * @param Character Ses
 * @desc 
 * @type struct<SE>[]
 * @default []
 * 
 * @param Se Interval
 * @desc 
 * @type number
 * @min 1
 * @default 4
 * 
 * @param Stop Se When Skip
 * @desc 
 * @type boolean
 * @default false
 * 
 */

/*~struct~SE:
 * @param name
 * @desc 
 * @default 
 * @require 1
 * @dir audio/se
 * @type file
 *
 * @param volume
 * @desc 
 * @type number
 * @max 100
 * @default 90
 *
 * @param pitch
 * @desc 
 * @type number
 * @min 50
 * @max 150
 * @default 100
 *
 * @param pan
 * @desc 
 * @type number
 * @min -100
 * @max 100
 * @default 0
 *
 */

/*:ja
 * @target MV MZ
 * @plugindesc 文章の表示にSEを鳴らす機能を追加します。
 * @author 木星ペンギン
 * @url 
 *
 * @help [version 1.1.1]
 * このプラグインはRPGツクールMVおよびMZ用です。
 * 
 *  [文章の表示]の制御文字:
 *   \SE[n]        # 文字SEをn番に変更 / 0でSEなし
 * 
 * ▼ プラグインコマンド詳細
 *  - MVでは数値を入力する項目で v[N] と記述することで変数N番を参照します。
 *  - MZでは数値を入力する項目で、テキストを選択して v[N] と記述することで
 *    変数N番を参照します。
 *    
 *  〇 MV / MZ
 *  
 *  〇 SetMesCharSe index  / メッセージSE変更
 *       index : 文字SEの番号
 *   - 文字SEをn番に変更します。
 *   - デフォルト値は1です。
 *   - 制御文字\SEは一時的なものですが、プラグインコマンドの場合は実行後全ての
 *     文章表示に適用されます。
 * 
 * ================================
 * Mail : wood_penguin＠yahoo.co.jp (＠は半角)
 * Blog : http://woodpenguin.blog.fc2.com/
 * License : MIT license
 * 
 * @command messageSe
 * @text メッセージSE変更
 * @desc 
 *
 * @arg index
 * @text インデックス
 * @desc 0:SEなし
 * @type number
 * @min 0
 * @default 1
 * 
 * 
 * @param Character Ses
 * @text SEの配列
 * @desc 
 * @type struct<SE>[]
 * @default []
 * 
 * @param Se Interval
 * @text SEの間隔
 * @desc 
 * @type number
 * @min 1
 * @default 4
 * 
 * @param Stop Se When Skip
 * @text スキップでSEを停止
 * @desc 
 * @type boolean
 * @default false
 * 
 */

/*~struct~SE:ja
 * @param name
 * @text ファイル名
 * @desc 
 * @default 
 * @require 1
 * @dir audio/se
 * @type file
 *
 * @param volume
 * @text 音量
 * @desc 
 * @type number
 * @max 100
 * @default 90
 *
 * @param pitch
 * @text ピッチ
 * @desc 
 * @type number
 * @min 50
 * @max 150
 * @default 100
 *
 * @param pan
 * @text 位相
 * @desc 
 * @type number
 * @min -100
 * @max 100
 * @default 0
 *
 */

(() => {
    'use strict';

    const pluginName = 'MPP_MessageSE';
    
    // Plugin Parameters
    const parameters = PluginManager.parameters(pluginName);
    
    const paramReplace = (key, value) => {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    };
    
    const param_CharacterSes = JSON.parse(parameters['Character Ses'] || "[]", paramReplace);
    const param_SeInterval = Number(parameters['Se Interval'] || 4);
    const param_StopSeWhenSkip = Number(parameters['Stop Se When Skip'] || 4);
    
    // Dealing with other plugins
    const __base = (obj, prop) => {
        if (obj.hasOwnProperty(prop)) {
            return obj[prop];
        } else {
            const proto = Object.getPrototypeOf(obj);
            return function () { return proto[prop].apply(this, arguments); };
        }
    };
    
    //-------------------------------------------------------------------------
    // PluginManager
    
    PluginManager._commands = PluginManager._commands || {};
    
    if (!PluginManager.registerCommand) {
        PluginManager.registerCommand = function(pluginName, commandName, func) {
            const key = pluginName + ":" + commandName;
            this._commands[key] = func;
        };
    }

    if (!PluginManager.callCommand) {
        PluginManager.callCommand = function(self, pluginName, commandName, args) {
            const key = pluginName + ":" + commandName;
            const func = this._commands[key];
            if (typeof func === "function") {
                func.bind(self)(args);
            }
        };
    }

    PluginManager.registerCommand(pluginName, 'messageSe', args => {
        $gameMessage.setCharSeIndex(PluginManager.mppValue(args.index));
    });

    PluginManager.mppValue = function(value) {
        const match = /^V\[(\d+)\]$/i.exec(value);
        return match ? $gameVariables.value(+match[1]) : +value;
    };
    
    //-------------------------------------------------------------------------
    // Game_Message

    const _Game_Message_initialize = Game_Message.prototype.initialize;
    Game_Message.prototype.initialize = function() {
        _Game_Message_initialize.apply(this, arguments);
        this._charSeIndex = 1;
    };

    Game_Message.prototype.setCharSeIndex = function(index) {
        this._charSeIndex = index;
    };
    
    Game_Message.prototype.charSeIndex = function() {
        return this._charSeIndex;
    };
    
    //-------------------------------------------------------------------------
    // Game_Interpreter

    const _mzCommands = {
        SetMesCharSe: { name:'messageSe', keys:['index'] }
    };
    Object.assign(_mzCommands, {
        'メッセージSE変更': _mzCommands.SetMesCharSe
    });

    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        const params = _mzCommands[command];
        if (params) {
            const args2 = Object.assign(...params.keys.map((k,i) => ({[k]:args[i]})));
            PluginManager.callCommand(this, pluginName, params.name, args2);
        }
    };
    
    //-------------------------------------------------------------------------
    // Window_Message

    const _Window_Message_clearFlags = Window_Message.prototype.clearFlags;
    Window_Message.prototype.clearFlags = function() {
        _Window_Message_clearFlags.apply(this, arguments);
        this._charSeIndex = $gameMessage.charSeIndex();
        this._charSeCount = 0;
    };

    const _Window_Message_processCharacter = Window_Message.prototype.processCharacter;
    Window_Message.prototype.processCharacter = function(textState) {
        if (Utils.RPGMAKER_NAME = 'MV') {
            _Window_Message_processCharacter.apply(this, arguments);
        } else {
            const length = textState.buffer.length;
            _Window_Message_processCharacter.apply(this, arguments);
            if (length !== textState.buffer.length) {
                this._charSeCount--;
            }
        }
    };

    const _Window_Message_updateMessage = Window_Message.prototype.updateMessage;
    Window_Message.prototype.updateMessage = function() {
        if (_Window_Message_updateMessage.apply(this, arguments)) {
            this.updateMessageSe();
            return true;
        }
        return false;
    };

    Window_Message.prototype.updateMessageSe = function() {
        if (this._charSeIndex > 0) {
            const se = param_CharacterSes[this._charSeIndex - 1];
            if (se && this._charSeCount <= 0) {
                AudioManager.playSe(se);
                this._charSeCount = param_SeInterval;
            }
        }
    };

    const _Window_Message_updateShowFast = Window_Message.prototype.updateShowFast;
    Window_Message.prototype.updateShowFast = function() {
        const lastShowFast = this._showFast;
        _Window_Message_updateShowFast.apply(this, arguments);
        if (param_StopSeWhenSkip && !lastShowFast && this._showFast) {
            AudioManager.stopSe();
        }
    };

    const _Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        if (code === 'SE') {
            this._charSeIndex = this.obtainEscapeParam(textState);
        } else {
            _Window_Message_processEscapeCharacter.apply(this, arguments);
        }
    };

    const _Window_Message_processNormalCharacter = __base(Window_Message.prototype, 'processNormalCharacter');
    Window_Message.prototype.processNormalCharacter = function(textState) {
        _Window_Message_processNormalCharacter.apply(this, arguments);
        this._charSeCount--;
    };

    const _Window_Message_startPause = Window_Message.prototype.startPause;
    Window_Message.prototype.startPause = function() {
        _Window_Message_startPause.apply(this, arguments);
        if (param_StopSeWhenSkip) AudioManager.stopSe();
    };

})();
