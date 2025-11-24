<script setup>
import Carousel from 'primevue/carousel';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


const testimonials = [
    { name: 'Олексій', role: 'Senior Dev', text: 'Це змінило наш процес QA назавжди.', image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png' },
    { name: 'Марія', role: 'PM', text: 'Нарешті я бачу, хто чим зайнятий.', image: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png' },
    { name: 'Команда Startup', role: 'Users', text: 'Безкоштовного плану вистачає з головою!', image: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png' }
];


const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
];
</script>

<template>
    <section class="social-proof">
        <h2 class="section-header">Що кажуть клієнти</h2>
        <Carousel :value="testimonials" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="testimonial-card">
                    <div class="mb-3">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="avatar" />
                    </div>
                    <div class="content">
                        <p class="m-0">"{{ slotProps.data.text }}"</p>
                        <h4 class="mt-2">{{ slotProps.data.name }}</h4>
                        <span class="role">{{ slotProps.data.role }}</span>
                    </div>
                </div>
            </template>
        </Carousel>

        <div class="faq-section">
            <h2 class="section-header">Часті запитання (FAQ)</h2>
            <Accordion value="0">
                <AccordionPanel value="0">
                    <AccordionHeader>Чи є безкоштовний період?</AccordionHeader>
                    <AccordionContent>
                        Так, у нас є план Starter, який назавжди безкоштовний для маленьких команд до 2 осіб.
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Чи можу я скасувати підписку?</AccordionHeader>
                    <AccordionContent>
                        У будь-який момент в особистому кабінеті. Ніяких прихованих платежів.
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Чи безпечні мої дані?</AccordionHeader>
                    <AccordionContent>
                        Ми використовуємо AES-256 шифрування. Ваші баги — це ваша комерційна таємниця.
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </section>
</template>

<style scoped>
.social-proof { padding: 4rem 0; }
.section-header { text-align: center; margin-bottom: 2rem; font-size: 2rem; }

.testimonial-card {
    border: 1px solid var(--p-surface-200);
    padding: 2rem;
    margin: 1rem;
    border-radius: 10px;
    text-align: center;
    background: var(--p-surface-50);
}
.avatar { width: 60px; border-radius: 50%; }
.role { color: var(--p-text-muted-color); font-size: 0.9rem; }


.faq-section { max-width: 800px; margin: 4rem auto 0; }
</style>
