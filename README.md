# try_reactjs

Typescriptでractjsのtutorialをやった。

```bash
git clone https://github.com/say3no/try_reactjs
cd try_reactjs
npm install
npm run build
docker build -t say3no/try_reactjs .
docker run -p 5000:5000 --rm --name try_reactjs say3no/try_reactjs
```