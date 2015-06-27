/**
 * Генерише испис словима на српском унете цене
 *
 * @param {cena} input Numeric price.
 * @customfunction
 */
function SLOVIMA(cena) {
  if (cena == undefined || cena == 0) return 'нула';
  var imebr = ['нула', 'један', 'два', 'три', 'четири', 'пет', 'шест', 'седам', 'осам', 'девет'];
  var rez = '';
  var celi = Math.floor(cena);
  var dec = (cena).toString().split('.')[1];
  if (dec == undefined) {
    dec = '00';
  }
  var cbr = celi.toString().length;
  if (cbr > 15) return 'много';
  var duzina = 16 - cbr;
  var cbroj = Array(duzina).join('0') + celi;
  
  for (i = 0; i < 15; i+=3) {
    var tric = cbroj.substring(i, i + 3);
    var trojka = parseInt(tric);
    if (tric != '000') {
      var cs = parseInt(tric[0]); //Stotine
      var cd = parseInt(tric[1]); //Desetice
      var cj = parseInt(tric[2]); //Jedinice
      
      if (cs > 0) { //Stotine
        if (cs == 2) {
          rez += 'две';
        } else if (cs > 2) {
          rez += imebr[cs];
        }
        
        if (cs == 2 || cs == 3) {
          rez += 'ста';
        } else {
          rez += 'сто';
        }
      }
      
      var sl1 = (cj != 0)?imebr[cj]:'';

      switch (cd) {
        case 0:
          break;
        case 1:
          sl1 = '';
          if (cj == 0) {
            rez += 'десет';
          } else if (cj == 1) {
            rez += 'једа';
          } else if (cj == 4) {
            rez += 'четр';
          } else {
            rez += imebr[cj];
          }
          if (cj > 0) rez += 'наест';
          break;
        case 4:
          rez += 'четр';
          break;
        case 5:
          rez += 'пе';
          break;
        case 6:
          rez += 'шез';
          break;
        case 9:
          rez += 'деве';
          break;
        default:
          rez += imebr[cd];
      }
      if (cd > 1) {
        rez += 'десет';
      }
      
      if ((i == 3 || i == 9) && cd != 1) {
        if (cj == 1) {
          sl1 = 'једна';
        } else if (cj == 2) {
          sl1 = 'две';
        }
      }
      
      rez += sl1;
      
      switch (i) {
        case 0:
          rez += 'билион';
          if (cj > 1 || cd == 1){
            rez += 'а';
          }
          break;
        case 3:
          rez += 'милијард';
          if ((trojka % 100) > 11 && (trojka % 100) < 19) {
            rez += 'и';
          } else if (cj == 1) {
            rez += 'а';
          } else if (cj > 4 || cj == 0) {
            rez += 'и';
          } else if (cj > 1) {
            rez += 'е';
          }
          break;
        case 6:
          rez += 'милион';
          if (((trojka % 100) > 11 && (trojka % 100) < 19) || cj != 1) {
            rez += 'a';
          }
          break;
        case 9:
          rez += 'хиљад';
          if (((trojka % 100) > 11 && (trojka % 100) < 19) || cj == 1) {
            rez += 'а';
          } else if (trojka == 1) {
            rez += 'у';
          } else if (cj > 4 || cj == 0) {
            rez += 'а';
          } else if (cj > 1) {
            rez += 'е';
          }
          break;
      }
    }
  }

  return rez + ' и ' + dec + '/100';
}

/**
 * Generiše ispis slovima na srpskom unete cene
 *
 * @param {cena} input Numeric price.
 * @customfunction
 */
function SLOVIMA_LAT(cena) {
  if (cena == undefined || cena == 0) return 'nula';
  var imebr = ['nula', 'jedan', 'dva', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet'];
  var rez = '';
  var celi = Math.floor(cena);
  var dec = (cena).toString().split('.')[1];
  if (dec == undefined) {
    dec = '00';
  }
  var cbr = celi.toString().length;
  if (cbr > 15) return 'mnogo';
  var duzina = 16 - cbr;
  var cbroj = Array(duzina).join('0') + celi;
  
  for (i = 0; i < 15; i+=3) {
    var tric = cbroj.substring(i, i + 3);
    var trojka = parseInt(tric);
    if (tric != '000') {
      var cs = parseInt(tric[0]); //Stotine
      var cd = parseInt(tric[1]); //Desetice
      var cj = parseInt(tric[2]); //Jedinice
      
      if (cs > 0) { //Stotine
        if (cs == 2) {
          rez += 'dve';
        } else if (cs > 2) {
          rez += imebr[cs];
        }
        
        if (cs == 2 || cs == 3) {
          rez += 'sta';
        } else {
          rez += 'sto';
        }
      }
      
      var sl1 = (cj != 0)?imebr[cj]:'';

      switch (cd) {
        case 0:
          break;
        case 1:
          sl1 = '';
          if (cj == 0) {
            rez += 'deset';
          } else if (cj == 1) {
            rez += 'jeda';
          } else if (cj == 4) {
            rez += 'četr';
          } else {
            rez += imebr[cj];
          }
          if (cj > 0) rez += 'naest';
          break;
        case 4:
          rez += 'četr';
          break;
        case 5:
          rez += 'pe';
          break;
        case 6:
          rez += 'šez';
          break;
        case 9:
          rez += 'deve';
          break;
        default:
          rez += imebr[cd];
      }
      if (cd > 1) {
        rez += 'deset';
      }
      
      if ((i == 3 || i == 9) && cd != 1) {
        if (cj == 1) {
          sl1 = 'jedna';
        } else if (cj == 2) {
          sl1 = 'dve';
        }
      }
      
      rez += sl1;
      
      switch (i) {
        case 0:
          rez += 'bilion';
          if (cj > 1 || cd == 1){
            rez += 'a';
          }
          break;
        case 3:
          rez += 'milijard';
          if ((trojka % 100) > 11 && (trojka % 100) < 19) {
            rez += 'i';
          } else if (cj == 1) {
            rez += 'a';
          } else if (cj > 4 || cj == 0) {
            rez += 'i';
          } else if (cj > 1) {
            rez += 'e';
          }
          break;
        case 6:
          rez += 'milion';
          if (((trojka % 100) > 11 && (trojka % 100) < 19) || cj != 1) {
            rez += 'a';
          }
          break;
        case 9:
          rez += 'hiljad';
          if (((trojka % 100) > 11 && (trojka % 100) < 19) || cj == 1) {
            rez += 'a';
          } else if (trojka == 1) {
            rez += 'u';
          } else if (cj > 4 || cj == 0) {
            rez += 'a';
          } else if (cj > 1) {
            rez += 'e';
          }
          break;
      }
    }
  }

  return rez + ' i ' + dec + '/100';
}
