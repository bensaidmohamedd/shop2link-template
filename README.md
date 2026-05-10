# Shop2Link Storefront

A production-ready React + Vite ecommerce storefront template for dynamic merchant pages.

## Stack

- React + Vite
- Tailwind CSS
- shadcn/ui component patterns
- lucide-react
- Zustand
- React Router
- Supabase JS client

## Routes

- `/shop/demo-store`
- `/shop/nike-store`
- `/shop/my-fashion-shop`

When Supabase env vars are not configured, the app uses polished mock shop data so the template can run immediately.

## Supabase Tables

`shops`

- `id`
- `shop_name`
- `shop_slug`
- `logo_url`
- `description`
- `phone_number`

`products`

- `id`
- `shop_id`
- `name`
- `price`
- `image_url`
- `description`
- `in_stock`

## Setup

```bash
npm install
npm run dev
```
