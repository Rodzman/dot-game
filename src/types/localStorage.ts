export type localStorageEffectArgs = {
    setSelf: (value: any) => void;
    onSet: (callback: (newValue: any, _: any, oldValue: any) => void) => void;
}