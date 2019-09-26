import chroma from 'chroma-js'


// var rgbToHex = function (rgb) { 
//     var hex = Number(rgb).toString(16);
//     if (hex.length < 2) {
//          hex = "0" + hex;
//     }
//     return hex;
//   };

//   var fullColorHex = function(r,g,b) {   
//     var red = rgbToHex(r);
//     var green = rgbToHex(g);
//     var blue = rgbToHex(b);
//     return red+green+blue;
//   };

//   var colorShades = function(r, g, b){
//     var max = Math.max(r,Math.max(g,b));
//     var step = 255 / (max * 10);
//     var red = (r * step, g * step, b * step)
//     var green =  (r * step * 2, g * step * 2, b * step * 2)
//     var blue = (r * step * 3, g * step * 3, b * step * 3)
//     //   var red = rgbToHex(Math.round(11*r/10))
//     //   var green = rgbToHex(Math.round(11*g/10))
//     //   var blue = rgbToHex(Math.round(11*b/10))
//     console.log(red, green,blue)
//       return red+green+blue;
//   }


var getPaletteShades = function (currentPalette){
  let colorShade;
  let shades = [];
  let shadeInfo;
  // console.log(currentPalette);
  // 10 shade levels for a slider
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  // for each color in the color palette, make 10 different shades
  for(let i = 0; i < currentPalette.colors.length; i++){
    // color from the palette
    const baseColor = currentPalette.colors[i].color;
    // darkest shade, not black
    const darkestShade = chroma(baseColor).darken(4);
    // lightest shade, not white
    const brightestShade = chroma(baseColor).brighten(2.6)
    // make 10 shades of one color
    colorShade = chroma.scale([brightestShade, baseColor, darkestShade]).colors(10);
      
    // make name and color code format for each shade
    for(let j=0; j < colorShade.length; j++){
      shadeInfo = {
        name: currentPalette.colors[i].name + " " + levels[j],
        hex: colorShade[j],
        rgb: chroma(colorShade[j]).css(),
        rgba: chroma(colorShade[j]).alpha(0.9).css(),
      }
      shades.push(shadeInfo);
       
    }

  } 

  let newPalette = {
    paletteName: currentPalette.paletteName,
    id: currentPalette.id,
    emoji: currentPalette.emoji,
    colors: shades,
  }
  let colors = {};
  for(let i = 0; i < levels.length; i++){
    let allColors = new Set();
    allColors.add(shades)
    colors[levels[i]]=[];
    // console.log(allColors)
    for(let color of allColors){
      color.forEach(function(c){
        if((c.name.search(" " + levels[i]) !== -1)){
          // console.log(c)
          color = c;
          colors[levels[i]].push(color)
        }     
      })
  }
  newPalette.colors = colors;
}
// console.log(newPalette)
let firstRow = new Set(newPalette.colors[50]);
for(let el of firstRow){
  if(el.name.search("500") !== -1){
    firstRow.delete(el)
  }
}
newPalette.colors[50] = Array.from(firstRow);
// console.log(newPalette);
return newPalette


// newPalette.colors[50].forEach(function(el){
//   if(el.name.search("500") !== -1){
//     console.log(el)
//   }
// })
// console.log(newPalette.colors[50])
    // return newPalette;
}
export { getPaletteShades}