import Swal from 'sweetalert2';

interface IProps {
  title: string;
  text: string;
  icon: 'success' | 'error';
}

const Alert = ({ title, text, icon }: IProps) => {
  Swal.fire({ position: 'top-end', title, text, icon, toast: true, showConfirmButton: false, timer: 5000, timerProgressBar: true });
};

export default Alert;
