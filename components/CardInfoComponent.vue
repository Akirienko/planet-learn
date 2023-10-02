<script>
export default {
  data() {
    return {
      cardNumber: '',
      // month: '',
      // year: '',
      selectedMonth: '',
      selectedYear: '',
      ccv: '',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      years: [2000, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      isFormValid: false,

    };
  },
  computed: {
    validateCardNumber() {
      return this.month.length === 16;
    },
    validatemonth() {
      // Додайте код для перевірки місяця
      return this.month.length === 2;
    },
    validateyear() {
      // Додайте код для перевірки року
      return this.year.length === 4;
    },
    validateCCV() {
      // Додайте код для перевірки CCV
      return this.ccv.length === 3;
    },
  },
  watch: {
    cardNumber: 'validateForm',
    month: 'validateForm',
    year: 'validateForm',
    ccv: 'validateForm',
  },
  methods: {
    validateForm() {
      // Перевіряємо всі поля та оновлюємо isFormValid
      this.isFormValid =
        this.validateCardNumber &&
        this.validatemonth &&
        this.validateyear &&
        this.validateCCV;
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

      // this.cardNumber = this.cardNumber.replace(/(.{4})/g, '$1 ');
      const formattedNumber = this.cardNumber.match(/.{1,4}/g);

      this.cardNumber = formattedNumber ? formattedNumber.join(' ') : '';
    },

    selectMonth(month) {
      this.selectedMonth = month;
      // Логіка для вибору місяця
    },
    selectYear(year) {
      this.selectedYear = year;
      // Логіка для вибору року
    }
  },
};

</script>


<template>
 <form @submit.prevent="submitForm" class="payment-form">
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
      <!-- <div class="payment-form__field">
        <label for="month" class="form-label">Month</label>
        <select class="form-select" id="month" v-model="month" @input="validateForm">
          <option value="" disabled>Select</option>
          <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
        </select>
      </div>
      <div class="payment-form__field">
        <label for="year" class="form-label">Year</label>
        <select class="form-select" id="year" v-model="year" @input="validateForm">
          <option value="" disabled>Select</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div> -->
      <div class="col-md-6">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="monthDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {{ selectedMonth || 'Select Month' }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="monthDropdown">
            <li v-for="(month, index) in months" :key="index">
              <a class="dropdown-item" @click="selectMonth(month)">{{ month }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="yearDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {{ selectedYear || 'Select Year' }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="yearDropdown">
            <li v-for="(year, index) in years" :key="index">
              <a class="dropdown-item" @click="selectYear(year)">{{ year }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="payment-form__field">
        <label for="ccv" class="form-label">CCV</label>
        <input
          type="text"
          class="form-control"
          id="ccv"
          v-model="ccv"
          @input="validateForm"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="!isFormValid">Submit</button>
  </form>
</template>


<style lang="scss" scoped>
.payment-form {
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
    }
  }
  &__days {
    display: flex;
    gap: 10px;
    &>div {
      flex: 1;
    }
  }
}
</style>
