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
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.germs = function() {
	this.initialize(img.germs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hand_spray = function() {
	this.initialize(img.hand_spray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,493);


(lib.productpngcopy = function() {
	this.initialize(img.productpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,469);


(lib.spray_01 = function() {
	this.initialize(img.spray_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,93);


(lib.spray_02 = function() {
	this.initialize(img.spray_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.whatittaketoprotectpngcopy = function() {
	this.initialize(img.whatittaketoprotectpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,91);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitebox, new cjs.Rectangle(0,0,300,250), null);


(lib.whatittakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whatittaketoprotectpngcopy();
	this.instance.setTransform(0,0,0.2331,0.2421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whatittakes, new cjs.Rectangle(0,0,65.1,22.1), null);


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


(lib.product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.productpngcopy();
	this.instance.setTransform(0,0,0.237,0.237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product, new cjs.Rectangle(0,0,74.2,111.2), null);


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
	this.instance.setTransform(-47,25,0.9447,0.9447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(-47,25,1813.9,1020.4000000000001), null);


(lib.germs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EBmfAZFIg4gHQghgDgRgIQgQgIAXgsQgMgUgcg8Qgcg9AjALQAkALAEgZQAEgaAXgzQAWg0AvgVQAwgWAnAJQASAEgHA5QAwgqAYANQArAXAIAaQANAsgdAGIgXACQgMAAgCAEQgBACAmAZQAnAbAFAHQALAUgLAYQgKAZgaAPQgaAPgbgDIgTgBIgNgBQgXgOgLAEQgIAEgDARIgDAfQgDARgJAFQgYAOgMAEQgLAEgNAAIgMgBg");
	var mask_graphics_15 = new cjs.Graphics().p("EBk9AaCIhdgLQg2gGgbgNQgcgMAnhKQgVggguhlQguhkA6ASQA7ASAHgpQAHgqAlhVQAlhVBOgjQBPgkBBAOQAdAHgMBdQBQhFAoAWQBGAmAOArQAWBIgwAKQgHACgfABQgUABgEAGQgBADA+AqQBCAsAHANQASAggRApQgRAogrAZQgsAZgsgFIgggCQgSgBgCgBQgngXgSAIQgOAGgEAcIgFAyQgEAegPAIQgoAXgUAGQgSAGgVAAIgVgBg");
	var mask_graphics_16 = new cjs.Graphics().p("EBjdAa+IiCgOQhMgKgmgRQgmgRA2hnQgdgthAiLQhAiMBRAZQBSAaAKg7QAKg6Azh2QA0h2BsgxQBtgyBcAUQAnAJgQCCQBvhfA3AeQBjA0ASA8QAfBlhDANQgJACgsADQgcABgEAJQgCADBWA7QBbA+AKARQAaAsgYA5QgYA5g8AiQg8Ajg9gIIgtgCQgZgBgDgCQg3gggZALQgTAJgFAmQgEAwgEAXQgGApgUALQg3AggcAJQgZAIgeAAQgOAAgOgCg");
	var mask_graphics_17 = new cjs.Graphics().p("EBh9Ab6IimgTQhhgLgwgWQgxgXBFiDQglg5hSizQhSiyBoAgQBoAgANhKQANhKBCiXQBBiXCLg/QCMhAB0AaQAzAMgVClQCOh6BHAnQB9BDAYBNQAoCAhWASQgMACg4ADQgkACgFALQgCAFBuBLQB0BOANAWQAhA5gfBJQgfBIhMAsQhNAthOgKIg5gDQghgCgDgCQhHgpgfAPQgYAKgIAyQgFA9gEAdQgIA0gaAPQhGApgkALQggALgmAAQgSAAgSgDg");
	var mask_graphics_18 = new cjs.Graphics().p("EBgeAc2IjKgYQh1gOg7gaQg7gcBTigQgshFhkjZQhkjZB/AnQB+AoAQhaQAQhbBPi3QBQi4CphMQCphOCOAgQA+AOgaDJQCtiUBWAvQCZBSAcBdQAwCchnAVQgPADhEAEQgrABgHAPQgCAFCFBbQCOBgAPAaQAoBGglBYQgmBYhdA1QhdA2hfgLIhGgEQgngCgFgCQhVgygmARQgdANgJA8QgHBKgFAkQgJA/ggASQhWAygrANQgnANguAAQgVAAgXgCg");
	var mask_graphics_19 = new cjs.Graphics().p("EBfAAdwIjtgbQiKgRhFgfQhGggBii8Qg0hSh1j+Qh1kACUAvQCVAuAShqQAThqBejYQBdjYDHhaQDHhbCnAlQBIARgeDtQDKivBmA3QC0BhAhBtQA5C3h6AZQgSAEhPAEQgzACgIARQgDAGCdBrQCmBxASAfQAwBSgtBnQgsBnhtA/QhuBAhvgOIhSgEQgugDgFgCQhlg7gsAUQgjAQgLBHQgHBXgGApQgLBKgmAWQhkA6gzAQQguAPg2AAQgZAAgbgDg");
	var mask_graphics_20 = new cjs.Graphics().p("EBdjAeqIkQgfQiegThPgkQhRglBxjYQg8hdiGkkQiHklCrA0QCqA2AWh6QAVh6Brj4QBsj4DkhmQDkhpC/AqQBTATgiEQQDojIB1A/QDOBvAmB+QBCDSiMAdQgVAEhaAFQg8ACgJATQgDAHC1B7QC/CCAUAjQA2BegyB3QgzB2h9BIQh+BJiAgPQgZgChFgDQg1gDgGgDQhzhDg0AXQgoASgMBRQgIBkgHAwQgNBVgrAYQhzBDg6ATQg1ARg+AAQgdAAgfgEg");
	var mask_graphics_21 = new cjs.Graphics().p("EBcHAfjIkzgjQixgVhagpQhagpB+jzQhDhqiXlJQiYlLDAA8QDAA8AYiJQAYiKB5kXQB5kXECh0QEBh1DYAwQBdAVgnEyQEGjiCEBHQDoB9ArCOQBKDsieAhQgXAFhmAFQhDADgKAVQgDAIDLCLQDXCSAXAoQA9Bqg5CFQg5CGiNBSQiOBSiRgSQgbgChOgEQg8gDgHgDQiChMg5AaQguAUgNBcQgKBwgHA2QgPBggwAcQiCBLhCAVQg7AUhHAAQggAAgjgFg");
	var mask_graphics_22 = new cjs.Graphics().p("EBasAgcQiPgRjGgWQjFgYhkgtQhlguCNkOQhLh2ioluQiplvDWBCQDWBDAaiZQAbiYCHk3QCGk3Eeh/QEeiEDwA2QBoAYgrFTQEjj5CTBPQECCJAwCeQBREHivAlQgaAFhxAGQhKACgMAYQgDAJDiCbQDvCiAaAsQBDB2g/CUQhACVicBbQieBbihgTQgegDhXgEQhDgDgIgEQiQhUhAAdQgyAWgPBmQgLB9gIA8QgQBqg2AgQiRBThJAXQhCAWhOAAQgkAAgngFg");
	var mask_graphics_23 = new cjs.Graphics().p("EBZSAhUQidgTjagYQjZgahugxQhugzCbkpQhSiBi5mTQi6mUDrBJQDrBJAdinQAdioCVlVQCUlVE6iNQE7iREHA7QByAagvF2QFAkTChBXQEcCYA0CsQBaEijAAoQgcAGh9AHQhSACgMAbQgFAJD5CqQEHCyAcAxQBLCBhGCkQhGCjisBkQiuBkixgVQghgDhfgEQhKgEgIgEQifhdhGAgQg3AYgRBwQgMCKgJBCQgRB1g8AiQifBchQAaQhJAYhVAAQgoAAgrgGg");
	var mask_graphics_24 = new cjs.Graphics().p("EBX6AiMQisgVjtgaQjtgdh3g1Qh5g4CplEQhaiMjJm3QjKm4EABQQEABQAgi3QAfi3Cil0QChlzFXiaQFWidEfBAQB9Acg0GYQFdksCvBfQE2CmA5C7QBiE8jSArQgfAHiIAHQhZADgNAdQgFAKEPC5QEeDCAfA1QBRCNhMCyQhMCzi7BsQi+BtjAgXQgkgDhogFQhQgEgJgEQithlhNAiQg8AbgSB6QgNCWgKBIQgTB/hBAmQitBkhXAcQhQAZhdAAQgrAAgugFg");
	var mask_graphics_25 = new cjs.Graphics().p("EBWiAjDQi6gXkAgcQkAgfiBg6QiCg8C2leQhhiYjanaQjancEVBWQEVBWAijFQAijGCvmRQCumSFyinQFziqE2BFQCGAfg3G5QF5lEC+BmQFOC0A+DLQBqFVjjAvQghAHiTAIQhhADgOAfQgFALEkDIQE2DSAiA5QBXCZhSDAQhSDBjLB1QjNB2jQgZQgngDhwgFQhXgFgKgFQi6hthUAmQhBAdgTCEQgOChgLBOQgUCKhGApQi7BshfAeQhWAchlAAQguAAgygGg");
	var mask_graphics_26 = new cjs.Graphics().p("EBVLAj5QjIgYkTgeQkTgiiLg+QiLhADEl4Qhpikjpn9Qjrn/EpBcQEqBdAkjUQAljUC8mvQC7mxGOizQGOi2FNBKQCRAhg8HaQGVlcDMBtQFnDBBCDbQByFtj0AzQgkAHidAJQhoADgPAiQgGAME7DXQFMDhAkA+QBfCjhZDPQhYDPjaB+QjcB/jfgbQgrgEh4gFQhdgFgLgFQjIh1haAoQhGAfgUCOQgPCugMBUQgWCUhLArQjJB0hmAgQhcAfhsAAQgzAAg1gHg");
	var mask_graphics_27 = new cjs.Graphics().p("EBT1AkvQjVgaknghQklgjiUhDQiVhEDRmSQhvivj6ogQj7ohE+BiQE9BjAojjQAnjiDInNQDInOGpi/QGpjDFlBPQCaAkhAH6QGxl0DZB1QGADOBHDqQB6GGkFA2QgmAIipAJQhuAEgRAkQgFANFPDmQFkDwAmBCQBlCvheDdQhfDdjpCGQjrCIjugdQgtgEiBgGQhkgFgLgFQjWh9hgArQhKAhgWCXQgQC6gNBZQgYCfhQAuQjXB8hsAjQhiAgh0AAQg2AAg5gHg");
	var mask_graphics_28 = new cjs.Graphics().p("EBSgAlkQjjgbk5gjQk4gmidhHQifhJDfmrQh3i5kJpDQkLpEFSBpQFSBpApjxQAqjxDVnqQDVnrHEjLQHEjQF6BVQCkAlhDIbQHMmMDnB8QGYDbBMD5QCBGgkVA5QgpAIizAKQh1AEgSAmQgGAOFlD0QF6D/AoBHQBsC6hlDrQhkDrj4CPQj5CQj+gfQgwgEiJgGQhqgGgMgFQjjiGhmAuQhPAjgYChQgRDGgNBfQgZCohWAxQjkCEhzAlQhpAih7AAQg5AAg9gHg");
	var mask_graphics_29 = new cjs.Graphics().p("EBRMAmYQjwgdlLgkQlLgoinhLQinhNDrnFQh9jEkZplQkbpmFmBvQFmBvAsj/QAsj/DhoHQDioHHejYQHfjcGRBaQCtAohHI6QHnmjD1CEQGwDnBQEIQCIG4klA9QgrAJi+AKQh8AEgTAoQgGAPF6ECQGQEPArBKQByDFhrD5QhqD4kGCYQkICYkNggQgzgFiRgGQhwgGgNgGQjxiNhrAxQhUAlgZCqQgSDRgOBlQgbCyhaA0QjyCMh6AnQhvAkiCAAQg9AAhAgIg");
	var mask_graphics_30 = new cjs.Graphics().p("EBP5AnMQj9gelegnQlcgqiwhQQixhRD4ndQiEjPkpqGQkpqIF5B1QF5B1AvkNQAukMDuokQDuokH5jkQH4jnGnBeQC3AqhLJZQICm6ECCLQHID1BUEWQCQHQk1BBQgtAJjJALQiDAEgUArQgGAPGPEQQGmEdAtBPQB4DPhwEHQhxEGkUCgQkXChkbgiQg2gFiZgHQh2gGgNgGQj/iVhxAzQhZAngaC0QgTDdgPBqQgcC8hfA3Qj/CTiBApQh1AmiJAAQhAAAhEgIg");
	var mask_graphics_31 = new cjs.Graphics().p("EBOnAn/QkKgglwgoQlugti5hTQi6hWEFn1QiLjak4qnQk5qqGNB7QGMB8AxkbQAxkaD6pAQD7pBISjvQITjzG8BjQDBAshPJ4QIcnREPCTQHfEBBZEkQCYHplFBDQgwAKjTALQiJAFgVAsQgIARGkEeQG8EsAvBSQB+Dah2EUQh2EUkiCoQklCpkqgjQg5gGihgHQh8gGgOgHQkLich3A2QheApgbC9QgUDogQBwQgdDFhlA6QkMCbiHArQh7AoiRAAQhDAAhHgJg");
	var mask_graphics_32 = new cjs.Graphics().p("EBNWAoyQkXgimBgqQmAgvjChXQjDhaESoOQiSjklHrIQlIrKGfCBQGgCBA0kpQAzknEGpcQEGpdIsj6QItj/HSBoQDKAuhUKWQI3nnEcCaQH3ENBcEyQCgIBlVBGQgyALjdAMQiRAEgWAvQgHASG4ErQHRE7AyBWQCEDlh8EhQh7EhkxCwQkzCyk5gmQg7gFipgIQiCgGgOgHQkYikh+A4QhhArgdDGQgVD0gQB1QggDPhpA8QkZCjiOAtQiAAqiYAAQhGAAhLgJg");
	var mask_graphics_33 = new cjs.Graphics().p("EBMGApkQkkgjmSgtQmSgwjLhcQjMhdEfomQiZjvlWrpQlXrqGzCHQGzCHA1k2QA2k1ESp4QESp4JGkFQJFkLHoBsQDTAxhXK0QJQn9EpCgQINEaBhFAQCnIYllBKQg0ALjnAMQiXAFgXAxQgHASHLE5QHmFJA1BbQCKDviBEuQiCEvk+C4QlCC5lGgnQg+gGixgIQiHgGgQgIQkliriCA7QhmAtgfDPQgWD+gRB7QggDYhuA/QkmCqiUAvQiHAsieAAQhKAAhOgJg");
	var mask_graphics_34 = new cjs.Graphics().p("EBK3AqVQkwgkmkgvQmjgyjUhgQjVhhEro+Qifj5lksJQlmsKHFCMQHGCNA4lCQA4lDEeqTQEdqTJfkRQJekXH9ByQDcAyhbLTQJqoTE2CnQIkEmBlFOQCtIulzBNQg3AMjxANQidAFgYAzQgIATHfFHQH7FWA3BfQCQD5iHE7QiHE8lMDAQlPDBlVgpQhAgGi4gIQiOgHgQgIQkxiyiJA9QhqAvggDYQgXEJgSCAQghDihzBCQkyCxibAxQiNAuilAAQhMAAhSgKg");
	var mask_graphics_35 = new cjs.Graphics().p("EBJpArGQk8gmm2gxQm0g0jchjQjdhmE3pVQimkDlzsoQl0sqHYCSQHXCTA7lQQA6lREpqtQEqquJ3kcQJ3kiIRB2QDlA1heLwQKCopFECuQI6EyBpFbQC0JFmCBRQg5AMj7ANQikAFgZA1QgIAUHzFVQIQFkA5BiQCVEEiMFIQiMFIlaDIQldDJligqQhDgGjAgJQiTgHgRgIQk+i6iOBAQhvAxghDgQgXEUgTCFQgjDrh3BFQk/C4ihA0QiTAvirAAQhQAAhVgKg");
	var mask_graphics_36 = new cjs.Graphics().p("EBIbAr2QlIgnnGgzQnEg2jlhoQjmhpFDpsQiskNmCtHQmCtJHqCXQHqCYA8lcQA9leE1rIQE1rIKPknQKQktIlB6QDuA3hiMNQKbo+FQC1QJQE9BtFpQC8JcmSBTQg7ANkEAOQiqAFgaA3QgJAVIGFiQIlFxA6BnQCcENiSFVQiRFVlnDPQlrDRlwgsQhFgGjIgJQiZgIgRgIQlKjBiUBCQhzAzgiDqQgYEegUCKQgkD0h8BIQlLC/ioA1QiYAyiyAAQhTAAhZgLg");
	var mask_graphics_37 = new cjs.Graphics().p("EBHPAsmQlUgpnXg1QnVg4jthrQjvhtFPqDQiykXmQtmQmQtoH8CeQH8CdA+lqQA/lqFBriQFAriKnkyQKok4I6B+QD2A5hlMqQKzpUFcC8QJmFJBxF2QDDJymhBXQg9AMkOAPQiwAGgbA5QgJAVIZFvQI5F/A9BqQChEYiXFhQiXFil0DXQl4DYl+guQhIgGjOgJQifgIgSgJQlWjIiZBFQh3A0gkDyQgZEqgUCPQgmD9iBBKQlXDGitA3QieA0i5AAQhWAAhcgLg");
	var mask_graphics_38 = new cjs.Graphics().p("EBGEAtVQlggrnng2Qnmg6j1hvQj3hxFbqaQi5kgmduFQmfuGINCjQIOCjBBl2QBBl3FMr8QFLr8K/k9QLAlDJNCDQD/A7hpNGQLMpoFoDCQJ7FVB2GDQDJKImvBZQg/ANkXAPQi3AGgcA7QgJAWIsF8QJMGNA/BuQCnEhicFuQidFtmBDfQmEDgmLgvQhLgHjWgKQikgIgTgJQlijPieBHQh7A3glD6QgbE0gUCUQgoEGiEBMQlkDOizA5QijA1jAAAQhZAAhfgLg");
	var mask_graphics_39 = new cjs.Graphics().p("EBE6AuDQlsgsn3g4Qn2g8j+hzQj/h1FmqvQi+kqmrujQmtukIfCpQIfCnBEmCQBDmEFWsVQFXsWLWlHQLXlNJhCHQEIA9htNiQLkp9F0DJQKRFgB5GQQDQKdm+BdQhBANkgAQQi9AGgdA9QgKAXI/GIQJgGaBBBxQCsErihF6QiiF6mODmQmRDomYgxQhOgHjcgKQiqgIgTgKQlujWikBKQh/A4gmEDQgcE+gVCZQgpEOiJBQQlvDUi6A7QioA3jGAAQhcAAhigMg");
	var mask_graphics_40 = new cjs.Graphics().p("EBDxAu1Ql3gtoIg6QoGg+kFh2QkIh5FyrFQjFk0m5vAQm6vCIxCuQIwCuBGmPQBFmQFhsuQFisvLtlSQLulYJ1CMQEQA+hwN+QL7qRGADPQKlFrB9GdQDXKznMBfQhDAOkqAQQjCAGgeA/QgKAYJRGVQJzGnBDB1QCyE0inGGQimGGmbDtQmeDwmlgzQhQgHjkgKQivgJgUgKQl6jdioBMQiEA6gnELQgcFIgWCeQgqEXiOBSQl7Dbi/A9QiuA5jMAAQhfAAhlgNg");
	var mask_graphics_41 = new cjs.Graphics().p("EBCpAwRQmDgvoXg7QoWhBkNh5QkQh9F9raQjKk+nHvdQnIvfJCCzQJCCzBHmbQBHmcFttIQFstHMElcQMFljKICRQEYBAhzOYQMSqkGMDVQK5F2CBGqQDdLHnZBjQhGAOkyARQjJAGgeBBQgLAYJjGiQKGG0BGB4QC3E9isGSQirGSmoD1QmrD2myg0QhSgHjqgLQi1gJgUgKQmFjkiuBPQiIA8goETQgdFSgXCjQgrEfiSBUQmGDijGA/QizA6jSAAQhiAAhogMg");
	var mask_graphics_42 = new cjs.Graphics().p("EBBiAxqQmOgwong9QolhCkWh9QkXiAGIrwQjRlGnTv6QnVv8JSC4QJTC4BJmnQBKmoF2tgQF3tgMblmQMbltKbCUQEhBDh3OzQMpq4GXDbQLOGBCFG2QDjLcnnBmQhHAPk8ARQjPAGgfBDQgLAZJ1GtQKZHBBIB8QC8FHixGdQiwGem0D8Qm3D9m/g2QhUgHjygLQi5gJgVgLQmRjqizBRQiLA+gqEbQgeFbgXCoQgtEoiWBXQmSDojLBAQi4A8jYAAQhlAAhrgNg");
	var mask_graphics_43 = new cjs.Graphics().p("EBAcAzDQmagxo2g/Qo0hEkdiBQkfiDGSsFQjWlQnhwWQniwZJjC+QJjC9BMmzQBLm0GCt4QGBt4MxlvQMyl4KtCZQEoBEh6POQNArMGiDhQLjGMCIHCQDqLxn1BoQhKAPlEASQjUAHghBEQgLAaKGG5QKsHOBKB/QDCFQi2GpQi2Gpm/EDQnEEFnLg4QhXgIj4gLQi/gJgWgLQmbjxi4BTQiQBAgrEjQgeFlgYCsQguExiaBZQmdDujRBDQi9A9jfAAQhnAAhugNg");
	var mask_graphics_44 = new cjs.Graphics().p("EA/WA0bQmkgzpFhBQpEhFkliEQkmiIGesZQjdlZntwyQnvw1JzDDQJ0DCBNm/QBOm/GLuQQGMuPNHl6QNHmCLACdQEwBGh9PoQNWrfGuDnQL1GXCMHOQDxMFoDBrQhLAPlNASQjaAHghBHQgMAaKYHGQK+HZBLCDQDHFZi6G0Qi7G1nLEJQnQEMnYg5QhZgIj/gLQjDgKgXgLQmnj3i8BVQiTBBgtErQgfFvgZCxQguE4ifBcQmoD1jWBEQjDA/jkAAQhqAAhygNg");
	var mask_graphics_45 = new cjs.Graphics().p("EA+SA1xQmvg0pUhCQpShIktiHQkuiLGosuQjhlhn7xPQn8xQKEDIQKEDHBPnKQBQnLGVunQGWunNcmDQNemMLRChQE4BHiAQCQNsryG5DtQMJGhCQHaQD2MZoQBuQhNAQlWASQjfAHgiBJQgMAbKoHRQLQHmBOCGQDMFhi/HAQi/HAnYEQQncETnjg6QhcgJkFgLQjJgKgXgLQmxj+jCBXQiXBDgtEzQggF4gaC1QgwFBiiBeQmzD7jcBGQjHBBjrAAQhsAAh1gOg");
	var mask_graphics_46 = new cjs.Graphics().p("EA9PA3GQm6g2pjhDQphhKkziLQk2iOGztCQjolqoGxpQoJxsKUDNQKTDMBSnVQBRnXGgu+QGfu+NymNQNzmVLjClQFABJiEQbQOCsFHDD0QMdGrCTHmQD8MsocBwQhPARleATQjmAHgiBKQgMAcK5HcQLiHyBPCJQDRFrjEHLQjEHLnjEXQnnEZnwg8QhdgIkMgMQjOgKgXgMQm9kEjGBaQibBEguE6QghGCgaC6QgxFIinBgQm+ECjhBHQjMBDjwAAQhwAAh3gOg");
	var mask_graphics_47 = new cjs.Graphics().p("EA8NA4ZQnEg2pyhGQpvhLk7iOQk9iRG9tWQjtlzoTyEQoVyGKjDRQKjDRBUngQBTniGqvVQGpvVOHmWQOHmfL1CpQFIBLiHQ0QOXsXHOD5QMwG1CWHyQEDM/oqBzQhRARlmATQjrAIgkBMQgMAcLKHoQLzH9BRCNQDXFzjJHWQjJHWnuEdQnzEgn7g9QhggIkTgNQjSgKgYgMQnHkKjLBcQifBGgvFBQgiGLgaC+QgzFQiqBjQnJEHjmBKQjRBEj2AAQhyAAh6gPg");
	var mask_graphics_48 = new cjs.Graphics().p("EA7OA5sQnOg4qAhHQp+hNlCiRQlEiVHHtpQjyl7ofyfQohyhKyDWQKzDWBVnrQBWntGzvrQGzvsObmfQOcmoMGCsQFQBNiLRMQOtspHYD/QNCHACbH8QEINTo2B1QhTASlvATQjwAIgkBOQgNAdLaHzQMFIJBTCQQDbF7jNHhQjNHgn6EkQn/EnoGg/QhigIkZgNQjYgLgYgMQnRkQjQBeQiiBIgwFJQgjGTgbDDQg0FYiuBkQnTEOjsBLQjWBGj7AAQh1AAh9gPg");
	var mask_graphics_103 = new cjs.Graphics().p("EA7OA5sQnOg4qAhHQp+hNlCiRQlEiVHHtpQjyl7ofyfQohyhKyDWQKzDWBVnrQBWntGzvrQGzvsObmfQOcmoMGCsQFQBNiLRMQOtspHYD/QNCHACbH8QEINTo2B1QhTASlvATQjwAIgkBOQgNAdLaHzQMFIJBTCQQDbF7jNHhQjNHgn6EkQn/EnoGg/QhigIkZgNQjYgLgYgMQnRkQjQBeQiiBIgwFJQgjGTgbDDQg0FYiuBkQnTEOjsBLQjWBGj7AAQh1AAh9gPg");
	var mask_graphics_112 = new cjs.Graphics().p("EA7OA5sQnOg4qAhHQp+hNlCiRQlEiVHHtpQjyl7ofyfQohyhKyDWQKzDWBVnrQBWntGzvrQGzvsObmfQOcmoMGCsQFQBNiLRMQOtspHYD/QNCHACbH8QEINTo2B1QhTASlvATQjwAIgkBOQgNAdLaHzQMFIJBTCQQDbF7jNHhQjNHgn6EkQn/EnoGg/QhigIkZgNQjYgLgYgMQnRkQjQBeQiiBIgwFJQgjGTgbDDQg0FYiuBkQnTEOjsBLQjWBGj7AAQh1AAh9gPg");
	var mask_graphics_167 = new cjs.Graphics().p("EA7OA5sQnOg4qAhHQp+hNlCiRQlEiVHHtpQjyl7ofyfQohyhKyDWQKzDWBVnrQBWntGzvrQGzvsObmfQOcmoMGCsQFQBNiLRMQOtspHYD/QNCHACbH8QEINTo2B1QhTASlvATQjwAIgkBOQgNAdLaHzQMFIJBTCQQDbF7jNHhQjNHgn6EkQn/EnoGg/QhigIkZgNQjYgLgYgMQnRkQjQBeQiiBIgwFJQgjGTgbDDQg0FYiuBkQnTEOjsBLQjWBGj7AAQh1AAh9gPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:681.7431,y:160.5709}).wait(1).to({graphics:mask_graphics_15,x:688.8323,y:166.7283}).wait(1).to({graphics:mask_graphics_16,x:695.85,y:172.8236}).wait(1).to({graphics:mask_graphics_17,x:702.7961,y:178.8567}).wait(1).to({graphics:mask_graphics_18,x:709.6707,y:184.8277}).wait(1).to({graphics:mask_graphics_19,x:716.4738,y:190.7366}).wait(1).to({graphics:mask_graphics_20,x:723.2053,y:196.5833}).wait(1).to({graphics:mask_graphics_21,x:729.8652,y:202.3678}).wait(1).to({graphics:mask_graphics_22,x:736.4536,y:208.0902}).wait(1).to({graphics:mask_graphics_23,x:742.9704,y:213.7505}).wait(1).to({graphics:mask_graphics_24,x:749.4156,y:219.3486}).wait(1).to({graphics:mask_graphics_25,x:755.7893,y:224.8845}).wait(1).to({graphics:mask_graphics_26,x:762.0915,y:230.3583}).wait(1).to({graphics:mask_graphics_27,x:768.322,y:235.7699}).wait(1).to({graphics:mask_graphics_28,x:774.481,y:241.1194}).wait(1).to({graphics:mask_graphics_29,x:780.5685,y:246.4068}).wait(1).to({graphics:mask_graphics_30,x:786.5844,y:251.632}).wait(1).to({graphics:mask_graphics_31,x:792.5287,y:256.795}).wait(1).to({graphics:mask_graphics_32,x:798.4015,y:261.8959}).wait(1).to({graphics:mask_graphics_33,x:804.2028,y:266.9346}).wait(1).to({graphics:mask_graphics_34,x:809.9324,y:271.9112}).wait(1).to({graphics:mask_graphics_35,x:815.5906,y:276.8257}).wait(1).to({graphics:mask_graphics_36,x:821.1771,y:281.6779}).wait(1).to({graphics:mask_graphics_37,x:826.6921,y:286.4681}).wait(1).to({graphics:mask_graphics_38,x:832.1355,y:291.1961}).wait(1).to({graphics:mask_graphics_39,x:837.5074,y:295.8619}).wait(1).to({graphics:mask_graphics_40,x:842.8078,y:299.972}).wait(1).to({graphics:mask_graphics_41,x:848.0365,y:299.9017}).wait(1).to({graphics:mask_graphics_42,x:853.1937,y:299.8323}).wait(1).to({graphics:mask_graphics_43,x:858.2794,y:299.7639}).wait(1).to({graphics:mask_graphics_44,x:863.2935,y:299.6964}).wait(1).to({graphics:mask_graphics_45,x:868.236,y:299.6299}).wait(1).to({graphics:mask_graphics_46,x:873.107,y:299.5643}).wait(1).to({graphics:mask_graphics_47,x:877.9064,y:299.4998}).wait(1).to({graphics:mask_graphics_48,x:882.9176,y:300.4175}).wait(55).to({graphics:mask_graphics_103,x:882.9176,y:300.4175}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_112,x:882.9176,y:300.4175}).wait(55).to({graphics:mask_graphics_167,x:882.9176,y:300.4175}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer_5
	this.instance = new lib.germs();
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(89).to({_off:true},1).wait(8).to({_off:false},0).wait(55).to({_off:true},1).wait(22));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_32 = new cjs.Graphics().p("EBFaA0mQkDAJrqg0Qrsg1EyjUQEyjUjdiKQjdiKl3l7Ql3l8A6mzQA3m1E0j8QCHhtH9EhQiEoOEHh6QHPjXEqA0QH0BVhoDtQgPAjhgCNQhBBbAcAfQALALHLimQHjiwBfAAQD9AAC0C1QC1C0AAD8QAAD/i1C0QghAjhXBmQhDBPgNAGQkOB0gNBhQgLBNCWBZQDABkBZA0QCdBdAABXQAADpgfBpQgnCLiJCJQihChjcDgQjdDeimBZQghASgnAAQicAAj0kgg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EBBZA3XQlmALwLhEQwOhDGokSQGokSkyizQkziyoInqQoInrBRoyQBMo1GslGQC7iLLCF1Qi4qoFtidQKCkWGeBDQK1BuiQEyQgVAtiFC3QhbB1AoAnQAPAOJ8jUQKejkCEAAQFeAAD7DpQD6DpAAFGQAAFIj6DqQguAth4CEQheBlgSAIQl2CVgSB/QgPBiDQBzQEKCCB7BDQDZB5AABwQAAEtgqCHQg2C0i+CxQjfDQkxEhQk0EfjlBzQguAXg2AAQjYAAlTlzg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EA9fA6DQnIAN0khSQ0ohSIblPQIclOmGjaQmGjaqVpWQqVpWBoquQBfqwIgmOQDuisOCHIQjqs9HQjAQMxlUIOBSQNyCGi4F2QgbA3ipDfQhzCQAyAwQATARMqkFQNTkWCpAAQG9AAE+EdQE/EdAAGNQAAGRk/EcQg5A3iaChQh2B8gXAKQncC2gXCaQgTB4EICNQFSCdCdBTQEUCTAACJQAAFvg1ClQhFDbjyDYQkcD+mDFhQmIFekjCNQg7AchEAAQkTAAmvnFg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EA5sA8qQonAQ42hhQ45hhKKmJQKMmInXkBQnXkAseq/QsfrAB9smQB0spKSnUQEfjJQ7IYQkavQIwjiQPbmPJ7BhQQqCdjeG4QghBAjMEGQiLCpA9A5QAXAUPSkyQQElHDMAAQIaAAGAFPQGBFOAAHUQAAHYmBFNQhFBBi6C9QiPCRgcANQo/DVgbC2QgYCNFAClQGYC5C+BhQFOCuAAChQAAGvhBDCQhUECkkD+QlXEqnUGfQnYGblgCmQhHAhhTAAQlMAAoIoVg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EA1/A/NQqEAS8/hvQ9EhvL4nCQL4nComklQolkmukslQulsmCSuaQCHugMAoYQFPjnTxJmQlJxdKOkDQSAnJLlBvQTdC0kEH3QgmBKjuEsQiiDCBGBBQAbAXR2lfQSxl2DuAAQJzAAHBF/QHBGAAAIXQAAIcnBGAQhRBKjYDYQioCmghAOQqeD0ghDQQgbCiF1C9QHcDUDeBvQGGDHAAC5QAAHuhMDdQhhEolVEjQmRFVoiHcQooHXmbC9QhTAmhgAAQmEAApfpig");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAyZBBrUgLdAAUghDgB8UghHgB9ANigH5QNjn5pzlKQpylKwmuJQwnuJCmwMQCawTNrpZQF+kEWjKyQl4znLokiQUhoCNNB9QWJDKknI1QgsBTkPFRQi5DaBQBJQAfAaUVmKQVYmkEPAAQLLAAIAGuQIAGvAAJZQAAJfoAGuQhcBTj3D0Qi/C6glAQQr8ESglDqQgfC1GpDVQIfDvD8B8QG8DfAADQQAAIqhWD5QhvFMmEFHQnJGApuIWQp1IRnUDVQhfAqhuAAQm6AAqzqtg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EAu6BEEUgM1AAXgk8gCJUglFgCKAPJgIwQPKovq9ltQq9ltykvpQymvpC6x7QCtyCPTqaQGskfZNL8Qmk1tNClCQW8o4OxCKQYyDglLJxQgwBckwF1QjPDxBaBRQAiAcWvm0QX7nREwAAQMgAAI8HdQI8HcAAKaQAAKfo8HdQhnBbkUEOQjWDPgpARQtXEvgqEDQgiDIHcDsQJeEIEbCJQHxD3AADmQAAJmhhETQh8FwmyFpQn/Gpq4JPQrAJKoMDrQhpAvh7AAQnvAAsFr3g");
	var mask_1_graphics_39 = new cjs.Graphics().p("EArhBGZUgOJAAZgowgCWUgo5gCXAQtgJkQQupjsFmPQsGmP0fxHQ0fxHDNzmQC+ztQ4rYQHXk6b0NCQnQ3uOZlgQZTptQSCXQbWD0luKsQg1BllOGYQjlEHBjBYQAmAgZFndQaZn9FPAAQNyAAJ3IJQJ4IJAALYQAALep4IJQhyBlkwEnQjsDhguATQuvFNgtEZQgmDcIMEBQKeEhE4CXQIjENAAD7QAAKghqEtQiJGSnfGLQozHRsAKGQsIKApCEBQh1A0iIAAQohAAtVs+g");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAoPBKCUgPbAAbgscgCjUgsmgCjASOgKWQSOqWtLmwQtLmw2WyiQ2WygDf1QQDQ1WSasUQIClUeVOIQn65sPsl9QblqhRxCjQd0EJmOLlQg6BtltG6Qj5EdBsBfQApAibWoEQcyonFtAAQPCAAKwI0QKxI0AAMVQAAMbqxI0Qh8BslMFAQkBD0gyAVQwEFogyEyQgqDtI9EWQLaE5FUCjQJVEkAAEQQAALXh0FGQiVGzoLGsQpmH3tGK8QtOK1p2EXQh/A3iUAAQpTAAuiuCg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAlEBPhUgQrAAdgwBgCvUgwLgCvATsgLIQTsrHuPnQQuPnQ4Iz5Q4Kz4Dy20QDg27T4tPUAIsgFtAgxAPLQoj7nQ9mYQd0rTTLCvUAgNAEdgGuAMcQg/B0mKHbQkNEyB1BmQAtAldiorQfGpPGKAAQQQAALoJeQLnJeAANOQAANWrnJeQiHB1lmFXQkWEHg2AWQxXGCg2FJQgtD+JrEsQMUFPFwCwQKFE5AAEkQAAMNh9FfQiiHTo0HMQqYIcuJLwQuSLoqpErQiJA8igAAQqDAAvsvFg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAh/BU1UgR3AAfgzegC7UgzpgC7AVGgL3QVHr3vRnuQvQnv541OQ551OED4VQDx4dVUuHUAJTgGGAjIAQMQpK9cSLm0Qf+sDUjC7UAihAEvgHNANRQhDB9mnH6QkgFHB9BtQAwAnfrpQUAhVgJ3AGmAAAQRbAAMdKHQMdKGAAOHQAAOPsdKGQiQB9mAFuQkqEYg6AXQynGdg6FeQgwEQKXE/QNOFmGJC7QK0FPAAE3QAANBiGF2QitHypeHrQrGJAvLMiQvUMaraE/QiTBAirAAQqxAAw1wFg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAfBBZ9UgTCAAhg2zgDGUg3AgDHAWegMlQWfskwQoNQwQoN7j2gQ7k2fEU50QEA57Wsu+UAJ6gGdAlaARKQpw/OTWnOUAiDgMxAV4ADGUAkxAFCgHrAOEQhICEnCIZQkzFaCFB0UAAzAApAhvgJzUAjfgKdAHCAAAQSiAANRKtQNRKtAAO+QAAPGtRKtQiZCEmZGFQk9Epg+AYQz0G2g+F0QgzEgLCFSQOEF8GkDGQLgFjAAFKQAAN0iPGMQi4IQqFIIQr1JjwJNTQwTNKsKFSQicBEi3AAQrdAAx7xDg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EAdKBe5UgUIAAjg6CgDRUg6OgDRAXygNRQXztRxNoqQxNop9K3wQ9M3uEk7OQEO7XYCvzUAKggGzAnmASGUgKUgg7AUegHoUAkDgNeAXMADRUAm6AFTgIIAO2QhMCLndI2QlEFuCMB6UAA2AArAjugKVUAlkgLCAHdAAAQToAAODLTQODLTAAPyQAAP7uDLTQijCMmxGZQlQE5hBAbQ0/HNhBGIQg2EwLsFlQO5GRG8DRQMMF2AAFdQAAOkiYGiQjDItqqIlQsiKExGOCQxQN4s3FlQimBHjBAAQsJAAy/x/g");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAeuBjqUgVOAAlg9IgDcUg9WgDcAZEgN7QZEt8yHpFQyIpG+u47Q+w47E08mQEd8uZUwlUALDgHKApuATBUgK4gimAVlgIAUAl+gOKAYbADcUAo/AFlgIjAPlQhQCSn2JTQlWGACUCAUAA5AAuAlngK4UAnlgLkAH2AAAQUsAAOzL3QOzL3AAQlQAAQuuzL3QirCTnJGuQlhFJhFAbQ2HHlhEGcQg5E/MTF3QPsGlHUDbQM2GKAAFuQAAPSigG3QjOJKrOJAQtNKlyAOuQyMOltjF3QivBLjLAAQsyAA0Ay5g");
	var mask_1_graphics_46 = new cjs.Graphics().p("EAgOBoPUgWQAAnhAIgDmUhAVgDmAaSgOkQaTulzApgUgTAgJgggPgaFUggQgaFAFDgd5QEr+DajxWUALmgHfArwAT5UgLagkMAWogIYUAn1gOzAZoADmUAq/AF1gI+AQTQhUCZoOJuQlnGSCbCGUAA8AAwAndgLYUAphgMHAIOAAAQVsAAPiMbQPhMaAARWQAARfvhMaQi0CZnfHCQlyFYhIAdQ3MH7hIGvQg8FOM6GIQQdG4HrDmQNdGbAAF/QAAQAinHLQjYJkryJbQt1LEy5PaQzEPQuOGIQi3BOjWAAQtaAA0+zxg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EAhqBspUgXPAAohDAgDvUhDNgDwAbdgPMQbevLz2p6UgT3gJ6ghrgbMUghsgbLAFRgfKQE4/VbwyFUAMHgHyAttAUuUgL6gltAXpgIvUApngPbAaxADvUAs6AGFgJYAQ/QhYCgomKIQl3GjCjCMUAA+AAxApOgL1UArYgMoAImAAAQWqAAQOM7QQOM8AASFQAASPwOM7Qi8Cgn0HVQmDFnhLAeQ4PIQhLHBQg+FcNfGZQRMHLIADvQOFGtAAGPQAAQrivHeQjhJ+sUJ1QudLizvQDQz7P5u2GZQjABRjfAAQuBAA160mg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAjDBw4UgYNAAphFvgD4UhF/gD5AcmgPyQcmvy0rqSUgUqgKTgjEgcPUgjFgcPAFfggYUAFFggiAc5gSyUAMngIGAvmAViUgMagnLAYngJEUArUgQCAb3AD5UAuxAGUgJxARpQhbCmo9KhQmGGzCpCRUABBAA0Aq7gMTUAtJgNIAI9AAAQXmAAQ4NcQQ4NcAASyQAAS8w4NcQjDCmoJHnQmTF1hOAfQ5OIlhPHSQhBFqOCGoQR6HdIWD5QOpG9AAGfQAARUi2HxQjrKXs0KNQvDL/0jQrQ0vQhveGoQjHBVjoAAQulAA201Zg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAkYB07UgZIAArhIYgECUhIngECAdqgQWQdswV1dqrUgVdgKqgkYgdQUgkagdPAFsghjUAFSghtAd+gTdUANGgIYAxZAWTUgM4golAZigJZUAs9gQmAc7AEBUAwiAGjgKJASSQheCrpTK6QmVHDCwCWUABDAA1AsigMvUAu3gNlAJTAAAQYfAARhN6QRhN7AATdQAATnxhN7QjLCsocH4QmjGDhRAgQ6LI5hRHiQhEF3OkG4QSlHuIqEBQPNHOAAGtQAAR8i+IDQjzKvtTKkQvnMa1VRSQ1hRGwDG4QjPBYjxAAQvJAA3q2Kg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAlpB4yUgaAAAshK5gEKUhLJgEKAesgQ5Qeuw42MrBUgWNgLAglpgeOUglrgeNAF5giqUAFdgi0AfBgUGUANjgIrAzHAXDUgNVgp7AabgJtUAuigRJAd7AEKUAyNAGwgKeAS5QhiCxpnLQQmkHSC2CbUABGAA4AuFgNLUAwfgOCAJnAAAQZWAASIOYQSIOZAAUGQAAURyIOYQjSCxovIJQmxGPhUAiQ7FJLhUHzQhGGDPEHHQTPH+I9EKQPuHcAAG8QAASijEIUQj7LGtxK6QwKM02ER2Q2SRrwmHHQjWBaj5AAQvrAA4f25g");
	var mask_1_graphics_51 = new cjs.Graphics().p("EAm2B8eUga1AAuhNTgETUhNjgESAfrgRaQftxZ26rWUgW6gLWgm3gfJUgm4gfIAGFgjuUAFpgj4AgAgUtUAN/gI7A0wAXvUgNwgrNAbRgJ/UAwBgRrAe4AESUAz1AG9gK0ATeQhlC2p7LnQmxHgC8CgUABIAA5AvkgNkUAyCgOeAJ7AAAQaKAAStO0QStO1AAUtQAAU5ytO0QjZC3pBIZQm/GbhWAiQ79JehXICQhIGPPkHUQT1IOJQESQQOHrAAHJQAATGjKIlQkDLbuNLQQwsNN2xSZQ2/SNxJHVQjdBdkBAAQwKAA5S3mg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAn/B/+UgbnAAvhPlgEaUhP2gEaAgngR5UAgpgR4gXmgLrUgXlgLrgoAggBUgoBggAAGQgkuUAFzgk5Ag9gVSUAOZgJMA2UAYbUgOKgsbAcFgKSUAxbgSLAfzAEaUA1XAHKgLJAUBQhoC8qNL7Qm+HuDBCkUABKAA7Aw+gN9UAzhgO3AKOAAAQa7AATQPPQTRPOAAVTQAAVezRPPQjeC8pSIoQnNGnhZAjQ8yJvhZIRQhKGaQBHhQUbIdJhEaQQtH5AAHWQAATojQI0QkLLwuoLkQxLNl3cS6Q3rSuxpHiQjjBgkJAAQwpAA6C4Rg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EApFCDTUgcXAAwhRwgEhUhSBgEhAhggSXUAhhgSWgYOgL+UgYPgL/gpFgg2UgpIgg2AGcglqUAF9gl2Ah3gV2UAOxgJbA3yAZDUgOigtlAc2gKjUAyygSpAgqAEiUA20AHWgLdAUhQhqDBqgMPQnJH7DGCoUABMAA9AyTgOUUA07gPRAKgAAAQbpAATzPpQTyPoAAV2QAAWCzyPoQjlDBpiI3QnZGxhcAlQ9kJ+hbIfQhNGkQdHvQU/IqJxEhQRLIGAAHiQAAUKjWJCQkTMEvBL3QxpN84FTZQ4UTNyHHvQjqBikQAAQxGAA6v45g");
	var mask_1_graphics_54 = new cjs.Graphics().p("EAqHCGdUgdFAAxhTzgEoUhUFgEpAiWgSzUAiXgSygY1gMQUgY1gMRgqIghoUgqJghpAGmgmkUAGGgmwAitgWYUAPKgJpA5LAZpUgO6guqAdlgKzUA0DgTGAheAEoUA4MAHigLuAVBQhuDFqwMiQnVIHDLCsUABOAA+AzkgOqUA2QgPnAKwAAAQcWAAUSQAQUSQAAAWYQAAWj0SQBQjqDFpyJEQnlG8hdAlQ+UKOhdIsQhPGvQ3H6QVhI3KBEpQRmISAAHuQAAUojbJRQkaMVvZMKQyFOR4sT3Q47TrykH6QjwBkkXAAQxhAB7a5fg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EArFCJaUgdwAAzhVvgEvUhWAgEvAjIgTNUAjKgTNgZagMiUgZagMigrGgiYUgrHgiXAGvgnbUAGQgnnAjggW4UAPggJ2A6gAaNUgPQgvsAeQgLCUA1QgThAiQAEvUA5fAHsgMAAVeQhwDKrAM0QngISDQCwUABQAA/A0wgO+UA3ggP+ALAAAAQdAAAUwQXQUwQXAAW3QAAXE0wQXQjwDJqAJRQnwHGhgAmQ/AKdhgI3QhQG5RQIFQWAJEKQEvQSAIeAAH4QAAVGjgJdQkgMovwMaQygOm5QUTQ5gUGzAIFQj1BnkdAAQx8AA8C6Dg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EAr/CMNUgeYAAzhXjgE1UhX1gE1Aj4gTmUAj6gTmgZ9gMyUgZ8gMygsAgjFUgsCgjEAG4goOUAGZgobAkQgXUUAP1gKEA7vAawUgPkgwqAe4gLRUA2ZgT6Ai+AE1UA6tAH2gMQAV6QhzDOrPNFQnqIcDVC0UABRABBA14gPSUA4rgQTALPAAAQdnAAVMQsQVMQtAAXUQAAXi1MQsQj1DOqOJdQn6HPhiAnQ/qKqhiJDQhSHBRoIQQWdJQKeE0QSZIqAAIDQAAVgjlJqQkmM4wGMqQy5O55yUtQ6CUhzaIPQj6BpkkAAQyTAB8p6lg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EAs2CO0Uge+AA0hZQgE7UhZigE7AklgT9UAkmgT9gadgNCUgacgNBgs3gjuUgs5gjuAHCgo+UAGggpLAk9gXwUAQJgKQA85AbQUgP4gxkAffgLeUA3cgUSAjqAE7UA71AH/gMfAWUQh1DSrcNUQn0InDYC3UABUABCA26gPkUA5ygQmALcAAAQeMAAVnRAQVmRAAAXwQAAX+1mRAQj6DSqaJoQoFHXhkAoUggRAK3gBkAJNQhTHKR9IaQW6JaKrE7QSvI0AAIMQAAV7jpJ1QksNHwZM5QzRPK6SVHQ6jU4zyIaQj/BrkpAAQyqAA9M7Eg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EAtpCRPUgfhAA1ha1gFAUhbIgFAAlOgUTUAlQgUTga7gNQUga6gNPgtqgkVUgtrgkVAHJgprUAGngp3AlngYKUAQbgKbA9/AbtUgQKgyaAgDgLqUA4agUoAkTAFAUA85AIIgMtAWtQh3DVrqNiQn8IwDcC7UABVABDA34gP1UA6zgQ4ALqAAAQeuAAV/RSQV/RTAAYKQAAYY1/RSQj+DVqmJzQoOHghlAoUgg2ALCgBmAJYQhVHSSSIiQXUJmK3E/QTEI+AAIVQAAWSjtKAQkxNVwsNIQznPb6wVdQ7BVP0IIjQkEBtkuAAQy/AA9t7ig");
	var mask_1_graphics_59 = new cjs.Graphics().p("EAuYCTfUggCAA2hcSgFFUhcmgFFAl1gUoUAl2gUngbXgNcUgbWgNdguZgk5Uguagk5AHQgqTUAGvgqhAmNgYjUAQsgKlA+/AcJUgQbgzMAgkgL2UA5VgU8Ak3AFFUA95AIQgM7AXDQh5DZr1NwQoFI4DgC+UABWABDA4ygQEUA7wgRJAL2AAAQfOAAWVRkQWWRjAAYiQAAYw2WRkQkCDYqxJ9QoWHnhnApUghYALNgBnAJhQhXHZSlIrQXsJvLCFFQTYJGAAIdQAAWpjxKJQk2Njw9NUQz7Pq7MVzQ7cVk0dIrQkIBvkzAAQzUAA+L79g");
	var mask_1_graphics_60 = new cjs.Graphics().p("EAvDCVjUggfAA3hdpgFJUhd8gFKAmYgU6UAmZgU6gbwgNoUgbwgNpgvEglaUgvGglaAHXgq6UAG1grHAmygY4UAQ7gKuA/5AchUgQqgz6AhDgMAUA6KgVPAlaAFJUA+yAIXgNGAXZQh7DbsBN9QoMJADjDAUABYABFA5ngQTUA8ngRYAMBAAAQfrAAWrRzQWqRzAAY5QAAZG2qRzQkGDcq7KFQoeHuhpApUgh3ALYgBpAJpQhXHgS2IzQYCJ3LMFJQTqJPAAIlQAAW8j0KTQk7NvxNNhQ0NP37lWGQ72V40xIzQkLBwk4AAQzlAA+o8Wg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EAvrCXcUgg7AA3he4gFNUhfLgFOAm5gVLUAm5gVKgcHgN0UgcHgN0gvsgl4Ugvtgl4AHdgrdUAG7grpAnSgZNUARJgK3BAvAc5UgQ4g0kAhegMKUA67gVgAl6AFNUA/nAIegNSAXrQh8DfsLOHQoTJIDmDDUABZABFA6YgQgUA9agRmAMLAAAUAgGAAAAW9ASCQW+SBAAZNQAAZa2+SCQkJDerFKNQokH1hrApUgiTALhgBqAJyQhZHlTGI6QYWJ/LWFOQT6JWAAIsQAAXPj3KbQk/N6xcNrQ0eQF78WYQ8OWK1BI5QkQByk7AAQz2AA/B8tg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EAwPCZJUghUAA4hf/gFRUhgSgFSAnVgVaUAnXgVZgccgN+UgcdgN+gwPgmTUgwRgmUAHjgr8UAG/gsJAnwgZfUARWgK+BBgAdNUgRFg1KAh4gMTUA7ngVvAmWAFRUBAXAIkgNcAX8Qh9DhsVOSQoZJODpDFUABZABGA7EgQsUA+IgRzAMVAAAUAgdAAAAXPASPQXPSPAAZeQAAZt3PSPQkNDhrMKUQorH6hsArUgitALpgBrAJ4QhaHrTUJAQYoKHLfFRQUJJdAAIyQAAXgj6KjQlDODxoN2Q0uQQ8RWoQ8jWa1RJAQkTBzk/AAQ0FAA/Y9Cg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EAwvCarUghqAA5hg/gFVUhhSgFVAnvgVoUAnygVngcwgOHUgcvgOGgwwgmsUgwxgmsAHogsYUAHFgsmAoKgZvUARigLGBCLAdhUgRQg1sAiNgMbUA8PgV9AmwAFUUBBBAIqgNkAYLQh/DkscOaQofJVDrDGUABaABHA7rgQ3UA+ygR+AMcAAAUAg0AAAAXeASbQXeSaAAZvQAAZ93eSaQkQDkrUKbQoxH/hsAqUgjFALxgBsAJ/QhbHwThJGQY5KNLmFUQUXJjAAI4QAAXvj+KpQlFONx0N+Q08Qb8kW2Q82Wo1fJGQkVB0lDAAQ0SAA/t9Ug");
	var mask_1_graphics_64 = new cjs.Graphics().p("EAxLCcBUgh9AA6hh3gFYUhiLgFYAoHgV0UAoIgVzgdAgOPUgdAgOOgxMgnCUgxNgnCAHsgswUAHJgs/AohgZ9UARsgLMBCxAdxUgRag2KAiigMiUA8ygWKAnGAFYUBBnAIvgNtAYZQiADlsjOjQokJZDtDJUABcABHA8NgRAUA/WgSIAMkAAAUAhGAAAAXsASkQXsSlAAZ9QAAaM3sSkQkSDmrbKhQo2IDhtArUgjZAL3gBtAKFQhcH0TsJLQZIKTLsFXQUjJoAAI9QAAX8kAKwQlIOUx/OGQ1HQk81XDQ9GW11sJLQkYB1lGAAUgUdAAAggAgdlg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EAxjCdMUgiOAA6hingFaUhi8gFbAobgV+UAocgV+gdPgOVUgdOgOWgxkgnUUgxmgnVAHwgtGUAHMgtUAo1gaJUAR1gLSBDTAd/UgRjg2jAizgMoUA9QgWVAnaAFbUBCHAIygNzAYlQiBDnsqOqQooJeDwDKUABcABIA8rgRJUA/2gSQAMpAAAUAhXAAAAX4AStQX3SuAAaJQAAaY33SuQkUDnrhKmQo6IHhuAsUgjrAL8gBuAKJQhcH4T2JQQZTKYLzFaQUtJsAAJBQAAYIkCK1QlLObyHONQ1SQs9DXOQ9VXA13JPQkaB2lIAAUgUoAAAggQgdzg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EAx4CeLUgicAA6hjRgFcUhjlgFdAorgWHUAotgWHgdagObUgdbgObgx5gnkUgx7gnkAH0gtYUAHPgtnApGgaUUAR9gLWBDvAeLUgRqg25AjBgMtUA9qgWeAnpAFdUBCkAI2gN5AYvQiCDosvOwQosJhDxDMUABdABIA9EgRPUBARgSYAMvAAAUAhlAAAAYBAS1QYCS1AAaUQAAaj4CS1QkWDorlKrQo+IKhvAsUgj5AMBgBvAKOQhdH7T+JTQZfKcL3FcQU2JxAAJEQAAYSkEK5QlNOhyPOTQ1bQy9PXXQ9hXJ2AJUQkcB2lKAAUgUxAAAggdgd/g");
	var mask_1_graphics_67 = new cjs.Graphics().p("EAyJCe/UgioAA7hjzgFfUhkHgFeAo6gWPUAo7gWOgdlgOfUgdlgOggyKgnxUgyLgnyAH2gtmUAHRgt2ApVgacUASCgLaBEGAeVUgRwg3MAjNgMxUA9/gWlAn3AFfUBC7AI5gN+AY2QiDDqszO0QovJlDyDNUABdABJA9agRWUBAmgSeAMzAAAUAhxAAAAYJAS8QYKS7AAadQAAar4KS7QkXDqrpKuQpBINhwAsUgkFAMFgBwAKRQhdH+UFJWQZnKfL7FeQU9J0AAJIQAAYZkFK9QlPOmyVOXQ1iQ49ZXfQ9sXQ2HJXQkdB3lMAAUgU4AAAggogeJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EAyWCfnUgixAA7hkNgFgUhkhgFgApEgWUUApGgWTgdtgOjUgdsgOkgyXgn7UgyZgn8AH4gtyUAHUguBApfgajUASHgLdBEYAedUgR1g3aAjXgM0UA+PgWrAoBAFgUBDMAI7gOBAY9QiDDrs3O4QoxJnDzDNUABeABKA9pgRaUBA3gSiAM3AAAUAh5AAAAYQATAQYQTAAAajQAAay4QTAQkYDrrsKwQpEIQhwAsUgkPAMIgBwAKTQheIAULJZQZtKiL/FfQVCJ2AAJKQAAYgkGK/QlQOqyaObQ1oQ89hXlQ9zXW2NJZQkfB4lNAAUgU9AAAggxgeRg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EAygCgEUgi4AA7hkggFhUhk0gFhApMgWYUApNgWXgdygOmUgdxgOmgyhgoDUgyigoCAH5gt7UAHVguJApngaoUASLgLfBEkAeiUgR4g3jAjdgM3UA+bgWvAoJAFhUBDZAI9gOFAZBQiDDrs5O7QozJpD0DOUABeABKA91gRdUBBDgSmAM6AAAUAh/AAAAYUATDQYVTEAAaoQAAa34VTEQkZDrruKyQpFIRhxAsUgkVAMLgBxAKVQheIBUOJbQZzKjMBFhQVGJ4AAJLQAAYkkHLCQlROsyeOeQ1rQ/9nXpQ94Xb2SJaQkfB4lOAAUgVBAAAgg3geWg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EAylCgVUgi7AA7hkrgFhUhk/gFiApQgWaUApSgWagd1gOnUgd2gOogymgoHUgyogoHAH7gt/UAHVguOApsgasUASNgLfBEsAelUgR6g3qAjhgM4UA+igWxAoNAFiUBDgAI9gOGAZFQiDDrs7O9QozJqD0DOUABeABJA98gReUBBKgSoAM7AAAUAiDAAAAYYATFQYXTGAAarQAAa64XTFQkaDsrwKzQpGIShxAsUgkZAMMgBxAKXQheICUQJbQZ1KlMDFhQVIJ5AAJNQAAYnkHLCQlSOuyfOfQ1vRB9pXsQ98Xd2UJbQkgB4lPAAUgVDAABgg7geag");
	var mask_1_graphics_71 = new cjs.Graphics().p("EAynCgbUgi9AA7hkugFhUhlDgFiApSgWbUApTgWbgd2gOoUgd3gOogyogoJUgyqgoIAH7guBUAHWguQAptgasUASOgLgBEuAemUgR6g3rAjigM5UA+kgWyAoPAFiUBDjAI+gOHAZFQiDDss7O9Qo0JqD0DOUABeABKA9+gRfUBBNgSpAM8AAAUAiEAAAAYYATGQYYTGAAatQAAa64YTHQkaDrrwK0QpGIShxAtUgkbAMMgBxAKXQheICURJcQZ2KlMDFhQVKJ6AAJNQAAYnkILDQlSOuygOgQ1vRC9rXsQ99Xe2VJcQkgB4lPAAUgVEAAAgg8geag");
	var mask_1_graphics_103 = new cjs.Graphics().p("EAynCgbUgi9AA7hkugFhUhlDgFiApSgWbUApTgWbgd2gOoUgd3gOogyogoJUgyqgoIAH7guBUAHWguQAptgasUASOgLgBEuAemUgR6g3rAjigM5UA+kgWyAoPAFiUBDjAI+gOHAZFQiDDss7O9Qo0JqD0DOUABeABKA9+gRfUBBNgSpAM8AAAUAiEAAAAYYATGQYYTGAAatQAAa64YTHQkaDrrwK0QpGIShxAtUgkbAMMgBxAKXQheICURJcQZ2KlMDFhQVKJ6AAJNQAAYnkILDQlSOuygOgQ1vRC9rXsQ99Xe2VJcQkgB4lPAAUgVEAAAgg8geag");
	var mask_1_graphics_112 = new cjs.Graphics().p("EAynCgbUgi9AA7hkugFhUhlDgFiApSgWbUApTgWbgd2gOoUgd3gOogyogoJUgyqgoIAH7guBUAHWguQAptgasUASOgLgBEuAemUgR6g3rAjigM5UA+kgWyAoPAFiUBDjAI+gOHAZFQiDDss7O9Qo0JqD0DOUABeABKA9+gRfUBBNgSpAM8AAAUAiEAAAAYYATGQYYTGAAatQAAa64YTHQkaDrrwK0QpGIShxAtUgkbAMMgBxAKXQheICURJcQZ2KlMDFhQVKJ6AAJNQAAYnkILDQlSOuygOgQ1vRC9rXsQ99Xe2VJcQkgB4lPAAUgVEAAAgg8geag");
	var mask_1_graphics_167 = new cjs.Graphics().p("EAynCgbUgi9AA7hkugFhUhlDgFiApSgWbUApTgWbgd2gOoUgd3gOogyogoJUgyqgoIAH7guBUAHWguQAptgasUASOgLgBEuAemUgR6g3rAjigM5UA+kgWyAoPAFiUBDjAI+gOHAZFQiDDss7O9Qo0JqD0DOUABeABKA9+gRfUBBNgSpAM8AAAUAiEAAAAYYATGQYYTGAAatQAAa64YTHQkaDrrwK0QpGIShxAtUgkbAMMgBxAKXQheICURJcQZ2KlMDFhQVKJ6AAJNQAAYnkILDQlSOuygOgQ1vRC9rXsQ99Xe2VJcQkgB4lPAAUgVEAAAgg8geag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_1_graphics_32,x:597.5573,y:365.3526}).wait(1).to({graphics:mask_1_graphics_33,x:631.2078,y:391.3991}).wait(1).to({graphics:mask_1_graphics_34,x:663.9842,y:416.7691}).wait(1).to({graphics:mask_1_graphics_35,x:695.8866,y:441.4626}).wait(1).to({graphics:mask_1_graphics_36,x:726.9149,y:465.4795}).wait(1).to({graphics:mask_1_graphics_37,x:757.0692,y:488.8199}).wait(1).to({graphics:mask_1_graphics_38,x:786.3495,y:511.4837}).wait(1).to({graphics:mask_1_graphics_39,x:814.7557,y:533.4711}).wait(1).to({graphics:mask_1_graphics_40,x:842.2879,y:545.9215}).wait(1).to({graphics:mask_1_graphics_41,x:868.946,y:545.4432}).wait(1).to({graphics:mask_1_graphics_42,x:894.7301,y:544.9806}).wait(1).to({graphics:mask_1_graphics_43,x:919.6402,y:544.5337}).wait(1).to({graphics:mask_1_graphics_44,x:937.1743,y:544.1025}).wait(1).to({graphics:mask_1_graphics_45,x:932.6821,y:543.687}).wait(1).to({graphics:mask_1_graphics_46,x:928.3594,y:543.2871}).wait(1).to({graphics:mask_1_graphics_47,x:924.2062,y:542.9029}).wait(1).to({graphics:mask_1_graphics_48,x:920.2225,y:542.5344}).wait(1).to({graphics:mask_1_graphics_49,x:916.4084,y:542.1816}).wait(1).to({graphics:mask_1_graphics_50,x:912.7637,y:541.8445}).wait(1).to({graphics:mask_1_graphics_51,x:909.2886,y:541.523}).wait(1).to({graphics:mask_1_graphics_52,x:905.983,y:541.2173}).wait(1).to({graphics:mask_1_graphics_53,x:902.8469,y:540.9272}).wait(1).to({graphics:mask_1_graphics_54,x:899.8803,y:540.6527}).wait(1).to({graphics:mask_1_graphics_55,x:897.0833,y:540.394}).wait(1).to({graphics:mask_1_graphics_56,x:894.4558,y:540.151}).wait(1).to({graphics:mask_1_graphics_57,x:891.9978,y:539.9236}).wait(1).to({graphics:mask_1_graphics_58,x:889.7093,y:539.7119}).wait(1).to({graphics:mask_1_graphics_59,x:887.5903,y:539.5159}).wait(1).to({graphics:mask_1_graphics_60,x:885.6408,y:539.3356}).wait(1).to({graphics:mask_1_graphics_61,x:883.8609,y:539.1709}).wait(1).to({graphics:mask_1_graphics_62,x:882.2505,y:539.0219}).wait(1).to({graphics:mask_1_graphics_63,x:880.8096,y:538.8887}).wait(1).to({graphics:mask_1_graphics_64,x:879.5382,y:538.771}).wait(1).to({graphics:mask_1_graphics_65,x:878.4363,y:538.6691}).wait(1).to({graphics:mask_1_graphics_66,x:877.504,y:538.5829}).wait(1).to({graphics:mask_1_graphics_67,x:876.7411,y:538.5123}).wait(1).to({graphics:mask_1_graphics_68,x:876.1478,y:538.4574}).wait(1).to({graphics:mask_1_graphics_69,x:875.724,y:538.4182}).wait(1).to({graphics:mask_1_graphics_70,x:875.4698,y:538.3947}).wait(1).to({graphics:mask_1_graphics_71,x:920.4988,y:564.8919}).wait(32).to({graphics:mask_1_graphics_103,x:920.4988,y:564.8919}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_112,x:920.4988,y:564.8919}).wait(55).to({graphics:mask_1_graphics_167,x:920.4988,y:564.8919}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer_10
	this.instance_1 = new lib.germs();
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(71).to({_off:true},1).wait(8).to({_off:false},0).wait(55).to({_off:true},1).wait(22));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("EAv4AkqQg6ACimgMQingMBEgvQBEgvgxgfQgygfhThVQhUhUANhhQAMhiBFg4QAegZByBBQgeh2A7gbQBngwBDAMQBwATgYA1QgDAIgVAfQgPAUAGAHQADADBmglQBsgoAVAAQA5AAAoApQAoAoAAA4QAAA5goAoIgbAfQgPASgDABQg8AagDAWQgCARAhATQArAXAUALQAjAVAAAUQAAA0gHAXQgJAfgeAfIhVBWQgyAxglAUQgHAEgJAAQgjAAg2hAg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EAvZAlBQhCACi/gNQi+gNBOg3QBOg2g5gjQg4gjhghhQhfhhAPhuQANhwBPhAQAjgcCBBKQgiiGBEggQB2g2BMANQB/AWgaA8QgEAJgZAkQgQAXAHAIQADADB1gqQB7gtAYAAQBBAAAuAuQAuAuAABAQAABBguAuIgfAjQgRAUgDACQhFAdgEAZQgCATAmAXQAxAaAWANQAoAYAAAWQAAA7gHAbQgKAjgjAjIhhBiQg5A5gqAXQgJAEgJAAQgoAAg+hJg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EAu5AlYQhKACjWgPQjWgPBYg8QBXg9g/goQg/gnhshtQhrhtARh8QAPh+BZhIQAmgfCSBTQgmiXBLgjQCFg+BWAPQCPAZgeBEQgEAKgcAoQgSAaAIAJQADADCDgvQCLgzAbAAQBIAAA0A0QA0A0AABIQAABJg0A0IgiAnQgUAWgDACQhOAhgDAcQgDAWArAaQA2AcAaAPQAtAbAAAZQAABDgJAeQgLAngnAoIhtBuQhABAgvAZQgKAFgLAAQgtAAhGhSg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAuaAlvQhSACjtgQQjugRBhhDQBhhEhGgrQhGgsh3h5Qh3h5ASiKQARiLBjhQQAqgjCiBcQgqinBUgnQCThEBfAQQCfAbghBMQgFALgfAtQgUAdAJAJQADAECSg1QCZg4AfAAQBQAAA5A6QA6A5AABQQAABRg6A6IgmArQgVAZgEACQhWAlgEAfQgEAYAwAcQA9AgAcARQAyAeAAAbQAABKgKAhQgMAtgsArIh5B7QhGBGg1AcQgKAGgNAAQgxAAhOhbg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EAt7AmFQhaADkEgSQkFgSBqhKQBrhKhNgwQhNgxiDiEQiDiEAUiYQATiZBshYQAvgmCyBlQgui4BbgqQCihLBoASQCvAeglBSQgFAMghAyQgXAgAKAKQADAEChg6QCog9AiAAQBYAAA/A/QA/A/AABYQAABZg/A/IgqAwQgYAbgEACQheAogFAjQgEAaA1AfQBDAjAfASQA2AhAAAeQAABSgKAkQgOAxgwAwIiFCGQhNBNg6AfQgLAHgOAAQg2AAhWhlg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EAtdAmcQhjADkbgUQkcgUB0hQQB0hRhUg0QhUg1iOiQQiPiQAWilQAVinB1hfQA0gqDBBuQgyjIBkguQCwhSBxAUQC+AggoBaQgGANgkA2QgZAjALALQAEAFCvg/QC3hDAkAAQBgAABFBEQBEBFAABgQAABhhEBEIguA0QgZAegFACQhnAsgFAlQgEAdA5AiQBJAmAiAUQA7AkAAAhQAABYgLAoQgPA1g0A0IiRCSQhUBUg/AiQgNAHgOAAQg8AAhchtg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EAs+AmyQhqAEkygWQk0gVB+hXQB9hXhag5Qhbg5iaicQiaicAYiyQAWi0B/hoQA3gsDRB3Qg2jZBsgyQC+hYB7AVQDNAjgrBiQgGAOgnA6QgbAlAMANQAEAEC9hDQDGhJAnAAQBoAABKBKQBKBKAABoQAABphKBKIgxA4QgcAggFADQhvAvgFApQgFAfA+AkQBPAqAkAVQBAAmAAAkQAABggMArQgQA5g4A4IidCeQhbBbhEAlQgNAHgQAAQhAAAhlh2g");
	var mask_2_graphics_8 = new cjs.Graphics().p("EAsgAnIQhyAElKgXQlKgXCHhdQCHhehhg9Qhig9ilinQimioAajAQAYjBCIhvQA8gwDgB/Qg6joB0g2QDMhfCEAXQDdAmguBoQgHAQgqA+QgdAoAMAOQAFAFDLhJQDVhOAqAAQBvAABQBQQBQBPAABwQAABwhQBQQgOAPgnAtQgdAjgGADQh3AzgGArQgFAhBCAoQBVAsAnAXQBFApAAAnQAABmgNAuQgRA+g9A8IioCqQhiBihJAnQgOAIgRAAQhFAAhsh/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EAsCAnfQh6AElggZQlhgZCQhkQCQhkhohBQhohBixizQixizAcjNQAZjPCSh3QBAgzDwCJQg/j5B8g5QDbhmCMAZQDsAogxBwQgHAQgtBDQgfArANAOQAGAFDYhOQDkhTAtAAQB3AABVBVQBVBWAAB3QAAB4hVBVQgPAQgpAwQggAlgGAEQh/A2gHAuQgFAkBHAqQBaAvAqAZQBKAsAAApQAABugOAxQgTBChABAIi0C2QhoBphOAqQgQAIgSAAQhKAAhziHg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EArkAn1QiCAEl2gaQl4gbCZhqQCahqhvhGQhvhFi8i/Qi9i+AejbQAbjbCbh/QBEg2D/CRQhCkICEg9QDphtCVAbQD7Aqg0B3QgIASgwBHQghAuAPAPQAFAFDmhTQDzhYAwAAQB/AABaBbQBbBaAAB/QAACAhbBaQgQASgsAzQgiAngGAEQiIA5gGAyQgGAmBMAtQBgAyAsAaQBPAvAAAsQAAB0gPA1QgUBGhFBFIi/DBQhvBvhTAtQgRAJgTAAQhPAAh6iQg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EArGAoKQiJAFmNgcQmOgcCihwQCjhxh2hKQh1hJjIjKQjHjKAfjnQAdjpCkiGQBIg6EPCaQhHkYCMhBQD3hzCeAcQEKAtg3B+QgIATgzBLQgjAxAPAQQAGAGD0hYQEBheAzAAQCGAABgBgQBgBgAACGQAACIhgBgQgRASgvA3QgjApgHAEQiQA9gHA0QgGApBQAvQBmA1AvAcQBUAyAAAuQAAB8gQA4QgVBKhJBJIjLDMQh2B2hYAwQgRAJgVAAQhTAAiCiZg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EAqpAogQiSAFmjgdQmkgeCrh3QCsh3h8hOQh8hNjTjVQjTjWAhj0QAfj2CuiOQBLg9EeCjQhKkoCUhEQEEh5CnAdQEZAwg6CFQgJATg2BQQgkAzAQARQAGAGEChcQEPhjA2AAQCNAABmBlQBlBlAACOQAACPhlBmQgSATgxA6QgmAsgIADQiXBBgHA3QgHArBVAyQBrA4AyAdQBYA1AAAxQAACDgRA6QgWBPhNBNIjWDYQh8B8hdAzQgTAKgWAAQhXAAiJiig");
	var mask_2_graphics_13 = new cjs.Graphics().p("EAqLAo2QiZAFm5gfQm7gfC1h9QC1h+iDhSQiChRjejhQjejgAjkCQAgkCC2iVQBQhBEtCrQhOk3CbhIQETh/CwAeQEoAzg+CMQgJAUg5BUQgmA2AQASQAHAHEPhiQEehoA5AAQCVAABrBqQBqBrAACVQAACXhqBrQgUAUgzA9QgoAugIAEQifBEgIA6QgGAtBYA1QByA7A0AfQBdA3AAA0QAACJgSA+QgXBShRBRQhfBgiCCEQiECDhhA1QgUALgXAAQhcAAiRiqg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EApuApLQihAFnPggQnQggC9iEQC+iEiJhWQiJhVjpjsQjpjsAkkOQAikPDAidQBUhEE8C0QhTlHCkhLQEfiGC6AgQE2A1hBCTQgJAWg8BYQgoA4ASATQAGAHEdhnQEshtA8AAQCcAABwBwQBwBwAACdQAACehwBwQgUAWg2A/QgqAxgIAEQinBHgJA9QgGAvBdA4QB3A+A3AgQBhA6AAA2QAACRgTBBQgYBWhVBVQhkBkiICLQiKCKhnA4QgUALgYAAQhhAAiYizg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EApRApgQioAGnlgiQnngiDHiKQDHiKiQhaQiQhZjzj3Qj0j3AmkbQAjkcDJikQBYhHFLC8QhXlWCshPQEtiMDCAiQFFA3hECaQgKAXg+BcQgrA7ATAUQAHAHEqhsQE6hyA+AAQClAAB1B1QB1B2AACkQAAClh1B2QgVAWg5BDQgsAzgIAEQiwBLgIA/QgHAyBhA6QB9BBA6AiQBmA9AAA4QAACYgUBDQgaBbhZBZQhoBpiPCRQiQCRhsA6QgWALgZAAQhlAAifi7g");
	var mask_2_graphics_16 = new cjs.Graphics().p("EAo0Ap1QivAGn7gjQn9gkDQiQQDQiQiWheQiWhdj/kCQj/kCAokoQAlkpDSirQBbhKFaDFQhalmCzhTQE6iSDLAkQFUA5hHChQgLAYhBBgQgsA+ATAVQAIAHE3hwQFIh4BBAAQCsAAB6B7QB7B6AACsQAACth7B6QgWAYg7BFQguA2gIAEQi4BOgJBDQgHA0BmA8QCCBEA9AkQBqA/AAA7QAACegVBHQgaBfhdBdQhuBtiVCYQiXCXhwA9QgXAMgaAAQhqAAimjEg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EAoYAqKQi3AHoRglQoSglDZiXQDYiWichiQidhhkJkNQkKkNAqk0QAmk2DbiyQBfhNFpDNQhel1C6hXQFIiYDTAlQFjA8hKCoQgLAZhEBkQguBAAUAWQAIAIFFh1QFWh9BDAAQCzAACACAQCACAAACyQAAC0iACAQgXAZg+BIQgwA4gJAEQi/BSgJBFQgIA2BrA/QCHBHA/AlQBvBDAAA9QAAClgVBKQgcBihhBiQhyByicCeQidCdh1A/QgYANgbAAQhuAAitjMg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EAn7AqfQi+AHomgnQoogmDiicQDhidijhmQijhlkUkYQkUkYArlAQAolCDki6QBjhRF3DWQhimEDChaQFWifDbAnQFxA+hNCvQgLAahHBoQgwBDAVAXQAIAIFSh6QFkiCBGAAQC6AACFCFQCFCFAAC6QAAC7iFCGQgYAZhABMQgxA5gKAFQjHBVgJBIQgIA4BuBCQCNBKBCAmQBzBFAABAQAACsgWBNQgdBmhlBlQh3B3ihClQikCjh6BCQgYANgdAAQhzAAi0jUg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EAnfAq0QjGAHo7goQo9goDqijQDqiiiphqQiphpkfkjQkfkiAtlNQAplPDtjBQBnhTGGDdQhmmTDJhdQFjilDkAoQF/BBhQC2QgMAahJBsQgyBGAWAYQAIAIFgh/QFxiGBJAAQDCAACKCKQCKCKAADBQAADDiKCKQgZAbhDBOQgzA8gKAFQjPBYgKBLQgIA6BzBFQCSBMBEAoQB4BIAABCQAACygXBQQgeBrhpBpQh7B7ioCrQiqCqh/BEQgZAOgeAAQh3AAi7jcg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EAnDArJQjNAHpQgqQpSgpDyipQDzioivhuQiwhtkqkuQkpktAulZQArlbD2jIQBrhXGUDmQhqmiDRhhQFwiqDsApQGOBDhTC8QgMAchMBwQg0BJAWAYQAJAJFsiEQF/iLBMAAQDJAACPCPQCPCPAADIQAADKiPCQQgaAbhFBRQg1A/gLAFQjWBbgKBOQgJA8B3BHQCYBQBHApQB8BKAABFQAAC5gYBTQgfBuhtBtQiACAiuCyQiwCwiDBHQgbAOgeAAQh8AAjCjkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EAmnArdQjUAHpmgrQpngrD8iuQD7iui2hyQi1hxk0k4Qk1k4AwlmQAtlnD+jPQBvhaGiDuQhtmxDYhkQF9ixD1ArQGbBGhWDDQgMAchPB1Qg1BLAXAZQAJAJF5iIQGNiRBOAAQDQAACUCUQCVCVAADPQAADRiVCVQgbAchHBUQg4BBgKAFQjeBfgLBQQgJA/B8BJQCdBSBJArQCBBNAABIQAAC/gZBWQggByhxBxQiECEi1C4Qi2C2iIBKQgbAOggAAQiAAAjJjsg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAmMArxQjcAIp6gtQp8gsEDi0QEEi0i7h2Qi8h1k/lDQk/lCAylyQAulzEHjXQByhcGxD2QhxnADghnQGKi2D9AsQGpBHhZDKQgNAdhRB4Qg3BOAYAaQAJAJGGiMQGaiWBRAAQDXAACZCZQCaCaAADWQAADYiaCaQgbAdhKBXQg6BDgLAFQjlBigLBUQgJBAB/BMQCjBVBMAsQCFBQAABKQAADGgaBYQghB3h1B0QiJCJi6C+Qi9C9iMBMQgdAPghAAQiEAAjPj1g");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAlwAsGQjjAHqPguQqQgtEMi7QEMi6jCh5QjCh5lJlNQlJlNA0l+QAvmAEPjdQB3hgG+D+Qh0nODnhqQGWi8EGAtQG3BLhcDPQgNAehUB8Qg5BRAZAaQAJAKGTiRQGoibBUAAQDdAACeCfQCfCeAADeQAADfifCeQgcAfhNBaQg7BEgLAGQjtBlgLBWQgKBDCEBOQCoBYBOAuQCJBSAABMQAADMgaBcQgjB6h4B4QiNCOjBDEQjDDDiRBOQgdAQgiAAQiJAAjWj8g");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAlVAsaQjqAHqkgvQqlgvEVjAQEUjAjIh9QjIh9lTlYQlUlXA2mKQAxmMEXjkQB6hiHNEGQh4ndDuhtQGkjDENAvQHFBNheDWQgOAfhXCAQg7BTAaAbQAKAKGfiWQG1ifBXAAQDkAACjCjQCkCkAADkQAADnikCjQgdAfhPBdQg9BHgMAGQj0BogMBZQgKBFCIBQQCuBbBQAvQCOBVAABPQAADSgcBfQgjB+h8B8QiSCRjHDLQjIDJiWBRQgeAQgjAAQiNAAjdkEg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAk6AstQjyAJq3gxQq6gxEdjGQEdjFjOiBQjOiBleliQleliA3mVQAzmYEgjrQB+hmHaEOQh7nrD1hwQGwjJEWAwQHSBQhhDcQgOAghZCEQg9BVAaAdQAKAKGsibQHCikBaAAQDrAACoCpQCpCoAADrQAADtipCpQgeAghRBgQg/BJgMAGQj8BrgMBcQgKBGCMBUQCyBdBUAxQCSBXAABRQAADZgdBhQgkCCiACAQiWCWjNDRQjPDPiaBTQgfARgkAAQiSAAjjkNg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAkfAtBQj5AJrMgyQrOgzEmjLQEljLjUiFQjUiFlolsQlolsA4miQA1mjEojyQCBhpHpEWQh/n4D8h1QG9jPEeAyQHgBShkDiQgPAihcCHQg+BYAbAdQAKALG5ifQHPioBcAAQDyAACtCsQCtCtAADyQAAD1itCtQgfAhhUBiQhABMgNAGQkDBvgMBdQgLBKCQBVQC4BgBWAyQCWBaAABTQAADggdBkQgmCGiDCDQibCbjTDXQjVDVieBVQggARglAAQiWAAjqkUg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAkEAtVQj/AIrggzQrjg0EujRQEujRjaiIQjbiJlyl2Qlyl3A6mtQA2mvExj5QCFhrH2EdQiDoGEEh5QHJjUEmAzQHtBUhnDqQgPAiheCLQhABaAbAeQALALHFijQHcitBfAAQD5AACyCxQCyCyAAD5QAAD7iyCyQggAjhWBlQhDBNgMAGQkLBygMBhQgLBLCUBYQC9BiBYA0QCaBcAABWQAADmgeBnQgmCJiICHQieCfjZDdQjbDbijBYQghASgmAAQiaAAjxkcg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAjqAtoQkHAJr0g1Qr2g1E1jXQE2jWjgiMQjgiNl8mAQl7mBA8m5QA2m7E5kAQCJhuIDElQiGoUELh7QHVjbEuA1QH7BWhqDwQgPAkhhCOQhCBdAcAeQALALHSinQHpiyBhAAQEAAAC3C2QC3C3AAEAQAAECi3C3QghAjhZBoQhEBPgNAHQkRB1gOBjQgLBNCYBaQDCBmBbA1QCeBeAABZQAADsgeBpQgoCNiLCLQijCjjfDjQjhDhinBbQgiASgnAAQieAAj3kkg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EAjPAt8QkNAJsIg3QsKg2E+jcQE+jdjmiQQjmiPmGmLQmFmLA9nEQA4nHFBkGQCMhyIREtQiKoiESh/QHijgE2A2QIIBZhsD2QgQAkhkCTQhEBfAeAfQALAMHdirQH3i4BjAAQEHAAC7C8QC8C7AAEGQAAEJi8C8QgiAkhaBqQhGBSgOAHQkYB3gOBmQgLBPCcBdQDHBoBdA3QCjBhAABaQAADyggBtQgpCRiOCOQioCojkDpQjnDmisBdQgjATgoAAQiiAAj+krg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EAi1AuPQkUAJscg3Qseg4FGjiQFGjijriUQjsiTmQmVQmPmVA+nQQA6nSFJkNQCQhzIfEzQiOowEZiCQHujlE+A3QIVBbhvD9QgQAlhmCWQhGBhAeAgQAMAMHpivQIDi8BmAAQENAADBDAQDADAAAENQAAEPjADBQgjAlhdBtQhIBUgNAGQkgB7gOBpQgMBRCgBfQDNBrBfA4QCnBjAABdQAAD4ghBwQgqCUiSCSQirCsjrDvQjsDsixBgQgjATgpAAQinAAkEkzg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EAibAuiQkbAKsvg6Qsyg5FOjnQFOjojxiXQjyiXmZmfQmZmeBAncQA7neFRkTQCTh2IsE7QiRo+EgiFQH6jsFGA5QIjBdhzEDQgQAmhpCbQhHBjAfAhQAMAMH1i0QIQjABoAAQEUAADFDFQDGDEAAEUQAAEWjGDFQgjAmhfBwQhKBVgOAIQknB+gOBrQgMBTCkBhQDRBuBiA5QCrBmAABfQAAD+giByQgqCYiWCWQiwCwjwD1QjzDyi0BiQglATgqAAQiqAAkLk6g");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAiBAu1QkhAKtDg7QtFg6FWjtQFWjuj3iaQj4ibmimoQmkmpBCnnQA9npFYkZQCXh6I5FDQiUpMEmiIQIHjxFNA6QIwBfh1EJQgRAnhrCeQhJBnAgAiQAMAMIBi5QIdjFBrAAQEaAADKDKQDKDJAAEaQAAEdjKDKQglAnhhByQhLBYgPAHQkuCBgOBtQgNBWCoBjQDXBwBjA7QCwBoAABiQAAEEgjB1QgrCciaCZQi0C0j2D7Qj4D4i5BkQglAUgrAAQivAAkRlCg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAhoAvIQkpAKtWg8QtYg8FejzQFejyj9ieQj9ifmsmyQmumyBDnyQA/n1FhkgQCZh8JHFKQiYpaEtiLQITj2FVA7QI9Bhh4EQQgRAohuChQhLBpAhAjQAMAMIOi9QIojKBuAAQEhAADODPQDPDPAAEgQAAEjjPDPQglAnhkB1QhNBagPAHQk1CEgOBwQgNBYCsBmQDbByBmA8QCzBrAABkQAAEKgjB4QgsCfidCdQi4C4j8EAQj+D+i9BmQgmAVgtAAQiyAAkXlJg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EAhOAvaQkvALtpg+Qtsg9Fmj4QFmj4kDiiQkCihm2m9Qm3m8BFn9QA/oAFqkmQCch/JUFRQibpnE0iOQIej8FdA9QJJBjh6EWQgSAohwCmQhMBrAhAjQANANIZjBQI1jOBwAAQEnAADUDTQDTDTAAEmQAAEqjTDUQgnAohlB4QhPBcgQAHQk7CHgQBzQgMBZCvBoQDgB1BpA9QC3BuAABmQAAEQgkB6QgtCjihCgQi8C9kBEGQkEEEjBBoQgnAVguAAQi2AAkelRg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EAg1AvtQk2AKt8g+Qt/g/Fuj9QFuj+kJilQkIilm/nGQnBnGBGoIQBBoLFyktQChiCJgFZQifp0E7iSQIqkBFkA+QJWBmh9EbQgSAqhyCpQhOBtAiAkQANANIkjFQJCjTByAAQEuAADYDYQDYDYAAEtQAAEwjYDYQgnAphoB7QhRBdgPAIQlDCKgQB1QgNBbC0BrQDlB3BqA/QC8BwAABoQAAEWglB9QgvCmijCkQjBDBkHEMQkJEJjGBqQgnAWgvAAQi6AAkklYg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EAgcAv/Qk8ALuPhAQuRhAF0kDQF2kCkOipQkOipnJnPQnKnQBIoTQBCoWF5kzQCliFJsFhQiiqCFCiVQI2kHFrBAQJjBnh/EiQgTAqh1CtQhPBwAiAlQAOANIwjKQJOjXB0AAQE1AADcDdQDcDcAAEzQAAE3jcDcQgoArhqB9QhSBfgQAIQlKCNgQB3QgNBdC3BtQDqB7BtA/QC/ByAABrQAAEcglB/QgwCqinCoQjFDEkMESQkPEPjKBtQgoAVgwAAQi+AAkqlfg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EAgDAwSQlCAKuihBQukhBF8kIQF9kIkTisQkUitnSnZQnTnYBJofQBEohGAk5QCoiHJ6FoQimqQFIiYQJCkMFzBBQJwBqiDEnQgSArh4CxQhRByAjAlQAOAOI8jOQJZjcB4AAQE6AADhDhQDhDhAAE6QAAE9jhDhQgpArhsCAQhUBhgQAIQlQCQgRB6QgNBfC7BvQDuB9BwBBQDDB0AABtQAAEigmCCQgxCuirCqQjIDJkSEXQkVEVjOBvQgpAWgxAAQjCAAkwlmg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAfqAwkQlJALu0hDQu2hCGDkOQGFkNkZiwQkZivnbnjQndniBKopQBGosGIlAQCsiKKGFwQipqdFOibQJNkSF7BDQJ8BriFEuQgTAsh6C0QhTB0AkAnQAOANJIjSQJljgB6AAQFBAADlDmQDmDlAAFAQAAFDjmDmQgpAshvCCQhWBkgQAIQlXCTgRB8QgNBhC+BxQD0B/BxBDQDHB2AABvQAAEognCFQgxCxivCuQjMDMkXEdQkaEajTByQgqAWgxAAQjHAAk2ltg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EAfSAw2QlPALvHhEQvJhDGLkTQGNkTkfizQkdiznmnsQnmnsBMozQBGo2GQlHQCviNKTF3QisqqFVieQJYkXGCBEQKJBuiIEzQgTAth8C3QhVB3AlAnQAOAOJSjWQJyjkB8AAQFHAADqDqQDqDpAAFGQAAFKjqDqQgqAthxCFQhXBlgRAJQleCVgRB/QgOBjDDBzQD4CCBzBDQDLB6AABwQAAEugnCHQgzC1ixCxQjRDRkdEiQkfEgjWBzQgsAXgyAAQjKAAk8l0g");
	var mask_2_graphics_40 = new cjs.Graphics().p("EAe6AxHQlWAMvZhFQvbhFGSkYQGUkYkki2Qkji3nvn1Qnvn1BOo+QBHpBGYlNQCyiPKfF+Qivq3FcihQJjkdGKBFQKUBwiJE5QgVAuh+C7QhWB5AlAoQAPAOJejaQJ9jpB/AAQFNAADuDvQDuDuAAFNQAAFPjuDvQgrAuhzCHQhZBngRAJQlkCYgSCBQgOBlDGB1QD9CEB2BFQDPB8AABzQAAEzgpCKQgzC4i1C1QjVDUkiEoQklEljaB2QgsAXgzAAQjOAAlCl8g");
	var mask_2_graphics_41 = new cjs.Graphics().p("EAeiAxZQldAMvrhGQvthHGakdQGbkdkpi6Qkoi6n4n+Qn5n+BPpJQBJpLGglTQC1iTKrGFQiyrDFiikQJvkiGRBGQKgBziME+QgVAviAC+QhYB7AmApQAPAPJpjfQKJjtCBAAQFTAADzDzQDzDzAAFTQAAFVjzDzQgsAvh1CKQhbBpgRAJQlrCbgRCDQgPBnDKB4QEBCGB4BGQDTB+AAB1QAAE5gpCMQg1C8i4C4QjZDYknEuQkqEqjfB4QgtAYg0AAQjRAAlImDg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EAeKAxrQljAMv9hIQv/hHGikjQGikikvi9Qkti9oCoIQoBoHBQpUQBLpVGmlZQC5iVK4GMQi2rRFoinQJ7kmGYBHQKsB0iPFFQgUAviDDCQhaB9AnAqQAPAPJ0jjQKVjxCDAAQFZAAD4D3QD3D3AAFaQAAFbj3D3QgtAwh3CMQhcBrgSAJQlyCegRCGQgPBoDNB6QEGCJB6BHQDXCAAAB4QAAE+gqCPQg2C/i7C7QjdDcksEzQkwEwjiB6QguAYg1AAQjVAAlOmJg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EAeDAyUQlpANwPhJQwRhJGpknQGpknkzjBQkzjBoLoQQoKoRBSpeQBLpgGvlfQC7iYLEGTQi3rdFtipQKFksGfBIQK5B3iRFKQgVAwiGDFQhbB/AoArQAPAPJ/jmQKhj2CFAAQFgAAD7D8QD7D7AAFgQAAFhj7D8QgtAwh6COQheBtgSAKQl3CggTCIQgPBrDRB8QELCLB8BJQDaCCAAB5QAAFEgqCSQg3DCi/C/QjgDgkyE4Qk1E1jmB8QguAZg2AAQjaAAlTmRg");
	var mask_2_graphics_103 = new cjs.Graphics().p("EAeDAyUQlpANwPhJQwRhJGpknQGpknkzjBQkzjBoLoQQoKoRBSpeQBLpgGvlfQC7iYLEGTQi3rdFtipQKFksGfBIQK5B3iRFKQgVAwiGDFQhbB/AoArQAPAPJ/jmQKhj2CFAAQFgAAD7D8QD7D7AAFgQAAFhj7D8QgtAwh6COQheBtgSAKQl3CggTCIQgPBrDRB8QELCLB8BJQDaCCAAB5QAAFEgqCSQg3DCi/C/QjgDgkyE4Qk1E1jmB8QguAZg2AAQjaAAlTmRg");
	var mask_2_graphics_112 = new cjs.Graphics().p("EAeDAyUQlpANwPhJQwRhJGpknQGpknkzjBQkzjBoLoQQoKoRBSpeQBLpgGvlfQC7iYLEGTQi3rdFtipQKFksGfBIQK5B3iRFKQgVAwiGDFQhbB/AoArQAPAPJ/jmQKhj2CFAAQFgAAD7D8QD7D7AAFgQAAFhj7D8QgtAwh6COQheBtgSAKQl3CggTCIQgPBrDRB8QELCLB8BJQDaCCAAB5QAAFEgqCSQg3DCi/C/QjgDgkyE4Qk1E1jmB8QguAZg2AAQjaAAlTmRg");
	var mask_2_graphics_167 = new cjs.Graphics().p("EAeDAyUQlpANwPhJQwRhJGpknQGpknkzjBQkzjBoLoQQoKoRBSpeQBLpgGvlfQC7iYLEGTQi3rdFtipQKFksGfBIQK5B3iRFKQgVAwiGDFQhbB/AoArQAPAPJ/jmQKhj2CFAAQFgAAD7D8QD7D7AAFgQAAFhj7D8QgtAwh6COQheBtgSAKQl3CggTCIQgPBrDRB8QELCLB8BJQDaCCAAB5QAAFEgqCSQg3DCi/C/QjgDgkyE4Qk1E1jmB8QguAZg2AAQjaAAlTmRg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:340.6321,y:241.004}).wait(1).to({graphics:mask_2_graphics_2,x:342.3561,y:244.223}).wait(1).to({graphics:mask_2_graphics_3,x:344.0698,y:247.4227}).wait(1).to({graphics:mask_2_graphics_4,x:345.7731,y:250.6033}).wait(1).to({graphics:mask_2_graphics_5,x:347.4662,y:253.7646}).wait(1).to({graphics:mask_2_graphics_6,x:349.149,y:256.9067}).wait(1).to({graphics:mask_2_graphics_7,x:350.8215,y:260.0296}).wait(1).to({graphics:mask_2_graphics_8,x:352.4837,y:263.1333}).wait(1).to({graphics:mask_2_graphics_9,x:354.1357,y:266.2178}).wait(1).to({graphics:mask_2_graphics_10,x:355.7773,y:269.283}).wait(1).to({graphics:mask_2_graphics_11,x:357.4086,y:272.329}).wait(1).to({graphics:mask_2_graphics_12,x:359.0297,y:275.3558}).wait(1).to({graphics:mask_2_graphics_13,x:360.6404,y:278.3634}).wait(1).to({graphics:mask_2_graphics_14,x:362.2409,y:281.3518}).wait(1).to({graphics:mask_2_graphics_15,x:363.831,y:284.321}).wait(1).to({graphics:mask_2_graphics_16,x:365.4109,y:287.2709}).wait(1).to({graphics:mask_2_graphics_17,x:366.9805,y:290.2016}).wait(1).to({graphics:mask_2_graphics_18,x:368.5398,y:293.1131}).wait(1).to({graphics:mask_2_graphics_19,x:370.0888,y:296.0054}).wait(1).to({graphics:mask_2_graphics_20,x:371.6275,y:298.8785}).wait(1).to({graphics:mask_2_graphics_21,x:373.1559,y:301.7323}).wait(1).to({graphics:mask_2_graphics_22,x:374.674,y:304.5669}).wait(1).to({graphics:mask_2_graphics_23,x:376.1819,y:307.3823}).wait(1).to({graphics:mask_2_graphics_24,x:377.6794,y:310.1785}).wait(1).to({graphics:mask_2_graphics_25,x:379.1666,y:312.9555}).wait(1).to({graphics:mask_2_graphics_26,x:380.6436,y:315.7133}).wait(1).to({graphics:mask_2_graphics_27,x:382.1102,y:318.4518}).wait(1).to({graphics:mask_2_graphics_28,x:383.5666,y:321.1711}).wait(1).to({graphics:mask_2_graphics_29,x:385.0127,y:323.8712}).wait(1).to({graphics:mask_2_graphics_30,x:386.4485,y:326.5521}).wait(1).to({graphics:mask_2_graphics_31,x:387.874,y:329.2138}).wait(1).to({graphics:mask_2_graphics_32,x:389.2891,y:331.8562}).wait(1).to({graphics:mask_2_graphics_33,x:390.6941,y:334.4795}).wait(1).to({graphics:mask_2_graphics_34,x:392.0887,y:337.0835}).wait(1).to({graphics:mask_2_graphics_35,x:393.473,y:339.6683}).wait(1).to({graphics:mask_2_graphics_36,x:394.847,y:342.2339}).wait(1).to({graphics:mask_2_graphics_37,x:396.2107,y:344.7802}).wait(1).to({graphics:mask_2_graphics_38,x:397.5642,y:347.3074}).wait(1).to({graphics:mask_2_graphics_39,x:398.9073,y:349.8153}).wait(1).to({graphics:mask_2_graphics_40,x:400.2402,y:352.304}).wait(1).to({graphics:mask_2_graphics_41,x:401.5628,y:354.7735}).wait(1).to({graphics:mask_2_graphics_42,x:402.875,y:357.2238}).wait(1).to({graphics:mask_2_graphics_43,x:405.8433,y:362.0785}).wait(60).to({graphics:mask_2_graphics_103,x:405.8433,y:362.0785}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_2_graphics_112,x:405.8433,y:362.0785}).wait(55).to({graphics:mask_2_graphics_167,x:405.8433,y:362.0785}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer_1
	this.instance_2 = new lib.germs();
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(102).to({_off:true},1).wait(8).to({_off:false},0).wait(55).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


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


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBUQgKgEgHgJQgHgHgEgLQgEgLAAgMQAAgMAEgLQAEgJAHgIQAHgHAKgFQAKgFAMAAQAHAAAGACIAKAEIAIAGIAFAFIABAAIAAhNIAcAAIAACsIgbAAIAAgQIAAAAQgGAKgKAFQgKAEgLAAQgNABgKgFgAgMAAQgGACgEAFQgFAFgCAGQgCAGAAAGQAAAHACAFQACAHAFAEQAEAFAGACQAGADAGABQAIgBAGgDQAGgCAEgFQAEgEADgHQACgFAAgHQAAgGgCgGQgDgGgEgFQgEgFgGgCQgGgCgIAAQgGAAgGACg");
	this.shape.setTransform(142.125,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA4QgIgDgFgDQgGgEgEgHQgCgGAAgJQAAgJACgGQADgGAGgEQAFgEAIgCIAOgEIAPgBIAPAAIAGAAIAAgEQAAgKgGgFQgIgGgKAAQgIAAgIAEQgHADgGAFIgOgOQAIgKANgEQAMgEANAAQALAAAIACQAIADAGAEQAEAFADAFQAEAFABAGIABAKIAAAJIAAA/IgZAAIAAgPIAAAAQgGAKgJADQgKAFgKAAQgHAAgHgCgAAFAGIgMACQgGACgFADQgEAEAAAGQAAADABADIAFAEIAGADIAHABQAOAAAGgGQAHgIAAgLIAAgGIgFAAg");
	this.shape_1.setTransform(128.7,33.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWA1QgLgEgJgHQgHgHgFgMQgFgKAAgNQAAgNAFgKQAFgLAHgHQAJgIALgEQAKgEAMAAQANAAALAEQALAEAIAIQAIAHAEALQAFAKAAANQAAANgFAKQgEAMgIAHQgIAHgLAEQgLAFgNAAQgMAAgKgFgAgMgdQgHACgDAFQgFAFgCAFQgCAGAAAGQAAAHACAFQACAGAFAFQADAFAHACQAFADAHAAQAHAAAHgDQAFgCAFgFQAEgFADgGQACgFAAgHQAAgGgCgGQgDgFgEgFQgFgFgFgCQgHgDgHAAQgHAAgFADg");
	this.shape_2.setTransform(115.8,33.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBXIAAitIAbAAIAACtg");
	this.shape_3.setTransform(105.825,30.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA1QgKgEgJgHQgHgHgFgMQgFgKAAgNQAAgNAFgKQAFgLAHgHQAJgIAKgEQAMgEALAAQAMAAAMAEQAKAEAJAIQAIAHAEALQAFAKAAANQAAANgFAKQgEAMgIAHQgJAHgKAEQgMAFgMAAQgLAAgMgFgAgNgdQgFACgFAFQgEAFgCAFQgDAGAAAGQAAAHADAFQACAGAEAFQAFAFAFACQAHADAGAAQAIAAAFgDQAHgCAEgFQAEgFACgGQACgFABgHQgBgGgCgGQgCgFgEgFQgEgFgHgCQgFgDgIAAQgGAAgHADg");
	this.shape_4.setTransform(89.05,33.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABGQgGgCgEgFQgEgFgBgIQgCgHAAgKIAAgxIgWAAIAAgYIAWAAIAAggIAbAAIAAAgIAeAAIAAAYIgeAAIAAAvQAAAIADAFQADAFAJAAIAIgBIAHgCIAAAXIgKADIgMABQgLAAgHgDg");
	this.shape_5.setTransform(77.475,32.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BTIAAiiIAbAAIAAAQIAAAAQAGgKAKgEQAKgFALAAQANAAAKAFQAKAEAHAIQAHAIAEAKQAEALAAAMQAAAMgEALQgEAJgHAIQgHAIgKAFQgKAEgMAAQgHAAgGgCIgKgEIgIgFIgFgGIgBAAIAABDgAgNg2QgGACgEAFQgFAFgCAGQgCAGAAAGQAAAHACAFQACAGAFAFQAEAEAGACQAGADAHAAQAHAAAGgDQAGgCAEgEQAFgFACgGQACgFAAgHQAAgGgCgGQgCgGgFgFQgEgFgGgCQgGgDgHAAQgHAAgGADg");
	this.shape_6.setTransform(59.425,36.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA4QgIgDgFgDQgGgEgEgHQgCgGAAgJQAAgJACgGQADgGAGgEQAFgEAIgCIAOgEIAPgBIAPAAIAGAAIAAgEQAAgKgGgFQgIgGgKAAQgIAAgIAEQgHADgGAFIgOgOQAIgKANgEQAMgEANAAQALAAAIACQAIADAGAEQAEAFADAFQAEAFABAGIABAKIAAAJIAAA/IgZAAIAAgPIAAAAQgGAKgJADQgKAFgKAAQgHAAgHgCgAAFAGIgMACQgGACgFADQgEAEAAAGQAAADABADIAFAEIAGADIAHABQAOAAAGgGQAHgIAAgLIAAgGIgFAAg");
	this.shape_7.setTransform(45.45,33.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBRIAAiHIgyAAIAAgaICBAAIAAAaIgzAAIAACHg");
	this.shape_8.setTransform(32.95,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DA3F55").s().p("AuXE7IAAp1IcvAAIAAJ1g");
	this.shape_9.setTransform(92,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,0,184,63), null);


(lib.copy_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgBACIgBgCIABgCIABAAIACAAIABACIgBACIgCABIgBgBg");
	this.shape.setTransform(192.7,7.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_1.setTransform(191.4,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgDALIgEgCIgDgEIgBgFIABgEIADgEIAEgCIAEgBIAEABIADACIADAEIABAEIAAABIgSAAIABADIABADIACABIACABIAEgBIADgDIAEADQgCACgDABIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgDAAQgCAAgCACQgCACAAADIANAAIAAAAg");
	this.shape_2.setTransform(189.45,6.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgEASQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIAAAEIgEAAIAAglIAEAAIAAASIADgDIAEgBIAFABIAEACIADADIAAAFIAAAFIgDAEIgEACIgEABQgCAAgDgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIADgBIADgCIACgDIAAgDIAAgDIgCgDIgDgBIgDgBIgCABg");
	this.shape_3.setTransform(186.575,6.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgEAMIgDgBIgCgDIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCIAEgBIAEAAIACAAIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgDACIgCgDIAEgCIAEgBQAFAAACACQADADAAAFIAAAJIAAACIAAACIgEAAIAAgCIAAgCIgDADIgEABIgDAAgAgDACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIACgBIACgBIABgCIABgDIAAgCIgEAAQgDAAgCACg");
	this.shape_4.setTransform(183.725,6.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_5.setTransform(181.85,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgDALIgFgCIgCgEIgBgFIABgEIADgEIAEgCIADgBIAFABIADACIADAEIABAEIAAABIgSAAIABADIABADIACABIACABIAFgBIACgDIAEADIgFADIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgDAAQgCAAgCACQgCACAAADIANAAIAAAAg");
	this.shape_6.setTransform(178.55,6.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAGATIAAgOIgBgFQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAIgCABIgCABIgCADIAAADIAAAMIgEAAIAAglIAEAAIAAASIABgCIACgBIACAAIABgBIAEABIADABIACACIAAAFIAAAOg");
	this.shape_7.setTransform(175.775,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AAEAPIgEAAIgBgCIgBgCIAAgEIAAgLIgFAAIAAgEIAFAAIAAgGIADAAIAAAGIAHAAIAAAEIgHAAIAAAKIAAACIAAACIACABIACABIABAAIACgBIAAAEIgCAAg");
	this.shape_8.setTransform(173.5,6.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAGAMIgGgRIAAAAIgFARIgEAAIgIgXIAFAAIAFARIAGgRIADAAIAGARIAGgRIAEAAIgIAXg");
	this.shape_9.setTransform(169.45,6.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgEALQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgFIABgEQABAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBIAEgCIAEgBIAFABIAEACIADAEIAAAEIAAAFIgDAEIgEACIgFABIgEgBgAgDgHIgCACIgCADIAAACIAAADIACADIACACIADABIADgBIADgCIABgDIABgDIgBgCIgBgDIgDgCIgDgBIgDABg");
	this.shape_10.setTransform(166.15,6.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_11.setTransform(164.05,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_12.setTransform(162.85,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgEALQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgFIABgEQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBIAEgCIAEgBIAFABIAEACIACAEIACAEIgCAFIgCAEIgEACIgFABIgEgBgAgCgHIgDACIgCADIgBACIABADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgCIgCgDIgCgCIgEgBIgCABg");
	this.shape_13.setTransform(160.8,6.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgCATIAAgTIgFAAIAAgDIAFAAIAAgFIAAgEIACgDIABgCIAEgBIACAAIABAAIAAAEIgDgBIgCABIgCABIAAADIAAACIAAAFIAGAAIAAADIgGAAIAAATg");
	this.shape_14.setTransform(158.625,6.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgEASIgEgCIgDgEIAAgFIAAgFIADgDIAEgCIAEgBIAFABIADADIAAgSIAEAAIAAAlIgEAAIAAgEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDABgCAAIgEgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgDIgCgDIgCgBIgEgBIgCABg");
	this.shape_15.setTransform(154.825,6.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAGAMIAAgNIgBgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABIgCACIgCADIAAACIAAAMIgEAAIAAgRIAAgDIAAgCIADAAIABABIAAACIABgBIACgBIACgBIABgBIAEABIADABIACADIAAAFIAAANg");
	this.shape_16.setTransform(151.975,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgEAMIgDgBIgCgDIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCIAEgBIAEAAIACAAIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgDACIgCgDIAEgCIAEgBQAFAAACACQADADAAAFIAAAJIAAACIAAACIgEAAIAAgCIAAgCIgDADIgEABIgDAAgAgDACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIACgBIACgBIABgCIABgDIAAgCIgEAAQgDAAgCACg");
	this.shape_17.setTransform(149.325,6.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgEASIgEgCIgDgEIAAgFIAAgFIADgDIAEgCIAEgBIAFABIADADIAAgSIAEAAIAAAlIgEAAIAAgEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDABgCAAIgEgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgDIgCgDIgCgBIgEgBIgCABg");
	this.shape_18.setTransform(145.125,6.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgEAMIgDgBIgCgDIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCIAEgBIAEAAIACAAIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgDACIgCgDIAEgCIAEgBQAFAAACACQADADAAAFIAAAJIAAACIAAACIgEAAIAAgCIAAgCIgDADIgEABIgDAAgAgDACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIACgBIACgBIABgCIABgDIAAgCIgEAAQgDAAgCACg");
	this.shape_19.setTransform(142.375,6.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgDALIgFgCIgCgEIgBgFIABgEIADgEIAEgCIADgBIAFABIADACIACAEIACAEIAAABIgTAAIACADIABADIACABIACABIAFgBIACgDIADADQgBACgDABIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAQgCAAgCACQgCACgBADIAOAAIAAAAg");
	this.shape_20.setTransform(139.75,6.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgGAMIAAgRIAAgDIAAgCIAEAAIAAABIAAACIABgBIABgBIACgBIADgBIABAAIABAAIgBAEIgCAAQgDAAgBACQgCADAAACIAAAMg");
	this.shape_21.setTransform(137.625,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgEALQgCAAgCgDIADgCIACACIADABIACAAIABgBIACgBIAAgCIAAgBIgBgBIgCgBIgCgBIgCAAIgDgBIgBgBIgBgDIABgDIACgCIACgCIADAAIAEABIAEADIgEACIgCgCIgDgBIAAABIgCAAIgBABIAAACIAAABIACABIABAAIACABIADABIACAAIACACIAAADIAAADIgDADIgDABIgDAAIgEgBg");
	this.shape_22.setTransform(134.175,6.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgIASIgCgBIAAgDIACAAIABAAIADgBIABgDIACgEIgKgXIAFAAIAHASIAGgSIAFAAIgLAcIgBADIgCACIgCABIgCABg");
	this.shape_23.setTransform(131.95,7.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgEAMIgDgBIgCgDIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCIAEgBIAEAAIACAAIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIgDACIgCgDIAEgCIAEgBQAFAAACACQADADAAAFIAAAJIAAACIAAACIgEAAIAAgCIAAgCIgDADIgEABIgDAAgAgDACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIACgBIACgBIABgCIABgDIAAgCIgEAAQgDAAgCACg");
	this.shape_24.setTransform(129.475,6.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAGAMIgGgRIAAAAIgFARIgEAAIgIgXIAFAAIAFARIAGgRIADAAIAGARIAGgRIAEAAIgHAXg");
	this.shape_25.setTransform(126.35,6.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_26.setTransform(123.9,6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AAMASIgDgJIgRAAIgEAJIgEAAIAPgjIADAAIAPAjgAAHAFIgHgQIAAAAIgGAQIANAAg");
	this.shape_27.setTransform(121.575,6.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgBACIgBgCIABgCIABAAIACAAIABACIgBACIgCABIgBgBg");
	this.shape_28.setTransform(117.8,7.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgEASIgEgCIgDgEIAAgFIAAgFIADgDIAEgCIAEgBIAFABIADADIAAgSIAEAAIAAAlIgEAAIAAgEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDABgCAAIgEgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgDIgCgDIgCgBIgEgBIgCABg");
	this.shape_29.setTransform(115.525,6.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgEALIgDgCIgDgEIgBgFIABgEIADgEIADgCIAFgBIAEABIAEACIACAEIAAAEIAAABIgRAAIAAADIACADIACABIACABIAEgBIAEgDIADADQgCACgDABIgGABIgEgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgDAAQgCAAgCACQgCACAAADIANAAIAAAAg");
	this.shape_30.setTransform(112.7,6.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAEAPIgEAAIgBgCIAAgCIgBgEIAAgLIgFAAIAAgEIAFAAIAAgGIADAAIAAAGIAHAAIAAAEIgHAAIAAAKIAAACIAAACIABABIADABIACAAIABgBIAAAEIgCAAg");
	this.shape_31.setTransform(110.4,6.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgDALIgDgCIgDgEIgBgFIABgEIADgEIADgCIAFgBIAEABIAFACIgEADIgCgCIgDgBIgDABIgDACIgBADIAAACIAAADIABADIADACIADABQADAAACgDIAEADIgFACIgEABIgFgBg");
	this.shape_32.setTransform(108.45,6.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgDALIgFgCIgCgEIAAgFIAAgEIADgEIAEgCIADgBIAFABIAEACIABAEIABAEIAAABIgSAAIABADIACADIADABIABABIAFgBIADgDIACADQgCACgCABIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAQgCAAgCACQgCACgBADIAOAAIAAAAg");
	this.shape_33.setTransform(105.8,6.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgGAMIAAgRIAAgDIAAgCIAEAAIAAABIAAACIABgBIABgBIACgBIADgBIABAAIABAAIgBAEIgCAAQgDAAgBACQgCADAAACIAAAMg");
	this.shape_34.setTransform(103.675,6.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgBASIAAgXIADAAIAAAXgAgBgMIgBgCIABgCIABgBIACABIABACIgBACIgCABIgBgBg");
	this.shape_35.setTransform(102.05,6.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgEASIgEgCIgDgEIAAgFIAAgFIADgDIAEgCIAEgBIAFABIADADIAAgSIAEAAIAAAlIgEAAIAAgEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDABgCAAIgEgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgDIgCgDIgCgBIgEgBIgCABg");
	this.shape_36.setTransform(99.875,6.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgEALQgCAAgCgDIADgCIACACIADABIACAAIABgBIACgBIAAgCIAAgBIgBgBIgCgBIgCgBIgCAAIgDgBIgBgBIgBgDIABgDIACgCIACgCIADAAIAEABIAEADIgEACIgCgCIgDgBIAAABIgCAAIgBABIAAACIAAABIACABIABAAIACABIADABIACAAIACACIAAADIAAADIgDADIgDABIgDAAIgEgBg");
	this.shape_37.setTransform(95.975,6.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AgEAMIgDgBIgCgDIAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgCIAEgBIAEAAIACAAIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIgDACIgCgDIAEgCIAEgBQAFAAACACQADADAAAFIAAAJIAAACIAAACIgEAAIAAgCIAAgCIgDADIgEABIgDAAgAgDACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIACgBIACgBIABgCIABgDIAAgCIgEAAQgDAAgCACg");
	this.shape_38.setTransform(93.675,6.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgEASIgEgCIgDgEIAAgFIAAgFIADgDIAEgCIAEgBIAFABIADADIAAgSIAEAAIAAAlIgEAAIAAgEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDABgCAAIgEgBgAgCAAIgDABIgCADIAAADIAAADIACADIADACIACABIAEgBIACgCIACgDIAAgDIAAgDIgCgDIgCgBIgEgBIgCABg");
	this.shape_39.setTransform(89.475,6.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B3785").s().p("AgDALIgFgCIgCgEIgBgFIABgEIADgEIAEgCIADgBIAFABIADACIACAEIACAEIAAABIgTAAIACADIABADIADABIABABIAFgBIACgDIADADQgBACgDABIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAQgCAAgCACQgCACgBADIAOAAIAAAAg");
	this.shape_40.setTransform(86.65,6.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B3785").s().p("AgEALQgCAAgCgDIADgCIACACIADABIACAAIABgBIACgBIAAgCIAAgBIgBgBIgCgBIgCgBIgCAAIgDgBIgBgBIgBgDIABgDIACgCIACgCIADAAIAEABIAEADIgEACIgCgCIgDgBIAAABIgCAAIgBABIAAACIAAABIACABIABAAIACABIADABIACAAIACACIAAADIAAADIgDADIgDABIgDAAIgEgBg");
	this.shape_41.setTransform(84.175,6.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B3785").s().p("AgEAMIgDgCIgCgEIgBgDIAAgOIAFAAIAAANQAAADABACQAAAAABABQAAAAAAAAQABAAABAAQAAABABAAIACgBIADgCIABgDIAAgDIAAgLIAEAAIAAARIAAADIABADIgFAAIAAgCIAAgDIgBADIgBABIgCABIgDAAIgDAAg");
	this.shape_42.setTransform(81.8,6.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B3785").s().p("AAGAMIAAgNIgBgFQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAIgCABIgCACIgCADIAAACIAAAMIgEAAIAAgRIAAgDIAAgCIADAAIABABIAAACIABgBIACgBIACgBIABgBIAEABIADABIACADIAAAFIAAANg");
	this.shape_43.setTransform(77.675,6.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B3785").s().p("AgDALIgFgCIgCgEIgBgFIABgEIADgEIAEgCIADgBIAFABIADACIACAEIACAEIAAABIgTAAIACADIABADIACABIACABIAFgBIACgDIADADQgBACgDABIgGABIgDgBgAAHgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCgEAAQgCAAgCACQgCACgBADIAOAAIAAAAg");
	this.shape_44.setTransform(74.95,6.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B3785").s().p("AAGATIAAgOIgBgFQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAIgCABIgCABIgCADIAAADIAAAMIgEAAIAAglIAEAAIAAASIABgCIACgBIACAAIABgBIAEABIADABIACACIAAAFIAAAOg");
	this.shape_45.setTransform(72.175,6.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B3785").s().p("AAJASIgJgdIgIAdIgFAAIgKgjIAFAAIAIAdIAJgdIADAAIAJAdIAAAAIAIgdIAFAAIgLAjg");
	this.shape_46.setTransform(68.425,6.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_04, new cjs.Rectangle(64,1,131.6,10.9), null);


(lib.copy_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgGARIgGgEIgEgGIgCgHQAAgDACgDIAEgGQADgDADgBIAGgBQAEAAADABQAEABACADIAEAGQACADAAADIgCAHIgEAGIgGAEIgHABIgGgBg");
	this.shape.setTransform(148.5,62.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgXAwQgKgDgHgHIARgVQAEAGAGACQAFADAGAAQAFAAAEgCQAEgBABgEQAAgEgFgCIgIgDIgMgDQgGgBgGgDQgGgDgDgFQgFgFAAgKQABgIADgGQADgGAHgEQAFgEAHgCQAIgCAHAAQAJAAAKACQAJAEAIAGIgTATQgGgJgLAAQgDAAgEACQgDADAAADQAAAEADACIAJADIAMADQAGACAGADQAGADAEAEQADAGAAAJQABAKgFAFQgEAHgGADQgGAEgJACIgPABQgKAAgKgDg");
	this.shape_1.setTransform(140.95,59.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("Ag0BIIAAiNIAcAAIAAANIAAAAIAFgGIAHgEIAIgEQAEgBAFgBQALABAJADQAIAEAHAHQAGAGADAKQAEAIAAAMQAAAKgDAJQgDAIgGAIQgGAHgIAEQgIAFgLAAQgIgBgIgDQgIgCgFgIIgBAAIAAA4gAgSgmQgGAGAAAMQAAALAGAGQAGAGAMAAQAKAAAGgGQAHgGAAgLQAAgMgHgGQgGgHgKAAQgMAAgGAHg");
	this.shape_2.setTransform(130.325,61.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgOBJIAAhhIAdAAIAABhgAgLgqQgGgFAAgHQAAgHAGgGQAFgEAGAAQAHAAAFAEQAGAGgBAHQABAHgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(121.1,57.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgPBHIAAhxIgoAAIAAgcIBvAAIAAAcIgoAAIAABxg");
	this.shape_4.setTransform(112.8,57.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgcAuQgHgDgEgHQgEgGgBgIQgCgJAAgJIAAg1IAeAAIAAAwIABAHQAAAFABAEQACADADADQADACAGAAQAFAAADgCQAEgCACgDQACgEAAgEIABgJIAAgwIAeAAIAABgIgdAAIAAgNIAAAAIgEAGIgGAFIgIADQgEACgGAAQgLAAgHgEg");
	this.shape_5.setTransform(95.425,59.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgOBMIAAiWIAdAAIAACWg");
	this.shape_6.setTransform(87.1,57.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgvBHIAAiNIBeAAIAAAdIg+AAIAAAdIA6AAIAAAcIg6AAIAAA3g");
	this.shape_7.setTransform(78.95,57.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgmBIQgJgDgIgFQgGgFgFgIQgEgIAAgLQAAgHACgGQACgGAEgFQAFgFAFgDIAMgGIgGgHIgGgHIgDgIIAAgJQAAgKADgHQADgHAHgEQAGgEAIgCQAIgCAJAAQAHAAAHACQAIACAFAEQAGAEADAHQADAGAAAJQAAAHgCAFQgCAGgDAEIgIAJIgLAGIASATIAOgSIAkAAIgeAmIAfAiIgmAAIgNgOQgIAJgKAEQgKAEgMAAQgKAAgIgCgAgbAOIgGAEIgEAGIAAAHQgBAEACADIAEAFIAGAEIAHABQAIAAAEgDIAJgHIgXgcgAgVguQgFAEAAAGIABAFIAEAFIADAEIAEAEIAFgEIAGgEIADgFIABgGQAAgGgDgDQgEgDgGAAQgFAAgEADg");
	this.shape_8.setTransform(59.55,57.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgYBJQgIgEgHgGQgGgHgDgJQgEgKAAgLQAAgKADgJQADgIAGgIQAGgHAIgEQAIgEALAAQAIAAAIADQAIACAFAHIABAAIAAhAIAeAAIAACWIgcAAIAAgNIAAAAIgFAGIgHAFIgIADQgFACgEAAQgLAAgJgEgAgPAIQgHAHAAALQAAALAHAGQAGAHAKAAQAMAAAGgHQAGgGAAgLQAAgLgGgHQgGgHgMAAQgKAAgGAHg");
	this.shape_9.setTransform(39.075,57.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgOBMIAAiWIAdAAIAACWg");
	this.shape_10.setTransform(30.5,57.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgUAwQgKgFgIgGQgGgGgFgKQgEgJAAgMQAAgLAEgJQAFgKAGgGQAIgHAKgEQAKgDAKAAQALAAAKADQAKAEAHAHQAHAGAFAKQAEAJAAALQAAAMgEAJQgFAKgHAGQgHAGgKAFQgKADgLAAQgKAAgKgDgAgQgRQgHAHAAAKQAAALAHAGQAFAIALgBQALABAHgIQAGgGAAgLQAAgKgGgHQgHgHgLABQgLgBgFAHg");
	this.shape_11.setTransform(21.8,59.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgRBFQgOgFgKgKQgLgJgFgOQgGgOAAgRQAAgQAGgOQAFgOALgJQAKgKAOgFQAOgFAPAAIANABIANADIAMAHQAGAEAEAFIgYAUQgEgGgHgDQgHgDgJAAQgIAAgHAEQgHADgGAGQgFAGgDAJQgEAIAAAJQAAAKAEAIQADAJAFAGQAFAGAIADQAGAEAIAAQAKAAAHgEQAIgEAFgIIAaAUQgJAMgOAGQgOAGgPAAQgPAAgOgFg");
	this.shape_12.setTransform(9.075,57.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgOBLIAAiWIAdAAIAACWg");
	this.shape_13.setTransform(95.15,35.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgUAwQgKgEgHgHQgIgHgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHAKgEQAKgDAKAAQALAAAKADQAKAEAHAHQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgKAEQgKADgLAAQgKAAgKgDgAgRgRQgGAHAAAKQAAALAGAHQAHAGAKAAQALAAAGgGQAHgHAAgLQAAgKgHgHQgGgGgLgBQgKABgHAGg");
	this.shape_14.setTransform(86.45,38.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgXAwQgLgDgGgHIASgUQAEAEAFAEQAFACAHAAQAEAAAEgBQAFgCgBgEQAAgDgDgDIgJgDIgMgCQgGgCgGgDQgGgDgEgFQgDgFAAgJQgBgJAEgGQAEgHAFgDQAGgEAIgCQAHgCAGAAQAKAAAKACQAKAEAGAGIgSATQgHgJgLABQgCAAgDACQgFABAAAEQAAAEAFACIAIADIAMADQAGABAGADQAGADADAFQAFAGAAAJQgBAJgEAHQgEAGgHADQgFAEgIABIgPACQgKAAgLgDg");
	this.shape_15.setTransform(75.75,38.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("Ag0BFIAEgZQAHAEAHAAQAFAAAEgCQADgBACgCIAEgFIACgHIACgGIgqhhIAgAAIAYBAIABAAIAWhAIAeAAIgsBxIgGANQgDAGgDAEQgEAEgHACQgGACgLAAQgLAAgMgDg");
	this.shape_16.setTransform(65.55,40.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgsBHIAAiNIAgAAIAABwIA5AAIAAAdg");
	this.shape_17.setTransform(55.3,36.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AARBLIAAgvIAAgJIgCgIQgCgEgDgDQgDgBgGAAQgEAAgEABQgEACgCAEIgCAIIgBAJIAAAwIgeAAIAAiWIAeAAIAABEIABAAQABgDACgDIAGgFQADgDAEgBIAKgBQALAAAHADQAHAEAEAGQAEAHACAGIABATIAAA1g");
	this.shape_18.setTransform(37.675,35.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AADA/QgGgCgEgEQgFgDgDgGQgDgFABgIIAAgtIgUAAIAAgYIAUAAIAAgdIAcAAIAAAdIAbAAIAAAYIgbAAIAAAfIABAHQAAAEABACQACACADACIAIABIAGgBQAEAAACgCIAAAZIgKADIgLAAQgIAAgGgBg");
	this.shape_19.setTransform(27.75,37.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgOBIIAAhgIAdAAIAABggAgMgqQgEgFAAgHQAAgIAEgEQAGgGAGAAQAHAAAGAGQAEAEABAIQgBAHgEAFQgGAFgHAAQgGAAgGgFg");
	this.shape_20.setTransform(21.25,36.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AAUAwIgUg/IgRA/IgfAAIgjhgIAgAAIAUA8IARg8IAfAAIASA8IABAAIASg8IAeAAIgiBgg");
	this.shape_21.setTransform(10.325,38.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgYBJQgIgEgHgGQgGgHgDgJQgEgKAAgLQAAgKADgJQADgIAGgIQAGgHAIgEQAIgEALAAQAIAAAIADQAIACAFAHIABAAIAAhAIAeAAIAACWIgcAAIAAgNIAAAAIgFAGIgHAFIgIADQgFACgEAAQgLAAgJgEgAgPAIQgHAHAAALQAAALAHAGQAGAHAKAAQAMAAAGgHQAGgGAAgLQAAgLgGgHQgGgHgMAAQgKAAgGAHg");
	this.shape_22.setTransform(177.125,14.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgYAxQgGgCgFgDQgFgEgDgGQgDgGAAgHQABgJADgFQADgGAFgDQAFgDAHgDIAOgDIANgBIAOAAQAAgJgGgEQgFgFgIABQgGAAgHACQgFADgFAGIgRgRQAJgHALgEQAMgEALAAQAMAAAJADQAIADAGAHQAEAHADAJQACAJAAAMIAAAwIgcAAIAAgMIAAAAQgGAIgIADQgHAEgJAAQgHAAgGgCgAgFAIQgFACgDACQgEADAAAFQAAAFAEADQAFACAFAAIAIgBIAHgDQAEgCABgEQACgDAAgFIAAgGIgHAAIgJAAg");
	this.shape_23.setTransform(165.7,17.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgQAvQgKgEgHgGQgHgGgEgKQgFgKAAgLQAAgKAFgKQAEgJAHgHQAHgHAKgDQAKgEAKAAQALAAAIAEQAJADAGAHQAGAHADAJQADAKAAAKIAAAJIhFAAQACAJAGAFQAGAFAIAAQAHAAAFgDQAGgEADgEIAVAPQgHAJgLAFQgLAFgMAAQgKAAgKgEgAgGgbQgEACgDACIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIABQgEgBgEACg");
	this.shape_24.setTransform(154.725,17.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_25.setTransform(145.375,17.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("Ag0BIIAAiNIAcAAIAAANIAAAAIAFgFIAHgGIAIgDQAEgCAFABQALAAAJADQAIAEAHAGQAGAHADAJQAEAKAAAKQAAALgDAJQgDAJgGAGQgGAIgIAEQgIAFgLgBQgIAAgIgCQgIgEgFgGIgBAAIAAA3gAgSgmQgGAGAAAMQAAAKAGAHQAGAGAMAAQAKAAAGgGQAHgHAAgKQAAgMgHgGQgGgHgKAAQgMAAgGAHg");
	this.shape_26.setTransform(134.925,19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgXAwQgKgDgIgIIASgUQAEAFAGAEQAFACAHAAQAEAAAEgCQAFgBgBgEQAAgDgDgCIgJgEIgMgDQgHgBgFgDQgGgDgDgEQgEgGAAgJQAAgJADgGQAEgGAFgFQAGgEAHgBQAIgCAGAAQAKAAAKADQAJACAHAIIgSASQgHgIgLAAQgCAAgEABQgDACAAAFQAAAEADABIAJADIAMADQAHABAFAEQAGADADAEQAEAFABAKQAAAJgFAHQgEAFgGAEQgHAEgIACIgOABQgKAAgLgDg");
	this.shape_27.setTransform(123.7,17.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgQAvQgKgEgHgGQgHgGgEgKQgFgKAAgLQAAgKAFgKQAEgJAHgHQAHgHAKgDQAKgEAKAAQALAAAIAEQAJADAGAHQAGAHADAJQADAKAAAKIAAAJIhFAAQACAJAGAFQAGAFAIAAQAHAAAFgDQAGgEADgEIAVAPQgHAJgLAFQgLAFgMAAQgKAAgKgEgAgGgbQgEACgDACIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIABQgEgBgEACg");
	this.shape_28.setTransform(107.425,17.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AARBLIAAgvIAAgJIgCgIQgCgEgDgCQgDgDgGAAQgEAAgEADQgEABgCAEIgCAIIgBAJIAAAwIgeAAIAAiVIAeAAIAABCIABAAQABgDACgCIAGgFQADgCAEgBQAFgCAFAAQALAAAHAEQAHADAEAGQAEAHACAGIABATIAAA1g");
	this.shape_29.setTransform(95.975,14.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AADA/QgFgCgFgEQgFgDgDgGQgCgFAAgIIAAgtIgUAAIAAgYIAUAAIAAgdIAdAAIAAAdIAaAAIAAAYIgaAAIAAAfIAAAHQAAAEABACQACACADACIAHABIAHgBQAEAAACgCIAAAZIgKADIgLAAQgIAAgGgBg");
	this.shape_30.setTransform(86.05,15.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AADA/QgGgCgFgEQgEgDgDgGQgCgFgBgIIAAgtIgTAAIAAgYIATAAIAAgdIAdAAIAAAdIAbAAIAAAYIgbAAIAAAfIABAHQAAAEACACQABACADACIAIABIAGgBQAEAAACgCIAAAZIgLADIgKAAQgIAAgGgBg");
	this.shape_31.setTransform(72.05,15.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDQAFgCAFAAQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_32.setTransform(62.425,17.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgQAvQgKgEgHgGQgHgGgEgKQgFgKAAgLQAAgKAFgKQAEgJAHgHQAHgHAKgDQAKgEAKAAQALAAAIAEQAJADAGAHQAGAHADAJQADAKAAAKIAAAJIhFAAQACAJAGAFQAGAFAIAAQAHAAAFgDQAGgEADgEIAVAPQgHAJgLAFQgLAFgMAAQgKAAgKgEgAgGgbQgEACgDACIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIABQgEgBgEACg");
	this.shape_33.setTransform(50.975,17.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgOAwIgohfIAgAAIAYBAIAAAAIAXhAIAeAAIgmBfg");
	this.shape_34.setTransform(39.725,17.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgQAvQgKgEgHgGQgHgGgEgKQgFgKAAgLQAAgKAFgKQAEgJAHgHQAHgHAKgDQAKgEAKAAQALAAAIAEQAJADAGAHQAGAHADAJQADAKAAAKIAAAJIhFAAQACAJAGAFQAGAFAIAAQAHAAAFgDQAGgEADgEIAVAPQgHAJgLAFQgLAFgMAAQgKAAgKgEgAgGgbQgEACgDACIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIABQgEgBgEACg");
	this.shape_35.setTransform(28.425,17.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_36.setTransform(19.075,17.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("Ag0BHIAAiNIA0AAQAKAAAKACQAKACAHAFQAHAFAFAIQAEAJAAAMQAAANgEAIQgEAHgHAFQgHAFgKACQgJADgLAAIgWAAIAAA3gAgVgKIAVAAIAHgBQAEAAADgCQADgCACgEQACgDAAgFQAAgFgDgEQgCgDgEgCIgJgCIgIAAIgQAAg");
	this.shape_37.setTransform(8.775,14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_03, new cjs.Rectangle(0,0,191.9,73.9), null);


(lib.copy_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AATA3IAAg1IAAgIIgDgJQgBgEgEgDQgDgDgGAAQgGAAgEADQgEACgCAEQgCAEAAAEIgBAJIAAA2IghAAIAAhqIAfAAIAAAOIABAAIAEgGIAHgFIAIgEQAFgCAGAAQANAAAHAEQAIAEAEAHQAEAHACAJQABAJAAALIAAA6g");
	this.shape.setTransform(227.8,42.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgIgEgKQgFgKgBgNQABgLAFgLQAEgLAIgHQAIgHALgEQALgEALAAQAMAAAMAEQAKAEAIAHQAIAHAFALQAFALAAALQAAANgFAKQgFAKgIAIQgIAHgKAEQgMAEgMAAQgLAAgLgEgAgSgSQgIAHAAALQAAAMAIAHQAGAIAMAAQAMAAAHgIQAIgHgBgMQABgLgIgHQgHgIgMAAQgMAAgGAIg");
	this.shape_1.setTransform(214.7,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgaA1QgLgEgIgHIAVgXQAEAGAGADQAFADAHAAQAFAAAFgCQAEgCABgDQAAgFgFgCIgJgEIgNgDQgHgBgHgDQgGgEgEgFQgEgGAAgKQAAgJAEgHQADgHAHgEQAGgFAJgCQAHgCAIAAQALAAAKADQALADAHAIIgUAUQgHgJgMAAQgDAAgEACQgEACAAAFQAAADAEACIAKAEIANADQAHABAGAEQAHADADAFQAEAHAAAKQABALgFAGQgFAHgGAEQgHAEgJABIgRACQgLAAgMgDg");
	this.shape_2.setTransform(202.85,42.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgbA2QgHgCgFgEQgFgFgDgGQgDgFAAgJQAAgJADgGQADgHAGgDQAGgEAIgCQAHgDAIgBIAPgCIAPAAQAAgIgGgFQgHgGgIAAQgHABgHADQgHAEgFAFIgSgSQAKgJAMgEQAMgEANAAQAOAAAJADQAKAEAFAHQAGAHACAKQACAKAAAOIAAA2IgeAAIAAgOQgGAIgJAFQgIADgKAAQgIAAgHgCgAADAHIgJACQgFACgEACQgEADAAAGQAAAGAFADQAFADAGAAIAIgBIAIgFQAEgCACgEQACgDAAgGIAAgGIgIAAg");
	this.shape_3.setTransform(191.625,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgSA0QgLgEgIgHQgIgIgEgKQgFgKAAgNQAAgLAFgLQAEgLAIgHQAIgHALgEQALgEAMAAQALAAAJAEQAKAEAGAHQAHAHADALQAEALAAALIAAAKIhMAAQACAKAHAGQAGAFAJAAQAIAAAGgDQAFgEAFgGIAXARQgIAKgMAGQgMAFgNAAQgMAAgLgEgAAWgLQAAgJgGgGQgGgFgJgBQgEAAgEADQgEABgDADQgDACgCAFQgCADAAAEIArAAIAAAAg");
	this.shape_4.setTransform(179.475,42.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgaA1QgLgEgIgHIAUgXQAFAGAFADQAGADAIAAQAEAAAFgCQAFgCAAgDQgBgFgEgCIgJgEIgNgDQgIgBgGgDQgGgEgEgFQgEgGAAgKQAAgJAEgHQAEgHAGgEQAGgFAJgCQAHgCAIAAQAKAAALADQALADAIAIIgVAUQgHgJgMAAQgDAAgEACQgEACAAAFQAAADAEACIAKAEIANADQAHABAGAEQAGADAFAFQADAHAAAKQABALgFAGQgEAHgIAEQgHAEgIABIgQACQgMAAgMgDg");
	this.shape_5.setTransform(168,42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgfAzQgIgEgEgHQgFgGgBgKQgCgJAAgLIAAg6IAiAAIAAA1IAAAIIACAJQACAFADACQAEADAGAAQAFAAAEgCQAEgDACgEQADgDAAgFIAAgJIAAg2IAiAAIAABqIggAAIAAgOIgBAAIgEAGIgHAFIgIAEQgFACgGAAQgMAAgIgEg");
	this.shape_6.setTransform(149.9,42.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgQBTIAAilIAgAAIAAClg");
	this.shape_7.setTransform(140.65,39.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgTBVIAAhRIgVAAIAAgaIAVAAIAAgSQAAgJACgIQABgIAFgFQAEgHAHgDQAJgDANgBIAKABIAJABIgBAcIgFgBIgGgBQgIAAgEAEQgEADAAAKIAAARIAZAAIAAAaIgZAAIAABRg");
	this.shape_8.setTransform(133.875,39.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgqBPQgKgDgIgGQgIgGgEgIQgFgJAAgMQAAgHADgHQACgHAFgFQAEgGAGgDQAGgEAHgCIgHgIIgFgIIgEgJQgBgFAAgFQAAgLAEgHQAEgIAHgFQAHgFAIgCQAJgCAJAAQAJAAAIACQAIADAGAEQAGAFAEAHQAEAHAAAKQAAAHgDAGQgCAGgEAFQgEAGgFAEIgLAHIAUAUIAPgUIAmAAIggArIAiAlIgqAAIgNgPQgKAKgLAEQgKAFgOAAQgKAAgKgDgAgeAPIgGAFIgEAGQgBADAAAEQAAAFABADIAFAGIAHAEIAHACQAIAAAGgEQAFgDAFgFIgbgegAgYgzQgEAEAAAHIABAGIADAFIAFAFIAEADIAGgDIAFgFIAEgFIABgGQAAgHgDgEQgFgEgGAAQgGAAgFAEg");
	this.shape_9.setTransform(114.975,40.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgaBQQgKgDgHgIQgHgHgDgKQgEgLAAgLQAAgMADgKQAEgJAGgIQAGgIAJgFQAJgEAMgBQAJAAAJAEQAJADAGAIIAAAAIAAhHIAhAAIAAClIgeAAIAAgOIgBAAIgFAFIgHAGIgKAEIgJACQgMAAgKgFgAgRAJQgHAIAAALQAAANAHAHQAHAIALgBQANABAHgIQAHgHAAgNQAAgLgHgIQgHgIgNAAQgLAAgHAIg");
	this.shape_10.setTransform(92.275,39.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgQBTIAAilIAhAAIAAClg");
	this.shape_11.setTransform(82.75,39.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgIgEgKQgGgKAAgNQAAgLAGgLQAEgLAIgHQAIgHALgEQALgEALAAQANAAAKAEQALAEAIAHQAJAHAEALQAFALgBALQABANgFAKQgEAKgJAIQgIAHgLAEQgKAEgNAAQgLAAgLgEgAgSgSQgIAHABALQgBAMAIAHQAGAIAMAAQAMAAAIgIQAGgHABgMQgBgLgGgHQgIgIgMAAQgMAAgGAIg");
	this.shape_12.setTransform(73.1,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgMA0QgLgEgIgHQgIgIgEgKQgFgKAAgNQAAgLAFgLQAEgLAIgHQAIgHALgEQALgEAMAAQAJAAAKADQALADAIAIIgWAXQgDgEgEgCQgEgCgFAAQgMAAgHAIQgHAHAAALQAAAMAHAHQAHAIAMAAQAFAAAEgCIAHgGIAWAXQgIAIgLADQgKADgJAAQgMAAgLgEg");
	this.shape_13.setTransform(61.425,42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgZA1QgMgEgHgHIATgXQAFAGAFADQAGADAIAAQAFAAAEgCQAFgCgBgDQAAgFgDgCIgKgEIgNgDQgIgBgFgDQgHgEgEgFQgEgGAAgKQAAgJAEgHQAEgHAGgEQAGgFAIgCQAJgCAHAAQAKAAALADQALADAHAIIgUAUQgHgJgMAAQgDAAgEACQgEACAAAFQAAADAEACIAJAEIAOADQAHABAGAEQAGADAEAFQAFAHAAAKQgBALgEAGQgEAHgIAEQgGAEgKABIgQACQgLAAgLgDg");
	this.shape_14.setTransform(43.95,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgPBQIAAhqIAfAAIAABqgAgMguQgGgGAAgIQAAgIAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_15.setTransform(35.9,40.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AATBTIAAg0IAAgKIgDgJQgBgEgEgDQgDgCgGAAQgGAAgEACQgEACgCAEQgCAEAAAFIgBAKIAAA1IghAAIAAilIAhAAIAABKIAAAAQABgDADgDIAGgGIAIgEQAFgBAGAAQANAAAHAEQAIADAEAHQAEAHACAIQABAKAAAKIAAA7g");
	this.shape_16.setTransform(26.65,39.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AADBFQgGgCgFgDQgGgEgCgGQgDgHAAgJIAAgyIgWAAIAAgaIAWAAIAAgfIAfAAIAAAfIAdAAIAAAaIgdAAIAAAjIABAIIACAHQACACACABQADACAGAAIAHAAQAFgBABgCIAAAbQgFACgGABIgLABQgJAAgHgCg");
	this.shape_17.setTransform(15.6,41.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgaA1QgLgDgIgJIAUgVQAFAFAFADQAGADAIAAQAEAAAFgBQAFgCgBgFQAAgEgDgCIgKgEIgNgCQgIgCgFgEQgHgDgEgFQgEgGAAgKQAAgKAEgGQADgHAHgFQAGgEAIgCQAIgCAIAAQALAAAKADQALADAIAIIgVAUQgHgJgMAAQgDAAgEACQgEACAAAFQAAAEAEACIAKADIANADQAHABAGAEQAGAEAFAEQADAHAAAKQAAAKgEAHQgEAGgIAFQgHAEgIACIgQABQgMAAgMgDg");
	this.shape_18.setTransform(243.95,18.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgSA0QgLgEgIgHQgIgHgEgLQgFgKAAgNQAAgMAFgKQAEgLAIgHQAIgHALgEQALgEAMAAQALAAAJAEQAKAEAGAHQAHAHADALQAEAKAAAMIAAALIhMAAQACAJAHAGQAGAFAJAAQAIAAAGgDQAFgEAFgGIAXARQgIAKgMAFQgMAGgNAAQgMAAgLgEgAAWgLQAAgJgGgFQgGgHgJAAQgEAAgEACQgEACgDADQgDADgCAEQgCADAAAEIArAAIAAAAg");
	this.shape_19.setTransform(232.475,18.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AASA3IAAg1IAAgIIgCgJQgCgEgDgDQgDgDgHAAQgFAAgEADQgEACgCAEQgCAEgBAEIgBAJIAAA2IghAAIAAhqIAhAAIAAAOIAAAAIAEgGIAHgFIAIgEQAFgCAGAAQAMAAAJAEQAHAEAEAHQAEAHACAJQABAJABALIAAA6g");
	this.shape_20.setTransform(219.75,18.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgHgEgLQgGgKAAgNQAAgMAGgKQAEgLAIgHQAIgHALgEQALgEALAAQAMAAALAEQALAEAIAHQAIAHAFALQAFAKgBAMQABANgFAKQgFALgIAHQgIAHgLAEQgLAEgMAAQgLAAgLgEgAgTgSQgGAHAAALQAAAMAGAIQAIAHALAAQAMAAAIgHQAGgIABgMQgBgLgGgHQgIgIgMAAQgLAAgIAIg");
	this.shape_21.setTransform(206.65,18.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgaBRQgKgEgHgIQgHgHgDgKQgEgLAAgMQAAgLADgKQAEgJAGgIQAGgIAJgFQAJgEAMAAQAJgBAJADQAJAEAGAIIAAAAIAAhHIAhAAIAAClIgeAAIAAgOIgBAAIgFAFIgHAGIgKAEIgJABQgMAAgKgDgAgRAJQgHAHAAAMQAAAMAHAIQAHAHALAAQANAAAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgLAAgHAIg");
	this.shape_22.setTransform(185.975,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgSA0QgLgEgIgHQgIgHgEgLQgFgKAAgNQAAgMAFgKQAEgLAIgHQAIgHALgEQALgEAMAAQALAAAJAEQAKAEAGAHQAHAHADALQAEAKAAAMIAAALIhMAAQACAJAHAGQAGAFAJAAQAIAAAGgDQAFgEAFgGIAXARQgIAKgMAFQgMAGgNAAQgMAAgLgEgAAWgLQAAgJgGgFQgGgHgJAAQgEAAgEACQgEACgDADQgDADgCAEQgCADAAAEIArAAIAAAAg");
	this.shape_23.setTransform(173.025,18.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgQA2IgshqIAkAAIAaBHIAAAAIAZhHIAiAAIgrBqg");
	this.shape_24.setTransform(160.525,18.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgHgFgLQgEgKAAgNQAAgMAEgKQAFgLAIgHQAIgHALgEQALgEALAAQAMAAALAEQALAEAIAHQAIAHAFALQAEAKAAAMQAAANgEAKQgFALgIAHQgIAHgLAEQgLAEgMAAQgLAAgLgEgAgTgSQgGAHAAALQAAAMAGAIQAIAHALAAQAMAAAIgHQAGgIAAgMQAAgLgGgHQgIgIgMAAQgLAAgIAIg");
	this.shape_25.setTransform(147.6,18.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgQBTIAAilIAgAAIAAClg");
	this.shape_26.setTransform(137.95,15.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AglA3IAAhqIAhAAIAAARIABAAQAEgKAHgFQAIgFALAAIAFAAIAGABIAAAeIgHgBIgHgBQgKAAgFADQgGADgDAEQgCAFgBAHIgBANIAAAtg");
	this.shape_27.setTransform(124.375,18.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgfAzQgIgEgEgHQgEgGgCgKQgCgJABgLIAAg6IAhAAIAAA1IAAAIIACAJQABAFAEACQAEADAGAAQAFAAAEgCQAEgDACgEQACgDABgFIABgJIAAg2IAgAAIAABqIgfAAIAAgOIAAAAIgFAGIgGAFIgJAEQgFACgGAAQgNAAgHgEg");
	this.shape_28.setTransform(113.05,18.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgHgFgLQgEgKgBgNQABgMAEgKQAFgLAIgHQAIgHALgEQALgEALAAQAMAAAMAEQAKAEAIAHQAIAHAFALQAFAKAAAMQAAANgFAKQgFALgIAHQgIAHgKAEQgMAEgMAAQgLAAgLgEgAgSgSQgIAHAAALQAAAMAIAIQAGAHAMAAQAMAAAHgHQAIgIgBgMQABgLgIgHQgHgIgMAAQgMAAgGAIg");
	this.shape_29.setTransform(99.95,18.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("Ag5BMIAFgbQAHADAIAAIAJgBIAGgEIAEgFIADgIIACgGIguhrIAjAAIAbBGIAYhGIAhAAIgwB7IgGAQQgDAGgEAFQgFAEgHADQgHACgMAAQgNAAgMgEg");
	this.shape_30.setTransform(87.05,21.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AADBFQgGgCgFgDQgGgFgCgFQgDgHAAgIIAAgzIgWAAIAAgaIAWAAIAAgfIAfAAIAAAfIAdAAIAAAaIgdAAIAAAjIABAIIACAHQACACACABQADACAGAAIAHgBQAFAAABgCIAAAbQgFACgGABIgLAAQgJAAgHgBg");
	this.shape_31.setTransform(69.6,17.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgMA0QgLgEgIgHQgIgHgEgLQgFgKAAgNQAAgMAFgKQAEgLAIgHQAIgHALgEQALgEAMAAQAJAAAKADQALAEAIAHIgWAXQgDgDgEgDQgEgCgFAAQgMAAgHAIQgHAHAAALQAAAMAHAIQAHAHAMAAQAFAAAEgDIAHgFIAWAXQgIAHgLAEQgKADgJAAQgMAAgLgEg");
	this.shape_32.setTransform(60.325,18.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgSA0QgLgEgIgHQgIgHgEgLQgFgKAAgNQAAgMAFgKQAEgLAIgHQAIgHALgEQALgEAMAAQALAAAJAEQAKAEAGAHQAHAHADALQAEAKAAAMIAAALIhMAAQACAJAHAGQAGAFAJAAQAIAAAGgDQAFgEAFgGIAXARQgIAKgMAFQgMAGgNAAQgMAAgLgEgAAWgLQAAgJgGgFQgGgHgJAAQgEAAgEACQgEACgDADQgDADgCAEQgCADAAAEIArAAIAAAAg");
	this.shape_33.setTransform(48.225,18.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AADBFQgGgCgGgDQgEgFgEgFQgDgHAAgIIAAgzIgUAAIAAgaIAUAAIAAgfIAhAAIAAAfIAdAAIAAAaIgdAAIAAAjIAAAIIACAHQACACACABQADACAGAAIAHgBQAFAAACgCIAAAbQgGACgGABIgMAAQgIAAgHgBg");
	this.shape_34.setTransform(37.15,17.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgWA0QgLgEgIgHQgIgHgEgLQgFgKgBgNQABgMAFgKQAEgLAIgHQAIgHALgEQALgEALAAQAMAAAMAEQAKAEAIAHQAIAHAFALQAFAKAAAMQAAANgFAKQgFALgIAHQgIAHgKAEQgMAEgMAAQgLAAgLgEgAgSgSQgIAHAAALQAAAMAIAIQAHAHALAAQANAAAGgHQAIgIAAgMQAAgLgIgHQgGgIgNAAQgLAAgHAIg");
	this.shape_35.setTransform(26.05,18.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AglA3IAAhqIAhAAIAAARIABAAQAEgKAHgFQAIgFALAAIAFAAIAGABIAAAeIgHgBIgHgBQgKAAgFADQgGADgDAEQgCAFgBAHIgBANIAAAtg");
	this.shape_36.setTransform(15.225,18.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("Ag6BOIAAibIA6AAQALAAALACQALACAIAGQAIAGAFAJQAEAIAAAOQABAOgFAKQgFAHgHAGQgIAFgLADQgKACgMAAIgYAAIAAA9gAgXgLIAXAAIAIgBIAHgCQADgDACgEQACgDAAgGQABgFgDgEQgDgDgEgDQgFgBgFgBIgJgBIgRAAg");
	this.shape_37.setTransform(3.8,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_02, new cjs.Rectangle(-5.7,0,256.9,58.1), null);


(lib.copy_01c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgLARIAAgFIACAAIABAAIADAAIABAAIABgCIABgBIABgDIgLgXIAHAAIAFARIAGgRIAHAAIgMAcIgBADIgBADIgCAAIgEABIgEgBg");
	this.shape.setTransform(170.8,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgFASIgEgCIgCgEIgBgFIABgFIACgDIAEgDIAFgBIACABIACAAIACACIABABIAAgRIAGAAIAAAlIgGAAIAAgEIgDADIgEABIgFgBgAgCAAIgCACIgBACIgBADIABACIABADIACABIACABIADgBIADgBIABgDIAAgCIAAgDIgBgCIgDgCIgDAAIgCAAg");
	this.shape_1.setTransform(167.75,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgGAMIgCgDIgBgDIgBgDIAAgOIAGAAIAAALIAAACIABACIABACIACABIACgBIABgBIACgCIAAgCIAAgMIAGAAIAAAXIgGAAIAAgEIgDADIgDABIgFAAg");
	this.shape_2.setTransform(164.75,9.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AAEAQIgEgBIgBgBIgBgDIgBgEIAAgKIgFAAIAAgFIAFAAIAAgHIAFAAIAAAHIAHAAIAAAFIgHAAIAAAKIABADIADABIABAAIACgBIAAAFIgCABg");
	this.shape_3.setTransform(162.225,9.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgEAMIgFgDIAEgEIADACIACABIACAAIABgBIABgBIAAgBIgBgBIgDgBIgCgBIgCgBIgDgCIgBgDIABgEIACgCIADgBIACAAIAFAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIgEAEQgBgDgEAAIgBABIgBACIABABIABABIAEABIACABIADABIABAEIgBADIgDADIgCABIgEABIgEgBg");
	this.shape_4.setTransform(160.1,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgCATIAAglIAFAAIAAAlg");
	this.shape_5.setTransform(156.7,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgEAMQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEIgBgFIABgEIADgEQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBIAEAAIAFAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIADAEIABAEIgBAFIgDAEQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBABIgFABIgEgBgAgCgFIgCABIgCACIAAACIAAADIACACIACABIACABIADgBIACgBIACgCIAAgDIAAgCIgCgCIgCgBIgDgBIgCABg");
	this.shape_6.setTransform(154.425,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAEAQIgEgBIgBgBIgBgDIgBgEIAAgKIgFAAIAAgFIAFAAIAAgHIAFAAIAAAHIAHAAIAAAFIgHAAIAAAKIABADIADABIABAAIACgBIAAAFIgCABg");
	this.shape_7.setTransform(151.825,9.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgFAMIgEgDIAEgEIACACIADABIABAAIABgBIABgBIABgBIgBgBIgCgBIgCgBIgEgBIgCgCIgBgDIABgEIACgCIADgBIADAAIAEAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIgEAEQgBgDgDAAIgCABIgBACIABABIACABIACABIAEABIACABIABAEIgBADIgCADIgEABIgDABIgFgBg");
	this.shape_8.setTransform(149.7,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgCASIAAgXIAFAAIAAAXgAgCgLIgBgCIABgDIACgBIADABQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDABIgCgBg");
	this.shape_9.setTransform(147.85,9.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgHAMIAAgXIAGAAIAAAEQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgBIABAAIACAAIAAAGIgCgBIgBAAIgEABIgBACIgBACIAAABIAAAMg");
	this.shape_10.setTransform(146.325,9.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgMASIAAgjIAMAAIAFABIADABIACADIABAEQAAADgBACIgEADIACAAIADACIABACIABAEIgBAEIgDAEIgEABIgFABgAgGAMIAGAAIABAAIADAAIACgCIABgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgGAAgAgGgCIAGAAIADgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgDgBIgGAAg");
	this.shape_11.setTransform(143.6,9.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgDATIAAgTIgFAAIAAgEIAFAAIAAgDIABgFIABgDIACgCIAEgBIAEAAIAAAFIgCAAIgBAAIgCAAIgCABIAAACIAAACIAAAEIAGAAIAAAEIgGAAIAAATg");
	this.shape_12.setTransform(139.45,9.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgEAMQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEIgBgFIABgEIADgEQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBIAEAAIAFAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIADAEIABAEIgBAFIgDAEQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBABIgFABIgEgBgAgCgFIgCABIgCACIAAACIAAADIACACIACABIACABIADgBIACgBIACgCIAAgDIAAgCIgCgCIgCgBIgDgBIgCABg");
	this.shape_13.setTransform(136.875,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgLARIABgFIABAAIABAAIACAAIACAAIABgCIABgBIABgDIgLgXIAGAAIAGARIAHgRIAGAAIgMAcIgBADIgBADIgCAAIgEABIgEgBg");
	this.shape_14.setTransform(132.45,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AAEAQIgEgBIgBgBIgBgDIgBgEIAAgKIgFAAIAAgFIAFAAIAAgHIAFAAIAAAHIAHAAIAAAFIgHAAIAAAKIABADIADABIABAAIACgBIAAAFIgCABg");
	this.shape_15.setTransform(130.075,9.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AgCASIAAgXIAFAAIAAAXgAgCgLIgBgCIABgDIACgBIACABQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgCgBg");
	this.shape_16.setTransform(128.4,9.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgEAMIgFgDIAEgEIACACIADABIACAAIABgBIABgBIAAgBIgBgBIgCgBIgDgBIgCgBIgDgCIgBgDIABgEIACgCIADgBIADAAIAEAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIgEAEQgBgDgDAAIgCABIgBACIABABIACABIADABIACABIADABIABAEIgBADIgDADIgCABIgEABIgEgBg");
	this.shape_17.setTransform(126.55,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgHAMIAAgXIAGAAIAAAEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgBIABAAIACAAIAAAGIgCgBIgBAAIgEABIgBACIgBACIAAABIAAAMg");
	this.shape_18.setTransform(124.575,9.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgDAMQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEIgBgFIABgEIADgEQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBIAEAAIAFAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIACAEIABAEIAAACIgRAAQAAADACABQABABAAAAQABAAAAABQABAAAAAAQAAAAAAAAIAEgBIADgCIAEADQgCADgDABIgFABIgEgBgAAGgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIALAAIAAAAg");
	this.shape_19.setTransform(121.925,9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgCAMIgKgXIAHAAIAFAQIAGgQIAHAAIgJAXg");
	this.shape_20.setTransform(119.15,9.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgCASIAAgXIAFAAIAAAXgAgCgLIgBgCIABgDIACgBIADABQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDABIgCgBg");
	this.shape_21.setTransform(117.1,9.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AAFAMIAAgMIgBgBIAAgCIgBgCIgCgBIgCABIgCABIgBACIAAACIAAAMIgGAAIAAgXIAFAAIAAAEIADgDIAEgBIAEAAIADADIACADIAAADIAAAOg");
	this.shape_22.setTransform(114.95,9.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgFARIgEgDIgDgEIgBgGIAAgVIAGAAIAAAVIAAADIACACQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEgBIACgCIABgCIABgDIAAgVIAGAAIAAAVIgBAGIgDAEQgCACgDABIgFABIgFgBg");
	this.shape_23.setTransform(111.625,9.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgGASIAIgNIgBAAIgBAAIgBAAIgEgBIgEgCIgCgCIgBgFIABgFIADgEQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAEgBIAFABIAEACIADAEIABAFIgBAFIgDADIgJAPgAgCgLIgCACIgBACIgBACIABACIABADIACAAIACABIACgBIACAAIACgDIAAgCIAAgCIgCgCIgCgCIgCgBIgCABg");
	this.shape_24.setTransform(106.675,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AACASIAAgcIgGAGIgDgEIAKgJIAFAAIAAAjg");
	this.shape_25.setTransform(103.275,9.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AAAASIgBAAIgDgBIgDgCIgCgDIgCgFIgBgHIABgGIACgFIACgDIADgCIADgBIABAAIACAAIADABIADACIACADIACAFIABAGIgBAHIgCAFIgCADIgDACIgDABgAgDgKIgCADIgBAEIAAADIAAAEIABAEIACADQABABAAAAQAAAAABAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIACgDIABgEIAAgEIAAgDIgBgEIgCgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQgBAAAAAAQAAAAgBABg");
	this.shape_26.setTransform(100.575,9.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgLASIAAgHIANgLIABgCIABgCIABgBIABgBIgBgCIgBgCIgCgBIgCgBQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCAEIgGgBIABgFIACgCIAEgCIADgBIAFABIAEACIACACIABAFQAAAEgCACIgEADIgJAKIAPAAIAAAGg");
	this.shape_27.setTransform(97.525,9.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgEAMIgEgBIgCgDIAAgDIAAgDIACgCIADgBIADgBIACAAIAEAAIABAAIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBIgDABIgCACIgEgEQACgCADgBIAEAAIAFAAIADABIABACIACADIAAACIAAACIAAANIgGAAIAAgEQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAABIgEABIgCgBgAgBACIgCABIgBACIAAABIABABIABABIACAAQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIgBAAIgDAAIgCAAg");
	this.shape_28.setTransform(93.05,9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AAFAMIAAgMIAAgBIgBgCIgBgCIgDgBIgBABIgCABIgBACIAAACIAAAMIgGAAIAAgXIAFAAIAAAEIAEgDIADgBIAEAAIADADIABADIABADIAAAOg");
	this.shape_29.setTransform(88.7,9.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgEAMQgBgBAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgDgEIgBgFIABgEIADgEQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABgBIAEAAIAFAAQABABAAAAQABAAABAAQAAABAAAAQABABAAAAIADAEIABAEIgBAFIgDAEQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBABIgFABIgEgBgAgCgFIgCABIgCACIAAACIAAADIACACIACABIACABIADgBIACgBIACgCIAAgDIAAgCIgCgCIgCgBIgDgBIgCABg");
	this.shape_30.setTransform(85.625,9.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AgFASIgEgCIgCgEIgBgFIABgFIACgDIAEgDIAFgBIACABIACAAIACACIABABIAAgRIAGAAIAAAlIgGAAIAAgEIgDADIgEABIgFgBgAgCAAIgCACIgBACIgBADIABACIABADIACABIACABIADgBIADgBIABgDIAAgCIAAgDIgBgCIgDgCIgDAAIgCAAg");
	this.shape_31.setTransform(80.8,9.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgDAMQgBgBAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgDgEIgBgFIABgEIADgEQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABgBIAEAAIAFAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIACAEIABAEIAAACIgRAAQAAADACABQABABAAAAQAAAAABABQAAAAABAAQAAAAAAAAIAEgBIADgCIAEADQgCADgDABIgFABIgEgBgAAGgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIALAAIAAAAg");
	this.shape_32.setTransform(77.775,9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgEAMIgFgDIAEgEIACACIADABIACAAIABgBIABgBIAAgBIgBgBIgCgBIgDgBIgCgBIgDgCIgBgDIABgEIACgCIADgBIADAAIAEAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIgEAEQgCgDgCAAIgCABIgBACIABABIACABIADABIACABIADABIABAEIgBADIgDADIgCABIgEABIgEgBg");
	this.shape_33.setTransform(75.15,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgEAMIgEgBIgCgDIAAgDIAAgDIACgCIADgBIAEgBIABAAIAEAAIACAAIAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBIgCABIgEACIgDgEQACgCADgBIAEAAIAFAAIADABIABACIABADIABACIAAACIAAANIgFAAIAAgEQgBABAAABQgBAAAAABQgBAAAAAAQAAAAgBABIgDABIgDgBgAgBACIgCABIgBACIAAABIABABIACABIABAAQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIgBAAIgDAAIgCAAg");
	this.shape_34.setTransform(72.6,9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgMASIAAgjIAMAAIAEABIAEABIACADIABAEQABADgCACIgEADIADAAIACACIABACIABAEIgBAEIgDAEIgFABIgEABgAgGAMIAGAAIABAAIADAAIACgCIABgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgFgBIgGAAgAgGgCIAGAAIADgBQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgDgBIgGAAg");
	this.shape_35.setTransform(69.7,9.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01c, new cjs.Rectangle(66,4,108.4,10.9), null);


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


(lib.bg_lightblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E6F4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_lightblue, new cjs.Rectangle(0,0,300,250), null);


(lib.bg_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AoHTiMAAAgnDIQPAAMAAAAnDg");
	this.shape.setTransform(52,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(0,0,104,250), null);


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
	this.shape.setTransform(43.917,15.311,0.2656,0.2656);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23437E").s().p("AAIASIAAgYIgBAAIgFAXIgDAAIgFgXIgBAYIgFAAIACgiIAHAAIADAYIAFgYIAGAAIADAig");
	this.shape_1.setTransform(43.1665,15.311,0.2656,0.2656);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23437E").s().p("AgHATIAKglIAFAAIgKAlg");
	this.shape_2.setTransform(42.5888,15.331,0.2656,0.2656);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23437E").s().p("AgMAXQgHgEgDgGQgEgFAAgIQAAgGAEgHQACgFAHgEQAGgEAHAAQAHAAAGAEQAHAEADAFQAEAHAAAGQAAAIgEAFQgEAGgGAEQgIAEgFAAQgGAAgGgEgAgOgOQgHAGAAAIQAAAGADAEQADAFAFADQAFADAFAAQAFAAAFgDQAGgDACgFQADgEAAgGQAAgHgGgHQgGgGgJAAQgIAAgGAGgAAGAPIgBgCIAAgDIAAgFIgBgBIgEgBIgEAAIAAAMIgGAAIAAgdIAMAAQAFAAABABIADADIABAFIgBAEIgDACQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABAEIAAAGIABACgAgEgBIAFAAIAEgBIABgDIgBgCIgEgBIgFAAg");
	this.shape_3.setTransform(41.659,15.3177,0.2656,0.2656);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAQIAEgGIAJADQAFAAABgEQAAgDgGgEQgIgEABgGQADgLAPABQAHAAAEACIgEAGQgDgCgEAAQgHAAAAAEQAAACAHAEQAIAEgBAGQgDALgPAAQgKgBgDgCg");
	this.shape_4.setTransform(38.9538,31.6673,0.2655,0.2655);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQASIAJgkIAYAAIgCAHIgNgBIgCAKIALAAIgBAEIgLAAIgCALIAMAAIgBAGg");
	this.shape_5.setTransform(38.124,31.6352,0.2655,0.2655);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJATIAJglIAKAAIgJAlg");
	this.shape_6.setTransform(37.4004,31.6352,0.2655,0.2655);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAUIAJgkQAFgCAJAAQATgBgDAMQgCAHgLACIADAFIAFAMIgMAAIgDgLQgBgEgDgBIgEARgAAAgNIgDANIADAAQAHAAACgHQABgGgHAAg");
	this.shape_7.setTransform(36.5694,31.6342,0.2655,0.2655);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHgMIAXgBIgBAHIgNAAIgCAJIALAAIgBAFIgLABIgCALIAMgBIgCAGIgXABgAABgPIAGgIIAGgCQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIgLAIg");
	this.shape_8.setTransform(35.6346,31.5024,0.2655,0.2655);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFgMIgJABIABgHIAcgBIgBAGIgJAAIgHAgIgLABg");
	this.shape_9.setTransform(34.8446,31.7016,0.2655,0.2655);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAPQgDgFACgJQACgHAGgGQAGgHAIAAQAHgBADACIgDAGIgGgBQgJABgDAMQgBAGACADQABAEAEAAQAEAAACgCIABAGIgKADIgBAAQgJAAgDgFg");
	this.shape_10.setTransform(33.9056,31.7448,0.2655,0.2655);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADgTIAMgBIAHAmIgNAAIAAgJIgOACIgFAJIgLABgAgCAGIAKgBIgBgMIAAgFg");
	this.shape_11.setTransform(32.7137,31.8476,0.2655,0.2655);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAUIAIgkQAHgDAIgBQASgBgCAKQgCAHgJADIAAAAQAKABgCAHQgCAMgTACIgHAAIgIgBgAgCACIgDAAIgDANIAFAAQAHgBACgGQABgHgHAAIgCABgAACgOIgDABIgDALIADAAQAIAAACgHQABgGgGAAIgCABg");
	this.shape_12.setTransform(31.6555,31.94,0.2655,0.2655);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAVIAFgHQAEABAFgBQAFgBABgEQABgDgHgDQgJgDACgGQABgGAGgDQAEgEAHgBQAIgBAEACIgEAGIgIgBQgHABAAAEQAAADAHADQAJADgCAHQgDAMgPACIgHABIgHgBg");
	this.shape_13.setTransform(30.1115,32.1106,0.2655,0.2655);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHgSIAYgDIgCAGIgMACIgDAKIAMgBIgCAFIgLACIgCALIAMgCIgBAHIgYADg");
	this.shape_14.setTransform(29.2485,32.226,0.2655,0.2655);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAVIAIglQAJgEAGgBQAKgBAEAEQAFAFgCAKQgFAUgVAEIgHABIgHgBgAACgOIgDABIgGAbQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAJgBADgOQADgNgHAAIgCAAg");
	this.shape_15.setTransform(28.1908,32.397,0.2655,0.2655);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJATIAAgJIgOAAIgEAIIgLAAIAXgkIAMAAIAGAlgAgBAFIAJABIgBgMIAAgFg");
	this.shape_16.setTransform(37.1747,30.1084,0.2655,0.2655);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAgSIAKAAIgJAlIgKAAg");
	this.shape_17.setTransform(36.4644,30.1017,0.2655,0.2655);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAUIAJgkQAGgDAHAAQAUAAgDAMQgCAHgLACIADAFIAFAMIgMAAIgDgLQgBgDgDgCIgEARgAADgNIgDAAIgDANIADAAQAHAAACgHQABgGgGAAIgBAAg");
	this.shape_18.setTransform(35.6399,30.1017,0.2655,0.2655);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHgSIAYgBIgBAHIgOAAIgCAJIAMAAIgCAFIgLABIgCALIAMgBIgBAGIgYABg");
	this.shape_19.setTransform(34.7185,30.1349,0.2655,0.2655);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGgMIgIAAIACgGIAbgBIgBAGIgJAAIgGAgIgMABg");
	this.shape_20.setTransform(33.9485,30.1681,0.2655,0.2655);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAPQgDgGACgIQABgHAGgGQAHgHAIgBQAHAAADACIgDAGIgGgBQgJAAgDANQgDAOAJgBQAEAAACgCIABAGIgKADIgBABQgJAAgDgGg");
	this.shape_21.setTransform(33.0293,30.2151,0.2655,0.2655);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADgTIAMgBIAHAlIgNABIAAgIIgOABIgFAJIgKABgAgCAFIAKgBIgBgLIAAgFg");
	this.shape_22.setTransform(31.8507,30.3142,0.2655,0.2655);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAUIAIgkQAIgDAHgBQASgBgCAKQgCAHgJADQAEABACABQADADgBADQgCAMgTACIgEAAIgLgBgAgCACIgDAAIgDANQABAAAAAAQABABAAAAQABAAAAgBQABAAABAAQAHgBACgGQABgHgHABIgCAAgAACgOIgDABIgDALIADAAQAIAAACgHQABgGgGAAIgCABg");
	this.shape_23.setTransform(30.8191,30.3996,0.2655,0.2655);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgSIAYgDIgBAGIgOACIgCAKIAMgBIgCAFIgKACIgEASIgMABg");
	this.shape_24.setTransform(29.4012,30.5532,0.2655,0.2655);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSADQAFgVASgCQAJgCAEAGQADAFgCAJQgEAVgSACIgFABQgOAAAEgTgAADgOQgGABgDAOQgEAPAIgCQAGAAAEgOQADgOgHAAIgBAAg");
	this.shape_25.setTransform(28.3837,30.6865,0.2655,0.2655);

	this.instance = new lib.Group_1();
	this.instance.setTransform(33.9,31.5,0.2657,0.2657,0,0,0,23.7,7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJgTIAbgJIgCAJIgNAEIgBAKIALgDIgCAIIgLADIAAAMIALgFIgBAJIgbAKg");
	this.shape_26.setTransform(14.7663,35.5477,0.2657,0.2657);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPgRIAMgFIAJARIACADIAEgZIAMgEIgIAwIgLAEIgKgSIgBgDIgBAAIgEAbIgMAFg");
	this.shape_27.setTransform(13.6504,35.9396,0.2657,0.2657);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDgWIAPgFIgJAxIgOAGg");
	this.shape_28.setTransform(12.7005,36.2983,0.2657,0.2657);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPgRIAOgGIACAaIAOghIAOgGIgDAwIgNAGIACgdIgOAiIgGADIgEgaIgBAAIgGAfIgMAGg");
	this.shape_29.setTransform(11.5447,36.7766,0.2657,0.2657);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCgWIANgHIgHA0IgOAHg");
	this.shape_30.setTransform(10.5151,37.2349,0.2657,0.2657);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFgWIAOgHIgHAqIAMgGIgCAKIgZANg");
	this.shape_31.setTransform(9.738,37.6534,0.2657,0.2657);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJgMIAagOIgBAKIgNAHIgCAKIALgEIgCAJIgKAFIAAAMIAKgGIgBAKIgZAPgAAFgiQADgDAEgDQAFgCABACIgMAQIgGAEg");
	this.shape_32.setTransform(8.9541,37.8342,0.2657,0.2657);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAeIAGgMQAEABAGgCQAHgCAAgEQAAgEgGAAQgLgBABgIQABgHAHgHQAHgHAJgDQALgEAFABIgGALQgEgBgFACQgHACAAAEQgBADAHABQAOABgCAJQgBAHgIAHQgHAGgJAEQgKADgFAAIgDAAg");
	this.shape_33.setTransform(14.6866,33.8559,0.2657,0.2657);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHgVIASgHIgIAoIAPgFIgCAKIghAMg");
	this.shape_34.setTransform(13.5043,34.2989,0.2657,0.2657);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHgVIASgHIgIAoIAOgFIgBAJIghANg");
	this.shape_35.setTransform(12.4083,34.7041,0.2657,0.2657);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEgVIASgHIgKAyIgRAHg");
	this.shape_36.setTransform(11.5514,35.003,0.2657,0.2657);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUgOIATgHIgFAVIARgbIAUgJIgVAfIAMATIgVAJIgHgTIgBAAIgEAYIgSAIg");
	this.shape_37.setTransform(10.4421,35.4547,0.2657,0.2657);

	this.instance_1 = new lib.Group_4();
	this.instance_1.setTransform(12.05,37.05,0.2657,0.2657,0,0,0,13.3,7.9);

	this.instance_2 = new lib.Group_5();
	this.instance_2.setTransform(12.7,34.9,0.2657,0.2657,0,0,0,11.3,6.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AghA3IA4hvIALACIg4BvgAAIAQQAIgkAWgDQAWgEgIAkQgIAlgWADIgDABQgSAAAHgigAAkgNQgHABgGAZQgGAaAIgBQAIgBAFgaIADgRQgBgHgEAAIAAAAgAg0gIQAIglAWgEQAWgDgHAlQgIAkgWADIgEAAQgRAAAGgggAgYgmQgHABgGAaQgFAYAHgBQAIgBAFgYQAGgZgHAAIgBAAg");
	this.shape_38.setTransform(25.4223,31.9541,0.2657,0.2657);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnArQAZgMAOgVIgIADQgPAEgIgFQgLgHAEgSQAEgRANgNQANgNARgEQAUgFAHAMQAGAKgEATQgHAggbAbQgUAUgUAHgAAEgpQgKADgEATQgEATAOgEQAEgBADgCIAEgMQAEgWgJAAIgCAAg");
	this.shape_39.setTransform(22.2701,32.5329,0.2657,0.2657);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAPQgEgEABgHQACgGAGgGQAGgHAGgCQAHgBADAEQAEAEgCAHQgBAGgGAGQgGAHgGACIgDAAQgEAAgDgDg");
	this.shape_40.setTransform(20.433,33.9734,0.2657,0.2657);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnAsQAZgMAOgWIgJADQgPAFgIgFQgKgGAFgSQADgRANgOQANgNARgFQAUgGAHAMQAGAJgEATQgHAggbAcQgVAWgTAHgAADgoQgJACgEAUQgEASAOgEQADgBAEgCIADgNQAFgVgIAAIgEABg");
	this.shape_41.setTransform(19.3455,33.2988,0.2657,0.2657);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAtQAZgOANgWIgIAEQgPAFgIgFQgKgFAEgSQAEgRANgOQANgOAQgGQAUgGAHALQAGAJgEAUQgIAggbAdQgTAVgUAJgAAEgpQgKAEgEATQgEASAOgFIAHgDIAEgNQAEgUgJAAIgCAAg");
	this.shape_42.setTransform(17.0918,33.9851,0.2657,0.2657);

	this.instance_3 = new lib.Group_7();
	this.instance_3.setTransform(21.65,33.25,0.2657,0.2657,0,0,0,20.9,9.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLATIAHgfIgHgDIABgHIAWAKIgBAHIgHgEIgGAgg");
	this.shape_43.setTransform(42.4192,28.1479,0.2657,0.2657);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEAWIgIgZIgBgFIgFAZIgIgCIAIgnIAIADIAHAXIABAFIABAAIAAgEIAEgTIAIACIgIAng");
	this.shape_44.setTransform(41.5291,27.8756,0.2657,0.2657);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIAUIAAgJIgMgDIgEAIIgJgCIAUgkIAKADIAFAqgAgBADIAIACIgBgSg");
	this.shape_45.setTransform(40.4464,27.6364,0.2657,0.2657);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAUIAGghIgHgBIABgHIAYAFIgBAGIgIgBIgGAhg");
	this.shape_46.setTransform(39.8751,27.4039,0.2657,0.2657);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgBAVQgNgCAAgQQAAgJAFgHQAGgJAJACQAFAAAEAEIgEAFIgEgCQgHgBgBAIQgDAFAAAFQAAAJAFABIAFgBIABAHQgCABgDAAIgDAAg");
	this.shape_47.setTransform(39.1046,27.3125,0.2657,0.2657);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOATIAIgoIAVADIgCAGIgLgBIgCAKIAKACIgBAFIgKgBIgCALIALABIgCAHg");
	this.shape_48.setTransform(38.3473,27.198,0.2657,0.2657);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAUIAIgoIAVACIgBAHIgMgBIgCAKIAKABIgBAFIgJgBIgEASg");
	this.shape_49.setTransform(37.6432,27.1117,0.2657,0.2657);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAEAVIgKgbIAAAFIgFAVIgIAAIAIgpIAIABIAIAVIABAFIAGgZIAIAAIgIApg");
	this.shape_50.setTransform(36.7598,27.0519,0.2657,0.2657);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIAVIAIgpIAJAAIgIApg");
	this.shape_51.setTransform(36.0225,27.0187,0.2657,0.2657);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAVQgGAAgFgCIADgHQAEACAEAAQAGABAAgGQAAgDgFgEQgGgDAAgGQAAgGAEgEQAEgEAHAAQAFAAAFADIgDAGQgDgCgEAAQgGgBAAAHQAAACAGAEQAGADAAAGQAAAGgEAEQgFAFgFAAIgCgBg");
	this.shape_52.setTransform(35.3848,26.9928,0.2657,0.2657);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAcIAIgpIAUAAIgBAHIgLAAIgCAJIAKAAIgCAHIgJAAIgCALIALAAIgCAHgAAAgRIAGgIQACgCADAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIgJAIg");
	this.shape_53.setTransform(34.6807,26.7995,0.2657,0.2657);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAUIAIgmQAGgDAGAAQAPAAAAAQQAAAJgFAIQgGAJgLABQgIAAgFgCgAAAgOIgGAcIADABQAFAAAEgIQACgHAAgGQAAgIgGAAg");
	this.shape_54.setTransform(33.7773,26.9855,0.2657,0.2657);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAcIAgg7IAHAEIgfA7g");
	this.shape_55.setTransform(32.9137,27.0851,0.2657,0.2657);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEgNIgIAAIABgGIAYgCIgBAHIgIAAIgFAjIgKABg");
	this.shape_56.setTransform(32.4089,27.0253,0.2657,0.2657);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKgTIAIgBIAJAZIABgFIAEgVIAIAAIgIApIgIABIgIgWIgBgFIgBAAIAAAFIgEAXIgJAAg");
	this.shape_57.setTransform(31.4325,27.0785,0.2657,0.2657);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADgUIAKgBIAGAoIgKABIgBgJIgMABIgEAKIgKAAgAgBAGIAJgBIgBgSIgBAAg");
	this.shape_58.setTransform(30.3232,27.1715,0.2657,0.2657);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFgNIgHABIABgHIAYgDIgBAIIgIAAIgGAkIgJAAg");
	this.shape_59.setTransform(29.7386,27.218,0.2657,0.2657);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOAHQAAgIAFgJQAGgKAJgBQAGgBADACIgDAGIgFAAQgGAAgDAJQgCAFAAAGQAAAIAFAAQACAAADgCIABAGQgEAEgEAAIgCAAQgLAAAAgPg");
	this.shape_60.setTransform(28.9614,27.298,0.2657,0.2657);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGgTIAVgDIgCAHIgLABIgCALIAKgBIgBAGIgJABIgDAMIALgCIgBAHIgVADg");
	this.shape_61.setTransform(28.1975,27.3973,0.2657,0.2657);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGgTIAVgDIgCAGIgLACIgCALIAKgBIgBAFIgJACIgEATIgKABg");
	this.shape_62.setTransform(27.5067,27.4969,0.2657,0.2657);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLgSIAJgBIAHATIABAEIABAAIAAgEIAEgWIAJgBIgIAqIgIABIgIgVIgBgEIgGAcIgIABg");
	this.shape_63.setTransform(26.6299,27.6232,0.2657,0.2657);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAgUIAJgCIgIArIgJABg");
	this.shape_64.setTransform(25.8992,27.7494,0.2657,0.2657);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPAWIAEgHQADABAEgBQAGgBAAgFQAAgDgFgDQgGgDAAgEQAAgGAFgFQAEgFAGgCQAHgBADACIgDAGQgDgBgDABQgHABAAAGQAAACAGADQAGADAAAFQAAAGgFAFQgEAFgGACIgGAAIgGgBg");
	this.shape_65.setTransform(25.2682,27.8655,0.2657,0.2657);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAgUIAJgCIgIArIgJACg");
	this.shape_66.setTransform(24.6903,27.9818,0.2657,0.2657);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgQAXIAHgnQAGgEAFgCQAQgDAAAQQgBAJgFAJQgFALgMADIgGAAIgFAAgAACgPIgCABIgGAeIADgBQAFgBADgIQADgIAAgGQAAgHgFAAIgBAAg");
	this.shape_67.setTransform(23.9663,28.1449,0.2657,0.2657);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#23437E").s().p("AkqHDQgIhKA4hKQAug8AygTIABgCQAHgfAGgZQgIAWgGAKQgcAlgbACQgbADgUgdQgTgdgCgqQgQAxgYAfQgZAfgfAKIhPAZQgaBKgqAsQgtAuhIAWQguAMgWgbQgTgYAHgtQAIguAfgpQAjguAzgVIA1gTIApirQjYBVgMh6QgBgmAbgkQAbgjAngMQAVgHAMACIAAABQghAMgRAQQgYASgKAZQgJAYAIAVQATAnA+AAQA3AAA9gdQAahpAihJQATgoAcgqQAzhLA4ghQA/glAXAvQAYA5guBfQg2BuhzBNIguC+IA8gSQAtgNARgOQAVgSAPgtIAsinIBcgaIhCD6QgTBKATgCQAYgEATgnQANgaAQgxIA8jcIBcgXIg8DpQAegnAhgzQAhgzARghQAZgwAMggIBegUIgJAVQgIAZgEAPQgJAqAEAyQAGBEAAAJQgEBBguApQgbAXgmAJQgiAHgRgKQgUgNgEgTQgDgTALgRQATgZASAMQARALgMASQgKAPAAAKQABAKAMgCQAdgGAMg5QAEgWgDg3QgEg5AEgZIgvBJQg2BRgnAtIgLAmQgMAugNAnQggBggwBDQgrA7gnASQgOAGgKAAQgZAAgGgngAjME6QgjAigSAyQgOArAGAVQAGAWAegyQATgjAWg6IARgzgAptFVQgyATgJArQgDARAHALQAGAMAPgBQAtgFAbg6IATg5gAk6jkQgXA5ggBtIgBAHQAbgXAVgZQAogwAhhJQANgeAGglQAFgkgGgPQgDgIgGAAQgVAAg1B6gAD0BtQg2glAXiDQANhFAxg4QA0g+A9ACQAaACAOAVQAnA+gZBvQgNAygZAoQgYAlggAVQgiAVgdAAQgWAAgTgMgAGIjaQgQADgcA4QgPAfgPA1QgOAygEAcQgIBIAQAMQANAJAWgZQAPgSAPgjQASgmAHgnQANhAgBg0QgCgrgOAAIgCAAgAIiBPQg0gEgUgwQgQgnAGhCQAFg7AHgjQAIgoATgxQAphtAyg5QAwg2AggHQAmgJAMA6QAYCJi7CPQgHAtgGAuQgDAZABAZQABAYAFAPQAJAYAagCQAfgCAgguIABADQghBRhEAAIgEAAgAKSm6QgUAngmBtQgTA3gOAuIAqgsQAug6AZhKQAOgvgEgjQgDgQgGAAQgIAAgPAZg");
	this.shape_68.setTransform(24.6041,16.9158,0.2653,0.2653);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AkVH3QgZgHgIgqQgRhsCAhgIgOACQgfAAgVgfQgKgPgFgRIAAgBQgjBIg2AQIhIAXQgbBKgtAsQgvAvhJAWQgmALgVgLQgUgLgHgiQgLg6AjhDQAmhLBFgZIAngNIAgiIQhEAZgmABQgmABgjgUQgjgWgHgpQgGgmAVgkQANgWAYgSQAYgRAbgIQAkgLAdALQAVAIACAKQghAEgRAGQgeAMgSAOQgRAOgIAQQgIASAGAPQAPAfAyABQAwACA8gZQAZhmAihJQATgpAcgpIABgCQAmg3AtglQAygpAmACQAeACAPAgQASApgRBEQgUBHgyBAQgxBAhJAxIgnCfIApgNQAqgLAPgOQARgPANgrIAtirIB5ghIhIETQgJAhAAASQAPgIANgaQAHgPAKgcIAKgdIA+jkIAIgCIBcgYIAVgFIgvC7QAvhFAYgvQAYguAMggIADgHIB/gaIgMAbIgJAVQgIAWgEAPQgIAnAEA1IADgSQAOhIAyg7QA4hEBEACQAgADASAbQARAbAGAlQAJgvAVg3QArhxAyg6QBJhSAsAVQAaAPAJAtQAZCSi9CRIgMBUQgCAXABAYQABAWAEAMQACAIAKADQAdAHAjgxIALgSIAPAfIgEAHQglBchPgDQgsgDgZghQgXgggEg2QgcBghEAtQgdATggABQgkACgbgWQgWgUgJgjQgNA1gnAjQgeAZgpAJQgnAIgUgNQgZgSgEgcQgDgSAIgPIgbAgQgMAxgXBHQggBggyBHQgeAqghAYQgeAWgXAAIgLgBgAjcFhQgPAZgJAZQgHAWgBAWQAEgFAJgQQAXgnAYhJQgOAPgOAYgAppFkQgaAKgNATQgLAPACAPQAAAEAFAGQAGAFAAgDQAEgaARgPQAOgMAcgHIAJgXgAFoiWQgOAdgPAzQgOAygDAaQgHA7AJAJQAFABALgNQgEgXAFgdQAEgcANguQAPgyAOghQAFgKAHgKIAHgIQgBgRgDgJQgMAGgWAtgAALBJQAGgHAIgDQAKgDAIAEQAng2AAgKIgBgdQgqBBgcAlgAksjdQgQAkgXBLIAjgvQAUgfAUgrQAWgwgCgvQgTARglBYgAKemwQgZAvgsCFIAhgyQASggANgmQANgpgCgdg");
	this.shape_69.setTransform(24.6581,17.0051,0.2653,0.2653);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9C8B61").s().p("AkVH1QgbgIgGgpQgNhrB8hgIgOACQgXACgOgIQgOgIgJgVIgEgOIgDgOQgjBHg1AQIhIAXQgbBKgtAsQgvAvhJAVQgoALgWgLQgWgMgCghQgChBAeg9QAkhKBDgZIAngNIAgiHQhEAYgmABQglABgjgUQgkgWgHgpQgGgmAVgkQAQgbAogTQAtgXAfAPQgiAGgbAdQgRATgFATQgFAUAIAOQASAcAxAAQAuAAA8gZQAZhmAihGQARgkAdgqIABgDQAlg3AugkQAygpAmACQAeACAPAgQASApgRBEQgUBHgyBAQgyBAhJAwIgmCeIApgMQAogLAPgMQASgPAMgmIAAgCIAuiwIB5ggIhIESQgJAhAAASQAPgHANgbQAHgPAKgcIAKgdIA+jkIAIgCQAbgHBBgQIAVgFIgvC7QAwhHAXgtQAYguAMggIADgHIB/gaIgNAcIgIAUQgIAXgEAOQgJAqAFAyIADgSQAOhIAyg7QA4hEBEADQAgADASAbQARAcAGAkQAKgyATg0QArhwAzg6QBIhSAsAVQAbAPAIAtQAaCSi9CQQgHApgFArQgCAXABAYQAAAWAEAMQADAIAKADQAdAHAigxIAIgLIAPAfQglBchPgEQgsgDgZghQgYghgDg0QgdBhhDArQgeATgfACQgkABgbgWQgWgUgJgjQgMA1goAiQgeAagpAIQgmAIgVgNQgZgRgEgcQgCgSAHgQQgLAPgQARQgOA7gVA9QghBkgxBDQgeApghAYQgeAWgXAAIgLgBg");
	this.shape_70.setTransform(25.0376,17.3652,0.2653,0.2653);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhvA0QgIgNgFgRIgCgOQCEg2B5gjQgPAigbAkQg3BJg7AQQgPAEgMAAQgkAAgTgeg");
	this.shape_71.setTransform(19.3551,28.9443,0.2654,0.2654);

	this.instance_4 = new lib.Path_1();
	this.instance_4.setTransform(23.8,32.8,0.2654,0.2654,0,0,0,78.2,17.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B13235").s().p("ArIgUQD7hwD0hJQFWhnD4AAQCfAAB0AeQBxAegHAjQgJAjgcAPQgmAThfgBQjMgCjdAfQjeAgi/A8QjLA9h/BSQiKBageBkQgIilAwikg");
	this.shape_72.setTransform(23.18,36.8161,0.2654,0.2654);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FFFFFF","#FFFFFF","#F9FCFE","#EDF7FD","#DAEFFB","#C1E5F8","#C4E6F8","#CEEAF9","#DDF0FB","#F3FAFE","#FFFFFF"],[0,0.8,0.839,0.882,0.922,0.961,0.973,0.98,0.988,0.996,1],-75.8,-10.6,77.1,17).s().p("ArUkBQARgUCahWQDIhwDMhNQJ4jwF4DFQAtAYgDAZIiUMuQgWgcgmgRQglgRg/gLQm1hMo7ESQkeCJjHCag");
	this.shape_73.setTransform(23.9102,20.2371,0.2654,0.2654);

	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(24.05,19.25,0.2655,0.2655,0,0,0,90.6,72.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00ABE9").s().p("ArWjaQDPi5EgiPQI7kbG6CsQBBAZAgAqQAcAjgFAeIixPOQAFgjhvgdQh0geieAAQlMAAnlCzQieA7iTBDQh2A3gHAIg");
	this.shape_74.setTransform(23.9629,19.2167,0.2655,0.2655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.instance_5},{t:this.shape_73},{t:this.shape_72},{t:this.instance_4},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_3},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_2},{t:this.instance_1},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,48,45), null);


(lib.hand_spray_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_spray_png
	this.instance = new lib.hand_spray();
	this.instance.setTransform(-116,-20,0.5801,0.5801);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:true},1).wait(6).to({_off:false},0).wait(32).to({_off:true},1).wait(5));

	// spray_01_png
	this.instance_1 = new lib.spray_anim("synched",0);
	this.instance_1.setTransform(145.1,-19.1,2.0415,0.6998,0,0,0,72.6,44);
	this.instance_1.alpha = 0.5781;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(32).to({startPosition:0},0).to({_off:true},1).wait(5));

	// spray_01_png
	this.instance_2 = new lib.spray_anim("synched",0);
	this.instance_2.setTransform(153.45,-19.1,2.1504,2.649,0,0,0,72.8,44);
	this.instance_2.alpha = 0.5781;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(29).to({startPosition:2},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(32).to({startPosition:2},0).to({_off:true},1).wait(5));

	// spray_01_png
	this.instance_3 = new lib.spray_anim("synched",0);
	this.instance_3.setTransform(145.1,-19.1,2.0415,2.0415,0,0,0,72.6,44.1);
	this.instance_3.alpha = 0.5781;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(27).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(32).to({startPosition:0},0).to({_off:true},1).wait(5));

	// spray_01_png
	this.instance_4 = new lib.spray_anim("synched",0);
	this.instance_4.setTransform(145.1,-19.1,2.0415,2.0415,0,0,0,72.6,44.1);
	this.instance_4.alpha = 0.5781;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(32).to({startPosition:0},0).to({_off:true},1).wait(5));

	// Layer_8
	this.instance_5 = new lib.spray_mist("synched",0);
	this.instance_5.setTransform(193.5,-7.55,1.0752,1.0752,0,0,0,150,150.1);
	this.instance_5.alpha = 0.3398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(27).to({startPosition:1},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(32).to({startPosition:0},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-327,616,612.9);


(lib.copy_01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AANBqIAAiqIgoAlIgVgZIA/g1IAiAAIAADTg");
	this.shape.setTransform(8.55,21.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).wait(52).to({_off:true},1).wait(8).to({_off:false},0).wait(35));

	// numbers_scrolling
	this.instance = new lib.numbers_scrolling("synched",2);
	this.instance.setTransform(26.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_1.setTransform(28.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},37).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_1}]},52).to({state:[]},1).to({state:[{t:this.shape_1}]},8).wait(35));

	// _
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgcAoIAVhPIAkAAIgaBPg");
	this.shape_2.setTransform(59.875,31.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(31).to({_off:false},0).wait(72).to({_off:true},1).wait(8).to({_off:false},0).wait(35));

	// numbers_scrolling
	this.instance_1 = new lib.numbers_scrolling("synched",1);
	this.instance_1.setTransform(44.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(46.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_3}]},53).to({state:[]},1).to({state:[{t:this.shape_3}]},8).wait(35));

	// numbers_scrolling
	this.instance_2 = new lib.numbers_scrolling("synched",7);
	this.instance_2.setTransform(71.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_4.setTransform(73.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.shape_4}]},24).to({state:[{t:this.shape_4}]},55).to({state:[]},1).to({state:[{t:this.shape_4}]},8).wait(35));

	// numbers_scrolling
	this.instance_3 = new lib.numbers_scrolling("synched",3);
	this.instance_3.setTransform(88.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(90.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.shape_5}]},33).to({state:[{t:this.shape_5}]},57).to({state:[]},1).to({state:[{t:this.shape_5}]},8).wait(35));

	// numbers_scrolling
	this.instance_4 = new lib.numbers_scrolling("synched",0);
	this.instance_4.setTransform(107.1,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_6.setTransform(109.025,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_6}]},44).to({state:[{t:this.shape_6}]},59).to({state:[]},1).to({state:[{t:this.shape_6}]},8).wait(35));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},103).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},8).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,234.79999999999998,46);


// stage content:
(lib.LysolGeneric_LDS_ENDFRAME_720x540_en = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(449).call(this.frame_449).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4PgqLMBwfAAAMAAABUXMhwfAAAg");
	this.shape.setTransform(360,270);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	// what_it_takes
	this.instance = new lib.whatittakes();
	this.instance.setTransform(599.7,408.1,2.3025,2.3025,0,0,0,32.5,11);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(356).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(85));

	// product
	this.instance_1 = new lib.product();
	this.instance_1.setTransform(836.25,229.85,2.3025,2.3025,0,0,0,35.5,54.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(349).to({_off:false},0).to({x:595.05},9,cjs.Ease.get(1)).wait(92));

	// bg_blue
	this.instance_2 = new lib.bg_blue();
	this.instance_2.setTransform(842.2,270,2.3025,2.1599,0,0,0,52.1,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342).to({_off:false},0).to({regX:52,x:600.3},9,cjs.Ease.get(1)).wait(99));

	// copy_04
	this.instance_3 = new lib.copy_04();
	this.instance_3.setTransform(22.8,525.05,2.3025,2.3025,0,0,0,61.1,12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(335).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(106));

	// cta
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(195,363,1,1,0,0,0,92,31.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(327).to({_off:false},0).to({x:125,alpha:1},9).wait(114));

	// cta_copy
	this.instance_5 = new lib.copy_03();
	this.instance_5.setTransform(265.85,226.8,2.3025,2.3025,0,0,0,82,27.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(322).to({_off:false},0).to({x:215.8,alpha:1},13,cjs.Ease.get(1)).wait(115));

	// copy_02
	this.instance_6 = new lib.copy_02();
	this.instance_6.setTransform(360.95,266.95,2.3025,2.3025,0,0,0,122.8,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(269).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},38).wait(128));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(656.1,478.1,1.8812,1.8812,0,0,0,24.5,23);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},144).wait(128));

	// bg_light_blue
	this.instance_8 = new lib.bg_lightblue();
	this.instance_8.setTransform(235.2,-270,2.3999,2.16,0,0,0,98,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(258).to({_off:false},0).to({y:270},11,cjs.Ease.get(1)).wait(181));

	// hand
	this.instance_9 = new lib.hand_spray_1("single",0);
	this.instance_9.setTransform(-48.1,435.05,1,1,-22.7187,0,0,-0.1,112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).to({regX:0,rotation:0,x:105,y:335},4,cjs.Ease.get(1)).wait(3).to({mode:"synched"},0).to({regX:0.1,rotation:4.9513,x:100.95,startPosition:12},20,cjs.Ease.get(1)).to({regX:-0.1,rotation:-7.0392,x:99.8,y:345,startPosition:38},20,cjs.Ease.get(1)).to({regX:0,rotation:0,x:105,y:335,mode:"single",startPosition:0},33,cjs.Ease.get(1)).to({y:725},9,cjs.Ease.get(1)).wait(183));

	// spray
	this.instance_10 = new lib.spray_mist("synched",0);
	this.instance_10.setTransform(225,275,0.6263,0.6263,0,0,0,150,150.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).to({regX:149.8,regY:149.8,scaleX:1.486,scaleY:1.486,x:224.9,y:274.65,alpha:0.2813},40,cjs.Ease.get(1)).to({scaleX:2.1808,scaleY:2.1808,x:225,y:274.75,alpha:0},10).to({_off:true},4).wait(211));

	// copy_01c
	this.instance_11 = new lib.copy_01c();
	this.instance_11.setTransform(111.65,511.15,2.3025,2.3025,0,0,0,104.5,8.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({alpha:1},13).wait(91).to({alpha:0},56).to({_off:true},1).wait(195));

	// copy_01b
	this.instance_12 = new lib.copy_01b("single",0);
	this.instance_12.setTransform(298.85,360.45,2.0722,2.0722,0,0,0,136.1,25.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({y:339.75,alpha:1},15,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({x:400.4,startPosition:51},51,cjs.Ease.get(0.2)).wait(53).to({startPosition:112},0).to({alpha:0,startPosition:137},56).to({_off:true},1).wait(195));

	// copy_01a
	this.instance_13 = new lib.copy_01a();
	this.instance_13.setTransform(360.9,291.05,2.0722,2.0722,0,0,0,91,22.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({y:270.3,alpha:1},15,cjs.Ease.get(1)).wait(112).to({alpha:0},56).to({_off:true},1).wait(195));

	// copy_01
	this.instance_14 = new lib.copy_01();
	this.instance_14.setTransform(386.35,284.8,2.0722,2.0722,0,0,0,84.3,25.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1},15).wait(24).to({y:216.4},15,cjs.Ease.get(1)).wait(120).to({alpha:0},56).to({_off:true},1).wait(195));

	// germs
	this.instance_15 = new lib.germs_1("synched",0,false);
	this.instance_15.setTransform(-150.75,-16.05,0.533,0.533,0,0,0,0.1,0);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(104).to({startPosition:112},0).to({alpha:0,startPosition:137},56).to({_off:true},1).wait(195));

	// white_box
	this.instance_16 = new lib.whitebox();
	this.instance_16.setTransform(360,270,2.3999,2.1601,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({alpha:0.6914},8).wait(39).to({alpha:0.5},31,cjs.Ease.get(1)).wait(356));

	// logo
	this.instance_17 = new lib.logo();
	this.instance_17.setTransform(656.1,478.1,1.8812,1.8812,0,0,0,24.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(425));

	// boy
	this.instance_18 = new lib.girl();
	this.instance_18.setTransform(-61.65,61.1,0.5333,0.5333,0,0,0,169.4,144.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:0.0508},31,cjs.Ease.get(1)).wait(356));

	// BG
	this.instance_19 = new lib.whitebox();
	this.instance_19.setTransform(360,270,2.4,2.1601,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(450));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-270,997.8000000000001,1149);
// library properties:
lib.properties = {
	id: '3CE4C820892743FB9D5BF0281A417E72',
	width: 720,
	height: 540,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Group_1_0.png?1574351548020", id:"Group_1_0"},
		{src:"images/boy.png?1574351548020", id:"boy"},
		{src:"images/germs.png?1574351548020", id:"germs"},
		{src:"images/hand_spray.png?1574351548020", id:"hand_spray"},
		{src:"images/productpngcopy.png?1574351548020", id:"productpngcopy"},
		{src:"images/spray_01.png?1574351548020", id:"spray_01"},
		{src:"images/spray_02.png?1574351548020", id:"spray_02"},
		{src:"images/whatittaketoprotectpngcopy.png?1574351548020", id:"whatittaketoprotectpngcopy"}
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