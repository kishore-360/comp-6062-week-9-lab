console.log('js loaded!');
const app = Vue.createApp({
                data()
                {
                    return{
                        greetings: 'Welcome to Vue.js!',
                        message: 'This message is displayed based on a boolean property',
                        showMessage: true
                    };
                }
            });
app.mount('#app');