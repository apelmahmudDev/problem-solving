// 5. kilometer to meter converter

function kilometerToMeter(kilometer) {
	// 1 kilometer = 1000 meter
	return kilometer * 1000;
}

const kilometer = 30;
const meter = kilometerToMeter(kilometer);
// console.log(meter);

// 6. budget Calculator

function budgetCalculator(watch, mobile, latptop) {
	const watchPrice = 50;
	const mobilePrice = 100;
	const laptopPrice = 500;
	const totalPrice =
		watch * watchPrice + mobile * mobilePrice + latptop * laptopPrice;
	return totalPrice;
}

const watch = 2;
const mobile = 5;
const latptop = 2;
const totalPrice = budgetCalculator(watch, mobile, latptop);
// console.log(totalPrice);

// 7. hotel cost

function hotelCost(placedCount) {
	let totalHotelCost;
	const first10DaysCost = 1000;
	const second10Dayscost = 800;

	if (placedCount <= 10) {
		// for every night hotel cost = 100 taka
		const hotelCost = 100;
		totalHotelCost = placedCount * hotelCost;
	} else if (placedCount <= 20) {
		// for every night hotel cost = 80 taka
		const hotelCost = 80;
		totalHotelCost = (placedCount - 10) * hotelCost + first10DaysCost;
	} else {
		// for every night hotel cost = 50 taka
		const hotelCost = 50;
		totalHotelCost =
			(placedCount - 20) * hotelCost + first10DaysCost + second10Dayscost;
	}

	return totalHotelCost;
}

const placedCount = 30; // how many days placed in hotel
const guestHotelCost = hotelCost(placedCount);
console.log(guestHotelCost); // your total hotel cost
