export class Types {
  static GET = 1;

  static POST = 2;

  static MULTIPART = 3;
}

export class Request {
  url = undefined;

  type = Types.GET;

  payload = undefined;

  tag = undefined;

  headers = undefined;
}
