$(document).ready(function() {
    function validateDate() {
        const actualYear = new Date().getFullYear();

        $("#day").keyup(function() {
            let day = $(this).val();
            if (day < 1 || day > 31) {
                $('.error-message-day').css('display', 'block');
                $('input').css('outline-color', 'red');
                $('.error-label-day').css('color', 'red')
            } else {
                $('.error-message-day').css('display', 'none');
                $('input').css('outline-color', 'hsl(259, 100%, 65%)')
                $('.error-label-day').css('color', 'hsl(0, 1%, 44%)')
            }
            calculateAge();
        });

        $("#month").keyup(function() {
            let month = $(this).val();
            if (month < 1 || month > 12) {
                $('.error-message-month').css('display', 'block');
                $('input').css('outline-color', 'red');
                $('.error-label-month').css('color', 'red');
            } else {
                $('.error-message-month').css('display', 'none');
                $('input').css('outline-color', 'hsl(259, 100%, 65%)')
                $('.error-label-month').css('color', 'hsl(0, 1%, 44%)')
            }
            calculateAge();
        });

        $("#year").keyup(function() {
            let year = $(this).val();
            if (year > actualYear || year <= 0) {
                $('.error-message-year').css('display', 'block');
                $('input').css('outline-color', 'red');
                $('.error-label-year').css('color', 'red');
            } else {
                $('.error-message-year').css('display', 'none');
                $('input').css('outline-color', 'hsl(259, 100%, 65%)')
                $('.error-label-year').css('color', 'hsl(0, 1%, 44%)')
            }
            calculateAge();
        });
    }

    function calculateAge() {
        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#year').val();

        if (day && month && year) {
            let birthDate = new Date(year, month - 1, day);
            let today = new Date();

            if (birthDate > today) {
                $('#year-span').text('--');
                $('#month-span').text('--');
                $('#day-span').text('--');
                return;
            }

            let ageYears = today.getFullYear() - birthDate.getFullYear();
            let ageMonths = today.getMonth() - birthDate.getMonth();
            let ageDays = today.getDate() - birthDate.getDate();

            if (ageDays < 0) {
                ageMonths--;
                ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }

            $('#year-span').text(ageYears);
            $('#month-span').text(ageMonths);
            $('#day-span').text(ageDays);
        }
    }

    validateDate();
});