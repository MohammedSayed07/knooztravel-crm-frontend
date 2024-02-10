import swal from "sweetalert2";

export function useFlash() {
    function flash(title, message = '', level = 'success') {
        swal.fire({
            title: title,
            text: message,
            icon: level,
        })
    }

    return { flash };
}