(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(0,0,133,201);


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
p.nominalBounds = new cjs.Rectangle(0,0,229,24);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitebox, new cjs.Rectangle(0,0,300,600), null);


(lib.whatittakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whatittaketoprotect();
	this.instance.setTransform(24,-20,0.98,0.98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whatittakes, new cjs.Rectangle(24,-20,224.4,23.5), null);


(lib.spray_mist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_02();
	this.instance.setTransform(-51,-47,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5466,scaleY:1.5466,rotation:180,x:382,y:370},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.118)","#FFFFFF","rgba(255,255,255,0)"],[0,0,0,1],0,0,0,0,0,151.9).s().p("AwqQrQm6m6AApxQAApwG6m6QG6m6JwAAQJxAAG6G6QG5G6AAJwQAAJxm5G6Qm6G6pxAAQpwAAm6m6g");
	this.shape.setTransform(158.05,159.525);

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
	this.instance.setTransform(0,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(0,-23,133,201), null);


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

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,300,600), null);


(lib.germs_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.germs_sm();
	this.instance.setTransform(-74,-185);

	this.instance_1 = new lib.germs_sm();
	this.instance_1.setTransform(214,-198);

	this.instance_2 = new lib.germs_sm();
	this.instance_2.setTransform(73,-194);

	this.instance_3 = new lib.germs_sm();
	this.instance_3.setTransform(-6,314,1,1,0,-90,90);

	this.instance_4 = new lib.germs_sm();
	this.instance_4.setTransform(112,464,1,1,-90);

	this.instance_5 = new lib.germs_sm();
	this.instance_5.setTransform(381,327,1,1,0,0,180);

	this.instance_6 = new lib.germs_sm();
	this.instance_6.setTransform(424,184,1,1,90);

	this.instance_7 = new lib.germs_sm();
	this.instance_7.setTransform(310,187,1,1,90);

	this.instance_8 = new lib.germs_sm();
	this.instance_8.setTransform(40,193);

	this.instance_9 = new lib.germs_sm();
	this.instance_9.setTransform(-13,47,1,1,0,-90,90);

	this.instance_10 = new lib.germs_sm();
	this.instance_10.setTransform(112,47,1,1,0,-90,90);

	this.instance_11 = new lib.germs_sm();
	this.instance_11.setTransform(381,60,1,1,0,0,180);

	this.instance_12 = new lib.germs_sm();
	this.instance_12.setTransform(421,-80,1,1,90);

	this.instance_13 = new lib.germs_sm();
	this.instance_13.setTransform(310,-80,1,1,90);

	this.instance_14 = new lib.germs_sm();
	this.instance_14.setTransform(40,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.germs_group, new cjs.Rectangle(-74,-198,498,662), null);


(lib.copy_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape.setTransform(172.125,11.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_1.setTransform(168.825,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_2.setTransform(166.275,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_3.setTransform(162.975,11.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgFIgBgFIAAgVIAGAAIAAAUQAAAEACACQABADAEAAIAEgBIADgDIADgDIAAgFIAAgRIAFAAIAAAZIABAFIAAADIgFAAIAAgCIAAgDIgDADIgCABIgDACIgDAAIgGgBg");
	this.shape_4.setTransform(158.95,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAaIAAgWIgBAAQgCADgEACQgCABgEAAQgDAAgEgBIgFgEIgEgFIgBgHIABgHIAEgGQACgCADgBQADgCAEAAQADAAAEACQAEACABADIABAAIAAgGIAFAAIAAAygAgEgTIgEADQAAABAAAAQgBAAAAABQAAABgBAAQAAABAAAAIgBAFIABAFIACADIAEADIAEABIAFgBIAEgDIADgDIABgFIgBgFIgDgEIgEgDIgFgBIgEABg");
	this.shape_5.setTransform(154.6,12.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_6.setTransform(151.575,10.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_7.setTransform(149.425,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAaIgFgFIgEgFIgBgHIABgHIAEgFQACgCAEgCQADgBADAAIAGABIAFADQADADABADIABAHIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALAGQAAgEgDgCQgDgDgFAAQgDAAgDADQgDACgBAEIAVAAIAAAAgAgEgQIAHgKIAIAAIgLAKg");
	this.shape_8.setTransform(146.125,10.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAJIAAgRIAFAAIAAARg");
	this.shape_9.setTransform(143.125,8.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAbIAAg2IAFAAIAAA2g");
	this.shape_10.setTransform(141.225,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIARIAAgZIgBgEIAAgEIAGAAIAAADIAAADIAAAAIACgCIABgCIAEgCIADgBIACAAIABABIgBAFIgDAAQgFAAgBADQgDAEAAAFIAAAQg");
	this.shape_11.setTransform(137.275,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgFIgBgFIAAgVIAFAAIAAAUQAAAEACACQACADAEAAIAEgBIAEgDIABgDIABgFIAAgRIAGAAIAAAZIAAAFIAAADIgGAAIAAgCIAAgDIgBADIgDABIgDACIgDAAIgGgBg");
	this.shape_12.setTransform(133.8,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGARQgEgCgDgEIAFgDIAEADIAEABIADAAIACgBIABgBIABgCIAAgDIgCgCIgCgBIgDAAIgEgBIgDgBIgDgDIgBgEIABgFIADgDIAEgBIAEgBQADAAADABQAEACABADIgFAEIgCgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCACIgCABIAAACIAAACIACABIADABIADABIADABIAFABIABADIABAEIgBAFIgCAEIgFACIgFAAQgDAAgDgBg");
	this.shape_13.setTransform(130.15,11.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHARQgDgCgDgEIAFgDIAEADIAEABIACAAIADgBIACgBIABgCIgBgDIgCgCIgCgBIgDAAIgEgBIgEgBIgCgDIgBgEIABgFIADgDIAEgBIAEgBQAEAAADABQACACACADIgEAEIgDgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgCACIgCABIAAACIAAACIADABIACABIACABIAFABIADABIACADIABAEIgBAFIgDAEIgEACIgFAAQgEAAgDgBg");
	this.shape_14.setTransform(125.05,11.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_15.setTransform(121.525,11.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCARIgOghIAHAAIAKAaIAKgaIAGAAIgOAhg");
	this.shape_16.setTransform(117.75,11.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_17.setTransform(115.125,10.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_18.setTransform(112.975,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEARQgDgBgCgDIgFgGIgBgHIABgGIAFgGQACgCADgCQADgBADAAQAEAAAEABQACABAEADIgFAFIgEgEIgFgBIgEABIgEADIgBAEIgBAEIABAFIABAEIAFACIADABQAFAAAEgDIAEADQgCADgEACQgDABgEAAQgDAAgDgBg");
	this.shape_19.setTransform(110.1,11.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_20.setTransform(106.175,11.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIARIAAgZIgBgEIAAgEIAGAAIAAADIAAADIAAAAIACgCIABgCIAEgCIADgBIACAAIABABIgBAFIgDAAQgFAAgBADQgDAEAAAFIAAAQg");
	this.shape_21.setTransform(103.075,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_22.setTransform(100.725,10.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAbIgGgEIgEgGIgBgHIABgHIAEgFQACgCAEgCQADgBADAAQADAAADABQAEACACADIABAAIAAgaIAFAAIAAA2IgFAAIAAgGIgBAAQgCADgDACQgEACgDAAQgDAAgDgBgAgEgBIgEACQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAFIABAFIACAEIAEACIAEABIAFgBIAEgCIADgEIABgFIgBgFIgDgEIgEgCIgFgBIgEABg");
	this.shape_23.setTransform(97.55,10.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGARQgEgCgDgEIAFgDIAEADIAEABIADAAIACgBIABgBIABgCIAAgDIgCgCIgCgBIgDAAIgEgBIgDgBIgDgDIgBgEIABgFIADgDIAEgBIAEgBQADAAADABQAEACACADIgGAEIgCgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCACIgBABIgBACIABACIABABIADABIADABIADABIAFABIACADIABAEIgBAFIgDAEIgFACIgFAAQgDAAgDgBg");
	this.shape_24.setTransform(91.8,11.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_25.setTransform(88.275,11.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAbIAAg2IAFAAIAAA2g");
	this.shape_26.setTransform(85.375,10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGARQgEgCgCgEIAEgDIAEADIAEABIADAAIACgBIABgBIABgCIAAgDIgCgCIgCgBIgDAAIgDgBIgFgBIgCgDIgBgEIABgFIADgDIAEgBIAEgBQADAAADABQADACADADIgGAEIgCgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgCACIgBABIgBACIABACIABABIADABIADABIADABIAFABIACADIABAEIgBAFIgEAEIgEACIgFAAQgDAAgDgBg");
	this.shape_27.setTransform(80.9,11.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIARIAAgZIgBgEIAAgEIAGAAIAAADIAAADIAAAAIACgCIABgCIAEgCIADgBIACAAIABABIgBAFIgDAAQgFAAgBADQgDAEAAAFIAAAQg");
	this.shape_28.setTransform(78.325,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgCgFIgBgFIAAgVIAFAAIAAAUQAAAEACACQACADAEAAIAEgBIAEgDIABgDIABgFIAAgRIAGAAIAAAZIAAAFIAAADIgGAAIAAgCIAAgDIgCADIgCABIgDACIgDAAIgGgBg");
	this.shape_29.setTransform(74.85,11.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGARQgEgBgCgDQgDgDgBgDQgBgDAAgEQAAgDABgDQABgDADgDQACgCAEgCIAGgBQAEAAADABQAEACACACIAEAGQABADAAADQAAAEgBADIgEAGQgCADgEABQgDABgEAAIgGgBgAgEgLIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAEIABAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_30.setTransform(70.675,11.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAjIgCgBIABgFIADAAIACgBIABgBIAAgCIABgDIAAgmIAFAAIAAApIAAADQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDADIgEABgAABgaQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIACABIACADIgBAEIgDABIgDgBg");
	this.shape_31.setTransform(67.275,11.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAQIgEgCIgDgFIAAgFIAAgVIAGAAIAAAUQAAAEABACQACADAFAAIADgBIAEgDIACgDIAAgFIAAgRIAGAAIAAAZIAAAFIAAADIgGAAIAAgCIAAgDIgBADIgDABIgDACIgDAAIgGgBg");
	this.shape_32.setTransform(64.75,11.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGARQgEgBgCgDQgDgDgBgDQgBgDAAgEQAAgDABgDQABgDADgDQACgCAEgCIAGgBQAEAAADABQAEACACACIAEAGQABADAAADQAAAEgBADIgEAGQgCADgEABQgDABgEAAIgGgBgAgEgLIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAEIABAFIACAEIAEACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_33.setTransform(60.575,11.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_34.setTransform(57.125,11.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNARIAAgFIAUgYIgTAAIAAgEIAaAAIAAAEIgUAYIAUAAIAAAFg");
	this.shape_35.setTransform(52.25,11.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_36.setTransform(48.625,11.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_37.setTransform(45.325,11.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEARQgDgBgDgDIgDgGIgCgHIACgGIADgGQADgCADgCQADgBADAAQAEAAADABQADABAEADIgGAFIgDgEIgFgBIgEABIgEADIgCAEIgBAEIABAFIACAEIAFACIADABQAFAAAEgDIAEADQgDADgDACQgDABgEAAQgDAAgDgBg");
	this.shape_38.setTransform(42.45,11.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_39.setTransform(38.525,11.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRAaIAAgyIAGAAIAAAFIAFgEQADgCADAAQAEAAADACQAEABACACIAEAGIABAHIgBAHIgDAFIgGAEIgHABQgEAAgDgCQgEgCgBgDIAAAXgAgEgTIgEADIgCAEIgBAFIABAFIACADIAEADIAEABIAFgBIAEgDIACgDIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_40.setTransform(34.35,12.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHARQgDgCgDgEIAFgDIAEADIAEABIACAAIADgBIACgBIABgCIgBgDIgCgCIgCgBIgDAAIgEgBIgDgBIgDgDIgBgEIABgFIADgDIAEgBIAEgBQADAAAEABQACACACADIgEAEIgDgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCACIgCABIAAACIAAACIACABIADABIACABIAFABIADABIACADIABAEIgBAFIgCAEIgFACIgFAAQgEAAgDgBg");
	this.shape_41.setTransform(30.45,11.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_42.setTransform(26.925,11.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIARIAAgZIgBgEIAAgEIAGAAIAAADIAAADIAAAAIACgCIABgCIAEgCIADgBIACAAIABABIgBAFIgDAAQgFAAgBADQgDAEAAAFIAAAQg");
	this.shape_43.setTransform(23.825,11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAVIgCgBIgBgEIAAgFIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAADIABADIABACIADAAIADAAIACgBIABAFIgEABIgDAAIgFgBg");
	this.shape_44.setTransform(19.075,11.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_45.setTransform(15.775,11.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNARIAAgFIAUgYIgTAAIAAgEIAaAAIAAAEIgTAYIATAAIAAAFg");
	this.shape_46.setTransform(10.15,11.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGARIgFgFIgEgFIgBgHIABgGIAEgGQACgCAEgCQADgBADAAIAGABIAFADQADADABAEIABAGIAAABIgbAAIABAFIADAEIADACIADAAIAHgBIAEgDIAFADQgDAEgEACQgEABgFAAQgDAAgDgBgAALgCQAAgEgDgDQgDgDgFAAQgDAAgDADQgDADgBAEIAVAAIAAAAg");
	this.shape_47.setTransform(6.525,11.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGARQgEgCgDgEIAFgDIAEADIAEABIACAAIADgBIABgBIACgCIgBgDIgCgCIgCgBIgDAAIgEgBIgDgBIgDgDIgBgEIABgFIADgDIAEgBIAEgBQAEAAADABQADACABADIgEAEIgDgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCACIgCABIAAACIAAACIACABIADABIACABIAEABIAFABIABADIABAEIgBAFIgCAEIgFACIgFAAQgDAAgDgBg");
	this.shape_48.setTransform(2.9,11.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_49.setTransform(0.525,10.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAGAAIAAAtIAXAAIAAAGg");
	this.shape_50.setTransform(-1.875,10.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGAQQgEgBgDgDIAFgEIAEAEIAEABIADAAIACgBIABgCIABgDIAAgCIgCgBIgCgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFIADgCIAEgCIAEgBQADAAADACQAEABACADIgGAEIgCgEQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCABIgCACIAAACIAAACIACABIADABIADABIADABIAFABIACADIAAAEIAAAFIgDADIgFACIgFABQgDAAgDgCg");
	this.shape_51.setTransform(100.9,3.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGAQIgFgDIgEgGIgBgHIABgGIAEgGQACgDAEAAQADgCADAAIAGABIAFADQADADABAEIABAGIAAACIgbAAIABAEIADAEIADACIADABIAHgBIAEgFIAFAEQgDAEgEABQgEACgFAAQgDAAgDgCgAALgCQAAgFgDgCQgDgDgFAAQgDAAgDADQgDACgBAFIAVAAIAAAAg");
	this.shape_52.setTransform(97.375,3.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCARIgOghIAHAAIAKAaIAKgaIAGAAIgNAhg");
	this.shape_53.setTransform(93.6,3.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_54.setTransform(90.975,2.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAAAWIgCgCIgBgFIAAgEIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAAEIABACIABABIADABIADAAIACgBIABAFIgEABIgDABIgFgBg");
	this.shape_55.setTransform(88.825,3.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAQQgEAAgCgDIgDgGIgBgHIABgGIADgGQACgDAEAAQADgCADAAQAEAAAEACQADABACACIgEAFIgEgEIgFgBIgEABIgDADIgCAEIgCAEIACAFIACAEIADADIAEABQAGAAADgFIAEAFQgDACgDABQgDACgEAAQgDAAgDgCg");
	this.shape_56.setTransform(85.95,3.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGAQIgFgDIgEgGIgBgHIABgGIAEgGQACgDAEAAQADgCADAAIAGABIAFADQADADABAEIABAGIAAACIgbAAIABAEIADAEIADACIADABIAHgBIAEgFIAFAEQgDAEgEABQgEACgFAAQgDAAgDgCgAALgCQAAgFgDgCQgDgDgFAAQgDAAgDADQgDACgBAFIAVAAIAAAAg");
	this.shape_57.setTransform(82.025,3.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgIASIAAgZIgBgFIAAgEIAGAAIAAADIAAADIAAAAIACgDIABgCIAEgBIADgBIACAAIABABIgBAGIgDgBQgFAAgBAEQgDADAAAFIAAARg");
	this.shape_58.setTransform(78.925,3.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_59.setTransform(76.575,2.725);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHAaIgFgDIgEgGIgBgHIABgHIAEgFQACgDADAAQAEgCADAAQAEAAADACQADABACADIAAAAIAAgaIAGAAIAAA2IgGAAIAAgGIAAAAQgBADgEACQgDACgEAAQgEAAgDgCgAgEgBIgEACQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAFIABAFIACAEIAEADIAEABIAFgBIAEgDIACgEIABgFIgBgFIgCgEIgEgCIgFgBIgEABg");
	this.shape_60.setTransform(73.4,2.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHAQQgDgBgCgDIAEgEIAEAEIAEABIACAAIADgBIACgCIABgDIgBgCIgCgBIgCgBIgDgBIgDgBIgFgBIgCgDIgBgEIABgFIADgCIAEgCIAEgBQAEAAADACQACABADADIgFAEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgCABIgBACIgBACIABACIACABIACABIACABIAFABIADABIADADIABAEIgBAFIgEADIgEACIgFABQgDAAgEgCg");
	this.shape_61.setTransform(67.65,3.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGAQIgFgDIgEgGIgBgHIABgGIAEgGQACgDAEAAQADgCADAAIAGABIAFADQADADABAEIABAGIAAACIgbAAIABAEIADAEIADACIADABIAHgBIAEgFIAFAEQgDAEgEABQgEACgFAAQgDAAgDgCgAALgCQAAgFgDgCQgDgDgFAAQgDAAgDADQgDACgBAFIAVAAIAAAAg");
	this.shape_62.setTransform(64.125,3.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCAcIAAg2IAFAAIAAA2g");
	this.shape_63.setTransform(61.225,2.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAJASIAAgUQAAgEgBgDQgCgCgFAAIgDABIgEADIgCADIAAAFIAAARIgGAAIAAgZIAAgFIAAgEIAFAAIAAADIAAADIABAAIABgDIADgCIAEgBIACgBIAGABIAEADIADAFIAAAGIAAAUg");
	this.shape_64.setTransform(56.3,3.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGAQQgEAAgCgDQgDgDgBgDQgBgDAAgEQAAgDABgDQABgEADgCQACgDAEAAIAGgCQAEAAADACQAEAAACADIAEAGQABADAAADQAAAEgBADIgEAGQgCADgEAAQgDACgEAAIgGgCgAgEgLIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAEIABAFIACAEIAEADIAEABIAFgBIAEgDIACgEIABgFIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_65.setTransform(52.175,3.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCAcIAAg2IAFAAIAAA2g");
	this.shape_66.setTransform(49.125,2.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAQIgFgDIgEgGIgBgHIABgGIAEgGQACgDAEAAQADgCADAAIAGABIAFADQADADABAEIABAGIAAACIgbAAIABAEIADAEIADACIADABIAHgBIAEgFIAFAEQgDAEgEABQgEACgFAAQgDAAgDgCgAALgCQAAgFgDgCQgDgDgFAAQgDAAgDADQgDACgBAFIAVAAIAAAAg");
	this.shape_67.setTransform(46.225,3.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAQQgDgBgDgDIAFgEIAEAEIAEABIACAAIADgBIACgCIABgDIgBgCIgCgBIgCgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFIADgCIAEgCIAEgBQADAAAEACQACABACADIgEAEIgDgEQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgCAAIgCABIgCACIAAACIAAACIACABIADABIACABIAFABIADABIACADIABAEIgBAFIgCADIgFACIgFABQgEAAgDgCg");
	this.shape_68.setTransform(42.6,3.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAZIgFgDIgEgGIgBgHIABgHIAEgFQACgDAEAAQADgCADAAIAGABIAFADQADADABADIABAHIAAACIgbAAIABAEIADAEIADACIADABIAHgBIAEgFIAFAEQgDAEgEABQgEACgFAAQgDAAgDgCgAALAGQAAgFgDgBQgDgDgFAAQgDAAgDADQgDABgBAFIAVAAIAAAAgAgEgPIAHgLIAIAAIgLALg");
	this.shape_69.setTransform(37.075,2.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHAQQgDgBgCgDIAEgEIAEAEIAEABIACAAIADgBIACgCIABgDIgBgCIgCgBIgCgBIgDgBIgDgBIgFgBIgCgDIgBgEIABgFIADgCIAEgCIAEgBQAEAAADACQACABADADIgFAEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgCABIgBACIgBACIABACIACABIACABIACABIAFABIADABIADADIABAEIgBAFIgEADIgEACIgFABQgDAAgEgCg");
	this.shape_70.setTransform(33.45,3.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_71.setTransform(31.075,2.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAcIAAg2IAFAAIAAA2g");
	this.shape_72.setTransform(29.325,2.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAaIAAghIAFAAIAAAhgAgCgSQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_73.setTransform(27.575,2.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAAAWIgCgCIgBgFIAAgEIAAgSIgIAAIAAgFIAIAAIAAgKIAEAAIAAAKIAKAAIAAAFIgKAAIAAAQIAAAEIABACIABABIADABIADAAIACgBIABAFIgEABIgDABIgFgBg");
	this.shape_74.setTransform(25.425,3.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgHARIgEgDIgDgFIAAgGIAAgUIAGAAIAAAUQAAAEACACQABADAEAAIAEgBIADgDIADgDIAAgFIAAgRIAFAAIAAAZIABAFIAAAEIgFAAIAAgDIAAgDIgDADIgCACIgDABIgDABIgGgBg");
	this.shape_75.setTransform(22.15,3.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgFAJIAFgRIAGAAIgGARg");
	this.shape_76.setTransform(19.125,1.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHARIgEgDIgCgFIgBgGIAAgUIAFAAIAAAUQAAAEADACQACADADAAIAEgBIADgDIACgDIABgFIAAgRIAFAAIAAAZIABAFIAAAEIgGAAIAAgDIAAgDIgCADIgCACIgDABIgDABIgGgBg");
	this.shape_77.setTransform(16.1,3.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAaIAAgWIAAAAQgCADgDACQgDABgEAAQgDAAgEgBIgFgEIgEgFIgBgHIABgHIAEgGQACgCADgBQADgCAEAAQAEAAADACQAEACABADIAAAAIAAgGIAGAAIAAAygAgEgTIgEADQAAABAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgBAFIABAFIACADIAEADIAEABIAFgBIAEgDIACgDIABgFIgBgFIgCgEIgEgDIgFgBIgEABg");
	this.shape_78.setTransform(11.75,4.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGAQQgEgBgCgDIAEgEIAEAEIAEABIADAAIACgBIABgCIABgDIAAgCIgCgBIgCgBIgDgBIgDgBIgFgBIgCgDIgBgEIABgFIADgCIAEgCIAEgBQADAAADACQADABADADIgGAEIgCgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgBAAIgCABIgBACIgBACIABACIACABIACABIADABIADABIAFABIACADIABAEIgBAFIgEADIgEACIgFABQgDAAgDgCg");
	this.shape_79.setTransform(8,3.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgIASIAAgZIgBgFIAAgEIAGAAIAAADIAAADIAAAAIACgDIABgCIAEgBIADgBIACAAIABABIgBAGIgDgBQgFAAgBAEQgDADAAAFIAAARg");
	this.shape_80.setTransform(5.425,3.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGAQQgEAAgCgDQgDgDgBgDQgBgDAAgEQAAgDABgDQABgEADgCQACgDAEAAIAGgCQAEAAADACQAEAAACADIAEAGQABADAAADQAAAEgBADIgEAGQgCADgEAAQgDACgEAAIgGgCgAgEgLIgEADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBAEIABAFIACAEIAEADIAEABIAFgBIAEgDIACgEIABgFIgBgEIgCgEIgEgDIgFgBIgEABg");
	this.shape_81.setTransform(1.825,3.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAGAAIAAAtIAXAAIAAAGg");
	this.shape_82.setTransform(-1.875,2.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_04, new cjs.Rectangle(-6,-4,248,21.9), null);


(lib.copy_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgJAXQgFgCgDgDQgDgEgCgEQgCgFAAgFQAAgEACgFQACgEADgEQADgDAFgCQAFgCAEAAQAFAAAEACQAGACACADQAEAEACAEQACAFAAAEQAAAFgCAFQgCAEgEAEQgCADgGACQgEACgFAAQgEAAgFgCg");
	this.shape.setTransform(194.55,76.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgOAFgOQAGgMAKgJQAKgJANgFQANgFAOAAQAOAAAMAFQALAFAIAJQAIAJAFAMQAEAOAAAOIAAANIhdAAQACALAJAHQAIAHAKAAQAKAAAHgFQAHgEAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgHQgHgIgLAAQgGAAgFACQgFACgEAEQgEADgCAFQgCAEAAAFIA1AAIAAAAg");
	this.shape_1.setTransform(182.875,72.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhGBiIAAjAIAlAAIAAASIABAAIAGgIIAJgGIAMgFQAFgCAHAAQAOAAAMAFQAMAFAJAJQAIAJAFAMQAEANAAAPQAAAOgEAMQgEALgIALQgHAJgLAGQgMAGgOAAQgLAAgLgEQgLgEgHgJIgBAAIAABLgAgYg0QgJAJAAAPQAAAPAJAJQAIAIAQAAQAOAAAIgIQAJgJAAgPQAAgPgJgJQgIgKgOABQgQgBgIAKg");
	this.shape_2.setTransform(167.025,75.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AhGBiIAAjAIAlAAIAAASIABAAIAGgIIAJgGIAMgFQAFgCAHAAQAOAAAMAFQAMAFAJAJQAIAJAFAMQAEANAAAPQAAAOgEAMQgEALgIALQgHAJgLAGQgMAGgOAAQgLAAgLgEQgLgEgHgJIgBAAIAABLgAgYg0QgJAJAAAPQAAAPAJAJQAIAIAQAAQAOAAAIgIQAJgJAAgPQAAgPgJgJQgIgKgOABQgQgBgIAKg");
	this.shape_3.setTransform(150.025,75.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgTBiIAAiCIAoAAIAACCgAgPg5QgIgHABgJQgBgKAIgHQAGgHAJAAQAKAAAGAHQAIAHgBAKQABAJgIAHQgGAHgKAAQgJAAgGgHg");
	this.shape_4.setTransform(137.6,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgtBDIAAiCIAoAAIAAAVIABAAQAGgMAIgGQAJgGAOAAIAGAAIAHABIAAAlIgJgCIgIgBQgLAAgIAEQgGADgEAGQgDAGAAAIIgCAQIAAA3g");
	this.shape_5.setTransform(129.2,72.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgmBgQgRgEgOgMIAWghQAJAIALAEQAKAFANAAQARAAAJgJQAJgJAAgOIAAgNIgBAAQgHAKgKAEQgLADgIAAQgOAAgMgFQgMgFgJgJQgIgJgFgLQgEgNAAgOQAAgNAEgNQAEgMAIgKQAHgJAMgGQALgGAOAAQAIAAAGACIANAFIAKAHIAGAHIABAAIAAgRIAlAAIAAB3QAAAlgSATQgTAUgmAAQgRAAgRgEgAgKg8QgGACgEAFQgFAEgCAGQgDAGAAAGQAAAHADAGQACAFAFAFQAEAEAGADQAGACAGAAQAGAAAGgCQAGgDAFgEQAEgFADgFQACgGAAgHQAAgGgCgGQgDgGgEgEQgFgFgGgCQgGgDgGAAQgGAAgGADg");
	this.shape_6.setTransform(114.225,75.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AghBCQgJgDgGgEQgGgGgFgIQgDgHAAgKQAAgLAEgIQAEgHAIgFQAHgFAIgDIAUgEIATgCIASAAQAAgLgIgGQgIgHgKABQgJgBgIAFQgJAEgGAHIgWgWQAMgKAPgGQAPgFAPAAQASAAALAEQALAFAIAJQAGAJADAMQADAMAAARIAABCIglAAIAAgRIgBAAQgGALgMAEQgKAFgNAAQgJAAgIgDgAAEAIIgMACQgGADgFADQgEAEgBAHQABAHAGADQAGAEAHAAQAFAAAGgBQAFgCAFgDQAEgDACgFQACgEABgHIAAgIIgKAAg");
	this.shape_7.setTransform(90.85,72.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgTBmIAAjLIAnAAIAADLg");
	this.shape_8.setTransform(80.275,68.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgOAFgOQAGgMAKgJQAKgJANgFQANgFAOAAQAOAAAMAFQALAFAIAJQAIAJAFAMQAEAOAAAOIAAANIhdAAQACALAJAHQAIAHAKAAQAKAAAHgFQAHgEAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgHQgHgIgLAAQgGAAgFACQgFACgEAEQgEADgCAFQgCAEAAAFIA1AAIAAAAg");
	this.shape_9.setTransform(61.125,72.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AggBjQgMgFgJgKQgIgJgFgMQgEgMAAgPQAAgOAEgNQAEgLAIgKQAHgKAMgFQALgGAOAAQALAAALAEQALAEAHAJIABAAIAAhXIAoAAIAADLIglAAIAAgRIgBAAIgGAHIgJAHIgMAFQgGACgGAAQgOAAgMgFgAgVALQgJAJAAAPQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgPgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_10.setTransform(44.425,68.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AAEBUQgIgCgGgFQgGgEgFgIQgDgHAAgLIAAg+IgaAAIAAggIAaAAIAAgnIAnAAIAAAnIAkAAIAAAgIgkAAIAAArIABAKQABAFACADQABADAEACQAEACAHAAIAIgBQAFgBADgCIAAAhQgHADgHABIgOABQgLAAgIgDg");
	this.shape_11.setTransform(22.7,70.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgOAFgOQAGgMAKgJQAKgJANgFQANgFAOAAQAOAAAMAFQALAFAIAJQAIAJAFAMQAEAOAAAOIAAANIhdAAQACALAJAHQAIAHAKAAQAKAAAHgFQAHgEAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgHQgHgIgLAAQgGAAgFACQgFACgEAEQgEADgCAFQgCAEAAAFIA1AAIAAAAg");
	this.shape_12.setTransform(9.775,72.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_13.setTransform(218.225,42.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AA/BDIAAhLQAAgJgFgHQgDgHgKAAQgHAAgFADQgEACgDAEQgEAEgBAGIgBALIAABEIgnAAIAAhEIAAgJIgDgKQgBgEgDgDQgFgEgGAAQgIAAgFADQgFADgDAFQgCAFgBAFIAAAMIAABBIgpAAIAAiCIAnAAIAAASIABAAIAEgIIAJgGIALgFQAGgCAHAAQAOAAALAFQAKAGAFAMQAHgMAKgGQAKgFAOAAQAOAAAJAEQAJAFAFAHQAFAIADAKQACALAAAMIAABMg");
	this.shape_14.setTransform(198.75,42.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgnA+QgJgEgFgJQgGgIgBgMQgCgLAAgNIAAhHIAoAAIAABAIAAALQABAGACAFQACAFAEADQAFADAIAAQAGAAAFgCQAFgDADgFQACgFABgGIAAgLIAAhBIApAAIAACCIgnAAIAAgSIAAAAIgGAHIgIAHIgKAFQgGACgIAAQgPAAgKgFg");
	this.shape_15.setTransform(179.3,42.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAXBmIAAhAIAAgMQgBgGgCgGQgCgFgEgDQgFgDgIAAQgGAAgFADQgFADgDAEQgCAFgBAGIAAANIAABBIgpAAIAAjLIApAAIAABaIAAAAQABgDADgEIAIgGQAFgEAFgCQAGgBAIAAQAPAAAJAEQAKAFAFAJQAGAIACAKQABALAAAOIAABIg");
	this.shape_16.setTransform(163.85,38.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgtBDIAAiCIApAAIAAAVIAAAAQAGgMAJgGQAIgGANAAIAIAAIAGABIAAAlIgIgCIgJgBQgMAAgGAEQgIADgDAGQgCAGgBAIIgBAQIAAA3g");
	this.shape_17.setTransform(151.2,42.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgmA+QgKgEgGgJQgEgIgCgMQgCgLAAgNIAAhHIApAAIAABAIAAALQAAAGACAFQACAFAFADQAEADAHAAQAHAAAFgCQAFgDACgFQADgFABgGIABgLIAAhBIAoAAIAACCIgnAAIAAgSIAAAAIgGAHIgIAHIgKAFQgHACgGAAQgQAAgJgFg");
	this.shape_18.setTransform(129.5,42.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AggBjQgMgFgJgKQgIgJgFgMQgEgMAAgPQAAgOAEgNQAEgLAIgKQAHgKAMgFQALgGAOAAQALAAALAEQALAEAHAJIABAAIAAhXIAoAAIAADLIglAAIAAgRIgBAAIgGAHIgJAHIgMAFQgGACgGAAQgOAAgMgFgAgVALQgJAJAAAPQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgPgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_19.setTransform(112.825,38.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AggBBQgNgEgKgKIAYgbQAGAHAHAEQAHADAJAAQAGAAAGgCQAGgCgBgGQAAgEgEgDIgMgEIgQgEQgJgCgIgEQgIgFgFgGQgEgIAAgMQgBgMAFgIQAEgIAJgFQAHgGAKgCQAKgDAKAAQANAAANAEQANAEAJAJIgZAZQgJgLgOAAQgEAAgFACQgGADAAAFQAAAFAGADIALAEIARAEQAIACAJAEQAHAEAFAHQAFAHAAANQAAAMgGAIQgFAIgIAGQgJAEgLACQgLADgKAAQgNAAgPgEg");
	this.shape_20.setTransform(90.55,42.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_21.setTransform(76.625,42.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AA+BDIAAhLQAAgJgEgHQgDgHgKAAQgHAAgFADQgEACgEAEQgCAEgBAGIgCALIAABEIgoAAIAAhEIAAgJIgCgKQgBgEgEgDQgDgEgIAAQgHAAgFADQgFADgDAFQgCAFgBAFIAAAMIAABBIgpAAIAAiCIAmAAIAAASIABAAIAFgIIAJgGIALgFQAGgCAIAAQAOAAAKAFQAJAGAGAMQAHgMAKgGQAKgFAPAAQANAAAJAEQAJAFAFAHQAGAIACAKQACALAAAMIAABMg");
	this.shape_22.setTransform(57.15,42.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgtBDIAAiCIApAAIAAAVIAAAAQAGgMAJgGQAIgGANAAIAIAAIAGABIAAAlIgIgCIgJgBQgMAAgGAEQgIADgDAGQgCAGgCAIIAAAQIAAA3g");
	this.shape_23.setTransform(40.5,42.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgPAFgMQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEAMAAAPIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_24.setTransform(26.775,42.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgmBgQgRgEgOgMIAWghQAJAIALAEQAKAFANAAQARAAAJgJQAJgJAAgOIAAgNIgBAAQgHAKgKAEQgLADgIAAQgOAAgMgFQgMgFgJgJQgIgJgFgLQgEgNAAgOQAAgNAEgNQAEgMAIgKQAHgJAMgGQALgGAOAAQAIAAAGACIANAFIAKAHIAGAHIABAAIAAgRIAlAAIAAB3QAAAlgSATQgTAUgmAAQgRAAgRgEgAgKg8QgGACgEAFQgFAEgCAGQgDAGAAAGQAAAHADAGQACAFAFAFQAEAEAGADQAGACAGAAQAGAAAGgCQAGgDAFgEQAEgFADgFQACgGAAgHQAAgGgCgGQgDgGgEgEQgFgFgGgCQgGgDgGAAQgGAAgGADg");
	this.shape_25.setTransform(10.075,45.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgfBBQgPgEgJgKIAZgcQAFAHAHAFQAHADAJAAQAGAAAGgCQAFgCAAgFQAAgFgEgDIgMgEIgRgEQgIgCgIgEQgIgFgFgGQgEgIAAgMQgBgMAFgHQAFgJAHgGQAIgFAKgDQAKgCAKAAQANAAANAEQANADAJAKIgZAZQgJgLgOAAQgFAAgEADQgGABAAAHQAAAEAGADIALAEIARADQAIADAJAEQAHAFAFAFQAFAIAAANQAAAMgGAJQgFAIgJAEQgIAGgLABQgLADgJAAQgOAAgOgEg");
	this.shape_26.setTransform(245.6,12.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgOAFgNQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEANAAAOIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_27.setTransform(231.675,12.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AggBjQgMgFgJgKQgIgJgFgMQgEgMAAgPQAAgOAEgNQAEgLAIgKQAHgKAMgFQALgGAOAAQALAAALAEQALAEAHAJIABAAIAAhXIAoAAIAADLIglAAIAAgRIgBAAIgGAHIgJAHIgMAFQgGACgGAAQgOAAgMgFgAgVALQgJAJAAAPQAAAOAJAKQAIAJAPAAQAPAAAJgJQAIgKAAgOQAAgPgIgJQgJgKgPAAQgPAAgIAKg");
	this.shape_28.setTransform(214.975,8.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AAAAQIgNATIgPgLIAPgTIgXgHIAFgRIAXAJIAAgZIARAAIAAAZIAXgIIAFARIgXAGIAPAUIgPALg");
	this.shape_29.setTransform(194.725,0.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AhBBdIBsjEIAXANIhuDCgAAvBfQgJgEgIgIQgHgHgEgKQgEgKgBgLQABgLAEgKQAEgJAHgIQAIgHAJgDQAKgEALAAQALAAAJAEQALADAGAHQAIAIAEAJQAEAKAAALQAAALgEAKQgEAKgIAHQgGAIgLAEQgJAEgLAAQgLAAgKgEgAAxAbQgHAHAAALQAAALAHAIQAIAHALAAQAKAAAIgHQAHgIAAgLQAAgLgHgHQgIgIgKAAQgLAAgIAIgAhXAEQgLgEgGgGQgIgIgEgJQgEgKAAgLQAAgLAEgKQAEgKAIgHQAGgHALgEQAJgFALAAQALAAAKAFQAKAEAGAHQAIAHAEAKQAEAKAAALQAAALgEAKQgEAJgIAIQgGAGgKAEQgKAEgLAAQgLAAgJgEgAhVg/QgIAIAAALQAAALAIAHQAHAIALAAQALAAAHgIQAIgHAAgLQAAgLgIgIQgHgHgLAAQgLAAgHAHg");
	this.shape_30.setTransform(178.3,9.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AgqBhIAshEIgFABIgHABQgOAAgLgFQgLgFgIgIQgHgJgFgKQgEgMAAgNQAAgOAGgMQAFgMAKgJQAJgJANgEQANgFAOAAQAPAAANAFQANAEAKAJQAJAJAGAMQAFAMAAAOQAAALgBAIIgFAPIgIAPIgIAOIgqBBgAgVgyQgJAIAAANQAAANAJAJQAIAHANAAQAOAAAIgHQAJgJAAgNQAAgNgJgIQgIgJgOAAQgNAAgIAJg");
	this.shape_31.setTransform(150.175,9.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgdAmIAUhLIAnAAIgZBLg");
	this.shape_32.setTransform(137.6,18.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgqBhIAshEIgFABIgHABQgOAAgLgFQgLgFgIgIQgHgJgFgKQgEgMAAgNQAAgOAGgMQAFgMAKgJQAJgJANgEQANgFAOAAQAPAAANAFQANAEAKAJQAJAJAGAMQAFAMAAAOQAAALgBAIIgFAPIgIAPIgIAOIgqBBgAgVgyQgJAIAAANQAAANAJAJQAIAHANAAQAOAAAIgHQAJgJAAgNQAAgNgJgIQgIgJgOAAQgNAAgIAJg");
	this.shape_33.setTransform(126.275,9.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgqBhIAshEIgFABIgHABQgOAAgLgFQgLgFgIgIQgHgJgFgKQgEgMAAgNQAAgOAGgMQAFgMAKgJQAJgJANgEQANgFAOAAQAPAAANAFQANAEAKAJQAJAJAGAMQAFAMAAAOQAAALgBAIIgFAPIgIAPIgIAOIgqBBgAgVgyQgJAIAAANQAAANAJAJQAIAHANAAQAOAAAIgHQAJgJAAgNQAAgNgJgIQgIgJgOAAQgNAAgIAJg");
	this.shape_34.setTransform(110.325,9.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgWBAQgNgFgKgJQgKgJgGgNQgFgMAAgQQAAgOAFgNQAGgNAKgKQAKgIANgFQANgFAOAAQAOAAAMAFQALAFAIAIQAIAKAFANQAEANAAAOIAAAMIhdAAQACAMAJAHQAIAHAKAAQAKAAAHgEQAHgFAFgHIAdAVQgKAMgPAHQgPAHgQAAQgOAAgNgFgAAbgOQAAgKgHgIQgHgHgLAAQgGAAgFADQgFACgEADQgEADgCAEQgCAFAAAFIA1AAIAAAAg");
	this.shape_35.setTransform(86.675,12.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AAWBDIAAhAIAAgLQAAgGgCgFQgCgFgFgDQgEgEgHAAQgHAAgFADQgFADgCAFQgDAFgBAFIgBAMIAABBIgoAAIAAiCIAnAAIAAASIAAAAIAGgIIAIgGIAKgFQAHgCAGAAQAQAAAKAFQAJAEAFAJQAGAIABALQACAMAAANIAABHg");
	this.shape_36.setTransform(71.2,12.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgTBiIAAiCIAoAAIAACCgAgPg5QgIgHAAgKQAAgJAIgHQAGgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAHQgGAHgKAAQgJAAgGgHg");
	this.shape_37.setTransform(59.95,9.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AA/BDIAAhLQAAgJgFgHQgDgHgKAAQgHAAgFADQgEACgDAEQgEAEgBAGIgBALIAABEIgoAAIAAhEIAAgJIgCgKQgBgEgDgDQgFgEgHAAQgHAAgFADQgFADgDAFQgCAFgBAFIAAAMIAABBIgpAAIAAiCIAnAAIAAASIABAAIAEgIIAJgGIALgFQAGgCAIAAQANAAALAFQAJAGAGAMQAHgMAKgGQAKgFAOAAQAOAAAJAEQAJAFAFAHQAFAIADAKQACALAAAMIAABMg");
	this.shape_38.setTransform(44.75,12.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgTBiIAAiCIAoAAIAACCgAgQg5QgGgHAAgKQAAgJAGgHQAIgHAIAAQAKAAAGAHQAIAHAAAJQAAAKgIAHQgGAHgKAAQgIAAgIgHg");
	this.shape_39.setTransform(29.5,9.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B3785").s().p("AgTBmIAAjLIAnAAIAADLg");
	this.shape_40.setTransform(22.525,8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B3785").s().p("AhCB6IAAi+ICBAAIAAAnIhYAAIAAAjIBSAAIAAAmIhSAAIAAAnIBdAAIAAAngAgdhSIAbgnIA2AAIgvAng");
	this.shape_41.setTransform(10.85,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_03, new cjs.Rectangle(0,-10,289,100.7), null);


(lib.copy_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgFAQgBQAQABAMAFQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMgBQALAAAIgEQAHgFAGgJIAgAYQgLANgRAIQgQAHgSAAQgQABgOgGgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFACIgKAHQgEAEgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape.setTransform(220.775,103.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AhOBtIAAjWIApAAIAAAUIABAAIAHgIIAKgHIANgGQAGgCAIAAQAQAAANAFQANAGAKAKQAJAKAFAOQAFAOAAAQQAAAQgEANQgFANgJALQgIAMgNAFQgMAHgPAAQgNAAgNgEQgMgFgHgKIgBAAIAABUgAgbg6QgKAKAAAQQAAARAKAKQAJAJARAAQAQAAAKgJQAJgKAAgRQAAgQgJgKQgKgLgQAAQgRAAgJALg");
	this.shape_1.setTransform(203.075,106.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhOBtIAAjWIApAAIAAAUIABAAIAHgIIAKgHIANgGQAGgCAIAAQAQAAANAFQANAGAKAKQAJAKAFAOQAFAOAAAQQAAAQgEANQgFANgJALQgIAMgNAFQgMAHgPAAQgNAAgNgEQgMgFgHgKIgBAAIAABUgAgbg6QgKAKAAAQQAAARAKAKQAJAJARAAQAQAAAKgJQAJgKAAgRQAAgQgJgKQgKgLgQAAQgRAAgJALg");
	this.shape_2.setTransform(184.075,106.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgVBtIAAiRIAsAAIAACRgAgRg/QgIgIAAgKQAAgLAIgIQAIgIAJAAQALAAAHAIQAIAIAAALQAAAKgIAIQgHAHgLAAQgJAAgIgHg");
	this.shape_3.setTransform(170.15,100.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_4.setTransform(160.675,103.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgrBqQgTgEgPgNIAZglQAKAJAMAFQALAFAOAAQAUAAAJgKQAKgKAAgQIAAgOIAAAAQgIALgMAEQgLAFgKAAQgQAAgNgGQgNgFgKgLQgJgKgFgMQgFgOAAgRQAAgOAEgOQAFgOAJgKQAIgLAMgGQANgHAPAAQAKAAAHACIAOAGIALAHIAHAIIABAAIAAgTIApAAIAACEQAAAqgVAVQgVAWgpAAQgUAAgTgFgAgMhDQgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAGAFAFQAFAFAGADQAHACAHAAQAHAAAHgCQAGgDAFgFQAFgFADgGQADgHAAgHQAAgHgDgHQgDgGgFgFQgFgFgGgDQgHgDgHAAQgHAAgHADg");
	this.shape_5.setTransform(143.925,107.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AglBKQgJgDgHgGQgIgFgEgJQgEgJAAgLQAAgMAFgIQAEgKAIgEQAIgGAKgDQAKgDALgBIAVgCIAVAAQAAgNgJgHQgJgHgLAAQgKAAgJAFQgKAEgHAJIgYgZQANgMARgFQAQgHARAAQAUAAANAGQANAEAHAKQAIAKADANQADAPAAASIAABJIgpAAIAAgSIgBAAQgHALgNAGQgLAEgOAAQgKAAgKgCgAAFAKIgOACQgHACgFAFQgFADAAAIQAAAIAHAEQAHAEAHAAQAGAAAGgCQAGgBAFgEQAFgDADgGQADgFAAgGIAAgKIgMAAg");
	this.shape_6.setTransform(117.675,103.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgVBxIAAjiIAsAAIAADig");
	this.shape_7.setTransform(105.8,99.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgFAQgBQAQABAMAFQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMgBQALAAAIgEQAHgFAGgJIAgAYQgLANgRAIQgQAHgSAAQgQABgOgGgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFACIgKAHQgEAEgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_8.setTransform(84.275,103.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgkBuQgNgGgKgKQgJgKgFgOQgFgNAAgRQAAgPAEgOQAFgNAJgLQAIgLAMgGQANgHAPAAQANAAANAFQAMAEAIALIAAAAIAAhhIAtAAIAADiIgpAAIAAgTIgBAAIgHAHIgKAIIgNAFQgHACgHAAQgQAAgNgFgAgYAMQgJAKAAARQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgRgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_9.setTransform(65.625,99.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AAEBeQgIgCgIgGQgHgFgEgIQgEgJAAgMIAAhEIgcAAIAAgkIAcAAIAAgrIAsAAIAAArIAnAAIAAAkIgnAAIAAAwIABALIACAIQACAEAFACQAEACAHAAIAKgBQAFgBADgDIAAAmQgHADgIAAIgQABQgLAAgKgCg");
	this.shape_10.setTransform(41.25,101.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgFAQgBQAQABAMAFQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMgBQALAAAIgEQAHgFAGgJIAgAYQgLANgRAIQgQAHgSAAQgQABgOgGgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFACIgKAHQgEAEgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_11.setTransform(26.725,103.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgLQgLgJgHgOQgGgOAAgSQAAgQAGgOQAHgOALgKQALgLAPgFQAOgGAQABQAQgBAMAGQANAFAJALQAJAKAFAOQAFAOAAAQIAAAPIhoAAQADAMAJAIQAJAIAMAAQALAAAIgGQAHgFAGgHIAgAXQgLAOgRAHQgQAIgSAAQgQAAgOgGgAAegQQAAgLgIgIQgIgIgMAAQgHAAgFACIgKAGQgEAEgCAFQgDAFAAAFIA7AAIAAAAg");
	this.shape_12.setTransform(231.225,70.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("ABFBLIAAhUQABgKgFgIQgEgHgLAAQgIAAgFADQgFACgDAFQgEAEgBAGIgCANIAABMIgsAAIAAhMIAAgKIgCgLQgBgFgFgDQgEgEgIAAQgIAAgGADQgFADgDAFQgDAGgBAGIAAANIAABJIgtAAIAAiRIArAAIAAAUIABAAIAGgJIAJgHIAMgGQAHgCAIAAQAPAAAMAHQALAGAGANQAIgOALgGQALgGAQAAQAOAAALAFQAKAFAFAJQAGAIADAMQACALAAAOIAABVg");
	this.shape_13.setTransform(209.45,70.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgrBGQgLgGgGgJQgFgJgCgNQgCgMAAgPIAAhQIAtAAIAABIIAAAMQABAHACAFQACAGAFAEQAEADAJAAQAIAAAFgDQAGgDACgFQADgFABgHIABgNIAAhJIAtAAIAACRIgrAAIAAgUIgBAAIgGAJIgJAHIgLAGQgHACgIAAQgSAAgKgFg");
	this.shape_14.setTransform(187.725,70.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AAZByIAAhIIAAgNQgBgHgCgFQgCgGgFgDQgFgEgIgBQgIAAgFAEQgGADgDAFQgDAGAAAGIgBAOIAABJIgtAAIAAjjIAtAAIAABmIAAAAIAFgJIAJgHIALgGQAHgCAIAAQARAAALAGQAKAEAGAKQAGAJACAMQACAMAAAPIAABRg");
	this.shape_15.setTransform(170.425,66.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_16.setTransform(156.225,70.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgrBGQgLgGgGgJQgFgJgCgNQgCgMAAgPIAAhQIAtAAIAABIIAAAMQABAHACAFQACAGAFAEQAEADAJAAQAIAAAFgDQAGgDACgFQADgFABgHIABgNIAAhJIAtAAIAACRIgrAAIAAgUIgBAAIgGAJIgJAHIgLAGQgHACgIAAQgSAAgKgFg");
	this.shape_17.setTransform(131.875,70.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgkBuQgNgGgKgKQgJgKgFgOQgFgNAAgRQAAgPAEgOQAFgNAJgLQAIgLAMgGQANgHAPAAQANAAANAFQAMAEAIALIAAAAIAAhhIAtAAIAADiIgpAAIAAgTIgBAAIgHAHIgKAIIgNAFQgHACgHAAQgQAAgNgFgAgYAMQgJAKAAARQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgRgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_18.setTransform(113.225,66.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AAZBLIAAhIIAAgMQgBgHgCgFQgCgGgFgDQgFgEgIAAQgIAAgFADQgGADgDAFQgDAGAAAGIgBANIAABJIgtAAIAAiRIArAAIAAAUIABAAIAGgJIAJgHIALgGQAHgCAIAAQARAAALAGQAKAFAGAJQAGAJACANQACANAAAOIAABQg");
	this.shape_19.setTransform(86.625,70.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgeBHQgPgFgMgLQgKgJgHgOQgGgOAAgSQAAgQAGgOQAHgOAKgKQAMgLAPgFQAOgGAQABQARgBAPAGQAOAFAMALQALAKAGAOQAGAOAAAQQAAASgGAOQgGAOgLAJQgMALgOAFQgPAGgRAAQgQAAgOgGgAgagaQgJAKAAAQQAAARAJAKQAKAKAQAAQARAAAJgKQAKgKAAgRQAAgQgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_20.setTransform(68.75,70.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgjBIQgPgEgLgMIAbgeQAGAJAIADQAIAFAKAAQAHgBAGgCQAGgCAAgGQAAgFgFgDQgGgEgHgCIgSgDQgKgDgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgJQAFgKAJgFQAIgHALgCQALgDALAAQAOgBAPAFQAPAEAKALIgcAbQgKgMgQAAQgFAAgFADQgFACAAAHQAAAFAFADIANAEIATAFQAJACAJAEQAIAGAGAHQAFAIAAANQAAAPgGAJQgGAJgJAFQgKAGgMACQgMACgLABQgPgBgQgEg");
	this.shape_21.setTransform(52.575,70.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgVBtIAAiRIAsAAIAACRgAgSg/QgHgIAAgKQAAgLAHgIQAJgIAJAAQALAAAHAIQAIAIAAALQAAAKgIAIQgHAHgLABQgJgBgJgHg");
	this.shape_22.setTransform(41.65,67.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AglBJQgJgCgHgGQgIgGgEgIQgEgJAAgKQAAgNAFgJQAEgIAIgFQAIgGAKgDQAKgDALgCIAVgBIAVAAQAAgMgJgIQgJgHgLAAQgKAAgJAFQgKAEgHAJIgYgZQANgLARgHQAQgFARAAQAUAAANAEQANAGAHAJQAIAJADAOQADAOAAATIAABJIgpAAIAAgTIgBAAQgHANgNAEQgLAFgOABQgKgBgKgDgAAFAJIgOADQgHADgFADQgFAEAAAIQAAAIAHAEQAHAEAHAAQAGAAAGgCQAGgCAFgDQAFgDADgGQADgEAAgIIAAgJIgMAAg");
	this.shape_23.setTransform(29.425,70.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgjBIQgPgEgLgMIAbgeQAGAJAIADQAIAFAKAAQAHgBAGgCQAGgCAAgGQAAgFgFgDQgGgEgHgCIgSgDQgKgDgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgJQAFgKAJgFQAIgHALgCQALgDALAAQAOgBAPAFQAPAEAKALIgcAbQgKgMgQAAQgFAAgFADQgFACAAAHQAAAFAFADIANAEIATAFQAJACAJAEQAIAGAGAHQAFAIAAANQAAAPgGAJQgGAJgJAFQgKAGgMACQgMACgLABQgPgBgQgEg");
	this.shape_24.setTransform(14.525,70.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgOQgGgPAAgRQAAgQAGgOQAHgOALgLQALgKAPgFQAOgFAQAAQAQAAAMAFQANAFAJAKQAJALAFAOQAFAOAAAQIAAAOIhoAAQADANAJAIQAJAHAMAAQALAAAIgEQAHgGAGgIIAgAYQgLANgRAIQgQAHgSABQgQgBgOgFgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFADIgKAFQgEAFgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_25.setTransform(234.625,37.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AAEBeQgJgCgGgGQgIgFgEgIQgEgJAAgMIAAhEIgcAAIAAgkIAcAAIAAgrIAsAAIAAArIAnAAIAAAkIgnAAIAAAwIABALIACAIQACAEAFACQAEACAHAAIAKgBQAFgBADgDIAAAmQgHADgIAAIgQABQgLAAgKgCg");
	this.shape_26.setTransform(219.55,35.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AAEBeQgIgCgHgGQgIgFgEgIQgEgJAAgMIAAhEIgdAAIAAgkIAdAAIAAgrIAsAAIAAArIAoAAIAAAkIgoAAIAAAwIAAALIAEAIQABAEAFACQAEACAIAAIAJgBQAGgBADgDIAAAmQgIADgIAAIgQABQgLAAgKgCg");
	this.shape_27.setTransform(207.25,35.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgOQgGgPAAgRQAAgQAGgOQAHgOALgLQALgKAPgFQAOgFAQAAQAQAAAMAFQANAFAJAKQAJALAFAOQAFAOAAAQIAAAOIhoAAQADANAJAIQAJAHAMAAQALAAAIgEQAHgGAGgIIAgAYQgLANgRAIQgQAHgSABQgQgBgOgFgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFADIgKAFQgEAFgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_28.setTransform(192.725,37.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgQBHQgPgFgLgKQgLgKgHgOQgFgPAAgRQAAgQAFgOQAHgOALgLQALgKAPgFQAOgFARAAQANAAAOAEQAOAEAKALIgeAgQgCgGgHgCQgFgEgHAAQgRAAgJAKQgJALAAAPQAAAQAJALQAJAKARAAQAHAAAFgEQAFgDAEgEIAeAfQgKALgOAEQgOAFgNAAQgRgBgOgFg");
	this.shape_29.setTransform(177.35,37.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AAZBLIAAhIIAAgMQgBgHgCgFQgCgGgFgDQgFgEgIAAQgIAAgFADQgGADgDAFQgDAGAAAGIgBANIAABJIgtAAIAAiRIArAAIAAAUIABAAIAGgJIAJgHIALgGQAHgCAIAAQARAAALAGQAKAFAGAJQAGAJACANQACANAAAOIAABQg");
	this.shape_30.setTransform(151.925,37.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgOQgGgPAAgRQAAgQAGgOQAHgOALgLQALgKAPgFQAOgFAQAAQAQAAAMAFQANAFAJAKQAJALAFAOQAFAOAAAQIAAAOIhoAAQADANAJAIQAJAHAMAAQALAAAIgEQAHgGAGgIIAgAYQgLANgRAIQgQAHgSABQgQgBgOgFgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFADIgKAFQgEAFgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_31.setTransform(134.625,37.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgjBIQgPgEgLgLIAbgfQAGAIAIAFQAIADAKAAQAHABAGgDQAGgCAAgGQAAgGgFgDQgGgCgHgDIgSgEQgKgCgJgFQgIgEgGgHQgFgIAAgOQAAgNAFgJQAFgJAJgHQAIgGALgDQALgCALAAQAOAAAPAEQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAFQAJACAJAFQAIAFAGAGQAFAJAAAOQAAAOgGAJQgGAJgJAGQgKAFgMADQgMACgLAAQgPAAgQgFg");
	this.shape_32.setTransform(110.025,37.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgOQgGgPAAgRQAAgQAGgOQAHgOALgLQALgKAPgFQAOgFAQAAQAQAAAMAFQANAFAJAKQAJALAFAOQAFAOAAAQIAAAOIhoAAQADANAJAIQAJAHAMAAQALAAAIgEQAHgGAGgIIAgAYQgLANgRAIQgQAHgSABQgQgBgOgFgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFADIgKAFQgEAFgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_33.setTransform(94.425,37.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AAZByIAAhIIAAgNQgBgHgCgGQgCgFgFgEQgFgDgIAAQgIgBgFAEQgGADgDAFQgDAFAAAHIgBAOIAABJIgtAAIAAjiIAtAAIAABkIAAAAIAFgIIAJgIIALgFQAHgCAIAAQARAAALAGQAKAEAGAKQAGAJACAMQACAMAAAPIAABRg");
	this.shape_34.setTransform(77.125,33.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgQBHQgPgFgLgKQgLgKgGgOQgHgPAAgRQAAgQAHgOQAGgOALgLQALgKAPgFQAOgFAQAAQANAAAOAEQAOAEAMALIgeAgQgEgGgFgCQgGgEgIAAQgQAAgJAKQgKALAAAPQAAAQAKALQAJAKAQAAQAIAAAGgEQAEgDAFgEIAeAfQgMALgOAEQgOAFgNAAQgQgBgOgFg");
	this.shape_35.setTransform(61.75,37.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgeBHQgPgFgLgKQgMgKgFgOQgHgPAAgRQAAgQAHgOQAFgOAMgLQALgKAPgFQAOgFAQAAQARAAAPAFQAPAFALAKQAKALAHAOQAGAOAAAQQAAARgGAPQgHAOgKAKQgLAKgPAFQgPAFgRABQgQgBgOgFgAgagaQgJALAAAPQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgPgKgLQgJgKgRAAQgQAAgKAKg");
	this.shape_36.setTransform(44.7,37.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_37.setTransform(29.975,37.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AhOBtIAAjVIApAAIAAATIABAAIAHgIIAKgIIANgFQAGgCAIAAQAQAAANAGQANAFAKAKQAJALAFANQAFAOAAARQAAAPgEANQgFANgJAMQgIALgNAGQgMAGgPAAQgNAAgNgEQgMgEgHgLIgBAAIAABUgAgbg6QgKAKAAARQAAAQAKALQAJAJARgBQAQABAKgJQAJgLAAgQQAAgRgJgKQgKgKgQAAQgRAAgJAKg");
	this.shape_38.setTransform(14.175,40.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgjBJQgPgFgLgMIAbgdQAGAHAIAFQAIADAKAAQAHAAAGgCQAGgCAAgGQAAgFgFgEQgGgCgHgCIgSgFQgKgCgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgKQAFgIAJgGQAIgHALgCQALgEALAAQAOABAPAEQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAEQAJADAJAEQAIAFAGAHQAFAJAAAOQAAANgGAKQgGAJgJAFQgKAGgMACQgMACgLAAQgPAAgQgDg");
	this.shape_39.setTransform(211.125,4.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B3785").s().p("AgfBHQgOgFgMgKQgLgKgGgPQgGgNAAgSQAAgQAGgPQAGgOALgJQAMgKAOgGQAPgFAQgBQARABAOAFQAPAGALAKQAMAJAGAOQAGAPAAAQQAAASgGANQgGAPgMAKQgLAKgPAFQgOAGgRgBQgQABgPgGgAgZgZQgKAKAAAPQAAAQAKALQAJAKAQAAQARAAAKgKQAJgLAAgQQAAgPgJgKQgKgLgRAAQgQAAgJALg");
	this.shape_40.setTransform(194.95,4.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B3785").s().p("AgWBJIg8iRIAxAAIAkBjIAAAAIAjhjIAtAAIg6CRg");
	this.shape_41.setTransform(177.4,4.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B3785").s().p("Ag/BJIAAgtIBKhAIhJAAIAAgkIB9AAIAAArIhPBCIBQAAIAAAkg");
	this.shape_42.setTransform(152.5,4.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgFAQgBQAQABAMAFQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMgBQALAAAIgEQAHgFAGgJIAgAYQgLANgRAIQgQAHgSAAQgQABgOgGgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFACIgKAHQgEAEgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_43.setTransform(136.325,4.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B3785").s().p("AgrBqQgTgEgPgNIAZglQAKAJAMAFQALAFAOAAQAUAAAJgKQAKgKAAgQIAAgOIAAAAQgIALgMAEQgLAFgKAAQgQAAgNgGQgNgFgKgLQgJgKgFgMQgFgOAAgRQAAgOAEgOQAFgOAJgKQAIgLAMgGQANgHAPAAQAKAAAHACIAOAGIALAHIAHAIIABAAIAAgTIApAAIAACEQAAAqgVAVQgVAWgpAAQgUAAgTgFgAgMhDQgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAGAFAFQAFAFAGADQAHACAHAAQAHAAAHgCQAGgDAFgFQAFgFADgGQADgHAAgHQAAgHgDgHQgDgGgFgFQgFgFgGgDQgHgDgHAAQgHAAgHADg");
	this.shape_44.setTransform(117.675,8.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B3785").s().p("AgYBmQgPgEgLgLQgLgKgHgOQgGgOAAgSQAAgRAGgOQAHgNALgKQALgKAPgGQAOgFAQAAQAQAAAMAFQANAGAJAKQAJAKAFANQAFAOAAARIAAAPIhoAAQADANAJAHQAJAIAMAAQALAAAIgFQAHgFAGgIIAgAYQgLANgRAIQgQAHgSAAQgQAAgOgGgAAeAPQAAgLgIgIQgIgHgMgBQgHAAgFADIgKAGQgEADgCAEQgDAFAAAGIA7AAIAAAAgAgdg/IAdgsIA9AAIg0Asg");
	this.shape_45.setTransform(100.025,1.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B3785").s().p("AAEBeQgIgCgIgGQgHgFgEgIQgEgJAAgMIAAhEIgdAAIAAgkIAdAAIAAgrIAsAAIAAArIAoAAIAAAkIgoAAIAAAwIAAALIAEAIQACAEAEACQAEACAIAAIAJgBQAFgBAEgDIAAAmQgIADgIAAIgQABQgLAAgKgCg");
	this.shape_46.setTransform(84.95,2.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B3785").s().p("AgfBHQgOgFgMgKQgKgKgHgPQgGgNAAgSQAAgQAGgPQAHgOAKgJQAMgKAOgGQAPgFAQgBQARABAOAFQAPAGALAKQAMAJAGAOQAGAPAAAQQAAASgGANQgGAPgMAKQgLAKgPAFQgOAGgRgBQgQABgPgGgAgZgZQgKAKAAAPQAAAQAKALQAJAKAQAAQARAAAKgKQAJgLAAgQQAAgPgJgKQgKgLgRAAQgQAAgJALg");
	this.shape_47.setTransform(69.85,4.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_48.setTransform(55.125,4.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B3785").s().p("AhPBqIAAjTIBPAAQAQAAAOADQAPADALAHQALAIAHAMQAGAMAAATQAAATgGANQgGALgLAIQgKAHgPADQgOADgRAAIghAAIAABTgAgggPIAfAAIAMgBIAKgEQAFgDADgFQACgFAAgIQAAgIgDgFQgEgFgGgCQgGgDgHgBIgNgBIgYAAg");
	this.shape_49.setTransform(39.525,1.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_02, new cjs.Rectangle(-10,-20,267.6,144), null);


(lib.copy_01c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape.setTransform(223.9,8.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgJAYQgFgDgDgDQgEgDgCgFQgCgFAAgFQAAgFACgEQACgFAEgEQADgCAFgCQAFgCAEAAQAGAAAEACQAFACAEACQADAEACAFQACAEAAAFQAAAFgCAFQgCAFgDADQgEADgFADQgEABgGAAQgEAAgFgBgAgFgMIgEADIgDAFIgBAEIABAGIADAEIAEADQADABACABQAEgBACgBIAFgDIACgEIABgGIgBgEIgCgFIgFgDQgCgBgEAAQgCAAgDABg");
	this.shape_1.setTransform(219.45,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_2.setTransform(214.325,8.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_3.setTransform(210.175,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgEgWQgCgDAAgDQAAgCACgDQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(206.55,8.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_5.setTransform(203.525,9.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgZAjIAAhGIAaAAIAIACQAFABADACQACACADAEQABADAAAEQAAAGgDAFQgEAEgFABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgFAAIgJABgAgMAYIALAAIAFAAIAEgBIAEgDQACgCAAgEQAAgFgEgDQgDgBgIAAIgLAAgAgMgFIALAAQAGAAACgDQADgCAAgEQAAgFgDgCQgDgCgGAAIgKAAg");
	this.shape_6.setTransform(198.15,8.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgHAjQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgGACgEQACgEADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAEQABAEAAAHIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMAGQAAgFgDgCQgDgDgGAAQgEAAgDADQgEACAAAFIAXAAIAAAAgAgEgUIAJgPIAOAAIgOAPg");
	this.shape_7.setTransform(188.775,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_8.setTransform(183.825,8.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgBgDAAgDQAAgCABgDQADgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgDgCg");
	this.shape_9.setTransform(180.55,8.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_10.setTransform(176.975,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_11.setTransform(173.025,9.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_12.setTransform(167.875,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgFAYIgTgvIAMAAIAMAgIAAAAIAOggIALAAIgTAvg");
	this.shape_13.setTransform(162.35,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgCgDAAgDQAAgCACgDQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_14.setTransform(158.35,8.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_15.setTransform(154.125,9.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AgKAiQgGgCgDgDQgEgEgCgFQgDgFABgHIAAgsIAMAAIAAAsIABAFIADAGIAEAEQADABAEAAQAFAAADgBIAEgEQACgDABgDIABgFIAAgsIAMAAIAAAsQAAAHgBAFIgHAJQgDADgGACQgFACgGABQgFgBgFgCg");
	this.shape_16.setTransform(147.55,8.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_17.setTransform(142.375,6.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape_18.setTransform(139.5,8.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_19.setTransform(132.225,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_20.setTransform(125.975,8.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgNAkIAQgaIAAAAIgDAAIgDABQgFAAgEgCQgEgCgCgDQgDgDgCgDQgBgEAAgFQAAgFACgFQABgEAEgDIAIgGQAEgBAFAAQAFAAAFABQAFACADAEQADADACAEQACAFAAAFQAAAFgCAGIgFAIIgSAcgAgEgXIgFADIgCAEIgBAGIABAEIACAFIAFABIAEABIAFgBIAEgBIACgFIABgEIgBgGIgCgEIgEgDIgFgBIgEABg");
	this.shape_21.setTransform(116.875,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AAEAjIAAg4IgMANIgHgJIAUgSIALAAIAABGg");
	this.shape_22.setTransform(110.175,8.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AAAAkIgDAAIgGgCQgDAAgCgDQgDgDgDgEQgCgEgBgGQgBgFAAgJQAAgIABgFQABgGACgEQADgEADgDIAFgDIAGgCIADgBIAEABIAGACIAGADIAFAHIADAKIABANIgBAOIgDAKIgFAHIgGADIgGACgAgGgVQgDADgBADIgCAJIAAAGIAAAIIACAIQABAEADADQADACADAAQAEAAADgCQADgDACgEIABgIIAAgIIAAgGIgBgJIgFgGQgDgDgEAAQgDAAgDADg");
	this.shape_23.setTransform(104.85,8.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgXAkIAAgNIAbgaIACgCIACgCIACgEIABgEIgBgDIgCgDIgDgCIgEgBQgEABgDACQgDACAAAFIgNgBIACgJQACgDAEgDQADgCAEgCQAEgBAEAAIAJABIAHAEIAFAGQACAEAAAFQAAAHgEAEIgHAJIgVAUIAgAAIAAALg");
	this.shape_24.setTransform(98.875,8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_25.setTransform(89.925,9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_26.setTransform(83.675,8.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgMAXIgFgEIgDgGIgBgHIAAgeIAMAAIAAAYIAAAEIABAFIADADQACACADAAIAEgBIADgDIACgEIABgEIAAgaIAMAAIAAAvIgMAAIAAgHQgBADgEADQgDACgFAAQgFAAgEgBg");
	this.shape_27.setTransform(77.725,9.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_28.setTransform(72.775,8.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgHAjQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgGACgEQACgEADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAEQABAEAAAHIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMAGQAAgFgDgCQgDgDgGAAQgEAAgDADQgEACAAAFIAXAAIAAAAgAgEgUIAJgPIAOAAIgOAPg");
	this.shape_29.setTransform(67.975,8.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_30.setTransform(59.125,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_31.setTransform(53.325,9.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgMAXIgFgEIgDgGIgBgHIAAgeIAMAAIAAAYIAAAEIABAFIADADQACACADAAIAEgBIADgDIACgEIABgEIAAgaIAMAAIAAAvIgMAAIAAgHQgBADgEADQgDACgFAAQgFAAgEgBg");
	this.shape_32.setTransform(47.525,9.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_33.setTransform(39.875,9.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgMAXIgFgEIgDgGIgBgHIAAgeIAMAAIAAAYIAAAEIABAFIADADQACACADAAIAEgBIADgDIACgEIABgEIAAgaIAMAAIAAAvIgMAAIAAgHQgBADgEADQgDACgFAAQgFAAgEgBg");
	this.shape_34.setTransform(34.725,9.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_35.setTransform(29.575,9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgHAjQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgGACgEQACgEADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAEQABAEAAAHIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMAGQAAgFgDgCQgDgDgGAAQgEAAgDADQgEACAAAFIAXAAIAAAAgAgEgUIAJgPIAOAAIgOAPg");
	this.shape_36.setTransform(21.375,8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_37.setTransform(16.225,9.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AgKAZIgGgDQgCgCgBgDQgCgDAAgDQAAgEACgDIADgEIAGgCIAGgCIAGAAIAHgBIACAAIAAgBQAAgEgDgDQgDgCgEAAIgHABIgGAEIgGgHQAEgDAGgCQAFgCAEAAIAJABIAGADQACABACADIABAFIABAEIAAAFIAAAaIgLAAIAAgHIAAAAQgDAEgEADQgDABgFAAIgGAAgAgDAEIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACACIACABIAEAAQAEAAAEgCQACgEAAgFIAAgDIgCAAIgGAAIgFACg");
	this.shape_38.setTransform(11.1,9.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgZAjIAAhGIAbAAIAIACQADABADACQAEACACAEQABADAAAEQAAAGgDAFQgDAEgGABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgEAAIgKABgAgNAYIAMAAIAFAAIAEgBIAEgDQABgCAAgEQAAgFgDgDQgDgBgIAAIgMAAgAgNgFIAMAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgCgGAAIgLAAg");
	this.shape_39.setTransform(5.4,8.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01c, new cjs.Rectangle(0,0,227.5,17.7), null);


(lib.copy_01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("ABBCHIgUgwIhbAAIgTAwIgqAAIBcjUIAgAAIBbDUgAAgA2IgghWIghBWIBBAAgAgNhbIgqgrIAoAAIAdArg");
	this.shape.setTransform(229.125,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AAjBqIgxhaIgbAAIAABaIgmAAIAAjTIBKAAQAOAAAOADQAPADALAGQALAHAGAMQAHAMAAASQAAAXgNAPQgNAPgXADIA4BegAgpgPIAdAAIAPgBQAIgBAHgCQAHgDAEgGQAEgGAAgLQAAgJgEgGQgDgFgHgDQgGgDgIgBIgOgBIggAAg");
	this.shape_1.setTransform(200.925,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgSBqIAAjTIAlAAIAADTg");
	this.shape_2.setTransform(186.425,21.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgtBoQgUgIgPgPQgPgOgIgVQgIgUAAgZQAAgZAIgUQAIgVAPgPQAPgPAUgIQAVgIAYAAQAYAAAVAIQAVAIAPAOQAPAPAIAVQAJAUAAAZQAAAZgJAUQgIAVgPAOQgPAPgVAIQgVAIgYABQgYAAgVgIgAgdhGQgOAFgJALQgJAKgGAOQgFAOAAAQQAAAQAFAOQAGAOAJALQAJAKAOAGQANAGAQAAQAQAAAOgGQANgFAKgLQAJgLAGgOQAFgOAAgQQAAgQgFgOQgGgOgJgKQgKgLgNgFQgOgGgQAAQgQAAgNAGg");
	this.shape_3.setTransform(169.8,21.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("Ag/BqIAAjTIAmAAIAACxIBZAAIAAAig");
	this.shape_4.setTransform(150.525,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("ABBBqIgUgwIhbAAIgTAwIgqAAIBcjTIAgAAIBbDTgAAgAZIgghVIghBVIBBAAg");
	this.shape_5.setTransform(130.925,21.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgQBqIhUjTIArAAIA6CfIA8ifIAoAAIhWDTg");
	this.shape_6.setTransform(110.1,21.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgSBqIAAjTIAlAAIAADTg");
	this.shape_7.setTransform(95.975,21.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AghBnQgQgGgLgKQgMgMgGgPQgGgPgBgTIAAiGIAmAAIAACFQAAAHACAJQADAIAFAHQAGAIAJAEQAJAFANAAQANAAAKgFQAJgEAFgIQAGgHACgIQACgJABgHIAAiFIAlAAIAACGQABATgIAPQgGAPgMAMQgLAKgQAGQgPAGgSAAQgRAAgQgGg");
	this.shape_8.setTransform(81,21.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgDBtQgZAAgVgIQgVgHgQgOQgPgPgJgUQgJgVAAgYQAAgYAJgUQAJgUAPgOQAPgOAVgIQAUgIAXAAQAWAAAUAIQAUAIAQAOQAPAOAIAUQAKAUgBAYQAAAPgDANQgFAMgGALQgHAJgHAGIgQAMIAAABIA9AAIAAAegAgkhEQgOAFgJAKQgJALgGANQgFANAAAQQAAAQAFANQAFAOAKALQAKAKANAFQANAGAQAAQAOAAANgGQAOgFAKgKQAJgLAFgOQAGgNAAgQQAAgQgGgNQgFgNgJgLQgKgKgOgFQgNgGgPABQgPgBgNAGg");
	this.shape_9.setTransform(57.8,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AhICHIAAjUICMAAIAAAiIhmAAIAAA0IBgAAIAAAiIhgAAIAAA6IBrAAIAAAigAgShbIAdgrIAoAAIgqArg");
	this.shape_10.setTransform(35.975,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgSBqIAAixIhBAAIAAgiICnAAIAAAiIhBAAIAACxg");
	this.shape_11.setTransform(8.85,21.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AghBnQgQgGgLgKQgMgMgGgPQgGgPAAgTIAAiGIAlAAIAACFQAAAHACAJQADAIAFAHQAGAIAJAEQAKAFAMAAQANAAAKgFQAIgEAGgIQAFgHADgIQADgJAAgHIAAiFIAmAAIAACGQAAATgIAPQgGAPgMAMQgLAKgQAGQgPAGgSAAQgSAAgPgGg");
	this.shape_12.setTransform(-10.55,21.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_13.setTransform(-30.025,21.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AhKBqIAAjTIBHAAQAPAAAOADQAOADALAHQALAHAGAMQAHAMAAARQAAAUgHANQgHALgMAHQgLAHgQACQgPACgQAAIgbAAIAABYgAgkgNIAXAAIAQgBQAIAAAIgDQAHgDAFgGQAEgGAAgLQAAgKgEgGQgEgGgGgDQgIgDgIgBIgOgBIgbAAg");
	this.shape_14.setTransform(-48.15,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01a, new cjs.Rectangle(-61,0,304,45), null);


(lib.copy_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgSBqIAAixIhBAAIAAgiICnAAIAAAiIhBAAIAACxg");
	this.shape.setTransform(189,21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_1.setTransform(168.475,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_2.setTransform(147.925,21.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("ABOBqIAAivIgBAAIhACvIgaAAIhAivIgBAAIAACvIgkAAIAAjTIA6AAIA4CUIA5iUIA5AAIAADTg");
	this.shape_3.setTransform(124.4,21.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_4.setTransform(101.875,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AghBnQgQgGgLgKQgMgMgGgPQgHgPAAgTIAAiGIAmAAIAACFQAAAHADAJQACAIAGAHQAFAIAJAEQAKAFAMAAQAOAAAIgFQAJgEAGgIQAFgHADgIQADgJgBgHIAAiFIAmAAIAACGQAAATgGAPQgHAPgLAMQgLAKgQAGQgQAGgSAAQgRAAgQgGg");
	this.shape_5.setTransform(81.4,21.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_6.setTransform(58.625,21.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAjBqIgxhaIgbAAIAABaIgmAAIAAjTIBKAAQAOAAAOADQAPADALAGQALAHAGAMQAHAMAAASQAAAXgNAPQgNAPgXADIA4BegAgpgPIAdAAIAPgBQAIgBAHgCQAHgDAEgGQAEgGAAgLQAAgJgEgGQgDgFgHgDQgGgDgIgBIgOgBIggAAg");
	this.shape_7.setTransform(38.175,21.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_8.setTransform(19.175,21.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgSBqIAAixIhBAAIAAgiICnAAIAAAiIhBAAIAACxg");
	this.shape_9.setTransform(0.9,21.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AhICHIAAjUICMAAIAAAiIhmAAIAAA0IBgAAIAAAiIhgAAIAAA6IBrAAIAAAigAgShbIAdgrIAoAAIgqArg");
	this.shape_10.setTransform(-16.325,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AAMBqIAAiqIgmAlIgWgZIA/g1IAhAAIAADTg");
	this.shape_11.setTransform(-45.8,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01, new cjs.Rectangle(-54.7,0,254.39999999999998,45), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAuQgDgCgDgDQgDgEgBgEIgBgLIAAggIgOAAIAAgPIAOAAIAAgWIARAAIAAAWIAUAAIAAAPIgUAAIAAAfQAAAEACAEQACADAGAAIAGgBIAEgBIAAAPIgHACIgHABQgHAAgFgCg");
	this.shape.setTransform(155.475,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAlIAAglIgBgFQAAgEgBgDQgBgDgDgDQgDgBgFAAQgDgBgDACIgFAEIgDAGIgBAHIAAAmIgSAAIAAhHIARAAIAAALQADgFAFgEQAFgEAJAAQAHAAAFACQAFADADAEQADAEABAFQACAFAAAFIAAAtg");
	this.shape_1.setTransform(148.35,20.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAkIgJgDIgGgIQgCgDAAgGQAAgFACgFQACgEAEgCQADgDAFgBQAEgCAGgBIAJgBIAJAAIAEAAIAAgCQABgGgFgEQgFgEgHAAQgFABgFACIgIAFIgKgKQAHgFAIgDQAHgDAIAAQAIAAAFACQAFABAEAEIAFAFIADAHIABAIIAAAGIAAAoIgRAAIAAgKQgDAGgHADQgFADgHAAQgFAAgEgCgAgEAGQgFAAgDADQgCACAAAEIABAEIADADIAEACIAEABQAJgBAEgEQAEgEAAgIIAAgEIgDAAIgIAAIgIACg");
	this.shape_2.setTransform(139.85,20.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAlIAAglIgBgFQAAgEgBgDQgBgDgDgDQgDgBgFAAQgDgBgDACIgFAEIgDAGIgBAHIAAAmIgSAAIAAhHIARAAIAAALQADgFAFgEQAFgEAJAAQAHAAAFACQAFADADAEQADAEABAFQACAFAAAFIAAAtg");
	this.shape_3.setTransform(131.7,20.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAjQgIgDgFgFQgFgFgDgGQgEgIAAgIQAAgHAEgIQADgHAFgFQAFgEAIgDQAGgDAIAAQAHAAAGADQAGADAFAEQAEAFADAHQACAIAAAIIAAAGIg2AAQABAHAGAFQAFAEAHABQAGAAAGgEQAEgCAEgEIAMAKQgGAHgIADQgIAEgIAAQgIAAgGgDgAASgGQAAgIgEgFQgFgEgJgBQgHABgEAEQgFAFgCAIIAkAAIAAAAg");
	this.shape_4.setTransform(123.1,20.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAuQgDgCgDgDQgDgEgBgEIgBgLIAAggIgOAAIAAgPIAOAAIAAgWIARAAIAAAWIAUAAIAAAPIgUAAIAAAfQAAAEACAEQACADAGAAIAGgBIAEgBIAAAPIgHACIgHABQgHAAgFgCg");
	this.shape_5.setTransform(115.825,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPAlIAAglIAAgFQgBgEgBgDQgBgDgDgDQgCgBgGAAQgDgBgDACIgFAEIgDAGIgBAHIAAAmIgSAAIAAhHIASAAIAAALQACgFAFgEQAGgEAHAAQAIAAAFACQAFADADAEQADAEACAFQABAFAAAFIAAAtg");
	this.shape_6.setTransform(108.7,20.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA2IAAhHIARAAIAABHgAgHgiQgDgDAAgFQAAgFADgDQADgCAEAAQAFAAADACQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_7.setTransform(102.45,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAkIgJgDIgGgIQgCgDAAgGQAAgFACgFQACgEAEgCQADgDAFgBQAEgCAGgBIAJgBIAJAAIAEAAIAAgCQABgGgFgEQgEgEgIAAQgEABgGACIgIAFIgKgKQAGgFAJgDQAHgDAIAAQAIAAAFACQAFABAEAEIAFAFIACAHIACAIIAAAGIAAAoIgRAAIAAgKQgDAGgHADQgFADgHAAQgFAAgEgCgAgEAGQgFAAgDADQgCACAAAEIABAEIADADIAEACIAEABQAJgBAEgEQAFgEgBgIIAAgEIgDAAIgIAAIgIACg");
	this.shape_8.setTransform(96.3,20.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmAlIAAgoIgBgGIgCgGQgBgCgDgBQgCgCgFABQgEgBgDACQgDACgBACIgDAGIgBAHIAAAmIgRAAIAAgqQAAgGgDgFQgDgDgGAAQgFgBgDACIgFAEQgCACgBAEIgBAHIAAAmIgSAAIAAhHIARAAIAAALIABAAQACgFAFgEQAGgEAJAAQAQAAAFANQAEgGAGgEQAGgDAIAAQAHAAAFACQAFADADAEQADAFABAFQACAFAAAHIAAAqg");
	this.shape_9.setTransform(85.925,20.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAlIAAhHIASAAIAAALIAAAAQADgGAFgEQAFgDAIAAIADABIADAAIAAARIgEAAIgFAAQgGAAgEABQgEADgBADIgCAGIgBAFIAAAlg");
	this.shape_10.setTransform(72.525,20.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAjQgHgDgFgFQgFgFgDgGQgDgIAAgIQAAgHADgIQADgHAFgFQAFgEAHgDQAIgDAHAAQAHAAAGADQAHADAEAEQAEAFADAHQADAIAAAIIAAAGIg2AAQAAAHAGAFQAGAEAGABQAHAAAFgEQAEgCAEgEIAMAKQgGAHgIADQgHAEgJAAQgHAAgIgDgAATgGQgBgIgFgFQgEgEgJgBQgHABgFAEQgEAFgBAIIAkAAIAAAAg");
	this.shape_11.setTransform(64.9,20.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAuQgDgCgDgDQgDgEgBgEIgBgLIAAggIgOAAIAAgPIAOAAIAAgWIARAAIAAAWIAUAAIAAAPIgUAAIAAAfQAAAEACAEQACADAGAAIAGgBIAEgBIAAAPIgHACIgHABQgHAAgFgCg");
	this.shape_12.setTransform(57.625,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAjQgHgDgFgFQgFgFgDgGQgDgIAAgIQAAgHADgIQADgHAFgFQAFgEAHgDQAIgDAHAAQAHAAAGADQAHADAEAEQAEAFADAHQADAIAAAIIAAAGIg2AAQAAAHAGAFQAGAEAGABQAHAAAFgEQAEgCAEgEIAMAKQgGAHgIADQgHAEgJAAQgHAAgIgDgAATgGQgBgIgFgFQgEgEgJgBQgHABgFAEQgEAFgBAIIAkAAIAAAAg");
	this.shape_13.setTransform(50.5,20.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPA5IAAglIAAgGQAAgEgCgDQgBgDgDgDQgDgBgFAAQgDAAgDABIgFAEIgDAGIgBAGIAAAoIgSAAIAAhxIASAAIAAA0IAAAAQADgFAFgDQAFgEAIAAQAHAAAFACQAFADADAEQADAEACAEQABAFAAAFIAAAug");
	this.shape_14.setTransform(41.9,18.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAjQgHgDgFgFQgGgFgDgGQgDgIAAgIQAAgHADgIQADgHAGgFQAFgEAHgDQAHgDAIAAQAGAAAHADQAHACAGAGIgNANIgGgGQgEgBgDAAQgFgBgDACIgHAFIgEAHIgCAHIACAIIAEAHIAHAFQADACAFAAQAEAAADgCIAGgFIAMAMIgGAGIgHACIgHACIgFABQgIAAgHgDg");
	this.shape_15.setTransform(34.325,20.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgA1IgJgZIgtAAIgKAZIgVAAIAuhpIAPAAIAuBpgAAQANIgQgqIgQAqIAgAAg");
	this.shape_16.setTransform(25.025,19.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA3F55").s().p("At5DNIAAmZIbzAAIAAGZg");
	this.shape_17.setTransform(89,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cta, new cjs.Rectangle(0,0,178,41), null);


(lib.bg_lightblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E6F4").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_lightblue, new cjs.Rectangle(0,0,300,600), null);


(lib.bg_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("A3bbWMAAAg2rMAu3AAAMAAAA2rg");
	this.shape.setTransform(150,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(0,0,300,350), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:true},1).wait(6).to({_off:false},0).wait(18).to({_off:true},1).wait(19));

	// spray_01_png
	this.instance_1 = new lib.spray_anim("synched",0);
	this.instance_1.setTransform(130.65,21.15,1,0.3428,0,0,0,72.7,44.1);
	this.instance_1.alpha = 0.5781;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(18).to({startPosition:1},0).to({_off:true},1).wait(19));

	// spray_01_png
	this.instance_2 = new lib.spray_anim("synched",0);
	this.instance_2.setTransform(134.65,21.15,1.0533,1.2976,0,0,0,72.8,44);
	this.instance_2.alpha = 0.5781;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(29).to({startPosition:2},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(18).to({startPosition:0},0).to({_off:true},1).wait(19));

	// spray_01_png
	this.instance_3 = new lib.spray_anim("synched",0);
	this.instance_3.setTransform(130.65,21.15,1,1,0,0,0,72.7,44.1);
	this.instance_3.alpha = 0.5781;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(27).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(18).to({startPosition:1},0).to({_off:true},1).wait(19));

	// spray_01_png
	this.instance_4 = new lib.spray_anim("synched",0);
	this.instance_4.setTransform(130.65,21.15,1,1,0,0,0,72.7,44.1);
	this.instance_4.alpha = 0.5781;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(18).to({startPosition:1},0).to({_off:true},1).wait(19));

	// Layer_8
	this.instance_5 = new lib.spray_mist("synched",0);
	this.instance_5.setTransform(154.3,26.8,0.5267,0.5267,0,0,0,150,150.1);
	this.instance_5.alpha = 0.3398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(27).to({startPosition:1},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(18).to({startPosition:0},0).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-101.7,276.5,273.7);


(lib.germs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AREDYIgNgFQgIgDgEgDQgEgDADgLIgNgZQgKgTANAIQANAIAHgDQAGgDgJgUQgJgUAKgEQAJgEAJAFQAFACABAQQAIgKAHAFQAKAJADAIQAGANgGAAIgGgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAJAKIAMALQADAHgBAGQgBAGgFADQgFADgGgCIgEgBIgDgBQgGgGgCABQgCABAAAFIABAIQAAAFgBABIgHADIgCAAIgGgBg");
	var mask_graphics_19 = new cjs.Graphics().p("AQgDxIgdgGQgRgEgIgFQgJgFAKgYQgIgMgRgjQgRgjAcAMQAcAMAQgIQAQgIgQgmQgQgmAXgKQAXgJAUAGQAJAEgBAfQAXgVAMAIQAXAPAFAPQAJAZgOACIgMAAQgGAAAAACQgBABAUAQQAWARACAEQAHAMgEANQgEANgNAHQgMAIgOgDIgKgCIgGgBQgNgJgFACQgEACAAAJIAAARQgBAKgEACQgLAHgGABIgIABIgKgBg");
	var mask_graphics_20 = new cjs.Graphics().p("AP8EKIgsgIQgagFgNgHQgNgHAQglQgLgQgYg0QgZg0ArARQArAQAZgMQAZgMgWg5QgXg3AkgPQAkgQAfAJQAOAEgDAuQAjggAUAMQAiAVAIAWQAMAlgWADIgSABQgKAAgBADQAAABAeAXQAgAYAEAGQAKARgIAUQgHAUgTAMQgUALgVgEIgPgCIgJgBQgUgNgIADQgGADgBAOIgBAZQgCAPgGAEQgSAKgJADQgHACgIAAIgOgBg");
	var mask_graphics_21 = new cjs.Graphics().p("APaEiIg8gKQgjgGgRgJQgSgJAWgwQgNgWgghEQgghEA5AVQA6AVAigRQAigRgdhIQgehKAxgWQAxgWAqAMQASAFgFA+QAxgsAaAQQAuAbAKAdQAQAvgfAGIgYABQgNAAgBAEQgBACAoAeQArAfAFAIQANAWgKAbQgKAagbAQQgbAPgcgFIgUgCIgNgBQgagRgLAFQgIAEgCASIgCAiQgCATgJAFQgZAPgMADQgKADgMAAIgQgBg");
	var mask_graphics_22 = new cjs.Graphics().p("AO3E6IhKgMQgsgGgWgLQgWgLAdg8QgRgcgnhTQgohVBIAaQBIAZArgVQArgWgkhaQgjhbA9gbQA+gcA0AOQAXAGgHBNQA+g3AgATQA6AhALAkQAUA8gmAHIgfACQgQAAgCAFQgBACAzAkQA1AmAGAKQAPAbgNAhQgMAhgiAUQgiATgjgFIgagCIgQgDQgggUgOAHQgLAEgCAXIgDAqQgDAYgLAHQgfARgQAFQgNAEgPAAQgJAAgLgBg");
	var mask_graphics_23 = new cjs.Graphics().p("AOWFRIhagNQg0gHgagNQgbgNAjhIQgUggguhkQgvhjBWAdQBWAdA0gZQAzgZgqhsQgqhsBKghQBKgiA/AQQAcAHgJBcQBKhCAnAWQBFAnANArQAXBHgtAJQgHABgeABQgTAAgDAHQgBACA8ArQBAAsAHAMQASAggPAoQgQAogoAXQgpAXgqgGIgfgCQgSgCgCgBQgmgXgRAHQgMAGgEAbIgEAyQgDAcgOAIQglAWgTAGQgQAFgSAAQgLAAgMgCg");
	var mask_graphics_24 = new cjs.Graphics().p("AN0FoIhogOQg8gJgfgOQgfgPAqhUQgYglg1hzQg2hyBlAiQBjAgA8gdQA9gegxh9Qgwh9BWgmQBXgnBJASQAgAIgLBqQBXhNAtAaQBPAsAQAyQAaBSg1ALQgIABgiABQgXABgDAHQgBADBFAxQBKAzAIAOQAWAlgTAuQgSAugvAbQgwAcgxgHIgkgDQgUgCgCgBQgtgbgTAJQgPAGgEAgIgFA6QgEAhgQAJQgsAZgWAHQgTAGgWAAQgMAAgOgCg");
	var mask_graphics_25 = new cjs.Graphics().p("ANUGSIh3gQQhEgJgjgRQgjgQAvhfQgagqg9iCQg8iBByAlQBxAkBFggQBEgjg2iNQg3iNBjgsQBigtBTAUQAlAJgNB4QBjhXAzAdQBbAyARA4QAeBdg9AMQgJACgnACQgaAAgDAJQgCADBPA3QBUA6AJAQQAYApgVA1QgVA0g2AfQg2Afg4gIIgogDQgYgBgCgBQgzgfgWAKQgRAHgFAkQgDAsgCAWQgFAlgTALQgxAcgZAIQgWAHgZAAQgOAAgPgCg");
	var mask_graphics_26 = new cjs.Graphics().p("AM0HBIiFgRQhNgLgmgSQgogTA2hpQgegvhDiRQhDiQB/ApQB/ApBNglQBMgng8idQg9ieBvgxQBugyBdAWQApAKgPCGQBvhiA6AgQBkA4AUA+QAhBohEAOQgKACgsACQgdAAgEAKQgBADBYA+QBeBAAKASQAbAugYA7QgYA6g8AjQg9Ajg/gJIgtgDQgagCgDgBQg4gigZALQgTAJgGAoQgDAxgDAYQgGApgVAMQg3AggcAJQgZAIgcAAQgQAAgQgCg");
	var mask_graphics_27 = new cjs.Graphics().p("AMUHvIiSgTQhVgLgrgUQgrgUA7h1QghgzhJigQhKifCMAtQCMAtBVgpQBVgrhCitQhDiuB6g2QB6g4BnAYQAtALgRCUQB7hsBAAjQBvA+AVBEQAkBzhLAPQgLACgwACQggABgFAKQgBAEBhBEQBnBGAMAUQAdAzgaBAQgbBBhDAmQhDAnhFgJIgygEQgdgBgDgCQg+glgbAMQgWAJgGAtQgEA2gDAaQgGAugXANQg+AkgfAJQgbAJggAAQgRAAgSgCg");
	var mask_graphics_28 = new cjs.Graphics().p("AL1IcIiggUQhcgMgvgWQgvgWBAiAQgjg3hQiuQhRiuCaAyQCZAwBcgtQBdgvhIi9QhIi9CFg8QCGg9BwAaQAxAMgTChQCHh1BFAmQB6BDAXBKQAnB9hSARQgMACg1ADQgjAAgFAMQgBAEBqBKQBxBNAMAVQAgA4gdBGQgdBGhJAqQhKArhLgKIg3gEQgfgCgEgCQhDgogeANQgYALgGAwQgFA7gEAcQgHAzgZAOQhDAngiALQgeAJgjAAQgSAAgUgCg");
	var mask_graphics_29 = new cjs.Graphics().p("ALXJIIitgVQhlgNgygYQg0gXBHiKQgng9hWi8QhXi7CmA1QCmA0BkgxQBlgzhOjMQhOjNCRhBQCQhCB6AdQA1AMgUCuQCSh/BLApQCDBIAZBRQArCHhZASQgNADg6ACQglABgGANQgCAEB0BQQB6BTANAXQAjA8ggBMQggBMhPAuQhQAuhRgLIg8gEQgigCgEgBQhJgsggAOQgaAMgHA0QgFBAgEAeQgIA3gbAQQhJAqglALQghALgmAAQgTAAgVgDg");
	var mask_graphics_30 = new cjs.Graphics().p("AK5J0Ii6gXQhsgOg3gZQg3gaBMiUQgphBhdjKQhejJCzA5QCzA3Bsg0QBtg3hUjbQhUjcCchGQCbhHCDAeQA5AOgWC7QCeiJBQAsQCOBNAaBXQAuCRhgAUQgOACg+ADQgoABgGAOQgCAFB8BVQCDBZAOAZQAlBAgiBSQgiBShVAxQhWAxhYgLIhAgEQgkgCgEgCQhPgvgjAQQgcAMgIA4QgFBFgEAhQgJA6gdARQhPAugnAMQgkAMgpAAQgVAAgWgDg");
	var mask_graphics_31 = new cjs.Graphics().p("AKcKeIjHgYQh0gOg6gbQg7gbBSifQgshFhkjXQhjjXC/A8QC/A7Bzg4QB0g6hZjqQhZjrCmhLQCnhMCMAgQA9AOgYDIQCpiSBVAvQCYBSAcBdQAwCbhmAUQgPADhCAEQgrABgHAOQgCAFCEBcQCMBeAQAbQAoBFglBXQglBXhbA1QhcA1hegMIhEgEQgngCgEgDQhVgyglARQgdANgJA8QgGBJgEAkQgJA+ggASQhUAxgqANQgmAMgtAAQgWAAgXgDg");
	var mask_graphics_32 = new cjs.Graphics().p("AJ/LIIjUgZQh6gPg+gdQg/gdBXioQgvhKhpjkQhqjlDLBAQDLA/B7g8QB8g+hfj4Qhfj6CxhPQCyhRCUAiQBBAPgaDUQC0ibBbAxQChBXAeBjQA0CkhtAWQgQAEhHADQguACgHAPQgCAFCNBhQCVBlAQAbQAqBKgnBcQgnBdhhA4QhiA5hjgNIhJgEQgqgDgEgCQhag1goASQgfAOgJA/QgGBOgFAmQgKBCghATQhaA0gtAOQgoANgwAAQgXAAgZgDg");
	var mask_graphics_33 = new cjs.Graphics().p("AJjLxIjggaQiCgRhBgdQhDgfBciyQgxhOhvjyQhvjxDWBEQDWBCCDhAQCDhBhkkHQhkkIC7hUQC8hWCdAkQBEAQgbDgQC/ikBgA0QCqBcAgBoQA2CuhzAYQgRADhKAEQgxABgHAQQgDAGCVBnQCdBqARAdQAtBOgpBiQgqBihmA7QhoA8hpgNIhNgFQgsgCgFgDQhfg4gqATQghAPgKBDQgGBSgGAoQgKBGgjAVQhfA2gwAQQgrAOgyAAQgZAAgagEg");
	var mask_graphics_34 = new cjs.Graphics().p("AJIMaIjtgcQiIgRhGggQhFggBhi8Qg0hRh1j/Qh1j+DiBHQDiBFCJhDQCKhFhpkVQhpkVDFhZQDGhaCmAlQBIARgdDsQDJitBmA3QCzBhAhBtQA5C3h5AZQgSAEhOAEQg0ACgIAQQgCAGCdBsQClBwASAfQAwBSgsBnQgsBnhsA/QhtA/hwgOIhRgFQgugCgFgDQhkg7gtAUQgiAQgKBGQgIBXgFAqQgLBKglAVQhkA6gzAQQgtAPg1AAQgaAAgbgDg");
	var mask_graphics_35 = new cjs.Graphics().p("AItNBIj5gdQiPgShJghQhJgiBmjFQg3hVh5kLQh8kLDtBKQDuBJCQhGQCRhJhukjQhvkjDQhdQDQhfCuAnQBMASgfD4QDTi2BrA6QC8BlAjBzQA8DAiAAaQgSAEhTAEQg2ACgIARQgDAHClBxQCuB1ATAhQAxBWguBsQguBshxBCQhzBCh1gOIhVgFQgxgDgFgCQhpg+gvAVQgkAQgLBKQgIBbgGAsQgLBOgnAWQhpA9g1ARQgwAPg4AAQgbAAgcgDg");
	var mask_graphics_36 = new cjs.Graphics().p("AISNnIkEgeQiWgShMgjQhLgjBqjOQg6hah/kXQiBkXD4BOQD4BMCYhKQCXhNhzkvQhzkxDZhhQDahkC2ApQBPASggEEQDdi/BwA9QDFBqAkB4QA/DJiGAbQgTAEhWAFQg5ACgJASQgCAHCsB2QC2B6AUAiQA0BagxByQgwBxh3BFQh4BFh6gPQgYgChCgDQgygDgGgDQhuhAgxAWQgmARgLBOQgIBfgHAuQgMBRgpAYQhuA/g3ASQgyAQg7AAQgcAAgegEg");
	var mask_graphics_37 = new cjs.Graphics().p("AH4ONIkPgfQidgThOgkQhQglBvjXQg7heiGkjQiGkjEEBRQECBPCehNQCehQh4k8Qh4k+DjhmQDjhoC/AqQBSATgiEPQDnjHB1A/QDNBvAmB9QBBDSiLAdQgUAEhaAFQg7ABgJAUQgDAHCzB7QC/CAAUAjQA2BegyB2QgzB2h8BIQh9BJiAgQQgYgChFgDQg1gDgGgDQhzhDgzAXQgoARgMBRQgIBkgHAwQgMBUgrAZQhzBDg6ASQg0ARg+AAQgdAAgfgEg");
	var mask_graphics_38 = new cjs.Graphics().p("AHfOyIkaghQikgThRgmQhTgmB0jgQg+hhiLkvQiMkvEOBUQENBTClhRQClhTh9lJQh9lLDshqQDthtDGAtQBWAUgjEaQDwjQB5BCQDWBzAoCCQBEDaiRAeQgWAFheAFQg9ACgJATQgDAIC7CAQDGCFAVAlQA4Bhg0B7Qg1B7iBBLQiDBMiFgRQgZgChIgDQg3gDgGgDQh4hGg1AYQgpATgNBUQgIBngHAyQgNBYgtAaQh3BFg9ATQg2AShBAAQgeAAgggEg");
	var mask_graphics_39 = new cjs.Graphics().p("AHGPWIklgiQiogUhWgnQhWgnB5jpQhBhliQk6QiSk7EZBXQEYBWCqhUQCshWiClWQiClXD2huQD2hxDOAuQBZAVglEkQD6jXB+BEQDeB3ApCHQBGDjiWAfQgWAFhiAFQhAACgJAVQgEAHDCCFQDOCKAWAmQA6Blg2CAQg3CAiGBOQiIBOiKgRQgagChLgDQg5gDgGgDQh8hJg3AZQgsATgMBYQgJBrgIA0QgNBbgvAbQh8BIg/AUQg4AShDAAQgfAAgigEg");
	var mask_graphics_40 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");
	var mask_graphics_141 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");
	var mask_graphics_150 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:114.1416,y:21.7192}).wait(1).to({graphics:mask_graphics_19,x:117.8186,y:24.2207}).wait(1).to({graphics:mask_graphics_20,x:121.4446,y:26.6897}).wait(1).to({graphics:mask_graphics_21,x:125.0142,y:29.1213}).wait(1).to({graphics:mask_graphics_22,x:128.5266,y:31.5144}).wait(1).to({graphics:mask_graphics_23,x:131.9816,y:33.8685}).wait(1).to({graphics:mask_graphics_24,x:135.379,y:36.1835}).wait(1).to({graphics:mask_graphics_25,x:138.7189,y:36.5086}).wait(1).to({graphics:mask_graphics_26,x:142.0012,y:36.2879}).wait(1).to({graphics:mask_graphics_27,x:145.2259,y:36.0711}).wait(1).to({graphics:mask_graphics_28,x:148.393,y:35.8581}).wait(1).to({graphics:mask_graphics_29,x:151.5024,y:35.649}).wait(1).to({graphics:mask_graphics_30,x:154.5542,y:35.4438}).wait(1).to({graphics:mask_graphics_31,x:157.5484,y:35.2425}).wait(1).to({graphics:mask_graphics_32,x:160.4849,y:35.045}).wait(1).to({graphics:mask_graphics_33,x:163.3638,y:34.8514}).wait(1).to({graphics:mask_graphics_34,x:166.185,y:34.6617}).wait(1).to({graphics:mask_graphics_35,x:168.9486,y:34.4758}).wait(1).to({graphics:mask_graphics_36,x:171.6545,y:34.2939}).wait(1).to({graphics:mask_graphics_37,x:174.3028,y:34.1158}).wait(1).to({graphics:mask_graphics_38,x:176.8934,y:33.9416}).wait(1).to({graphics:mask_graphics_39,x:179.4264,y:33.7712}).wait(1).to({graphics:mask_graphics_40,x:180.2504,y:38.1563}).wait(101).to({graphics:mask_graphics_141,x:180.2504,y:38.1563}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_150,x:180.2504,y:38.1563}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_5
	this.instance = new lib.germs_group();
	this.instance.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(123).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(39));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("AFQQtQjpAGqfglQqhglGljkQGjjkAXjaQAWjbq/hEQrAhCA0kzQAxk0EWiyQB6hMHKDLQh4lzDthVQGhiYEMAlQHBA7heCoQgOAYhWBkQg6BAAZAWQAKAHGdh0QGyh8BWAAQDjAACjB/QCiB/AACyQAACziiB/QgeAZhOBIQg9A3gLAFQjzBRgMBFQgJA1CHA/QCsBGBQAlQCNBCAAA9QAACkgbBKQgkBih7BgQiRByjFCeQjICciVA/QgeANgjAAQiMAAjbjLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AGjU4QkjAItGguQtJguIOkeQILkdAdkQQAbkStuhVQtxhTBCl/QA9mCFcjeQCYhgI8D/QiVnQEohrQIJi+FPAuQIyBLh2DRQgRAfhrB8QhKBRAgAbQAMAJIFiRQIficBrAAQEcAADLCfQDLCfAADfQAADgjLCfQgkAfhiBaQhMBFgPAGQkvBlgPBWQgMBCCpBPQDXBYBkAuQCwBTAABMQAADNgiBcQgsB7iaB5Qi1CNj3DGQj6DDi6BPQglAQgsAAQivAAkTj+g");
	var mask_1_graphics_38 = new cjs.Graphics().p("AHzY0QlaAKvlg3Qvog3JxlTQJulUAjlDQAglGwUhkQwXhjBPnIQBInKGdkIQC1hyKoEvQixonFgiAQJrjhGOA2QKcBZiLD4QgVAliACUQhXBgAmAfQAPAMJlitQKGi5CAAAQFRAADxC9QDyC9AAEJQAAEKjyC9QgrAlh1BrQhaBSgRAHQlpB4gRBnQgPBPDJBdQEABpB3A2QDRBiAABbQAAD0goBuQg1CRi3CQQjXCokmDrQkoDpjdBdQgtASg0AAQjQABlGkug");
	var mask_1_graphics_39 = new cjs.Graphics().p("AI9chQmOALx5g/Qx9g/LOmGQLLmGAol0QAll2ywhzQyzhyBaoMQBUoOHbkwQDPiDMOFcQjMp5GUiTQLIkDHKA/QL/BmigEdQgXAqiTCrQhlBtAsAlQAQANLCjHQLljUCTAAQGEAAEVDZQEWDaAAEvQAAEzkWDZQgyAqiFB7QhoBegUAIQmeCLgUB2QgRBaDmBrQEnB5CJA/QDwBwAABpQAAEYgvB+Qg8CnjSClQj4DClREOQlVELj+BrQgzAVg8AAQjvAAl3lag");
	var mask_1_graphics_40 = new cjs.Graphics().p("AKCf/Qm9AM0FhHQ0JhGMmm2QMim1AtmhQApmk1BiBQ1FiABlpLQBdpOIVlVQDoiSNtGGQjlrGHGilQMekiIBBGQNdByi0FAQgaAvilC/QhwB8AwApQATAOMXjfQNAjuClAAQGyAAE3D0QE3D0AAFUQAAFYk3DzQg4AviWCKQh0BqgWAJQnRCbgXCEQgSBmECB5QFKCHCaBGQENB+AAB2QAAE6g0CNQhEC7jsC5QkVDal6EuQl/ErkcB5Qg6AYhDAAQkMAAmlmEg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EALDAjNQnrAN2GhOQ2LhNN3niQNznhAynLQAtnO3JiOQ3NiNBvqHQBoqJJJl3QEAihPFGtQj7sOHzi1QNulAI2BOQOzB+jGFgQgdA0i1DSQh8CIA2AtQAUAQNnj1QOUkGC1AAQHfAAFWEMQFWEMAAF3QAAF6lWEMQg+A0ilCYQiAB0gZAKQn/CrgZCSQgUBwEcCEQFrCVCpBNQEpCLAACBQAAFag5CbQhLDPkEDMQkxDvmgFNQmlFJk6CFQg/AahJAAQkoAAnPmrg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAL/AmMQoUAO3+hUQ4DhUPCoKQO9oLA2nxQAxn25GiaQ5LiZB5q9QBwrBJ7mWQEViwQXHTQkRtRIejEQO5lbJlBUQQECJjXF+QgfA4jFDkQiGCTA6AxQAXASOwkLQPhkcDFAAQIHAAFzEjQF0EjAAGXQAAGal0EjQhDA4izClQiKB+gbAKQorC6gbCeQgWB6E0CPQGKChC4BVQFCCWAACNQAAF3g/CoQhQDgkaDdQlLEDnEFpQnJFmlUCQQhEAchQAAQlBAAn2nPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAM2Ao8Qo6AP5thaQ5yhbQIovQQCowA6oWQA0oZ65ilQ6/ilCBrvQB4rzKpm0QEqi8RiH0QkluOJFjSQP9l0KSBaQROCTjnGZQghA8jTD1QiQCdA+A1QAYATP0keQQpkwDTAAQIsAAGPE4QGOE4AAG0QAAG3mOE4QhIA8jACxQiVCHgdALQpSDHgdCpQgYCDFLCaQGmCtDEBaQFaCiAACWQAAGShDC0QhXDxkuDsQljEWnkGDQnpGAltCaQhJAehWAAQlYAAoanwg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EANpArcQpeAQ7RhgQ7XhfRGpSQRCpSA9o3QA4o68kivQ8oivCJsdQCAsiLTnOQE7jISnITQk2vFJojfQQ8mLK5BgQSSCbj1GzQgjA/jgEEQiZCnBCA4QAaAUQykvQRqlDDgAAQJOAAGnFLQGmFLAAHOQAAHTmmFLQhNBAjLC7QieCPgfAMQp3DUgeCzQgaCLFfCjQHAC4DRBfQFuCsAACfQAAGrhHC/QhbD/lBD8Ql5EnoCGaQoHGXmDCkQhOAghbAAQltAAo6oPg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAOWAttQp9AR8shlQ8zhkSApxQR6pyBApTQA7pY+Ci5Q+Ji3CRtIQCGtLL4nmQFNjSTlIuQlHv4KIjqQR1mgLeBlQTOCjkBHKQglBDjsERQigCwBFA7QAbAVRqk/QSllUDsAAQJtAAG8FcQG9FcAAHnQAAHrm9FcQhQBDjWDFQimCXggANQqYDeggC9QgbCSFxCsQHYDBDbBlQGCC0AACoQAAHBhLDJQhhENlREIQmME2odGxQojGsmXCsQhSAihfAAQmAAApZorg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EAO/AvvQqaAS99hpQ+EhqSyqMQStqNBDpvQA+py/YjBQ/ejACXtsQCMtxMan8QFbjbUdJHQlVwlKlj1QSnmyL+BpQUGCrkNHeQgnBGj2EdQioC4BJA9QAcAWSclNQTaljD2AAQKJAAHQFsQHQFrAAH9QAAIAnQFsQhUBGjgDOQitCeghANQq2DogiDFQgcCZGCCzQHtDKDlBpQGTC8AACwQAAHVhPDSQhkEYlhEUQmeFFo1HDQo6G/mpC0QhWAjhkAAQmRAApzpDg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EAPjAxiQqzAS/FhtQ/NhtTgqmQTaqlBGqGUABAgKKggkgDIUggpgDHACdgONQCRuSM4oPQFojjVOJcQlixMK+j+QTUnCMbBtQU2CxkXHwQgoBIkAEoQiuC/BMA/QAdAXTIlZQUIlxEAAAQKhAAHiF6QHhF5AAIPQAAIUnhF6QhXBIjpDWQizCkgjANQrQDxgjDNQgdCeGRC6QH+DRDuBtQGiDEAAC2QAAHmhRDaQhpEjltEfQmuFQpKHUQpQHQm5C6QhZAmhnAAQmgAAqLpZg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAQCAzFUgLIAATggEgBxUggLgBwAUHgK7QUBq6BIqaUABBgKfghkgDOUghrgDNACigOqQCVuuNSogQFzjrV5JwQltxvLUkGQT7nQM0BwQVfC3kfH/QgqBLkHExQi0DFBOBBQAeAYTvlkQUwl8EIAAQK2AAHxGFQHxGFAAIgQAAIknxGGQhaBLjvDcQi6CpgkAOQrmD4gkDTQgeCjGdDBQIPDXD1BxQGvDJAAC8QAAH2hUDhQhrEsl5EnQm7FbpdHjQpiHenHDAQhcAnhqAAQmuAAqfpsg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAQcA0ZUgLaAATgg5gBzUghAgBzAUogLNQUirNBKqqUABDgKwgicgDUUgiigDSACmgPCQCavHNnouQF9jwWcKAQl2yMLnkNQUbndNJB0QWDC7kmINQgrBNkOE4Qi5DKBQBDQAfAYUPltQVTmGEOAAQLIAAH+GQQH9GPAAIuQAAIyn9GPQhcBNj2DiQi+CtglAPQr5D/glDYQgfCnGoDGQIcDdD8BzQG6DPAADAQAAIDhWDnQhvE0mCEvQnHFjpsHwQpyHqnSDFQheAohuAAQm4AAqxp8g");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAQyA1eUgLpAAUghkgB2UghrgB2AVDgLbQU8rcBLq4UABFgK+gjJgDYUgjPgDXACpgPWQCdvaN5o5QGFj2W6KNQl/ykL3kSQU2nmNaB1QWgDAktIXQgrBOkUE/Qi8DOBRBFQAgAZUql1QVumOEUAAQLXAAIIGYQIIGXAAI5QAAI+oIGYQheBOj7DnQjCCxgmAOQsIEEgmDdQgfCrGwDJQInDiEBB2QHDDTAADEQAAINhYDsQhwE6mLE1QnQFrp4H6Qp/H0ncDJQhgAohwAAQnBABq/qJg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EARDA2TUgL1AAUgiGgB3UgiNgB4AVYgLnQVSrmBMrEUABGgLJgjsgDbUgjygDaACrgPlQCfvqOIpCQGKj6XRKXQmEy2MCkXQVLntNoB3QW3DDkyIfQgsBQkYFEQi/DRBSBGQAgAZU/l7QWEmUEYAAQLiAAIRGeQIQGeAAJCQAAJHoQGeQhgBPj+DrQjGCzgmAPQsVEIgmDgQggCuG3DMQIwDmEFB3QHKDWAADIQAAIVhZDvQhzE/mQE6QnXFxqDICQqJH8njDMQhiAphxAAQnJAArJqTg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EARPA26UgL+AAUgidgB5UgilgB5AVngLvQVhrvBNrLUABHgLRgkGgDeUgkLgDcACtgPwQChv1ORpJQGPj8XiKfQmJzEMLkaQVanzNxB5QXHDFk1IlQgtBQkbFIQjBDUBTBGQAgAZVOl/QWUmYEbAAQLqAAIWGjQIWGiAAJIQAAJOoWGiQhhBRkBDtQjHC1gnAPQsdELgnDjQggCvG8DPQI2DoEHB5QHQDYAADKQAAIbhaDyQh0FCmWE+QncF1qJIHQqQICnpDOQhjAqhyAAQnOAArRqag");
	var mask_1_graphics_53 = new cjs.Graphics().p("EARWA3QUgMCAAVgisgB6Ugi0gB6AVwgLzQVqr0BOrQUABHgLWgkUgDfUgkbgDeACvgP2QChv8OYpMQGRj+XrKjQmLzMMQkcQVjn2N3B6QXQDGk3IpQgtBRkdFJQjCDVBUBHQAgAaVXmCQWdmaEdAAQLvAAIZGlQIaGkAAJNQAAJRoaGlQhhBRkDDvQjJC2gmAQQsjEMgnDlQggCwG+DQQI6DpEKB6QHSDaAADLQAAIfhbDzQh0FFmYE/QngF4qNIKQqVIFnsDQQhjAqh0AAQnQAArWqfg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EARYA3YUgMEAAUgiwgB6Ugi4gB6AVzgL1QVsr1BOrSUABHgLXgkZgDgUgkggDeACvgP5QCjv9OZpOQGSj+XvKkQmMzOMRkdQVmn3N5B6QXTDGk3IqQguBSkdFKQjDDVBVBIQAgAZVZmCQWhmcEdAAQLxAAIaGmQIbGmAAJNQAAJTobGmQhhBRkEDvQjJC3gnAPQskEOgnDlQghCwHADRQI7DqEKB6QHTDaAADLQAAIghaD0Qh1FGmZFAQngF4qQIMQqVIGnuDQQhjAqh0AAQnRAArYqgg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EARYA3YUgMEAAUgiwgB6Ugi4gB6AVzgL1QVsr1BOrSUABHgLXgkZgDgUgkggDeACvgP5QCjv9OZpOQGSj+XvKkQmMzOMRkdQVmn3N5B6QXTDGk3IqQguBSkdFKQjDDVBVBIQAgAZVZmCQWhmcEdAAQLxAAIaGmQIbGmAAJNQAAJTobGmQhhBRkEDvQjJC3gnAPQskEOgnDlQghCwHADRQI7DqEKB6QHTDaAADLQAAIghaD0Qh1FGmZFAQngF4qQIMQqVIGnuDQQhjAqh0AAQnRAArYqgg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EARYA3YUgMEAAUgiwgB6Ugi4gB6AVzgL1QVsr1BOrSUABHgLXgkZgDgUgkggDeACvgP5QCjv9OZpOQGSj+XvKkQmMzOMRkdQVmn3N5B6QXTDGk3IqQguBSkdFKQjDDVBVBIQAgAZVZmCQWhmcEdAAQLxAAIaGmQIbGmAAJNQAAJTobGmQhhBRkEDvQjJC3gnAPQskEOgnDlQghCwHADRQI7DqEKB6QHTDaAADLQAAIghaD0Qh1FGmZFAQngF4qQIMQqVIGnuDQQhjAqh0AAQnRAArYqgg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:155.4958,y:122.5531}).wait(1).to({graphics:mask_1_graphics_37,x:146.8999,y:119.4902}).wait(1).to({graphics:mask_1_graphics_38,x:138.7952,y:116.6023}).wait(1).to({graphics:mask_1_graphics_39,x:131.1817,y:113.8894}).wait(1).to({graphics:mask_1_graphics_40,x:124.0594,y:111.3516}).wait(1).to({graphics:mask_1_graphics_41,x:117.4283,y:108.9887}).wait(1).to({graphics:mask_1_graphics_42,x:111.2884,y:106.8009}).wait(1).to({graphics:mask_1_graphics_43,x:105.6396,y:104.7882}).wait(1).to({graphics:mask_1_graphics_44,x:100.4821,y:102.9504}).wait(1).to({graphics:mask_1_graphics_45,x:95.8158,y:101.2877}).wait(1).to({graphics:mask_1_graphics_46,x:91.6406,y:99.8}).wait(1).to({graphics:mask_1_graphics_47,x:87.9567,y:98.4873}).wait(1).to({graphics:mask_1_graphics_48,x:84.7639,y:97.3496}).wait(1).to({graphics:mask_1_graphics_49,x:82.0623,y:96.387}).wait(1).to({graphics:mask_1_graphics_50,x:79.852,y:95.5994}).wait(1).to({graphics:mask_1_graphics_51,x:78.1328,y:94.9868}).wait(1).to({graphics:mask_1_graphics_52,x:76.9048,y:94.5492}).wait(1).to({graphics:mask_1_graphics_53,x:76.168,y:94.2867}).wait(1).to({graphics:mask_1_graphics_54,x:77.869,y:94.1992}).wait(87).to({graphics:mask_1_graphics_141,x:77.869,y:94.1992}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_150,x:77.869,y:94.1992}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_10
	this.instance_1 = new lib.germs_group();
	this.instance_1.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(105).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(39));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AGoIXQgSABg2gEQg2gDAigYQAhgXACgXQACgWg4gHQg5gHAEgfQAEggAXgSQAJgIAlAVQgKgmATgJQAigPAVAEQAkAGgHARIgIANQgFAGACACQABABAhgMQAjgMAHAAQASgBANAOQANANAAASQAAASgNANIgJAKIgFAGQgUAIgBAHQgBAGALAGIAUALQAMAHAAAGQAAARgCAIQgDAKgKAKIgcAbQgQAQgMAHIgFABQgLAAgSgVg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AGVImQgYAAhEgEQhFgFArgeQArgeACgcQADgchIgJQhIgJAGgoQAFgoAcgXQAMgKAvAbQgMgxAYgLQAqgUAcAFQAtAIgJAWIgKAQQgGAIACADQABABAqgPQAtgQAIAAQAYAAAQAQQARARAAAXQAAAXgRARIgLAMIgHAIQgZALgBAJQgBAHAOAIIAZAOQAPAIAAAIQAAAWgDAJQgEANgMANIgjAjQgUAUgQAIQgDACgDAAQgPAAgWgag");
	var mask_2_graphics_3 = new cjs.Graphics().p("AGCI0QgdABhSgGQhTgGAzgkQA0gkADgiQADgjhXgKQhXgLAHgwQAGgxAigcQAPgMA4AgQgOg6AdgOQAzgXAhAFQA4AKgMAaIgMAUQgHAKADADQABABAzgSQA1gUALAAQAcAAAUAUQAUAUAAAcQAAAdgUAUIgNAPIgJAJQgeANgBALQgCAIARAKIAfARQARALABAJQAAAagEAMQgEAPgPAPIgrArQgYAZgTAKQgDACgFAAQgRAAgbggg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AFvJBQghAChhgHQhigHA9gqQA9gqADgoQADgphlgMQhmgNAHg4QAHg5ApghQARgOBCAmQgRhFAigQQA8gcAnAHQBBALgNAfIgPAXQgIAMADAEQACABA8gVQA+gXANAAQAhAAAXAXQAYAYAAAgQAAAigYAXIgPASIgLALQgjAPgCANQgBAJATAMIAlAUQAUAMAAALQAAAfgEANQgFASgSASIgxAyQgdAdgVAMQgFACgFAAQgUAAgggmg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AFdJPQgnABhvgHQhvgIBFgwQBFgxAEguQAEguh0gOQh1gOAJhBQAIhBAugmQAUgQBMArQgUhOAngSQBFggAtAHQBKANgQAjQgCAFgOAWQgKANAEAFQACABBEgYQBIgbAOAAQAmAAAbAbQAbAbAAAmQAAAmgbAbIgSAUIgMANQgoARgCAOQgCAMAXANIAqAXQAXANAAANQAAAjgFAQQgGAUgUAVIg5A5QghAhgYANQgFADgGAAQgXAAgkgrg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AFKJdQgrABh9gJQh+gIBPg3QBOg2AEg0QAEg0iDgQQiCgQAKhJQAJhJAzgqQAWgSBWAwQgXhYAtgUQBNglAyAJQBUAOgSAoQgCAGgQAYQgLAPAFAFQABACBNgcQBRgdAQAAQAqAAAfAeQAeAeAAAqQAAArgeAeIgUAXQgMANgCABQgtAUgCAQQgCANAZAPIAvAZQAaAQAAAPQAAAngFARQgGAXgXAXIhABBQglAlgcAPQgFADgHAAQgaAAgpgwg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AE4JqQgwACiLgKQiKgKBWg8QBWg8AFg6QAFg5iRgSQiRgSALhRQAKhRA5gvQAagUBdA2QgZhiAxgXQBXgnA3AJQBdAPgTAtQgDAGgSAaQgMARAFAGQACACBVgfQBaghASAAQAvAAAhAiQAiAiAAAuQAAAwgiAhIgWAaQgMAOgDACQgyAVgCASQgCAOAcARIA0AcQAdASAAAQQAAArgGAUQgHAZgaAaIhGBHQgqAqgeAQQgHAEgHAAQgdAAgtg2g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AEmJ3Qg1ACiYgLQiYgKBfhCQBfhCAFhAQAFg/ifgUQifgTAMhZQALhZA/g0QAbgWBnA7QgbhrA2gYQBegsA9ALQBmARgVAvQgDAIgUAcQgNATAGAGQACACBeghQBigkAUAAQAzAAAlAlQAlAkAAA0QAAA0glAlIgYAcQgOAQgDABQg3AYgDATQgCAQAfASIA5AfQAgATAAASQAAAwgGAVQgIAcgcAcIhOBPQgtAtgiASQgHAEgHAAQggAAgyg7g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AEUKEQg5ACimgLQilgMBohIQBmhIAGhEQAFhFisgWQiugVANhhQAMhhBFg4QAegYBxBAQgehzA6gbQBmgwBDALQBvATgXA1QgEAIgVAeQgPAUAHAHQACACBmgkQBrgmAVAAQA4AAApAnQAoAoAAA4QAAA4goAoIgbAfQgPARgDACQg8AZgDAWQgCARAhAUIA/AhQAiAVAAAUQAAAzgGAXQgJAfgfAfIhUBVQgxAxglAUQgHAEgJAAQgjAAg2hAg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AEDKRQg+ACizgMQizgNBwhNQBvhOAGhKQAGhLi6gXQi8gXAOhoQANhpBKg8QAhgZB6BEQggh9A/gdQBug0BHAMQB4AVgZA5QgDAIgXAiQgQAVAHAHQACADBvgnQBzgqAXAAQA9AAArArQArAqAAA9QAAA9grArIgdAhQgQATgDABQhBAcgDAYQgCASAkAVQAuAYAVANQAlAWAAAVQAAA4gHAZQgJAhghAhIhbBcQg2A2gnAVQgIAEgJAAQgmAAg6hFg");
	var mask_2_graphics_11 = new cjs.Graphics().p("ADxKeQhCACi/gNQjBgOB5hTQB2hTAHhQQAGhQjIgZQjJgYAPhwQAOhxBPg/QAjgcCDBJQgiiGBEggQB2g3BNANQCAAWgbA9QgEAJgYAkQgRAYAHAIQADADB2grQB8gtAZAAQBBAAAuAuQAvAvAAA/QAABCgvAuIgeAkQgSAUgDACQhFAdgEAZQgDAUAnAXQAxAaAXANQAoAYAAAXQAAA7gHAbQgKAkgkAjIhiBjQg5A5gqAXQgJAFgKAAQgoAAg/hKg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ADgKrQhHACjMgOQjNgPCAhZQCAhZAGhUQAHhWjWgaQjXgaARh4QAOh4BVhEQAlgeCMBPQgkiQBIgiQB+g7BSAPQCJAXgcBBQgFAKgaAmQgSAZAIAJQADADB+guQCFgwAaAAQBFAAAyAyQAxAxAABEQAABGgxAyIghAlQgTAWgDACQhKAfgEAbQgDAVApAZQA1AbAYAPQArAZAAAYQAABAgIAdQgLAmglAmIhpBpQg9A9gtAZQgJAFgLAAQgrAAhDhPg");
	var mask_2_graphics_13 = new cjs.Graphics().p("ADPK3QhLADjZgQQjagPCIheQCIhfAIhaQAHhbjkgcQjkgcARh+QAQh/BahKQAngfCVBUQgniZBNgkQCGg/BXAPQCSAZgfBFQgEALgcApQgTAaAIAJQADADCGgwQCNgzAcAAQBJAAA1A0QA1A1AABKQAABJg1A1IgjAoQgUAWgDACQhPAigEAcQgDAXAsAaQA4AdAaAPQAtAbAAAaQAABEgJAeQgLApgoAoIhvBwQhBBBgwAaQgKAFgLAAQguAAhHhUg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AC/LDQhQADjlgQQjngQCQhkQCQhkAIhgQAHhfjxgeQjxgeASiGQARiGBfhNQApgiCdBZQgoiiBRgmQCPhCBbAQQCaAaggBJQgFALgdAsQgVAcAJAJQADAECOgzQCVg3AeAAQBNAAA4A4QA4A4AABNQAABOg4A4IglAqQgVAYgEACQhTAkgEAeQgDAXAuAcQA7AfAcAQQAwAdAAAaQAABIgJAgQgNArgqArIh1B2QhFBFgzAbQgKAGgMAAQgwAAhLhZg");
	var mask_2_graphics_15 = new cjs.Graphics().p("ACuLPQhUADjxgRQj0gRCYhpQCYhqAIhkQAIhlj+gfQj/gfAUiOQARiNBlhSQAsgjClBeQgrirBVgoQCXhGBgARQCjAcgiBNQgFALgfAuQgWAeAKAKQADADCVg2QCdg5AfAAQBSAAA7A7QA7A6AABSQAABSg7A7IgnAsQgWAagEACQhYAmgEAfQgDAZAwAdQA/AhAdARQAzAeAAAcQAABMgKAiQgNAtgtAtIh7B9QhJBIg1AdQgLAGgNAAQgyAAhQheg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ACeLbQhYADj+gSQkAgRCghvQCfhvAJhpQAIhrkLggQkLghAUiUQATiVBphWQAuglCuBjQgti0BagqQCehJBlASQCqAdgjBRQgFALghAxQgWAfAJAKQAEAECdg4QClg9AgAAQBWAAA+A+QA+A+AABWQAABXg+A8IgpAvQgXAbgEACQhcAogFAhQgEAaA0AfQBBAiAfASQA1AfAAAeQAABQgKAjQgOAwgvAvIiCCDQhLBMg5AeQgLAGgNAAQg2AAhThig");
	var mask_2_graphics_17 = new cjs.Graphics().p("ACOLnQhdADkJgTQkMgSCnh0QCnh0AJhvQAJhvkYgiQkYgiAVicQAUibBuhbQAwgmC2BnQgvi8BegsQCmhNBpATQCzAeglBVQgFAMgjAzQgXAhAKALQAEADCkg7QCtg/AiAAQBaAABBBBQBBBAAABbQAABbhBA/IgrAxQgYAcgFADQhgApgFAjQgEAbA2AgQBFAkAfATQA4AhAAAfQAABTgKAmQgOAxgxAxIiJCKQhPBQg7AfQgMAHgOAAQg4AAhXhng");
	var mask_2_graphics_18 = new cjs.Graphics().p("ACLLzQhgADkWgUQkYgTCvh5QCuh5AKh0QAJh0kkgkQklgkAWiiQAViiBzhfQAygoC/BsQgyjFBigtQCthRBwAUQC6AfgnBZQgGANgkA1QgYAiAKALQAEAECsg9QC0hCAkAAQBeAABEBDQBDBEAABeQAABfhDBCIgtA0QgZAdgFACQhlArgFAlQgEAcA4AiQBIAlAhAUQA7AjAAAgQAABXgMAnQgOA0gzAzIiPCQQhTBTg9AhQgNAHgOAAQg7AAhbhrg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ACRL+QhlADkhgUQkjgUC2h+QC1h/AKh4QAJh5kwglQkxgmAXioQAViqB5hiQA0grDGBxQgzjNBmgvQC1hUB0AUQDBAhgoBcQgGAOglA3QgaAkALALQAEAFCzhBQC8hEAlAAQBjAABGBGQBGBGAABiQAABkhGBGIgvA0QgaAfgFACQhpAtgFAmQgEAeA6AjQBLAnAiAUQA9AkAAAiQAABbgLAoQgQA3g1A1IiUCWQhXBWhAAjQgNAHgPAAQg9AAhfhwg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ACXMJQhpAEktgVQkvgVC+iEQC8iDALh9QAJh+k8gnQk9gmAYiwQAWixB9hmQA2gsDPB1Qg2jVBqgxQC8hXB5AVQDJAigqBgQgGAOgnA6QgaAlALAMQAEAEC6hDQDEhHAmAAQBnAABJBJQBJBJAABmQAABnhJBKIgxA2QgbAggFACQhtAvgGAoQgEAeA9AlQBNAoAkAVQBAAmAAAjQAABfgNAqQgQA4g3A4IiaCcQhaBZhDAkQgNAIgQAAQg/AAhjh1g");
	var mask_2_graphics_21 = new cjs.Graphics().p("ACdMUQhtAEk5gWQk6gWDFiIQDDiIALiCQAKiDlIgoQlJgoAZi2QAXi3CBhrQA5gtDWB5Qg4jdBvgzQDChaB+AVQDRAkgsBkQgGAOgpA8QgbAmAMANQAEAEDBhFQDLhKAoAAQBqAABMBMQBMBMAABqQAABrhMBMIgyA4QgcAhgGADQhxAwgGApQgEAgA/AmQBQAqAmAWQBBAnAAAlQAABhgMAsQgRA7g5A5IigCiQheBdhFAmQgOAHgQAAQhCAAhmh5g");
	var mask_2_graphics_22 = new cjs.Graphics().p("ACiMfQhwAElEgXQlGgWDMiNQDKiNAMiHQAKiHlUgqQlUgqAZi8QAYi+CGhuQA7gvDdB+Qg5jlByg1QDKheCCAXQDYAkgtBoQgHAPgpA9QgdAoAMANQAFAFDIhIQDShNAqAAQBuAABOBPQBPBPAABtQAABvhPBPIg0A6QgdAigGADQh1AygGArQgFAhBCAnQBTAsAnAWQBEApAAAmQAABlgNAuQgRA8g8A8IimCnQhgBhhIAnQgPAHgRAAQhEAAhqh9g");
	var mask_2_graphics_23 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");
	var mask_2_graphics_141 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");
	var mask_2_graphics_150 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:53.5008,y:55.6147}).wait(1).to({graphics:mask_2_graphics_2,x:54.5641,y:57.5948}).wait(1).to({graphics:mask_2_graphics_3,x:55.6153,y:59.5523}).wait(1).to({graphics:mask_2_graphics_4,x:56.6543,y:61.4872}).wait(1).to({graphics:mask_2_graphics_5,x:57.6812,y:63.3994}).wait(1).to({graphics:mask_2_graphics_6,x:58.6959,y:65.289}).wait(1).to({graphics:mask_2_graphics_7,x:59.6984,y:67.156}).wait(1).to({graphics:mask_2_graphics_8,x:60.6888,y:69.0003}).wait(1).to({graphics:mask_2_graphics_9,x:61.6671,y:70.8221}).wait(1).to({graphics:mask_2_graphics_10,x:62.6332,y:72.6211}).wait(1).to({graphics:mask_2_graphics_11,x:63.5871,y:74.3976}).wait(1).to({graphics:mask_2_graphics_12,x:64.5289,y:76.1514}).wait(1).to({graphics:mask_2_graphics_13,x:65.4585,y:77.8826}).wait(1).to({graphics:mask_2_graphics_14,x:66.376,y:79.5912}).wait(1).to({graphics:mask_2_graphics_15,x:67.2813,y:81.2771}).wait(1).to({graphics:mask_2_graphics_16,x:68.1745,y:82.9404}).wait(1).to({graphics:mask_2_graphics_17,x:69.0556,y:84.5811}).wait(1).to({graphics:mask_2_graphics_18,x:68.62,y:86.1991}).wait(1).to({graphics:mask_2_graphics_19,x:67.3351,y:87.7945}).wait(1).to({graphics:mask_2_graphics_20,x:66.0684,y:89.3673}).wait(1).to({graphics:mask_2_graphics_21,x:64.82,y:90.9174}).wait(1).to({graphics:mask_2_graphics_22,x:63.5898,y:92.445}).wait(1).to({graphics:mask_2_graphics_23,x:63.3567,y:94.733}).wait(118).to({graphics:mask_2_graphics_141,x:63.3567,y:94.733}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_2_graphics_150,x:63.3567,y:94.733}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_1
	this.instance_2 = new lib.germs_group();
	this.instance_2.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(140).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-210,498,662);


(lib.copy_01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AANBqIAAiqIgoAlIgVgZIA/g1IAiAAIAADTg");
	this.shape.setTransform(8.55,21.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).wait(90).to({_off:true},1).wait(4).to({_off:false},0).wait(1));

	// numbers_scrolling
	this.instance = new lib.numbers_scrolling("synched",2);
	this.instance.setTransform(26.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_1.setTransform(28.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},37).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_1}]},90).to({state:[]},1).to({state:[{t:this.shape_1}]},4).wait(1));

	// numbers_scrolling
	this.instance_1 = new lib.numbers_scrolling("synched",1);
	this.instance_1.setTransform(44.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_2.setTransform(46.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.shape_2}]},19).to({state:[{t:this.shape_2}]},91).to({state:[]},1).to({state:[{t:this.shape_2}]},4).wait(1));

	// numbers_scrolling
	this.instance_2 = new lib.numbers_scrolling("synched",7);
	this.instance_2.setTransform(71.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(73.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.shape_3}]},24).to({state:[{t:this.shape_3}]},93).to({state:[]},1).to({state:[{t:this.shape_3}]},4).wait(1));

	// numbers_scrolling
	this.instance_3 = new lib.numbers_scrolling("synched",3);
	this.instance_3.setTransform(88.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_4.setTransform(90.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.shape_4}]},33).to({state:[{t:this.shape_4}]},95).to({state:[]},1).to({state:[{t:this.shape_4}]},4).wait(1));

	// numbers_scrolling
	this.instance_4 = new lib.numbers_scrolling("synched",0);
	this.instance_4.setTransform(107.1,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(109.025,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_5}]},44).to({state:[{t:this.shape_5}]},97).to({state:[]},1).to({state:[{t:this.shape_5}]},4).wait(1));

	// GERMS
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgpBpQgSgHgOgPIAdgcQAHALALAGQALAFANAAIAMgBQAHgCAFgEQAGgDADgGQADgFAAgIQAAgLgHgHQgIgGgLgEIgXgJQgNgDgLgHQgMgGgHgLQgHgMAAgSQAAgRAGgMQAHgMALgIQALgIAOgEQAOgEAOAAQARAAAPAGQAQAFANALIgcAdQgGgIgKgEQgKgEgLAAIgMABQgGACgFADQgFADgDAGQgDAFAAAHQAAALAIAGQAHAFALAEIAXAJQAOADALAHQALAGAHAMQAIALAAATQAAARgGANQgHAMgKAJQgLAIgOAEQgOAFgPAAQgUAAgSgHg");
	this.shape_6.setTransform(241.725,22.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_7.setTransform(224.825,22.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("ABOBqIAAivIAAAAIhBCvIgZAAIhBivIgBAAIAACvIgkAAIAAjTIA6AAIA4CUIA5iUIA6AAIAADTg");
	this.shape_8.setTransform(201.3,22.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAjBqIgxhaIgbAAIAABaIgmAAIAAjTIBKAAQAOAAAOADQAPADALAGQALAHAGAMQAHAMAAASQAAAXgNAPQgNAPgXADIA4BegAgpgPIAdAAIAPgBQAIgBAHgCQAHgDAEgGQAEgGAAgLQAAgJgEgGQgDgFgHgDQgGgDgIgBIgOgBIggAAg");
	this.shape_9.setTransform(178.875,22.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_10.setTransform(159.875,22.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AggBoQgVgIgOgPQgQgOgIgVQgIgUAAgZQAAgZAIgUQAIgVAQgPQAOgPAVgIQAVgIAXAAQAYAAAWAGQAVAGAQAPIgbAcQgKgKgPgFQgOgFgQAAQgQAAgNAGQgOAFgKALQgJAKgGAOQgEAOAAAQQAAAQAEAOQAGAOAJALQAKAKAOAGQANAGAQAAQAOAAANgCQAMgDAKgGIAAgyIgrAAIAAghIBRAAIAABsQgnAVgxAAQgXAAgVgIg");
	this.shape_11.setTransform(138.15,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},141).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,253,46);


// stage content:
(lib.LysolGeneric_LDS_300x600_fr = function(mode,startPosition,loop) {
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
	this.frame_370 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(370).call(this.frame_370).wait(79));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},371).wait(78));

	// ClickTag
	this.clicktag = new lib.click();
	this.clicktag.setTransform(150.1,300.65,1,2.3997,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).to({_off:true},371).wait(78));

	// copy_04
	this.instance = new lib.copy_04();
	this.instance.setTransform(78.1,589.8,1,1,0,0,0,61.1,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(349).to({_off:false},0).to({alpha:0.5},14,cjs.Ease.get(1)).to({_off:true},8).wait(78));

	// what_it_takes
	this.instance_1 = new lib.whatittakes();
	this.instance_1.setTransform(45.5,554,1,1,0,0,0,32.5,11);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(342).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).to({_off:true},15).wait(78));

	// product
	this.instance_2 = new lib.product_1();
	this.instance_2.setTransform(340.5,386.5,1,1,0,0,0,35.5,54.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(335).to({_off:false},0).to({x:115.5},14,cjs.Ease.get(1)).to({_off:true},22).wait(78));

	// bg_blue
	this.instance_3 = new lib.bg_blue();
	this.instance_3.setTransform(52,725,1,1,0,0,0,52,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({y:396},9,cjs.Ease.get(1)).to({_off:true},34).wait(78));

	// btn_cta
	this.instance_4 = new lib.btn_cta();
	this.instance_4.setTransform(95,191,1,1,0,0,0,61,20.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(314).to({_off:false},0).to({x:75,alpha:1},9,cjs.Ease.get(1)).to({_off:true},48).wait(78));

	// copy_03
	this.instance_5 = new lib.copy_03();
	this.instance_5.setTransform(114.7,97.25,1,1,0,0,0,82,27.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(308).to({_off:false},0).to({x:94.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},54).wait(78));

	// copy_02
	this.instance_6 = new lib.copy_02();
	this.instance_6.setTransform(150.05,270.2,1,1,0,0,0,122.8,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},38).wait(141));

	// logo
	this.instance_7 = new lib.logo_1();
	this.instance_7.setTransform(265.5,562,1,1,0,0,0,24.5,23);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},130).wait(141));

	// bg_light_blue
	this.instance_8 = new lib.bg_lightblue();
	this.instance_8.setTransform(98,-474,1,1,0,0,0,98,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(241).to({_off:false},0).to({y:125},14,cjs.Ease.get(1)).to({_off:true},116).wait(78));

	// hand
	this.instance_9 = new lib.hand_spray_1("single",0);
	this.instance_9.setTransform(-97.1,445.05,1,1,-22.7187,0,0,-0.1,112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).to({regX:0,rotation:0,x:0,y:385},4,cjs.Ease.get(1)).wait(3).to({mode:"synched"},0).to({regX:0.1,rotation:4.9513,x:-4.05,startPosition:12},20,cjs.Ease.get(1)).to({regX:-0.1,rotation:-7.0392,x:-5.2,y:395,startPosition:38},20,cjs.Ease.get(1)).to({regX:0,rotation:0,x:0,y:385,mode:"single",startPosition:0},19,cjs.Ease.get(1)).to({y:765},11,cjs.Ease.get(1)).to({_off:true},1).wait(193));

	// spray
	this.instance_10 = new lib.spray_mist("synched",0);
	this.instance_10.setTransform(150,325,0.6263,0.6263,0,0,0,150,150.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).to({regX:149.8,regY:149.8,scaleX:1.486,scaleY:1.486,x:149.9,y:324.65,alpha:0.2813},40,cjs.Ease.get(1)).to({scaleX:2.1808,scaleY:2.1808,x:150,y:324.75,alpha:0},10).to({_off:true},4).wait(210));

	// copy_01c
	this.instance_11 = new lib.copy_01c();
	this.instance_11.setTransform(113.5,582.8,1,1,0,0,0,104.5,8.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({alpha:1},13).wait(91).to({alpha:0},38).to({_off:true},1).wait(212));

	// Layer_1
	this.instance_12 = new lib.copy_01b("single",0);
	this.instance_12.setTransform(115.8,324.2,0.9,0.9,0,0,0,136,25.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({y:315.2,alpha:1},15,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({regX:136.1,x:159.05,startPosition:51},51,cjs.Ease.get(0.2)).wait(53).to({startPosition:104},0).to({alpha:0,startPosition:146},38).to({_off:true},1).wait(212));

	// copy_01a
	this.instance_13 = new lib.copy_01a();
	this.instance_13.setTransform(149.95,294.15,0.9,0.9,0,0,0,91,22.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({y:285.15,alpha:1},15,cjs.Ease.get(1)).wait(112).to({alpha:0},38).to({_off:true},1).wait(212));

	// copy_01
	this.instance_14 = new lib.copy_01();
	this.instance_14.setTransform(161,291.35,0.9,0.9,0,0,0,84.3,25.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1},15).wait(24).to({y:261.65},15,cjs.Ease.get(1)).wait(120).to({alpha:0},38).to({_off:true},1).wait(212));

	// germs
	this.instance_15 = new lib.germs("synched",0,false);
	this.instance_15.setTransform(0,175);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(104).to({startPosition:104},0).to({alpha:0,startPosition:150},38).to({_off:true},1).wait(212));

	// white_box
	this.instance_16 = new lib.whitebox();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({alpha:0.6914},8).wait(39).to({alpha:0.5},31,cjs.Ease.get(1)).to({_off:true},277).wait(78));

	// logo
	this.instance_17 = new lib.logo_1();
	this.instance_17.setTransform(265.5,562,1,1,0,0,0,24.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(424));

	// boy
	this.instance_18 = new lib.girl();
	this.instance_18.setTransform(169.4,144.7,0.9999,0.9999,-0.0009,0,0,169.4,144.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:0.0508},31,cjs.Ease.get(1)).to({_off:true},277).wait(78));

	// BG
	this.instance_19 = new lib.whitebox();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},371).wait(78));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.5,-299,861.9,1249);
// library properties:
lib.properties = {
	id: '3CE4C820892743FB9D5BF0281A417E72',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boy.jpg?1573838789646", id:"boy"},
		{src:"images/germs_sm.png?1573838789646", id:"germs_sm"},
		{src:"images/hand_spray.png?1573838789646", id:"hand_spray"},
		{src:"images/logo.png?1573838789646", id:"logo"},
		{src:"images/product.jpg?1573838789646", id:"product"},
		{src:"images/spray_01.png?1573838789646", id:"spray_01"},
		{src:"images/spray_02.png?1573838789646", id:"spray_02"},
		{src:"images/whatittaketoprotect.jpg?1573838789646", id:"whatittaketoprotect"}
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