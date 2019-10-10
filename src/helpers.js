import chroma from 'chroma-js'

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
        id: currentPalette.colors[i].name,
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

}
export { getPaletteShades}