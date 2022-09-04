export interface IColor {
  hue: number;
  saturation: number;
  lightness: number; //
}
export interface ITheme {
  textColor: IColor;
  backgroundColor: IColor;
}
export const Green_Theme: ITheme = {
  textColor: {
    hue: 112.2,
    saturation: 73.53,
    lightness: 73.33,
  } as IColor,
  backgroundColor: {
    hue: 164.21,
    saturation: 100,
    lightness: 7.54,
  },
}
export const Red_Theme:ITheme={
    textColor:{
        hue:358.41,
        saturation:100,
        lightness:73.53
    } as IColor,
    backgroundColor:{
        hue:357.39,
        saturation:100,
        lightness:13.53
    } as IColor
}
export class ThemConfig{
    static setTheme(theme:ITheme){
        let root=document.querySelector(':root') as any
        const stringyfyColor=(x : IColor)=>{
            return `hsl(${x.hue},${x.saturation}%, ${x.lightness}%)`; //
        }
        root.style.setProperty('--text-color', stringyfyColor(theme.textColor));    
        root.style.setProperty('--background-color', stringyfyColor(theme.backgroundColor));
    }
}
