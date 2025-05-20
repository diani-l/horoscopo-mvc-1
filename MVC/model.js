
const horoscopeData = {
  Aries: "Hoy es un buen día para empezar algo nuevo.",
  Tauro: "La paciencia será tu mejor aliada.",
  Géminis: "Conecta con tus seres queridos.",
  Cáncer: "Confía en tu intuición.",
  Leo: "Brilla con confianza, pero con humildad.",
  Virgo: "Tu atención al detalle te dará frutos.",
  Libra: "Busca el equilibrio en tus decisiones.",
  Escorpio: "Es un buen día para soltar lo que no te hace bien.",
  Sagitario: "Explora ideas nuevas, tu mente está activa.",
  Capricornio: "El esfuerzo te traerá recompensas.",
  Acuario: "Sé auténtico, tu visión única es necesaria.",
  Piscis: "Escucha a tu corazón y fluye con el día."
};

export function getSignAndMessage(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const sign = getZodiacSign(day, month);
  return { sign, message: horoscopeData[sign] };
}

function getZodiacSign(day, month) {
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Acuario";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Piscis";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Tauro";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Géminis";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cáncer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Escorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagitario";
  return "Capricornio";
}
