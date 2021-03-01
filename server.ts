import App from './src/app';
const PORT = process.env.PORT||4040;

const app = new App().app;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});