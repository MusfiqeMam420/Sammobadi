This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## VPS deployment with GitHub

The repository includes a PM2 configuration and a GitHub Actions workflow. The workflow deploys every push to `main`.

### One-time VPS setup

On an Ubuntu VPS, install Node.js 20+, Git, and PM2, then run:

```bash
sudo mkdir -p /var/www/sammobadi
sudo chown -R "$USER":"$USER" /var/www/sammobadi
git clone https://github.com/MusfiqeMam420/Sammobadi.git /var/www/sammobadi
cd /var/www/sammobadi
npm ci
cp .env.example .env.local
nano .env.local
npm run build
npm install --global pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Set the email values in `/var/www/sammobadi/.env.local`. Never commit that file.

### GitHub Actions secrets

In the repository settings, add `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, and optionally `VPS_PORT`. The SSH key must be authorized in the VPS user's `~/.ssh/authorized_keys` file. After that, every push to `main` runs lint, builds the app, and reloads PM2.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
