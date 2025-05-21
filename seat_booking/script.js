document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const seatPrice = 10; // price per seat
  const countDisplay = document.querySelector('#detail div:nth-child(1)');
  const totalDisplay = document.querySelector('#detail div:nth-child(2)');
  const payBtn = document.querySelector('#button button');

  // Disable pay button initially
  payBtn.disabled = true;
  payBtn.style.opacity = 0.5;
  payBtn.style.cursor = 'not-allowed';

  container.addEventListener('click', (e) => {
    // Only toggle available seats
    if (
      e.target.classList.contains('seat_available') &&
      !e.target.classList.contains('seat_unavailable')
    ) {
      e.target.classList.toggle('seat_selected');
      updateSelectedCount();
    }
  });

  function updateSelectedCount() {
    const selectedSeats = container.querySelectorAll('.seat_selected');
    const selectedCount = selectedSeats.length;
    const totalCost = selectedCount * seatPrice;

    countDisplay.textContent = `Total Seat Selected: ${selectedCount}`;
    totalDisplay.textContent = `Total Cost: $${totalCost}`;

    if (selectedCount > 0) {
      payBtn.disabled = false;
      payBtn.style.opacity = 1;
      payBtn.style.cursor = 'pointer';
    } else {
      payBtn.disabled = true;
      payBtn.style.opacity = 0.5;
      payBtn.style.cursor = 'not-allowed';
    }
  }
});
