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

        function sendAjaxForm(form, name, phone, message) {
            $.ajax({
                type: 'POST',
                url: '/_service/modern_sendcallback.php',
                data: 'name=' + encodeURIComponent(name) + '&phone=' + encodeURIComponent(phone) + '&message=' + encodeURIComponent(message),
                success: function (response) {
                    // здесь можно заменить на свою логику показа окна
                    $('#successPopup').fadeIn();
                    $(form).trigger("reset");
                },
                error: function () {
                    alert('Ошибка при отправке формы. Попробуйте позже.');
                }
            });
        }

        $('#orderRequestForm, #requestForm, #projectForm').on('submit', function (e) {

                e.preventDefault();
                const form = this;
                clearErrors(form);
    
                const name = $(form).find('input[name="userName"]').val() || $(form).find('input[type="text"]').first().val();
                const phone = $(form).find('input[type="tel"]').val();
                const message = $(form).find('textarea').val() || ''; // если есть textarea
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
                    sendAjaxForm(form, name.trim(), phone.trim(), message.trim());
                    console.log('Форма отправлена:', {
                        name: name.trim(),
                        phone: phone.trim(),
                        message: message.trim()
                    });
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