import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>查無此頁</h1>

        <Link href="/home" passHref>
          <a role="button" className="btn btn-link btn-lg">
            返回首頁
          </a>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
