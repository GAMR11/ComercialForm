// utils/numberToWords.js

// Función que convierte números a palabras en español
export function numeroATexto(numero) {
  const unidades = ['', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
  const decenas = ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
  const especiales = ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
  const centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

  // Función auxiliar para convertir números menores a 1000
  function convertirMenorMil(n) {
    if (n === 0) return '';
    if (n === 100) return 'CIEN';
    
    let resultado = '';
    
    // Centenas
    const c = Math.floor(n / 100);
    if (c > 0) resultado += centenas[c];
    
    n %= 100;
    
    // Decenas especiales (10-19)
    if (n >= 10 && n < 20) {
      if (resultado) resultado += ' ';
      resultado += especiales[n - 10];
      return resultado;
    }
    
    // Decenas
    const d = Math.floor(n / 10);
    if (d > 0) {
      if (resultado) resultado += ' ';
      resultado += decenas[d];
    }
    
    // Unidades
    const u = n % 10;
    if (u > 0) {
      if (d > 2) resultado += ' Y ';
      else if (resultado) resultado += ' ';
      resultado += unidades[u];
    }
    
    return resultado;
  }

  // Separar parte entera y decimal
  const partes = numero.toString().split('.');
  const entero = parseInt(partes[0]);
  const decimal = partes[1] ? parseInt(partes[1]) : 0;

  if (entero === 0) return 'CERO DÓLARES';

  let resultado = '';

  // Millones
  const millones = Math.floor(entero / 1000000);
  if (millones > 0) {
    if (millones === 1) resultado += 'UN MILLÓN ';
    else resultado += convertirMenorMil(millones) + ' MILLONES ';
  }

  // Miles
  const miles = Math.floor((entero % 1000000) / 1000);
  if (miles > 0) {
    if (miles === 1) resultado += 'MIL ';
    else resultado += convertirMenorMil(miles) + ' MIL ';
  }

  // Unidades
  const unidadesNum = entero % 1000;
  if (unidadesNum > 0) {
    resultado += convertirMenorMil(unidadesNum) + ' ';
  }

  resultado += 'DÓLARES';

  if (decimal > 0) {
    resultado += ' CON ' + decimal.toString().padStart(2, '0') + '/100';
  }

  return resultado.trim();
}