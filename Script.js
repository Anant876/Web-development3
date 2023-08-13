document.getElementById("booking-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const destination = document.getElementById("destination").value;
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;

  // You can add code here to send the booking details to the backend or perform further actions.
  // For now, let's just display the booking information.
  alert(`Booking Details:\nDestination: ${destination}\nDeparture Date: ${departureDate}\nReturn Date: ${returnDate}`);
});
