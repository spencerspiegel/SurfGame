$(document).on('ready' , function(){

var contentStage = new Kinetic.Stage({
		container:'content',
		width:700,
		height:300
	});


	var waveLayer = new Kinetic.Layer();

	var whiteWash = new Kinetic.Layer();
	
	var checkID = whiteWash.isVisible();
	console.log(checkID);
	console.log(checkID == true);

 	var whiteWash2 = new Kinetic.Layer();
 	whiteWash2.id('whiteWash2');

	

	var waveFrame = new Kinetic.Shape({
		sceneFunc: function(context){
			context.beginPath();
			context.moveTo(2100,50);      //////right controls top right wave height//////
			context.lineTo(90,415);
			context.quadraticCurveTo(25,290,420,50); ////second from right moves top left, right controls top left/////
			context.closePath();
			context.fillStrokeShape(this);
		},
		fill: '#00D2FF',
		stroke: 'blue',
		strokeWidth: 6
	});

		waveLayer.add(waveFrame);

/////////BACKGROUND IS REQUIRED FOR HIDING OBJECTS////////////////

		var background = new Kinetic.Shape({
		sceneFunc: function(context){
			context.beginPath();
			context.moveTo(90,50);      //////right controls top right wave height//////
			context.lineTo(90,415);
			context.quadraticCurveTo(25,290,420,50); ////second from right moves top left, right controls top left/////
			context.closePath();
			context.fillStrokeShape(this);
		},
		fill: 'white',
	});


	whiteWash.add(background);
	whiteWash2.add(background); 

/////////PRIMARY WHITE WASH POSITION//////////////////

		var waveSpline1 = new Kinetic.Line({
		points: [110,300,179,134,420,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1,
	});

		var waveSpline2 = new Kinetic.Line({
		points: [90,280,159,114,340,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1
	});

		var waveSpline3 = new Kinetic.Line({
		points: [70,260,129,94,275,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1
	});

		var waveSpline4 = new Kinetic.Line({
		points: [50,240,109,74,210,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1
	});

		var waveSpline5 = new Kinetic.Line({
		points: [40,240,90,54,175,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1
	});
		var waveSpline6 = new Kinetic.Line({
		points: [30,240,65,34,125,0],
		stroke: 'blue',
		strokeWidth: 5,
		lineCap: 'round',
		tension: 1
	});




	
	waveSpline1.move({x:0,y:50});
	waveSpline2.move({x:0,y:55});
	waveSpline3.move({x:0,y:60});
	waveSpline4.move({x:0,y:65});
	waveSpline5.move({x:0,y:65});
	waveSpline6.move({x:0,y:70});

	whiteWash.add(waveSpline1);
	whiteWash.add(waveSpline2);
	whiteWash.add(waveSpline3);
	whiteWash.add(waveSpline4);
	whiteWash.add(waveSpline5);
	whiteWash.add(waveSpline6);


	////////////SECONDARY WHITEWASH POSITION/////////////////


  	var waveSpline1 = new Kinetic.Line({
               	points: [120,300,169,134,420,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1,
        });

                var waveSpline2 = new Kinetic.Line({
                points: [90,280,149,114,320,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline3 = new Kinetic.Line({
                points: [70,260,119,94,250,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline4 = new Kinetic.Line({
                points: [55,240,100,74,200,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });

                var waveSpline5 = new Kinetic.Line({
                points: [40,250,90,24,160,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });
                var waveSpline6 = new Kinetic.Line({
                points: [15,240,40,14,95,0],
                stroke: 'blue',
                strokeWidth: 5,
                lineCap: 'round',
                tension: 1
        });



        waveSpline1.move({x:0,y:50});
        waveSpline2.move({x:5,y:55});
        waveSpline3.move({x:10,y:60});
        waveSpline4.move({x:5,y:65});
        waveSpline5.move({x:0,y:65});
        waveSpline6.move({x:9,y:60});

        whiteWash2.add(waveSpline1);
        whiteWash2.add(waveSpline2);
        whiteWash2.add(waveSpline3);
        whiteWash2.add(waveSpline4);
        whiteWash2.add(waveSpline5);
        whiteWash2.add(waveSpline6);

        var wipeOut = new Kinetic.Text({
        	x:450,
        	y:75,
        	text: 'WIPE OUT!',
        	fontSize: 30,
        	fontFamily: 'helvetica',
        	fill: 'white'
        })

        // waveLayer.add(wipeOut);
        // wipeOut.isVisible()==false;
        // var check = wipeOut.isVisible();
        // console.log(check);

   //////////////////////////////////////

    var rectangle = new Kinetic.Rect({
   	x:350,
   	y:200,
   	width: 20,
   	height: 20,
   	fill: 'green',
   	stroke: 'black',
   	strokeWidth:1
   });

   waveLayer.add(rectangle);

   var rectangleY = 200;
   var direction = 0;

   var animation = new Kinetic.Animation(function(){
   	rectangle.setY(rectangleY);
   	rectangleY+=direction*1;
   },waveLayer);

   animation.start();

   contentStage.on('mousedown' , function(){direction=-3});
   contentStage.on('mouseleave mouseup' , function(){direction=3});

///////////////////////////////////////////
 	
 	var shark = new Kinetic.Rect({
 		width: 10,
 		height: 10,
 		y:220,
 		fill:'black'
 	});

 	waveLayer.add(shark);

 	var sharkX = 700;
 	attackDirection = 0;

 	var sharkAttack = new Kinetic.Animation(function(){
 		shark.setX(sharkX);
 		sharkX-=2;
 	},waveLayer);

 	setInterval(function(){
 		sharkAttack.start()
 	},1000);


//////////////////////////////////////////
    contentStage.add(waveLayer);
    contentStage.add(whiteWash);
    contentStage.add(whiteWash2);
  

    whiteWash2.hide();
   

    setInterval(function(){

    	if(whiteWash.isVisible() == true){
    		whiteWash.hide();
    	}else{
    		whiteWash.show()
    	};

    },500);


    setInterval(function(){

    	if(whiteWash2.isVisible() == false){
    		whiteWash2.show();
    	}else{
    		whiteWash2.hide()
    	};
    },500);


   /////////////////////////////







  



















})