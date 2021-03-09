
export function KeyDown(keycode : string, method) {

    window.addEventListener("keydown", event => {
        event.preventDefault();

        if (event.isComposing || event.code === keycode) {
            method();
        }
    });
}


export function KeyUp(keycode : string, method) {

    window.addEventListener("keyup", event => {
        event.preventDefault();

        if (event.isComposing || event.code === keycode) {
            method();
        }
    });
}

