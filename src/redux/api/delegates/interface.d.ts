interface IDelegatesPayload {
  firstname: string;
  lastname: string;
  passport: string;
  itineraryPlan: string;
  email?: string;
}

interface IDelegates {
  id: string;
  firstname: string;
  passport: string;
  qrcode: string;
  email: string;
  type: string;
  itineraryPlan: string;
  lastname: string;
  inAttendance: boolean;

}