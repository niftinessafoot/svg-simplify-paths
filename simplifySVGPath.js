function simplifySVGPath(path){
  return path.split(' ').map(ele=>{
    const firstChar = ele.substr(0,1);
    const regTest = /[a-z]/i.test(firstChar);
    const commandLetter = regTest ? firstChar : '';

    if(regTest){
      ele = ele.substring(1);
    }

    const pathCommand = ele.split(',').map(num => {
      return num ? Math.round(num*100)/100 : '';
    }).join(',');

    return `${commandLetter}${pathCommand}`;
  }).join(' ');
}

export default simplifySVGPath