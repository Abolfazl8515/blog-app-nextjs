import setCookieOnReq from "./setCookieOnReq";

export default async function middleWareAuth(req) {
  const options = setCookieOnReq(req.cookies);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    options
  );
  const { data } = await res.json();
  const { user } = data || {};
  return user;
}
