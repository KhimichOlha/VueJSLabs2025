<script setup>
import { reactive, inject } from 'vue';
import { useToast } from 'primevue/usetoast';

// Компоненти PrimeVue
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Card from 'primevue/card';

const toast = useToast();
// Інжектимо наш плагін копіювання
const copyToClipboard = inject('copyToClipboard');

// Стан форми
const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
});

// Стан помилок (для підсвічування полів)
const errors = reactive({
    name: false,
    email: false,
    message: false,
    agreement: false
});

// Функція валідації
const validateForm = () => {
    let isValid = true;

    // Скидаємо помилки перед перевіркою
    Object.keys(errors).forEach(key => errors[key] = false);

    // Перевірка Імені
    if (!form.name.trim()) {
        errors.name = true;
        isValid = false;
    }

    // Перевірка Email (простий regex + перевірка на пусте)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
        errors.email = true;
        isValid = false;
    }

    // Перевірка Повідомлення
    if (!form.message.trim()) {
        errors.message = true;
        isValid = false;
    }

    // Перевірка Чекбокса
    if (!form.agreement) {
        errors.agreement = true;
        isValid = false;
    }

    return isValid;
};

// Обробка відправки форми
const submitForm = () => {
    if (validateForm()) {
        // Якщо успіх (імітація відправки)
        console.log('Form Data:', form);
        
        toast.add({ 
            severity: 'success', 
            summary: 'Заявку надіслано', 
            detail: 'Ми зв\'яжемося з вами найближчим часом', 
            life: 3000 
        });

        // Очищення форми
        form.name = '';
        form.email = '';
        form.phone = '';
        form.message = '';
        form.agreement = false;
    } else {
        // Якщо є помилки
        toast.add({ 
            severity: 'error', 
            summary: 'Помилка', 
            detail: 'Перевірте правильність заповнення полів', 
            life: 3000 
        });
    }
};

// Сценарій №2 для плагіна: Копіювання Email підтримки
const supportEmail = 'support@bugtracker.pro';
const copyEmail = async () => {
    const result = await copyToClipboard(supportEmail);
    if (result) {
        toast.add({ severity: 'success', summary: 'Скопійовано', detail: 'Email адреса в буфері', life: 3000 });
    }
};
</script>

<template>
    <section class="contact-section">
        <div class="grid-container">
            <div class="contact-info">
                <h2>Маєте запитання?</h2>
                <p>Заповніть форму, щоб отримати демо-доступ або консультацію щодо впровадження BugTracker у вашу компанію.</p>
                
                <div class="info-block">
                    <h3>Наші контакти</h3>
                    <div class="email-copy-row">
                        <i class="pi pi-envelope"></i>
                        <span>{{ supportEmail }}</span>
                        <Button 
                            icon="pi pi-copy" 
                            text 
                            rounded 
                            aria-label="Copy Email" 
                            @click="copyEmail"
                        />
                    </div>
                </div>
            </div>


            <div class="form-wrapper">
                <Card>
                    <template #title>Отримати демо</template>
                    <template #content>
                        <form @submit.prevent="submitForm" class="flex flex-col gap-4">
                            
                            <div class="field">
                                <label for="name">Ваше ім'я *</label>
                                <InputText 
                                    id="name" 
                                    v-model="form.name" 
                                    :invalid="errors.name" 
                                    placeholder="Іван Іваненко"
                                    class="w-full"
                                />
                                <small v-if="errors.name" class="error-text">Вкажіть ім'я</small>
                            </div>

                            <div class="field">
                                <label for="email">Email *</label>
                                <InputText 
                                    id="email" 
                                    v-model="form.email" 
                                    :invalid="errors.email" 
                                    placeholder="ivan@company.com"
                                    class="w-full"
                                />
                                <small v-if="errors.email" class="error-text">Введіть коректний email</small>
                            </div>

                            <div class="field">
                                <label for="phone">Телефон</label>
                                <InputMask 
                                    id="phone" 
                                    v-model="form.phone" 
                                    mask="+38 (999) 999-99-99" 
                                    placeholder="+38 (099) 999-99-99"
                                    class="w-full"
                                />
                            </div>

                            <div class="field">
                                <label for="message">Повідомлення *</label>
                                <Textarea 
                                    id="message" 
                                    v-model="form.message" 
                                    :invalid="errors.message" 
                                    rows="5" 
                                    autoResize 
                                    class="w-full"
                                />
                                <small v-if="errors.message" class="error-text">Напишіть повідомлення</small>
                            </div>

                            <div class="field-checkbox">
                                <Checkbox 
                                    v-model="form.agreement" 
                                    :invalid="errors.agreement" 
                                    binary 
                                    inputId="agree" 
                                />
                                <label for="agree" :class="{'text-error': errors.agreement}">
                                    Я погоджуюсь з політикою конфіденційності *
                                </label>
                            </div>

                            <Button type="submit" label="Надіслати" class="w-full mt-2" />
                        </form>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 4rem 0;
    background-color: var(--p-surface-50);
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-info h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.info-block {
    margin-top: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    border-left: 4px solid var(--p-primary-color);
}


.email-copy-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.w-full {
    width: 100%;
}

.error-text {
    color: var(--p-red-500);
    font-size: 0.875rem;
}

.field-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
}

.text-error {
    color: var(--p-red-500);
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>
