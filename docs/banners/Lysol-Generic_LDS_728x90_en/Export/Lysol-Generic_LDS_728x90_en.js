(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.germs_sm = function() {
	this.initialize(img.germs_sm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,125);


(lib.hand_spray = function() {
	this.initialize(img.hand_spray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,172);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,46);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,109);


(lib.spray_01 = function() {
	this.initialize(img.spray_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,93);


(lib.spray_02 = function() {
	this.initialize(img.spray_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.whatittaketoprotect = function() {
	this.initialize(img.whatittaketoprotect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,22);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitebox, new cjs.Rectangle(0,0,728,90), null);


(lib.whatittakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whatittaketoprotect();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whatittakes, new cjs.Rectangle(0,0,65,22), null);


(lib.spray_mist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_02();
	this.instance.setTransform(53,49,0.6474,0.6474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7467,scaleY:0.7467,rotation:180,x:262,y:250},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.118)","#FFFFFF","rgba(255,255,255,0)"],[0,0,0,1],0,0,0,0,0,73.3).s().p("AoCIDQjVjVAAkuQAAktDVjVQDWjVEsAAQEuAADVDVQDVDVAAEtQAAEujVDVQjVDVkuAAQksAAjWjVg");
	this.shape.setTransform(153.9,148.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.5,-189.5,1129.1,765);


(lib.spray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_01();
	this.instance.setTransform(4.5,0,1,0.8635,3.2113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,88.1);


(lib.product_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.product();
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(0,0,40.5,62.2), null);


(lib.numbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape.setTransform(14.425,400.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AAMBqIAAiqIgmAlIgWgZIA/g1IAhAAIAADTg");
	this.shape_1.setTransform(12.35,369.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhGBsIAAgmIBRhPIAIgIIAHgIIAFgKQACgFAAgFQAAgHgCgEQgDgFgEgEQgEgEgGgCQgFgCgGAAQgNAAgJAIQgIAIgCANIgmgDQABgPAGgLQAGgLAJgIQAJgHANgEQAMgEAOAAQAOAAAMAEQANAEAJAHQAJAHAGAMQAFALAAAPQAAAUgJAPQgJANgPAOIhAA9IBhAAIAAAgg");
	this.shape_2.setTransform(14.425,338.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgXBrQgMgDgKgGQgJgGgHgJQgHgKgDgNIAmgKQADANAJAHQAIAHANAAQAIAAAGgCQAHgCAFgFQAEgEADgGQADgGAAgIQAAgKgEgHQgFgGgGgDQgHgEgIgBIgQgBIgJAAIAAggIAKAAIAOAAIANgEQAGgEADgFQAEgGAAgJQAAgNgIgIQgJgHgNAAQgKAAgJAGQgIAGgEALIgmgKQADgMAHgJQAHgIAJgGQAJgFAKgDQALgDAMAAQANAAAMAEQAMAEAKAHQAJAHAGAKQAFALAAAOQAAARgKANQgJAOgRAEIAAABQAUADALANQAKAOAAAUQAAAPgGAMQgGAMgJAIQgKAIgNAEQgNAEgPAAQgMAAgLgDg");
	this.shape_3.setTransform(14.175,307.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AALBqIAAgrIhZAAIAAgkIBViEIAoAAIAACIIAgAAIAAAgIggAAIAAArgAgqAfIA1AAIAAhVIAAAAg");
	this.shape_4.setTransform(14.45,276.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AguBgQgSgMgIgZIAmgKQAEAMAJAGQAIAHANAAQAIAAAHgDQAHgDAFgEQAFgFACgHQADgGAAgIQAAgMgEgHQgEgIgHgFQgHgFgJgBQgIgCgKgBQgMAAgLADQgMACgJAFIAChyIB4AAIAAAgIhVAAIgBArIALgCIALgBQAQAAANAFQANAFAJAJQAJAKAGALQAFANAAARQAAARgGANQgGAOgKAKQgKAJgPAFQgOAFgPAAQgZAAgSgMg");
	this.shape_5.setTransform(14.125,245.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgeBnQgNgFgKgJQgKgKgGgNQgGgOAAgQQAAgRAGgOQAGgMAIgOIA3hWIAqAAIgyBPIABAAIAIgCIALgBQAOgBAMAGQALAFAJAKQAIAJAFALQAFAMAAAOQAAARgGAOQgGANgKAJQgKAKgOAFQgOAFgQAAQgQAAgOgFgAgNAAQgHADgFAFQgGAFgDAHQgDAHAAAIQAAAIADAHQADAIAGAEQAFAGAHADQAHADAHAAQAIAAAHgDQAHgDAFgGQAGgEADgIQADgHAAgIQAAgIgDgHQgDgHgGgFQgFgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(14.425,214.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("Ag2BqIBWixIhnAAIAAgiICPAAIAAAhIhUCyg");
	this.shape_7.setTransform(14.025,183.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgbBqQgNgEgKgIQgJgIgGgMQgGgMAAgQQAAgKADgJQAEgIAFgHQAFgHAIgFQAHgDAHgCIAAAAQgQgFgIgNQgIgNAAgRQAAgNAFgLQAFgKAJgHQAJgHAMgEQAMgEAMAAQANAAAMAEQAMAEAJAHQAJAHAFAKQAFALAAANQAAARgIANQgIANgQAFIAAAAQAIACAHADQAHAFAFAHQAFAHAEAIQADAJAAAKQAAAQgGAMQgGAMgJAIQgKAIgNAEQgNAEgPAAQgOAAgNgEgAgNALQgGACgFAEQgFAFgDAGQgDAGAAAIQAAAPAKAJQAKAKAPAAQAQAAAKgKQAKgJAAgPQAAgIgDgGQgDgGgFgFQgEgEgHgCQgHgDgHAAQgGAAgHADgAgUhGQgIAJAAAMQAAAMAIAJQAIAIAMAAQAGAAAFgCQAGgCAEgEQAEgEACgGQACgFAAgGQAAgMgIgJQgIgIgNAAQgNAAgHAIg");
	this.shape_8.setTransform(14.425,152.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgpBsIAyhPIgBAAIgIADIgLABQgOgBgLgFQgMgGgJgIQgIgKgFgMQgFgMAAgOQAAgQAGgNQAGgOAKgKQAKgJAOgFQAOgFAPAAQARAAANAFQAOAFALAJQAJAJAGAOQAGANAAARQAAARgGAOQgFANgJAOIg3BVgAgPhGQgHADgFAFQgGAGgDAHQgDAHAAAIQAAAIADAHQADAHAGAFQAFAGAHABQAHADAIABQAHgBAHgDQAHgBAGgGQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgGQgGgFgHgDQgHgDgHAAQgIAAgHADg");
	this.shape_9.setTransform(14.425,121.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_10.setTransform(14.425,90.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.numbers, new cjs.Rectangle(3.5,69,21.9,355), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,49,46), null);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,728,90), null);


(lib.germs_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.germs_sm();
	this.instance.setTransform(-106,145,1,1,180);

	this.instance_1 = new lib.germs_sm();
	this.instance_1.setTransform(352,296,1,1,0,180,0);

	this.instance_2 = new lib.germs_sm();
	this.instance_2.setTransform(489,317,1,1,-90);

	this.instance_3 = new lib.germs_sm();
	this.instance_3.setTransform(-156,264,1,1,0,180,0);

	this.instance_4 = new lib.germs_sm();
	this.instance_4.setTransform(43,145,1,1,180);

	this.instance_5 = new lib.germs_sm();
	this.instance_5.setTransform(687,40,1,1,90);

	this.instance_6 = new lib.germs_sm();
	this.instance_6.setTransform(417,46);

	this.instance_7 = new lib.germs_sm();
	this.instance_7.setTransform(-8,146,1,1,0,-90,90);

	this.instance_8 = new lib.germs_sm();
	this.instance_8.setTransform(112,297,1,1,-90);

	this.instance_9 = new lib.germs_sm();
	this.instance_9.setTransform(217,291,1,1,0,180,0);

	this.instance_10 = new lib.germs_sm();
	this.instance_10.setTransform(421,20,1,1,90);

	this.instance_11 = new lib.germs_sm();
	this.instance_11.setTransform(310,20,1,1,90);

	this.instance_12 = new lib.germs_sm();
	this.instance_12.setTransform(40,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.germs_group, new cjs.Rectangle(-256,20,943,297), null);


(lib.copy_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape.setTransform(205.375,9.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_1.setTransform(203.3,6.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_2.setTransform(200.175,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgHAdIgFgGIAAAHIgHAAIAAg8IAHAAIAAAdQACgDAEgCQADgCADAAQAFAAADACIAGAEIAEAFQACAEAAAEQAAAEgCAEIgEAGIgFAEQgEACgEAAQgEAAgEgCgAgFgBIgEACQgCACAAADIgBAFIABAGQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIAEADIAFABIAFgBIAFgDIACgEIABgGIgBgFIgCgFIgFgCIgFgBIgFABg");
	this.shape_3.setTransform(195.625,7.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_4.setTransform(190.975,8.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_5.setTransform(188,6.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_6.setTransform(182.675,8.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_7.setTransform(178.275,6.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AAAAXIgCgCIgBgEIgBgFIAAgTIgIAAIAAgGIAIAAIAAgKIAGAAIAAAKIALAAIAAAGIgLAAIAAARIAAADIAAADIACACIADABIADAAIADgCIAAAGIgEABIgDAAIgGgBg");
	this.shape_8.setTransform(174.625,7.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAKATIgKgcIAAAAIgJAcIgGAAIgNglIAIAAIAIAcIAKgcIAGAAIAKAcIAIgcIAGAAIgMAlg");
	this.shape_9.setTransform(168.1,8.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgIASIgFgEIgFgGIgBgIQAAgDABgEQACgEADgCIAFgEQAFgCADAAIAIACIAGAEQADACABAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgDAAgFgCgAgEgMIgFADIgCAFIgBAEIABAGIACAEIAFADIAEABIAFgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDIgFgBIgEABg");
	this.shape_10.setTransform(162.8,8.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_11.setTransform(159.45,6.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_12.setTransform(157.55,6.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgIASIgFgEIgFgGIgBgIQAAgDABgEQACgEADgCIAFgEQAFgCADAAIAIACIAGAEQADACABAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgDAAgFgCgAgEgMIgFADIgDAFIAAAEIAAAGIADAEIAFADIAEABIAGgBIADgDIADgEIABgGIgBgEIgDgFIgDgDIgGgBIgEABg");
	this.shape_13.setTransform(154.25,8.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgEAfIAAgfIgIAAIAAgGIAIAAIAAgIIABgGIACgFIADgEIAGgBIADABIACAAIAAAGIgFgBIgEABIgBACIgBAEIAAAEIAAAHIAJAAIAAAGIgJAAIAAAfg");
	this.shape_14.setTransform(150.75,6.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_15.setTransform(144.675,7.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAKATIAAgVQAAgFgCgDQgCgCgEAAIgEABIgEADIgCAEIgBAFIAAASIgGAAIAAgbIgBgFIAAgEIAHAAIAAADIAAADIAAAAIABgDIAEgCIADgCIADAAIAGABIAFADQACACABADIABAGIAAAWg");
	this.shape_16.setTransform(140.1,8.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_17.setTransform(135.775,8.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_18.setTransform(129.075,7.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_19.setTransform(124.575,8.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_20.setTransform(120.375,8.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_21.setTransform(116.975,8.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_22.setTransform(111.425,8.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgOAcIgDgBIABgFIACABIACAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIACgEIADgIIgPgkIAHAAIAKAcIABAAIAKgcIAIAAIgTAtIgBAEIgCAEIgEACIgFAAg");
	this.shape_23.setTransform(107.85,9.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_24.setTransform(103.775,8.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAKATIgKgcIAAAAIgJAcIgGAAIgNglIAIAAIAIAcIAKgcIAGAAIAKAcIAIgcIAGAAIgMAlg");
	this.shape_25.setTransform(98.8,8.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_26.setTransform(94.9,6.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AAUAcIgGgOIgbAAIgGAOIgIAAIAZg3IAGAAIAYA3gAALAIIgLgbIgLAbIAWAAg");
	this.shape_27.setTransform(91.175,7.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape_28.setTransform(85.075,9.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_29.setTransform(81.475,7.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_30.setTransform(76.925,8.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAAAXIgCgCIgBgEIgBgFIAAgTIgIAAIAAgGIAIAAIAAgKIAGAAIAAAKIALAAIAAAGIgLAAIAAARIAAADIAAADIACACIADABIADAAIADgCIAAAGIgEABIgDAAIgGgBg");
	this.shape_31.setTransform(73.275,7.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgFASIgGgEQgCgCgCgEIgBgIIABgHIAEgGIAGgEIAHgCQAFAAADACQAEABADADIgFAFIgFgEIgFgBIgEABIgEADIgCAFIgBAEIABAFIACAFIAEADIAEABQAHAAADgFIAFAFQgDADgEABIgIACIgHgCg");
	this.shape_32.setTransform(70.125,8.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_33.setTransform(65.875,8.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_34.setTransform(62.475,8.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgCAcIAAgkIAFAAIAAAkgAgCgUQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABIACADIgCADQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_35.setTransform(59.9,7.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_36.setTransform(56.475,7.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_37.setTransform(50.175,8.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_38.setTransform(46.375,8.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_39.setTransform(39.675,7.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_40.setTransform(35.125,8.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_41.setTransform(31.175,8.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B3785").s().p("AgIASIgEgDQgCgCAAgDIgBgGIAAgWIAFAAIAAAVQABAFACADQACACAEAAIAFgBIADgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABgFIAAgSIAGAAIAAAbIAAAFIAAAEIgFAAIAAgDIAAgDIgBAAIgCADIgDACIgDACIgEAAIgGgBg");
	this.shape_42.setTransform(27.35,8.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B3785").s().p("AALATIAAgVQAAgFgDgDQgCgCgEAAIgFABIgDADIgCAEIgBAFIAAASIgGAAIAAgbIAAgFIAAgEIAFAAIAAADIAAADIABAAIACgDIADgCIADgCIAEAAIAFABIAFADQACACAAADIABAGIAAAWg");
	this.shape_43.setTransform(20.7,8.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_44.setTransform(16.325,8.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B3785").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_45.setTransform(11.925,6.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B3785").s().p("AAOAcIgOgvIgNAvIgIAAIgQg3IAHAAIAOAuIANguIAHAAIAOAuIANguIAHAAIgQA3g");
	this.shape_46.setTransform(5.85,7.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_04, new cjs.Rectangle(0,0,208.7,15), null);


(lib.copy_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgHAVIgHgFIgGgHQgBgEAAgFIABgIIAGgHQACgDAFgBQAEgCADAAQAEAAAEACQAFABACADQAEADACAEIABAIQAAAFgBAEQgCAEgEADQgCADgFACQgEABgEAAQgDAAgEgBg");
	this.shape.setTransform(351.45,23.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgcA6QgMgEgJgJIAWgYQAFAGAHADQAGAEAHAAQAGAAAFgCQAFgCAAgFQAAgEgFgCQgEgDgGgBIgOgEQgIgBgHgEQgHgEgEgFQgFgHAAgLQAAgKAFgIQADgHAIgFQAGgFAJgCQAJgCAIAAQALAAAMADQAMADAIAJIgWAWQgIgKgMAAQgEAAgEACQgFACAAAGQAAAEAFACIAKAEIAPADQAHACAHAEQAHADAEAGQAFAHAAALQAAALgFAHQgFAIgHAEQgJAFgJABQgKACgIAAQgMAAgNgDg");
	this.shape_1.setTransform(342.35,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AA3A8IAAhDQABgIgEgGQgDgGgJAAQgGAAgFACQgEACgCAEQgDADgBAFIgBAKIAAA9IgjAAIAAg9IgBgIIgBgIQgBgEgEgDQgDgDgGAAQgHAAgFACQgEADgCAEQgCAEgBAGIAAAKIAAA6IgkAAIAAh0IAiAAIAAAQIABAAIAEgHIAHgGIAKgEQAGgCAHAAQAMAAAJAFQAIAFAGALQAGgLAIgFQAKgFANAAQALAAAIAEQAIAEAFAHQAEAHACAJQACAJAAALIAABEg");
	this.shape_2.setTransform(326.4,20.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgoA8IAAh0IAkAAIAAATQAFgLAIgFQAIgGAMAAIAGAAIAGABIAAAhIgIgBIgHgBQgLAAgGADQgGADgDAFQgDAFgBAHIAAAPIAAAxg");
	this.shape_3.setTransform(311.6,20.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgIALgNAGQgOAGgOAAQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_4.setTransform(299.325,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgiBVQgPgDgNgKIAUgeQAJAHAJAEQAJAEALAAQAQAAAIgIQAHgIAAgNIAAgLIAAAAQgGAIgKAEQgJAEgHAAQgNAAgLgFQgKgFgIgHQgHgJgEgJQgEgMAAgNQAAgMADgLQAEgKAHgJQAHgIAKgFQAJgGANAAQAIABAFABIALAFIAJAFIAGAHIAAAAIAAgQIAhAAIAABqQAAAhgQASQgRAQghABQgQgBgPgDgAgJg1QgFACgEAEIgGAJQgCAFAAAGQAAAGACAFIAGAJQAEAEAFADQAFABAFAAQAGAAAGgBQAFgDAEgEIAGgJQACgFAAgGQAAgGgCgFIgGgJQgEgEgFgCQgGgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(284.525,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgiA3QgJgEgEgHQgFgIgCgKQgBgKAAgMIAAg/IAkAAIAAA5IAAAKIACAKQACAEAEADQADADAIAAQAFAAAFgDQAEgCACgEIADgKIABgKIAAg6IAkAAIAAB0IgiAAIAAgQIgBAAIgFAHIgHAGIgJAEQgFACgHAAQgOAAgIgFg");
	this.shape_6.setTransform(263.4,20.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_7.setTransform(253.4,16.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgKACgIQACgJAFgGQAEgHAIgDQAJgEAPAAIALAAIAKACIgCAfIgFgCIgGgBQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_8.setTransform(246.125,16.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AguBWQgLgDgJgHQgIgGgFgJQgFgKAAgNQAAgHADgIQACgIAFgGQAFgFAHgEIAOgHIgIgJIgGgIIgEgKIgBgLQAAgMAFgHQAEgJAHgFQAIgGAJgCQAKgCAKAAQAKgBAIADQAJADAHAFQAGAFAEAIQAFAIAAALQAAAHgDAGQgCAHgFAGIgKAKIgMAIIAWAWIARgVIApAAIgjAuIAlAoIguAAIgOgQQgLALgMAEQgLAGgPAAQgLgBgLgDgAghARIgGAFIgFAGQgBAEAAAEQAAAFACAEQACAEADADQADACAEACIAIABQAJABAGgEQAGgDAFgGIgdghgAgag3QgFAEAAAIIACAGIADAFIAFAGIAEADIAHgDIAGgFIAEgGQABgEAAgDQAAgHgDgEQgFgFgHAAQgHABgFAEg");
	this.shape_9.setTransform(225.675,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgdBYQgKgFgIgIQgHgIgEgLQgEgLAAgNQAAgMADgLQAEgLAHgIQAHgJAKgFQAJgFANAAQAKAAAKADQAKAEAGAIIAAAAIAAhNIAkAAIAAC0IghAAIAAgPIAAAAIgGAGIgIAGIgKAEQgGACgFAAQgNAAgLgEgAgTAKQgHAIAAANQAAANAHAIQAIAIAMAAQAOAAAIgIQAHgIAAgNQAAgNgHgIQgIgJgOAAQgMAAgIAJg");
	this.shape_10.setTransform(201.125,17.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_11.setTransform(190.85,16.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgYA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAMAEQAMAEAJAIQAJAIAFAMQAFALAAANQAAAOgFALQgFALgJAIQgJAJgMAEQgMAEgNAAQgMAAgMgEgAgUgUQgIAIAAAMQAAANAIAIQAHAIANAAQAOAAAHgIQAIgIAAgNQAAgMgIgIQgHgJgOAAQgNAAgHAJg");
	this.shape_12.setTransform(180.475,20.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgNA5QgMgEgIgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAIgIAMgEQAMgEANAAQAKAAALADQAMAEAIAIIgYAZQgCgEgFgCQgFgDgFAAQgNAAgIAJQgHAIAAAMQAAANAHAIQAIAIANAAQAGAAAEgCIAHgGIAYAYQgIAJgMAEQgLADgKAAQgNAAgMgEg");
	this.shape_13.setTransform(167.825,20.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgKACgIQACgJAFgGQAEgHAIgDQAJgEAPAAIALAAIAKACIgCAfIgFgCIgGgBQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_14.setTransform(150.325,16.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgYA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAMAEQAMAEAJAIQAJAIAFAMQAFALAAANQAAAOgFALQgFALgJAIQgJAJgMAEQgMAEgNAAQgMAAgMgEgAgUgUQgIAIAAAMQAAANAIAIQAHAIANAAQAOAAAHgIQAIgIAAgNQAAgMgIgIQgHgJgOAAQgNAAgHAJg");
	this.shape_15.setTransform(138.375,20.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAAAOIgMARIgNgKIANgRIgUgGIAFgPIAUAIIAAgWIAPAAIAAAWIAUgHIAFAPIgUAFIANASIgNAKg");
	this.shape_16.setTransform(120.225,9.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("Ag5BSIBgitIAUALIhiCsgAAqBUQgJgDgGgHQgGgGgEgJQgEgJAAgKQAAgKAEgJQAEgIAGgGQAGgHAJgCQAJgFAJAAQAKAAAJAFQAJACAGAHQAGAGAEAIQAEAJAAAKQAAAKgEAJQgEAJgGAGQgGAHgJADQgJAEgKAAQgJAAgJgEgAAsAYQgGAHAAAJQAAAKAGAGQAHAIAJAAQAKAAAHgIQAGgGAAgKQAAgJgGgHQgHgHgKAAQgJAAgHAHgAhOADQgIgDgHgGQgGgGgEgJQgEgJAAgKQAAgJAEgJQAEgIAGgHQAHgGAIgEQAJgEAKAAQAKAAAIAEQAJAEAGAGQAHAHADAIQAEAJAAAJQAAAKgEAJQgDAJgHAGQgGAGgJADQgIAEgKAAQgKAAgJgEgAhMg3QgGAGAAAJQAAAKAGAHQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgJgHgGQgHgIgJABQgKgBgHAIg");
	this.shape_17.setTransform(105.575,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AglBXIAng9IgFABIgGAAQgMABgKgFQgJgEgIgHQgHgIgDgJQgFgKAAgMQABgNAFgLQAEgKAJgIQAJgIALgEQAMgFAMABQANgBAMAFQAMAEAIAIQAJAIAFAKQAEALAAANQAAAJgCAHIgDAOIgIANIgHAMIgmA7gAgTgtQgIAIAAALQAAAMAIAHQAIAHALAAQANAAAHgHQAIgHgBgMQABgLgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_18.setTransform(87.65,17.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHAVIgHgFIgGgHQgBgEAAgFIABgIIAGgHQACgDAFgBQAEgCADAAQAEAAAEACQAFABACADQAEADACAEIABAIQAAAFgBAEQgCAEgEADQgCADgFACQgEABgEAAQgDAAgEgBg");
	this.shape_19.setTransform(76.95,23.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AglBXIAng9IgFABIgGAAQgMABgKgFQgJgEgIgHQgHgIgEgJQgDgKAAgMQAAgNAEgLQAGgKAIgIQAJgIALgEQALgFANABQANgBAMAFQAMAEAIAIQAJAIAEAKQAGALAAANQAAAJgCAHIgFAOIgHANIgHAMIgmA7gAgTgtQgIAIABALQgBAMAIAHQAIAHALAAQANAAAHgHQAIgHAAgMQAAgLgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_20.setTransform(66.35,17.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AglBXIAmg9IgEABIgGAAQgMABgKgFQgKgEgGgHQgHgIgFgJQgDgKAAgMQAAgNAEgLQAGgKAIgIQAJgIALgEQAMgFAMABQANgBAMAFQAMAEAIAIQAJAIAEAKQAGALAAANQgBAJgBAHIgFAOIgGANIgIAMIglA7gAgTgtQgHAIAAALQAAAMAHAHQAIAHALAAQAMAAAIgHQAHgHAAgMQAAgLgHgIQgIgHgMAAQgLAAgIAHg");
	this.shape_21.setTransform(52.15,17.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_22.setTransform(34.8,16.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_23.setTransform(28.6,16.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_24.setTransform(22.425,17.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAbBVIhEhRIAABRIglAAIAAipIAlAAIAABGIBBhGIAxAAIhLBPIBRBag");
	this.shape_25.setTransform(11.825,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_03, new cjs.Rectangle(0,0,357.2,36.8), null);


(lib.copy_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AAXBDIAAhAIAAgLQgBgGgCgFQgCgFgEgDQgFgEgIAAQgGAAgFADQgFADgCAFQgDAFgBAFIAAAMIAABBIgpAAIAAiCIAmAAIAAASIABAAIAGgIIAIgGIAKgFQAGgCAIAAQAPAAAJAFQAKAEAFAJQAGAIACALQABAMAAANIAABHg");
	this.shape.setTransform(291.2,54.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgbBAQgOgFgKgJQgJgJgHgNQgFgNAAgPQAAgOAFgOQAHgMAJgJQAKgJAOgFQAMgFAPAAQAPAAAOAFQANAFAJAJQAKAJAGAMQAGAOAAAOQAAAPgGANQgGANgKAJQgJAJgNAFQgOAFgPAAQgPAAgMgFgAgXgXQgJAJAAAOQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgOgIgJQgJgJgPAAQgPAAgIAJg");
	this.shape_1.setTransform(275.15,54.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgfBBQgPgEgJgKIAYgbQAGAHAHADQAHAEAJAAQAGAAAGgCQAGgCgBgFQAAgGgEgCIgMgFIgRgDQgIgDgIgEQgIgDgFgHQgEgHAAgMQgBgMAFgJQAEgIAJgFQAHgGAKgCQAKgDAKAAQANAAANAEQANADAJALIgZAYQgJgLgOAAQgFAAgEACQgGADAAAFQAAAFAGADIALAEIARADQAIADAJAEQAHAFAFAFQAFAIAAAMQAAANgGAJQgFAIgIAEQgJAFgLADQgLACgJAAQgOAAgOgEg");
	this.shape_2.setTransform(260.55,54.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AghBCQgJgDgGgEQgGgFgEgJQgEgHAAgKQAAgLAEgIQAEgIAHgEQAIgFAJgDIATgEIASgCIASAAQAAgLgHgGQgIgGgKAAQgJgBgJAFQgHAEgHAIIgWgXQAMgKAOgGQAPgFAQAAQASAAALAEQALAFAIAJQAGAIADANQADAMAAARIAABCIgmAAIAAgRIAAAAQgHALgLAEQgKAFgNAAQgIAAgJgDgAAEAIIgMADQgHACgEADQgFAEABAHQgBAHAHAEQAGADAHAAQAFAAAFgBQAGgCAEgDQAEgDADgFQADgEgBgHIAAgIIgKAAg");
	this.shape_3.setTransform(246.85,54.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgNAAgPQAAgOAFgOQAGgMAKgJQAKgJANgFQANgFAOAAQAOAAAMAFQALAFAIAJQAIAJAFAMQAEAOAAAOIAAANIhdAAQACALAJAHQAIAHAKAAQAKAAAHgFQAHgEAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgHQgHgIgLAAQgGAAgFACQgFACgEAEQgEADgCAFQgCAEAAAFIA1AAIAAAAg");
	this.shape_4.setTransform(231.975,54.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AggBBQgOgEgJgKIAZgbQAFAHAHADQAHAEAJAAQAGAAAGgCQAFgCABgFQAAgGgGgCIgLgFIgQgDQgKgDgHgEQgIgDgEgHQgGgHAAgMQABgMAEgJQAFgIAHgFQAIgGAKgCQAKgDAJAAQANAAANAEQAOADAJALIgZAYQgJgLgPAAQgDAAgGACQgEADAAAFQAAAFAEADIANAEIAQADQAJADAHAEQAIAFAFAFQAFAIAAAMQAAANgFAJQgGAIgJAEQgJAFgKADQgLACgJAAQgOAAgPgEg");
	this.shape_5.setTransform(217.85,54.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgnA+QgJgEgGgJQgEgIgCgMQgCgLAAgNIAAhHIAoAAIAABAIAAALQABAGACAFQACAFAEADQAFADAHAAQAHAAAFgCQAFgDADgFQACgFABgGIABgLIAAhBIAoAAIAACCIgnAAIAAgSIAAAAIgGAHIgIAHIgKAFQgHACgGAAQgQAAgKgFg");
	this.shape_6.setTransform(195.75,54.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgTBmIAAjLIAnAAIAADLg");
	this.shape_7.setTransform(184.425,50.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgXBoIAAhjIgbAAIAAgfIAbAAIAAgYQAAgKACgKQACgKAFgHQAFgHAJgEQAKgFARAAIANABIALACIgCAiIgGgCIgHgBQgKAAgFAFQgEAEAAANIAAAVIAdAAIAAAfIgdAAIAABjg");
	this.shape_8.setTransform(176.1,50.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("Ag0BhQgNgDgJgIQgKgHgGgLQgFgLAAgOQAAgJADgIQADgIAFgIQAGgGAIgEQAHgFAIgDIgIgJIgHgKIgEgLQgCgGAAgHQAAgNAFgJQAFgJAIgGQAJgGALgDQAKgDAMABQALAAAJACQAKADAIAGQAHAFAFAKQAEAIABAMQAAAJgEAIQgCAGgFAHQgFAGgGAGIgOAIIAZAaIATgZIAvAAIgpA1IArAtIg1AAIgPgSQgMAMgNAFQgNAGgSgBQgNABgLgEgAgmATIgHAGIgEAHQgCAEAAAFQAAAGACAEQACAFAEACIAHAFQAGACAEAAQAKAAAGgEQAIgFAFgFIghglgAgeg+QgFAFAAAHIACAHIADAHIAGAGIAFAEIAHgDIAHgGIAFgHQACgEAAgEQgBgIgEgEQgGgFgHAAQgJAAgFAFg");
	this.shape_9.setTransform(153,51.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AggBjQgMgFgJgKQgIgJgFgMQgEgMAAgPQAAgOAEgNQAEgLAIgKQAHgKAMgFQALgGAOAAQALAAALAEQALAEAHAJIABAAIAAhXIAoAAIAADLIglAAIAAgRIgBAAIgGAHIgJAHIgMAFQgGACgGAAQgOAAgMgFgAgVALQgJAJAAAPQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgPgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_10.setTransform(125.175,50.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgTBmIAAjLIAnAAIAADLg");
	this.shape_11.setTransform(113.525,50.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgcBAQgNgFgKgJQgJgJgHgNQgFgNAAgPQAAgOAFgOQAHgMAJgJQAKgJANgFQANgFAPAAQAPAAAOAFQAMAFAKAJQALAJAFAMQAGAOAAAOQAAAPgGANQgFANgLAJQgKAJgMAFQgOAFgPAAQgPAAgNgFgAgXgXQgIAJAAAOQAAAOAIAKQAJAJAOAAQAPAAAJgJQAIgKAAgOQAAgOgIgJQgJgJgPAAQgOAAgJAJg");
	this.shape_12.setTransform(101.7,54.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgPBAQgNgFgKgJQgKgJgFgNQgGgNAAgPQAAgOAGgOQAFgMAKgJQAKgJANgFQAOgFAOAAQAMAAAMAEQANAEAKAKIgbAcQgDgFgFgDQgGgCgGAAQgOAAgJAJQgIAJAAAOQAAAOAIAKQAJAJAOAAQAHAAAFgDIAIgHIAbAcQgKAKgNAEQgMAEgMAAQgOAAgOgFg");
	this.shape_13.setTransform(87.375,54.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgfBBQgPgEgJgKIAZgbQAFAHAHADQAHAEAJAAQAGAAAGgCQAFgCAAgFQABgGgGgCIgLgFIgRgDQgIgDgIgEQgIgDgEgHQgFgHgBgMQAAgMAFgJQAFgIAHgFQAIgGAKgCQAKgDAKAAQAMAAANAEQAOADAJALIgZAYQgJgLgOAAQgEAAgGACQgEADAAAFQAAAFAEADIANAEIAQADQAJADAIAEQAHAFAFAFQAFAIAAAMQAAANgFAJQgGAIgJAEQgJAFgKADQgLACgJAAQgOAAgOgEg");
	this.shape_14.setTransform(65.95,54.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgTBiIAAiCIAnAAIAACCgAgPg5QgIgHAAgKQAAgJAIgHQAHgHAIAAQAKAAAHAHQAGAHAAAJQAAAKgGAHQgHAHgKAAQgIAAgHgHg");
	this.shape_15.setTransform(56.1,51.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAXBmIAAhAIAAgMQgBgGgCgGQgCgEgEgDQgFgEgIAAQgGAAgFADQgFADgDAEQgCAGgBAFIAAANIAABBIgpAAIAAjLIApAAIAABbIAAAAQABgEADgEIAIgHQAFgCAFgDQAGgCAIAAQAPAAAKAGQAJAEAFAIQAFAJACAKQACAMAAAMIAABJg");
	this.shape_16.setTransform(44.8,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AAEBUQgIgCgGgFQgGgEgFgIQgDgHAAgLIAAg+IgaAAIAAggIAaAAIAAgnIAnAAIAAAnIAkAAIAAAgIgkAAIAAArIABAKQABAFACADQABADAEACQAEACAHAAIAIgBQAFgBADgCIAAAhQgHADgHABIgOABQgLAAgIgDg");
	this.shape_17.setTransform(31.25,52.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AggBBQgOgEgJgKIAYgbQAGAHAHAEQAHADAJAAQAGAAAGgCQAGgCAAgGQgBgEgFgDIgLgEIgQgEQgKgCgHgEQgIgFgEgGQgGgIAAgMQABgLAEgJQAEgIAJgFQAHgGAKgCQAKgDAJAAQANAAANAEQAOAEAJAJIgZAZQgJgLgPAAQgEAAgFACQgEADAAAFQAAAFAEADIANAEIAQAEQAIACAIAEQAIAEAFAHQAFAHAAANQAAAMgFAIQgGAIgJAGQgJAEgKACQgLADgKAAQgNAAgPgEg");
	this.shape_18.setTransform(310.9,23.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_19.setTransform(296.875,23.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AAXBDIAAhAIAAgLQgBgGgCgFQgCgFgEgDQgFgEgIAAQgGAAgFADQgFADgDAFQgCAFgBAFIAAAMIAABBIgpAAIAAiCIAmAAIAAASIABAAIAFgIIAJgGIAKgFQAGgCAIAAQAPAAAJAFQAKAEAFAJQAGAIACALQABAMAAANIAABHg");
	this.shape_20.setTransform(281.3,23.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgbBAQgOgFgKgJQgJgJgHgNQgFgMAAgQQAAgPAFgMQAHgNAJgKQAKgIAOgFQANgFAOAAQAPAAAOAFQANAFAJAIQAKAKAGANQAGAMAAAPQAAAQgGAMQgGANgKAJQgJAJgNAFQgOAFgPAAQgOAAgNgFgAgXgXQgJAJAAAOQAAAPAJAJQAIAJAPAAQAPAAAJgJQAIgJAAgPQAAgOgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_21.setTransform(265.25,23.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AggBjQgMgFgJgKQgIgJgFgMQgEgMAAgPQAAgOAEgNQAEgLAIgKQAHgKAMgFQALgGAOAAQALAAALAEQALAEAHAJIABAAIAAhXIAoAAIAADLIglAAIAAgRIgBAAIgGAHIgJAHIgMAFQgGACgGAAQgOAAgMgFgAgVALQgJAJAAAPQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgPgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_22.setTransform(239.925,19.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_23.setTransform(224.075,23.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgTBBIg3iBIAsAAIAhBYIAAAAIAfhYIApAAIg0CBg");
	this.shape_24.setTransform(208.7,23.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgbBAQgOgFgKgJQgJgJgHgNQgFgMAAgQQAAgPAFgMQAHgNAJgKQAKgIAOgFQANgFAOAAQAPAAAOAFQANAFAKAIQAJAKAGANQAGAMAAAPQAAAQgGAMQgGANgJAJQgKAJgNAFQgOAFgPAAQgOAAgNgFgAgXgXQgJAJAAAOQAAAPAJAJQAIAJAPAAQAPAAAJgJQAIgJAAgPQAAgOgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_25.setTransform(192.9,23.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgTBmIAAjLIAnAAIAADLg");
	this.shape_26.setTransform(181.075,19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgtBDIAAiCIApAAIAAAVIAAAAQAGgMAIgGQAJgGAOAAIAHAAIAGABIAAAlIgJgCIgIgBQgLAAgIAEQgGADgEAGQgCAGgBAIIgBAQIAAA3g");
	this.shape_27.setTransform(164.5,23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgnA+QgJgEgGgJQgEgIgCgMQgCgLAAgNIAAhHIApAAIAABAIAAALQAAAGACAFQACAFAFADQAEADAHAAQAHAAAFgCQAFgDACgFQADgFABgGIABgLIAAhBIAoAAIAACCIgnAAIAAgSIAAAAIgGAHIgIAHIgKAFQgHACgGAAQgQAAgKgFg");
	this.shape_28.setTransform(150.65,23.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgbBAQgOgFgKgJQgKgJgFgNQgGgMAAgQQAAgPAGgMQAFgNAKgKQAKgIAOgFQAMgFAPAAQAPAAANAFQANAFALAIQAKAKAFANQAGAMAAAPQAAAQgGAMQgFANgKAJQgLAJgNAFQgNAFgPAAQgPAAgMgFgAgXgXQgJAJAAAOQAAAPAJAJQAIAJAPAAQAPAAAJgJQAIgJAAgPQAAgOgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_29.setTransform(134.6,23.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AhGBdIAFghQAJAEAKgBIALgBQAFgBACgDIAFgHIAEgJIADgIIg5iDIArAAIAhBXIABAAIAchXIAqAAIg7CXIgIATQgEAIgFAGQgGAFgJADQgIADgPAAQgQAAgOgFg");
	this.shape_30.setTransform(118.775,26.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAEBUQgIgCgGgFQgGgEgFgIQgDgHAAgLIAAg+IgaAAIAAggIAaAAIAAgnIAnAAIAAAnIAkAAIAAAgIgkAAIAAArIABAKQABAFACADQABADAEACQAEACAHAAIAIgBQAFgBADgCIAAAhQgHADgHABIgOABQgLAAgIgDg");
	this.shape_31.setTransform(97.4,21.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgPBAQgNgFgKgJQgKgJgFgNQgGgMAAgQQAAgPAGgMQAFgNAKgKQAKgIANgFQAOgFAOAAQAMAAAMAEQANAEAKAJIgbAcQgDgDgFgDQgGgEgGAAQgOAAgJAKQgIAJAAAOQAAAPAIAJQAJAJAOAAQAHAAAFgDIAIgHIAbAcQgKAKgNAEQgMAEgMAAQgOAAgOgFg");
	this.shape_32.setTransform(86.075,23.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_33.setTransform(71.275,23.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AAEBUQgIgCgGgFQgGgEgFgIQgDgHAAgLIAAg+IgaAAIAAggIAaAAIAAgnIAnAAIAAAnIAkAAIAAAgIgkAAIAAArIABAKQABAFACADQACADADACQAEACAHAAIAIgBQAFgBADgCIAAAhQgHADgHABIgOABQgLAAgIgDg");
	this.shape_34.setTransform(57.7,21.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgbBAQgOgFgKgJQgKgJgFgNQgGgMAAgQQAAgPAGgMQAFgNAKgKQAKgIAOgFQAMgFAPAAQAPAAANAFQANAFALAIQAKAKAFANQAGAMAAAPQAAAQgGAMQgFANgKAJQgLAJgNAFQgNAFgPAAQgPAAgMgFgAgXgXQgJAJAAAOQAAAPAJAJQAIAJAPAAQAPAAAJgJQAIgJAAgPQAAgOgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_35.setTransform(44.15,23.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgtBDIAAiCIAoAAIAAAVIABAAQAFgMAKgGQAIgGANAAIAHAAIAHABIAAAlIgJgCIgIgBQgLAAgHAEQgHADgEAGQgDAGgBAIIgBAQIAAA3g");
	this.shape_36.setTransform(30.9,23.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AhHBfIAAi+IBHAAQAOABANACQANADAKAGQAKAHAGALQAGALAAASQAAAQgGAMQgFAKgJAHQgKAGgNADQgNADgPAAIgeAAIAABKgAgdgOIAcAAIAKgBQAGgBAEgCQAEgDADgEQACgFAAgGQAAgIgDgFQgEgEgFgCQgFgCgHgCIgLAAIgWAAg");
	this.shape_37.setTransform(16.875,20.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_02, new cjs.Rectangle(5.7,1,313.7,71.8), null);


(lib.copy_01c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgXAjIABgLIADABIADAAIADAAIADgCIACgBIACgEIACgFIgUgwIAMAAIANAhIAMghIAMAAIgWA6IgDAGIgDADQgBACgDABIgHABIgJgBg");
	this.shape.setTransform(204.3,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_1.setTransform(198.325,8.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgMAXIgFgEIgDgGIgBgHIAAgeIAMAAIAAAYIAAAEIABAFIADADQACACADAAIAEgBIADgDIACgEIABgEIAAgaIAMAAIAAAvIgMAAIAAgHQgBADgEADQgDACgFAAQgFAAgEgBg");
	this.shape_2.setTransform(192.375,9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_3.setTransform(187.425,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_4.setTransform(183.275,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape_5.setTransform(176.6,8.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgJAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAGAAAEACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgEABgGAAQgFAAgEgBgAgFgMIgFADIgCAFIgBAEIABAGIACAEIAFADQADABACABQADgBADgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDQgDgBgDAAQgCAAgDABg");
	this.shape_6.setTransform(172.15,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_7.setTransform(167.025,8.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_8.setTransform(162.875,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgCgDAAgDQAAgCACgDQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(159.25,8.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_10.setTransform(156.225,9.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgZAjIAAhGIAbAAIAIACQADABADACQAEACACAEQABADAAAEQAAAGgDAFQgDAEgGABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgEAAIgKABgAgNAYIAMAAIAEAAIAGgBIADgDQACgCgBgEQAAgFgDgDQgDgBgIAAIgMAAgAgNgFIAMAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgCgGAAIgLAAg");
	this.shape_11.setTransform(150.85,8.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgHAmIAAgmIgKAAIAAgJIAKAAIAAgHIABgJQABgDACgEQACgCACgCQAEgBAFAAIAIABIgBAKIgCgBIgDAAIgEABIgCACIgBADIgBAEIAAAIIALAAIAAAJIgLAAIAAAmg");
	this.shape_12.setTransform(142.675,8.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgJAYQgFgDgDgDQgEgDgCgFQgCgFAAgFQAAgFACgEQACgFAEgEQADgCAFgCQAFgCAEAAQAFAAAFACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgFABgFAAQgEAAgFgBgAgFgMIgEADIgDAFIgBAEIABAGIADAEIAEADQACABADABQAEgBACgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDQgCgBgEAAQgDAAgCABg");
	this.shape_13.setTransform(137.65,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgYAjIACgLIADABIADAAIADAAIADgCIACgBIACgEIACgFIgUgwIAMAAIANAhIAMghIANAAIgXA6IgDAGIgDADQgCACgCABIgIABIgJgBg");
	this.shape_14.setTransform(128.9,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_15.setTransform(124.225,8.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgEgWQgCgDAAgDQAAgCACgDQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_16.setTransform(120.95,8.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_17.setTransform(117.375,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_18.setTransform(113.425,9.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_19.setTransform(108.275,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgFAYIgUgvIAOAAIALAgIAAAAIAOggIALAAIgSAvg");
	this.shape_20.setTransform(102.75,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgBgDAAgDQAAgCABgDQACgCADAAQADAAACACQACACABADQgBAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_21.setTransform(98.75,8.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_22.setTransform(94.525,9.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgKAiQgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgsIAMAAIAAAsIABAFIACAGIAGAEQADABADAAQAFAAADgBIAEgEQACgDABgDIABgFIAAgsIANAAIAAAsQAAAHgCAFIgGAJQgFADgFACQgFACgGABQgFgBgFgCg");
	this.shape_23.setTransform(87.95,8.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgNAkIAQgaIAAAAIgDAAIgDABQgFAAgEgCQgEgCgCgDQgDgDgCgDQgBgEAAgFQAAgFACgFQABgEAEgDIAIgGQAEgBAFAAQAFAAAFABQAFACADAEQADADACAEQACAFAAAFQAAAFgCAGIgFAIIgSAcgAgEgXIgFADIgCAEIgBAGIABAEIACAFIAFABIAEABIAFgBIAEgBIACgFIABgEIgBgGIgCgEIgEgDIgFgBIgEABg");
	this.shape_24.setTransform(78.275,8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAEAjIAAg4IgMANIgHgJIAUgSIALAAIAABGg");
	this.shape_25.setTransform(71.575,8.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AAAAkIgEAAIgFgCQgDAAgCgDQgEgDgCgEQgCgEgBgGQgCgFABgJQgBgIACgFQABgGACgEQACgEAEgDIAFgDIAFgCIAEgBIAEABIAGACIAGADIAFAHIADAKIABANIgBAOIgDAKIgFAHIgGADIgGACgAgGgVQgDADgBADIgCAJIgBAGIABAIIACAIQABAEADADQADACADAAQAEAAADgCQADgDACgEIABgIIAAgIIAAgGIgBgJIgFgGQgDgDgEAAQgDAAgDADg");
	this.shape_26.setTransform(66.25,8.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgXAkIAAgNIAbgaIACgCIACgCIACgEIABgEIgBgDIgCgDIgDgCIgEgBQgEABgDACQgDACAAAFIgNgBIACgJQACgDAEgDQADgCAEgCQAEgBAEAAIAJABIAHAEIAFAGQACAEAAAFQAAAHgEAEIgHAJIgVAUIAgAAIAAALg");
	this.shape_27.setTransform(60.275,8.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgKAZIgGgDQgCgCgBgDQgCgDAAgDQAAgEACgDIADgEIAGgCIAGgCIAGAAIAHgBIACAAIAAgBQABgEgEgDQgDgCgFAAIgGABIgFAEIgHgHQAEgDAFgCQAGgCAEAAIAJABIAGADQADABAAADIACAFIABAEIAAAFIAAAaIgLAAIAAgHIAAAAQgCAEgEADQgFABgDAAIgHAAgAgCAEIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACACIADABIADAAQAEAAAEgCQACgEAAgFIAAgDIgCAAIgGAAIgEACg");
	this.shape_28.setTransform(51.35,9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_29.setTransform(42.825,9.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgJAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAFACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgFABgFAAQgFAAgEgBgAgFgMIgFADIgCAFIgBAEIABAGIACAEIAFADQACABADABQADgBADgBIAFgDIACgEIABgGIgBgEIgCgFIgFgDQgDgBgDAAQgDAAgCABg");
	this.shape_30.setTransform(36.8,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_31.setTransform(27.325,8.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_32.setTransform(21.375,9.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_33.setTransform(16.225,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgKAZIgGgDQgCgCgBgDQgCgDAAgDQAAgEACgDIADgEIAGgCIAGgCIAGAAIAHgBIACAAIAAgBQAAgEgDgDQgDgCgEAAIgHABIgGAEIgGgHQAEgDAGgCQAFgCAEAAIAJABIAGADQACABACADIABAFIABAEIAAAFIAAAaIgLAAIAAgHIAAAAQgDAEgEADQgDABgFAAIgGAAgAgDAEIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACACIACABIAEAAQAEAAAEgCQACgEAAgFIAAgDIgCAAIgGAAIgFACg");
	this.shape_34.setTransform(11.1,9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgZAjIAAhGIAbAAIAIACQADABADACQAEACACAEQABADAAAEQAAAGgDAFQgDAEgGABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgEAAIgKABgAgNAYIAMAAIAFAAIAEgBIAEgDQABgCAAgEQAAgFgDgDQgDgBgIAAIgMAAgAgNgFIAMAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgCgGAAIgLAAg");
	this.shape_35.setTransform(5.4,8.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01c, new cjs.Rectangle(0,0,209.2,17.7), null);


(lib.copy_01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("Ag/BqIAAjTIAmAAIAACxIBZAAIAAAig");
	this.shape.setTransform(173.025,21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("ABBBqIgUgwIhbAAIgTAwIgqAAIBcjTIAgAAIBbDTgAAgAZIgghVIghBVIBBAAg");
	this.shape_1.setTransform(153.425,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AghBnQgQgGgLgKQgMgMgGgPQgHgPAAgTIAAiGIAmAAIAACFQAAAHADAJQACAIAGAHQAFAIAJAEQAKAFAMAAQAOAAAIgFQAJgEAGgIQAFgHADgIQADgJgBgHIAAiFIAmAAIAACGQAAATgGAPQgHAPgLAMQgLAKgQAGQgQAGgSAAQgRAAgQgGg");
	this.shape_2.setTransform(131.8,21.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgDBtQgYAAgWgIQgVgHgPgOQgQgPgJgUQgIgVAAgYQAAgYAIgUQAJgUAQgOQAOgOAVgIQAUgIAXAAQAVAAAVAIQAUAIAQAOQAPAOAJAUQAIAUABAYQAAAPgFANQgEAMgGALQgHAJgIAGIgPAMIAAABIA8AAIAAAegAglhEQgMAFgKAKQgKALgEANQgGANAAAQQAAAQAGANQAEAOALALQAJAKANAFQANAGAPAAQAPAAANgGQAOgFAJgKQAKgLAGgOQAFgNAAgQQAAgQgFgNQgGgNgKgLQgJgKgOgFQgNgGgPABQgPgBgOAGg");
	this.shape_3.setTransform(108.6,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_4.setTransform(86.775,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_5.setTransform(56.325,21.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("ABBBqIgUgwIhbAAIgTAwIgqAAIBcjTIAgAAIBbDTgAAgAZIgghVIghBVIBBAAg");
	this.shape_6.setTransform(33.575,21.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgcBoQgVgIgOgPQgPgOgJgVQgIgUAAgZQAAgZAIgUQAJgVAPgPQAOgPAVgIQAVgIAXAAQAWAAASAIQATAIAQASIgeAWQgLgNgLgEQgLgEgLAAQgRAAgMAGQgOAFgJALQgKAKgFAOQgFAOAAAQQAAAQAFAOQAFAOAKALQAJAKAOAGQAMAGARAAQAMAAANgGQAMgGAKgNIAgAWQgPAUgVAJQgUAJgYAAQgXAAgVgIg");
	this.shape_7.setTransform(13.025,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01a, new cjs.Rectangle(0,0,182,45), null);


(lib.copy_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape.setTransform(134.275,21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AhQBqIAAgiIBwiPIhuAAIAAgiICdAAIAAAiIhxCPIBzAAIAAAig");
	this.shape_1.setTransform(115.475,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_2.setTransform(97.675,21.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_3.setTransform(79.375,21.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_4.setTransform(57.775,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgpBpQgSgHgOgPIAdgcQAHALALAGQALAFANAAIAMgBQAHgCAFgEQAGgDADgGQADgFAAgIQAAgLgHgHQgIgGgLgEIgXgJQgNgDgLgHQgMgGgHgLQgHgMAAgSQAAgRAGgMQAHgMALgIQALgIAOgEQAOgEAOAAQARAAAPAGQAQAFANALIgcAdQgGgIgKgEQgKgEgLAAIgMABQgGACgFADQgFADgDAGQgDAFAAAHQAAALAIAGQAHAFALAEIAXAJQAOADALAHQALAGAHAMQAIALAAATQAAARgGANQgHAMgKAJQgLAIgOAEQgOAFgPAAQgUAAgSgHg");
	this.shape_5.setTransform(36.925,21.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AAMBqIAAiqIgmAlIgWgZIBAg1IAgAAIAADTg");
	this.shape_6.setTransform(8.85,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01, new cjs.Rectangle(0,0,145,45), null);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#044F04").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.btn_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAkIgRgwIgPAwIgSAAIgZhHIATAAIAQAyIAAAAIAPgyIASAAIAQAyIAAAAIAPgyIASAAIgYBHg");
	this.shape.setTransform(87.025,20.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgFgFQgFgFgDgGQgDgIAAgIQAAgHADgIQADgHAFgFQAFgEAIgDQAHgDAHAAQAIAAAHADQAIADAFAEQAFAFADAHQADAIAAAHQAAAIgDAIQgDAGgFAFQgFAFgIADQgHADgIAAQgHAAgHgDgAgIgTIgHAFIgEAHIgBAHIABAIIAEAHIAHAFQAEACAEAAQAFAAAEgCIAHgFIAEgHIABgIIgBgHIgEgHIgHgFQgEgCgFABQgEgBgEACg");
	this.shape_1.setTransform(76.475,20.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA1Ig0hRIAABRIgTAAIAAhpIAZAAIAzBNIAAhNIATAAIAABpg");
	this.shape_2.setTransform(65.975,19.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA0IADgQIAEABIAFABIAFgBIAEgCIACgDIADgFIADgJIgfhHIAUAAIAUAyIASgyIATAAIgiBXIgFAJIgEAGQgDACgFABQgEACgGAAQgHAAgHgCg");
	this.shape_3.setTransform(51.75,22.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAiQgFgCgDgEQgDgEgBgFQgCgFAAgGIAAgsIASAAIAAAkIABAGIABAHQACADACACQADACAEABQAEAAADgCIAFgEIADgGIABgGIAAgnIASAAIAABHIgRAAIAAgLIgBAAQgCAFgGAEQgFAEgHAAQgIAAgFgDg");
	this.shape_4.setTransform(43.55,20.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIAoAAIAMABQAGABAEAEQAFADADAFQADAGAAAGQAAAKgGAGQgFAFgIADQAFABAEABQAFACADAEQADADABAEQACAFAAAFQAAAIgDAGQgEAGgFADQgGAEgHABIgOACgAgTAlIARAAIAHgBIAHgCQAEgBACgDQACgDAAgGQAAgIgFgEQgGgDgKAAIgSAAgAgTgJIARAAQAIAAAFgDQAFgFAAgFQAAgIgFgCQgFgEgKAAIgPAAg");
	this.shape_5.setTransform(34.675,19.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DA3F55").s().p("AphDNIAAmZITDAAIAAGZg");
	this.shape_6.setTransform(61,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cta, new cjs.Rectangle(0,0,122,41), null);


(lib.bg_lightblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E6F4").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_lightblue, new cjs.Rectangle(0,0,728,90), null);


(lib.bg_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AvnHCIAAuDIfPAAIAAODg");
	this.shape.setTransform(100,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(0,0,200,90), null);


(lib.spray_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray("synched",0);
	this.instance.setTransform(12.1,44,0.1793,0.1594,0,0,0,12,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,regY:44,scaleX:1,scaleY:1},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,88.1);


(lib.numbers_scrolling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhiCmIAAlLIDFAAIAAFLg");
	mask.setTransform(12.475,24.975);

	// Layer_1
	this.instance = new lib.numbers();
	this.instance.setTransform(12.5,-113.1,1,1,0,0,0,12.5,264.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:195.9},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,8.4,18.9,33.2);


(lib.hand_spray_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_spray_png
	this.instance = new lib.hand_spray();
	this.instance.setTransform(30,16,0.7402,0.7402);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:true},1).wait(6).to({_off:false},0).wait(22).to({_off:true},1).wait(15));

	// spray_01_png
	this.instance_1 = new lib.spray_anim("synched",0);
	this.instance_1.setTransform(127.05,31.2,0.7402,0.2537,0,0,0,72.8,44.1);
	this.instance_1.alpha = 0.5781;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(22).to({startPosition:2},0).to({_off:true},1).wait(15));

	// spray_01_png
	this.instance_2 = new lib.spray_anim("synched",0);
	this.instance_2.setTransform(130,31.2,0.7797,0.9605,0,0,0,72.9,44);
	this.instance_2.alpha = 0.5781;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(29).to({startPosition:2},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(22).to({startPosition:1},0).to({_off:true},1).wait(15));

	// spray_01_png
	this.instance_3 = new lib.spray_anim("synched",0);
	this.instance_3.setTransform(127.05,31.15,0.7402,0.7402,0,0,0,72.8,44);
	this.instance_3.alpha = 0.5781;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(27).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(22).to({startPosition:2},0).to({_off:true},1).wait(15));

	// spray_01_png
	this.instance_4 = new lib.spray_anim("synched",0);
	this.instance_4.setTransform(127.05,31.15,0.7402,0.7402,0,0,0,72.8,44);
	this.instance_4.alpha = 0.5781;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(22).to({startPosition:2},0).to({_off:true},1).wait(15));

	// Layer_8
	this.instance_5 = new lib.spray_mist("synched",0);
	this.instance_5.setTransform(144.5,35.4,0.3899,0.3899,0,0,0,150.1,150.1);
	this.instance_5.alpha = 0.3398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(27).to({startPosition:1},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(22).to({startPosition:0},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,-12.9,158.1,156.20000000000002);


(lib.germs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AVwJoIgNgFQgIgDgEgDQgEgDADgLIgNgZQgKgTANAIQANAIAHgDQAGgDgJgUQgJgUAKgEQAJgEAJAFQAFACABAQQAIgKAHAFQAKAJADAIQAGANgGAAIgGgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAJAKIAMALQADAHgBAGQgBAGgFADQgFADgGgCIgEgBIgDgBQgGgGgCABQgCABAAAFIABAIQAAAFgBABIgHADIgCAAIgGgBg");
	var mask_graphics_19 = new cjs.Graphics().p("AVMKBIgdgGQgRgEgIgFQgJgFAKgYQgIgMgRgjQgRgjAcAMQAcAMAQgIQAQgIgQgmQgQgmAXgKQAXgJAUAGQAJAEgBAfQAXgVAMAIQAXAPAFAPQAJAZgOACIgMAAQgGAAgBACQAAABAUAQQAWARACAEQAHAMgEANQgEANgNAHQgMAIgOgDIgKgCIgGgBQgNgJgFACQgEACAAAJIAAARQgBAKgEACQgLAHgGABIgIABIgKgBg");
	var mask_graphics_20 = new cjs.Graphics().p("AUoKaIgsgIQgagFgNgHQgNgHAQglQgLgQgYg0QgZg0ArARQArAQAZgMQAZgMgWg5QgXg4AkgPQAkgQAfAJQAOAEgDAvQAjghAUAMQAiAWAIAWQAMAlgWADIgSABQgKAAgBADQAAABAeAXQAgAYAEAGQAKARgIAUQgHAUgTAMQgUALgVgEIgPgCIgJgBQgUgNgIADQgGADgBAOIgBAZQgCAPgGAEQgSAKgJADQgHACgIAAIgOgBg");
	var mask_graphics_21 = new cjs.Graphics().p("AUGKyIg8gKQgjgGgRgJQgSgJAWgwQgNgWgghEQgghEA5AVQA6AVAigRQAigRgdhJQgehKAxgWQAxgWAqAMQASAFgFA+QAxgsAaAQQAuAbAKAdQAQAwgfAGIgYABQgNAAgBAEQgBACAoAeQArAfAFAIQANAWgKAbQgKAagbAQQgbAPgcgFIgUgCIgNgBQgagRgLAFQgIAEgCASIgCAiQgCATgJAFQgZAPgMADQgKADgMAAIgQgBg");
	var mask_graphics_22 = new cjs.Graphics().p("ATjLKIhKgMQgsgGgWgLQgWgLAdg8QgRgcgnhTQgohVBIAaQBIAZArgVQArgWgkhbQgjhbA9gbQA+gcA0AOQAXAGgHBNQA+g3AgATQA6AhALAkQAUA8gmAHIgfACQgQAAgCAFQgBACAzAlQA1AmAGAKQAPAbgNAhQgMAhgiAUQgiATgjgFIgagCIgQgDQgggUgOAHQgLAEgCAXIgDAqQgDAYgLAHQgfARgQAFQgNAEgPAAQgJAAgLgBg");
	var mask_graphics_23 = new cjs.Graphics().p("ATCLhIhagNQg0gHgagNQgbgNAjhIQgUggguhkQgvhkBWAeQBWAdA0gZQAzgagqhsQgqhsBKghQBKgiBAAQQAbAHgJBcQBKhCAnAWQBFAnANArQAXBHgtAJQgHABgeABQgTAAgDAHQgBACA8ArQBAAtAHAMQASAggPAoQgQAogoAXQgpAXgqgGIgfgCQgSgCgCgBQgmgXgRAHQgMAGgEAbIgEAyQgDAcgOAIQglAWgTAGQgQAFgSAAQgLAAgMgCg");
	var mask_graphics_24 = new cjs.Graphics().p("ASgL4IhogOQg8gJgfgOQgfgPAqhUQgYglg1hzQg2hzBlAiQBjAhA8geQA9gegxh9Qgwh9BWgmQBXgnBJASQAgAIgLBqQBXhNAtAaQBPAtAQAxQAaBSg1ALQgIABgiABQgXABgDAHQgBADBFAxQBKA0AIAOQAWAlgTAuQgSAugvAbQgwAcgxgHIgkgDQgUgCgCgBQgtgbgTAJQgPAGgEAgIgFA6QgEAhgQAJQgsAZgWAHQgTAGgWAAQgMAAgOgCg");
	var mask_graphics_25 = new cjs.Graphics().p("ASAMPIh3gQQhEgKgjgQQgjgRAvhfQgagpg9iDQg8iCByAmQBxAlBFgiQBEgig2iNQg3iOBjgsQBigsBTAVQAlAJgNB3QBjhXAzAcQBbAzARA4QAeBdg9AMQgJACgnABQgaABgDAIQgCADBPA4QBUA6AJAQQAYAqgVA0QgVA0g2AfQg2Agg4gIIgogDQgYgCgCgBQgzgegWAJQgRAIgFAkQgDAsgCAVQgFAmgTAKQgxAdgZAIQgWAHgZAAQgOAAgPgCg");
	var mask_graphics_26 = new cjs.Graphics().p("ARgMlIiFgRQhNgLgmgSQgogTA2hpQgegvhDiRQhDiRB/ApQB/ApBNglQBMgng8idQg9idBvgxQBugzBdAXQApAKgPCFQBvhhA6AgQBkA3AUA+QAhBohEAOQgKACgsACQgdAAgEAKQgBADBYA+QBeBBAKASQAbAugYA6QgYA7g8AjQg9Ajg/gJIgtgDQgagCgDgBQg4gigZALQgTAJgGAoQgDAxgDAXQgGAqgVAMQg3AggcAJQgZAIgcAAQgQAAgQgCg");
	var mask_graphics_27 = new cjs.Graphics().p("ARAM7IiSgTQhVgLgrgUQgrgVA7h0Qghg0hJifQhKigCMAtQCMAtBVgpQBVgrhCitQhDitB6g3QB6g3BnAYQAtALgRCSQB7hqBAAjQBvA9AVBEQAkByhLAPQgLADgwACQggAAgFALQgBAEBhBEQBnBHAMAUQAdAzgaBAQgbBAhDAnQhDAnhFgJIgygEQgdgCgDgBQg+gmgbANQgWAJgGAsQgEA2gDAbQgGAugXANQg+AjgfAKQgbAJggAAQgRAAgSgCg");
	var mask_graphics_28 = new cjs.Graphics().p("AQhNQIiggUQhcgMgvgWQgvgWBAh/Qgjg4hQiuQhRivCaAyQCZAxBcguQBdgvhIi9QhIi8CFg8QCGg9BwAbQAxALgTChQCHh1BFAmQB6BDAXBJQAnB9hSARQgMACg1ADQgjAAgFAMQgBAEBqBKQBxBOAMAVQAgA4gdBGQgdBGhJAqQhKArhLgKIg3gEQgfgCgEgBQhDgpgeANQgYALgGAwQgFA7gEAcQgHAzgZAOQhDAngiALQgeAKgjAAQgSAAgUgDg");
	var mask_graphics_29 = new cjs.Graphics().p("AQDNlIitgVQhlgNgygYQg0gYBHiKQgng8hWi8QhXi9CmA2QCmA0BkgxQBlgzhOjMQhOjMCRhBQCQhCB6AcQA1ANgUCuQCSh/BLApQCDBIAZBRQArCGhZASQgNACg6ADQglABgGAMQgCAFB0BQQB6BUANAXQAjA8ggBMQggBMhPAtQhQAvhRgLIg8gEQgigCgEgCQhJgrggAOQgaALgHA0QgFBAgEAfQgIA3gbAPQhJArglALQghALgmAAQgTAAgVgDg");
	var mask_graphics_30 = new cjs.Graphics().p("APlN6Ii6gXQhsgOg3gZQg3gaBMiUQgphBhdjKQhejKCzA5QCzA4Bsg1QBtg3hUjaQhUjcCchGQCbhHCDAeQA5AOgWC7QCeiJBQAsQCOBNAaBXQAuCQhgAUQgOACg+ADQgoABgGAOQgCAFB8BVQCDBaAOAZQAlBAgiBSQgiBShVAxQhWAxhYgLIhAgEQgkgCgEgCQhPgvgjAQQgcAMgIA4QgFBFgEAhQgJA6gdARQhPAugnAMQgkAMgpAAQgVAAgWgDg");
	var mask_graphics_31 = new cjs.Graphics().p("APIOOIjHgYQh0gPg6gaQg7gcBSieQgshFhkjYQhjjYC/A9QC/A8Bzg5QB0g7hZjpQhZjrCmhKQCnhMCMAgQA9AOgYDIQCpiSBVAuQCYBTAcBcQAwCahmAVQgPADhCADQgrABgHAOQgCAGCEBbQCMBgAQAaQAoBFglBXQglBYhbA0QhcA1hegMIhEgEQgngCgEgCQhVgyglARQgdANgJA7QgGBKgEAjQgJA/ggASQhUAwgqAOQgmAMgtAAQgWAAgXgDg");
	var mask_graphics_32 = new cjs.Graphics().p("AOrOiIjUgaQh6gPg+gcQg/gdBXipQgvhJhpjlQhqjlDLBAQDLBAB7g9QB8g+hfj4Qhfj5CxhQQCyhRCUAiQBBAPgaDVQC0icBbAyQChBXAeBiQA0ClhtAVQgQADhGAEQgvABgHAPQgCAGCNBhQCVBlAQAcQAqBJgnBdQgnBdhhA4QhiA4hjgMIhJgFQgqgCgEgCQhag1goASQgfANgJBAQgGBOgFAlQgKBDghATQhaA0gtAOQgoANgwAAQgXAAgZgDg");
	var mask_graphics_33 = new cjs.Graphics().p("AOPO1IjggaQiCgRhBgdQhCgfBbiyQgxhOhvjyQhwjyDXBEQDWBDCDhBQCDhBhkkGQhkkIC7hUQC8hWCdAkQBEAQgbDgQC/ikBgA0QCqBcAgBoQA2CuhzAYQgRADhKAEQgxABgHAQQgDAFCVBnQCdBrARAdQAtBOgpBiQgqBihmA7QhoA8hpgNIhNgFQgsgCgFgDQhfg4gqATQghAPgKBDQgGBSgGAoQgKBGgjAVQhfA2gwAQQgrAOgyAAQgZAAgagEg");
	var mask_graphics_34 = new cjs.Graphics().p("AN0PIIjtgcQiIgQhGggQhFggBhi8Qg0hRh1j/Qh2j/DiBHQDjBGCJhEQCKhFhpkUQhpkVDFhZQDGhbCmAmQBIARgdDsQDJitBmA3QCzBhAhBtQA5C3h5AZQgSAEhOAEQg0ABgIARQgCAGCdBrQClBxASAfQAwBSgsBnQgsBnhsA/QhtA/hwgOIhRgFQgugCgFgDQhkg7gtAUQgiAQgKBGQgIBXgFAqQgLBKglAVQhkA6gzAQQgtAPg1AAQgaAAgbgEg");
	var mask_graphics_35 = new cjs.Graphics().p("ANZPbIj5gdQiPgShJghQhJghBmjFQg3hWh6kLQh8kMDuBKQDuBKCQhHQCRhJhukhQhvkjDQheQDQhfCuAnQBMASgfD4QDTi2BrA6QC8BlAjBzQA8DAiAAaQgSAEhTAFQg2ABgIASQgDAGClBwQCuB2ATAhQAxBWguBsQguBshxBCQhzBCh1gOIhVgFQgxgDgFgCQhpg+gvAVQgkAQgLBKQgIBcgGArQgLBOgnAXQhpA8g1ARQgwAQg4AAQgbAAgcgEg");
	var mask_graphics_36 = new cjs.Graphics().p("AM+PtIkEgeQiWgShMgjQhMgjBrjOQg6haiAkXQiBkYD5BNQD4BOCYhLQCXhNhzkuQhzkxDZhhQDahkC2ApQBPASggEEQDdi/BwA9QDFBqAkB4QA/DJiFAbQgUAEhWAFQg5ABgJATQgCAHCsB1QC2B7AUAiQA0BagxBxQgwByh3BFQh4BFh6gPQgYgChCgDQgygDgGgDQhuhAgxAWQgmARgLBOQgIBfgHAuQgMBRgpAYQhuA/g3ASQgyAQg7AAQgcAAgegEg");
	var mask_graphics_37 = new cjs.Graphics().p("AMkP/IkPgfQidgThPgkQhQglBwjXQg8heiGkjQiGkkEEBRQEDBQCehOQCehQh4k7Qh4k+DjhmQDjhoC/AqQBSAUgiEPQDnjHB1A+QDNBvAmB9QBBDSiLAdQgUAEhaAFQg7ABgJAUQgDAHCzB6QC/CBAUAjQA2BegyB2QgzB2h8BIQh9BJiAgQQgYgChFgDQg1gDgGgDQhzhDgzAXQgoASgMBRQgIBjgHAwQgMBVgrAYQhzBDg6ASQg0ARg+AAQgdAAgfgEg");
	var mask_graphics_38 = new cjs.Graphics().p("AMLQRIkaghQikgUhSglQhTgmB0jgQg+hhiLkvQiLkvENBTQEOBTClhRQClhSh9lKQh9lKDshqQDthtDGAsQBWAUgjEaQDwjPB5BCQDWByAoCDQBEDaiRAeQgWAEheAFQg9ACgJAUQgDAIC7CAQDGCFAVAkQA4Big0B7Qg1B7iBBLQiDBLiFgQQgZgChIgDQg3gDgGgDQh4hGg1AYQgpASgNBVQgIBngHAyQgNBYgtAaQh3BFg9ATQg2AShBAAQgeAAgggEg");
	var mask_graphics_39 = new cjs.Graphics().p("ALyQiIklgiQipgUhWgnQhWgoB5joQhBhliQk7QiRk6EYBWQEZBXCqhVQCshViClWQiClXD2huQD2hxDOAuQBZAUglElQD6jXB+BEQDeB3ApCHQBGDjiWAfQgWAEhiAGQhAACgJAUQgEAIDCCFQDOCKAWAmQA6Blg2CAQg3CAiGBNQiIBPiKgRQgagChLgEQg5gCgGgEQh8hIg3AZQgsATgMBXQgJBsgIA0QgNBbgvAbQh8BHg/AUQg4AThDAAQgfAAgigEg");
	var mask_graphics_40 = new cjs.Graphics().p("ALKRJIkwgiQiwgWhZgoQhZgpB9jwQhChpiVlGQiWlGEiBaQEiBZCxhXQCyhZiGliQiHljD/hzQD+h1DWAwQBcAVgmEvQEDjeCDBGQDlB7ArCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiPgRQgbgDhNgDQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigFg");
	var mask_graphics_157 = new cjs.Graphics().p("ALKRJIkwgiQiwgWhZgoQhZgpB9jwQhChpiVlGQiWlGEiBaQEiBZCxhXQCyhZiGliQiHljD/hzQD+h1DWAwQBcAVgmEvQEDjeCDBGQDlB7ArCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiPgRQgbgDhNgDQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:144.1416,y:61.7192}).wait(1).to({graphics:mask_graphics_19,x:147.8186,y:64.2207}).wait(1).to({graphics:mask_graphics_20,x:151.4446,y:66.6897}).wait(1).to({graphics:mask_graphics_21,x:155.0142,y:69.1213}).wait(1).to({graphics:mask_graphics_22,x:158.5266,y:71.5144}).wait(1).to({graphics:mask_graphics_23,x:161.9816,y:73.8685}).wait(1).to({graphics:mask_graphics_24,x:165.379,y:76.1835}).wait(1).to({graphics:mask_graphics_25,x:168.7189,y:78.4594}).wait(1).to({graphics:mask_graphics_26,x:172.0012,y:80.6961}).wait(1).to({graphics:mask_graphics_27,x:175.2259,y:82.8935}).wait(1).to({graphics:mask_graphics_28,x:178.393,y:85.0517}).wait(1).to({graphics:mask_graphics_29,x:181.5024,y:87.1706}).wait(1).to({graphics:mask_graphics_30,x:184.5542,y:89.2503}).wait(1).to({graphics:mask_graphics_31,x:187.5484,y:91.2906}).wait(1).to({graphics:mask_graphics_32,x:190.4849,y:93.2917}).wait(1).to({graphics:mask_graphics_33,x:193.3638,y:95.2535}).wait(1).to({graphics:mask_graphics_34,x:196.185,y:97.176}).wait(1).to({graphics:mask_graphics_35,x:198.9486,y:99.0592}).wait(1).to({graphics:mask_graphics_36,x:201.6545,y:100.9031}).wait(1).to({graphics:mask_graphics_37,x:204.3028,y:102.7077}).wait(1).to({graphics:mask_graphics_38,x:206.8934,y:104.4731}).wait(1).to({graphics:mask_graphics_39,x:209.4264,y:106.1991}).wait(1).to({graphics:mask_graphics_40,x:210.2504,y:110.1618}).wait(117).to({graphics:mask_graphics_157,x:210.2504,y:110.1618}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// Layer_5
	this.instance = new lib.germs_group();
	this.instance.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(139).to({_off:true},1).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("AKeNLQhAADi5gNQi6gNB0hRQBzhQAHhNQAGhNjCgYQjCgXAOhsQAOhtBNg+QAhgbB+BIQghiDBCgeQBzg2BJANQB9AVgaA7QgEAJgYAjQgQAXAHAHQADADBxgpQB4gsAYAAQA/AAAsAtQAtAtAAA+QAAA/gtAtIgdAiQgRAUgDABQhDAdgDAYQgDATAlAWQAwAZAWANQAnAXAAAWQAAA5gIAaQgKAjgiAiIheBfQg3A3gpAWQgIAFgKAAQgnAAg8hIg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AIZPpQh7ADlhgWQlggVDdiIQDbiIAMiBQAMiClxgoQlygoAci2QAZi2CShqQBAgtDxB5Qg/jcB9gzQDahaCNAVQDsAkgxBjQgHAPgtA7QgfAmANANQAFAEDZhFQDlhKAtAAQB3AABWBMQBVBLAABqQAABqhVBLQgQAPgpAqQggAhgGADQiAAwgGApQgFAgBHAlQBbAqAqAWQBKAnAAAlQAABhgPAsQgSA6hBA5Ii0ChQhpBdhOAlQgQAIgSAAQhKAAhzh4g");
	var mask_1_graphics_38 = new cjs.Graphics().p("AGbR9QixAFn+gfQoBgeFBi7QE/i8ARizQARi0oXg4QoZg3Apj7QAlj9DUiSQBcg/FdCnQhbkwC0hHQE9h9DMAfQFWAxhHCJQgLAUhBBSQgtA1ATASQAIAGE6hgQFLhmBCAAQCsAAB8BpQB8BoAACSQAACUh8BnQgWAUg8A8QguAtgJAEQi5BCgJA5QgHAsBnA0QCDA6A9AeQBrA2AAAzQAACGgVA9QgbBQhdBQQhvBdiWCCQiYCAhxA0QgXAKgbAAQhrAAinimg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AFKUIQjlAGqTgmQqVgmGdjtQGcjsAXjiQAVjjqzhGQq0hGA0k8QAwk/ERi4QB3hQHCDTQh1mADphZQGZidEIAmQG5A+hcCtQgNAZhVBoQg6BCAZAXQAKAIGWh5QGriBBUAAQDfAACgCEQCgCEAAC4QAAC6igCEQgdAZhNBLQg7A4gMAFQjuBUgMBHQgKA4CFBBQCpBJBPAmQCLBEAABAQAACqgbBMQgjBmh5BkQiOB1jDCkQjECiiSBBQgdANgjAAQiKAAjXjSg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AGPWKQkVAIseguQshgtH1kbQHykaAckNQAakPtEhUQtHhTA/l6QA7l9FKjcQCRheIhD8QiOnLEZhqQHwi8E/AuQIXBKhwDOQgQAfhnB7QhFBPAeAbQALAJHsiQQIFiZBmAAQEOAADCCdQDBCdAADcQAADejBCdQgjAfhdBZQhJBEgOAGQkgBkgOBUQgMBDChBNQDNBXBfAuQCoBRAABMQAADLghBbQgqB5iSB4QitCMjrDDQjtDBixBOQgkAPgqAAQinAAkFj6g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AHQYDQlCAJufg1Qujg0JGlFQJDlFAgk1QAek4vMhgQvOhfBJm0QBEm3GAj9QCohtJ5EiQiloPFIh7QJAjYFzA1QJtBViCDuQgTAih3COQhRBcAjAeQAOALI7ilQJZixB3AAQE6AADgC1QDhC1AAD9QAAD/jhC1QgoAjhtBmQhUBPgQAHQlPBzgRBiQgNBMC7BZQDuBkBvA1QDDBdAABYQAADpgmBpQgxCLirCKQjIChkRDhQkUDejOBaQgpARgxAAQjCAAkvkgg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AIMapQlsAKwXg7Qwbg6KRltQKOlsAllbQAhlexJhsQxMhqBTnqQBMnrGykcQC9h6LLFFQi6pQFyiJQKLjyGiA7QK+BfiTELQgVAniGCfQhcBnAoAiQAPAMKFi6QKmjGCGAAQFjAAD9DLQD+DLAAEcQAAEej+DLQgtAnh7BzQheBYgTAIQl7CBgSBuQgPBVDTBkQENBxB9A6QDcBpAABiQAAEGgrB1Qg3CdjACaQjjC1k0D8Qk4D5joBkQgvAUg2AAQjbAAlXlDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AJDdTQmSALyFhBQyKhALWmRQLTmRAol+QAlmAy8h2QzAh2BboaQBVocHfk4QDSiGMWFlQjOqLGZiWQLPkKHPBAQMHBpiiElQgXAriVCvQhlBxAsAmQARANLIjMQLujaCVAAQGHAAEZDfQEYDfAAE4QAAE7kYDfQgzAriHB+QhpBhgUAIQmjCPgUB5QgRBdDpBuQEpB8CLBAQDzB0AABsQAAEfgvCBQg9CtjVCpQj6DHlVEVQlYESkBBvQg0AVg8AAQjyAAl7ljg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AJ1fuQm0AMzrhGQzuhGMVmyQMRmyAsmdQApmg0miBQ0ph/BjpGQBcpJIJlSQDjiSNbGEQjgrBG9ijQMNkgH3BGQNMBxixE+QgZAuiiC9QhuB7AwApQASAOMHjdQMvjsChAAQGqAAExDyQEwDxAAFSQAAFVkwDxQg4AviSCJQhyBpgWAIQnHCbgWCDQgTBlD+B3QFDCGCWBGQEIB9AAB0QAAE4gzCMQhCC6jnC3QkQDYlzEsQl2EpkXB3Qg4AYhCAAQkHAAmcmBg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAKjAh6QnVAN1FhLQ1KhLNOnPQNLnQAvm6QArm92FiJQ2JiIBqpvQBjpxIvlqQD0ibOZGeQjwrxHcivQNHk0IbBLQOIB5i9FTQgbAyitDLQh3CCA0AsQATAPM/jsQNqj8CtAAQHJAAFGECQFHECAAFqQAAFslHECQg7AyidCSQh6BwgYAKQnoClgYCMQgTBsEPB/QFbCPChBLQEcCGAAB9QAAFNg4CVQhGDHj4DEQkkDnmNFAQmSE+krB/Qg8AahGAAQkbAAm5mcg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EALMAj4QnxAN2XhPQ2chPOCnrQN9nqAynUQAunX3aiRQ3fiPBxqTQBoqWJRl+QECikPRG2Qj+sdH5i5QN5lGI7BPQPACBjJFnQgdA0i4DWQh9CLA2AuQAVAQNxj6QOfkLC3AAQHkAAFbESQFaERAAF+QAAGBlaERQg/A1inCbQiBB2gZAKQoGCvgZCUQgVByEgCHQFwCYCrBPQEsCNAACEQAAFgg6CeQhLDTkHDQQk1DzmmFTQmpFQk+CHQhAAbhKAAQkrAAnUmzg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EALwAlnQoKAN3fhSQ3khTOvoCQOqoDA1nqQAwnt4miYQ4qiXB2qzQBuq1JumRQEQisQCHLQkMtEITjBQOmlWJYBTQPvCHjSF4QgfA3jBDhQiDCRA5AwQAWAROdkGQPNkYDBAAQH8AAFsEfQFsEeAAGRQAAGUlsEeQhCA3ivCjQiIB8gaAKQogC3gaCbQgWB4EvCOQGBCeC0BTQE8CVAACKQAAFxg+CmQhPDdkUDZQlEEAm7FjQm/FglNCOQhDAchPAAQk6AAnrnIg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAMPAnHQogAO4dhWQ4ihWPWoXQPRoXA2n+QAzoB5nieQ5sidB7rOQByrRKJmgQEbi0QsHeQkWtlIojJQPMljJyBWQQZCMjbGHQggA5jJDqQiJCWA7AzQAXASPDkRQP2kjDJAAQIRAAF7EqQF7EqAAGgQAAGkl7EqQhEA6i3CoQiNCCgcAKQo2C/gbChQgXB9E7CTQGSClC7BWQFJCaAACQQAAGAhACsQhSDmkgDiQlSEKnNFxQnSFvlbCTQhGAdhRAAQlHAAoAnag");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAMpAoYQoyAP5RhZQ5YhZP3ooQPyooA5oPQAzoS6eijQ6jiiCArlQB2rpKemuQEli5RQHtQkguBI7jPQPtlvKHBZQQ8CQjiGUQgiA7jPDxQiOCcA+A0QAXASPkkZQQYksDPAAQIkAAGHEzQGIE0AAGuQAAGxmIE0QhGA7i9CuQiSCGgdALQpJDEgcCnQgYCBFGCYQGfCqDCBZQFTCfAACVQAAGMhCCyQhVDtkpDqQldESndF9QnhF6lnCYQhIAfhUAAQlTAAoRnqg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAM/ApaQpBAQ59hcQ6ChbQRo2QQNo3A6obQA2og7MinQ7QimCDr5QB5r8Kwm5QEsi+RuH6QkouYJLjVQQIl4KXBbQRaCUjpGfQgiA8jVD4QiRCfA/A1QAYATP+kgQQ0k0DVAAQIyAAGSE7QGSE8AAG5QAAG8mSE8QhIA9jCCyQiWCJgeALQpYDKgdCrQgZCEFPCcQGqCvDHBbQFdCjAACYQAAGXhEC3QhYDzkxDvQlmEanqGHQnuGElwCcQhKAfhXAAQlbAAofn3g");
	var mask_1_graphics_51 = new cjs.Graphics().p("EANPAqOQpMAQ6ehdQ6khdQmpCQQipBA7onQA3oq7viqQ7ziqCFsHQB8sLK+nBQEyjCSFIDQkuupJWjZQQdmAKlBdQRwCXjtGmQgjA/jZD7QiUCjBAA2QAYAUQTknQRKk6DZAAQI+AAGaFCQGaFCAAHBQAAHGmaFBQhKA+jGC2QiZCMgeALQplDOgdCuQgZCHFVCfQGzCyDKBdQFkCnAACbQAAGehFC6QhZD4k3D0QluEfnzGPQn4GMl4CfQhMAfhYAAQliAAoroAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EANbAqzQpUAQ62hfQ69heQ2pJQQxpJA8ouQA3oy8IitQ8MisCHsRQB9sWLInIQE3jESVIKQkyu2JfjcQQrmFKvBeQSACZjxGtQgjA/jcD/QiXClBCA3QAZATQhkqQRZk+DdAAQJFAAGgFGQGgFGAAHHQAAHMmgFGQhLA/jIC5QicCNgeAMQptDQgfCxQgZCIFaChQG5C1DOBeQFpCpAACdQAAGlhGC8QhbD8k7D3QlzEjn7GUQn/GRl9ChQhNAghZAAQlnAAozoHg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EANjArJQpaAQ7FhfQ7KhfQ+pOQQ6pOA9ozQA3o28WiuQ8citCIsYQB/scLOnMQE5jGSfIPQk1u+JkjeQQ1mIK0BfQSKCbjzGvQgjBAjfEBQiXCmBBA4QAaATQqksQRilBDfAAQJKAAGkFIQGjFJAAHLQAAHQmjFIQhMBAjKC6QidCOgeAMQpzDSgfCyQgZCKFdCiQG9C3DPBfQFsCqAACeQAAGohHC+QhbD9k+D6Ql2Eln/GYQoDGUmBCiQhNAghaAAQlrAAo2oLg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EANlArQQpbAQ7KhfQ7PhfRBpQQQ9pPA9o0QA4o48civQ8hitCJsbQB/seLQnMQE6jHSiIQQk1vAJljfQQ4mJK2BfQSNCbjzGxQgkBAjfECQiYCmBCA4QAZAUQukuQRllCDfAAQJMAAGlFKQGkFKAAHMQAAHRmkFJQhMBAjLC6QidCPgfAMQp0DTgfCyQgZCKFeCjQG+C3DQBfQFtCrAACfQAAGohHC/QhcD+k/D6Ql3EmoAGZQoFGVmBCjQhOAghaAAQlsAAo4oNg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EANlArQQpbAQ7KhfQ7PhfRBpQQQ9pPA9o0QA4o48civQ8hitCJsbQB/seLQnMQE6jHSiIQQk1vAJljfQQ4mJK2BfQSNCbjzGxQgkBAjfECQiYCmBCA4QAZAUQukuQRllCDfAAQJMAAGlFKQGkFKAAHMQAAHRmkFJQhMBAjLC6QidCPgfAMQp0DTgfCyQgZCKFeCjQG+C3DQBfQFtCrAACfQAAGohHC/QhcD+k/D6Ql3EmoAGZQoFGVmBCjQhOAghaAAQlsAAo4oNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:105.0099,y:91.4787}).wait(1).to({graphics:mask_1_graphics_37,x:126.1989,y:112.0846}).wait(1).to({graphics:mask_1_graphics_38,x:146.177,y:131.5129}).wait(1).to({graphics:mask_1_graphics_39,x:161.3158,y:149.7638}).wait(1).to({graphics:mask_1_graphics_40,x:160.8992,y:166.8372}).wait(1).to({graphics:mask_1_graphics_41,x:160.5113,y:182.7332}).wait(1).to({graphics:mask_1_graphics_42,x:160.1522,y:192.0594}).wait(1).to({graphics:mask_1_graphics_43,x:159.8218,y:198.9399}).wait(1).to({graphics:mask_1_graphics_44,x:159.5201,y:205.222}).wait(1).to({graphics:mask_1_graphics_45,x:159.2471,y:210.9059}).wait(1).to({graphics:mask_1_graphics_46,x:159.0029,y:215.9914}).wait(1).to({graphics:mask_1_graphics_47,x:158.7874,y:220.4787}).wait(1).to({graphics:mask_1_graphics_48,x:158.6006,y:224.3677}).wait(1).to({graphics:mask_1_graphics_49,x:158.4426,y:227.6583}).wait(1).to({graphics:mask_1_graphics_50,x:158.3133,y:230.3507}).wait(1).to({graphics:mask_1_graphics_51,x:158.2128,y:232.4447}).wait(1).to({graphics:mask_1_graphics_52,x:158.1409,y:233.9405}).wait(1).to({graphics:mask_1_graphics_53,x:158.0978,y:234.8379}).wait(1).to({graphics:mask_1_graphics_54,x:166.1932,y:240.2988}).wait(103).to({graphics:mask_1_graphics_157,x:166.1932,y:240.2988}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// Layer_10
	this.instance_1 = new lib.germs_group();
	this.instance_1.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(121).to({_off:true},1).wait(32));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AGoKtQgSABg2gEQg2gDAigYQAhgXACgXQACgWg4gHQg5gHAEgfQAEggAXgSQAJgIAlAVQgKgmATgJQAigPAVAEQAkAGgHARIgIANQgFAGACACQABABAhgMQAjgMAHAAQASAAANANQANANAAASQAAASgNANIgJAKIgFAGQgUAIgBAHQgBAGALAGIAUALQAMAHAAAGQAAARgCAIQgDAKgKAKIgcAbQgQAQgMAHIgFABQgLAAgSgVg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AGZK3QgVABg/gEQg/gFAngbQAngbADgaQACgbhCgIQhCgIAFglQAEgkAagWQAMgJArAZQgMgtAXgKQAngSAZAEQAqAHgJAUIgJAPQgGAIADACQABABAmgOQApgOAIAAQAVAAAPAPQAQAPAAAVQAAAWgQAPIgKAMIgGAHQgXAJgBAJQgBAGANAIIAXAMQANAIAAAIQAAATgCAJQgEAMgLALIggAhQgTASgOAIQgDABgDAAQgNAAgVgYg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AGLLBQgZABhIgFQhIgFAtgfQAtggACgdQADgehMgKQhLgJAGgqQAFgqAegYQANgLAxAcQgNgyAZgMQAtgVAcAFQAxAIgKAXIgLARQgGAJACADQABABAtgQQAugRAJAAQAZAAARARQARASAAAYQAAAZgRARIgMANIgHAIQgaALgCAKQgBAHAPAJIAbAOQAPAJAAAJQAAAWgDAKQgEAOgNANIglAlQgVAVgQAJQgDACgEAAQgPAAgXgcg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AF8LLQgcAAhRgFQhRgGAzgjQAygjADghQADgihVgKQhUgLAGgvQAGgvAhgbQAPgMA3AfQgOg5AcgNQAygXAgAFQA2AKgLAZIgMATQgHAKADAEQABABAygSQA0gTALAAQAbAAATATQAUAUAAAbQAAAcgUATIgNAPIgIAJQgdANgCAKQgBAIAQAKIAfARQARAKAAAJQAAAZgEAMQgEAPgPAOIgpAqQgYAYgSAKQgDACgFAAQgRAAgagfg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AFuLUQgfABhagGQhagGA5gnQA3gnADglQADglhdgMQhegLAHg1QAGg0AlgeQARgNA9AiQgQg/AfgOQA4gaAkAGQA8AKgNAdIgNAVQgIALADADQACACA3gUQA5gVAMAAQAeAAAWAVQAWAWAAAeQAAAfgWAVIgOARIgKAKQggAOgCAMQgBAJASAKIAhATQATALAAAKQAAAcgEANQgEAQgRARIgtAuQgbAbgUAKQgEACgEAAQgTAAgdgig");
	var mask_2_graphics_6 = new cjs.Graphics().p("AFfLdQgiAChigHQhigHA9grQA+gqADgpQADgphngNQhngMAIg5QAHg6ApghQASgOBDAmQgShFAjgQQA9gdAnAHQBCALgOAfIgPAYQgIAMAEAEQABABA8gWQBAgXAMAAQAiAAAXAYQAYAYAAAhQAAAhgYAYIgPASIgLALQgjAPgCANQgCAKAUAMIAlAUQAVAMAAAMQAAAegEAOQgGASgSASIgyAzQgdAdgWAMQgEACgFAAQgVAAgggmg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AFRLnQglABhqgIQhrgHBDguQBCgvAEgsQADgshvgOQhwgOAIg+QAIg+AsgkQATgQBJApQgThLAmgRQBCgfArAHQBHANgPAhQgCAFgOAVQgJANAEAEQACACBBgYQBFgZAOAAQAkAAAaAaQAaAZAAAkQAAAlgaAaIgRATIgMAMQgmARgCAOQgCALAWAMIAoAWQAWAOAAAMQAAAhgEAPQgGAUgTAUIg3A3QggAfgXANQgFADgGAAQgWAAgjgpg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AFDLwQgoABhzgIQhzgIBIgyQBIgyAEgwQAEgwh5gOQh4gPAJhDQAJhEAugnQAVgQBPAsQgVhRApgTQBHghAuAIQBOANgRAlQgCAFgPAWQgKAOAFAFQABABBHgZQBLgbAOAAQAnAAAcAcQAcAbAAAnQAAAogcAbIgSAWQgLAMgCABQgpARgCAQQgCALAXAOIArAYQAZAOAAANQAAAkgFAQQgGAWgVAVIg7A7QgiAjgaANQgFADgGAAQgYAAgmgsg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AE2L5QgrABh8gIQh7gJBNg2QBNg1AEgzQAEg0iBgQQiBgPAKhIQAJhJAzgqQAWgSBUAwQgWhXArgUQBNgkAxAJQBTAOgRAnQgDAGgPAYQgLAPAEAFQACABBMgbQBQgdAQAAQAqAAAdAeQAeAeAAApQAAArgeAdIgTAXQgLANgDABQgsATgCAQQgCANAZAPIAuAZQAaAPAAAPQAAAmgFASQgHAXgWAWIg/BAQglAlgbAOQgGADgGAAQgaAAgogvg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AEoMCQguABiDgJQiDgJBRg5QBSg6AFg2QAEg3iKgRQiJgRALhNQAJhNA3gsQAXgTBZAzQgXhdAugWQBSgmA1AJQBYAPgSAqQgDAGgRAZQgMARAFAFQACACBRgdQBWgfAQAAQAtAAAgAfQAgAgAAAtQAAAtggAgIgVAYQgMAOgCABQgwAUgCARQgCAOAaAQIAyAaQAbARAAAPQAAApgFATQgHAYgYAZIhDBDQgnAogeAPQgGADgGAAQgcAAgrgyg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AEbMLQgxABiMgKQiLgJBXg9QBXg9AFg6QAEg6iRgSQiTgSALhRQAKhSA6gwQAagUBeA2QgZhiAxgXQBXgpA4AKQBeAQgUAtQgDAGgRAbQgNARAGAFQACACBWgfQBaghASAAQAvAAAiAiQAiAiAAAvQAAAwgiAiIgWAaQgNAOgCABQgzAWgCASQgCAPAcAQIA0AdQAeARAAARQAAArgGAUQgHAagaAaIhHBIQgqApgfARQgGADgHAAQgeAAgtg1g");
	var mask_2_graphics_12 = new cjs.Graphics().p("AENMTQgzACiUgKQiTgLBchAQBchAAFg9QAFg+iagTQibgTAMhWQAKhXA+gyQAagVBkA5QgZhoAzgYQBcgrA7AKQBjARgVAvQgDAHgTAcQgNASAGAGQACACBbghQBggiATAAQAyAAAjAjQAkAkAAAyQAAAzgkAjIgXAbQgOAQgCABQg2AXgCAUQgCAPAdARIA4AeQAfATAAARQAAAugGAVQgIAcgbAbIhLBMQgsAsghASQgHADgHAAQgfAAgxg5g");
	var mask_2_graphics_13 = new cjs.Graphics().p("AEAMcQg2ACibgLQicgLBihEQBghDAGhBQAFhBiigUQikgUAMhbQAMhbBAg1QAcgWBrA8QgchuA2gZQBhgtA+ALQBoARgWAyQgDAHgUAeQgNATAGAGQACACBggiQBkglAUAAQA1AAAmAmQAlAlAAA1QAAA1glAmIgZAdQgOAQgDABQg4AYgDAVQgCAQAfASIA7AgQAgAUAAASQAAAwgGAWQgIAdgdAdIhPBQQgvAvgiASQgHAEgIAAQghAAgzg8g");
	var mask_2_graphics_14 = new cjs.Graphics().p("ADzMkQg4ACikgLQijgMBnhHQBlhHAFhEQAGhEirgVQirgVANhfQALhgBEg3QAegYBvA/QgdhzA6gbQBlgvBBALQBuATgXA0QgEAIgVAfQgOAUAGAGQADADBkglQBqgmAVAAQA4AAAnAnQAoAoAAA3QAAA4goAoIgaAeQgPARgDABQg7AagDAVQgCARAhATIA9AiQAjAUAAATQAAAzgHAXQgJAfgeAeIhTBUQgxAxgkATQgHAEgJAAQgiAAg2g/g");
	var mask_2_graphics_15 = new cjs.Graphics().p("ADnMtQg8ACirgMQirgMBshLQBphKAGhHQAGhHiygWQi0gWANhkQANhlBHg6QAfgZB1BDQgfh5A9gcQBpgxBEAMQBzATgYA2QgDAIgWAhQgPAVAGAHQADACBpgmQBvgoAWAAQA6AAApApQAqAqAAA6QAAA6gqAqIgbAfQgQASgDACQg+AagDAXQgCARAiAVQAsAXAVALQAkAWAAAUQAAA1gHAYQgJAgggAgIhXBYQgzAzgmAVQgIAEgIAAQgkAAg4hCg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ADaM1Qg+ACiygNQizgMBwhOQBvhNAGhLQAGhKi7gXQi8gXAPhoQANhpBKg9QAggaB6BGQggh/A/gdQBug0BIANQB4AUgZA5QgEAJgXAhQgPAWAGAIQADACBugnQB0grAXAAQA8AAAsAsQArArAAA8QAAA+grArIgdAhQgQASgDACQhBAcgDAXQgDASAkAWQAuAYAWAMQAlAXAAAVQAAA3gHAZQgKAiggAhIhcBcQg1A1goAWQgIAEgJAAQglAAg7hFg");
	var mask_2_graphics_17 = new cjs.Graphics().p("ADOM9QhBACi5gNQi7gNB1hRQBzhRAGhNQAGhOjCgYQjDgYAOhsQAOhuBNg/QAigbB/BJQghiEBCgeQByg1BLAMQB9AVgaA7QgEAJgYAjQgQAXAHAIQACACBzgpQB5gsAYAAQA/AAAtAtQAtAtAAA/QAABAgtAtIgeAiQgRAUgDACQhEAcgDAZQgDATAmAWQAwAZAWANQAnAYAAAVQAAA6gHAbQgKAigiAjIhgBgQg3A3gpAWQgJAFgJAAQgnAAg9hIg");
	var mask_2_graphics_18 = new cjs.Graphics().p("ADCNFQhEACjBgNQjCgOB6hUQB5hUAGhQQAHhRjLgZQjMgZAPhxQAPhyBQhBQAjgcCEBLQgiiJBEggQB3g3BOAOQCCAWgbA9QgEAJgZAkQgRAYAHAIQADADB3grQB+guAZAAQBBAAAvAvQAvAvAABBQAABDgvAvIgfAjQgSAUgDACQhGAegDAaQgDATAnAXQAyAaAXAOQAoAYAAAXQAAA8gIAcQgKAkgjAjIhjBkQg6A6grAXQgIAFgLAAQgoAAg/hLg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AC2NNQhGACjIgOQjKgOB+hXQB9hYAHhTQAHhUjTgZQjTgaAQh2QAPh1BThEQAkgeCKBOQgkiOBHggQB8g6BQAOQCHAXgcA/QgEAKgaAmQgSAYAIAJQADADB8gtQCCgwAaAAQBEAAAwAxQAxAxAABEQAABEgxAxIggAlQgSAVgEACQhIAfgEAaQgDAVApAYQAzAbAYAOQArAZAAAYQAAA+gJAdQgKAlglAlIhnBoQg8A8gsAYQgJAFgLAAQgqAAhBhOg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ACqNVQhJACjPgOQjRgPCDhaQCChbAHhWQAHhXjagbQjbgbAQh5QAPh6BXhHQAlgeCPBRQgmiTBKghQCBg8BTAOQCLAYgdBBQgEAKgbAnQgSAaAIAIQADADCAguQCHgxAbAAQBGAAAyAyQAzAzAABGQAABHgzAzIghAmQgTAWgDACQhMAggDAbQgDAWAqAZQA1AbAZAPQAsAaAAAYQAABBgJAeQgLAmgmAnIhqBrQg+A+gvAZQgJAFgLAAQgrAAhEhQg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ACeNcQhLADjWgPQjYgPCHheQCGhdAIhaQAHhZjigcQjigcARh9QAQh+BZhJQAnggCTBUQgniXBMgjQCGg/BVAPQCRAZgeBEQgFAKgbAoQgTAbAIAJQADADCFgwQCLgyAcAAQBJAAA0AzQA0A0AABJQAABKg0A0IgjAnQgTAXgEACQhOAhgEAcQgDAWArAaQA4AdAZAPQAuAbAAAZQAABDgJAfQgLAogoAnIhuBwQhABAgwAZQgJAGgMAAQgtAAhGhUg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ACSNkQhNADjdgQQjfgPCLhhQCLhhAIhcQAHhdjpgcQjpgdARiBQAQiDBchLQApggCXBWQgnicBOgkQCKhBBYAQQCVAZgfBHQgEAKgdAqQgTAbAIAJQADADCJgxQCQg0AdAAQBLAAA2A1QA2A2AABLQAABMg2A2IgkApQgUAXgEACQhQAigEAeQgDAWAsAbQA5AeAbAPQAvAcAAAaQAABFgJAgQgMApgpApIhxBzQhDBCgxAaQgKAGgLAAQgvAAhJhWg");
	var mask_2_graphics_23 = new cjs.Graphics().p("ACKNxQhPACjkgQQjmgQCPhjQCPhkAIhfQAIhgjwgdQjxgeASiFQARiHBfhNQApgiCdBZQgpigBRgmQCOhCBbAQQCaAaghBJQgEALgeAqQgUAcAJAJQADAECNgzQCVg1AdAAQBOAAA3A2QA4A4AABNQAABPg4A3IgkAqQgVAYgEACQhTAkgEAeQgDAXAuAcQA6AeAcAQQAwAdAAAbQAABHgJAhQgMAqgqAqIh1B3QhFBEgyAbQgLAGgMAAQgwAAhLhYg");
	var mask_2_graphics_157 = new cjs.Graphics().p("ACKNxQhPACjkgQQjmgQCPhjQCPhkAIhfQAIhgjwgdQjxgeASiFQARiHBfhNQApgiCdBZQgpigBRgmQCOhCBbAQQCaAaghBJQgEALgeAqQgUAcAJAJQADAECNgzQCVg1AdAAQBOAAA3A2QA4A4AABNQAABPg4A3IgkAqQgVAYgEACQhTAkgEAeQgDAXAuAcQA6AeAcAQQAwAdAAAbQAABHgJAhQgMAqgqAqIh1B3QhFBEgyAbQgLAGgMAAQgwAAhLhYg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:53.5008,y:70.6147}).wait(1).to({graphics:mask_2_graphics_2,x:53.8698,y:71.9461}).wait(1).to({graphics:mask_2_graphics_3,x:54.2345,y:73.2622}).wait(1).to({graphics:mask_2_graphics_4,x:54.595,y:74.5631}).wait(1).to({graphics:mask_2_graphics_5,x:54.9513,y:75.8488}).wait(1).to({graphics:mask_2_graphics_6,x:55.3034,y:77.1193}).wait(1).to({graphics:mask_2_graphics_7,x:55.6513,y:78.3745}).wait(1).to({graphics:mask_2_graphics_8,x:55.9949,y:79.6146}).wait(1).to({graphics:mask_2_graphics_9,x:56.3343,y:80.8394}).wait(1).to({graphics:mask_2_graphics_10,x:56.6696,y:82.049}).wait(1).to({graphics:mask_2_graphics_11,x:57.0006,y:83.2434}).wait(1).to({graphics:mask_2_graphics_12,x:57.3273,y:84.4226}).wait(1).to({graphics:mask_2_graphics_13,x:57.6499,y:85.5866}).wait(1).to({graphics:mask_2_graphics_14,x:57.9683,y:86.7353}).wait(1).to({graphics:mask_2_graphics_15,x:58.2824,y:87.8689}).wait(1).to({graphics:mask_2_graphics_16,x:58.5923,y:88.9872}).wait(1).to({graphics:mask_2_graphics_17,x:58.898,y:90.0903}).wait(1).to({graphics:mask_2_graphics_18,x:59.1995,y:91.1782}).wait(1).to({graphics:mask_2_graphics_19,x:59.4968,y:92.2509}).wait(1).to({graphics:mask_2_graphics_20,x:59.7898,y:93.3083}).wait(1).to({graphics:mask_2_graphics_21,x:60.0786,y:94.3506}).wait(1).to({graphics:mask_2_graphics_22,x:60.3633,y:95.3776}).wait(1).to({graphics:mask_2_graphics_23,x:60.978,y:96.8909}).wait(134).to({graphics:mask_2_graphics_157,x:60.978,y:96.8909}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// Layer_1
	this.instance_2 = new lib.germs_group();
	this.instance_2.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(156).to({_off:true},1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.9,0,895.4,305);


(lib.copy_01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AANBqIAAiqIgoAlIgVgZIA/g1IAiAAIAADTg");
	this.shape.setTransform(8.55,21.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).wait(96));

	// numbers_scrolling
	this.instance = new lib.numbers_scrolling("synched",2);
	this.instance.setTransform(26.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_1.setTransform(28.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},37).to({state:[{t:this.shape_1}]},14).wait(96));

	// _
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgcAoIAVhPIAkAAIgaBPg");
	this.shape_2.setTransform(59.875,31.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(31).to({_off:false},0).wait(116));

	// numbers_scrolling
	this.instance_1 = new lib.numbers_scrolling("synched",1);
	this.instance_1.setTransform(44.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(46.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.shape_3}]},19).wait(97));

	// numbers_scrolling
	this.instance_2 = new lib.numbers_scrolling("synched",7);
	this.instance_2.setTransform(71.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_4.setTransform(73.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.shape_4}]},24).wait(99));

	// numbers_scrolling
	this.instance_3 = new lib.numbers_scrolling("synched",3);
	this.instance_3.setTransform(88.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(90.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.shape_5}]},33).wait(101));

	// numbers_scrolling
	this.instance_4 = new lib.numbers_scrolling("synched",0);
	this.instance_4.setTransform(107.1,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_6.setTransform(109.025,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_6}]},44).wait(103));

	// GERMS
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgpBpQgSgHgOgPIAdgcQAHALALAGQALAFANAAIAMgBQAHgCAFgEQAGgDADgGQADgFAAgIQAAgLgHgHQgIgGgLgEIgXgJQgNgDgLgHQgMgGgHgLQgHgMAAgSQAAgRAGgMQAHgMALgIQALgIAOgEQAOgEAOAAQARAAAPAGQAQAFANALIgcAdQgGgIgKgEQgKgEgLAAIgMABQgGACgFADQgFADgDAGQgDAFAAAHQAAALAIAGQAHAFALAEIAXAJQAOADALAHQALAGAHAMQAIALAAATQAAARgGANQgHAMgKAJQgLAIgOAEQgOAFgPAAQgUAAgSgHg");
	this.shape_7.setTransform(223.575,21.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("ABOBqIAAivIgBAAIhACvIgaAAIhAivIgBAAIAACvIgkAAIAAjTIA6AAIA4CUIA5iUIA6AAIAADTg");
	this.shape_8.setTransform(201.45,21.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAjBqIgxhaIgbAAIAABaIgmAAIAAjTIBKAAQAOAAAOADQAPADALAGQALAHAGAMQAHAMAAASQAAAXgNAPQgNAPgXADIA4BegAgpgPIAdAAIAPgBQAIgBAHgCQAHgDAEgGQAEgGAAgLQAAgJgEgGQgDgFgHgDQgGgDgIgBIgOgBIggAAg");
	this.shape_9.setTransform(179.025,21.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_10.setTransform(160.025,21.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AggBoQgVgIgOgPQgQgOgIgVQgIgUAAgZQAAgZAIgUQAIgVAQgPQAOgPAVgIQAVgIAXAAQAZAAAVAGQAVAGARAPIgcAcQgKgKgPgFQgPgFgPAAQgQAAgOAGQgNAFgJALQgKAKgGAOQgEAOgBAQQABAQAEAOQAGAOAKALQAJAKANAGQAOAGAQAAQAOAAANgCQAMgDAKgGIAAgyIgsAAIAAghIBSAAIAABsQgnAVgxAAQgXAAgVgIg");
	this.shape_11.setTransform(138.3,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(147));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,234.79999999999998,46);


// stage content:
(lib.LysolGeneric_LDS_728x90_en = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		//this.btnColor;
		////this.downText = this.cta.cta.textDown;
		////this.upText = this.cta.cta.textUp;
		////this.textRestingYPos = 17;
		//this.ctaTextOffset = 30;
		
		////self.upText.y = this.textRestingYPos + this.ctaTextOffset;
		////self.downText.y = this.textRestingYPos;
		
		//this.setBtnColor = function(p_color) {
		//	switch (p_color) {
		//		case "white":
		//			self.cta.cta.arrow.gotoAndPlay("dark-green");
		//			//self.cta.cta.textDown.gotoAndPlay("dark-green");
		//			self.cta.cta.bg.gotoAndPlay("white");
		//			self.btnColor = "white";
		//			break;
		//		case "regular-green":
		//			self.cta.cta.arrow.gotoAndPlay("white");
		//			//self.cta.cta.textDown.gotoAndPlay("white");
		//			self.cta.cta.bg.gotoAndPlay("regular-green");
		//			self.btnColor = "regular-green";
		//			break;	
		//	}
		//}
		//this.setRolloverBtnColor = function() {
		//	if (self.btnColor == "regular-green") {
		//		setTimeout(function() {
		//			self.cta.cta.arrow.gotoAndPlay("dark-green");
		//		}, 150);
		//	}	
		//}
		//this.setRolloutBtnColor = function() {
		//	if (self.btnColor == "regular-green") {
		//		setTimeout(function() {
		//			self.cta.cta.arrow.gotoAndPlay("white");
		//		}, 150);
		//	}
		//}
		
		//// Set initial button color
		//setTimeout(function() {
		//	self.setBtnColor("regular-green");
		//}, 50);
		
		// Clicktag =======================
		
		this.clicktag.addEventListener('click', handleClick);
		//this.clicktag.addEventListener('mouseover', handleMouseOver);
		//this.clicktag.addEventListener('mouseout', handleMouseOut);
		
		function handleClick() {
		    window.ctaClick();
		}
		//function handleMouseOver() {
		//	//var landingY = self.textRestingYPos;
		//	self.cta.gotoAndPlay("over"); 
		//	self.cta.cta.gotoAndPlay("over");
		//	self.setRolloverBtnColor();
		//	//self.downText.y = landingY;
		//	//self.upText.y = landingY-self.ctaTextOffset;
		//	//createjs.Tween.get(self.downText, {override:true}).to({y:landingY+self.ctaTextOffset}, 200, createjs.Ease.quintIn);
		//	//createjs.Tween.get(self.upText, {override:true}).wait(200).to({y:landingY}, 300, createjs.Ease.quintOut);
		//}
		//function handleMouseOut() {
		//	//var landingY = self.textRestingYPos;
		//	self.cta.gotoAndPlay("out");
		//	self.cta.cta.gotoAndPlay("out");
		//	self.setRolloutBtnColor();
		//	//self.downText.y = landingY+self.ctaTextOffset;
		//	//self.upText.y = landingY;
		//	//createjs.Tween.get(self.downText, {override:true}).wait(200).to({y:landingY}, 300, createjs.Ease.quintOut);
		//	//createjs.Tween.get(self.upText, {override:true}).to({y:landingY-self.ctaTextOffset}, 200, createjs.Ease.quintIn);
		//}
		//
	}
	this.frame_372 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(372).call(this.frame_372).wait(68));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(440));

	// ClickTag
	this.clicktag = new lib.click();
	this.clicktag.setTransform(364.25,45.1,2.4266,0.3599,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).to({_off:true},373).wait(67));

	// what_it_takes
	this.instance = new lib.whatittakes();
	this.instance.setTransform(665.5,44,1,1,0,0,0,32.5,11);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},20).wait(67));

	// product
	this.instance_1 = new lib.product_1();
	this.instance_1.setTransform(807.5,68.45,1,1,0,0,0,35.5,54.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(337).to({_off:false},0).to({x:607.5},9,cjs.Ease.get(1)).to({_off:true},27).wait(67));

	// bg_blue
	this.instance_2 = new lib.bg_blue();
	this.instance_2.setTransform(780,125,1,1,0,0,0,52,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(330).to({_off:false},0).to({x:595},9,cjs.Ease.get(1)).to({_off:true},34).wait(67));

	// copy_04
	this.instance_3 = new lib.copy_04();
	this.instance_3.setTransform(86.1,81.8,1,1,0,0,0,61.1,12);
	this.instance_3.alpha = 0;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{alpha:0}}]},323).to({state:[{t:this.shape_1},{t:this.instance_3,p:{alpha:1}}]},9).to({state:[]},41).wait(67));

	// btn_cta
	this.instance_4 = new lib.btn_cta();
	this.instance_4.setTransform(480.05,45.1,0.8,0.8,0,0,0,61.1,20.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(316).to({_off:false},0).to({x:464.05,alpha:1},9,cjs.Ease.get(1)).to({_off:true},48).wait(67));

	// copy_03
	this.instance_5 = new lib.copy_03();
	this.instance_5.setTransform(125.7,52.25,1,1,0,0,0,82,27.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(310).to({_off:false},0).to({x:105.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},54).wait(67));

	// copy_02
	this.instance_6 = new lib.copy_02();
	this.instance_6.setTransform(324.3,35.45,1,1,0,0,0,122.8,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},38).wait(130));

	// logo
	this.instance_7 = new lib.logo_1();
	this.instance_7.setTransform(685.5,47,1,1,0,0,0,24.5,23);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},132).wait(130));

	// bg_light_blue
	this.instance_8 = new lib.bg_lightblue();
	this.instance_8.setTransform(98,35,1,1,0,0,0,98,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(248).to({_off:false},0).to({y:125},9,cjs.Ease.get(1)).to({_off:true},116).wait(67));

	// hand
	this.instance_9 = new lib.hand_spray_1("single",0);
	this.instance_9.setTransform(12.9,225.05,1,1,-22.7187,0,0,-0.1,112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).to({regX:0,rotation:0,x:110,y:125},4,cjs.Ease.get(1)).wait(3).to({mode:"synched"},0).to({regX:0.1,rotation:4.9513,x:105.95,startPosition:12},20,cjs.Ease.get(1)).to({regX:-0.1,rotation:-7.0392,x:104.8,y:135,startPosition:38},20,cjs.Ease.get(1)).to({regX:0,rotation:0,x:110,y:125,mode:"single",startPosition:0},23,cjs.Ease.get(1)).to({y:205},9,cjs.Ease.get(1)).to({_off:true},1).wait(182));

	// spray
	this.instance_10 = new lib.spray_mist("synched",0);
	this.instance_10.setTransform(260,65,0.6263,0.6263,0,0,0,150,150.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).to({regX:149.8,regY:149.8,scaleX:1.486,scaleY:1.486,x:259.9,y:64.65,alpha:0.2813},40,cjs.Ease.get(1)).to({scaleX:2.1808,scaleY:2.1808,x:260,y:64.75,alpha:0},10).to({_off:true},4).wait(201));

	// copy_01c
	this.instance_11 = new lib.copy_01c();
	this.instance_11.setTransform(113.5,79.8,1,1,0,0,0,104.5,8.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({alpha:1},13).wait(92).to({alpha:0},33).to({_off:true},20).wait(188));

	// copy_01b
	this.instance_12 = new lib.copy_01b("single",0);
	this.instance_12.setTransform(330.05,78,1,1,0,0,0,136.1,25.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(86).to({_off:false},0).to({y:66,alpha:1},15,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({x:379.05,startPosition:51},51,cjs.Ease.get(0.2)).wait(46).to({startPosition:97},0).to({alpha:0,startPosition:130},33).to({_off:true},20).wait(188));

	// copy_01a
	this.instance_13 = new lib.copy_01a();
	this.instance_13.setTransform(457,45.5,1,1,0,0,0,91,22.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({x:437,alpha:1},15,cjs.Ease.get(1)).to({y:33.5},15,cjs.Ease.get(1)).wait(98).to({alpha:0},33).to({_off:true},20).wait(188));

	// copy_01
	this.instance_14 = new lib.copy_01();
	this.instance_14.setTransform(375.7,48.5,1,1,0,0,0,84.2,25.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1},15).wait(24).to({x:282.2},15,cjs.Ease.get(1)).wait(8).to({y:36.5},15,cjs.Ease.get(1)).wait(98).to({alpha:0},33).to({_off:true},20).wait(188));

	// germs
	this.instance_15 = new lib.germs("synched",0,false);
	this.instance_15.setTransform(200,-90);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(105).to({startPosition:105},0).to({alpha:0,startPosition:138},33).to({_off:true},20).wait(188));

	// white_box
	this.instance_16 = new lib.whitebox();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({alpha:0.6914},8).wait(39).to({alpha:0.5},31,cjs.Ease.get(1)).to({_off:true},279).wait(67));

	// logo
	this.instance_17 = new lib.logo_1();
	this.instance_17.setTransform(684.5,44,1,1,0,0,0,24.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(415));

	// boy
	this.instance_18 = new lib.girl();
	this.instance_18.setTransform(169.4,144.7,0.9999,0.9999,-0.0009,0,0,169.4,144.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:0.0508},31,cjs.Ease.get(1)).to({_off:true},279).wait(67));

	// BG
	this.instance_19 = new lib.whitebox();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},373).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,-160.2,642,443.5);
// library properties:
lib.properties = {
	id: '3CE4C820892743FB9D5BF0281A417E72',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boy.jpg?1573838870358", id:"boy"},
		{src:"images/germs_sm.png?1573838870358", id:"germs_sm"},
		{src:"images/hand_spray.png?1573838870358", id:"hand_spray"},
		{src:"images/logo.png?1573838870358", id:"logo"},
		{src:"images/product.png?1573838870358", id:"product"},
		{src:"images/spray_01.png?1573838870358", id:"spray_01"},
		{src:"images/spray_02.png?1573838870358", id:"spray_02"},
		{src:"images/whatittaketoprotect.png?1573838870358", id:"whatittaketoprotect"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CE4C820892743FB9D5BF0281A417E72'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;