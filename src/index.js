function identificarBandeira(numero) {
  const n = numero.replace(/\D/g, '');

  if (/^4/.test(n)) return 'Visa';
  if (/^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(n)) return 'MasterCard';
  if (/^(4011|4312|4389)/.test(n)) return 'Elo';
  if (/^34|^37/.test(n)) return 'American Express';
  if (/^(6011|65|64[4-9])/.test(n)) return 'Discover';
  if (/^6062/.test(n)) return 'Hipercard';

  return 'Bandeira desconhecida';
}

// Exemplo de uso:
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('4011780000000000')); // Elo
console.log(identificarBandeira('371449635398431'));
