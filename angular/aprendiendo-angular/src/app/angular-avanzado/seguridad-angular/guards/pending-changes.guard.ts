import { CanDeactivateFn } from "@angular/router";
import { CanComponentDeactivate } from "./edicion/edicion.component";

export const pendingChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate
) => {
    // Si el componente tiene un método canDeactivate y tiene cambios pendientes
    if (component.canDeactivate) {
    return component.canDeactivate();
    }

    return true; // Si no hay método canDeactivate o no hay cambios, permite la salida
};
