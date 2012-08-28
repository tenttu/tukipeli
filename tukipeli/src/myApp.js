var MainLayer = cc.Layer.extend({
    isMouseDown:false,
    helloImg:null,
    helloLabel:null,
    circle:null,
    sprite:null,
    jyrki:null,
    
    fiLabel:null,
    esLabel:null,
    prLabel:null,
    geLabel:null,
    itLabel:null,
    jyrkiLabel:null,
    
    fiCount:100,
    esCount:250,
    prCount:100,
    geCount:50,
    itCount:400,
    jyrkiCount:0,
    
    jyrkiLocation:null,

    init:function () {

        this._super();

        var size = cc.Director.getInstance().getWinSize();

        this.helloLabel = cc.LabelTTF.create("Euvostoliiton tukipeli", "Arial", 38);
        this.helloLabel.setPosition(cc.p(size.width / 2, size.height - 40));
        this.addChild(this.helloLabel, 5);
        
        this.jyrkiLabel = cc.LabelTTF.create("Jyrkin käteinen: 0 milj", "Arial", 24);
        this.jyrkiLabel.setPosition(cc.p(size.width / 2, size.height - 80));
        this.addChild(this.jyrkiLabel, 5);

        var lazyLayer = new cc.LazyLayer();
        this.addChild(lazyLayer);

        // add "Helloworld" splash screen"
        this.sprite = cc.Sprite.create("res/europe.jpg");
        this.sprite.setAnchorPoint(cc.p(0.5, 0.5));
        this.sprite.setPosition(cc.p(size.width / 2, size.height / 2));

        this.addChild(this.sprite, 0);
        
        var fiItem = cc.MenuItemImage.create(
            "res/fi.png",
            "res/fi.png",
            this,
            function () {
              this.jyrkiLocation = null;
              this.jyrki.stopAllActions();
              var pos = cc.pAdd( cc.p(20,4), fiItem.getPosition() );
               this.jyrki.runAction(cc.Sequence.create(cc.MoveTo.create(2, pos), cc.CallFunc.create(this, function() {
                 this.jyrkiLocation = "fi";
               }), null));
            });
        fiItem.setAnchorPoint(cc.p(0.5, 0.5));
        fiItem.setPosition(cc.p(570, size.height - 180));
        
        this.jyrki = cc.Sprite.create("res/jyrki.png");
        this.jyrki.setPosition(cc.p(390, size.height - 380));
        this.addChild(this.jyrki, 10);
       
        var esItem = cc.MenuItemImage.create(
            "res/es.png",
            "res/es.png",
            this,
            function () {
              this.jyrkiLocation = null;
              this.jyrki.stopAllActions();
              var pos = cc.pAdd( cc.p(20,4), esItem.getPosition() );
               this.jyrki.runAction(cc.Sequence.create(cc.MoveTo.create(2,  pos), cc.CallFunc.create(this, function() {
                 this.jyrkiLocation = "es";
               }), null));
            });
        esItem.setAnchorPoint(cc.p(0.5, 0.5));
        esItem.setPosition(cc.p(175, size.height - 550));
        
        var prItem = cc.MenuItemImage.create(
            "res/pr.png",
            "res/pr.png",
            this,
            function () {
              this.jyrkiLocation = null;
              this.jyrki.stopAllActions();
              var pos = cc.pAdd( cc.p(20,4), prItem.getPosition() );
               this.jyrki.runAction(cc.Sequence.create(cc.MoveTo.create(2, pos), cc.CallFunc.create(this, function() {
                 this.jyrkiLocation = "pr";
               }), null));
            });
        prItem.setAnchorPoint(cc.p(0.5, 0.5));
        prItem.setPosition(cc.p(80, size.height - 530));
        
        var geItem = cc.MenuItemImage.create(
            "res/ge.png",
            "res/ge.png",
            this,
            function () {
              this.jyrkiLocation = null;
              this.jyrki.stopAllActions();
              var pos = cc.pAdd( cc.p(20,4), geItem.getPosition() );
               this.jyrki.runAction(cc.Sequence.create(cc.MoveTo.create(2, pos), cc.CallFunc.create(this, function() {
                 this.jyrkiLocation = "ge";
               }), null));
            });
        geItem.setAnchorPoint(cc.p(0.5, 0.5));
        geItem.setPosition(cc.p(555, size.height - 655));
        
        var itItem = cc.MenuItemImage.create(
            "res/it.png",
            "res/it.png",
            this,
            function () {
              this.jyrkiLocation = null;
              this.jyrki.stopAllActions();
              var pos = cc.pAdd( cc.p(20,4), itItem.getPosition() );
               this.jyrki.runAction(cc.Sequence.create(cc.MoveTo.create(2, pos), cc.CallFunc.create(this, function() {
                 this.jyrkiLocation = "ge";
               }), null));
            });
        itItem.setAnchorPoint(cc.p(0.5, 0.5));
        itItem.setPosition(cc.p(418, size.height - 560));

        var flagMenu = cc.Menu.create(fiItem, esItem, prItem, geItem, itItem, null);
        flagMenu.setPosition(cc.PointZero());
        this.addChild(flagMenu, 1);
        
        this.fiLabel = cc.LabelTTF.create("100 milj", "Courier New", 14);
        this.fiLabel.setPosition(cc.p(570, size.height - 210));
        this.addChild(this.fiLabel, 5);
        
        this.esLabel = cc.LabelTTF.create("100 milj", "Courier New", 14);
        this.esLabel.setPosition(cc.p(175, size.height - 580));
        this.addChild(this.esLabel, 5);
        
        this.prLabel = cc.LabelTTF.create("100 milj", "Courier New", 14);
        this.prLabel.setPosition(cc.p(80, size.height - 560));
        this.addChild(this.prLabel, 5);
        
        this.geLabel = cc.LabelTTF.create("100 milj", "Courier New", 14);
        this.geLabel.setPosition(cc.p(555, size.height - 685));
        this.addChild(this.geLabel, 5);
        
        this.itLabel = cc.LabelTTF.create("100 milj", "Courier New", 14);
        this.itLabel.setPosition(cc.p(418, size.height - 590));
        this.addChild(this.itLabel, 5);
        
        this.schedule(this.update);

        return true;
    },
    update:function(dt){
    
        if(this.jyrkiLocation == "fi")
        {
          var sum = 3 * dt;
          this.jyrkiCount += sum;
          this.fiCount -= sum;
        }
        else
          this.fiCount += 1 * dt;
          
        this.fiLabel.setString(Math.round(this.fiCount) + " milj");
        
        if(this.jyrkiLocation == "es" && this.jyrkiCount > 0)
        {
          var sum = 3 * dt;
          this.jyrkiCount -= sum;
          this.esCount += sum;
        }
        else
          this.esCount -= 3/4 * dt;
          
        this.esLabel.setString(Math.round(this.esCount) + " milj");
        
        if(this.jyrkiLocation == "pr" && this.jyrkiCount > 0)
        {
          var sum = 3 * dt;
          this.jyrkiCount -= sum;
          this.prCount += sum;
        }
        else
          this.prCount -= 3/4 * dt;

        this.prLabel.setString(Math.round(this.prCount) + " milj");
        
        if(this.jyrkiLocation == "ge" && this.jyrkiCount > 0)
        {
          var sum = 3 * dt;
          this.jyrkiCount -= sum;
          this.geCount += sum;
        }
        else
          this.geCount -= 1 * dt;
          
        this.geLabel.setString(Math.round(this.geCount) + " milj");
        
        if(this.jyrkiLocation == "it" && this.jyrkiCount > 0)
        {
          var sum = 3 * dt;
          this.jyrkiCount -= sum;
          this.itCount += sum;
        }
        else
          this.itCount -= 2/4 * dt;
          
        this.itLabel.setString(Math.round(this.itCount) + " milj");
        
        if(this.jyrkiCount < 0) this.jyrkiCount = 0;
        this.jyrkiLabel.setString("Jyrkin käteinen: " + Math.round(this.jyrkiCount) + " milj");
        
        if(this.itCount < 0 || this.geCount < 0 || this.prCount < 0 || this.esCount < 0 || this.fiCount < 0)
        {
          this.unschedule(this.update);
          
          var size = cc.Director.getInstance().getWinSize();

          var endLabel = cc.LabelTTF.create("Rahat loppu, tuli ydintalvi", "Arial", 38);
          endLabel.setPosition(cc.p(size.width / 2, size.height / 2));
          this.addChild(endLabel, 10);
        }
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
        layer.init();
    }
});
