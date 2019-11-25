(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Group_1_0 = function() {
	this.initialize(img.Group_1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,13);


(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1920);


(lib.germs = function() {
	this.initialize(img.germs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hand_spray = function() {
	this.initialize(img.hand_spray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,493);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,676);


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
p.nominalBounds = new cjs.Rectangle(0,0,990,69);// helper functions:

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
	this.instance.setTransform(-336,25,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whatittakes, new cjs.Rectangle(-336,25,940.5,65.6), null);


(lib.spray_mist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_02();
	this.instance.setTransform(-97,-89,1.6474,1.6474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:180,x:435,y:423},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.118)","#FFFFFF","rgba(255,255,255,0)"],[0,0,0,1],0,0,0,0,0,186.6).s().p("A0dUfQogofAAsAQAAr/IgofQIfoeL+AAQMBAAIeIeQIeIfAAL/QAAMAoeIfQoeIesBAAQr+AAofoeg");
	this.shape.setTransform(159.9,164.475);

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
	this.instance.setTransform(-200,-382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(-200,-382,452,676), null);


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


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,1080,1920), null);


(lib.germs_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.germs();
	this.instance.setTransform(355.3,-143,0.2808,0.2808,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.germs_group, new cjs.Rectangle(52,-143,303.3,539.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9198C7").s().p("ArcCRQABgGAEgHQD5huDzhJQFWhnD3AAQCfAAB0AfQBwAcgHAkQhihNkWAAQjzAAlbBpQj4BKj+BwIACgKg");
	this.shape.setTransform(73.4678,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,147,31), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#23437E","rgba(35,67,126,0)","#23437E"],[0,0.518,1],48.9,18.2,-45.5,-7.9).s().p("ArWjaQDPi5EgiPQI7kbG6CsQBBAZAgAqQAcAjgFAeIixPOQAFgjhvgdQh0geieAAQlMAAnlCzQieA7iTBDQh2A3gHAIg");
	this.shape.setTransform(90.2701,72.2026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,-0.1,180.6,144.6), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9198C7").s().p("AggA4IA2hwIALABIg2BwgAAIAQQAIgkAWgDQAVgDgGAjQgHAlgXAEIgDAAQgSAAAGgigAAkgNQgIABgFAZQgGAbAJgCQAHgBAFgaQAFgYgHAAIAAAAgAg0APQgCgJADgOQAGglAXgDQAWgEgHAlQgHAkgXADIgDABQgJAAgDgKgAgYgmQgIABgFAaQgFAZAIgBQAHgCAFgYQAGgZgIAAIAAAAg");
	this.shape.setTransform(35.2354,5.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9198C7").s().p("AglArQAYgLANgVIgIACQgPAEgIgFQgKgHAEgSQADgRANgNQANgNARgEQAUgFAHAMQAGAKgEAUQgGAggbAbQgUAUgTAHgAADgoQgJACgEATQgDASAOgDIAGgDIAEgMQAEgWgJAAIgDABg");
	this.shape_1.setTransform(23.3941,7.8386);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9198C7").s().p("AgNAPQgEgEACgHQABgGAGgHQAGgGAGgCQAGgBAEAEQAEAEgBAHQgCAGgGAHQgFAGgGACIgEAAQgEAAgDgDg");
	this.shape_2.setTransform(16.5907,13.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9198C7").s().p("AgmAsQAZgMANgWIgIADQgPAEgIgEQgKgGAEgTQADgRANgNQANgNAQgFQAVgGAHAMQAGAJgEAUQgHAggbAcQgTAVgTAHgAADgpQgJAEgEATQgDASAOgEIAGgDIAEgNQAEgVgJAAIgDAAg");
	this.shape_3.setTransform(12.4346,10.636);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9198C7").s().p("AglAtQAZgOAMgWQgEADgEABQgPAFgIgFQgKgFAEgTQADgRANgOQANgNARgGQAUgGAHALQAGAKgEATQgHAggbAdQgTAVgTAJgAADgpQgJAEgEATQgDASAOgFIAGgDIAEgNQAEgUgJAAIgDAAg");
	this.shape_4.setTransform(3.9346,13.1191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,40.7,19.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9198C7").s().p("AgXAeIAGgMQAEABAGgCQAHgCAAgFQAAgDgGAAQgMgBACgIQABgHAHgHQAHgHAJgDQAKgEAGABIgGAKQgFAAgEACQgGABgBAFQgBAEAIAAQAOAAgDAKQgBAHgIAGQgHAHgJAEQgKADgFAAIgDAAg");
	this.shape.setTransform(18.975,2.9826);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9198C7").s().p("AgHgVIARgHIgHApIAPgGIgCAKIghAMg");
	this.shape_1.setTransform(14.55,4.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9198C7").s().p("AgHgVIASgHIgIAoIAPgFIgCAJIghANg");
	this.shape_2.setTransform(10.425,6.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9198C7").s().p("AgEgVIASgHIgKAyIgRAHg");
	this.shape_3.setTransform(7.175,7.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9198C7").s().p("AgUgNIATgJIgFAWIASgcIASgIIgUAfIAMATIgVAJIgHgTIgFAZIgSAIg");
	this.shape_4.setTransform(3.025,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,21.4,12.7), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9198C7").s().p("AgJgTIAbgJIgCAJIgNAFIgBAKIALgEIgCAIIgLAEIgBAKIAMgEIgBAJIgbAKg");
	this.shape.setTransform(23.675,2.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9198C7").s().p("AgPgRIAMgFIAJARIABADIABAAIAEgZIAMgEIgIAwIgLAEIgKgSIgBgDIgFAbIgMAFg");
	this.shape_1.setTransform(19.45,4.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9198C7").s().p("AgCgWIANgFIgHAxIgOAGg");
	this.shape_2.setTransform(15.875,5.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9198C7").s().p("AgPgRIAOgGIACAaIAOghIAOgGIgDAwIgOAGIADgeIgCAIIgMAbIgGADIgFgbIgGAgIgMAGg");
	this.shape_3.setTransform(11.5,7.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9198C7").s().p("AgCgWIANgHIgIA0IgNAHg");
	this.shape_4.setTransform(7.675,9.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9198C7").s().p("AgFgXIAOgGIgHApIAMgFIgCAKIgZANg");
	this.shape_5.setTransform(4.725,10.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9198C7").s().p("AgIgMIAZgOIgBAKIgNAHIgCAKIALgFIgBAJIgLAGIAAAMIALgHIgBALIgbAPgAAFgiQADgEAEgCQAFgCABACIgMAQIgGAEg");
	this.shape_6.setTransform(1.75,11.5556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,25.5,15.8), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1_0();
	this.instance.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0.2,45,13), null);


(lib.copy_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape.setTransform(205.375,9.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_1.setTransform(203.3,6.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_2.setTransform(200.175,8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAdIgFgGIAAAHIgHAAIAAg8IAHAAIAAAdQACgDAEgCQADgCADAAQAFAAADACIAGAEIAEAFQACAEAAAEQAAAEgCAEIgEAGIgFAEQgEACgEAAQgEAAgEgCgAgFgBIgEACQgCACAAADIgBAFIABAGQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIAEADIAFABIAFgBIAFgDIACgEIABgGIgBgFIgCgFIgFgCIgFgBIgFABg");
	this.shape_3.setTransform(195.625,7.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_4.setTransform(190.975,8.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_5.setTransform(188,6.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_6.setTransform(182.675,8.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_7.setTransform(178.275,6.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAXIgCgCIgBgEIgBgFIAAgTIgIAAIAAgGIAIAAIAAgKIAGAAIAAAKIALAAIAAAGIgLAAIAAARIAAADIAAADIACACIADABIADAAIADgCIAAAGIgEABIgDAAIgGgBg");
	this.shape_8.setTransform(174.625,7.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKATIgKgcIAAAAIgJAcIgGAAIgNglIAIAAIAIAcIAKgcIAGAAIAKAcIAIgcIAGAAIgMAlg");
	this.shape_9.setTransform(168.1,8.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIASIgFgEIgFgGIgBgIQAAgDABgEQACgEADgCIAFgEQAFgCADAAIAIACIAGAEQADACABAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgDAAgFgCgAgEgMIgFADIgCAFIgBAEIABAGIACAEIAFADIAEABIAFgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDIgFgBIgEABg");
	this.shape_10.setTransform(162.8,8.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_11.setTransform(159.45,6.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_12.setTransform(157.55,6.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIASIgFgEIgFgGIgBgIQAAgDABgEQACgEADgCIAFgEQAFgCADAAIAIACIAGAEQADACABAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgDAAgFgCgAgEgMIgFADIgDAFIAAAEIAAAGIADAEIAFADIAEABIAGgBIADgDIADgEIABgGIgBgEIgDgFIgDgDIgGgBIgEABg");
	this.shape_13.setTransform(154.25,8.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAfIAAgfIgIAAIAAgGIAIAAIAAgIIABgGIACgFIADgEIAGgBIADABIACAAIAAAGIgFgBIgEABIgBACIgBAEIAAAEIAAAHIAJAAIAAAGIgJAAIAAAfg");
	this.shape_14.setTransform(150.75,6.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_15.setTransform(144.675,7.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKATIAAgVQAAgFgCgDQgCgCgEAAIgEABIgEADIgCAEIgBAFIAAASIgGAAIAAgbIgBgFIAAgEIAHAAIAAADIAAADIAAAAIABgDIAEgCIADgCIADAAIAGABIAFADQACACABADIABAGIAAAWg");
	this.shape_16.setTransform(140.1,8.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_17.setTransform(135.775,8.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_18.setTransform(129.075,7.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_19.setTransform(124.575,8.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_20.setTransform(120.375,8.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_21.setTransform(116.975,8.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_22.setTransform(111.425,8.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAcIgDgBIABgFIACABIACAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIACgEIADgIIgPgkIAHAAIAKAcIABAAIAKgcIAIAAIgTAtIgBAEIgCAEIgEACIgFAAg");
	this.shape_23.setTransform(107.85,9.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_24.setTransform(103.775,8.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAKATIgKgcIAAAAIgJAcIgGAAIgNglIAIAAIAIAcIAKgcIAGAAIAKAcIAIgcIAGAAIgMAlg");
	this.shape_25.setTransform(98.8,8.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_26.setTransform(94.9,6.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAcIgGgOIgbAAIgGAOIgIAAIAZg3IAGAAIAYA3gAALAIIgLgbIgLAbIAWAAg");
	this.shape_27.setTransform(91.175,7.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape_28.setTransform(85.075,9.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_29.setTransform(81.475,7.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_30.setTransform(76.925,8.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAXIgCgCIgBgEIgBgFIAAgTIgIAAIAAgGIAIAAIAAgKIAGAAIAAAKIALAAIAAAGIgLAAIAAARIAAADIAAADIACACIADABIADAAIADgCIAAAGIgEABIgDAAIgGgBg");
	this.shape_31.setTransform(73.275,7.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFASIgGgEQgCgCgCgEIgBgIIABgHIAEgGIAGgEIAHgCQAFAAADACQAEABADADIgFAFIgFgEIgFgBIgEABIgEADIgCAFIgBAEIABAFIACAFIAEADIAEABQAHAAADgFIAFAFQgDADgEABIgIACIgHgCg");
	this.shape_32.setTransform(70.125,8.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_33.setTransform(65.875,8.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_34.setTransform(62.475,8.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAcIAAgkIAFAAIAAAkgAgCgUQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABIACADIgCADQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_35.setTransform(59.9,7.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_36.setTransform(56.475,7.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_37.setTransform(50.175,8.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_38.setTransform(46.375,8.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_39.setTransform(39.675,7.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_40.setTransform(35.125,8.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_41.setTransform(31.175,8.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIASIgEgDQgCgCAAgDIgBgGIAAgWIAFAAIAAAVQABAFACADQACACAEAAIAFgBIADgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABgFIAAgSIAGAAIAAAbIAAAFIAAAEIgFAAIAAgDIAAgDIgBAAIgCADIgDACIgDACIgEAAIgGgBg");
	this.shape_42.setTransform(27.35,8.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgCgCgEAAIgFABIgDADIgCAEIgBAFIAAASIgGAAIAAgbIAAgFIAAgEIAFAAIAAADIAAADIABAAIACgDIADgCIADgCIAEAAIAFABIAFADQACACAAADIABAGIAAAWg");
	this.shape_43.setTransform(20.7,8.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_44.setTransform(16.325,8.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_45.setTransform(11.925,6.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAOAcIgOgvIgNAvIgIAAIgQg3IAHAAIAOAuIANguIAHAAIAOAuIANguIAHAAIgQA3g");
	this.shape_46.setTransform(5.85,7.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_04, new cjs.Rectangle(0,0,248,15), null);


(lib.copy_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgKAZQgFgCgEgDQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQAEgDAFgDQAFgCAFAAQAFAAAFACQAGADADADQAFAEABAFQACAFAAAFQAAAGgCAFQgBAFgFAEQgDADgGACQgFADgFAAQgFAAgFgDg");
	this.shape.setTransform(239.55,66.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgjBIQgPgEgLgMIAbgeQAGAJAIADQAIAFAKAAQAHgBAGgCQAGgCAAgGQAAgFgFgDQgGgEgHgCIgSgDQgKgDgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgJQAFgKAJgFQAIgHALgCQALgDALAAQAOgBAPAFQAPAEAKALIgcAbQgKgMgQAAQgFAAgFADQgFACAAAHQAAAFAFADIANAEIATAFQAJACAJAEQAIAGAGAHQAFAIAAANQAAAPgGAJQgGAJgJAFQgKAGgMACQgMACgLABQgPgBgQgEg");
	this.shape_1.setTransform(228.175,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("ABGBLIAAhUQAAgKgFgIQgEgHgLAAQgIAAgFADQgGACgCAFQgEAEgBAGIgCANIAABMIgsAAIAAhMIAAgKIgCgLQgCgFgEgDQgEgEgIAAQgJAAgEADQgGADgDAFQgDAGgBAGIgBANIAABJIgtAAIAAiRIAsAAIAAAUIAAAAIAHgJIAJgHIAMgGQAGgCAJAAQAPAAAMAHQALAGAGANQAHgOAMgGQAKgGARAAQAOAAALAFQAKAFAFAJQAHAIACAMQADALAAAOIAABVg");
	this.shape_2.setTransform(208.2,61.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_3.setTransform(189.675,61.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgLQgLgJgHgOQgGgOAAgSQAAgQAGgOQAHgOALgKQALgLAPgFQAOgGAQABQAQgBAMAGQANAFAJALQAJAKAFAOQAFAOAAAQIAAAPIhoAAQADAMAJAIQAJAIAMAAQALAAAIgGQAHgFAGgHIAgAXQgLAOgRAHQgQAIgSAAQgQAAgOgGgAAegQQAAgLgIgIQgIgIgMAAQgHAAgFACIgKAGQgEAEgCAFQgDAFAAAFIA7AAIAAAAg");
	this.shape_4.setTransform(174.375,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgrBqQgTgEgPgNIAZglQAKAJAMAFQALAFAOAAQAUAAAJgKQAKgKAAgQIAAgOIAAAAQgIALgMAEQgLAFgKAAQgQAAgNgGQgNgFgKgLQgJgKgFgMQgFgOAAgRQAAgOAEgOQAFgOAJgKQAIgLAMgGQANgHAPAAQAKAAAHACIAOAGIALAHIAHAIIABAAIAAgTIApAAIAACEQAAAqgVAVQgVAWgpAAQgUAAgTgFgAgMhDQgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAGAFAFQAFAFAGADQAHACAHAAQAHAAAHgCQAGgDAFgFQAFgFADgGQADgHAAgHQAAgHgDgHQgDgGgFgFQgFgFgGgDQgHgDgHAAQgHAAgHADg");
	this.shape_5.setTransform(155.825,65.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgrBGQgLgGgGgJQgFgJgCgNQgCgMAAgPIAAhQIAtAAIAABIIAAAMQABAHACAFQACAGAFAEQAEADAJAAQAIAAAFgDQAGgDACgFQADgFABgHIABgNIAAhJIAtAAIAACRIgrAAIAAgUIgBAAIgGAJIgJAHIgLAGQgHACgIAAQgSAAgKgFg");
	this.shape_6.setTransform(129.425,61.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgVByIAAjjIAsAAIAADjg");
	this.shape_7.setTransform(116.9,57.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgaBzIAAhuIgeAAIAAgjIAeAAIAAgZQAAgMACgLQACgLAGgIQAHgIAKgEQALgFASAAIAOAAIANADIgCAmIgIgDIgIAAQgKAAgGAEQgFAFAAAOIAAAXIAhAAIAAAjIghAAIAABug");
	this.shape_8.setTransform(107.75,57.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("Ag6BsQgOgEgKgIQgLgIgGgMQgHgMAAgQQAAgKAEgJQADgJAGgIQAHgHAIgFQAIgGAJgDIgJgLIgIgKIgEgMQgCgHAAgIQAAgOAFgKQAGgKAJgHQAKgHAMgCQAMgEAMAAQANAAAKAEQALADAIAGQAJAHAFAJQAFAKAAAOQAAAJgDAIQgDAJgGAHQgFAHgHAFIgPAKIAbAcIAVgbIA0AAIgtA6IAwAyIg6AAIgSgUQgNAOgPAGQgOAGgTAAQgPAAgNgEgAgqAVIgHAGIgGAIQgCAFAAAGQAAAGACAFQADAFAEADQAEADAFACQAFACAFAAQALAAAIgEQAHgFAHgHIglgogAghhFQgGAFAAAJQAAAEACAEIAEAHIAGAGIAGAGIAHgFIAIgGIAGgIQACgEAAgEQAAgKgGgFQgGgFgIAAQgJAAgGAGg");
	this.shape_9.setTransform(82.225,58.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgkBuQgNgGgKgKQgJgKgFgOQgFgNAAgRQAAgPAEgOQAFgNAJgLQAIgLAMgGQANgHAPAAQANAAANAFQAMAEAIALIAAAAIAAhhIAtAAIAADiIgpAAIAAgTIgBAAIgHAHIgKAIIgNAFQgHACgHAAQgQAAgNgFgAgYAMQgJAKAAARQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgRgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_10.setTransform(51.525,57.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgWByIAAjjIAsAAIAADjg");
	this.shape_11.setTransform(38.65,57.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgfBHQgPgFgKgLQgMgJgFgOQgHgOAAgSQAAgQAHgOQAFgOAMgKQAKgLAPgFQAPgGAQABQARgBAOAGQAQAFAKALQALAKAHAOQAGAOAAAQQAAASgGAOQgHAOgLAJQgKALgQAFQgOAGgRAAQgQAAgPgGgAgagaQgJAKAAAQQAAARAJAKQAKAKAQAAQARAAAKgKQAJgKAAgRQAAgQgJgKQgKgKgRAAQgQAAgKAKg");
	this.shape_12.setTransform(25.6,61.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgQBHQgPgFgLgLQgLgJgGgOQgHgOAAgSQAAgQAHgOQAGgOALgKQALgLAPgFQAPgGAQABQANgBANAFQAOAEAMALIgfAfQgCgEgHgEQgFgDgHAAQgRAAgJAKQgKAKABAQQgBARAKAKQAJAKARAAQAHAAAFgDQAGgDADgFIAfAfQgMALgOAEQgNAEgNABQgQAAgPgGg");
	this.shape_13.setTransform(9.8,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgaBzIAAhuIgeAAIAAgjIAeAAIAAgZQAAgMACgLQACgLAGgIQAHgIAJgEQAMgFASAAIANAAIAOADIgDAmIgHgDIgHAAQgLAAgGAEQgFAFAAAOIAAAXIAhAAIAAAjIghAAIAABug");
	this.shape_14.setTransform(187.55,20.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgfBHQgPgFgLgLQgKgJgHgPQgGgNAAgSQAAgQAGgPQAHgNAKgKQALgLAPgFQAPgGAQAAQARAAAOAGQAPAFALALQALAKAHANQAGAPAAAQQAAASgGANQgHAPgLAJQgLALgPAFQgOAGgRgBQgQABgPgGgAgZgaQgKALAAAPQAAARAKAKQAJAKAQAAQARAAAKgKQAJgKAAgRQAAgPgJgLQgKgKgRAAQgQAAgJAKg");
	this.shape_15.setTransform(172.55,24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAAARIgPAWIgQgMIAQgWIgagIIAGgSIAaAJIAAgbIATAAIAAAbIAZgIIAHASIgaAHIAQAXIgQAMg");
	this.shape_16.setTransform(149.9,11.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AhIBnIB4jaIAaAOIh7DZgAA1BpQgLgEgJgJQgHgIgFgLQgFgLABgMQgBgMAFgLQAFgLAHgIQAJgIALgEQAKgEAMAAQANAAALAEQAKAEAJAIQAHAIAFALQAFALAAAMQAAAMgFALQgFALgHAIQgJAJgKAEQgLAFgNAAQgMAAgKgFgAA4AeQgJAIAAAMQAAAMAJAJQAHAIAMAAQANAAAHgIQAJgJAAgMQAAgMgJgIQgHgJgNAAQgMAAgHAJgAhhAEQgLgEgIgHQgIgJgFgKQgFgLABgMQgBgNAFgKQAFgLAIgIQAIgIALgFQAKgFAMAAQANAAALAFQAKAFAIAIQAJAIAEALQAEAKABANQgBAMgEALQgEAKgJAJQgIAHgKAEQgLAFgNAAQgMAAgKgFgAhfhGQgIAJAAAMQAAAMAIAIQAJAJALAAQAMAAAJgJQAIgIAAgMQAAgMgIgJQgJgIgMAAQgLAAgJAIg");
	this.shape_17.setTransform(131.6,21.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgvBsIAxhMIgHACIgHAAQgPAAgMgFQgNgGgIgJQgJgJgEgMQgFgNAAgOQAAgRAGgNQAGgOALgJQAKgJAOgGQAPgFAQAAQARAAAOAFQAPAGAKAJQALAJAGAOQAGANAAARQAAAMgCAIIgFARIgIAQIgKARIgvBIgAgYg4QgKAJABAOQgBAPAKAKQAJAIAPAAQAPAAAKgIQAJgKAAgPQAAgOgJgJQgKgJgPAAQgPAAgJAJg");
	this.shape_18.setTransform(109.2,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgKAZQgFgCgEgDQgDgEgCgFQgCgFgBgGQABgFACgFQACgFADgEQAEgDAFgDQAFgCAFAAQAFAAAGACQAFADAEADQADAEACAFQACAFABAFQgBAGgCAFQgCAFgDAEQgEADgFACQgGADgFAAQgFAAgFgDg");
	this.shape_19.setTransform(95.85,29.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgvBsIAxhMIgGACIgHAAQgPAAgNgFQgMgGgJgJQgJgJgEgMQgFgNAAgOQAAgRAGgNQAGgOAKgJQAMgJAOgGQAOgFAQAAQAQAAAPAFQAOAGALAJQALAJAGAOQAGANAAARQAAAMgCAIIgGARIgIAQIgKARIguBIgAgYg4QgKAJAAAOQAAAPAKAKQAKAIAOAAQAPAAAJgIQAKgKAAgPQAAgOgKgJQgJgJgPAAQgOAAgKAJg");
	this.shape_20.setTransform(82.6,21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgvBsIAxhMIgHACIgGAAQgPAAgNgFQgNgGgIgJQgJgJgEgMQgFgNAAgOQAAgRAGgNQAGgOALgJQALgJAOgGQAOgFAQAAQARAAAOAFQAOAGALAJQALAJAGAOQAGANAAARQAAAMgCAIIgFARIgJAQIgKARIguBIgAgYg4QgKAJAAAOQAAAPAKAKQAJAIAPAAQAPAAAKgIQAJgKAAgPQAAgOgJgJQgKgJgPAAQgPAAgJAJg");
	this.shape_21.setTransform(64.85,21.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgWByIAAjjIAsAAIAADjg");
	this.shape_22.setTransform(43.15,20.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgVByIAAjjIAsAAIAADjg");
	this.shape_23.setTransform(35.35,20.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgWBtIAAiRIAsAAIAACRgAgRg/QgIgIAAgKQAAgLAIgIQAHgIAKAAQALAAAIAIQAHAIAAALQAAAKgHAIQgIAHgLABQgKgBgHgHg");
	this.shape_24.setTransform(27.55,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAiBqIhWhlIAABlIguAAIAAjTIAuAAIAABYIBShYIA9AAIhdBjIBlBwg");
	this.shape_25.setTransform(14.275,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_03, new cjs.Rectangle(0,0,246.2,82), null);


(lib.copy_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AAZBLIAAhIIAAgMQgBgHgCgFQgCgGgFgDQgFgEgIAAQgIAAgFADQgGADgDAFQgDAGAAAGIgBANIAABJIgtAAIAAiRIArAAIAAAUIABAAIAGgJIAJgHIALgGQAHgCAIAAQARAAALAGQAKAFAGAJQAGAJACANQACANAAAOIAABQg");
	this.shape.setTransform(235.575,94.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgeBHQgPgFgMgKQgKgKgHgPQgGgNAAgSQAAgQAGgPQAHgOAKgJQAMgKAPgGQAOgFAQgBQARABAPAFQAOAGAMAKQALAJAGAOQAGAPAAAQQAAASgGANQgGAPgLAKQgMAKgOAFQgPAGgRgBQgQABgOgGgAgagZQgJAKAAAPQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgPgKgKQgJgLgRAAQgQAAgKALg");
	this.shape_1.setTransform(217.7,94.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgjBJQgPgFgLgMIAbgdQAGAHAIAEQAIAEAKAAQAHAAAGgCQAGgCAAgGQAAgFgFgEQgGgDgHgBIgSgFQgKgCgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgKQAFgIAJgGQAIgHALgCQALgEALAAQAOABAPAEQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAEQAJADAJAEQAIAFAGAHQAFAJAAAOQAAANgGAKQgGAJgJAFQgKAGgMADQgMABgLAAQgPAAgQgDg");
	this.shape_2.setTransform(201.525,94.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AglBKQgJgDgHgGQgIgFgEgJQgEgJAAgLQAAgMAFgIQAEgKAIgEQAIgGAKgDQAKgDALgBIAVgCIAVAAQAAgNgJgHQgJgHgLAAQgKAAgJAFQgKAEgHAJIgYgZQANgMARgFQAQgHARAAQAUAAANAGQANAEAHAKQAIAKADANQADAPAAASIAABJIgpAAIAAgSIgBAAQgHALgNAGQgLAEgOAAQgKAAgKgCgAAFAKIgOACQgHACgFAFQgFADAAAIQAAAIAHAEQAHAEAHAAQAGAAAGgCQAGgBAFgEQAFgDADgGQADgFAAgGIAAgKIgMAAg");
	this.shape_3.setTransform(186.275,94.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgFAQgBQAQABAMAFQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMgBQALAAAIgEQAHgFAGgJIAgAYQgLANgRAIQgQAHgSAAQgQABgOgGgAAegPQAAgMgIgIQgIgIgMAAQgHAAgFACIgKAHQgEAEgCAEQgDAFAAAGIA7AAIAAAAg");
	this.shape_4.setTransform(169.725,94.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgjBJQgPgFgLgMIAbgdQAGAHAIAEQAIAEAKAAQAHAAAGgCQAGgCAAgGQAAgFgFgEQgGgDgHgBIgSgFQgKgCgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgKQAFgIAJgGQAIgHALgCQALgEALAAQAOABAPAEQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAEQAJADAJAEQAIAFAGAHQAFAJAAAOQAAANgGAKQgGAJgJAFQgKAGgMADQgMABgLAAQgPAAgQgDg");
	this.shape_5.setTransform(154.075,94.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgrBGQgLgGgGgJQgFgJgCgNQgCgMAAgPIAAhQIAtAAIAABIIAAAMQABAHACAFQACAGAFAEQAEADAJAAQAIAAAFgDQAGgDACgFQADgFABgHIABgNIAAhJIAtAAIAACRIgrAAIAAgUIgBAAIgGAJIgJAHIgLAGQgHACgIAAQgSAAgKgFg");
	this.shape_6.setTransform(129.525,94.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgVBxIAAjiIAsAAIAADig");
	this.shape_7.setTransform(116.9,90.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgaBzIAAhuIgeAAIAAgjIAeAAIAAgZQAAgMACgLQACgLAGgIQAHgIAKgEQAKgFATAAIANAAIAOADIgCAmIgIgDIgIAAQgKAAgGAEQgFAFAAAOIAAAXIAhAAIAAAjIghAAIAABug");
	this.shape_8.setTransform(107.65,90.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("Ag6BsQgOgEgKgIQgLgIgGgMQgHgMAAgQQAAgKAEgJQADgJAGgIQAHgHAIgFQAIgGAJgDIgJgLIgIgKIgEgMQgCgHAAgIQAAgOAFgKQAGgKAJgHQAKgHAMgCQAMgEAMAAQANAAAKAEQALADAIAGQAJAHAFAJQAFAKAAAOQAAAJgDAIQgDAJgGAHQgFAHgHAFIgPAKIAbAcIAVgbIA0AAIgtA6IAwAyIg6AAIgSgUQgNAOgPAGQgOAGgTAAQgPAAgNgEgAgqAVIgHAGIgGAIQgCAFAAAGQAAAGACAFQADAFAEADQAEADAFACQAFACAFAAQALAAAIgEQAHgFAHgHIglgogAghhFQgGAFAAAJQAAAEACAEIAEAHIAGAGIAGAGIAHgFIAIgGIAGgIQACgEAAgEQAAgKgGgFQgGgFgIAAQgJAAgGAGg");
	this.shape_9.setTransform(81.925,91.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgkBuQgNgGgKgKQgJgKgFgOQgFgNAAgRQAAgPAEgOQAFgNAJgLQAIgLAMgGQANgHAPAAQANAAANAFQAMAEAIALIAAAAIAAhhIAtAAIAADiIgpAAIAAgTIgBAAIgHAHIgKAIIgNAFQgHACgHAAQgQAAgNgFgAgYAMQgJAKAAARQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgRgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_10.setTransform(51.025,90.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgVBxIAAjiIAsAAIAADig");
	this.shape_11.setTransform(38.05,90.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgeBHQgPgFgLgKQgMgKgFgPQgHgNAAgSQAAgQAHgPQAFgOAMgJQALgKAPgGQAOgFAQgBQARABAPAFQAPAGALAKQAKAJAHAOQAGAPAAAQQAAASgGANQgHAPgKAKQgLAKgPAFQgPAGgRgBQgQABgOgGgAgagZQgJAKAAAPQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgPgKgKQgJgLgRAAQgQAAgKALg");
	this.shape_12.setTransform(24.9,94.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgQBHQgPgFgLgKQgLgKgGgPQgHgNAAgSQAAgQAHgPQAGgOALgJQALgKAPgGQAPgFAPgBQANABAOAEQAOAEAMALIgeAgQgEgFgFgEQgGgDgIAAQgQAAgJALQgKAKAAAPQAAAQAKALQAJAKAQAAQAIAAAGgEQAEgDAFgEIAeAfQgMALgOAFQgOADgNAAQgPABgPgGg");
	this.shape_13.setTransform(9,94.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgjBJQgPgFgLgMIAbgdQAGAHAIAEQAIAEAKABQAHAAAGgDQAGgCAAgGQAAgGgFgDQgGgDgHgBIgSgFQgKgCgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgKQAFgIAJgGQAIgHALgCQALgEALAAQAOAAAPAFQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAEQAJADAJAEQAIAFAGAIQAFAIAAANQAAAOgGAKQgGAJgJAFQgKAGgMACQgMACgLAAQgPAAgQgDg");
	this.shape_14.setTransform(223.525,59.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgWBtIAAiRIAsAAIAACRgAgRg/QgIgIAAgKQAAgLAIgIQAHgIAKAAQALAAAIAIQAHAIAAALQAAAKgHAIQgIAHgLABQgKgBgHgHg");
	this.shape_15.setTransform(212.6,56.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAZBxIAAhHIAAgNQgBgHgCgFQgCgGgFgDQgFgFgIAAQgIABgFADQgGADgDAFQgDAFAAAHIgBAOIAABIIgtAAIAAjiIAtAAIAABlIAAAAIAFgIIAJgHIALgGQAHgCAIAAQARAAALAFQAKAGAGAJQAGAJACAMQACANAAAOIAABQg");
	this.shape_16.setTransform(200.025,55.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AAEBeQgIgCgIgGQgHgFgEgIQgEgJAAgMIAAhEIgdAAIAAgkIAdAAIAAgrIAsAAIAAArIAoAAIAAAkIgoAAIAAAwIAAALIAEAIQACAEAEACQAEACAIAAIAJgBQAGgBADgDIAAAmQgIADgIAAIgQABQgLAAgKgCg");
	this.shape_17.setTransform(184.95,57.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgjBJQgPgFgLgMIAbgdQAGAHAIAEQAIAEAKABQAHAAAGgDQAGgCAAgGQAAgGgFgDQgGgDgHgBIgSgFQgKgCgJgEQgIgFgGgHQgFgJAAgNQAAgNAFgKQAFgIAJgGQAIgHALgCQALgEALAAQAOAAAPAFQAPAEAKALIgcAbQgKgMgQAAQgFAAgFACQgFADAAAGQAAAGAFADIANAEIATAEQAJADAJAEQAIAFAGAIQAFAIAAANQAAAOgGAKQgGAJgJAFQgKAGgMACQgMACgLAAQgPAAgQgDg");
	this.shape_18.setTransform(163.125,59.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgGAQAAQAQAAAMAGQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMAAQALgBAIgEQAHgFAGgIIAgAXQgLANgRAIQgQAIgSgBQgQABgOgGgAAegQQAAgLgIgIQgIgIgMAAQgHAAgFACIgKAHQgEADgCAFQgDAFAAAFIA7AAIAAAAg");
	this.shape_19.setTransform(147.525,59.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AAZBLIAAhIIAAgMQgBgHgCgFQgCgGgFgDQgFgEgIAAQgIAAgFADQgGADgDAFQgDAGAAAGIgBANIAABJIgtAAIAAiRIArAAIAAAUIABAAIAGgJIAJgHIALgGQAHgCAIAAQARAAALAGQAKAFAGAJQAGAJACANQACANAAAOIAABQg");
	this.shape_20.setTransform(130.225,59.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgfBHQgPgFgLgKQgKgKgGgPQgHgNAAgSQAAgQAHgPQAGgOAKgJQALgKAPgGQAPgGAQAAQARAAAOAGQAPAGALAKQALAJAHAOQAGAPAAAQQAAASgGANQgHAPgLAKQgLAKgPAFQgOAGgRgBQgQABgPgGgAgZgZQgKAKAAAPQAAARAKAKQAJAKAQAAQARAAAKgKQAJgKAAgRQAAgPgJgKQgKgLgRAAQgQAAgJALg");
	this.shape_21.setTransform(112.35,59.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgkBuQgNgGgKgKQgJgKgFgOQgFgNAAgRQAAgPAEgOQAFgNAJgLQAIgLAMgGQANgHAPAAQANAAANAFQAMAEAIALIAAAAIAAhhIAtAAIAADiIgpAAIAAgTIgBAAIgHAHIgKAIIgNAFQgHACgHAAQgQAAgNgFgAgYAMQgJAKAAARQAAAQAJALQAKAKAQAAQARAAAJgKQAKgLAAgQQAAgRgKgKQgJgKgRAAQgQAAgKAKg");
	this.shape_22.setTransform(84.225,55.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgKQgLgKgHgPQgGgNAAgSQAAgQAGgPQAHgOALgJQALgKAPgGQAOgGAQAAQAQAAAMAGQANAGAJAKQAJAJAFAOQAFAPAAAQIAAAOIhoAAQADANAJAIQAJAIAMAAQALgBAIgEQAHgFAGgIIAgAXQgLANgRAIQgQAIgSgBQgQABgOgGgAAegQQAAgLgIgIQgIgIgMAAQgHAAgFACIgKAHQgEADgCAFQgDAFAAAFIA7AAIAAAAg");
	this.shape_23.setTransform(66.575,59.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgVBJIg9iRIAwAAIAkBjIABAAIAihjIAuAAIg6CRg");
	this.shape_24.setTransform(49.55,59.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgfBHQgOgFgMgKQgKgKgHgPQgGgNAAgSQAAgQAGgPQAHgOAKgJQAMgKAOgGQAPgGAQAAQARAAAOAGQAPAGAMAKQALAJAGAOQAGAPAAAQQAAASgGANQgGAPgLAKQgMAKgPAFQgOAGgRgBQgQABgPgGgAgZgZQgKAKAAAPQAAARAKAKQAJAKAQAAQARAAAJgKQAKgKAAgRQAAgPgKgKQgJgLgRAAQgQAAgJALg");
	this.shape_25.setTransform(31.95,59.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgVBxIAAjiIAsAAIAADig");
	this.shape_26.setTransform(18.8,55.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_27.setTransform(207.075,24.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgrBGQgLgGgGgJQgFgJgCgNQgCgMAAgPIAAhQIAtAAIAABIIAAAMQABAHACAFQACAGAFAEQAEADAJAAQAIAAAFgDQAGgDACgFQADgFABgHIABgNIAAhJIAtAAIAACRIgrAAIAAgUIgBAAIgGAJIgJAHIgLAGQgHACgIAAQgSAAgKgFg");
	this.shape_28.setTransform(191.675,24.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgfBHQgOgFgMgLQgKgJgHgPQgGgNAAgSQAAgQAGgPQAHgNAKgKQAMgLAOgFQAPgGAQAAQARAAAOAGQAPAFAMALQALAKAGANQAGAPAAAQQAAASgGANQgGAPgLAJQgMALgPAFQgOAGgRgBQgQABgPgGgAgZgaQgKALAAAPQAAARAKAKQAJAKAQAAQARAAAKgKQAJgKAAgRQAAgPgJgLQgKgKgRAAQgQAAgJAKg");
	this.shape_29.setTransform(173.8,24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AhOBnIAGglQAKAFALAAQAIAAAEgBQAFgCADgEIAGgHIAEgLIADgIIhAiSIAxAAIAkBhIABAAIAghhIAvAAIhDCpIgIAVQgFAJgFAGQgHAGgKADQgJADgQAAQgSAAgQgGg");
	this.shape_30.setTransform(156.25,28.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAEBeQgIgCgIgGQgHgFgEgIQgEgJAAgMIAAhEIgdAAIAAgkIAdAAIAAgrIAsAAIAAArIAnAAIAAAkIgnAAIAAAwIABALIADAIQACAEAEACQAEACAHAAIAKgBQAGgBACgDIAAAmQgHADgIAAIgQABQgLAAgKgCg");
	this.shape_31.setTransform(132.5,22.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgQBHQgPgFgLgLQgLgJgHgPQgFgNgBgSQABgQAFgPQAHgNALgKQALgLAPgFQAOgGAQAAQANAAAOAFQAOAEALALIgdAfQgDgFgGgDQgHgDgHAAQgPAAgKAKQgKALAAAPQAAARAKAKQAKAKAPAAQAIAAAGgDQAEgEAFgEIAdAfQgLALgOAFQgOADgNAAQgQABgOgGg");
	this.shape_32.setTransform(119.9,24.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgYBHQgPgFgLgLQgLgJgHgPQgGgNAAgSQAAgQAGgPQAHgNALgKQALgLAPgFQAOgGAQAAQAQAAAMAGQANAFAJALQAJAKAFANQAFAPAAAQIAAAPIhoAAQADAMAJAIQAJAIAMAAQALgBAIgFQAHgFAGgHIAgAXQgLAOgRAHQgQAIgSgBQgQABgOgGgAAegQQAAgLgIgIQgIgIgMAAQgHAAgFACIgKAGQgEAEgCAFQgDAFAAAFIA7AAIAAAAg");
	this.shape_33.setTransform(103.425,24.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AAEBeQgJgCgGgGQgIgFgEgIQgEgJAAgMIAAhEIgcAAIAAgkIAcAAIAAgrIAsAAIAAArIAnAAIAAAkIgnAAIAAAwIAAALIADAIQADAEAEACQAEACAHAAIAKgBQAFgBADgDIAAAmQgHADgIAAIgQABQgLAAgKgCg");
	this.shape_34.setTransform(88.35,22.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgeBHQgPgFgMgLQgKgJgHgPQgGgNAAgSQAAgQAGgPQAHgNAKgKQAMgLAPgFQAOgGAQAAQARAAAPAGQAOAFAMALQALAKAGANQAGAPAAAQQAAASgGANQgGAPgLAJQgMALgOAFQgPAGgRgBQgQABgOgGgAgagaQgJALAAAPQAAARAJAKQAKAKAQAAQARAAAJgKQAKgKAAgRQAAgPgKgLQgJgKgRAAQgQAAgKAKg");
	this.shape_35.setTransform(73.25,24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgyBLIAAiRIAtAAIAAAXIAAAAQAGgNAKgHQAKgHAPAAIAIABIAHABIAAApIgJgCIgKgBQgNAAgHAEQgIADgEAHQgDAGgBAJIgBATIAAA9g");
	this.shape_36.setTransform(58.525,24.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AhPBqIAAjTIBPAAQAQAAAOADQAPADALAHQALAIAHAMQAGAMAAATQAAATgGANQgGALgLAIQgKAHgPADQgOADgRAAIghAAIAABTgAgggPIAfAAIAMgBIAKgEQAFgDADgFQACgFAAgIQAAgIgDgFQgEgFgGgCQgGgDgHgBIgNgBIgYAAg");
	this.shape_37.setTransform(42.925,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_02, new cjs.Rectangle(-0.8,0,247.20000000000002,115), null);


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
	this.shape.graphics.f("#C7E6F4").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_lightblue, new cjs.Rectangle(0,0,300,600), null);


(lib.bg_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("A3bZ0MAAAgzoMAu3AAAMAAAAzog");
	this.shape.setTransform(150,165.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(0,0,300,330.5), null);


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


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23437E").s().p("AgJASIAAgiIAGgBQAFAAADADQAFAFAAAJQAAALgFADQgDAEgGAAgAgDgLIAAAXIABAAQAFABAAgNQAAgMgEAAg");
	this.shape.setTransform(43.9069,15.3075,0.2656,0.2656);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23437E").s().p("AAIASIAAgYIgBAAIgFAXIgDAAIgFgXIgBAYIgFAAIACgiIAHAAIADAYIAFgYIAGAAIADAig");
	this.shape_1.setTransform(43.1566,15.3075,0.2656,0.2656);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23437E").s().p("AgHATIAKglIAFAAIgKAlg");
	this.shape_2.setTransform(42.579,15.3274,0.2656,0.2656);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23437E").s().p("AgMAXQgHgEgDgGQgEgFAAgIQAAgGAEgHQACgFAHgEQAGgEAHAAQAHAAAGAEQAHAEADAFQAEAHAAAGQAAAIgEAFQgEAGgGAEQgIAEgFAAQgGAAgGgEgAgOgOQgHAGAAAIQAAAGADAEQADAFAFADQAFADAFAAQAFAAAFgDQAGgDACgFQADgEAAgGQAAgHgGgHQgGgGgJAAQgIAAgGAGgAAGAPIgBgCIAAgDIAAgFIgBgBIgEgBIgEAAIAAAMIgGAAIAAgdIAMAAQAFAAABABIADADIABAFIgBAEIgDACQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABAEIAAAGIABACgAgEgBIAFAAIAEgBIABgDIgBgCIgEgBIgFAAg");
	this.shape_3.setTransform(41.6495,15.3142,0.2656,0.2656);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAQIAEgGIAJADQAFAAABgEQAAgDgGgEQgIgEABgGQADgLAPABQAHAAAEACIgEAGQgDgCgEAAQgHAAAAAEQAAACAHAEQAIAEgBAGQgDALgPAAQgKgBgDgCg");
	this.shape_4.setTransform(38.9426,31.6582,0.2655,0.2655);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQASIAJgkIAYAAIgCAHIgNgBIgCAKIALAAIgBAEIgLAAIgCALIAMAAIgBAGg");
	this.shape_5.setTransform(38.113,31.6261,0.2655,0.2655);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJATIAJglIAKAAIgJAlg");
	this.shape_6.setTransform(37.3896,31.6261,0.2655,0.2655);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAUIAJgkQAFgCAJAAQATgBgDAMQgCAHgLACIADAFIAFAMIgMAAIgDgLQgBgEgDgBIgEARgAAAgNIgDANIADAAQAHAAACgHQABgGgHAAg");
	this.shape_7.setTransform(36.5589,31.6251,0.2655,0.2655);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHgMIAXgBIgBAHIgNAAIgCAJIALAAIgBAFIgLABIgCALIAMgBIgCAGIgXABgAABgPIAGgIIAGgCQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIgLAIg");
	this.shape_8.setTransform(35.6243,31.4934,0.2655,0.2655);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFgMIgJABIABgHIAcgBIgBAGIgJAAIgHAgIgLABg");
	this.shape_9.setTransform(34.8346,31.6925,0.2655,0.2655);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAPQgDgFACgJQACgHAGgGQAGgHAIAAQAHgBADACIgDAGIgGgBQgJABgDAMQgBAGACADQABAEAEAAQAEAAACgCIABAGIgKADIgBAAQgJAAgDgFg");
	this.shape_10.setTransform(33.8959,31.7357,0.2655,0.2655);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADgTIAMgBIAHAmIgNAAIAAgJIgOACIgFAJIgLABgAgCAGIAKgBIgBgMIAAgFg");
	this.shape_11.setTransform(32.7043,31.8385,0.2655,0.2655);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAUIAIgkQAHgDAIgBQASgBgCAKQgCAHgJADIAAAAQAKABgCAHQgCAMgTACIgHAAIgIgBgAgCACIgDAAIgDANIAFAAQAHgBACgGQABgHgHAAIgCABgAACgOIgDABIgDALIADAAQAIAAACgHQABgGgGAAIgCABg");
	this.shape_12.setTransform(31.6464,31.9308,0.2655,0.2655);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAVIAFgHQAEABAFgBQAFgBABgEQABgDgHgDQgJgDACgGQABgGAGgDQAEgEAHgBQAIgBAEACIgEAGIgIgBQgHABAAAEQAAADAHADQAJADgCAHQgDAMgPACIgHABIgHgBg");
	this.shape_13.setTransform(30.1028,32.1014,0.2655,0.2655);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHgSIAYgDIgCAGIgMACIgDAKIAMgBIgCAFIgLACIgCALIAMgCIgBAHIgYADg");
	this.shape_14.setTransform(29.2401,32.2168,0.2655,0.2655);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAVIAIglQAJgEAGgBQAKgBAEAEQAFAFgCAKQgFAUgVAEIgHABIgHgBgAACgOIgDABIgGAbQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAJgBADgOQADgNgHAAIgCAAg");
	this.shape_15.setTransform(28.1827,32.3877,0.2655,0.2655);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJATIAAgJIgOAAIgEAIIgLAAIAXgkIAMAAIAGAlgAgBAFIAJABIgBgMIAAgFg");
	this.shape_16.setTransform(37.164,30.0997,0.2655,0.2655);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAgSIAKAAIgJAlIgKAAg");
	this.shape_17.setTransform(36.4539,30.0931,0.2655,0.2655);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAUIAJgkQAGgDAHAAQAUAAgDAMQgCAHgLACIADAFIAFAMIgMAAIgDgLQgBgDgDgCIgEARgAADgNIgDAAIgDANIADAAQAHAAACgHQABgGgGAAIgBAAg");
	this.shape_18.setTransform(35.6297,30.0931,0.2655,0.2655);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHgSIAYgBIgBAHIgOAAIgCAJIAMAAIgCAFIgLABIgCALIAMgBIgBAGIgYABg");
	this.shape_19.setTransform(34.7085,30.1263,0.2655,0.2655);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGgMIgIAAIACgGIAbgBIgBAGIgJAAIgGAgIgMABg");
	this.shape_20.setTransform(33.9387,30.1595,0.2655,0.2655);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAPQgDgGACgIQABgHAGgGQAHgHAIgBQAHAAADACIgDAGIgGgBQgJAAgDANQgDAOAJgBQAEAAACgCIABAGIgKADIgBABQgJAAgDgGg");
	this.shape_21.setTransform(33.0199,30.2064,0.2655,0.2655);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADgTIAMgBIAHAlIgNABIAAgIIgOABIgFAJIgKABgAgCAFIAKgBIgBgLIAAgFg");
	this.shape_22.setTransform(31.8416,30.3055,0.2655,0.2655);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAUIAIgkQAIgDAHgBQASgBgCAKQgCAHgJADQAEABACABQADADgBADQgCAMgTACIgEAAIgLgBgAgCACIgDAAIgDANQABAAAAAAQABABAAAAQABAAAAgBQABAAABAAQAHgBACgGQABgHgHABIgCAAgAACgOIgDABIgDALIADAAQAIAAACgHQABgGgGAAIgCABg");
	this.shape_23.setTransform(30.8103,30.3909,0.2655,0.2655);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgSIAYgDIgBAGIgOACIgCAKIAMgBIgCAFIgKACIgEASIgMABg");
	this.shape_24.setTransform(29.3927,30.5444,0.2655,0.2655);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSADQAFgVASgCQAJgCAEAGQADAFgCAJQgEAVgSACIgFABQgOAAAEgTgAADgOQgGABgDAOQgEAPAIgCQAGAAAEgOQADgOgHAAIgBAAg");
	this.shape_25.setTransform(28.3756,30.6777,0.2655,0.2655);

	this.instance = new lib.Group_1();
	this.instance.setTransform(33.9,31.5,0.2657,0.2657,0,0,0,24.1,7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJgTIAbgJIgCAJIgNAEIgBAKIALgDIgCAIIgLADIAAAMIALgFIgBAJIgbAKg");
	this.shape_26.setTransform(14.7638,35.5416,0.2657,0.2657);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPgRIAMgFIAJARIACADIAEgZIAMgEIgIAwIgLAEIgKgSIgBgDIgBAAIgEAbIgMAFg");
	this.shape_27.setTransform(13.6481,35.9334,0.2657,0.2657);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDgWIAPgFIgJAxIgOAGg");
	this.shape_28.setTransform(12.6983,36.2921,0.2657,0.2657);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPgRIAOgGIACAaIAOghIAOgGIgDAwIgNAGIACgdIgOAiIgGADIgEgaIgBAAIgGAfIgMAGg");
	this.shape_29.setTransform(11.5427,36.7702,0.2657,0.2657);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCgWIANgHIgHA0IgOAHg");
	this.shape_30.setTransform(10.5133,37.2285,0.2657,0.2657);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFgWIAOgHIgHAqIAMgGIgCAKIgZANg");
	this.shape_31.setTransform(9.7363,37.6469,0.2657,0.2657);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJgMIAagOIgBAKIgNAHIgCAKIALgEIgCAJIgKAFIAAAMIAKgGIgBAKIgZAPgAAFgiQADgDAEgDQAFgCABACIgMAQIgGAEg");
	this.shape_32.setTransform(8.9526,37.8277,0.2657,0.2657);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAeIAGgMQAEABAGgCQAHgCAAgEQAAgEgGAAQgLgBABgIQABgHAHgHQAHgHAJgDQALgEAFABIgGALQgEgBgFACQgHACAAAEQgBADAHABQAOABgCAJQgBAHgIAHQgHAGgJAEQgKADgFAAIgDAAg");
	this.shape_33.setTransform(14.6841,33.8501,0.2657,0.2657);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHgVIASgHIgIAoIAPgFIgCAKIghAMg");
	this.shape_34.setTransform(13.5019,34.293,0.2657,0.2657);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHgVIASgHIgIAoIAOgFIgBAJIghANg");
	this.shape_35.setTransform(12.4061,34.6981,0.2657,0.2657);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEgVIASgHIgKAyIgRAHg");
	this.shape_36.setTransform(11.5494,34.997,0.2657,0.2657);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUgOIATgHIgFAVIARgbIAUgJIgVAfIAMATIgVAJIgHgTIgBAAIgEAYIgSAIg");
	this.shape_37.setTransform(10.4403,35.4486,0.2657,0.2657);

	this.instance_1 = new lib.Group_4();
	this.instance_1.setTransform(12.05,37.05,0.2657,0.2657,0,0,0,13.6,7.9);

	this.instance_2 = new lib.Group_5();
	this.instance_2.setTransform(12.7,34.9,0.2657,0.2657,0,0,0,11.5,6.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AghA3IA4hvIALACIg4BvgAAIAQQAIgkAWgDQAWgEgIAkQgIAlgWADIgDABQgSAAAHgigAAkgNQgHABgGAZQgGAaAIgBQAIgBAFgaIADgRQgBgHgEAAIAAAAgAg0gIQAIglAWgEQAWgDgHAlQgIAkgWADIgEAAQgRAAAGgggAgYgmQgHABgGAaQgFAYAHgBQAIgBAFgYQAGgZgHAAIgBAAg");
	this.shape_38.setTransform(25.4179,31.9486,0.2657,0.2657);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnArQAZgMAOgVIgIADQgPAEgIgFQgLgHAEgSQAEgRANgNQANgNARgEQAUgFAHAMQAGAKgEATQgHAggbAbQgUAUgUAHgAAEgpQgKADgEATQgEATAOgEQAEgBADgCIAEgMQAEgWgJAAIgCAAg");
	this.shape_39.setTransform(22.2663,32.5273,0.2657,0.2657);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAPQgEgEABgHQACgGAGgGQAGgHAGgCQAHgBADAEQAEAEgCAHQgBAGgGAGQgGAHgGACIgDAAQgEAAgDgDg");
	this.shape_40.setTransform(20.4295,33.9676,0.2657,0.2657);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnAsQAZgMAOgWIgJADQgPAFgIgFQgKgGAFgSQADgRANgOQANgNARgFQAUgGAHAMQAGAJgEATQgHAggbAcQgVAWgTAHgAADgoQgJACgEAUQgEASAOgEQADgBAEgCIADgNQAFgVgIAAIgEABg");
	this.shape_41.setTransform(19.3422,33.2931,0.2657,0.2657);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAtQAZgOANgWIgIAEQgPAFgIgFQgKgFAEgSQAEgRANgOQANgOAQgGQAUgGAHALQAGAJgEAUQgIAggbAdQgTAVgUAJgAAEgpQgKAEgEATQgEASAOgFIAHgDIAEgNQAEgUgJAAIgCAAg");
	this.shape_42.setTransform(17.0888,33.9793,0.2657,0.2657);

	this.instance_3 = new lib.Group_7();
	this.instance_3.setTransform(21.65,33.25,0.2657,0.2657,0,0,0,21.1,9.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLATIAHgfIgHgDIABgHIAWAKIgBAHIgHgEIgGAgg");
	this.shape_43.setTransform(42.4119,28.1431,0.2657,0.2657);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAWIgIgZIgBgFIgFAZIgIgCIAIgnIAIADIAHAXIABAFIABAAIAAgEIAEgTIAIACIgIAng");
	this.shape_44.setTransform(41.522,27.8708,0.2657,0.2657);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIAUIAAgJIgMgDIgEAIIgJgCIAUgkIAKADIAFAqgAgBADIAIACIgBgSg");
	this.shape_45.setTransform(40.4394,27.6317,0.2657,0.2657);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAUIAGghIgHgBIABgHIAYAFIgBAGIgIgBIgGAhg");
	this.shape_46.setTransform(39.8683,27.3992,0.2657,0.2657);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAVQgNgCAAgQQAAgJAFgHQAGgJAJACQAFAAAEAEIgEAFIgEgCQgHgBgBAIQgDAFAAAFQAAAJAFABIAFgBIABAHQgCABgDAAIgDAAg");
	this.shape_47.setTransform(39.0979,27.3078,0.2657,0.2657);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOATIAIgoIAVADIgCAGIgLgBIgCAKIAKACIgBAFIgKgBIgCALIALABIgCAHg");
	this.shape_48.setTransform(38.3407,27.1934,0.2657,0.2657);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAUIAIgoIAVACIgBAHIgMgBIgCAKIAKABIgBAFIgJgBIgEASg");
	this.shape_49.setTransform(37.6367,27.107,0.2657,0.2657);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAEAVIgKgbIAAAFIgFAVIgIAAIAIgpIAIABIAIAVIABAFIAGgZIAIAAIgIApg");
	this.shape_50.setTransform(36.7534,27.0472,0.2657,0.2657);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIAVIAIgpIAJAAIgIApg");
	this.shape_51.setTransform(36.0162,27.014,0.2657,0.2657);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAVQgGAAgFgCIADgHQAEACAEAAQAGABAAgGQAAgDgFgEQgGgDAAgGQAAgGAEgEQAEgEAHAAQAFAAAFADIgDAGQgDgCgEAAQgGgBAAAHQAAACAGAEQAGADAAAGQAAAGgEAEQgFAFgFAAIgCgBg");
	this.shape_52.setTransform(35.3787,26.9881,0.2657,0.2657);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAcIAIgpIAUAAIgBAHIgLAAIgCAJIAKAAIgCAHIgJAAIgCALIALAAIgCAHgAAAgRIAGgIQACgCADAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIgJAIg");
	this.shape_53.setTransform(34.6747,26.7949,0.2657,0.2657);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAUIAIgmQAGgDAGAAQAPAAAAAQQAAAJgFAIQgGAJgLABQgIAAgFgCgAAAgOIgGAcIADABQAFAAAEgIQACgHAAgGQAAgIgGAAg");
	this.shape_54.setTransform(33.7715,26.9808,0.2657,0.2657);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAcIAgg7IAHAEIgfA7g");
	this.shape_55.setTransform(32.9081,27.0804,0.2657,0.2657);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEgNIgIAAIABgGIAYgCIgBAHIgIAAIgFAjIgKABg");
	this.shape_56.setTransform(32.4033,27.0207,0.2657,0.2657);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKgTIAIgBIAJAZIABgFIAEgVIAIAAIgIApIgIABIgIgWIgBgFIgBAAIAAAFIgEAXIgJAAg");
	this.shape_57.setTransform(31.427,27.0738,0.2657,0.2657);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADgUIAKgBIAGAoIgKABIgBgJIgMABIgEAKIgKAAgAgBAGIAJgBIgBgSIgBAAg");
	this.shape_58.setTransform(30.3179,27.1668,0.2657,0.2657);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFgNIgHABIABgHIAYgDIgBAIIgIAAIgGAkIgJAAg");
	this.shape_59.setTransform(29.7335,27.2133,0.2657,0.2657);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOAHQAAgIAFgJQAGgKAJgBQAGgBADACIgDAGIgFAAQgGAAgDAJQgCAFAAAGQAAAIAFAAQACAAADgCIABAGQgEAEgEAAIgCAAQgLAAAAgPg");
	this.shape_60.setTransform(28.9565,27.2934,0.2657,0.2657);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGgTIAVgDIgCAHIgLABIgCALIAKgBIgBAGIgJABIgDAMIALgCIgBAHIgVADg");
	this.shape_61.setTransform(28.1927,27.3926,0.2657,0.2657);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGgTIAVgDIgCAGIgLACIgCALIAKgBIgBAFIgJACIgEATIgKABg");
	this.shape_62.setTransform(27.502,27.4922,0.2657,0.2657);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLgSIAJgBIAHATIABAEIABAAIAAgEIAEgWIAJgBIgIAqIgIABIgIgVIgBgEIgGAcIgIABg");
	this.shape_63.setTransform(26.6253,27.6184,0.2657,0.2657);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAgUIAJgCIgIArIgJABg");
	this.shape_64.setTransform(25.8948,27.7446,0.2657,0.2657);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAWIAEgHQADABAEgBQAGgBAAgFQAAgDgFgDQgGgDAAgEQAAgGAFgFQAEgFAGgCQAHgBADACIgDAGQgDgBgDABQgHABAAAGQAAACAGADQAGADAAAFQAAAGgFAFQgEAFgGACIgGAAIgGgBg");
	this.shape_65.setTransform(25.2638,27.8607,0.2657,0.2657);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAgUIAJgCIgIArIgJACg");
	this.shape_66.setTransform(24.686,27.977,0.2657,0.2657);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgQAXIAHgnQAGgEAFgCQAQgDAAAQQgBAJgFAJQgFALgMADIgGAAIgFAAgAACgPIgCABIgGAeIADgBQAFgBADgIQADgIAAgGQAAgHgFAAIgBAAg");
	this.shape_67.setTransform(23.9621,28.1401,0.2657,0.2657);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#23437E").s().p("AkqHDQgIhKA4hKQAug8AygTIABgCQAHgfAGgZQgIAWgGAKQgcAlgbACQgbADgUgdQgTgdgCgqQgQAxgYAfQgZAfgfAKIhPAZQgaBKgqAsQgtAuhIAWQguAMgWgbQgTgYAHgtQAIguAfgpQAjguAzgVIA1gTIApirQjYBVgMh6QgBgmAbgkQAbgjAngMQAVgHAMACIAAABQghAMgRAQQgYASgKAZQgJAYAIAVQATAnA+AAQA3AAA9gdQAahpAihJQATgoAcgqQAzhLA4ghQA/glAXAvQAYA5guBfQg2BuhzBNIguC+IA8gSQAtgNARgOQAVgSAPgtIAsinIBcgaIhCD6QgTBKATgCQAYgEATgnQANgaAQgxIA8jcIBcgXIg8DpQAegnAhgzQAhgzARghQAZgwAMggIBegUIgJAVQgIAZgEAPQgJAqAEAyQAGBEAAAJQgEBBguApQgbAXgmAJQgiAHgRgKQgUgNgEgTQgDgTALgRQATgZASAMQARALgMASQgKAPAAAKQABAKAMgCQAdgGAMg5QAEgWgDg3QgEg5AEgZIgvBJQg2BRgnAtIgLAmQgMAugNAnQggBggwBDQgrA7gnASQgOAGgKAAQgZAAgGgngAjME6QgjAigSAyQgOArAGAVQAGAWAegyQATgjAWg6IARgzgAptFVQgyATgJArQgDARAHALQAGAMAPgBQAtgFAbg6IATg5gAk6jkQgXA5ggBtIgBAHQAbgXAVgZQAogwAhhJQANgeAGglQAFgkgGgPQgDgIgGAAQgVAAg1B6gAD0BtQg2glAXiDQANhFAxg4QA0g+A9ACQAaACAOAVQAnA+gZBvQgNAygZAoQgYAlggAVQgiAVgdAAQgWAAgTgMgAGIjaQgQADgcA4QgPAfgPA1QgOAygEAcQgIBIAQAMQANAJAWgZQAPgSAPgjQASgmAHgnQANhAgBg0QgCgrgOAAIgCAAgAIiBPQg0gEgUgwQgQgnAGhCQAFg7AHgjQAIgoATgxQAphtAyg5QAwg2AggHQAmgJAMA6QAYCJi7CPQgHAtgGAuQgDAZABAZQABAYAFAPQAJAYAagCQAfgCAgguIABADQghBRhEAAIgEAAgAKSm6QgUAngmBtQgTA3gOAuIAqgsQAug6AZhKQAOgvgEgjQgDgQgGAAQgIAAgPAZg");
	this.shape_68.setTransform(24.5871,16.9042,0.2651,0.2651);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AkVH3QgZgHgIgqQgRhsCAhgIgOACQgfAAgVgfQgKgPgFgRIAAgBQgjBIg2AQIhIAXQgbBKgtAsQgvAvhJAWQgmALgVgLQgUgLgHgiQgLg6AjhDQAmhLBFgZIAngNIAgiIQhEAZgmABQgmABgjgUQgjgWgHgpQgGgmAVgkQANgWAYgSQAYgRAbgIQAkgLAdALQAVAIACAKQghAEgRAGQgeAMgSAOQgRAOgIAQQgIASAGAPQAPAfAyABQAwACA8gZQAZhmAihJQATgpAcgpIABgCQAmg3AtglQAygpAmACQAeACAPAgQASApgRBEQgUBHgyBAQgxBAhJAxIgnCfIApgNQAqgLAPgOQARgPANgrIAtirIB5ghIhIETQgJAhAAASQAPgIANgaQAHgPAKgcIAKgdIA+jkIAIgCIBcgYIAVgFIgvC7QAvhFAYgvQAYguAMggIADgHIB/gaIgMAbIgJAVQgIAWgEAPQgIAnAEA1IADgSQAOhIAyg7QA4hEBEACQAgADASAbQARAbAGAlQAJgvAVg3QArhxAyg6QBJhSAsAVQAaAPAJAtQAZCSi9CRIgMBUQgCAXABAYQABAWAEAMQACAIAKADQAdAHAjgxIALgSIAPAfIgEAHQglBchPgDQgsgDgZghQgXgggEg2QgcBghEAtQgdATggABQgkACgbgWQgWgUgJgjQgNA1gnAjQgeAZgpAJQgnAIgUgNQgZgSgEgcQgDgSAIgPIgbAgQgMAxgXBHQggBggyBHQgeAqghAYQgeAWgXAAIgLgBgAjcFhQgPAZgJAZQgHAWgBAWQAEgFAJgQQAXgnAYhJQgOAPgOAYgAppFkQgaAKgNATQgLAPACAPQAAAEAFAGQAGAFAAgDQAEgaARgPQAOgMAcgHIAJgXgAFoiWQgOAdgPAzQgOAygDAaQgHA7AJAJQAFABALgNQgEgXAFgdQAEgcANguQAPgyAOghQAFgKAHgKIAHgIQgBgRgDgJQgMAGgWAtgAALBJQAGgHAIgDQAKgDAIAEQAng2AAgKIgBgdQgqBBgcAlgAksjdQgQAkgXBLIAjgvQAUgfAUgrQAWgwgCgvQgTARglBYgAKemwQgZAvgsCFIAhgyQASggANgmQANgpgCgdg");
	this.shape_69.setTransform(24.6411,16.9934,0.2651,0.2651);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9C8B61").s().p("AkVH1QgbgIgGgpQgNhrB8hgIgOACQgXACgOgIQgOgIgJgVIgEgOIgDgOQgjBHg1AQIhIAXQgbBKgtAsQgvAvhJAVQgoALgWgLQgWgMgCghQgChBAeg9QAkhKBDgZIAngNIAgiHQhEAYgmABQglABgjgUQgkgWgHgpQgGgmAVgkQAQgbAogTQAtgXAfAPQgiAGgbAdQgRATgFATQgFAUAIAOQASAcAxAAQAuAAA8gZQAZhmAihGQARgkAdgqIABgDQAlg3AugkQAygpAmACQAeACAPAgQASApgRBEQgUBHgyBAQgyBAhJAwIgmCeIApgMQAogLAPgMQASgPAMgmIAAgCIAuiwIB5ggIhIESQgJAhAAASQAPgHANgbQAHgPAKgcIAKgdIA+jkIAIgCQAbgHBBgQIAVgFIgvC7QAwhHAXgtQAYguAMggIADgHIB/gaIgNAcIgIAUQgIAXgEAOQgJAqAFAyIADgSQAOhIAyg7QA4hEBEADQAgADASAbQARAcAGAkQAKgyATg0QArhwAzg6QBIhSAsAVQAbAPAIAtQAaCSi9CQQgHApgFArQgCAXABAYQAAAWAEAMQADAIAKADQAdAHAigxIAIgLIAPAfQglBchPgEQgsgDgZghQgYghgDg0QgdBhhDArQgeATgfACQgkABgbgWQgWgUgJgjQgMA1goAiQgeAagpAIQgmAIgVgNQgZgRgEgcQgCgSAHgQQgLAPgQARQgOA7gVA9QghBkgxBDQgeApghAYQgeAWgXAAIgLgBg");
	this.shape_70.setTransform(25.0203,17.3533,0.2651,0.2651);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhvA0QgIgNgFgRIgCgOQCEg2B5gjQgPAigbAkQg3BJg7AQQgPAEgMAAQgkAAgTgeg");
	this.shape_71.setTransform(19.3462,28.931,0.2653,0.2653);

	this.instance_4 = new lib.Path_1();
	this.instance_4.setTransform(23.8,32.8,0.2653,0.2653,0,0,0,79.7,17.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B13235").s().p("ArIgUQD7hwD0hJQFWhnD4AAQCfAAB0AeQBxAegHAjQgJAjgcAPQgmAThfgBQjMgCjdAfQjeAgi/A8QjLA9h/BSQiKBageBkQgIilAwikg");
	this.shape_72.setTransform(23.1693,36.7992,0.2653,0.2653);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#FFFFFF","#F9FCFE","#EDF7FD","#DAEFFB","#C1E5F8","#C4E6F8","#CEEAF9","#DDF0FB","#F3FAFE","#FFFFFF"],[0,0.8,0.839,0.882,0.922,0.961,0.973,0.98,0.988,0.996,1],-75.8,-10.6,77.1,17).s().p("ArUkBQARgUCahWQDIhwDMhNQJ4jwF4DFQAtAYgDAZIiUMuQgWgcgmgRQglgRg/gLQm1hMo7ESQkeCJjHCag");
	this.shape_73.setTransform(23.8993,20.2278,0.2653,0.2653);

	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(24.05,19.25,0.2653,0.2653,0,0,0,90.7,72.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00ABE9").s().p("ArWjaQDPi5EgiPQI7kbG6CsQBBAZAgAqQAcAjgFAeIixPOQAFgjhvgdQh0geieAAQlMAAnlCzQieA7iTBDQh2A3gHAIg");
	this.shape_74.setTransform(23.9518,19.2079,0.2653,0.2653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.instance_5},{t:this.shape_73},{t:this.shape_72},{t:this.instance_4},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_3},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_2},{t:this.instance_1},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,48,45), null);


(lib.hand_spray_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_spray_png
	this.instance = new lib.hand_spray();
	this.instance.setTransform(-286,-177,1.5979,1.5979);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(11).to({_off:false},0).wait(33).to({_off:true},1).wait(30));

	// spray_01_png
	this.instance_1 = new lib.spray_anim("synched",2);
	this.instance_1.setTransform(145.1,-19.1,2.0415,0.6998,0,0,0,72.6,44);
	this.instance_1.alpha = 0.5781;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(33).to({startPosition:2},0).to({_off:true},1).wait(30));

	// spray_01_png
	this.instance_2 = new lib.spray_anim("synched",1);
	this.instance_2.setTransform(153.45,-19.1,2.1504,2.649,0,0,0,72.8,44);
	this.instance_2.alpha = 0.5781;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(33).to({startPosition:1},0).to({_off:true},1).wait(30));

	// spray_01_png
	this.instance_3 = new lib.spray_anim("synched",2);
	this.instance_3.setTransform(145.1,-19.1,2.0415,2.0415,0,0,0,72.6,44.1);
	this.instance_3.alpha = 0.5781;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(33).to({startPosition:2},0).to({_off:true},1).wait(30));

	// spray_01_png
	this.instance_4 = new lib.spray_anim("synched",2);
	this.instance_4.setTransform(145.1,-19.1,2.0415,2.0415,0,0,0,72.6,44.1);
	this.instance_4.alpha = 0.5781;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(33).to({startPosition:2},0).to({_off:true},1).wait(30));

	// Layer_8
	this.instance_5 = new lib.spray_mist("synched",0);
	this.instance_5.setTransform(193.5,-7.55,1.0752,1.0752,0,0,0,150,150.1);
	this.instance_5.alpha = 0.3398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(33).to({startPosition:1},0).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-327,786,937.8);


(lib.germs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AREDYIgNgFQgIgDgEgDQgEgDADgLIgNgZQgKgTANAIQANAIAHgDQAGgDgJgUQgJgUAKgEQAJgEAJAFQAFACABAQQAIgKAHAFQAKAJADAIQAGANgGAAIgGgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAJAKIAMALQADAHgBAGQgBAGgFADQgFADgGgCIgEgBIgDgBQgGgGgCABQgCABAAAFIABAIQAAAFgBABIgHADIgCAAIgGgBg");
	var mask_graphics_19 = new cjs.Graphics().p("AQoDrIgZgGQgOgEgIgEQgHgFAIgVQgHgKgPgfQgPggAYALQAZALANgGQAOgHgOghQgOgiATgIQAUgJARAHQAIACAAAcQATgSALAHQAUAOAFANQAIAWgNACIgKAAQgFgBgBACIASAPQASAQADADQAFALgDALQgDAMgLAGQgKAGgMgDIgJgBIgFgCQgLgIgFACQgDACAAAIIAAAPQAAAIgEACQgKAGgFABIgGABIgKgBg");
	var mask_graphics_20 = new cjs.Graphics().p("AQND+IgkgIQgWgEgLgGQgLgGANgeQgJgPgVgrQgVgsAkAOQAkAOAUgKQAVgKgTgvQgUgwAegLQAdgNAbAIQALADgCAnQAdgbAQAKQAdASAGATQALAfgSADIgPAAQgIAAgBADQAAABAZATQAbAVADAFQAIAPgFAQQgGARgQAJQgQAKgSgEIgMgBIgIgCQgQgLgHADQgFACgBAMIAAAVQgBANgGADQgPAIgHADQgGABgGAAIgMgBg");
	var mask_graphics_21 = new cjs.Graphics().p("APzEQIgxgIQgcgFgOgIQgPgHASgoQgMgSgag4Qgbg5AvASQAvARAcgNQAbgNgYg9QgZg8AogSQAngRAjAKQAOAEgDAzQAngkAWANQAlAXAIAXQAOAogZAEIgTABQgLAAgBADQgBACAhAZQAjAaAEAHQALASgIAWQgIAWgVAMQgWANgXgFIgRgBIgKgCQgVgOgJAEQgHADgBAPIgCAcQgBAQgHAEQgUALgKADQgIADgJAAIgOgCg");
	var mask_graphics_22 = new cjs.Graphics().p("APYEjIg8gKQgjgGgRgJQgSgJAWgxQgOgWgghEQgghFA6AVQA6AVAigRQAjgRgehJQgdhLAxgVQAxgWArALQASAFgFA/QAxgsAbAPQAuAcAJAdQARAwgfAFIgYABQgNAAgCAFQgBABApAeQArAgAFAIQANAWgKAbQgKAbgbAQQgbAPgcgFIgVgCIgNgBQgagRgLAFQgJAEgCASIgCAiQgCAUgJAFQgZAOgMAEQgKADgMAAIgRgBg");
	var mask_graphics_23 = new cjs.Graphics().p("AO+E1IhHgLQgqgHgVgKQgVgLAbg6QgQgagmhQQgmhRBFAYQBFAYApgUQApgUgihXQgihXA7gaQA7gbAyAOQAWAFgHBKQA7g0AgASQA3AgALAiQATA6glAHIgdABQgPAAgDAEQAAACAwAjQAzAlAGAKQAPAagMAgQgNAgggASQggATgigFIgZgDIgPgCQgfgTgNAGQgKAEgDAWIgDAoQgCAXgLAHQgeARgPAEQgMAEgOAAQgKAAgKgBg");
	var mask_graphics_24 = new cjs.Graphics().p("AOlFGIhTgMQgwgHgZgMQgYgMAghCQgTgegrhdQgrhdBPAcQBQAbAwgXQAvgYgnhjQgnhlBFgeQBEgfA6APQAaAGgIBVQBEg9AkAVQBAAkAMAoQAWBCgqAIQgGABgcABQgSAAgCAGQgBADA4AnQA7AqAGALQARAegOAkQgPAlglAWQgmAVgngFIgcgDIgSgCQgkgWgPAHQgMAFgDAZIgDAvQgEAagMAHQgjAUgRAGQgPAEgRAAQgKAAgLgCg");
	var mask_graphics_25 = new cjs.Graphics().p("AOLFYIhegNQg2gIgcgNQgcgOAlhLQgVgigxhoQgwhoBaAeQBaAeA3gbQA2gagshxQgshxBOgjQBOgjBCAQQAdAIgKBgQBOhFApAXQBIApAOAsQAYBLgwAJQgHACgfABQgUAAgDAHQgBACA/AtQBDAuAHANQATAigQApQgRAqgqAYQgrAZgsgGIghgDQgSgBgCgBQgogZgSAIQgOAGgDAcIgEA0QgEAegPAJQgnAXgUAGQgQAFgUAAQgLAAgNgCg");
	var mask_graphics_26 = new cjs.Graphics().p("ANyFpIhpgOQg9gIgfgPQgfgPAqhUQgYgmg2h0Qg2hzBlAiQBlAgA9gdQA8gegwh+Qgxh+BXgnQBXgnBKASQAgAIgLBrQBYhNAuAZQBQAtAPAyQAbBTg1ALQgIABgjACQgXAAgDAHQgBADBGAyQBKAzAJAOQAVAmgTAuQgSAugwAcQgwAcgxgHIgkgDQgVgCgCgBQgtgbgUAJQgPAGgEAgIgFA6QgEAigQAJQgsAagXAGQgTAGgWAAQgMAAgOgCg");
	var mask_graphics_27 = new cjs.Graphics().p("ANZGKIh0gQQhDgJgigQQgigQAuhdQgagpg7iAQg7h/BvAlQBvAkBDggQBDgig1iKQg1iLBggrQBggsBSAUQAjAJgMB2QBhhVAyAcQBZAxARA3QAdBbg7AMQgJACgnABQgZAAgDAJQgCADBOA2QBSA5AJAPQAYApgVAzQgVAzg1AfQg1Aeg2gHIgogDQgXgCgCgBQgygegVAKQgRAHgFAjIgFBAQgFAlgSALQgxAcgYAHQgWAHgYAAQgOAAgPgCg");
	var mask_graphics_28 = new cjs.Graphics().p("ANBGuIh/gRQhJgKglgSQgmgRAzhmQgcgshBiLQhAiKB6AoQB5AmBJgjQBKglg6iWQg6iYBpguQBpgxBaAWQAmAJgOCBQBrhdA2AeQBhA2ASA7QAgBkhBANQgJACgqABQgcABgEAJQgBADBUA8QBaA9AKARQAaAsgXA4QgXA4g6AhQg6Aig7gIIgsgDQgZgCgCgBQg2ghgYALQgTAIgFAmQgDAvgDAXQgFAogUALQg1AfgbAIQgXAIgbAAQgPAAgQgCg");
	var mask_graphics_29 = new cjs.Graphics().p("AMpHRIiKgSQhPgLgogSQgpgUA3htQgegwhGiXQhFiVCEArQCDAqBQgnQBPgog+iiQg/ikBygzQBzg0BgAXQAqAKgPCLQBzhlA8AhQBoA6AUBAQAiBshGAOQgKACguACQgeABgEAJQgCAEBcBAQBhBCAKASQAcAxgYA8QgZA8g/AkQg/AlhBgJIgvgDQgbgCgDgBQg6gjgaALQgUAJgFApQgEAzgDAZQgGArgVAMQg6AigdAJQgaAIgdAAQgQAAgRgCg");
	var mask_graphics_30 = new cjs.Graphics().p("AMRHzIiUgSQhVgMgsgUQgrgUA7h2Qghg0hKihQhLihCOAuQCOAtBVgpQBWgrhDivQhDiwB7g3QB7g4BoAZQAtAKgRCVQB9hsBAAjQBwA+AVBFQAlB0hMAPQgLACgxADQggAAgFALQgBAEBiBEQBoBHAMAUQAeA0gbBBQgbBAhDAnQhEAohGgKIgzgDQgcgCgEgCQg+glgcAMQgWAKgGAsQgEA3gDAaQgHAvgXANQg+AkgfAKQgcAJggAAQgRAAgSgDg");
	var mask_graphics_31 = new cjs.Graphics().p("AL6IWIifgUQhbgMgugWQgvgWBAh9Qgjg4hQisQhPirCXAxQCYAvBbgsQBcguhHi7QhIi7CEg7QCEg8BvAaQAwALgSCfQCGh0BEAmQB4BCAXBKQAnB7hRARQgMACg1ACQgiABgFALQgCAFBpBJQBwBMAMAUQAgA4gdBFQgdBFhIAqQhJAqhKgKIg2gDQgfgCgEgCQhDgogdANQgYALgGAvQgFA7gDAcQgHAxgZAPQhDAmghALQgeAJgiAAQgSAAgTgCg");
	var mask_graphics_32 = new cjs.Graphics().p("ALiI4IiogVQhhgNgygXQgxgXBEiGQglg7hVi2QhUi3ChA0QChAyBigvQBigxhMjGQhMjHCMg/QCNhAB2AbQAzAMgTCqQCOh8BJAoQB/BGAYBOQAqCEhWARQgNADg4ACQgkABgGAMQgCAFBwBNQB3BRANAWQAhA7geBJQgfBKhNAtQhNAshQgKIg5gEQghgCgEgCQhHgqggAOQgYALgHAzQgFA+gEAeQgIA0gaAQQhHApgkALQgfAKgmAAQgSAAgVgCg");
	var mask_graphics_33 = new cjs.Graphics().p("ALMJZIizgWQhngNg0gYQg1gZBJiOQgog+hZjBQhZjBCrA3QCqA1BogyQBog1hQjSQhRjSCVhDQCVhEB9AdQA3ANgWCzQCYiDBMAqQCIBKAZBTQAsCLhcATQgNADg7ACQgnABgGANQgCAFB3BSQB9BVAOAXQAkA/ghBOQghBOhRAvQhSAvhUgLIg9gDQgjgCgEgCQhMgtghAPQgaALgIA2QgFBBgEAgQgIA4gcAQQhLAsgmAMQgiALgnAAQgUAAgVgDg");
	var mask_graphics_34 = new cjs.Graphics().p("AK1J6Ii8gXQhtgOg3gZQg4gaBNiWQgqhBhejMQhejMC1A6QC0A4Btg1QBug3hVjeQhUjeCdhGQCdhICEAfQA6ANgXC9QCgiKBRAsQCPBOAaBYQAuCShgAUQgOADg/ADQgpABgGANQgCAFB9BXQCFBZAOAZQAmBBgjBTQgiBShWAyQhXAyhZgLIhAgEQglgDgEgCQhQgvgjAQQgcAMgIA5QgFBFgFAhQgIA7geASQhPAtgoANQgkAMgqAAQgVAAgWgDg");
	var mask_graphics_35 = new cjs.Graphics().p("AKfKaIjGgYQhzgOg6gbQg6gbBRidQgshFhjjWQhijWC9A8QC+A7Bzg4QBzg6hYjoQhZjqClhKQCmhLCLAfQA8APgYDGQCoiRBVAvQCWBRAdBcQAwCahmAVQgPADhBADQgrABgHAOQgCAFCDBbQCMBeAPAaQAnBFgkBXQgkBWhbA1QhbA0hdgMIhEgEQgngCgEgCQhUgyglARQgdANgJA7QgGBJgEAjQgJA+gfASQhUAwgqAOQgmAMgsAAQgWAAgXgDg");
	var mask_graphics_36 = new cjs.Graphics().p("AKJK6IjPgZQh5gPg8gcQg+gcBVilQguhIhnjgQhnjgDHA/QDGA9B5g7QB5g8hdj0Qhdj0CuhOQCthPCSAhQA/APgZDQQCwiYBaAwQCdBWAdBgQAzChhrAWQgPADhFAEQgtABgHAOQgCAGCJBfQCSBiAQAcQAqBIgnBbQgmBahfA3QhfA3higMIhHgEQgpgCgFgDQhXg0gnASQgfANgJA/QgGBMgFAlQgJBBghATQhYAygsAOQgnANgvAAQgXAAgYgDg");
	var mask_graphics_37 = new cjs.Graphics().p("AJ0LZIjZgaQh+gPhAgdQg/geBYisQgwhLhrjrQhsjqDPBCQDQBAB+g9QB/hAhhj+Qhhj/C1hSQC2hTCYAjQBCAPgaDaQC5igBdAzQCkBZAfBlQA1CohwAXQgQAEhIADQgvABgHAQQgDAGCQBjQCZBnAQAcQAsBLgoBfQgoBfhkA5QhkA6hmgMIhLgFQgqgCgFgDQhcg2goASQggAPgKBBQgGBPgFAnQgKBEgiAUQhcA0guAPQgqAOgwAAQgYAAgZgEg");
	var mask_graphics_38 = new cjs.Graphics().p("AJeL4IjigbQiDgQhCgeQhDgfBdi0QgyhOhwj0Qhwj0DYBFQDZBCCDhAQCEhChlkJQhlkKC+hVQC9hXCfAkQBFAQgcDjQDBimBhA1QCrBcAgBpQA3Cwh0AYQgRADhLAEQgxABgIAQQgCAGCWBoQCfBrARAeQAtBOgqBjQgpBjhoA8QhoA8hrgNIhOgFQgsgCgFgDQhgg4gqATQgiAPgJBDQgHBTgFApQgLBGgkAVQhfA3gxAQQgrAOgzAAQgYAAgbgEg");
	var mask_graphics_39 = new cjs.Graphics().p("AJKMXIjsgcQiIgRhFgfQhGggBhi7Qg0hSh1j9Qh0j+DhBHQDhBFCJhDQCKhFhpkTQhpkVDFhYQDFhbCmAmQBHARgdDrQDJitBlA3QCyBhAiBtQA5C2h5AZQgSAEhOAEQg0ABgHARQgDAGCcBsQCmBvARAfQAwBRgsBnQgsBnhrA+QhtA/hvgOIhRgEQgugDgFgCQhkg7gsAUQgjAPgKBHQgHBWgGAqQgKBKgmAVQhjA6gyAPQguAPg1AAQgZAAgbgDg");
	var mask_graphics_40 = new cjs.Graphics().p("AI1M1Ij1gdQiNgRhIghQhIghBljCQg2hVh4kHQh6kHDqBJQDqBICOhFQCPhIhtkeQhtkfDNhcQDMheCsAnQBLARgeD1QDQizBpA5QC5BkAiBxQA7C9h9AaQgSAEhSAEQg1ACgIARQgDAGCjBwQCrBzATAgQAwBVgtBrQgtBqhwBBQhxBBhzgOIhUgFQgwgCgGgDQhng9guAVQgkAQgKBJQgIBagGArQgLBMgnAXQhnA7g0ARQgvAPg3AAQgbAAgcgDg");
	var mask_graphics_41 = new cjs.Graphics().p("AIhNSIj+gdQiSgShKgiQhKgiBnjKQg4hXh8kRQh+kQDyBMQDyBKCUhIQCUhKhwkpQhxkpDUhfQDUhhCyAoQBNASgfD9QDYi6BsA7QDABoAkB1QA9DEiCAbQgTAEhUAEQg3ACgJASQgDAGCoB0QCyB3ATAiQAzBXgvBvQgvBuh0BDQh1BEh4gPIhXgFQgxgCgGgDQhrg/gwAWQglAQgLBMQgHBdgHAtQgLBPgoAXQhsA+g2ARQgxAQg5AAQgbAAgdgEg");
	var mask_graphics_42 = new cjs.Graphics().p("AINNvIkGgeQiYgThNgjQhMgjBrjQQg6hbiAkZQiCkaD7BOQD6BNCYhKQCZhNh0kzQh0kzDbhjQDchkC4ApQBQASghEHQDfjBBxA9QDHBrAkB5QBADLiHAcQgUAEhXAFQg5ABgJATQgDAHCuB3QC4B8AUAiQA0BagwBzQgxByh4BGQh5BGh8gQQgXgChDgDQgzgCgGgDQhvhBgxAWQgnARgLBOQgIBhgHAuQgMBSgpAYQhvBAg4ASQgzAQg7AAQgcAAgegEg");
	var mask_graphics_43 = new cjs.Graphics().p("AH5OMIkPggQicgThOgkQhQgkBujXQg6hdiGkjQiGkjEDBRQECBPCehNQCehQh4k8Qh4k9DjhmQDjhoC+ArQBSATghEOQDmjGB0A+QDOBvAmB9QBBDRiLAdQgVAEhaAFQg7ACgJATQgDAHC0B7QC+CAAUAjQA2BegyB2QgyB2h9BIQh9BIh/gQQgYgChFgDQg1gDgGgDQhzhDgzAXQgnASgMBRQgJBjgGAwQgNBUgrAZQhyBCg6ATQg0ARg+AAQgdAAgfgEg");
	var mask_graphics_44 = new cjs.Graphics().p("AHmOoIkXggQiigUhQglQhTgmBzjdQg9hgiKksQiKksELBTQEKBSCjhQQCjhSh7lGQh8lHDqhpQDqhrDEAsQBVATgjEXQDujNB4BBQDTByAnCBQBEDYiQAdQgVAFhdAFQg9ACgJATQgDAIC5B+QDECEAVAkQA4Bhg0B5Qg0B6iABKQiBBLiEgQQgZgChHgEQg2gCgHgDQh2hGg0AYQgpASgMBUQgJBmgHAxQgNBYgsAZQh2BEg8ATQg2ASg/AAQgeAAgggEg");
	var mask_graphics_45 = new cjs.Graphics().p("AHTPEIkggiQimgUhTgmQhVgnB3jkQg/hjiOk0QiOk1ETBWQESBUCohSQCohVh/lPQiAlRDxhsQDxhvDKAtQBXAVgkEfQD2jTB7BCQDaB1AoCFQBFDeiUAfQgVAEhgAFQg+ACgKAVQgDAHC+CDQDKCHAWAmQA5Bjg2B9Qg1B+iEBMQiFBNiHgRQgagChJgDQg4gDgHgDQh5hIg2AZQgrATgMBVQgJBqgHAzQgOBZgtAbQh6BGg9ATQg4AThCAAQgeAAghgEg");
	var mask_graphics_46 = new cjs.Graphics().p("AHBPfIkogiQiqgVhXgnQhXgoB6jqQhBhmiSk+QiSk9EbBYQEaBXCshVQCthXiClZQiDlaD4hvQD3hyDQAvQBaAUglEoQD8jaB/BFQDgB4ApCJQBHDkiYAfQgWAFhiAFQhBACgJAVQgEAIDECGQDQCLAWAnQA7Bmg3CBQg3CBiIBOQiJBPiLgRQgbgChLgEQg6gCgGgEQh9hJg4AZQgrAUgNBYQgJBsgIA0QgOBdguAbQh+BIg/AUQg5AThEAAQgfAAghgEg");
	var mask_graphics_47 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");
	var mask_graphics_150 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:114.1416,y:21.7192}).wait(1).to({graphics:mask_graphics_19,x:116.9353,y:23.6194}).wait(1).to({graphics:mask_graphics_20,x:119.701,y:25.5023}).wait(1).to({graphics:mask_graphics_21,x:122.435,y:27.3643}).wait(1).to({graphics:mask_graphics_22,x:125.1362,y:29.2045}).wait(1).to({graphics:mask_graphics_23,x:127.8046,y:31.0224}).wait(1).to({graphics:mask_graphics_24,x:130.4399,y:32.818}).wait(1).to({graphics:mask_graphics_25,x:133.0421,y:34.5911}).wait(1).to({graphics:mask_graphics_26,x:135.6112,y:36.3418}).wait(1).to({graphics:mask_graphics_27,x:138.1472,y:36.547}).wait(1).to({graphics:mask_graphics_28,x:140.65,y:36.3788}).wait(1).to({graphics:mask_graphics_29,x:143.1197,y:36.2127}).wait(1).to({graphics:mask_graphics_30,x:145.5562,y:36.0489}).wait(1).to({graphics:mask_graphics_31,x:147.9596,y:35.8873}).wait(1).to({graphics:mask_graphics_32,x:150.3298,y:35.7279}).wait(1).to({graphics:mask_graphics_33,x:152.6668,y:35.5707}).wait(1).to({graphics:mask_graphics_34,x:154.9706,y:35.4158}).wait(1).to({graphics:mask_graphics_35,x:157.2413,y:35.2631}).wait(1).to({graphics:mask_graphics_36,x:159.4788,y:35.1127}).wait(1).to({graphics:mask_graphics_37,x:161.6831,y:34.9644}).wait(1).to({graphics:mask_graphics_38,x:163.8543,y:34.8184}).wait(1).to({graphics:mask_graphics_39,x:165.9923,y:34.6746}).wait(1).to({graphics:mask_graphics_40,x:168.0971,y:34.5331}).wait(1).to({graphics:mask_graphics_41,x:170.1687,y:34.3938}).wait(1).to({graphics:mask_graphics_42,x:172.2071,y:34.2567}).wait(1).to({graphics:mask_graphics_43,x:174.2124,y:34.1219}).wait(1).to({graphics:mask_graphics_44,x:176.1845,y:33.9892}).wait(1).to({graphics:mask_graphics_45,x:178.1234,y:33.8589}).wait(1).to({graphics:mask_graphics_46,x:180.0291,y:33.7307}).wait(1).to({graphics:mask_graphics_47,x:180.2504,y:38.1563}).wait(103).to({graphics:mask_graphics_150,x:180.2504,y:38.1563}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_5
	this.instance = new lib.germs_group();
	this.instance.setTransform(158.5,130,1,1,0,0,0,210.5,142);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(132).to({_off:true},1).wait(39));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_29 = new cjs.Graphics().p("AJEMHQhZADj/gOQj/gOCfhXQCfhXAJhTQAIhTkLgaQkLgZAUh1QATh1BqhDQAugeCtBOQgtiMBaghQCeg5BmAOQCrAWgkBAQgFAJghAlQgWAYAKAJQADACCdgsQClguAhAAQBXAAA9AvQA+AxAABDQAABFg+AwIgpAlQgXAVgEABQhcAfgFAaQgEAVA0AYQBBAbAfANQA1AaAAAXQAAA+gKAcQgOAlguAlIiDBnQhLA8g5AYQgLAEgOAAQg1AAhThNg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AHFNRQiFAEmAgVQmBgVDxiDQDviDANh8QAMh+mRgnQmTgmAeiwQAcivCfhmQBGgsEGB1QhFjUCIgyQDuhXCZAWQECAig2BfQgIAOgxA6QgiAkAPANQAFAEDthDQD5hHAxAAQCCAABdBJQBdBJAABmQAABmhdBIQgRAOgtAqQgiAfgHADQiLAugHAoQgFAfBNAkQBiAoAuAVQBRAmAAAjQAABegQAqQgUA4hGA3IjECcQhzBZhVAkQgRAHgUAAQhQAAh+h0g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AFLOZQixAFn8gcQn/gcE/itQE+iuASilQAQimoVgzQoWgzAojoQAljqDTiHQBcg6FbCbQhakZCzhCQE9hzDKAcQFVAuhHB+QgKAThCBMQgsAwATARQAIAFE5hYQFJheBCAAQCsAAB7BgQB7BhAACHQAACIh7BgQgWATg8A3QguApgJAEQi4A9gJA0QgHApBmAvQCDA2A9AcQBrAyAAAuQAAB9gVA3QgbBLhdBJQhuBWiWB4QiXB2hxAwQgXAKgaAAQhrAAimiag");
	var mask_1_graphics_32 = new cjs.Graphics().p("AE7PqQjbAGp0giQp4gjGLjWQGJjWAWjMQAUjOqTg/QqVg/AykfQAukhEEinQByhIGuDAQhwlcDehRQGHiOD7AiQGlA4hYCdQgNAXhQBdQg3A9AXAUQAKAHGDhtQGXh1BRAAQDVAACYB4QCZB3AACnQAACoiZB3QgbAXhKBEQg5A0gLAEQjjBMgLBBQgJAxB+A7QCiBCBLAjQCEA+AAA5QAACagaBFQghBchzBbQiIBqi5CUQi8CTiLA7QgcALghAAQiEAAjNi+g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AF1SjQkDAHrpgpQrrgpHTj9QHRj+AajyQAYjzsMhLQsPhKA7lVQA2lWE1jGQCHhVH8DjQiEmcEHhgQHPioEqApQHzBChpC6QgPAbhgBvQhBBHAcAYQALAIHLiBQHiiKBgAAQD8AAC1CNQC0COAADFQAADIi0CNQghAbhXBQQhDA9gNAGQkOBagNBMQgLA7CWBGQDABOBZApQCcBJAABEQAAC3geBRQgnBtiJBsQihB+jcCvQjdCuimBFQghAOgnAAQicAAjzjhg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AGsVVQkpAItYgvQtcgvIZkkQIXkjAekWQAckYuBhXQuEhVBDmHQA/mKFjjjQCbhiJIEFQiYnaEuhuQIVjCFWAvQI+BNh4DVQgSAfhuCAQhKBSAgAbQANAKIPiVQIrieBuAAQEiAADPCiQDPCjAADjQAADljPCiQgmAghjBcQhOBGgPAGQk2BogPBYQgMBDCsBRQDcBaBnAvQCzBUAABOQAADSgjBeQgtB9idB7Qi5CRj8DKQj/DIi+BQQgnAQgsAAQizAAkZkDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AHiYAQlPAJvDg1QvHg1JclIQJalIAik5QAfk7vyhhQv0hgBMm5QBGm6GPkAQCvhuKSElQisoVFUh8QJXjaGCA1QKFBWiHDwQgTAkh8CPQhUBcAkAfQAOALJSinQJwizB8AAQFGAADpC3QDqC3AAD/QAAECjqC3QgqAjhxBoQhXBPgRAHQlcB0gRBkQgOBMDCBaQD3BlB0A1QDKBfAABYQAADsgnBpQgzCNixCLQjQCjkcDjQkfDhjWBaQgrASgyAAQjKAAk7kjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AIWakQlzAKwqg7Qwvg6KdlsQKalrAmlaQAildxdhrQxhhqBUnoQBOnqG6kbQDBh5LYFEQi+pOF5iJQKXjxGqA6QLLBgiVEJQgWAniJCfQheBmApAiQAPAMKRi5QKzjFCJAAQFpAAECDKQECDKAAEbQAAEdkCDLQguAnh9ByQhgBYgTAHQmCCCgTBtQgPBVDWBkQESBwCAA6QDgBpAABiQAAEEgsB1Qg4CcjECaQjmC0k6D7Qk+D5jsBkQgwAUg3AAQjgAAlclCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AJHdBQmVAKyNhAQyRg/LbmNQLXmNApl6QAll9zEh1QzIh0BcoVQBVoXHjk1QDTiFMbFiQjPqEGbiVQLUkIHSBAQMNBoikEiQgXAriWCtQhmBwAsAlQARANLNjKQLzjYCWAAQGKAAEaDdQEaDdAAE1QAAE3kaDeQgzAqiIB9QhpBggVAIQmlCNgVB4QgRBcDrBtQErB7CMBAQD0ByAABrQAAEdgvCAQg+CqjWCoQj7DFlYESQlaEQkDBtQg0AWg8AAQj0AAl9lgg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AJ2fXQm1ALzrhFQzwhFMWmtQMSmtAsmYQAomc0nh+Q0qh+BjpAQBcpCIKlOQDjiQNcF/Qjgq4G8iiQMPkdH3BGQNMBwiwE5QgaAvihC7QhvB4AwApQASAOMIjbQMvjpCiAAQGqAAExDvQExDvAAFOQAAFRkxDuQg3AuiTCIQhyBngWAJQnICYgWCCQgSBkD9B2QFECECWBFQEJB8AABzQAAE0g0CKQhCC4jnC2QkQDUlzEpQl3ElkXB2Qg4AYhCAAQkHAAmcl8g");
	var mask_1_graphics_39 = new cjs.Graphics().p("EAKjAhmQnVAM1EhKQ1KhKNOnLQNKnMAvm2QAsm42FiIQ2JiHBqpoQBjpsIulmQD0iaOZGaQjwrqHcisQNHkyIbBKQOIB5i9FQQgbAxiuDIQh2CCA0ArQATAPM/jqQNpj6CtAAQHJAAFHEAQFGEAAAFmQAAFplGD/Qg8AyidCRQh6BvgYAJQnoCjgXCLQgUBrEQB+QFaCOChBKQEcCFAAB7QAAFKg3CUQhHDFj4DCQkjDkmOE+QmRE6krB/Qg9AZhGAAQkaAAm5mXg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EALNAjuQnyAN2ahPQ2fhPODnoQOAnpAynRQAunV3eiQQ3iiPBxqQQBoqTJSl8QEEikPTG0Qj/sZH6i4QN7lEI9BPQPCB/jJFmQgdA0i4DVQh+CKA2AuQAVAQNzj5QOhkJC4AAQHmAAFbEQQFbEQAAF8QAAF/lbERQg/A0inCaQiCB2gZAKQoHCugZCTQgVByEhCGQFwCXCsBPQEtCNAACDQAAFeg7CeQhLDSkIDOQk1DzmnFRQmrFPk+CGQhAAbhKAAQksAAnWmxg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAL2AlvQoOAN3rhTQ3xhTO2oEQOyoEA1nsQAxnv4ziYQ43iXB3q1QBvq4JzmSQESitQLHNQkOtGIXjCQOtlXJeBTQP4CHjUF6QgfA3jDDhQiECRA5AxQAWAROlkHQPVkYDDAAQIBAAFuEfQFvEfAAGSQAAGVlvEgQhCA3ixCjQiJB9gaAKQokC3gbCcQgWB4ExCOQGFCgC1BTQE/CVAACKQAAFzg+CmQhQDekWDaQlIEAm+FlQnDFhlQCOQhEAchOAAQk9AAnwnJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAMcAnpQooAO44hXQ4+hYPnoeQPhoeA4oEQAzoI6DigQ6IigB+rXQB0rbKTmmQEgi2Q/HkQkctxIyjLQPelpJ8BYQQrCOjfGMQghA6jMDtQiLCZA8AzQAXASPUkVQQHkmDNAAQIaAAGCEtQGBEuAAGmQAAGqmBEuQhGA6i6CrQiQCDgcALQo/DBgcCkQgXB+FACVQGZCnC+BYQFOCcAACSQAAGFhBCvQhTDoklDmQlXENnVF2QnaFzlhCWQhHAdhTAAQlNAAoJngg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EANAApcQpBAP6BhbQ6GhcQUo2QQPo3A6ocQA2og7PinQ7UimCDr5QB6r8Kxm6QEti+RwH6QkouYJLjVQQKl5KZBcQRcCUjpGeQgiA9jWD3QiRCgA/A1QAYATQAkhQQ2k0DWAAQIzAAGTE8QGTE8AAG5QAAG9mTE7QhJA9jCCzQiXCJgdALQpaDKgdCrQgYCEFPCcQGrCvDHBbQFeCkAACYQAAGXhEC2QhYD0kyDvQlnEanqGHQnvGElxCcQhLAfhWAAQlcAAohn2g");
	var mask_1_graphics_44 = new cjs.Graphics().p("EANiArIQpZAP7EheQ7KhfQ+pOQQ5pOA9oyQA4o28WiuQ8bitCIsYQB/sbLNnLQE5jGSfIOQk1u+JkjdQQ0mIK0BfQSJCajyGwQgkA/jeEBQiYCmBCA4QAZAUQqktQRilBDeAAQJKAAGkFJQGjFIAAHLQAAHPmjFJQhMA/jKC6QidCPgeAMQpyDRgfCyQgZCKFdCiQG8C2DPBfQFsCqAACfQAAGnhHC+QhbD+k+D5Ql2Eln+GXQoDGUmACiQhOAhhaAAQlqAAo3oLg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAOCAstQpvAQ8EhiQ8KhjRnpjQRgpjA/pHQA6pL9Yi0Q9ei0CNs0QCDs5LoncQFFjNTJIiQk/vhJ6jmQRbmWLOBiQSzCgj7G/QglBCjmELQidCsBEA6QAaAURRk4QSLlMDmAAQJgAAGzFUQGyFVAAHcQAAHgmyFUQhPBCjRDBQijCUgfAMQqKDZgfC5QgaCPFpCoQHNC9DXBiQF5CwAAClQAAG3hJDFQhfEGlKEDQmDEvoRGnQoWGimPCpQhQAhhdAAQl4AApLoeg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EAOfAuLQqDAR8/hmQ9FhmSLp3QSGp3BBpaQA7pe+Wi7Q+bi5CStQQCHtUMAnrQFQjUTyI0QlLwCKPjtQSAmkLmBmQTbClkEHOQgmBEjuETQiiCyBGA8QAbAVR2lCQSxlYDuAAQJzAAHBFgQHBFgAAHsQAAHvnBFgQhRBEjYDHQioCZggAMQqfDhghC/QgbCTF2CuQHcDDDeBlQGFC3AACpQAAHGhMDLQhhEPlVELQmQE6ojG0QonGxmcCtQhSAjhhAAQmEAApfowg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EAO7AviQqXAS91hpQ98hpStqKQSoqKBDpsQA9pv/PjAQ/Vi/CWtpQCLttMXn6QFajaUXJEQlUwgKij0QSimwL7BpQUACqkLHbQgnBGj1EcQinC3BIA9QAcAWSXlMQTVlhD1AAQKGAAHOFqQHOFqAAH6QAAH/nOFqQhTBGjfDNQitCdghANQqzDnghDFQgcCXGACzQHqDJDlBoQGRC8AACvQAAHShODSQhlEXlfETQmcFDoyHBQo4G9moCzQhVAkhjAAQmQAApwpBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAPUAwyQqoAS+ohrQ+uhsTNqbQTHqbBFp8UAA+gKAggEgDFUggKgDEACbgOAQCPuEMroHQFjjgU5JTQlcw7Kzj7QTCm8MPBsQUiCvkTHoQgoBHj7EjQisC8BLA/QAcAWS2lUQT1lrD8AAQKXAAHbF0QHaF0AAIHQAAIMnaF0QhWBHjlDTQixChgiAOQrFDtgiDJQgdCcGKC4QH3DODrBrQGbDBAACzQAAHfhQDXQhnEeloEbQmnFLpBHNQpHHJmzC4QhXAkhmAAQmaAAqBpQg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAPrAx7Qq4AT/WhuQ/chuTpqrQTkqrBHqLUABAgKPgg0gDKUgg6gDIACegOVQCSuZM/oUQFqjlVZJiQllxVLEkBQTenGMiBuQVACzkYH0QgpBJkCEqQivDABMBAQAdAXTSlcQUTlzECAAQKmAAHmF8QHlF9AAITQAAIYnlF9QhYBJjqDYQi1CkgjAOQrWDzgjDOQgdCgGUC8QICDSDwBuQGlDGAAC3QAAHqhRDcQhqEmlwEgQmxFTpPHYQpVHUm8C8QhaAlhoAAQmkAAqQpeg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAQAAy+QrHAS//hwUggGgBwAUEgK5QT9q5BIqYUABCgKdghggDOUghmgDNAChgOoQCWusNQoeQFyjqV1JuQlsxsLTkGQT4nPMyBwQVcC2keH+QgqBLkHEwQizDFBNBBQAeAYTslkQUul7EHAAQK0AAHwGEQHwGFAAIeQAAIknwGEQhZBLjvDcQi5CogkAOQrlD4gkDSQgdCjGcDAQINDXD1BwQGuDKAAC7QAAH0hUDhQhrErl4EnQm6FapbHiQpiHdnFDAQhcAmhqAAQmtAAqdpqg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EAQSAz5UgLTAATgglgByUggrgBzAUbgLFQUVrGBJqkUABDgKpgiHgDSUgiNgDQAClgO5QCYu9NfopQF5juWPJ5QlzyALfkLQUQnXNBByQV1C6kkIHQgqBMkME2Qi2DIBPBCQAeAYUDlqQVGmCELAAQLCAAH4GMQH5GLAAIoQAAIun5GLQhbBMjzDgQi9CsgkAOQryD8glDXQgeClGkDEQIXDbD5ByQG2DNAAC+QAAH+hVDlQhuEwl/EsQnCFhpmHqQpsHmnODEQhdAmhtAAQm0AAqqp1g");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAQjA0tUgLfAAUghFgB0UghNgB1AUwgLQQUprRBLqvUABEgK0giqgDVUgivgDUACngPHQCavNNtoxQF/jyWlKEQl4yTLrkPQUjnfNOB0QWMC9kpIPQgrBNkQE7Qi5DLBQBEQAfAYUXlwQVbmIEQAAQLNAAIAGSQIBGSAAIxQAAI2oBGRQhcBOj3DjQjACuglAPQr+EAglDaQgfCoGqDHQIgDeD9B0QG9DQAADCQAAIFhXDpQhvE1mFExQnJFmpwHyQp2HunVDGQhfAohuAAQm7AAq0qAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAQxA1bUgLpAATghigB1UghpgB2AVCgLbQU7raBMq4UABEgK+gjHgDXUgjNgDXACpgPVQCdvZN4o5QGFj1W4KMQl+yiL2kTQU1nlNZB1QWfDAktIWQgrBOkUE/Qi8DOBSBFQAfAYUpl0QVtmOEUAAQLWAAIHGXQIIGXAAI5QAAI+oIGXQheBOj6DnQjCCwgmAPQsIEEglDcQggCrGwDJQInDhEBB2QHCDTAADEQAAINhXDrQhxE6mKE1QnQFqp4H5Qp+H1ncDJQhgAohvAAQnBAAq+qIg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EAQ9A2BUgLxAAUgh6gB3UgiBgB3AVRgLjQVKrjBMrAUABGgLFgjhgDaUgjmgDZACrgPgQCevkODo/QGIj4XJKTQmCyvL+kWQVEnrNjB3QWvDBkwIdQgsBPkXFCQi+DRBTBFQAfAZU4l5QV9mSEWAAQLeAAIOGcQINGbAAJAQAAJEoNGbQhfBPj9DpQjFCzgmAPQsQEHgmDfQggCsG1DMQItDkEDB3QHIDVAADGQAAIThZDuQhyE9mOE4QnVFvp/H/QqGH5nhDMQhhAohwAAQnGAArGqPg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EARHA2gUgL4AAUgiOgB4UgiVgB4AVdgLpQVXrqBNrGUABGgLLgj1gDdUgj7gDbACtgPoQCfvuOLpEQGMj6XXKZQmGy7MFkYQVQnvNrB4QW8DDkzIhQgsBQkZFGQjADSBTBGQAgAZVEl8QWJmWEZAAQLlAAISGgQISGfAAJEQAAJJoSGgQhfBQkADrQjGC0gmAPQsYEJgmDhQggCuG4DNQIyDnEGB4QHMDXAADIQAAIXhZDwQhzFBmTE7QnYFyqFIDQqMH/nlDNQhiAphyAAQnKAArMqWg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EARPA25UgL+AAUgidgB5UgikgB5AVngLvQVgruBNrMUABHgLQgkFgDeUgkLgDcACugPwQCgv1OSpIQGOj8XhKeQmIzDMKkaQVanzNxB5QXGDFk1IlQgtBQkbFIQjADTBTBHQAgAZVNl/QWUmYEbAAQLqAAIWGiQIWGiAAJJQAAJNoWGiQhhBRkBDtQjHC1gnAPQsdELgnDjQggCvG8DPQI2DoEHB4QHPDZAADKQAAIbhaDxQhzFDmWE9QncF1qJIHQqQICnpDOQhiAqhzAAQnNAArRqag");
	var mask_1_graphics_57 = new cjs.Graphics().p("EARUA3KUgMBAAUgiogB5UgivgB6AVtgLyQVnryBOrPUABHgLUgkQgDfUgkXgDeACvgP0QChv6OWpLQGRj9XoKhQmKzJMOkcQVgn1N2B5QXNDGk2IoQgtBRkcFJQjCDUBUBHQAgAaVUmBQWbmaEcAAQLuAAIYGkQIZGkAAJMQAAJQoZGkQhhBRkCDuQjJC2gmAQQsiEMgnDkQggCwG+DPQI5DpEJB6QHRDaAADKQAAIehaDzQh1FEmXE/QneF2qNIKQqTIEnrDQQhkAphzAAQnPAArVqdg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EARXA3VUgMDAAUgiugB6Ugi2gB6AVxgL0QVsr1BNrRUABIgLWgkYgDgUgkdgDeACvgP4QCiv8OYpNQGSj+XtKjQmLzNMQkcQVln3N4B6QXSDGk3IqQguBRkdFKQjCDVBUBHQAgAaVYmCQWfmcEdAAQLwAAIaGmQIaGlAAJNQAAJSoaGmQhhBRkDDvQjJC3gnAPQskENgnDlQggCwG/DQQI7DqEJB6QHTDaAADLQAAIghbDzQh0FFmZFAQnfF4qPILQqVIGntDQQhjAqh0AAQnRAArXqfg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EARYA3YUgMEAAUgiwgB6Ugi4gB6AVzgL1QVsr1BOrSUABHgLXgkZgDgUgkggDeACvgP5QCjv9OZpOQGSj+XvKkQmMzOMRkdQVmn3N5B6QXTDGk3IqQguBSkdFKQjDDVBVBIQAgAZVZmCQWhmcEdAAQLxAAIaGmQIbGmAAJNQAAJTobGmQhhBRkEDvQjJC3gnAPQskEOgnDlQghCwHADRQI7DqEKB6QHTDaAADLQAAIghaD0Qh1FGmZFAQngF4qQIMQqVIGnuDQQhjAqh0AAQnRAArYqgg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EARYA3YUgMEAAUgiwgB6Ugi4gB6AVzgL1QVsr1BOrSUABHgLXgkZgDgUgkggDeACvgP5QCjv9OZpOQGSj+XvKkQmMzOMRkdQVmn3N5B6QXTDGk3IqQguBSkdFKQjDDVBVBIQAgAZVZmCQWhmcEdAAQLxAAIaGmQIbGmAAJNQAAJTobGmQhhBRkEDvQjJC3gnAPQskEOgnDlQghCwHADRQI7DqEKB6QHTDaAADLQAAIghaD0Qh1FGmZFAQngF4qQIMQqVIGnuDQQhjAqh0AAQnRAArYqgg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_1_graphics_29,x:110.3992,y:85.2399}).wait(1).to({graphics:mask_1_graphics_30,x:124.291,y:96.5416}).wait(1).to({graphics:mask_1_graphics_31,x:137.7119,y:107.4602}).wait(1).to({graphics:mask_1_graphics_32,x:140.4641,y:116.742}).wait(1).to({graphics:mask_1_graphics_33,x:135.7718,y:115.0662}).wait(1).to({graphics:mask_1_graphics_34,x:131.2565,y:113.4535}).wait(1).to({graphics:mask_1_graphics_35,x:126.9183,y:111.9041}).wait(1).to({graphics:mask_1_graphics_36,x:122.7572,y:110.418}).wait(1).to({graphics:mask_1_graphics_37,x:118.7731,y:108.9951}).wait(1).to({graphics:mask_1_graphics_38,x:114.9661,y:107.6354}).wait(1).to({graphics:mask_1_graphics_39,x:111.3362,y:106.339}).wait(1).to({graphics:mask_1_graphics_40,x:107.8834,y:105.1058}).wait(1).to({graphics:mask_1_graphics_41,x:104.6076,y:103.9359}).wait(1).to({graphics:mask_1_graphics_42,x:101.5089,y:102.8291}).wait(1).to({graphics:mask_1_graphics_43,x:98.5873,y:101.7857}).wait(1).to({graphics:mask_1_graphics_44,x:95.8427,y:100.8055}).wait(1).to({graphics:mask_1_graphics_45,x:93.2752,y:99.8885}).wait(1).to({graphics:mask_1_graphics_46,x:90.8848,y:99.0347}).wait(1).to({graphics:mask_1_graphics_47,x:88.6714,y:98.2442}).wait(1).to({graphics:mask_1_graphics_48,x:86.6351,y:97.517}).wait(1).to({graphics:mask_1_graphics_49,x:84.7759,y:96.8529}).wait(1).to({graphics:mask_1_graphics_50,x:83.0937,y:96.2521}).wait(1).to({graphics:mask_1_graphics_51,x:81.5886,y:95.7146}).wait(1).to({graphics:mask_1_graphics_52,x:80.2606,y:95.2403}).wait(1).to({graphics:mask_1_graphics_53,x:79.1097,y:94.8292}).wait(1).to({graphics:mask_1_graphics_54,x:78.1358,y:94.4814}).wait(1).to({graphics:mask_1_graphics_55,x:77.339,y:94.1968}).wait(1).to({graphics:mask_1_graphics_56,x:76.7192,y:93.9755}).wait(1).to({graphics:mask_1_graphics_57,x:76.2766,y:93.8174}).wait(1).to({graphics:mask_1_graphics_58,x:76.0109,y:93.7225}).wait(1).to({graphics:mask_1_graphics_59,x:77.869,y:94.1992}).wait(91).to({graphics:mask_1_graphics_150,x:77.869,y:94.1992}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_10
	this.instance_1 = new lib.germs_group();
	this.instance_1.setTransform(158.5,130,1,1,0,0,0,210.5,142);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(121).to({_off:true},1).wait(39));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AG8IDQgKABgdgCQgdgCASgNQASgMABgMQABgNgegDQgfgEADgRQACgRAMgKQAFgEAUALQgFgUAKgFQASgIALACQAUADgEAJIgFAHQAAABgBABQAAAAAAABQAAABAAAAQAAABAAAAIASgGQATgHAEAAQAKAAAHAHQAHAHAAAKQAAAKgHAHIgFAFIgDADQgLAFAAAEQgBADAGADIALAGQAGAEAAADQAAAJgBAEQgBAGgGAFIgPAPQgIAJgHADIgCABQgHAAgJgMg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AGwINQgOAAgngCQgmgDAYgRQAYgRABgQQACgQgpgFQgpgFADgWQADgXAQgNQAHgGAbAPQgHgbAOgHQAYgLAPADQAaAEgFANIgGAJQgEAFACABIAYgIQAZgJAFAAQANAAAKAJQAJAKAAANQAAANgJAJIgGAIIgFAEQgOAGAAAFQgBAEAIAFIAOAHQAJAFAAAFQAAAMgCAFQgCAIgHAHIgUAUQgLALgJAFIgEABQgIAAgMgPg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AGjIWQgRABgwgEQgwgDAegVQAegVACgUQABgUgygHQgzgGAEgcQADgcAUgRQAJgHAhATQgJgiARgIQAegOAUAEQAgAFgHAPIgHAMQgEAGACACQABAAAdgKQAggMAGAAQAQAAAMAMQAMAMAAAQQAAARgMALIgIAJIgFAGQgSAHAAAGQgBAFAKAGIASAKQAKAGAAAGQAAAPgCAHQgDAJgIAIIgZAZQgPAPgKAGIgFABQgKAAgQgTg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AGXIfQgUABg6gEQg6gEAkgZQAkgaACgXQACgZg9gHQg8gHAEgiQAEgiAYgUQALgIAnAWQgKgpAVgJQAkgRAXAEQAnAHgJASIgIAOQgFAHACACQABABAjgNQAmgNAHAAQAUAAAOAOQAOAOAAATQAAAUgOAOIgJALIgHAGQgVAJgBAIQAAAGALAHIAWAMQAMAHAAAHQAAASgCAIQgDALgLAKIgdAeQgSARgMAHIgGACQgMAAgTgXg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AGLIoQgYABhDgFQhEgEArgeQAqgdACgcQACgchGgJQhHgIAFgnQAFgoAcgXQAMgKAuAbQgMgwAYgLQAqgUAbAFQAtAIgKAVIgKAQQgFAIACADQABABAqgPQArgQAJAAQAXAAAQARQAQAQAAAXQAAAXgQAQIgLAMIgHAIQgYALgCAIQgBAHAOAIIAZAOQAOAJAAAHQAAAVgCAKQgEAMgMANIgjAjQgUAUgPAIQgDABgDAAQgOAAgWgag");
	var mask_2_graphics_6 = new cjs.Graphics().p("AF/IxQgbABhNgFQhNgFAwgiQAwghADggQACgghQgKQhRgKAGgtQAGgtAggaQAOgLA0AeQgOg2AbgNQAwgWAfAFQAzAJgKAZIgMASQgHAJADADQABABAwgRQAygSAJAAQAaAAATATQATASAAAaQAAAbgTASIgMAOIgJAJQgbAMgCAKQgBAIAQAJIAcAQQARAJAAAJQAAAYgEALQgEAOgOAPIgnAnQgXAXgRAJQgDACgEAAQgQAAgZgeg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AFzI6QgeABhXgGQhWgGA2glQA2gmADgjQADgkhbgLQhagLAHgzQAGgyAkgdQAPgNA7AiQgPg9AegOQA2gZAiAGQA6AKgMAbIgNAUQgIALAEADQABACA1gTQA4gVALAAQAdAAAVAVQAVAVAAAdQAAAegVAUIgOAQIgJAKQgfANgCAMQgBAJARAKIAhARQASALAAAKQAAAbgEAMQgEAQgQAQIgsAtQgaAZgTALQgEACgEAAQgSAAgcgig");
	var mask_2_graphics_8 = new cjs.Graphics().p("AFnJDQgiABhfgGQhggHA8gpQA8gqADgnQADgohkgMQhkgNAHg3QAHg4AoghQARgOBBAlQgRhDAigQQA7gbAmAHQBBAKgOAfIgOAWQgIAMADAEQACABA6gVQA+gWAMAAQAhAAAXAXQAXAXAAAgQAAAhgXAXIgPARIgLALQgiAPgCAMQgBAKATAMIAkATQAUAMAAALQAAAegEANQgFASgSASIgwAxQgdAcgVAMQgEACgFAAQgUAAgfglg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AFbJMQglABhogHQhpgHBBguQBCgtADgsQAEgrhugOQhugNAIg9QAIg+ArgjQATgPBIAoQgThKAlgRQBBgeAqAHQBGAMgOAiQgDAFgNATQgJANAEAEQABACBBgXQBEgZANAAQAjAAAaAZQAZAaAAAjQAAAkgZAZIgRATIgLAMQgmARgCANQgCALAVANIAoAVQAWANAAAMQAAAhgEAPQgGATgTATIg2A2QgfAggXAMQgFADgFAAQgWAAgigpg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AFPJVQgoABhxgIQhzgIBIgxQBHgyAEgvQADgvh3gPQh2gOAJhDQAIhDAugmQAVgRBNAsQgUhQAogTQBHggAuAIQBMANgQAkQgCAFgPAWQgKAOAEAEQACACBGgZQBKgbAPAAQAmAAAcAbQAbAcAAAmQAAAngbAcIgTAVQgKAMgCABQgpARgCAPQgCAMAXANIArAYQAYAOAAANQAAAkgFAQQgGAVgVAVIg6A7QgiAigZANQgFADgGAAQgYAAglgsg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AFDJeQgqABh7gIQh8gJBNg1QBNg2AEgzQAEgziAgQQiAgQAJhHQAJhIAygqQAWgSBUAwQgWhXAsgUQBMgkAxAJQBTAOgRAnQgDAGgQAXQgKAPAEAFQACACBMgbQBPgdAQAAQAqAAAdAdQAeAeAAAqQAAAqgeAdIgTAXQgLANgDABQgsATgCAQQgCANAZAOIAuAaQAaAPAAAOQAAAngFARQgHAXgWAWIg/BAQglAlgbAOQgFADgHAAQgZAAgpgvg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AE4JmQguACiEgJQiFgJBTg6QBTg5AEg3QAEg3iKgRQiJgRAKhNQAKhNA2gtQAYgTBZAzQgXhdAugWQBSgmA1AKQBZAPgTAqQgCAGgRAZQgMAQAFAFQACACBRgdQBWgfARAAQAsAAAgAgQAgAgAAAsQAAAtggAgIgVAZQgMANgCACQgwAUgCARQgCAOAaAQIAyAaQAcARAAAPQAAAqgGASQgHAZgYAYIhDBEQgnAngeAQQgGADgGAAQgcAAgrgzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AEsJvQgxACiNgKQiMgKBXg9QBYg+AFg6QAFg7iUgSQiTgSALhSQALhTA6gvQAZgVBgA3QgZhkAxgXQBYgnA4AJQBfAPgUAtQgDAHgSAbQgMARAFAGQACACBXggQBbghASAAQAwAAAiAiQAiAiAAAwQAAAwgiAiIgXAaQgMAPgDABQgzAWgCASQgCAPAcARIA1AcQAeASAAARQAAAsgGATQgIAbgZAZIhIBJQgqAqggARQgGADgHAAQgeAAgug2g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AEhJ4Qg0ABiWgKQiVgLBdhBQBdhBAFg+QAFg+icgUQidgTAMhXQALhYA+gzQAbgWBlA6QgbhpA1gYQBdgrA8AKQBlASgVAuQgDAHgUAdQgNASAGAGQACACBcghQBhgjAUAAQAyAAAlAkQAkAkAAAzQAAAzgkAkIgYAcQgOAPgDACQg2AXgCAUQgDAPAfASIA4AeQAfATAAASQAAAugGAVQgIAcgbAcIhNBNQgsAtghASQgHADgIAAQgfAAgxg5g");
	var mask_2_graphics_15 = new cjs.Graphics().p("AEWKAQg4ACiegLQiegLBihFQBjhFAGhCQAFhCilgUQingVAMhcQAMhdBCg2QAcgXBsA9QgbhvA3gZQBiguA/ALQBrASgWAxQgEAIgUAeQgOATAGAHQADACBhgjQBnglAUAAQA2AAAmAmQAnAmAAA2QAAA2gnAmIgZAeQgOAQgDACQg6AYgCAVQgDAQAgATIA8AgQAhAUAAATQAAAxgGAXQgJAdgdAdIhRBSQgvAvgjATQgHAEgIAAQgiAAgzg9g");
	var mask_2_graphics_16 = new cjs.Graphics().p("AEKKIQg6ACingLQingMBphJQBnhJAGhFQAFhGiugVQiwgWAOhhQAMhiBFg5QAegYBzBAQgeh1A6gbQBogwBDALQBwATgXA2QgEAHgVAfQgPAVAGAHQADACBnglQBsgnAWAAQA4AAApAoQAoAoAAA5QAAA5goApIgbAeQgPASgDABQg9AagCAWQgDARAiAUQArAXAUAMQAjAVAAATQAAA0gHAYQgJAfgeAfIhWBWQgyAyglAUQgHAEgJAAQgjAAg3hBg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AD/KRQg9ACiwgMQiwgNBvhMQBshNAHhJQAFhJi3gXQi5gWAOhnQANhnBJg8QAggZB4BEQggh8A/gcQBsgzBGAMQB2AUgYA4QgEAIgWAiQgQAUAHAIQACACBtgmQBygqAWAAQA8AAArArQAqAqAAA7QAAA8gqArIgdAgQgQATgDABQg/AcgDAXQgDASAjAVQAuAXAVANQAlAWAAAUQAAA3gIAZQgJAhggAgIhaBbQg0A0gnAWQgIAEgJAAQglAAg6hEg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AD0KZQhAACi4gNQi5gNB0hQQByhQAGhNQAGhNjAgXQjCgYAPhsQANhsBMg/QAigaB+BHQghiBBBgeQByg2BKANQB8AVgaA7QgEAJgYAjQgQAWAHAIQADABBygoQB3grAYAAQA+AAAtAtQAtArAAA/QAAA/gtAsIgdAiQgRAUgDABQhDAdgDAYQgDATAlAWQAvAZAXANQAmAXAAAWQAAA5gHAaQgKAjgiAiIheBfQg3A3gpAWQgIAEgKAAQgnAAg8hHg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ADpKhQhDADjAgOQjCgNB5hUQB4hUAGhQQAHhRjKgZQjLgZAPhwQAPhyBQhAQAjgcCDBKQgiiIBEgfQB3g4BOANQCBAWgbA+QgEAJgZAkQgRAYAIAIQADADB3grQB9guAZAAQBBAAAvAvQAuAvAABAQAABCguAvIgfAkQgSAUgDACQhGAdgDAaQgDAUAnAXQAxAaAXANQApAYAAAXQAAA8gIAbQgKAkgkAkIhiBkQg6A5grAXQgIAFgKAAQgpAAg/hLg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ADeKpQhGADjJgOQjKgOB+hYQB9hYAHhTQAHhUjSgaQjUgaAQh2QAOh2BUhDQAkgeCKBNQgkiNBHghQB9g6BQAOQCIAXgdBAQgEAJgaAnQgRAYAHAJQADADB9gtQCCgwAaAAQBEAAAxAxQAxAxAABDQAABFgxAxIggAlQgSAVgEACQhJAfgDAaQgDAVAoAYQA0AbAYAOQAqAaAAAXQAAA/gIAcQgKAmglAlIhnBoQg8A8gtAYQgJAFgLAAQgqAAhChOg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ADTKyQhJACjRgPQjTgOCEhcQCDhbAIhXQAGhYjcgbQjcgbAQh6QAQh8BXhGQAmgeCPBRQgliUBKgiQCBg9BUAPQCNAYgdBCQgEAKgbAoQgTAaAIAIQADADCCguQCIgyAbAAQBHAAAzAzQAzAzAABGQAABIgzAzIgiAmQgTAWgEACQhMAhgDAbQgEAWArAZQA2AcAZAPQAsAaAAAZQAABBgJAeQgLAngmAmIhsBtQg+A+gvAaQgJAFgLAAQgsAAhFhRg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ADJK6QhMACjagPQjbgPCJhfQCIhfAIhbQAHhbjlgcQjlgcARiAQAQh/BahKQAogfCVBUQgniaBNgkQCHg/BXAQQCTAYgfBGQgEAKgcAqQgTAaAIAJQADADCHgwQCNg0AcAAQBKAAA1A1QA1A1AABKQAABKg1A1IgjAoQgUAXgEACQhPAhgDAdQgEAWAsAaQA4AeAbAPQAtAbAAAaQAABEgIAfQgMApgoAoIhwBwQhBBBgwAbQgKAFgLAAQguAAhHhUg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AC+LCQhPACjigQQjjgQCOhiQCOhjAIheQAHhejugdQjugdASiFQARiEBehMQApghCaBYQgoihBQglQCNhBBaAQQCYAaggBIQgFAKgdArQgUAcAJAJQADAECMgzQCTg1AdAAQBNAAA2A3QA3A3AABMQAABNg3A3IgkApQgUAYgEACQhSAjgEAeQgEAXAuAbQA6AfAbAPQAwAdAAAaQAABHgJAgQgMAqgqAqIh0B1QhDBDgyAcQgLAFgLAAQgwAAhKhXg");
	var mask_2_graphics_24 = new cjs.Graphics().p("ACzLJQhRADjqgQQjsgRCThmQCThmAIhhQAIhij2geQj3gfATiJQARiIBhhQQAqgiChBbQgqimBTgmQCShEBdAQQCeAbghBLQgFALgeAsQgVAdAJAKQADADCRg0QCYg4AeAAQBQAAA5A5QA5A5AABQQAABPg5A5IgmArQgVAZgEACQhVAkgEAfQgEAYAvAcQA9AfAcARQAxAdAAAcQAABJgJAhQgNAsgrArIh4B5QhGBGg0AcQgKAGgNAAQgxAAhNhbg");
	var mask_2_graphics_25 = new cjs.Graphics().p("ACpLRQhUADjzgRQj0gRCZhqQCYhpAIhlQAIhlj/ggQj/gfATiOQASiNBlhSQAsgkCmBeQgsirBWgoQCXhGBgARQCjAcgiBNQgFALgfAuQgVAeAJAKQAEAECVg2QCeg6AfAAQBSAAA7A7QA7A7AABSQAABSg7A7IgnAtQgWAZgEACQhYAmgEAgQgEAZAxAdQA+AgAeARQAzAfAAAcQAABMgKAiQgNAugtAsIh8B+QhIBIg2AdQgLAGgNAAQgyAAhQheg");
	var mask_2_graphics_26 = new cjs.Graphics().p("ACfLZQhYADj6gSQj8gRCehtQCchuAJhoQAIhokHghQkIggAUiSQASiTBphVQAtgkCrBhQgsixBYgpQCchJBkASQCoAcgjBQQgFAMggAwQgWAeAJALQAEADCbg3QCig8AhAAQBVAAA8A9QA9A9AABVQAABVg9A8IgoAvQgXAagEACQhbAngEAhQgEAaAzAeQBAAhAeASQA1AfAAAeQAABOgKAjQgOAvguAuIiACCQhLBLg3AeQgMAGgNAAQg0AAhShhg");
	var mask_2_graphics_27 = new cjs.Graphics().p("ACULhQhaADkCgSQkEgTCihwQCihxAJhrQAJhskQgiQkQghAUiXQATiXBshYQAvgmCxBlQgvi3BcgqQChhLBnASQCtAdgkBTQgFAMghAxQgXAgAKAKQAEAECfg5QCog+AhAAQBYAAA/A/QA+A/AABYQAABYg+A+IgqAwQgXAbgFACQheAogEAiQgEAbA0AfQBDAiAfATQA2AgAAAeQAABRgKAlQgOAwgwAwIiECFQhNBNg6AfQgLAHgOAAQg2AAhVhkg");
	var mask_2_graphics_28 = new cjs.Graphics().p("ACKLoQhdADkKgSQkMgTCoh0QCmh0AKhvQAIhvkXgjQkZgiAVicQATibBvhbQAwgnC3BoQgwi9BfgrQCmhNBpASQC0AfgmBVQgFAMgjAzQgXAgAKALQAEAECkg7QCtg/AjAAQBaAABBBBQBBBAAABbQAABbhBBAIgrAxQgYAcgFACQhgApgFAjQgEAcA2AgQBEAjAgATQA4AiAAAfQAABTgLAmQgOAygxAxIiICKQhQBPg7AgQgMAGgOAAQg3AAhYhng");
	var mask_2_graphics_29 = new cjs.Graphics().p("ACKLwQhgADkSgTQkUgTCsh4QCsh3AKhyQAJhzkggjQkhgkAVigQAUigByhdQAygpC8BrQgxjCBhgtQCrhPBuATQC3AfgmBYQgGAMgjA1QgYAhAKAMQAEAECpg9QCzhBAjAAQBdAABDBCQBCBDAABdQAABehCBBIgtAzQgYAdgFACQhkArgFAkQgEAcA4AhQBGAlAhATQA6AiAAAgQAABWgLAnQgPAzgyAzIiNCOQhRBSg9AgQgNAHgOAAQg6AAhZhqg");
	var mask_2_graphics_30 = new cjs.Graphics().p("ACNL3QhiAEkagUQkcgUCyh7QCwh7AKh1QAJh2kogkQkpgkAWilQAVilB1hgQAzgpDBBtQgyjHBkguQCwhSBxAUQC8AggnBaQgGANgkA2QgZAiALAMQAEAECug/QC3hDAkAAQBgAABFBFQBEBEAABgQAABhhEBDIguA0QgZAegFACQhnAsgFAlQgEAdA5AiQBJAmAiAUQA7AjAAAhQAABYgLAoQgPA1g0A0IiRCSQhUBUg/AiQgMAGgPAAQg7AAhdhtg");
	var mask_2_graphics_31 = new cjs.Graphics().p("ACRL/QhlADkhgUQkkgUC2h/QC2h+AKh4QAJh6kwglQkxglAXipQAViqB4hiQA1grDGBxQg0jNBngwQC1hUB0AVQDCAhgpBcQgGAOglA3QgaAkALALQAFAFCyhBQC9hEAlAAQBiAABHBGQBGBGAABjQAABjhGBGIgvA0QgaAfgFADQhqAsgFAnQgEAdA7AjQBKAnAjAUQA9AlAAAiQAABagMApQgPA2g2A2IiUCWQhWBWhBAjQgNAHgPAAQg9AAhfhwg");
	var mask_2_graphics_32 = new cjs.Graphics().p("ACVMGQhnAEkqgVQkrgVC7iCQC6iBALh8QAJh8k4gnQk5gmAXitQAWivB7hlQA2grDMB0Qg1jTBpgxQC5hWB4AVQDHAigqBfQgGAOgmA4QgaAlALAMQAEAEC4hCQDBhGAmAAQBlAABIBIQBIBIAABlQAABmhIBIIgwA2QgbAfgFADQhsAugFAnQgEAfA8AjQBMAoAkAVQA/AmAAAiQAABdgMAqQgQA4g3A3IiYCaQhZBYhCAkQgNAHgQAAQg+AAhihzg");
	var mask_2_graphics_33 = new cjs.Graphics().p("ACZMOQhqADkxgVQkzgWDAiFQC/iFAKh+QAKiAlAgnQlBgnAYiyQAWizB/hoQA3gsDRB2Qg3jXBsgyQC+hZB7AWQDMAigrBiQgGAOgoA6QgaAlALANQAFAEC8hDQDGhJAnAAQBoAABKBKQBKBKAABoQAABohKBKIgxA4QgcAggFACQhvAwgFAoQgFAfA+AlQBOApAlAVQBAAmAAAkQAABggMAqQgQA5g5A5IicCeQhbBbhDAkQgOAHgQAAQhAAAhkh1g");
	var mask_2_graphics_34 = new cjs.Graphics().p("ACdMVQhtADk5gVQk6gWDEiJQDEiIALiCQAKiClIgpQlJgoAZi2QAWi3CChqQA5guDWB5Qg4jdBvgzQDChaB+AVQDRAkgsBkQgGAOgpA8QgbAmAMANQAEAFDBhGQDLhKAoAAQBqAABMBMQBMBMAABqQAABrhMBMIgyA4QgcAhgGADQhxAwgGApQgEAgA/AmQBQAqAmAWQBCAnAAAlQAABigNAsQgRA6g5A6IigChQhdBehGAlQgOAIgQAAQhCAAhmh5g");
	var mask_2_graphics_35 = new cjs.Graphics().p("ACgMcQhvAElAgXQlCgWDJiMQDJiLALiFQAKiGlQgpQlRgpAZi6QAYi9CFhsQA6gvDbB9Qg5jjBxg0QDHhdCBAWQDWAlgtBmQgHAPgpA9QgcAnAMANQAFAFDFhHQDQhMApAAQBtAABOBOQBNBNAABtQAABthNBOIg0A6QgdAigGADQh0AxgFAqQgFAhBBAmQBSArAmAXQBEAoAAAmQAABkgNAtQgRA8g7A7IikClQhfBghHAmQgPAIgQAAQhEAAhph8g");
	var mask_2_graphics_36 = new cjs.Graphics().p("ACkMjQhyAElHgXQlKgXDOiPQDNiOAMiIQAKiJlYgqQlYgrAai+QAYjBCIhvQA7gvDgB/Qg6joBzg1QDMhfCEAXQDbAlguBoQgHAQgqA+QgdAoANAOQAEAEDKhIQDVhOAqAAQBvAABQBQQBPBPAABvQAABwhPBQIg1A8QgeAhgFADQh3AzgGArQgFAiBCAnQBVAsAnAXQBFApAAAmQAABngOAuQgRA9g8A8IioCqQhhBihJAnQgPAIgRAAQhEAAhsh/g");
	var mask_2_graphics_37 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");
	var mask_2_graphics_150 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:50.3627,y:52.6659}).wait(1).to({graphics:mask_2_graphics_2,x:51.1117,y:53.972}).wait(1).to({graphics:mask_2_graphics_3,x:51.8554,y:55.2689}).wait(1).to({graphics:mask_2_graphics_4,x:52.594,y:56.5568}).wait(1).to({graphics:mask_2_graphics_5,x:53.3273,y:57.8355}).wait(1).to({graphics:mask_2_graphics_6,x:54.0554,y:59.1052}).wait(1).to({graphics:mask_2_graphics_7,x:54.7783,y:60.3657}).wait(1).to({graphics:mask_2_graphics_8,x:55.4959,y:61.6171}).wait(1).to({graphics:mask_2_graphics_9,x:56.2084,y:62.8595}).wait(1).to({graphics:mask_2_graphics_10,x:56.9156,y:64.0927}).wait(1).to({graphics:mask_2_graphics_11,x:57.6176,y:65.3169}).wait(1).to({graphics:mask_2_graphics_12,x:58.3144,y:66.5319}).wait(1).to({graphics:mask_2_graphics_13,x:59.0059,y:67.7378}).wait(1).to({graphics:mask_2_graphics_14,x:59.6923,y:68.9347}).wait(1).to({graphics:mask_2_graphics_15,x:60.3734,y:70.1224}).wait(1).to({graphics:mask_2_graphics_16,x:61.0493,y:71.301}).wait(1).to({graphics:mask_2_graphics_17,x:61.72,y:72.4706}).wait(1).to({graphics:mask_2_graphics_18,x:62.3854,y:73.631}).wait(1).to({graphics:mask_2_graphics_19,x:63.0457,y:74.7823}).wait(1).to({graphics:mask_2_graphics_20,x:63.7007,y:75.9245}).wait(1).to({graphics:mask_2_graphics_21,x:64.3505,y:77.0577}).wait(1).to({graphics:mask_2_graphics_22,x:64.9951,y:78.1817}).wait(1).to({graphics:mask_2_graphics_23,x:65.6345,y:79.2966}).wait(1).to({graphics:mask_2_graphics_24,x:66.2686,y:80.4024}).wait(1).to({graphics:mask_2_graphics_25,x:66.8976,y:81.4991}).wait(1).to({graphics:mask_2_graphics_26,x:67.5213,y:82.5868}).wait(1).to({graphics:mask_2_graphics_27,x:68.1398,y:83.6653}).wait(1).to({graphics:mask_2_graphics_28,x:68.753,y:84.7347}).wait(1).to({graphics:mask_2_graphics_29,x:68.4099,y:85.795}).wait(1).to({graphics:mask_2_graphics_30,x:67.6197,y:86.8462}).wait(1).to({graphics:mask_2_graphics_31,x:66.8364,y:87.8883}).wait(1).to({graphics:mask_2_graphics_32,x:66.0599,y:88.9213}).wait(1).to({graphics:mask_2_graphics_33,x:65.2902,y:89.9452}).wait(1).to({graphics:mask_2_graphics_34,x:64.5273,y:90.9601}).wait(1).to({graphics:mask_2_graphics_35,x:63.7714,y:91.9658}).wait(1).to({graphics:mask_2_graphics_36,x:63.0222,y:92.9624}).wait(1).to({graphics:mask_2_graphics_37,x:63.3567,y:94.733}).wait(113).to({graphics:mask_2_graphics_150,x:63.3567,y:94.733}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// Layer_1
	this.instance_2 = new lib.germs_group();
	this.instance_2.setTransform(158.5,130,1,1,0,0,0,210.5,142);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(149).to({_off:true},1).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-155,303.3,539.2);


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
(lib.LysolGeneric_LDS_1080x1920_en = function(mode,startPosition,loop) {
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
	this.frame_449 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(449).call(this.frame_449).wait(278));

	// copy_04
	this.instance = new lib.copy_04();
	this.instance.setTransform(281.2,1883.3,3.6,3.6,0,0,0,61.1,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(349).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).to({_off:true},87).wait(277));

	// what_it_takes
	this.instance_1 = new lib.whatittakes();
	this.instance_1.setTransform(437.4,1682.4,1,1,0,0,0,32.5,11);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(342).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).to({_off:true},94).wait(277));

	// product
	this.instance_2 = new lib.product_1();
	this.instance_2.setTransform(1225.8,1399.4,1,1,0,0,0,35.5,54.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(335).to({_off:false},0).to({x:541.8},14,cjs.Ease.get(1)).to({_off:true},101).wait(277));

	// bg_blue
	this.instance_3 = new lib.bg_blue();
	this.instance_3.setTransform(187.25,2370,3.6,3.6,0,0,0,52,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({regY:125.1,scaleY:3.5359,y:1278.4},9,cjs.Ease.get(1)).to({_off:true},113).wait(277));

	// btn_cta
	this.instance_4 = new lib.btn_cta();
	this.instance_4.setTransform(360.05,613.6,3.6,3.6,0,0,0,61,20.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(314).to({_off:false},0).to({x:288.05,alpha:1},9,cjs.Ease.get(1)).to({_off:true},127).wait(277));

	// copy_03
	this.instance_5 = new lib.copy_03();
	this.instance_5.setTransform(431,279.8,3.6,3.6,0,0,0,82,27.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(308).to({_off:false},0).to({x:359,alpha:1},9,cjs.Ease.get(1)).to({_off:true},133).wait(277));

	// copy_02
	this.instance_6 = new lib.copy_02();
	this.instance_6.setTransform(540.25,834.5,3.6,3.6,0,0,0,122.8,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},38).wait(419));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(955.8,1783.2,3.6,3.6,0,0,0,24.5,23);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},130).wait(419));

	// bg_light_blue
	this.instance_8 = new lib.bg_lightblue();
	this.instance_8.setTransform(352.8,-1520,3.6,3.2,0,0,0,98,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(235).to({_off:false},0).to({y:400},18,cjs.Ease.get(1)).to({_off:true},197).wait(277));

	// hand
	this.instance_9 = new lib.hand_spray_1("single",0);
	this.instance_9.setTransform(-221,1405,1,1,0,0,0,0,112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).to({x:139,y:1155},8,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:0.1,regY:112.1,rotation:-14.2527,x:194.15,y:1114.2,mode:"synched",startPosition:12},12,cjs.Ease.get(1)).wait(34).to({startPosition:12},0).to({y:2434.2},18,cjs.Ease.get(1)).to({_off:true},1).wait(473));

	// spray
	this.instance_10 = new lib.spray_mist("synched",0);
	this.instance_10.setTransform(389,945,0.6263,0.6263,0,0,0,150,150.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).wait(1).to({regY:138,scaleX:0.6964,scaleY:0.6964,rotation:-2.0893,x:402.9,y:919.25,alpha:0.9414,startPosition:1},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,rotation:-4.0897,x:416.15,y:901.95,alpha:0.8852,startPosition:0},0).wait(1).to({scaleX:0.8278,scaleY:0.8278,rotation:-6.0012,x:428.8,y:885.4,alpha:0.8315,startPosition:1},0).wait(1).to({scaleX:0.889,scaleY:0.889,rotation:-7.8238,x:440.75,y:869.7,alpha:0.7804,startPosition:0},0).wait(1).to({scaleX:0.9472,scaleY:0.9472,rotation:-9.5575,x:452.1,y:854.7,alpha:0.7317,startPosition:1},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,rotation:-11.2023,x:462.85,y:840.55,alpha:0.6855,startPosition:0},0).wait(1).to({scaleX:1.0546,scaleY:1.0546,rotation:-12.7581,x:473,y:827.1,alpha:0.6419,startPosition:1},0).wait(1).to({scaleX:1.1039,scaleY:1.1039,rotation:-14.2251,x:482.55,y:814.5,alpha:0.6007,startPosition:0},0).wait(1).to({scaleX:1.1501,scaleY:1.1501,rotation:-15.6032,x:491.45,y:802.65,alpha:0.562,startPosition:1},0).wait(1).to({scaleX:1.1934,scaleY:1.1934,rotation:-16.8923,x:499.75,y:791.65,alpha:0.5258,startPosition:0},0).wait(1).to({scaleX:1.2337,scaleY:1.2337,rotation:-18.0926,x:507.45,y:781.4,alpha:0.4921,startPosition:1},0).wait(1).to({regX:150.1,regY:150.2,scaleX:1.271,scaleY:1.271,rotation:-19.2039,x:519.8,y:786.5,alpha:0.4609,startPosition:0},0).wait(34).to({startPosition:0},0).to({rotation:-29.1946,x:999.5,y:758.45},7).to({_off:true},36).wait(449));

	// copy_01c
	this.instance_11 = new lib.copy_01c();
	this.instance_11.setTransform(408.65,1858.1,3.6,3.6,0,0,0,104.5,8.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({alpha:1},13).wait(94).to({alpha:0},31).to({_off:true},13).wait(482));

	// copy_01b
	this.instance_12 = new lib.copy_01b("single",0);
	this.instance_12.setTransform(428.65,1094.85,3.6,3.6,0,0,0,136.1,25.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({y:1058.85,alpha:1},15,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({x:608.65,startPosition:51},51).wait(56).to({startPosition:107},0).to({alpha:0,startPosition:138},31).to({_off:true},13).wait(482));

	// copy_01a
	this.instance_13 = new lib.copy_01a();
	this.instance_13.setTransform(540.05,974.2,3.6,3.6,0,0,0,91,22.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({y:938.2,alpha:1},15,cjs.Ease.get(1)).wait(115).to({alpha:0},31).to({_off:true},13).wait(482));

	// copy_01
	this.instance_14 = new lib.copy_01();
	this.instance_14.setTransform(583.9,963.45,3.6,3.6,0,0,0,84.2,25.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1},15).wait(24).to({y:844.65},15,cjs.Ease.get(1)).wait(123).to({alpha:0},31).to({_off:true},13).wait(482));

	// germs
	this.instance_15 = new lib.germs_1("synched",0,false);
	this.instance_15.setTransform(0.05,550,3.6,3.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(107).to({startPosition:107},0).to({alpha:0,startPosition:138},31).to({_off:true},13).wait(482));

	// white_box
	this.instance_16 = new lib.whitebox();
	this.instance_16.setTransform(540,400,3.6,3.2,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({alpha:0.6914},8).wait(39).to({alpha:0.5},31,cjs.Ease.get(1)).to({_off:true},151).wait(482));

	// logo
	this.instance_17 = new lib.logo();
	this.instance_17.setTransform(955.8,1783.2,3.6,3.6,0,0,0,24.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(702));

	// boy
	this.instance_18 = new lib.girl();
	this.instance_18.setTransform(169.4,144.7,1,1,0,0,0,169.4,144.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:0.0508},31,cjs.Ease.get(1)).to({_off:true},356).wait(277));

	// BG
	this.instance_19 = new lib.whitebox();
	this.instance_19.setTransform(540,400,3.6,3.2,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},450).wait(277));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-960,1484.7,4069.8);
// library properties:
lib.properties = {
	id: '3CE4C820892743FB9D5BF0281A417E72',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Group_1_0.png?1574353834195", id:"Group_1_0"},
		{src:"images/boy.jpg?1574353834195", id:"boy"},
		{src:"images/germs.png?1574353834195", id:"germs"},
		{src:"images/hand_spray.png?1574353834195", id:"hand_spray"},
		{src:"images/product.png?1574353834195", id:"product"},
		{src:"images/spray_01.png?1574353834195", id:"spray_01"},
		{src:"images/spray_02.png?1574353834195", id:"spray_02"},
		{src:"images/whatittaketoprotect.png?1574353834195", id:"whatittaketoprotect"}
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