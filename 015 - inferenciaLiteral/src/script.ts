function makeReq(url: string, method: 'GET' | 'POST') {
  //......
}

type RequestDetails = {
  url: string,
  method: 'GET' | 'POST'
}

let req: RequestDetails = { url: 'http://google.com', method: 'GET' };

makeReq(req.url, req.method);
