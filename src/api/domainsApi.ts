import {Domain} from "../types/Domain";

export const findAll =
    () => new Promise<Array<Domain>>(resolve => resolve([new Domain("ldsoftware.it", "LDSoftware", "icon")]))
