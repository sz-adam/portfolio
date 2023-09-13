const map =require('../languages/map.json')
const en =require('../languages/en.json')
const hu =require('../languages/hu.json')
const de =require('../languages/de.json')

export const languages= [hu,en,de]
export const MAP =map
export const text =(language,source,...props)=>{
    let active = languages.find(lang => lang.code === language);
    if (active === undefined) {
        return language + "_" + source; 
    }
  return active[source]
}



