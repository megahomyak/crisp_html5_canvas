function crispify(ctx) {
    let dpr = window.devicePixelRatio;
    let widthPx = Math.floor(ctx.canvas.clientWidth * dpr);
    let heightPx = Math.floor(ctx.canvas.clientHeight * dpr);
    ctx.canvas.width = widthPx;
    ctx.canvas.height = heightPx;
    ctx.scale(dpr, dpr);
}
