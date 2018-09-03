let nums = [];
let cols = [];
function setup() {
	createCanvas(800, 600);
	for (let i = 0; i < width; i++) {
		nums.push(random()*height);
		cols.push([random(255), random(255), random(255), random(255)]);
	}
}

function draw() {
	background(0);
	BubbleStep();
	for (let i = 0; i < nums.length; i++) {
		stroke(cols[i][0], cols[i][1], cols[i][2], cols[i][3]);
		line(i, height, i, nums[i]);
	}
}

function BubbleStep () {
	for (let i = 0; i < nums.length-1; i++) {
		if (nums[i] > nums[i+1]) {
			let temp = nums[i];
			nums[i] = nums[i+1];
			nums[i+1] = temp;
		}
	}
}