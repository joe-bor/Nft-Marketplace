![New Order Page](https://i.imgur.com/33mKZZn.png)

# **NFT MarkETHplace**

- A fullstack web app that allows user to login (via a form or MetaMask Wallet) add their favorite NFTs to cart, and checkout. Shows you the current cryptocurrency prices using coin gecko api.

- Tech stack: `MongoDB, Express, React, Node.js`

- Utilizes a built in full `CRUD`, `RESTful API` secured by `Json Web Tokens` and `bcrypt` for hashing sensitive information

---

This web app is built on top of [Big Poppa Code React Starter Kit](https://www.npmjs.com/package/big-poppa-code-react-starter), a custom framework:

- created for new Web Developers that want to get started with react.

- Most people use a CLI Tool like Vue-Cli or Create React App and no idea what these things are doing

- The goal of this is for it to be a tool that let's you learn JS at a new level because you have access to
everything under the hood and no opinionated set up



## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Create a .env file**
```
MONGO_URI=
ACCESS_TOKEN_SECRET=
SECRET=
```

**Seed your database**
```bash
npm run seed
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```
