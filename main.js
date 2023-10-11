let theCanvas = document.getElementById('our-canvas'),

    theContext = theCanvas.getContext('2d');

    w = theCanvas.width;
    h = theCanvas.height;


    // Draw Chart Colume

    theContext.fillStyle = "#d35400";
    theContext.fillRect(50, 50, 60, h - 50);

    theContext.fillStyle = "#16a085";
    theContext.fillRect(150, 100, 60, h - 100);

    theContext.fillStyle = "#8e44ad";
    theContext.fillRect(250, 150, 60, h - 150);

    theContext.fillStyle = "#c0392b";
    theContext.fillRect(350, 200, 60, h - 200);

    theContext.fillStyle = "#27ae60";
    theContext.fillRect(450, 250, 60, h - 250);

    theContext.fillStyle = "#2c3e50";
    theContext.fillRect(550, 300, 60, h - 300);