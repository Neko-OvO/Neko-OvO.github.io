let angle = 0; // 初始角度

document.getElementById('ICO').addEventListener('click', function () {
    angle += 360; // 每次点击增加 360 度
    this.style.transform = `rotate(${angle}deg)`; // 设置旋转角度
});
