import App from './src/app';
const PORT = process.env.PORT;

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});