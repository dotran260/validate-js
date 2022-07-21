function Validator(value) {
    var formElement = document.querySelector('#form-1')

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentNode.querySelector('.form-message')
        var errorMessage = rule.test(inputElement.value)
        if (errorMessage) {
            errorElement.innerText = errorMessage
            errorElement.parentNode.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            errorElement.parentNode.classList.remove('invalid')
        }
    }

    if (formElement) {
        value.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                // Xử lý event onblur
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                // Xử lý event oninput
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentNode.querySelector('.form-message')
                    errorElement.innerText = ''
                    errorElement.parentNode.classList.remove('invalid')
                }
            }
        })
    }
}
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập đầy đủ thông tin'
        },
    }
}

Validator.isEmail = function (selector) {
    // console.log(selector)
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này là email'

        },
    }
}


Validator.isLengthMin = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            console.log(value.trim().length)
            return value.trim().length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}