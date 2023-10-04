<script>
export default {
  data() {
    return {
      cardNumber: '',
      selectedMonth: '',
      selectedYear: '',
      ccv: '',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      years: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      isFormValid: false,

    };
  },
  props: {
    pageClass: String
  },
  computed: {
    validateCardNumber() {
      return this.cardNumber.length === 16;
    },
    validatemonth() {
      return this.selectedMonth.length >= 2;
    },
    validateyear() {
      return this.selectedYear.length >= 4;
    },
    validateCCV() {
      return this.ccv.length === 3;
    },
  },
  watch: {
    cardNumber: 'validateForm',
    selectedMonth: 'validateForm',
    selectedYear: 'validateForm',
    ccv: 'validateForm',
  },
  methods: {
    validateForm() {
      if ( this.cardNumber.length && this.validatemonth && this.validateCCV) {
        this.isFormValid = true
      }
    },
    submitForm() {
      if (this.isFormValid) {
        console.log('Form submitted');
      } else {
        console.log('Form is not valid');
      }
    },
    formatCardNumber() {

      this.cardNumber = this.cardNumber.replace(/\D/g, '');

      this.cardNumber = this.cardNumber.slice(0, 16);

      const formattedNumber = this.cardNumber.match(/.{1,4}/g);

      this.cardNumber = formattedNumber ? formattedNumber.join(' ') : '';
    },

    selectMonth(month) {
      this.selectedMonth = month;
    },
    selectYear(year) {
      this.selectedYear = year;
    }
  },
};

</script>


