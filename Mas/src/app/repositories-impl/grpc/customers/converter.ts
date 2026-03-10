import {
  CustomersBill,
  CustomersCrmBill,
} from 'grpc-web-client-gen/Customers_pb';
import { MasDateTime } from 'grpc-web-client-gen/date_pb';

export const FormDateTime = (obj: MasDateTime.AsObject) => {
  if (!obj?.datetime) return undefined;
  const req = new MasDateTime();
  req.setDatetime(obj.datetime!);
  return req;
};

export const FormCustomerCrm = (obj: CustomersCrmBill.AsObject) => {
  const req = new CustomersCrmBill();
  req.setAmount(obj.amount!);
  req.setBillgroup(obj.billgroup!);
  req.setBookNo(obj.bookNo!);
  req.setCustkey(obj.custkey!);
  req.setHasMobileno(obj.hasMobileno!);
  req.setLastNotifyDate(FormDateTime(obj.lastNotifyDate!));
  req.setMobileno(obj.mobileno!);
  req.setPaymentOrderNo(obj.paymentOrderNo!);
  req.setSurname(obj.surname!);
  return req;
};
export const FormCustomerSms = (obj: CustomersBill.AsObject) => {
  const req = new CustomersBill();
  req.setTotalAmount(obj.totalAmount!);
  req.setBillgroup(obj.billgroup!);
  req.setBookNo(obj.bookNo!);
  req.setCustkey(obj.custkey!);
  req.setHasMobileno(obj.hasMobileno!);
  req.setLastNotifyDate(FormDateTime(obj.lastNotifyDate!));
  req.setMobileno(obj.mobileno!);
  req.setSurname(obj.surname!);
  req.setCtype(obj.ctype!);
  req.setLastBillDate(FormDateTime(obj.lastBillDate!));
  req.setLastCollectionDate(FormDateTime(obj.lastCollectionDate!));
  req.setTotalCount(obj.totalCount!);
  return req;
};
