!function() {
	function getAttr(node, key, def) {
		return node.getAttribute(key) || def
	}

	function getNode(name) {
		return document.getElementsByTagName(name)
	}

	function getRandomColor() {
		var r = ~~(random() * 255),
			g = ~~(random() * 255),
			b = ~~(random() * 255)
		
		return `${r},${g},${b}`
	}

	function getOptions() {
		var dom = getNode("script"),
			size = dom.length,
			last = dom[size - 1];
		return {
			length: size,
			zIndex: getAttr(last, "zIndex", -1),
			opacity: getAttr(last, "opacity", 0.5),
			color: getAttr(last, "color", "0,0,0"),
			count: getAttr(last, "count", 99)
		}
	}

	function setWidth() {
		width = canvas.width = window.innerWidth || 
								document.documentElement.clientWidth || 
								document.body.clientWidth, 
		height = canvas.height = window.innerHeight || 
							document.documentElement.clientHeight || 
							document.body.clientHeight
	}

	function pointRender() {
		context.clearRect(0, 0, width, height);
		var w = [mouse].concat(points);
		var x, v, A, B, z, y;
		points.forEach(function(point) {
			point.x += point.xa, 
			point.y += point.ya, 
			point.xa *= point.x > width || point.x < 0 ? -1 : 1, 
			point.ya *= point.y > height || point.y < 0 ? -1 : 1, 
			context.fillRect(point.x - 0.5, point.y - 0.5, 1, 1);
			for (v = 0; v < w.length; v++) {
				x = w[v];
				if (point !== x && null !== x.x && null !== x.y) {
					B = point.x - x.x, 
					z = point.y - x.y, 
					y = B * B + z * z;
					y < (x.max * 4) && 
					(
						x === mouse && y >= x.max / 2 && (point.x -= 0.03 * B, point.y -= 0.03 * z), 
						A = (x.max - y) / x.max, 
						context.beginPath(), 
						context.lineWidth = A, 
						context.strokeStyle = "rgb(" + options.color + "," + (A * 0.2) + ")", 
						context.moveTo(point.x, point.y), 
						context.lineTo(x.x, x.y), 
						context.stroke()
					)
				}
			}
			w.splice(w.indexOf(point), 1)
		}), render(pointRender)
	}
	var canvas = document.createElement("canvas"),
		options = getOptions(),
		id = "c_n" + options.length,
		context = canvas.getContext("2d"),
		width, 
		height, 
		// 使用浏览器的动画api会自己更新帧
		render = window.requestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame || 
			window.oRequestAnimationFrame || 
			window.msRequestAnimationFrame || 
			function(cb) {
				// 手动轮询
				window.setTimeout(cb, 1000 / 45)
			},
		random = Math.random,
		mouse = {
			x: null,
			y: null,
			max: 20000
		},
		lineRange = [];
	canvas.id = id;
	canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + options.zIndex + ";opacity:" + options.opacity;
	getNode("body")[0].appendChild(canvas);
	setWidth(), 
	window.onresize = setWidth;
	window.onmousemove = function(i) {
		i = i || window.event, 
		mouse.x = i.clientX, 
		mouse.y = i.clientY
	}, 
	window.onmouseout = function() {
		mouse.x = null, mouse.y = null
	};
	for (var points = [], p = 0; options.count > p; p++) {
		var h = random() * width,
			g = random() * height,
			q = 2 * random() - 1,
			d = 2 * random() - 1;

		points.push({
			x: h,
			y: g,
			xa: q,
			ya: d,
			max: 6000
		})
	}
	setTimeout(function() {
		pointRender()
	}, 100)
}();