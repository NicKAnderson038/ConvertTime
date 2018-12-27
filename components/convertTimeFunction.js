'use strict';

const convertTimeFunction = (data) => {

  const regTime = data
  const pm = /PM/i;
  const am = /AM/i;
  let result = ''

  function timeConversion(s) {
    let output = '';
    const timeSeparator = ':'
    const timeTokenType = s.substr(s.length - 2 , 2).toLowerCase();
    const timeArr = s.split(timeSeparator).map((timeToken) => {
    const isTimeTokenType = 
          timeToken.toLowerCase().indexOf(am) > 0 ||                                                                                               
           timeToken.toLowerCase().indexOf(pm);
        if(isTimeTokenType){
            return timeToken.substr(0, 2);
        } else {
            return timeToken;
        }
    });
    const hour = timeArr[0];
    const minutes = timeArr[1];
    const seconds = timeArr[2];
    const hourIn24 = (timeTokenType === am) ? parseInt(hour) - 12 : 
    parseInt(hour) + 12;
    return hourIn24.toString()+ timeSeparator + minutes + timeSeparator + seconds;
  }

  if(regTime.match(pm)){
    result = timeConversion(regTime)
  }else if(regTime.match(am)){
    const found = regTime.match(am);
    result = regTime.slice(0, found.index)
  }


 
  return result
};

module.exports = {
  convertTimeFunction
}
