// 5. kilometer to meter converter

function kilometerToMeter(kilometer) {
	// 1 kilometer = 1000 meter
	return kilometer * 1000;
}

const kilometer = 30;
const meter = kilometerToMeter(kilometer);
// console.log(meter);

// 6. budgetCalculator

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
console.log(totalPrice);
