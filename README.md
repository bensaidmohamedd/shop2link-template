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

- `/demo-store`
- `/nike-store`
- `/my-fashion-shop`

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
- `product_name`
- `product_description`
- `price`
- `currency`
- `category`
- `image_1`
- `image_2`
- `stock`

## Setup

```bash
npm install
npm run dev
```
