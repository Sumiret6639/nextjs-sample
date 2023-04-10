## 說明（Next.js 官方說明在下面）

> Node.js v.18.12.1

**本專案為範例，包含以下部分：**

- 陽春路由驗證 + 轉址（auth.ts）
- 404 錯誤頁面(\_error.tsx)
- Axios（API request、response 管理）
- Bootstrap（沒有裝 react-bootstrap；需要自訂 Guideline 時直接覆蓋 Bootstrap 的 scss）
- React-hook-form（表單工具）
- Redux-toolkit（儲存登入資訊、角色權限等全域狀態）
- Redux-persist（Redux-toolkit 持久化）
- 打包靜態網頁（next export）

**不包含以下部分（有些地方可能出錯）：**

- 實際串接 API
- 環境設定檔（.env）
- 註解掉的程式碼（僅供參考）

**預計加入但還沒實踐：**

- SWR （API loading 狀態、輪詢、cache 等方面的處理）
- 登出後清空 store 和 persist
- unit test with Jest

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