<template>
 <form @submit.prevent="submitForm" class="payment-form" :class="pageClass">
    <div class="payment-form__field">
      <label for="cardNumber" class="form-label">Card number</label>
      <input
        type="text"
        class="form-control"
        id="cardNumber"
        :placeholder="`•••• •••• •••• ••••`"
        v-model="cardNumber"
        @input="formatCardNumber"
      />
    </div>
    <div class="payment-form__days">
      <div class="col-md-6">
        <div class="dropdown">
          <button class="btn dropdown-toggle custom-button" type="button" id="monthDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <p>Month</p>
            {{ selectedMonth || "Select" }}
            <span class="custom-dropdown-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_548_28263)">
                <path d="M0.169604 9.61302L4.35316 14L15.7948 3.74062C16.0537 3.5084 16.0699 3.1165 15.8304 2.86543C15.5909 2.61436 15.1868 2.59907 14.9279 2.83129L4.42393 12.25L1.10731 8.77233C0.867842 8.52126 0.464086 8.50597 0.205181 8.73784C-0.053723 8.97006 -0.0698643 9.36196 0.169604 9.61302Z" fill="#6C727F"/>
                </g>
                <defs>
                <clipPath id="clip0_548_28263">
                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="monthDropdown">
            <li v-for="(month, index) in months" :key="index">
              <a class="dropdown-item" @click="selectMonth(month)" :class="{ 'active': selectedMonth === month }">
                {{ month }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <g clip-path="url(#clip0_548_28418)" filter="url(#filter0_d_548_28418)">
                    <path d="M4.1696 9.61302L8.35316 14L19.7948 3.74062C20.0537 3.5084 20.0699 3.1165 19.8304 2.86543C19.5909 2.61436 19.1868 2.59907 18.9279 2.83129L8.42393 12.25L5.10731 8.77233C4.86784 8.52126 4.46409 8.50597 4.20518 8.73784C3.94628 8.97006 3.93014 9.36196 4.1696 9.61302Z" fill="white"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_548_28418" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_28418"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_28418" result="shape"/>
                    </filter>
                    <clipPath id="clip0_548_28418">
                      <rect width="16" height="16" fill="white" transform="translate(20) rotate(90)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="yearDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <p>Year</p>
            {{ selectedYear || "Select" }}
            <span class="custom-dropdown-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_548_28263)">
                <path d="M0.169604 9.61302L4.35316 14L15.7948 3.74062C16.0537 3.5084 16.0699 3.1165 15.8304 2.86543C15.5909 2.61436 15.1868 2.59907 14.9279 2.83129L4.42393 12.25L1.10731 8.77233C0.867842 8.52126 0.464086 8.50597 0.205181 8.73784C-0.053723 8.97006 -0.0698643 9.36196 0.169604 9.61302Z" fill="#6C727F"/>
                </g>
                <defs>
                <clipPath id="clip0_548_28263">
                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="yearDropdown">
            <li v-for="(year, index) in years" :key="index" class="dropdown">
              <a class="dropdown-item" @click="selectYear(year)" :class="{ 'active': selectedYear === year }">
                {{ year }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <g clip-path="url(#clip0_548_28418)" filter="url(#filter0_d_548_28418)">
                    <path d="M4.1696 9.61302L8.35316 14L19.7948 3.74062C20.0537 3.5084 20.0699 3.1165 19.8304 2.86543C19.5909 2.61436 19.1868 2.59907 18.9279 2.83129L8.42393 12.25L5.10731 8.77233C4.86784 8.52126 4.46409 8.50597 4.20518 8.73784C3.94628 8.97006 3.93014 9.36196 4.1696 9.61302Z" fill="white"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_548_28418" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_28418"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_548_28418" result="shape"/>
                    </filter>
                    <clipPath id="clip0_548_28418">
                      <rect width="16" height="16" fill="white" transform="translate(20) rotate(90)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="payment-form__field">
        <label for="ccv" class="form-label">CCV</label>
        <input
          type="password"
          class="form-control"
          id="ccv"
          :placeholder="`•••`"
          v-model="ccv"
          @input="validateForm"
          maxlength="3"
        />
      </div>
    </div>
    <div class="form-buttons">
      <button type="submit" class="btn btn-submit" :disabled="!isFormValid">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
.payment-form {
  &.planet {
    .form-control {
      background: #617398;
      border: none;

    }
    .form-label {
      background: #617398;
      color: #fff;
    }
    .dropdown {
      &-toggle {
        background: #617398;
        color: #fff;
        border: none;
        &>p {
          color: #fff;
          background: #617398;
        }
        .custom-dropdown-arrow {
          svg {
            path {
              fill: #FFF;
            }
          }
        }
      }
      &-menu {
        background: #617398;
        li {
          border-color: rgba($color: #000000, $alpha: .3);
          .dropdown-item {
            color: #fff;
            &:hover {
              background: #6C89FF;
            }
            &.active {
              background: #6C89FF;
            }
          }
        }
      }
    }
    .form-buttons {
      .btn-submit {
        border: none;
        background: #617398;
      }
    }
  }
  &__field {
    margin-bottom: 40px;
    .form-control {
      padding: 0 16px;
      box-sizing: border-box;
      height: 46px;
    }
    .form-select {
      height: 46px;
      &::placeholder {
        color: #6C727F;
        font-size: 12px;
      }
    }
    .form-label {
      position: absolute;
      top: -5px;
      left: 17px;
      z-index: 1;
      padding: 0 5px;
      background: #fff;
      font-size: 12px;
      font-weight: 700;
      border-radius: 30px;
    }
  }
  &__days {
    display: flex;
    gap: 10px;
    &>div {
      flex: 1;
    }
    .dropdown {
      &-toggle {
        border-radius: 8px;
        border: 1px solid var(--Input-border-color, #D2D5DA);
        background: #FFF;
        color: #6C727F;
        font-size: 12px;
        height: 46px;
        width: 100%;
        &::after {
          display: none;
        }
        .custom-dropdown-arrow {
          margin-left: 37px;
        }
        &>p {
          position: absolute;
          top: -5px;
          left: 17px;
          z-index: 1;
          padding: 0 5px;
          background: #fff;
          font-size: 12px;
          font-weight: 700;
          color: #000;
          border-radius: 30px;
        }
      }
      &-menu {
        padding: 0;
        width: 116px;
        min-width: unset;
        li {
          height: 32px;
          border-bottom: 1px solid #6C727F;
          &:last-child {

            border-bottom: none;
          }
          .dropdown-item {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            color: #6C727F;

            svg {
              opacity: 0;
            }
            &.active {
              background-color: #007bff;
              color: #ffffff;
            }
            &.active {
              background: #00CA14;
              color: #fff;
              svg {
                opacity: 1;
              }
            }
          }
        }

      }
    }
  }
  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .btn-submit {
      width: 300px;
      height: 56px;
      font-weight: 600;
      background: #D2D2D2;
      color: #fff;
    }
  }

}
</style>
