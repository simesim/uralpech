$(document).ready(function () {
        // Маска для всех телефонных полей
        $('input[type="tel"]').mask("+7 (999) 999-99-99");

        function showError(input, message) {
            $(input).addClass('input-error');
            if (!$(input).next('.error-text').length) {
                $(input).after(`<div class="error-text">${message}</div>`);
            }
        }

        function clearErrors(form) {
            $(form).find('.input-error').removeClass('input-error');
            $(form).find('.error-text').remove();
        }

        function isPhoneValid(phone) {
            return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
        }

        function sendAjaxForm(form, data) {
            console.log(data)
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://uksgroup.test/_service/modern_sendcallback.php',
                data: JSON.stringify(data),
                success: function (response) {
                    console.log(response)
                    // здесь можно заменить на свою логику показа окна
                    $('#successPopup').fadeIn();
                    $(form).trigger("reset");
                },
                error: function () {
                    alert('Ошибка при отправке формы. Попробуйте позже.');
                }
            });
            showSuccessPopup();
        }

        $('#orderRequestForm, #requestForm, #projectForm').on('submit', function (e) {

                e.preventDefault();
                const form = this;
                clearErrors(form);
    
                const name = $(form).find('input[name="userName"]').val() || $(form).find('input[type="text"]').first().val();
                const phone = $(form).find('input[type="tel"]').val();
                const email = $(form).find('input[name="userEmail"]').val() || "";
                const city = $(form).find('input[name="userCity"]').val() || "";

                let valid = true;
    
                if (!name || name.trim().length < 2) {
                    showError($(form).find('input[type="text"]').first(), 'Введите имя');
                    valid = false;
                }
    
                if (!phone || !isPhoneValid(phone)) {
                    showError($(form).find('input[type="tel"]'), 'Введите корректный номер');
                    valid = false;
                }
    
                if (valid) {
                    const formData = {
                        name: name.trim(),
                        phone: phone.trim(),
                        email: email.trim(),
                        city: city.trim(),
                    }

                    sendAjaxForm(form, formData);
                } else {
                    console.log('Ошибка валидации', "телефон: "+ phone, name)
                    console.log($(form).find('input[type="tel"]').val())
                }
            });

        // Закрытие попапа "спасибо"
        $('#successPopupCloseBtn').on('click', function () {
            $('#successPopup').fadeOut();
        });
    });