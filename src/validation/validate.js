import * as yup from "yup";

let schema = yup.object().shape({
  document_type: yup.string().required(),
  supplier_country_code: yup.string().length(2),
  supplier_corporate_id: yup.number().positive(),
  total_incl_vat: yup.number().positive(),
  total_vat: yup.number().positive(),
  total_excl_vat: yup.number().positive(),
  currency: yup.string().length(3),
  payment_method: yup.mixed().oneOf(["CreditCard", "Cash"]),
  credit_card_last_four: yup.string().length(4),
  invoice_number: yup.string(),
  ocr_line_dk_type: yup.number().positive(),
  ocr_line_dk_payment_id: yup.number().positive(),
  ocr_line_dk_creditor_id: yup.number().positive(),
  ocr_line_se_payment_id: yup.number().positive(),
  ocr_line_se_plusgiro_creditor_id: yup.number().positive(),
  ocr_line_se_bankgiro_creditor_id: yup.number().positive(),
  ocr_line_no_payment_id: yup.number().positive(),
  ocr_line_fi_payment_id: yup.number().positive()
});

function validateField(value, field) {
  const fieldSchema = yup.reach(schema, field);
  return fieldSchema.isValidSync(value);
}

function validate(values) {
  return schema.isValidSync(values);
}

function fieldErrorMsgs(field) {
  const msgs = {
    supplier_country_code: "Must be 2 letters (eg.: DK)",
    supplier_corporate_id: "Must be a positive number",
    total_incl_vat: "Must be a positive number",
    total_vat: "Must be a positive number",
    total_excl_vat: "Must be a positive number",
    currency: "Must be 3 letters (eg.: DKK)",
    payment_method: "Must be either CreditCard or Cash",
    credit_card_last_four: "Must be 4 digits",
    ocr_line_dk_type: "Must be a positive number",
    ocr_line_dk_payment_id: "Must be a positive number",
    ocr_line_dk_creditor_id: "Must be a positive number",
    ocr_line_se_payment_id: "Must be a positive number",
    ocr_line_se_plusgiro_creditor_id: "Must be a positive number",
    ocr_line_se_bankgiro_creditor_id: "Must be a positive number",
    ocr_line_no_payment_id: "Must be a positive number",
    ocr_line_fi_payment_id: "Must be a positive number"
  };
  return msgs[field];
}

export { validateField, validate, fieldErrorMsgs };
