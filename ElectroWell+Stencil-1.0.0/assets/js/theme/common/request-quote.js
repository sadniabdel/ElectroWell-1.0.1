import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';

/**
 * Request Quote functionality
 * Handles the quote form modal and submission
 */
export default class RequestQuote {
    constructor() {
        this.initModal();
        this.bindEvents();
    }

    initModal() {
        // Initialize modal when quote button is clicked
        $(document).on('click', '.btn-request-quote', (event) => {
            event.preventDefault();
            const $button = $(event.currentTarget);
            const productId = $button.data('product-id');
            const productName = $button.data('product-name');

            // Set product info in the form
            $('#quote-product-id').val(productId);
            $('#quote-product-name').val(productName);

            // Pre-fill customer info if available
            if (window.jsContext && window.jsContext.customer) {
                const customer = window.jsContext.customer;
                if (customer.name) {
                    $('#quote_fullname').val(customer.name);
                }
                if (customer.email) {
                    $('#quote_email').val(customer.email);
                }
                if (customer.phone) {
                    $('#quote_phone').val(customer.phone);
                }
            }

            // Reset messages
            $('.request-quote-success').hide();
            $('.request-quote-error').hide();
        });
    }

    bindEvents() {
        // Handle form submission
        $(document).on('submit', '[data-request-quote-form]', (event) => {
            event.preventDefault();
            this.submitForm(event.currentTarget);
        });
    }

    submitForm(form) {
        const $form = $(form);
        const $submitButton = $form.find('button[type="submit"]');
        const $successAlert = $('.request-quote-success');
        const $errorAlert = $('.request-quote-error');

        // Disable submit button
        $submitButton.prop('disabled', true).text('Submitting...');

        // Hide previous messages
        $successAlert.hide();
        $errorAlert.hide();

        // Get form data
        const formData = {
            product_id: $('#quote-product-id').val(),
            product_name: $('#quote-product-name').val(),
            fullname: $('#quote_fullname').val(),
            email: $('#quote_email').val(),
            phone: $('#quote_phone').val(),
            company: $('#quote_company').val(),
            quantity: $('#quote_quantity').val(),
            message: $('#quote_message').val(),
            subject: `Quote Request for Product: ${$('#quote-product-name').val()}`,
        };

        // Send to contact form endpoint
        const contactUrl = '/contact-us.php';

        // Create form data string for submission
        const formDataString = $.param({
            'action': 'send_contact',
            'contact_fullname': formData.fullname,
            'contact_email': formData.email,
            'contact_phone': formData.phone,
            'contact_companyname': formData.company,
            'contact_question': `Product Quote Request\n\nProduct ID: ${formData.product_id}\nProduct Name: ${formData.product_name}\nQuantity: ${formData.quantity}\n\nMessage:\n${formData.message}`,
        });

        // Submit via AJAX
        $.ajax({
            url: contactUrl,
            method: 'POST',
            data: formDataString,
            success: (response) => {
                // Show success message
                $successAlert.show();

                // Reset form
                $form[0].reset();

                // Close modal after 2 seconds
                setTimeout(() => {
                    $('#request-quote-modal').foundation('reveal', 'close');
                    $successAlert.hide();
                }, 2000);
            },
            error: (xhr, status, error) => {
                // Show error message
                $errorAlert.find('.alertBox-message').text('Sorry, there was an error submitting your request. Please try again or contact us directly.');
                $errorAlert.show();
            },
            complete: () => {
                // Re-enable submit button
                $submitButton.prop('disabled', false).text('Submit Request');
            },
        });
    }
}
