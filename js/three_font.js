
function init() {

  var raycaster;
  var mouse;
  var INTERSECTED;

    // input type='file' 取到的路径是经过隐藏的路径（流浪器安全策略*/fakepath/*/）所以需要通过file取
    function getObjectURL(file) { 
      // 1.将file转base64
      // var reads= new FileReader();
      // reads.readAsDataURL(this.files[0]);   
      // reads.onload=function (e) {
      //   const a = this.result;
      // };


      // 2.将file转真实文档路径 
      var url = null;  
      if (window.createObjcectURL != undefined) {  
          url = window.createOjcectURL(file);  
      } else if (window.URL != undefined) {  
          url = window.URL.createObjectURL(file);  
      } else if (window.webkitURL != undefined) {  
          url = window.webkitURL.createObjectURL(file);  
      }  
      return url;  
    }

    document.getElementById('selectFile').addEventListener('change',function(){
      const url = getObjectURL(this.files[0]);
      var circleMaterial = new THREE.MeshBasicMaterial({
        // map: new THREE.TextureLoader().load('http://imgsrc.baidu.com/imgad/pic/item/314e251f95cad1c85d6d7d31743e6709c83d51d6.jpg'
        // map: new THREE.TextureLoader().load('https://zhougod1.github.io/images/panorama/demo/view/room.jpg'
        // map: new THREE.TextureLoader().load('images/panorama/demo/view/room.jpg'
        // ,function(){
        //   document.getElementById('loading').style.visibility = 'hidden'
        // })
        map: new THREE.TextureLoader().load(url)
  
      });   
  
      var circle = new THREE.Mesh(boxGeometry, circleMaterial);
      // circle.position.set(0,-50,-50)
      scene.add(circle)
      // circleMaterial.map = new THREE.TextureLoader().load(url);
    })

    // 跟踪鼠标动态设置射线点
    // document.getElementById('container').addEventListener('mousemove', function(e){
    //   mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    //   mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    // },false);


    // 场景设置（创建场景，设置渲染器，设置摄像机，设计灯光）
    function setScene(){

      // 创建射线
      // raycaster = new THREE.Raycaster();
      // mouse = new THREE.Vector2();

      // 获取浏览器窗口的宽高，后续会用
      width = window.innerWidth - 40;
      height = window.innerHeight - 40;

      // 创建一个场景
      scene = new THREE.Scene()

      // 创建一个具有透视效果的摄像机
      camera = new THREE.PerspectiveCamera(45, 1, 1, 1000)

      // 设置摄像机位置，并将其朝向场景中心
      camera.position.set(0, 125, 125)
      camera.lookAt(new THREE.Vector3(0, 100, 0))

      // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
      renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      // renderer = new THREE.CSS3DRenderer();

      // 设置渲染器的清除颜色（即背景色）和尺寸
      renderer.setClearColor(0xffffff)
      renderer.setSize(height, height)

      // 将渲染器的输出（此处是 canvas 元素）插入到 body
      document.getElementById('container').appendChild(renderer.domElement)

      // 创建 环境光
      var ambientLight = new THREE.AmbientLight(0x777777)
      scene.add(ambientLight)

      // 添加聚光灯000000000000000000000000000000000000000000000
      var spotLight = new THREE.SpotLight(0xaaaaaa)
      spotLight.position.set(-40, 40, 80)
      scene.add(spotLight)
    }
    setScene();

    function render() {
      // 渲染，即摄像机拍下此刻的场景
      renderer.render(scene, camera)
      document.addEventListener('keyup', (e) => {
	    if(e.keyCode == 37)
		camera.position.x -= 10
	    if(e.keyCode == 38)
		camera.position.y -= 10
	    if(e.keyCode == 39)
		camera.position.x += 10
	    if(e.keyCode == 40)  
		camera.position.y += 10  
	})
      // // 通过摄像机和鼠标位置更新射线
      // raycaster.setFromCamera( mouse, camera );

      // // 计算物体和射线的焦点
      // var intersects = raycaster.intersectObjects( scene.children );
      // if ( intersects.length > 0 ) {
      //   if ( INTERSECTED != intersects[ 0 ].object ) {
      //     if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
      //     INTERSECTED = intersects[ 0 ].object;
      //     INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      //     INTERSECTED.material.color.setHex( 0x00ff00 );
      //   }
      // } else {
      //   if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
      //   INTERSECTED = null;
      // }

      // requestAnimationFrame在渲染完成后会执行函数
      // 做了一个递归，requestAnimationFrame会根据浏览器完成最高渲染次数 (chrome 是 60/s) ，
      // 其实相当完成了一个定时器setInterval，不过requestAnimationFrame的优点在于会自动符合浏览器的刷新频率，
      // 而且requestAnimationFram在切换tab后会停止，重回tab继续，实现性能节省
      requestAnimationFrame(render)
    }

		// 初始化摄像机插件（用于拖拽旋转摄像机，产生交互效果）
		var orbitControls = new THREE.OrbitControls(camera);
		orbitControls.autoRotate = true
		orbitControls.enableZoom = false;





		var boxGeometry = new THREE.SphereGeometry(height/2,50,50)

    boxGeometry.scale(-1,1,1);
		// var edgesGeometry = new THREE.SphereBufferGeometry(boxGeometry)
		// var circleMaterial = new THREE.MeshBasicMaterial({
			// map: new THREE.TextureLoader().load('http://imgsrc.baidu.com/imgad/pic/item/314e251f95cad1c85d6d7d31743e6709c83d51d6.jpg'
      // map: new THREE.TextureLoader().load('https://zhougod1.github.io/images/panorama/demo/view/room.jpg'
      // map: new THREE.TextureLoader().load('images/panorama/demo/view/room.jpg'
      // ,function(){
      //   document.getElementById('loading').style.visibility = 'hidden'
      // })
      // map: new THREE.TextureLoader().load()

		// });

    // var circle = new THREE.Mesh(boxGeometry, circleMaterial);
		// circle.position.set(0,-50,-50)
    // scene.add(circle)
    






    // 平面
    // // 创建一个平面 PlaneGeometry(width, height, widthSegments, heightSegments)
    // var planeGeometry = new THREE.PlaneGeometry(120, 90, 1, 1)
    // // 创建 Lambert 材质：会对场景中的光源作出反应，但表现为暗淡，而不光亮。
    // var planeMaterial = new THREE.MeshLambertMaterial({
    //   color: 0xffffff
    // })
    // var plane = new THREE.Mesh(planeGeometry, planeMaterial)
    // // 以自身中心为旋转轴，绕 x 轴顺时针旋转 45 度
    // plane.rotation.x = -0.5 * Math.PI
    // plane.position.set(0, -10.5, -20)
    // scene.add(plane)

    
    // 圆
    // // 创建红色的线材质
    // var lineMaterial = new THREE.LineBasicMaterial({
    //   color: 0xff0000
    // })
    // //  创建一个半径为 8 个球体
    // var boxGeometry = new THREE.SphereGeometry(8)
    // // This can be used as a helper object to view the edges of a Geometry object
    // var edgesGeometry = new THREE.EdgesGeometry(boxGeometry)
    // var edgesLine = new THREE.LineSegments(edgesGeometry, lineMaterial)
    // edgesLine.position.x = -30
    // scene.add(edgesLine)
    // // This can be used as a helper object to view a Geometry object as a wireframe.
    // var wrieframe = new THREE.WireframeGeometry(boxGeometry)
    // var wrieframeLine = new THREE.LineSegments(wrieframe, lineMaterial)
    // scene.add(wrieframeLine)

    // 创建一个二维形状：三角形
    // function drawShape() {
    // var shape = new THREE.Shape();
    //  shape.moveTo(0, -10);
    //  straight line upwards
    //  shape.lineTo(00, 10);
    //  shape.lineTo(20, 10);
    //  shape.lineTo(0, -10);
    //  return the shape
    //   return shape;
    // }



    // function loadTexture(d){
    //   var b = new THREE.Texture()
    //       b.image = new THREE.TextureLoader().load(d);
    //   var a = new THREE.MeshBasicMaterial({
    //       map: b,
    //       overdraw: 0.5
    //   });
    //   return a
    // }

    // var index = 0;
    // var b = "mobile";
    // var a = [loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_f.jpg"), loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_b.jpg"), loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_u.jpg"), loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_d.jpg"), loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_l.jpg"), loadTexture(load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_r.jpg")];
		// var c = new THREE.Mesh(new THREE.BoxGeometry(300, 300, 300, 7, 7, 7), new THREE.MultiMaterial(a));
		



		// 全景六面体
		// var index = 0;
    // var b = "mobile";
    // var url = [load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_f.jpg",
    //  load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_b.jpg",
    //  load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_u.jpg",
    //  load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_d.jpg",
    //  load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_l.jpg",
    //  load_url + "/" + villaId + "/" + name_arr[index] + "/" + b + "_r.jpg"];
		// 	var sides = [
		// 	{
		// 		url: url[0],  //右侧
		// 		position: [ -512, 0, 0 ],
		// 		rotation: [ 0, Math.PI / 2, 0 ]
		// 	},
		// 	{
		// 		url: url[1], //左侧
		// 		position: [ 512, 0, 0 ],
		// 		rotation: [ 0, -Math.PI / 2, 0 ]
		// 	},
		// 	{
		// 		url: url[2], //上侧
		// 		position: [ 0,  512, 0 ],
		// 		rotation: [ Math.PI / 2, 0, Math.PI ]
		// 	},
		// 	{
		// 		url: url[3], //下侧
		// 		position: [ 0, -512, 0 ],
		// 		rotation: [ - Math.PI / 2, 0, Math.PI ]
		// 	},
		// 	{
		// 		url: url[4], //前
		// 		position: [ 0, 0,  512 ],
		// 		rotation: [ 0, Math.PI, 0 ]
		// 	},
		// 	{
		// 		url: url[5], //后
		// 		position: [ 0, 0, -512 ],
		// 		rotation: [ 0, 0, 0 ]
		// 	}
		// 	];
		// 	//将六个图片添加到场景中
		// 	for ( var i = 0; i < sides.length; i ++ ) {
		// 		var side = sides[ i ];
		// 		var element = document.createElement( 'img' );
		// 		element.width = 1026; // 2 pixels extra to close the gap.
		// 		element.src = side.url;
		// 		//CSS3DObject 是拓展出去的方法，原型是object3D，见CSS3DRenderer.js
		// 		var object = new THREE.CSS3DObject( element );
		// 		object.position.fromArray( side.position );
		// 		object.rotation.fromArray( side.rotation );
		// 		scene.add( object );
		// 	}






    // 创建一个法向量材质：其颜色取决于面的法向量的方向
    // var meshMaterial = new THREE.MeshNormalMaterial({
    //   flatShading: THREE.FlatShading,
    //   transparent: true,
    //   opacity: 1
    // })
    // ExtrudeGeometry 的参数，用于指定如何拉伸二维形状
    // var options = {
    //   amount: 2,
    //   bevelThickness: 2,
    //   bevelSize: 0.5,
    //   bevelSegments: 3,
    //   bevelEnabled: true,
    //   curveSegments: 12,
    //   steps: 1
    // }

    // 将一个二维形状按照指定参数向 Z 轴拉伸
    // var extrudeGeometry = new THREE.ExtrudeGeometry(drawShape(), options)
    // var mesh = new THREE.Mesh(extrudeGeometry, meshMaterial)
    // mesh.position.x = 20
    // scene.add(mesh)
    // 创建一个字体加载器

    // var fontLoader = new THREE.FontLoader()

    // 字体的本质就是一堆类似 SVG 的路径，因此直线占比越高越好。
    // fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    //   var textOptions = {
    //     font: font,
    //     size: 18,
    //     height: 4,
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 2,
    //     bevelSize: 2,
    //     bevelSegments: 2
    //   }

    //   // TextGeometry 的本质就是 ExtrudeGeometry，将二维字体按照指定参数向 Z 轴拉伸
    //   var textGeometry = new THREE.TextGeometry('Yumiko', textOptions)
    //   var textMesh = new THREE.Mesh(textGeometry, meshMaterial)
    //   textMesh.position.set(-44, -9, -40)
    //   scene.add(textMesh)

    //   render()
    // })
     render()
  }

