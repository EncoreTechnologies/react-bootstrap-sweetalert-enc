import PropTypes from "prop-types";
import { SweetAlertPropsTypes } from "./types";

export const SWEET_ALERT_PROP_TYPES: SweetAlertPropsTypes = {
  type: PropTypes.oneOf(["default", "info", "success", "warning", "danger", "error", "input", "custom", "controlled"]),

  // shortcut props for type
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  error: PropTypes.bool,
  input: PropTypes.bool,
  custom: PropTypes.bool,
  controlled: PropTypes.bool,

  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  confirmBtnText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  confirmBtnBsStyle: PropTypes.string,
  confirmBtnCssClass: PropTypes.string,
  confirmBtnStyle: PropTypes.object,
  cancelBtnText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  cancelBtnBsStyle: PropTypes.string,
  cancelBtnCssClass: PropTypes.string,
  cancelBtnStyle: PropTypes.object,
  btnSize: PropTypes.string,
  customIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  show: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  validationMsg: PropTypes.string,
  validationRegex: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputType: PropTypes.string,
  style: PropTypes.object,
  closeBtnStyle: PropTypes.object,
  customClass: PropTypes.string,
  showConfirm: PropTypes.bool,
  showCancel: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  allowEscape: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  disabled: PropTypes.bool,
  focusConfirmBtn: PropTypes.bool,
  focusCancelBtn: PropTypes.bool,
  beforeMount: PropTypes.func,
  afterMount: PropTypes.func,
  beforeUpdate: PropTypes.func,
  afterUpdate: PropTypes.func,
  beforeUnmount: PropTypes.func,
  timeout: PropTypes.number,
  openAnim: PropTypes.any,
  closeAnim: PropTypes.any,
  reverseButtons: PropTypes.bool,
  customButtons: PropTypes.node,
  dependencies: PropTypes.arrayOf(PropTypes.any),
};