//=============================================================================
// OCSMenu.js
//=============================================================================

/*:
 * @plugindesc menu alternativo de personaguem unico
 * @author Alanderson zelindro da rosa
 *
 * @param mp_bar
 * @desc coloque true para mostrar o mp no menu
 * @default false
 *
 * @param t_document
 * @desc nome de cocumentos no menu
 * @default Documentos
 *
 * @param t_exit
 * @desc nome do botão de sair no menu
 * @default Sair
 *
 * @param t_equiped
 * @desc nome que demonstra a arma equipada
 * @default Equipado
 * @help
 *
 * @param t_back
 * @desc usado para voltar
 * @default Voltar
 *
 * @help 
 * Menu:	
 * Esse menu é feito exclusivo para um personaguem, e é feito baseado em jogos survivors,
 * ele não da suporte a equipamentos como roupas e assessorios, apenas armas 
 *	 
 * Imagem do item no menu:	
 * para por uma imagem do item desejado basta colocar: 
 * 
 * <menu_imgs:X>
 *
 * Na nota do item ou arma
 * Substituindo X pelo nome da imagem na pasta pictures 
 * use a proporção 128x128 na imagem
 *
 *
 *
 *
 *
 */
 
 
(function() {
	//variaveis
	var parameters = PluginManager.parameters('OCSMenu');
	var mp_bar = parameters['mp_bar'];
	var t_document = parameters['t_document'];
	var t_exit = parameters['t_exit'];
	var t_equiped = parameters['t_equiped'];
	var t_use = parameters['t_use'];
	var t_back = parameters['t_back'];

	//-----------------------------------------------------------------------------
	// Window_OcsMenuComand
	//
	//criando janela de Comandos
	function Window_OcsMenuComand(){
		this.initialize.apply(this, arguments);
	}
	
	Window_OcsMenuComand.prototype = Object.create(Window_HorzCommand.prototype);
	Window_OcsMenuComand.prototype.constructor = Window_OcsMenuComand;
	
	
	Window_OcsMenuComand.prototype.initialize = function() {
		var x = Graphics.boxWidth - 400;
		Window_HorzCommand.prototype.initialize.call(this, x, 0);
		
	};
	Window_OcsMenuComand.prototype.windowWidth = function() {
		return 400;
	};

	Window_OcsMenuComand.prototype.maxCols = function() {
		return 3;
	};
	
	Window_OcsMenuComand.prototype.makeCommandList = function() {
		this.addCommand(TextManager.item, 'item');
		this.addCommand(t_document, 'document');
		this.addCommand(t_exit, 'gameEnd');
		
	};
	
	//-----------------------------------------------------------------------------
	// Window_OcsMenuStatus
	//
	// 

	function Window_OcsMenuStatus() {
		this.initialize.apply(this, arguments);
	}

	Window_OcsMenuStatus.prototype = Object.create(Window_Base.prototype);
	Window_OcsMenuStatus.prototype.constructor = Window_OcsMenuStatus;
	
	Window_OcsMenuStatus.prototype.initialize = function() {
		
		
		
		Window_Base.prototype.initialize.call(this, 0 , 0, 417, 220);
		this.draw(this.Actor());
		ImageManager.loadFace(actor.faceName());
	};
		
	
	Window_OcsMenuStatus.prototype.draw = function(actor) {
		//status
		this.drawActorSimpleStatus(actor, 0,0, 350);
		//face
		this.drawActorFace(actor, 0, 35);
		//arma
		this.drawWeapon(actor);
		
	};
	Window_OcsMenuStatus.prototype.drawWeapon = function(actor){
		var weapon = actor.equips()[0];
		if(weapon !== null){
			this.drawIcon(weapon.iconIndex, 180, 144);
			this.drawText(t_equiped + ": ", 180,104);
			this.drawText(weapon.name,220,144);
		}
		
	}
	
	
	Window_OcsMenuStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
		var lineHeight = this.lineHeight();
		var x2 = x + 180;
		var width2 = Math.min(200, width - 180 - this.textPadding());
		this.drawActorName(actor, x, y);
		this.drawActorClass(actor, x2, y);
		this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
		if(mp_bar === 'true'){
			this.drawActorMp(actor, x2, y + lineHeight * 1 + 35, width2);
		}
		
	};
	Window_OcsMenuStatus.prototype.Actor = function() {
		actor = $gameParty.members()[0];
		return actor;
	};
	Window_OcsMenuStatus.prototype.refresh = function() {
		if (this.contents) {
			this.contents.clear();
			this.draw(this.Actor());
		}
	};
		
	//-----------------------------------------------------------------------------
	// Window_OcsMenuItems
	//
	
	function Window_OcsMenuItems() {
		this.initialize.apply(this, arguments);
	}

	Window_OcsMenuItems.prototype = Object.create(Window_ItemList.prototype);
	Window_OcsMenuItems.prototype.constructor = Window_OcsMenuItems;
	
	
	Window_OcsMenuItems.prototype.makeItemList = function() {
		this._data = $gameParty.allItems().filter(function(item) {
			return this.includes(item);
		}, this);
		
		if (this.includes(null)) {
			this._data.push(null);
		}
	};
	Window_OcsMenuItems.prototype.includes = function(item) {
		if(this._category === 'keyItem'){
			return DataManager.isItem(item) && item.itypeId === 2;
			
		}else{
			if(DataManager.isItem(item) && item.itypeId === 1){
				return true;
			}else if(DataManager.isWeapon(item)){
				return true;
			}else if(DataManager.isArmor(item)){
				return true;
			}else{
				return false;
			}
		}
		
	};
	Window_OcsMenuItems.prototype.playOkSound = function() {
		
	};
	Window_OcsMenuItems.prototype.isEnabled = function(item) {
		
		var Actor = $gameParty.members()[0];
		
		if(DataManager.isWeapon(item)){
			return Actor.canEquip(item);
		}else{
			return Actor.canUse(item);
		}
	};
	
	
	
	
	
	Window_OcsMenuItems.prototype.drawItemNumber = function(item, x, y, width) {
		if (this.needsNumber()) {
			this.drawText($gameParty.numItems(item), x, y, width, 'right');
		}
	};
	Window_OcsMenuItems.prototype.drawItemName = function(item, x, y, width) {
		width = width || 312;
		if (item) {
			var iconBoxWidth = Window_Base._iconWidth + 4;
			this.resetTextColor();
			this.drawIcon(item.iconIndex, x , y );
			this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
		}
	};
	Window_OcsMenuItems.prototype.maxCols = function() {
		return 1;
	};
	//-----------------------------------------------------------------------------
	// Window_OcsMenuItemHelp
	//
	
	function Window_OcsMenuItemHelp() {
		this.initialize.apply(this, arguments);
	}

	Window_OcsMenuItemHelp.prototype = Object.create(Window_Help.prototype);
	Window_OcsMenuItemHelp.prototype.constructor = Window_OcsMenuItemHelp;
	
	
	Window_OcsMenuItemHelp.prototype.initialize = function(numLines) {
		var width = 417;
		var height = 400;
		Window_Base.prototype.initialize.call(this, 0, 220, width, height);
		this._text = '';
		this._item = null;
	};
	Window_OcsMenuItemHelp.prototype.drawImage = function(){
		if(this._item){
			if(typeof this._item.meta.menu_imgs !== 'undefined'){
				this._logo = new Sprite();
				this._logo.bitmap = ImageManager.loadPicture(this._item.meta.menu_imgs);
				this.addChild(this._logo);
				this._logo.x = 144;
				this._logo.y = 80;
			}
		}
	}
	Window_OcsMenuItemHelp.prototype.setItem = function(item) {
		this._item = item;
		this.setText(item ? item.description : '');
	};
	Window_OcsMenuItemHelp.prototype.setText = function(text) {
		this._text = text;
		this.refresh();
	};
	Window_OcsMenuItemHelp.prototype.refresh = function() {
		this.contents.clear();
		this.removeChild(this._logo);
		this.drawTextEx(this._text, this.textPadding() - 1, 220);
		this.drawImage();
	};
	Window_OcsMenuItemHelp.prototype.clear = function() {
		this.setText('');
		this.removeChild(this._logo);
	};
	
	//-----------------------------------------------------------------------------
	// Scene_Menu
	//
	//modificando Status do menu
	Scene_Menu.prototype.create = function() {
		Scene_MenuBase.prototype.create.call(this);
		this.createCommandWindow();
		this.createStatusWindow();
		this.createHelpWindow();
		this.createItemWindow();
	};
	Scene_Menu.prototype.start = function() {
		Scene_MenuBase.prototype.start.call(this);
		this.createStatusWindow();
	};
	Scene_Menu.prototype.createStatusWindow = function() {
		this._statusWindow = new Window_OcsMenuStatus();
		this.addWindow(this._statusWindow);
	};
	//mudando parametros de escolha
	Scene_Menu.prototype.createCommandWindow = function() {
		this._commandWindow = new Window_OcsMenuComand();
		this._commandWindow.setHandler('item',      this.commandItem.bind(this));
		this._commandWindow.setHandler('document',  this.commandDocument.bind(this));
		this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
		this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
		this.addWindow(this._commandWindow);
	};
	//criando função de itens
	Scene_Menu.prototype.commandItem = function() {
		this._itemWindow.setCategory('item');
		if(this._itemWindow._data.length !== 0){
			
			this._itemWindow.activate();
			this._itemWindow.selectLast();
		}else{
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		}
		
	};
	//criando função de documentos
	Scene_Menu.prototype.commandDocument = function() {
		
		this._itemWindow.setCategory('keyItem');
		if(this._itemWindow._data.length !== 0){
			
			this._itemWindow.activate();
			this._itemWindow.selectLast();
		}else{
			SoundManager.playBuzzer();
			this._commandWindow.activate();
		}
	};
	//criando janela de itens
	Scene_Menu.prototype.createItemWindow = function() {
		this._itemWindow = new Window_OcsMenuItems(417, 70, 400, 550);
		this._itemWindow.setHelpWindow(this._helpWindow);
		this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
		this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
		
		this.addWindow(this._itemWindow);
		this._itemWindow.setCategory('item');
	};
	//criando janela de ajuda
	Scene_Menu.prototype.createHelpWindow = function() {
		this._helpWindow = new Window_OcsMenuItemHelp();
		this.addWindow(this._helpWindow);
	};
	
	//quando for usado o item
	Scene_Menu.prototype.onItemOk = function() {
		if(DataManager.isWeapon(this._itemWindow.item())){
			this.Actor().changeEquip(0, this._itemWindow.item());
			
			SoundManager.playEquip();
		}else{
			if(this.isItemEffectsValid()){
				this.Actor().useItem(this._itemWindow.item());
				
				this.applyItem();
				if ($gameTemp.isCommonEventReserved()) {
					SceneManager.goto(Scene_Map);
				}
				
				SoundManager.playUseItem();
			}else{
				SoundManager.playBuzzer();
				
			}
		}
		this._itemWindow.refresh();
		this._statusWindow.refresh();
		this._itemWindow.activate();
	};
	
	
	Scene_Menu.prototype.onItemCancel = function() {
		this._itemWindow.deselect();
		this._commandWindow.activate();
	};
	
	Scene_Menu.prototype.Actor = function() {
		Actor = $gameParty.members()[0];
		return Actor;
	};
	Scene_Menu.prototype.applyItem = function() {
		var action = new Game_Action(this.Actor());
		action.setItemObject(this.item());
		action.apply(this.Actor());	
		action.applyGlobal();
	};
	Scene_Menu.prototype.isItemEffectsValid = function() {
		var action = new Game_Action(this.Actor());
		action.setItemObject(this.item());
		return action.testApply(this.Actor());
		
	};
	Scene_Menu.prototype.item = function(){
		return this._itemWindow.item();
	};
})();