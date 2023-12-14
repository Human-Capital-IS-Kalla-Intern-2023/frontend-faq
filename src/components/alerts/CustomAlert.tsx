// Import Library & Package
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import {
  CustomAlertProps,
  ConfirmationAlertProps,
  ConfirmationAlert,
} from '../../state/types/AlertType';

const ErrorAlert: React.FC<CustomAlertProps> = ({ title, text, timer }) => {
  const defaultTimer = 20000;

  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      timer: timer || defaultTimer,
    });
  }, [title, text, timer]);

  return null;
};

const SuccessAlert: React.FC<CustomAlertProps> = ({ title, text, timer }) => {
  const defaultTimer = 10000;
  useEffect(() => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      timer: timer || defaultTimer,
    });
  }, [title, text, timer]);

  return null;
};

const WarningAlert: React.FC<CustomAlertProps> = ({ title, text, timer }) => {
  const defaultTimer = 15000;

  useEffect(() => {
    Swal.fire({
      icon: 'warning',
      title: title,
      timer: timer || defaultTimer,
      text: text,
    });
  }, [title, text, timer]);

  return null;
};

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({
  title,
  text,
  html,
  timer,
  onConfirm,
  confirmButtonText,
}) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    html: html,
    timer: timer,

    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: confirmButtonText,
    backdrop: true,
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });

  return null;
};

const DeleteConfirmationAlert: React.FC<ConfirmationAlert> = ({
  title,
  text,
  detail,
  onConfirm,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DA4445',
    cancelButtonColor: '#8388A4',
    confirmButtonText: 'Yes, delete it!',
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire('Deleted!', detail, 'success');
    }
  });

  return null;
};

const CancelConfirmationAlert: React.FC<ConfirmationAlert> = ({
  title,
  text,
  detail,
  onConfirm,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DA4445',
    cancelButtonColor: '#8388A4',
    confirmButtonText: 'Yes, cancel it!',
  }).then((result: any) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire('Cancelled!', detail, 'info');
    }
  });

  return null;
};

export {
  ErrorAlert,
  SuccessAlert,
  WarningAlert,
  ConfirmationAlert,
  DeleteConfirmationAlert,
  CancelConfirmationAlert,
};
