function analizeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);

  const avgMileage = totalMileage / cars.length;

  const highestMileage = cars.reduce(
    (high, car) => (car.mileage > high.mileage ? car : high),
    cars[0]
  );
  const lowestMileage = cars.reduce(
    (low, car) => (car.mileage < low.mileage ? car : low),
    cars[0]
  );

  return {
    avgMileage: parseFloat(avgMileage.toFixed(2)),
    highestMileage,
    totalMileage,
  };
}
