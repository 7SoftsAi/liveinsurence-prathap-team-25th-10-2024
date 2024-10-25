(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

       // Function to calculate Future Value
function calculateFutureValue() {
    // Retrieve inputs
    var presentAmount = parseFloat(document.getElementById('present-amount-future').value);
    var interestRate = parseFloat(document.getElementById('interest-rate-future').value);
    var years = parseFloat(document.getElementById('loan-period-future').value);
    var compoundingMode = document.getElementById('rest-option-future').value;

    // Perform calculation based on compounding mode
    var periodsPerYear = compoundingMode === 'monthly' ? 12 : 1;
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = years * periodsPerYear;

    var futureValue = presentAmount * Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-future').innerText = 'Future Value: ₹ ' + formatNumberWithCommas(futureValue.toFixed(2));
}

// Function to calculate Fixed Deposit Interest
function calculateFD() {
    // Retrieve inputs
    var principalAmount = parseFloat(document.getElementById('principal-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate-2').value);
    var compoundingOption = document.getElementById('compounding-option').value;
    var months = parseFloat(document.getElementById('loan-period-2').value);

    // Perform calculation based on compounding option
    var periodsPerYear = compoundingOption === 'monthly' ? 12 : (compoundingOption === 'quarterly' ? 4 : (compoundingOption === 'half-yearly' ? 2 : 1));
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = months / 12 * periodsPerYear;

    var maturityAmount = principalAmount * Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-2').innerText = 'Maturity Amount: ₹ ' + formatNumberWithCommas(maturityAmount.toFixed(2));
}

// Function to calculate Present Value
function calculatePresentValue() {
    // Retrieve inputs
    var interestRate = parseFloat(document.getElementById('interest-rate-3').value);
    var years = parseFloat(document.getElementById('loan-period-3').value);
    var compoundingMode = document.getElementById('rest-option-3').value;
    var futureAmount = parseFloat(document.getElementById('future-amount').value);

    // Perform calculation based on compounding mode
    var periodsPerYear = compoundingMode === 'monthly' ? 12 : 1;
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = years * periodsPerYear;

    var presentValue = futureAmount / Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-3').innerText = 'Present Value: ₹ ' + formatNumberWithCommas(presentValue.toFixed(2));
}

// Function to calculate Recurring Deposit Maturity Value
function calculateRecurringDeposit() {
    // Retrieve inputs
    var monthlyDeposit = parseFloat(document.getElementById('monthly-deposit').value);
    var annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value);
    var compoundingFrequency = document.getElementById('compounding-frequency').value;
    var months = parseFloat(document.getElementById('period-months').value);

    // Perform calculation based on compounding frequency
    var periodsPerYear = compoundingFrequency === 'monthly' ? 12 : (compoundingFrequency === 'quarterly' ? 4 : 1);
    var interestPerPeriod = annualInterestRate / (100 * periodsPerYear);
    var periods = months / periodsPerYear;

    var maturityValue = monthlyDeposit * (((Math.pow(1 + interestPerPeriod, periods) - 1) / interestPerPeriod) * (1 + interestPerPeriod));

    // Display result with commas
    document.getElementById('result-4').innerText = 'Maturity Value: ₹ ' + formatNumberWithCommas(maturityValue.toFixed(2));
}


        // Function to clear fields based on calculator type
        function clearFields(calculatorType) {
            switch (calculatorType) {
                case 1:
                    // Clear Present Value Calculator fields
                    document.getElementById('interest-rate-3').value = '10';
                    document.getElementById('loan-period-3').value = '10';
                    document.getElementById('rest-option-3').value = 'monthly';
                    document.getElementById('future-amount').value = '0';
                    document.getElementById('result-3').innerText = '';
                    break;
                case 2:
                    // Clear Fixed Deposit Calculator fields
                    document.getElementById('principal-amount').value = '100000';
                    document.getElementById('interest-rate-2').value = '10';
                    document.getElementById('compounding-option').value = 'monthly';
                    document.getElementById('loan-period-2').value = '12';
                    document.getElementById('result-2').innerText = '';
                    break;
                case 3:
                    // Clear Future Value Calculator fields
                    document.getElementById('present-amount-future').value = '0';
                    document.getElementById('interest-rate-future').value = '10';
                    document.getElementById('loan-period-future').value = '10';
                    document.getElementById('rest-option-future').value = 'monthly';
                    document.getElementById('result-future').innerText = '';
                    break;
                case 4:
                    // Clear Recurring Deposit Calculator fields
                    document.getElementById('monthly-deposit').value = '5000';
                    document.getElementById('annual-interest-rate').value = '8';
                    document.getElementById('compounding-frequency').value = 'monthly';
                    document.getElementById('period-months').value = '60';
                    document.getElementById('result-4').innerText = '';
                    break;
                default:
                    console.log('Invalid calculator type.');
                    break;
            }
        }