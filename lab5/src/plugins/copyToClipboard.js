export default {
    install: (app) => {

        const copyToClipboard = async (text) => {
            try {
                await navigator.clipboard.writeText(text);
                console.log('Text copied:', text);
                return true;
            } catch (err) {
                console.error('Failed to copy:', err);
                return false;
            }
        };

        app.provide('copyToClipboard', copyToClipboard);

        app.config.globalProperties.$copyToClipboard = copyToClipboard;
    }
};
