function timeToEat(currentTime) {
  // Define meal times
  const breakfastTime = "07:00 a.m.";
  const lunchTime = "12:00 p.m.";
  const dinnerTime = "07:00 p.m.";

  // Helper function to convert time to minutes since midnight
  const timeToMinutes = (time) => {
    // Parsing waktu dalam format "HH:mm a.m." atau "HH:mm p.m."
    const [hour, minute, period] = time.match(/\d+|\w+/g);

    // Mengonversi jam dan menit menjadi angka
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute);

    // Menghitung total menit sejak tengah malam
    let totalMinutes = hourNum * 60 + minuteNum;

    // Jika waktu adalah "p.m." dan bukan tengah malam, tambahkan 12 jam (720 menit)
    if (period === "p.m." && hourNum !== 12) {
      totalMinutes += 12 * 60;
    }

    return totalMinutes;
  };

  // Mengonversi waktu saat ini dan waktu makan menjadi menit sejak tengah malam
  const currentTimeMinutes = timeToMinutes(currentTime);
  const nextBreakfastMinutes = timeToMinutes(breakfastTime);
  const nextLunchMinutes = timeToMinutes(lunchTime);
  const nextDinnerMinutes = timeToMinutes(dinnerTime);

  // Mencari waktu makan berikutnya
  let nextMealTime;
  if (currentTimeMinutes < nextBreakfastMinutes) {
    nextMealTime = nextBreakfastMinutes;
  } else if (currentTimeMinutes < nextLunchMinutes) {
    nextMealTime = nextLunchMinutes;
  } else if (currentTimeMinutes < nextDinnerMinutes) {
    nextMealTime = nextDinnerMinutes;
  } else {
    // Waktu makan berikutnya adalah sarapan di hari berikutnya
    nextMealTime = nextBreakfastMinutes + 24 * 60;
  }

  // Menghitung durasi waktu hingga waktu makan berikutnya
  const durationMinutes = nextMealTime - currentTimeMinutes;
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  // Mengembalikan hasil dalam bentuk array [jam, menit]
  return [hours, minutes];
}

// Contoh penggunaan
console.log(timeToEat("2:00 p.m.")); // Output: [5, 0]
console.log(timeToEat("5:50 a.m.")); // Output: [1, 10]
