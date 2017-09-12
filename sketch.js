function setup() {
    createCanvas(640, 460);
    var blue = color("#7BFDFF")
    var white = color("#FFFFFF");
    var black = color("#000000")
    var orange = color("#FF6400")
    var green = color("#00C20E")
    var yellow = color("#FAFF00")


    background(blue);
    
    /* ball */
    fill(white);
    stroke(black);
    ellipse(300, 295, 180, 180);
    
    /* spots */

    fill(black)
    rect(280, 205, 35, 35, 10);

    fill(black)
    rect(280, 280, 35, 35, 10);

    fill(black)
    rect(220, 245, 35, 35, 10);

    fill(black)
    rect(345, 245, 35, 35, 10);

    fill(black)
    rect(240, 330, 35, 35, 10);

    fill(black)
    rect(325, 330, 35, 35, 10);

    /* grass */
    fill(green);
    ellipse(320, 460, 640, 150);

    /* sun */
    fill(yellow);
    stroke(orange);
    ellipse(600, 50, 180, 180);

    
}