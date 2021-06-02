interface Response {
  token: string;
  user: {
    email: string;
    senha: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jdhuksdhfkuhsfhrhfireflequwhhfihfiqerwhrfiurhwgfirhf',
        user: {
          name: 'Douglas',
          email: 'dougfpolis@hotmail.com'
        }
      })
    }, 2000);
  });
}