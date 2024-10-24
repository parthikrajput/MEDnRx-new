const transferBoxes = document.querySelectorAll(".transfer-box");
let currentIndex = 0;

// transferBoxes[currentIndex].classList.add("active");

function showBox(index) {
  transferBoxes.forEach((box) => box.classList.remove("active"));

  transferBoxes[index].classList.add("active");
}

document.querySelectorAll(".next-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < transferBoxes.length - 1) {
      currentIndex++;
      showBox(currentIndex);
    }
  });
});
document.querySelectorAll(".back-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      showBox(currentIndex);
    }
  });
});

const otpInputs = document.querySelectorAll(".otp-input input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (!/^[0-9]?$/.test(input.value)) {
      input.value = "";
    }

    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }

    if (input.value.length === 0 && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

document.getElementById("add-row").addEventListener("click", addInputRow);

function addInputRow() {
  const container = document.getElementById("input-container");

  // Create a new input row
  const newRow = document.createElement("div");
  newRow.className =
    "input-row  d-flex gap-sm-4 gap-3 w-100 align-items-center";
  newRow.innerHTML = `
<div class="i-filds d-flex gap-sm-4 gap-3 flex-column flex-sm-row w-100 ">
                                        <div
                                            class="i-fild d-flex flex-column gap-1 text-left align-items-start w-100">
                                            <select name="" id="">
                                                <option value="">Amlodipine 10 mg tablet</option>
                                                <option value="">Amlodipine 10 mg tablet</option>
                                                <option value="">Amlodipine 10 mg tablet</option>
                                                <option value="">Amlodipine 10 mg tablet</option>
                                            </select>
                                        </div>
                                        <div
                                            class="i-fild d-flex flex-column gap-1 text-left align-items-start w-100">
                                            <input type="number" name="" value="987658" id="">
                                        </div>
                                    </div>
                                    <span class="close" onclick="removeInputRow(this)">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.6643 8.76562C8.85005 9.95156 9.83073 10.9219 9.84362 10.9219C9.85651 10.9219 8.89693 9.95156 7.71118 8.76562C6.52543 7.57969 5.54476 6.60938 5.53187 6.60938C5.51898 6.60938 6.47855 7.57969 7.6643 8.76562ZM14.4129 10.6523L14.1331 10.9453L14.426 10.6655C14.6982 10.4056 14.7405 10.3594 14.7058 10.3594C14.6986 10.3594 14.5667 10.4912 14.4129 10.6523ZM10.3831 11.4844C10.6658 11.768 10.9076 12 10.9205 12C10.9334 12 10.7126 11.768 10.4299 11.4844C10.1472 11.2008 9.90535 10.9688 9.89246 10.9688C9.87957 10.9688 10.1004 11.2008 10.3831 11.4844ZM13.5698 11.4961L13.0549 12.0234L13.5823 11.5086C14.0721 11.0304 14.1309 10.9688 14.0971 10.9688C14.0902 10.9688 13.8529 11.2061 13.5698 11.4961ZM9.79693 15.2695L7.61743 17.4609L9.80884 15.2814L12.0002 13.1019L14.1916 15.2814L16.3831 17.4609L14.2036 15.2695C13.0048 14.0643 12.0133 13.0781 12.0002 13.0781C11.9872 13.0781 10.9957 14.0643 9.79693 15.2695Z"
                                                fill="#403C3C"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.86948 5.33013C5.70228 5.36219 5.40748 5.67358 5.34453 5.88466C5.22195 6.29543 5.13195 6.18893 8.15511 9.21086L10.9218 11.9764L8.2108 14.6952C6.71975 16.1906 5.46626 17.469 5.42525 17.5361C5.29409 17.7506 5.27905 17.9698 5.38001 18.1944C5.5789 18.6369 6.00762 18.8002 6.416 18.589C6.4962 18.5475 7.78578 17.2853 9.28179 15.7841L12.0018 13.0547L14.7194 15.7877C16.7947 17.8746 17.4858 18.5422 17.643 18.6117C18.212 18.8634 18.8183 18.3283 18.657 17.7168C18.6069 17.5272 18.3456 17.2511 15.8413 14.7422L13.0809 11.9765L15.7572 9.33011C17.2291 7.87455 18.4821 6.60893 18.5415 6.51761C18.7343 6.22104 18.7137 5.8294 18.4923 5.58433C18.2802 5.34954 18.0095 5.26582 17.7149 5.34391C17.5281 5.39341 17.2388 5.6674 14.754 8.14732L12.0001 10.8958L9.24617 8.15116C6.21879 5.13396 6.34465 5.2391 5.86948 5.33013Z"
                                                fill="#AF293C"></path>
                                        </svg>
                                    </span>
`;
  container.appendChild(newRow);
}

function removeInputRow(element) {
  const row = element.closest(".input-row");
  if (row) {
    row.remove();
  }
}
