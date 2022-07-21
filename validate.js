function Validator(value) {
    var formElement = document.querySelector('#form-1')

    if (formElement) {
        value.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                inputElement.onblur = function(e) {
                    var errorMessage = rule.test(this.value)
                    var errorElement = inputElement.parentNode.querySelector('.form-message')
                    if (errorMessage) {
                        errorElement.innerText = errorMessage
                        errorElement.parentNode.classList.add('invalid')
                    } else {
                        errorElement.innerText = ''
                        errorElement.parentNode.classList.remove('invalid')
                    }
                }
            }
        })

    }
}
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập đầy đủ họ tên'
        },
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function() {

        },
    }
}