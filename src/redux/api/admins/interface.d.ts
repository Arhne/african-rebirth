interface ILogin {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  id: string;
  firstname: string;
  image: string;
  qrcode: string;
  email: string;
  type: string;
  status: string;
  lastname: string;
  inAttendance: boolean;
  
}
