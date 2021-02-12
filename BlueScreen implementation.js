// write your code here
var fgImage=new SimpleImage("drewRobert.png");
var bgImage=new SimpleImage("dinos.png");
var output=new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

for(var pixel of fgImage.values())
{
    if(pixel.getGreen()==255)
    {
        var x=pixel.getX();
        var y=pixel.getY();
        var bgPixel=bgImage.getPixel(x,y);
        output.setPixel(x,y,bgPixel)
    }
    
    else
    {
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}
